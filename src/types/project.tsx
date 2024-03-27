// [0] = tag name
// [1] = tag icon
// [2] = tag color
export type ProjectTag = [string, React.ReactNode, string];

export type Project = {
    title: string;
    imageUrl: string;
    desc: string;
    tags: ProjectTag[];
    httpLink: string;
    stars: number;
    forks: number;
};
