const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);

  if (req.url === "/" || req.url === "/index.html") {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(`
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>IoT Peet Feeder - Installation</title>
                            <style>
                                body { font-family: Arial; text-align: center; padding: 50px; }
                                h1 { color: #667eea; }
                                .box { background: #f0f0f0; padding: 30px; border-radius: 10px; display: inline-block; }
                            </style>
                        </head>
                        <body>
                            <div class="box">
                                <h1>🐾 IoT Peet Feeder</h1>
                                <p>Serveur en cours d'exécution sur le port 8000</p>
                                <p>Créez un fichier <strong>index.html</strong> pour voir l'interface</p>
                                <button onclick="location.reload()"> Rafraîchir</button>
                            </div>
                        </body>
                        </html>
                    `);
        } else {
          res.writeHead(500);
          res.end("Erreur serveur");
        }
      } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(content);
      }
    });
  } else if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end();
  } else if (req.url.match(/\.(css|js|png|jpg|svg)$/)) {
    const ext = path.extname(req.url);
    const contentType =
      {
        ".css": "text/css",
        ".js": "application/javascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".svg": "image/svg+xml",
      }[ext] || "text/plain";

    const filePath = path.join(__dirname, req.url);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("Fichier non trouvé");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  } else if (req.url === "/api/feeders" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        feeders: [
          { id: 1, name: "Salon", status: "online", food: 75 },
          { id: 2, name: "Cuisine", status: "online", food: 45 },
        ],
      })
    );
  } else if (req.url.match(/^\/api\/feed\/\d+$/) && req.method === "POST") {
    const id = req.url.split("/")[3];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: `Distribution commandée pour la mangeoire ${id}`,
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page non trouvée");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`
    ╔═══════════════════════════════════════════════════╗
    ║      🐾 IoT PEET FEEDER SERVER 🐾                ║
    ╠═══════════════════════════════════════════════════╣
    ║   Serveur démarré sur le port ${PORT}           ║
    ║   Ouvrez: http://localhost:${PORT}              ║
    ║   Interface: Dashboard intelligent             ║
    ║   API: /api/feeders - /api/feed/{id}          ║
    ╚═══════════════════════════════════════════════════╝
    `);
  console.log("\n Dossier racine:", __dirname);
  console.log(
    " Fichier index.html:",
    fs.existsSync("index.html") ? "✅ Présent" : "❌ Absent"
  );
});
