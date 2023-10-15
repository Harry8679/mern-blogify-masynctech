const http = require('http');
const express = require('express');

// Server
const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 9000;
server.listen(PORT, console.log(`Server is running on the port ${PORT}`));