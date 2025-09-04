import { Button } from '@mantine/core';

// ------------------------
// Home Component
// ------------------------
export function meta() {
  return [
    { title: "LLM Langchain Tests" },
    { name: "description", content: "Welcome to LLM Langchain Tests!" },
  ];
}
// -------- x --------

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className=" bg-indigo-50/10 p-16 rounded-2xl border border-indigo-200/75 shadow-md shadow-indigo-300/20">
        <h1 className="text-4xl text-indigo-500 font-semibold">Welcome to Langchain LLM Projects in React Router 7</h1>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="light" radius="md">Learn More</Button>
          <Button variant="filled" radius="md" className="shadow-lg shadow-indigo-200">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
