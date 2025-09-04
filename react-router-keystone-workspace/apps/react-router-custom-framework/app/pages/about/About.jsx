
import React from "react";

// ------------------------
// About Component
// ------------------------
export function meta() {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to About Page!" },
  ];
}
// -------- x --------

const About = ()=>{
    return (
        <div className="About">
           <h1 className="text-2xl font-semibold text-indigo-500">About</h1>
        </div>
    )
}
// -------- x --------

export { About }
export default About