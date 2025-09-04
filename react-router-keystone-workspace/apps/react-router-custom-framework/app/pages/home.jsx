import React from "react";
import { Button } from '@mantine/core';

// ------------------------
// Home Component
// ------------------------
export function meta() {
  return [
    { title: "React Router Mantine" },
    { name: "description", content: "Welcome to React Router Mantine!" },
  ];
}
// -------- x --------

export default function Home({loaderData}) {
  console.log("Home loaderData:", loaderData);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className=" bg-indigo-50/10 p-16 rounded-2xl border border-indigo-200/75 shadow-md shadow-indigo-300/20">
        <h1 className="text-4xl text-indigo-500 font-semibold">Welcome to React Router 7</h1>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="light" radius="md">Learn More</Button>
          <Button variant="filled-shadow" radius="md">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
