// authMiddleware.js
const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
      return next();
    }
    res.status(401).json({ error: 'Unauthorized' });
  };
  
  module.exports = { isAdmin };
  