const express=require('express');
const router=express.Router();
const catagoryController=require('../controllers/catagoryController')

router.get('/',catagoryController.getCatagories);
router.get('/create',catagoryController.showCreateForm);
router.post('/create',catagoryController.createCatagory);
router.get('/:id',catagoryController.viewCatagory);
router.get('/:id/edit',catagoryController.editCatagory);
router.post('/:id/edit',catagoryController.updateCatagory); //make id to editableCatagory.id if it doesn't work

module.exports=router;