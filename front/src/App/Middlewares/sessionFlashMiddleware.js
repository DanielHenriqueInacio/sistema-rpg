export default (request, response, next) => {
    request.app.locals.sessionFlash = request.session.sessionFlash;
    delete request.session.sessionFlash;
    next();
}
