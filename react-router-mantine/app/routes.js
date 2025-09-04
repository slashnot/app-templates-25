import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/AppLayout.jsx", [
        index("pages/home.jsx"),
        route("simple-ollama","pages/simple-ollama/SimpleOllama.jsx")
    ])
];
