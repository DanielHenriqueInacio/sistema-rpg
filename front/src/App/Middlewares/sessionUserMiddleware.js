export default (request, response, next) => {
    request.app.locals.user =  request.session.user || {};
    next();
}
