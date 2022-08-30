import {response} from "express";

const campanhaMestre = (request, response) => {
    response.locals = {title: "Campanha do Mestre"};
    response.render("mestre/campanha-mestre");
}

const historiaMestre = (request, response) => {
    response.locals = {title: "Campanha do Mestre"};
    response.render("mestre/historia-mestre");
}

export {
    campanhaMestre,historiaMestre
}