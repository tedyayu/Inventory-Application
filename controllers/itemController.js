const Item=require('../models/itemModel');
const Catagory=require('../models/catagoryModel');

const storeItem=async(req,res)=>{
    const {categoryId, name, description, price, stock_quantity}=req.body;
    await Item.createItem(categoryId, name, description, price, stock_quantity);
    res.redirect('/index');
};

const editItem=async (req,res)=>{
    const item=await Item.getItemById(req.params.id);
    const catagories=await Catagory.getAllCatagory();
    res.redirect('./index');
};

const deleteItem =async (req,res)=>{
    await Item.deleteItem(req.params.id);
    res.redirect('/index');
};

const createItem=async (req,res)=>{
    const catagories=await Catagory.getAllCatagory();
    res.render('items/create',{catagories})
}

module.exports={createItem,editItem,deleteItem,storeItem};

