const {Keventer,Starter,Main_course,Dessert} = require('../models/menu')
function homeController() {
    return { 
        async index(req, res) {
            return res.render('home')
        },
        async starter(req, res) {
            const starters = await Starter.find();
            return res.render('starter', { starters: starters })
        },
        async course(req, res) {
            const courses = await Main_course.find();
            return res.render('maincourse', { courses: courses })
        },
        async dessert(req, res) {
            const desserts = await Dessert.find();
            return res.render('dessert', { desserts: desserts })
        },
        async keventer(req, res) {
            const keventers = await Keventer.find();
            return res.render('keventer', { keventers: keventers })
        }
    }
}

module.exports = homeController