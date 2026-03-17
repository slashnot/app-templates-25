import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

// API route
app.get("/api", (req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString()
    });
});

// Start server
if (import.meta.env.PROD) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export const viteNodeApp = app;
export default app;
