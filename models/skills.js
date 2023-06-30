const skills = [
    {id: 123344, skill: 'Cooking', learned: true},
    {id: 133498, skill: 'Driving', learned: true},
    {id: 123944, skill: 'Baking', learned: true},
    {id: 128374, skill: 'Yodeling', learned: false}

];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.useful = false;
    skills.push(skill);
}

function getOne() {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}