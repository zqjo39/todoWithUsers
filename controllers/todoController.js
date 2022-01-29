
const { Todo } = require('../models');


module.exports.listAll = async function (req, res, next) {

    try {

        const todos = await Todo.findAll();

        let completeItems = todos.filter(item => item.complete);
        let incompleteItems = todos.filter(item => !item.complete);

        res.render('todos/viewAll', {
            completeItems,
            incompleteItems
        });

    } catch (err) {
        console.log('there was an error');
        res.send(err);
    }

};


module.exports.displayAddItem = (req, res) => {
    const item = {
        name: '',
        description: '',
    }
    res.render('todos/newItem', {
        item
    })
};

module.exports.addNewItem = async (req, res) => {

    try {

        await Todo.create({description: req.body.description});
        res.redirect('/');
    } catch (err) {

        console.log('Error: ' + err);
    }
};


module.exports.viewEditItem = async (req, res) => {

    try {
        const todo = await Todo.findByPk(req.params.id);
        res.render('todos/editItem', {item: todo})

    } catch (err) {
        console.log('There was an error');
        console.log(err);
    }

};


module.exports.saveEditItem = async (req, res) => {

    await Todo.update({ description: req.body.description}, {
        where:{
            id: req.params.id,
        }
    })
    res.redirect('/');
};


module.exports.deleteItem = async (req, res) => {

    try {

        await Todo.destroy({
            where: {
                id: req.params.id
            }
        })
    } catch (err) {
        console.log("there was an error");
        console.log(err);
    }

    res.redirect('/');
};


module.exports.makeItemComplete = async (req, res) => {

    try {

        await Todo.update({ complete:  true}, {
            where:{
                id: req.params.id,
            }
        })

    } catch (err) {
        console.log("there was an error");
        console.log(err);
    }

    res.redirect('/');
};


module.exports.markItemIncomplete = async (req, res) => {

    try {
        await Todo.update({ complete:  false}, {
            where:{
                id: req.params.id,
            }
        })

    } catch (err) {
        console.log("there was an error");
        console.log(err);
    }

    res.redirect('/');
};


