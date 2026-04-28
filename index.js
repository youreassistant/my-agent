import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Agent läuft!");
});

app.post("/webhook/friseur-agent", async (req, res) => {
  console.log("Webhook received:", req.body);

  res.status(200).json({
    tool: {
      name: "create_appointment",
      arguments: req.body
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server läuft auf Port", process.env.PORT || 3000);
});
