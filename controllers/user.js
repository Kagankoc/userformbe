const User = require("../models/user");

const editUser = (req,res,next)=> {
    User.findOne({_id:req.body.userId},(err,data)=> {
        if(err || !data) {
            return res.json({message: "User doesn't exist."});
        }
        else {
            data.update({name:req.body.name,birthDate:req.body.birthDate},err=> {
                if (err) { 
                    return res.status(400).json({message: "Update Error.", error:err});
                    }
                    return res.json(data);
            }
            );
        }
    })
}
const deleteUser = (req,res,next)=> {
    User.deleteOne({_id:req.body.userId},err=> {
        if(err) {
            return res.status(400).json({message: "Delete failed"});
        }
        return res.json({message: "Delete successful"});
    })
}
const getUsers = (req,res,next)=> {
    User.find({},(err,data)=> {
        if(err){
            return res.status(400).json({Error:err})
        }
        return res.json(data);
    })
}
module.exports = {editUser,deleteUser,getUsers};