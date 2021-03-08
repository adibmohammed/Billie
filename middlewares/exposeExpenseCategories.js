module.exports = function exposeExpenseCategories(req, res, next) {
    if (req.session.currentUser.profile === "business") {
      res.locals.isBusiness = true;
      res.locals.isFamily = false;
      res.locals.isStudent = false;
      res.locals.isStandard = false;
    } 
    next();
  };