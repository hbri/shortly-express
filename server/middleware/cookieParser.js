var _ = require('lodash');

const parseCookies = (req, res, next) => {
  if (req.get('Cookie') !== undefined) {
    var ObjectCookie = {};
    var allCookies = req.get('Cookie').split('; ');
    allCookies.forEach((cookie) => {
      var indvCooki = cookie.split('=');
      ObjectCookie[indvCooki[0]] = indvCooki[1];
    });
    req.cookies = ObjectCookie;
    next();
  } else {
    next();
  }
};

module.exports = parseCookies;



