const http = require('http');
const express = require('express');
const userRoute = require('./routes/user.route');
const categoryRouter = require('./routes/category.route');
const { notFound, globalErrHandler } = require('./middlewares/globalErrorHandler');
require('./config/database')();

// Server
const app = express();
app.use(express.json());
// Routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/categories', categoryRouter);
// ?Not Found middleware
app.use(notFound);
// ! Error middleware
app.use(globalErrHandler);

const server = http.createServer(app);

const PORT = process.env.PORT || 9000;
server.listen(PORT, console.log(`Server is running on the port ${PORT}`));