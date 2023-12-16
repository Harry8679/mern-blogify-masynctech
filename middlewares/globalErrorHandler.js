const globalErrHandler = (err, req, res, next) => {
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
}

// Not Found Handler
const notFound = (req, res, next) => {
    const err = new Error(`Cannot find ${req.originalUrl} on the server`);
    next(err);
}

module.exports = { globalErrHandler, notFound };