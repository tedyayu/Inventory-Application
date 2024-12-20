const catagory=require('../models/catagoryModel');
const Items=require('../models/itemModel');

const getCatagories=async(req,res)=>{
    try{
        const catagories=await catagory.getAllCatagory();
        res.render('catagories/index.ejs',{catagories});
    }catch(error){
        console.error('Error fetching cataegories', error);
        res.status(500).send('server error');
    }
};
const showCreateForm=(req,res)=>{
    res.render('catagories/create');
}
const createCatagory=async(req,res)=>{
    const {name,description}=req.body;
    await catagory.createCatagory(name,description);
    res.redirect('/catagories/view'); 
};

const viewCatagory=async(req,res)=>{
    const singleCatagory=await catagory.getCatagoryById(req.params.id);
    res.render('catagories/view',{singleCatagory});

};

const editCatagory=async (req,res)=>{
    const editableCatagory=await catagory.getCatagoryById(req.params.id);
    res.render('catagories/edit',{editableCatagory});
};
const updateCatagory=async(req,res)=>{
    const {name,description}=req.body;
    await catagory.updateCatagory(req.params.id,name,description);
    res.redirect('/catagories')
};

module.exports={getCatagories,createCatagory,viewCatagory,editCatagory,updateCatagory,showCreateForm}