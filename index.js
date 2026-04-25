import express from "express";

const app = express();
app.use(express.json());

// GET Route für Browser & Railway Health Check
app.get("/", (req, res) => {
  res.send("Agent läuft!");
});

// POST Route für deinen Agent
app.post("/", async (req, res) => {
  console.log("Webhook received:", req.body);
  res.json({ reply: "Agent läuft erfolgreich auf Railway!" });
});

// Server starten
app.listen(process.env.PORT || 3000, () => {
  console.log("Server läuft auf Port", process.env.PORT || 3000);
});
