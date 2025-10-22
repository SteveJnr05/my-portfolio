export default function errorHandler(err, req, res) {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        error: {
            message: err.message || "Server error",
            //to shos stack only in development
            ...arguments(process.env.NODE_ENV === "development" ? {stack: err.stack} : {})
        }
    });
}