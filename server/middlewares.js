import jwt from 'jsonwebtoken';

export const authenticationMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.json({ error: 'Token not found' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, token) => {
    if (error) {
      res.status(500).json({ error: 'Invalid token' });
    } else {
      req.username = token.username;
      next();
    }
  });
};
