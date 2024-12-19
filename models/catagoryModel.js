const db=require('./db');

const createCatagory=async(name,description)=>{
    try{
        const query='INSERT INTO catagories (name,description) VALUES ($1, $2) RETURNING *'
        const results=await db.query(query,[name,description])
        return results.rows[0]
    }catch(error){
        console.error("erro creating new catagory", error.message)
        throw new Error(`error creating new catagory ${error.message}`)
    }
    
}

const getAllCatagory=async()=>{
    try{
        const query='SELECT * FROM catagories ';
        const results=await db.query(query)
        return results.rows
    }catch(error){
        console.error("error fetching catagories", error.message)
        throw new Error(`error fetching catagory ${error.message}`)
    }
}

const getCatagoryById=async(id)=>{
    try{
        const query='SELECT * FROM catagories WHERE id=$1';
        const results=await db.query(query,[id]);
        if(results.rows.length===0){
            throw new Error("catagory not found")
        }
        console.log("catagory fetched successfully");
        return results.rows[0];
    }
    catch(error){
        console.error("error getting catagory by id: ", error.message);
        throw error;
    }
}



const updateCatagory=async (id, name,description)=>{
    try{
        const query='UPDATE catagories SET name=$1, description=$2 WHERE id=$3 RETURNING *';
        const results=await db.query(query,[name,description,id])
        if(results.rows.length===0){
            console.log("there is no catagory to be updated");
        }
        return results.rows[0]

    }catch(error){
        console.error("error updating the catagory", error.message);
        throw new Error (`error updating the catagory ${error.message}`);
    }
    
}

module.exports={createCatagory,getAllCatagory,getCatagoryById,updateCatagory}