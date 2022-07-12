const { Course } = require('../models')

const createCourse = ({
    name,
    description,
    creationDate,
    active,
    duration
}) => {
    return Course.create({
        name,
        description,
        creation_date: creationDate,
        active,
        duration
    })
}

const getCourses = () => {
 return Course.findAll();
}

const updateCourse = async ( id, {
    name,
    description,
    creationDate,
    active,
    duration
}) => {
    const [qtdUpdated] = await Course.update({
        name,
        description,
        creation_date: creationDate,
        active,
        duration
    }, {
        where: { id }
    });
    return qtdUpdated > 0;
}

const deleteCourse = async ( id ) => {
    const qtdRemoved = await Course.destroy({
        where: { id }
    });

    return qtdRemoved > 0;
}

module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse,
}