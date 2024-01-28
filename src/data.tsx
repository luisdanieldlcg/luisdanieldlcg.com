import { Project } from "./components/ProjectCard";
import {
    TbBrandFirebase,
    TbBrandFlutter,
    TbBrandTypescript,
} from "react-icons/tb";
import { FaRust, FaVuejs } from "react-icons/fa";
import {
    SiDart,
    SiNuxtdotjs,
    SiNestjs,
    SiMongodb,
    SiVuetify,
} from "react-icons/si";

export const featuredProjects: Project[] = [
    {
        title: "Explora",
        imageUrl:
            "https://github.com/DanikingRD/VoxelExperiment/raw/main/assets/game-screenshot.png",
        desc: "Explora is a multiplayer Voxel game made with Rust and WGPU. It's still in development, but you can check out the source code on GitHub.",
        tags: [["Rust", <FaRust />, "orange"]],
    },

    {
        title: "WhatsUp",
        imageUrl:
            "https://i.pinimg.com/736x/c5/41/53/c541531b152dc59e6f41899d7b2e4895.jpg",
        desc: "WhatsUp is a WhatsApp clone built with Flutter and Firebase. It aims to replicate some of its core features but its main purpose is to showcase how easy it is to build real-time applications with Flutter and Firebase.",
        tags: [
            ["Dart", <SiDart />, "blue"],
            ["Flutter", <TbBrandFlutter />, "blue"],
            ["Firebase", <TbBrandFirebase />, "yellow"],
        ],
    },
    {
        title: "Nappy",
        imageUrl:
            "https://github.com/DanikingRD/nappy-web/raw/main/misc/create_profile.png",
        desc: "A CMS for creating and managing digital business cards.",
        tags: [
            ["Typescript", <TbBrandTypescript />, "blue"],
            ["Vue", <FaVuejs />, "green"],
            ["Vuetify", <SiVuetify />, "blue"],
            ["Nuxt", <SiNuxtdotjs />, "green"],
            ["NestJS", <SiNestjs />, "red"],
            ["MongoDB", <SiMongodb />, "green"],
        ],
    },
];
