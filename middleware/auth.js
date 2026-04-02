exports.mockUser = (req, res, next) => {
  req.user = {
    role: req.headers.role || 'viewer',
    isActive: true
  };
  next();
};

exports.authorize = (...roles) => {
  return (req, res, next) => {

    if (!req.user.isActive) {
      return res.status(403).json({ message: "User inactive" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

