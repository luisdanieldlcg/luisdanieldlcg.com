import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
        </Route>
    )
);
export default router;
