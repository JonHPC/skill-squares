import Skills from '../models/skillsModel.js'

const skillsController = {}

skillsController.getAllSkills = (req, res, next) => {
    //console.log('skillsController.getAllSkills')
    Skills.find({})
    .exec()
    .then((data) => {
        //console.log('data: ', data)
        res.locals.skills = data
        next()
    })
}

skillsController.getSkill = (req, res, next) => {
    const {_id} = req.body
    Skills.findOne({_id})
    .exec()
    .then((data) => {
        //console.log('data: ', data)
        res.locals.skill = data
        next()
    })
}

skillsController.toggleSquare = (req, res, next) => {
    //console.log('skillsController.toggleSquare')
    const {_id, green} = req.body
    Skills.findOneAndUpdate({_id}, {green})
    .exec()
    .then((data) => {
        res.locals.skill = data
        next()
    })
}

export default skillsController