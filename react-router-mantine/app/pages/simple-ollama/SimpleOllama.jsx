
// ------------------------
// Simple Ollama Component
// ------------------------
export function meta() {
  return [
    { title: "Simple Ollama" },
    { name: "description", content: "Welcome to Simple Ollama!" },
  ];
}
// -------- x --------

const SimpleOllama = ()=>{
    return (
        <div className="SimpleOllama">
           <h1 className="text-2xl font-semibold text-indigo-500">Simple Ollama</h1>
        </div>
    )
}
// -------- x --------

export { SimpleOllama }
export default SimpleOllama