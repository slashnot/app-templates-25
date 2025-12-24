import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/AppLayout/AppLayout.jsx", [
        index("pages/HomePage.jsx"),
    ]),
    route('auth',"layouts/AuthLayout/AuthLayout.jsx", [
        index("pages/LoginPage.jsx"),
    ]),
];
