export const verifyAdmin = (req, res, next) => {
    const key = req.headers["x-api-key"];
    if (!key || key !== process.env.ADMIN_KEY) {
        return res.status(403).json({message: "Unauthorized: Invalid API key"});
    }
    next();
};