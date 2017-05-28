'use strict'

const fs = require('fs');
const http = require('http');
const express = require('express');
const path = require('path');

const config = JSON.parse(fs.readFileSync('./server/config.json'));

const app = express();
const server = http.createServer(app);

app.use(express.static(config.webServer.folder));

server.listen(config.webServer.port, () => console.log(`Running on port: ${config.webServer.port}`));
