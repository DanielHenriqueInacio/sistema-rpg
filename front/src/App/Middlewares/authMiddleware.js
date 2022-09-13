export default (request, response, next) => {

    if (typeof request.session.user === "undefined") {
        response.redirect("/login");
    }

    next();
}
