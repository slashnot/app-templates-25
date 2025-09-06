// Custom framework routes configuration
import App from "./root";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/about/About";
import { getLoader } from "@app/custom-admin/utils/api";

export default [
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: AppLayout,
                children: [
                    {
                        index: true,
                        Component: HomePage,
                        loader: ({ context }) => getLoader({ resource: "Post", context }),
                    },
                    {
                        path: "about",
                        Component: About,
                    },
                ],
            },
        ],
    },
];
