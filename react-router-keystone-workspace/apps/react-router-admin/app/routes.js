import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/AppLayout.jsx", [
        index("pages/home.jsx"),
        route("about","pages/about/About.jsx")
    ])
];
