const express=require('express');
const router=express.Router();
const catagoryController=require('../controllers/catagoryController')

router.get('/',catagoryController.getCatagories);
router.post('/',catagoryController.createCatagory);
router.get('/:id',catagoryController.viewCatagory);
router.get('/:id/edit',catagoryController.editCatagory);
router.post('/:id/edit',catagoryController.updateCatagory);

module.exports=router;