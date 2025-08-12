const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow your frontend to access

// Proxy endpoint to fetch commodities from UEX API using user’s key
app.get("/commodities", async (req, res) => {
  // Get user key from custom header "x-api-key"
  const uexKey = req.headers["x-api-key"];
  if (!uexKey) {
    return res.status(400).json({ error: "Missing UEX API key" });
  }

  try {
    const response = await fetch("https://uexcorp.space/api/commodities", {
      headers: {
        "x-api-key": uexKey
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `UEX API error: ${response.statusText}` });
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});