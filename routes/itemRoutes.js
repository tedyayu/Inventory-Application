const express=require('express');
const router=express.Router();
const itemController=require('../controllers/itemController')

router.get('/',itemController.createItem);
router.post('/',itemController.storeItem);
router.get('/:id/edit',itemController.editItem);
router.delete('/:id',itemController.deleteItem);

module.exports=router;