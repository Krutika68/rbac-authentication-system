const checkRole = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (userRole !== requiredRole) {
            return res.status(403).json({ message: 'Access forbidden: Insufficient role' });
        }
        next();
    };
};

module.exports = checkRole;
