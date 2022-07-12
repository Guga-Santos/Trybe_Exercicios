const express = require('express');
const courseRouter = express.Router();
const serviceCourse = require('../services/course.service');

courseRouter.get('/', async(req, res) => {
    const courses = await serviceCourse.getCourses();
    return res.status(200).json(courses);
});

courseRouter.post('/', async(req, res) => {
    const newCourse = await serviceCourse.createCourse(req.body)
    return res.status(201).json(newCourse);
});

courseRouter.put('/:id', async(req, res) => {
    const { id } = req.params;
    const isUpdated = await serviceCourse.updateCourse(id, req.body);

    if(isUpdated) {
        return res.status(200).json({ message: `Curso ${id} atualizado com sucesso`})
    };

    res.status(404).json({ message: `Curso ${id} não encontrado`});
})

courseRouter.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const isRemoved = await serviceCourse.deleteCourse(id);

    if(isRemoved) res.status(200).json({ message: `Curso ${id} removido com sucesso!`})

    res.status(404).json({ message: `Curso ${id} não encontrado!`})
})

module.exports = courseRouter;