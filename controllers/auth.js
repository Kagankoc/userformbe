const Auth = require("../models/auth");
const User = require("../models/user");

const login = (req,res,next)=> {
    Auth.findOne({userName:req.body.name,password:req.body.password},(err,data)=> {
        if(data){
            res.status(200).json({message:"OK",userId:data._id});
        }
        else {
            res.status(200).json({Error:"No User Found"});
        }
    })
}
const logout = (req,res,next)=> {
    Auth.findOne({_id:req.body.userId},(err,data)=> {
        if(data){
            res.status(200).json({message:"Logout Success"});
        }
        else {
            res.status(200).json({Error:"Wrong Session"});
        }
    })
}
const register = (req,res,next)=> {
    Auth.findOne({userName:req.body.name},(err,data)=> {
        if(!data) {
            const newAuthUser = new Auth({
                userName:req.body.name,
                password:req.body.password,
            })
            newAuthUser.save((err,data)=> {

                if(err) return res.json({Error:err});
                const newUser = new User({
                    name:req.body.name,
                    birthDate:new Date(),
                    registerDate:new Date(),
                    lastLogin:new Date(),
                    userId:req.body._id,
                })
                newUser.save((err,data)=> {
                    if(err) return res.json({Error:err});
                    return res.json(data);
                })
            })
            
        }
        else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"User already exists"});
        }
    })
}
module.exports = {login,logout,register};