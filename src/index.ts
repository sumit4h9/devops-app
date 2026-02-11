import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "DevOps pipeline working 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;