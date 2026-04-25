import express from "express";

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  console.log("Webhook received:", req.body);
  res.json({ reply: "Agent läuft erfolgreich auf Railway!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server läuft auf Port", process.env.PORT || 3000);
});
