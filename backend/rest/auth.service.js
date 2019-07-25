import compose from 'composable-middleware';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import config from './../config';

import { User, Admin } from './../models';

const validateJwt = expressJwt({ secret: config.SECRETS.SESSION });
/**
 * Returns a jwt token signed by the app secret
 */
export function signToken(accountKitId, _id) {
  return jwt.sign({ accountKitId, _id }, config.SECRETS.SESSION, {
    expiresIn: 60 * 60 * 24 * 365 * 10
  }); // 10 years
}

export function signAdminToken(username, _id) {
  return jwt.sign({ username, _id }, config.SECRETS.SESSION, {
    expiresIn: 60 * 60 * 24 * 365 * 10
  }); // 10 years
}

/**
 * Set token cookie directly for oAuth strategies
 */
export function setTokenCookie(req, res) {
  if (!req.user)
    return res
      .status(404)
      .send("It looks like you aren't logged in, please try again.");
  const token = signToken(req.user.accountKitId, req.user._id);
  res.cookie('token', token);
  // res.redirect('/admin/#/form/users');
  return res.status(200).send({ token });
}

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
export function isAuthenticated() {
  return (
    compose()
      // Validate jwt
      .use((req, res, next) => {
        // allow access_token to be passed through query parameter as well
        if (!req.headers.authorization) {
          return res.status(config.RESPONSE_CODES.UNAUTHORIZED.CODE).json({
            code: config.RESPONSE_CODES.UNAUTHORIZED.CODE,
            message: config.RESPONSE_CODES.UNAUTHORIZED.MESSAGE
          });
        }
        if (req.query && req.query.hasOwnProperty('access_token')) {
          req.headers.authorization = 'Bearer ' + req.query.access_token;
        }
        validateJwt(req, res, next);
      })
      .use((req, res, next) => {
        if (!req.user.accountKitId) {
          return Admin.findOne({
            authenticationToken: req.headers.authorization.split(' ')[1]
          })
            .exec()
            .then(admin => {
              if (!admin)
                return res.status(402).send({
                  status: 402,
                  message: 'Invalid Authentication Token'
                });
              req.admin = admin;
              return next();
            })
            .catch(err => next(err));
        } else {
          // Attach user to request
          return User.findOne({ accountKitId: req.user.accountKitId })
            .exec()
            .then(user => {
              if (!user)
                return res.status(402).send({
                  status: 402,
                  message: 'Invalid Authentication Token'
                });
              req.user = user;
              return next();
            })
            .catch(err => next(err));
        }
      })
  );
}
