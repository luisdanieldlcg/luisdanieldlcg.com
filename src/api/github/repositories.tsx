import { tagMap } from "../../data";
import { Project, ProjectTag } from "../../types/project";

const API_URL = "https://api.github.com/search/repositories";
const CONTENT_URL = "https://raw.githubusercontent.com";
const REPO_OWNER = "luisdanieldlcg";

type Repository = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    language: string;
    default_branch: string;
    stargazers_count: number;
    forks_count: number;
};

type Markdown = {
    rawText: string;
    images: string[];
};

const fetchMarkdown = async (
    repo: string,
    branch: string,
    filename: string
): Promise<Markdown | null> => {
    try {
        const res = await fetch(
            `${CONTENT_URL}/${REPO_OWNER}/${repo}/${branch}/${filename}`
        );

        if (res.status !== 200) {
            return null;
        }

        const text = await res.text();
        // extract all relative + external paths including ./, ../, /, https://, http://, etc
        const regex = /(?:!\[(.*?)\]\((.*?)\)|<img.*?src=['"](.*?)['"].*?>)/g;
        const images = [];

        let match;
        while ((match = regex.exec(text))) {
            images.push(match[2] || match[3]);
        }

        const markdown: Markdown = {
            rawText: text,
            images: images ?? [],
        };

        return markdown;
    } catch (error) {
        return null;
    }
};

export const fetchRepositories = async (): Promise<Project[] | null> => {
    // There is probably something wrong if we need more than 10 pages using the default page size
    // if (page >= 10) return null;
    //  per_page = 30 by default

    // if (res.status !== 200) {
    //     const json = (await res.json()) as {
    //         documentation_url: string;
    //         message: string;
    //     };
    //     console.error({ error: json });
    //     return null;
    // }

    // const repositories = (await res.json()) as Repository[];

    // const result = repositories
    //     .filter((repo) =>
    //         repo.topics.some((topic) => {
    //             return tagMap.some((tag) => {
    //                 return (
    //                     tag[0].toString().toLocaleLowerCase() ===
    //                     topic.toLowerCase()
    //                 );
    //             });
    //         })
    //     )
    //     .map(async (repo) => {
    //         const markdown = await fetchContent(
    //             repo.name,
    //             repo.default_branch,
    //             "README.md"
    //         );
    //         const tags: ProjectTag[] = [];
    //         if (repo.topics.length > 0) {
    //             repo.topics.forEach((language) => {
    //                 const tag = tagMap.find((tag) => {
    //                     return (
    //                         tag[0].toString().toLocaleLowerCase() ===
    //                         language.toLowerCase()
    //                     );
    //                 });
    //                 if (tag) {
    //                     tags.push(tag as ProjectTag);
    //                 }
    //             });
    //         }

    //         const project: Project = {
    //             title: repo.name,
    //             desc: repo.description,
    //             imageUrl:
    //                 CONTENT_URL +
    //                 "/danikingrd/" +
    //                 repo.name +
    //                 "/" +
    //                 repo.default_branch +
    //                 "/" +
    //                 markdown?.images[0], // TODO: use a default image
    //             tags: tags,
    //             httpLink: repo.html_url,
    //         };

    //         return project;
    //     });
    const res = await fetch(
        `${API_URL}?q=user:${REPO_OWNER}+topic:showcase&per_page=100`,
        {
            // headers: {
            //     // authorization: `token ${process.env.GITHUB_PAT}`,
            // },
        }
    );
    const json = await res.json();
    console.log(json);
    const repos = json.items as Repository[];
    if (!repos) {
        return null;
    }
    const projects = repos.map(async (repo) => {
        const md = await fetchMarkdown(
            repo.name,
            repo.default_branch,
            "README.md"
        );
        const tags = [] as ProjectTag[];
        repo.topics.forEach((topic) => {
            const tag = tagMap.find((tag) => {
                return (
                    tag[0].toString().toLocaleLowerCase() ===
                    topic.toLowerCase()
                );
            });

            if (tag) {
                tags.push(tag as ProjectTag);
            }
        });
        return {
            title: repo.name,
            desc: repo.description,
            imageUrl:
                CONTENT_URL +
                "/" +
                `${REPO_OWNER}/${repo.name}/${repo.default_branch}/` +
                (md?.images[0] ?? ""),

            tags,
            httpLink: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
        } as Project;
    });
    return Promise.all(projects);
};
