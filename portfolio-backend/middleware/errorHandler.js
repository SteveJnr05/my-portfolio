export default function errorHandler(err, req, res, next) {
    console.error(err);

    const status = err.status || 500;

    const response = {
        error: {
            message: err.message || "Server error",
        }
    };

    if (process.env.NODE_ENV === "development") {
        response.error.stack = err.stack;
    }

    res.status(status).json(response);
}
