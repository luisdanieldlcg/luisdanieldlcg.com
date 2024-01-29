/// Data ser-de from/to local storage

import { tagMap } from "./data";
import { Project } from "./types/project";

export const writeProjects = (projects: Project[]) => {
    const object = projects.map((project) => ({
        ...project,
        tags: project.tags.map((tag) => tag[0]), // just serialize the tag name
        // we can retrive the other tag info from the tag name
    }));
    localStorage.setItem("projects", JSON.stringify(object));
    localStorage.setItem("projects_timestamp", Date.now().toString());
};

export const readProjects = (): Project[] | null => {
    const projects = localStorage.getItem("projects");
    const timestamp = localStorage.getItem("projects_timestamp");

    if (projects && timestamp) {
        const obj = JSON.parse(projects);
        const time = parseInt(timestamp);
        // check if the data is older than 1 day
        if (Date.now() - time > 24 * 60 * 60 * 1000) {
            return null;
        }

        return obj.map((project: any) => ({
            ...project,
            tags: project.tags.map((tag: string) => {
                return tagMap.find((t) => t[0] === tag) ?? ["", ""];
            }),
        }));
    }
    return null;
};
