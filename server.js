const http = require('http');
const express = require('express');
const userRoute = require('./routes/user.route');
require('./config/database')();

// Server
const app = express();
app.use(express.json());
// Routes
app.use('/api/v1/users', userRoute);
// ?Not Found middleware
app.use((req, res, next) => {
    const err = new Error(`Cannot find ${req.originalUrl} on the server`);
    next(err);
});
// ! Error middleware
app.use((err, req, res, next) => {
    // Status
    const status = err?.status ? err.status : 'failed';
    // Message
    const message = err?.message;
    // Stack
    const stack = err?.stack;
    res.status(500).json({
        status,
        message,
        stack
    });
});

const server = http.createServer(app);

const PORT = process.env.PORT || 9000;
server.listen(PORT, console.log(`Server is running on the port ${PORT}`));