import { tagMap } from "../../data";
import { Project, ProjectTag } from "../../types/project";

const API_URL = "https://api.github.com/search/repositories";
const CONTENT_URL = "https://raw.githubusercontent.com";
import { githubUsername } from "../../../config.json";

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
            `${CONTENT_URL}/${githubUsername}/${repo}/${branch}/${filename}`
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
    const res = await fetch(
        `${API_URL}?q=user:${githubUsername}+topic:showcase&per_page=100`,
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
                `${githubUsername}/${repo.name}/${repo.default_branch}/` +
                (md?.images[0] ?? ""),

            tags,
            httpLink: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
        } as Project;
    });
    return Promise.all(projects);
};
