var express = require('express');
var router = express.Router();

const todoController = require('../controllers/todoController');




/* GET home page. */
router.get('/',  todoController.listAll);


router.get('/item/add',  todoController.displayAddItem);
router.post('/item/add',  todoController.addNewItem);

router.get('/item/edit/:id',  todoController.viewEditItem);
router.post('/item/edit/:id',  todoController.saveEditItem);

router.get('/item/delete/:id',  todoController.deleteItem);
router.get('/item/complete/:id',  todoController.makeItemComplete);
router.get('/item/incomplete/:id',  todoController.markItemIncomplete);


module.exports = router;
