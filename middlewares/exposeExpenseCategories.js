module.exports = function exposeExpenseCategories(req, res, next) {
    if (req.session.currentUser.profile === "Business") {
      res.locals.isBusiness = true;
      res.locals.isFamily = false;
      res.locals.isStudent = false;
      res.locals.isStandard = false;
    } else if (req.session.currentUser.profile === "Family"){
      res.locals.isBusiness = false;
      res.locals.isFamily = true;
      res.locals.isStudent = false;
      res.locals.isStandard = false;
    } else if (req.session.currentUser.profile === "Student"){
      res.locals.isBusiness = false;
      res.locals.isFamily = false;
      res.locals.isStudent = true;
      res.locals.isStandard = false;
    } else if (req.session.currentUser.profile === "Standard"){
      res.locals.isBusiness = false;
      res.locals.isFamily = false;
      res.locals.isStudent = false;
      res.locals.isStandard = true;
    }
    next();
  };