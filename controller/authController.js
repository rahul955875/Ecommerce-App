import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address ,answer } = req.body;
    //v
    if (!name) {
      return res.send({ message: "Name is Required!!!" });
    }
    if (!email) {
      return res.send({ message: "Email is Required!!!" });
    }
    if (!password) {
      return res.send({ message: "Password is Required!!!" });
    }
    if (!phone) {
      return res.send({ message: "Phone is Required!!!" });
    }
    if (!address) {
      return res.send({ message: "address is Required!!!" });
    }
    if(!answer){
      return res.send({ message: "Answer is Required!!!" });

    }
    // check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registerd please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered successfully.",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

//Login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "incorrect email or password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }
    //token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login successfully.",
      user:{
        name : user.name,
        email : user.email,
        phone: user.phone,
        address : user.address,
        role : user.role
      },
      token ,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//test
export const testController =(req,res)=>{
 res.send('protected route')
}

export const forgotPasswordController = async(req,res)=>{
try {
  const {email,answer,newPassword} = req.body
  if(!email){
    res.send(400).send({
      message : 'Email is required'
    })
  }
  if(!answer){
    res.send(400).send({
      message : 'answer is required'
    })
  }
  if(!newPassword){
    res.send(400).send({
      message : 'New Password is required'
    })
  }
  const user = await userModel.findOne({email,answer})
  if(!user){
    res.status(200).send({
      success : false,
      message : 'wrong Email or Password',
    })
  }
  const hashed = await hashPassword(newPassword)
  await userModel.findByIdAndUpdate(user._id,{password:hashed})
  res.status(200).send({
    success : true,
    message : 'Password Reseted Successfully.'
  })
} catch (error) {
  console.log(error)
  res.status(500).send({
    success : false,
    message : 'something went wrong'
  })
}
}