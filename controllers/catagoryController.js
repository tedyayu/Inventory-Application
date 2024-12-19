const catagory=require('../models/catagoryModel');
const Items=require('../models/itemModel');

const getCatagories=async(req,res)=>{
    const catagories=await catagory.getAllCatagory();
    res.render('catagories/index',{catagories});
};

const createCatagory=async(req,res)=>{
    const {name,descriprion}=req.body;
    await catagory.createCatagory(name,descriprion);
    res.redirect('/catagories');
};

const viewCatagory=async(req,res)=>{
    const singleCatagory=await catagory.getCatagoryById(req.params.id);
    const singleItem=await Items.getItemById(req.params.id);
    res.render('catagories/view',{singleCatagory,singleItem});

};

const editCatagory=async (req,res)=>{
    const editableCatagory=await catagory.getCatagoryById(req.params.id);
    res.render('catagories/edit',{editableCatagory});
};
const updateCatagory=async(req,res)=>{
    const {name,descriprion}=req.body;
    await catagory.updateCatagory(req.params.id,name,descriprion);
    res.redirect('/catagories')
};

module.exports={getCatagories,createCatagory,viewCatagory,editCatagory,updateCatagory}