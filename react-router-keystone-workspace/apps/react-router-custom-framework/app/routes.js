// Custom framework routes configuration
import App from "./root";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/about/About";

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
                        loader: async ({ context }) => {
                            const { db } = context;
                            const posts = await db.Post.findMany();
                            return { posts };
                        },
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
