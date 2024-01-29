import { tagMap } from "../../data";
import { Project, ProjectTag } from "../../types/project";

const API_URL = "https://api.github.com";
const CONTENT_URL = "https://raw.githubusercontent.com";

type Repository = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    language: string;
    default_branch: string;
};

type Markdown = {
    rawText: string;
    images: string[];
};

const fetchContent = async (
    repo: string,
    branch: string,
    filename: string
): Promise<Markdown | null> => {
    try {
        const res = await fetch(
            `${CONTENT_URL}/danikingrd/${repo}/${branch}/${filename}`
        );

        if (res.status !== 200) {
            return null;
        }

        const text = await res.text();
        const images = text.match(/!\[.*?\]\((.*?)\)/g)?.map((match) => {
            return match.match(/!\[.*?\]\((.*?)\)/)?.[1] ?? "";
        });

        const markdown: Markdown = {
            rawText: text,
            images: images ?? [],
        };

        return markdown;
    } catch (error) {
        return null;
    }
};

export const fetchRepositories = async (
    perPage: number
): Promise<Project[] | null> => {
    const res = await fetch(
        `${API_URL}/users/danikingrd/repos?per_page=${perPage}&page=1`,
        {
            headers: {
                authorization: `token ${process.env.GITHUB_PAT}`,
            },
        }
    );
    if (res.status !== 200) {
        const json = (await res.json()) as {
            documentation_url: string;
            message: string;
        };
        console.error({ error: json });
        return null;
    }

    const repositories = (await res.json()) as Repository[];

    const result = repositories
        .filter((repo) =>
            repo.topics.some((topic) => {
                return tagMap.some((tag) => {
                    return (
                        tag[0].toString().toLocaleLowerCase() ===
                        topic.toLowerCase()
                    );
                });
            })
        )
        .map(async (repo) => {
            const markdown = await fetchContent(
                repo.name,
                repo.default_branch,
                "README.md"
            );
            const tags: ProjectTag[] = [];
            if (repo.topics.length > 0) {
                repo.topics.forEach((language) => {
                    const tag = tagMap.find((tag) => {
                        return (
                            tag[0].toString().toLocaleLowerCase() ===
                            language.toLowerCase()
                        );
                    });
                    if (tag) {
                        tags.push(tag as ProjectTag);
                    }
                });
            }

            const project: Project = {
                title: repo.name,
                desc: repo.description,
                imageUrl:
                    CONTENT_URL +
                    "/danikingrd/" +
                    repo.name +
                    "/" +
                    repo.default_branch +
                    "/" +
                    markdown?.images[0],
                tags: tags,
                httpLink: repo.html_url,
            };

            return project;
        });

    return Promise.all(result);
};
