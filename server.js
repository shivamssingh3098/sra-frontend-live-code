const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../sra-frontend-server/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../sra-frontend-server/build", "index.html")
  );
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// these bellow cammands for ssl protect

//1// sudo certbot --nginx -d srammrrts.in -d www.srammrrts.in

//2//   cd /etc/letsencrypt/live/example.com/fullchain.pem
//3//   sudo crontab -e
//4//   0 0 * * * /usr/bin/certbot renew --quiet
//5//   sudo certbot renew --dry-run
