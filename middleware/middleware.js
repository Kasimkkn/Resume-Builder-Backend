import jwt from 'jsonwebtoken';
import User from '../model/User.js';

export const protect = async (req, res, next) => {
    let token;
    if (req.cookies.token || req.headers.authorization || req.body.token) {
        if (req.cookies.token) {
            token = req.cookies.token;
        }
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1];
        }
    }
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};
