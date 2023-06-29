const skills = [
    {id: 123344, skill: 'Cooking', useful: true},
    {id: 133498, skill: 'Driving', useful: true},
    {id: 123944, skill: 'Baking', useful: true},
    {id: 128374, skill: 'Yodeling', useful: false}

];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}