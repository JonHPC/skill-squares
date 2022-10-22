import express from 'express'
import skillsController from '../controllers/skillsController.js'
const router = express.Router()

router.get('/', skillsController.getAllSkills, (req, res) => {
    res.status(200).json(res.locals.skills)
})

router.post('/', skillsController.getSkill, (req, res) => {
    res.status(200).json(res.locals.skill)
})

router.patch('/', skillsController.toggleSquare, (req, res) => {
    res.status(200).json(res.locals.skill)
})

export default router