import React from "react";
import { useLoaderData } from "react-router";
import Home from "./home.jsx";

// ------------------------
// Home Wrapper Component
// ------------------------
const HomePage = () => {
    const data = useLoaderData();
    console.log("HomePage loaderData:", data);

    return (
        <div className="HomePage contents">
            <Home loaderData={data} />
        </div>
    )
}

export { HomePage }
export default HomePage