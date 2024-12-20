const Item=require('../models/itemModel');
const Catagory=require('../models/catagoryModel');

const storeItem=async(req,res)=>{
    try{
        const {categoryId, name, description, price, stock_quantity}=req.body;
        await Item.createItem(categoryId, name, description, price, stock_quantity);
        res.redirect('/index');
    }catch(error){
        console.error("Error storing item:", error);
        res.status(500).send("Error creating item");
    }
    
};

const editItem=async (req,res)=>{
    const item=await Item.getItemById(req.params.id);
    const catagories=await Catagory.getAllCatagory();
    res.render('items/edit',{item,catagories})
};

const updateItem=async (req,res)=>{
    const {categoryId, name, description, price, stock_quantity}=req.body;
    await Item.updateItem(req.params.id, categoryId, name, description, price, stock_quantity);
    res.redirect('/index');
}

const deleteItem =async (req,res)=>{
    await Item.deleteItem(req.params.id);
    res.redirect('/index');
};

const createItem=async (req,res)=>{
    const catagories=await Catagory.getAllCatagory();
    res.render('items/create',{catagories})
}

module.exports={createItem,editItem,deleteItem,storeItem,updateItem};

