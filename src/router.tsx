import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import { featuredProjects } from "./data";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route
                path="/projects"
                element={<Projects projects={featuredProjects} />}
            />
        </Route>
    )
);
export default router;
