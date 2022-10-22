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

skillsController.toggleSkill = (req, res, next) => {
    const {_id, green} = req.body
    Skills.findOneAndUpdate({_id}, {green})
    .exec()
    .then((data) => {
        res.locals.skill = data
        next()
    })
}

skillsController.addSkill = (req, res, next) => {
    const {text, green} = req.body
    const payload = {
        text,
        green
    }
    Skills.create(payload)
    .then((data) => {
        res.locals.skill = data
        next()
    })
}

skillsController.deleteSkill = (req, res, next) => {
    const {_id} = req.body
    //console.log('skillsController.deleteSkill _id: ', _id)
    Skills.findOneAndDelete({_id})
    .exec()
    .then((data) => {
        res.locals.skill = data
        next()
    })
}

export default skillsController