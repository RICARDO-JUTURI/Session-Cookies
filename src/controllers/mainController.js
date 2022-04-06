const { validationResult } = require("express-validator");
const { redirect } = require("express/lib/response");

module.exports = {

    main: (req, res) => {
        res.render('index')
    }, 
    userData: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            res.render('index', {
                userData: req.body
            })
        }else{
            res.render('index', {
                errors: errors.mapped()
            })
        }  
        redirect('profile')
    },
    view: (req, res) => {
        res.render('profile', {
            userData : req.params.id
        })/* todos esos datos y lo que esta por encima de registro llevar a otra vista */
    }
}