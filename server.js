// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from your frontend (GitHub Pages)

// Endpoint to fetch commodities from UEX API
app.get("/commodities", async (req, res) => {
  try {
    const response = await fetch("https://uexcorp.space/api/commodities", {
      headers: {
        "Authorization": `Bearer ${process.env.UEX_API_KEY}`, // UEX key from env var
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch commodities from UEX" });
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("Error fetching UEX commodities:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`UEX backend running on port ${PORT}`);
});
