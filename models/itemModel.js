const db = require('../models/db');

const createItem=async(categoryId, name, description, price, stock_quantity)=>{
    try{
        const query='INSERT INTO items (category_id,name,description,price,stock_quantity) VALUES ($1,$2,$3,$4,$5) RETURNING *';
        const results =await db.query(query,[categoryId, name, description, price, stock_quantity]);
        return results.rows[0];
    }catch(error){
        console.error("error inserting item",error.message)
        throw error;
    }
}

const getAllItems=async ()=>{
    try{
        const query= 'SELECT * FROM items';
        const results=await db.query(query)
        return results.rows
    }catch(error){
        console.error("error getting items",error.message)
        throw error;
    }
   
}

const getItemByCatagory=async(categoryId)=>{
    try{
        const query='SELECT * FROM items WHERE category_id=$1';
        const results= await db.query(query,[categoryId])
        return results.rows[0]
    }catch(error){
        console.error("error getting items",error.message)
        throw error;
    }
}

const getItemById=async(id)=>{
    try{
        const query='SELECT * FROM items WHERE id=$1'
        const results=await db.query(query,[id]);
        return results.rows[0]
    }catch(error){
        console.error("error getting items",error.message)
        throw error;
    }
}

const updateItem=async (id, categoryId, name, description, price, stock_quantity)=>{
    try{
        const query= 'UPDATE items SET category_id = $1, name = $2, description = $3, price = $4, stock_quantity = $5 WHERE id = $6 RETURNING * ';
        const results=await db.query(query,[categoryId, name, description, price, stock_quantity, id])
        return results.rows[0];
    }catch(error){
        console.error("error getting items",error.message)
        throw error;
    }
   
}
const deleteItem=async(id)=>{
    try{
        const query = 'DELETE FROM items WHERE id=$1 RETURNING *';
        const results=await db.query(query,[id]);
        return results.rows[0]
    }catch(error){
        console.error("error getting items",error.message)
        throw error;
    }
    
}

module.exports={createItem,getAllItems,getItemByCatagory,getItemById,updateItem,deleteItem}