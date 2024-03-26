import userModel from "../models/userModel.js";

// Create User
export const createUsers = async (req, resp) => {
  const user = new userModel(req.body);
  try {
    const doc = await user.save();
    resp.status(201).json(doc);
  } catch (error) {
    resp.status(400).json(error);
  }
};

// Get All User

export const getallUsers = async (req, resp) => {
  try {
    let allUsers = await userModel.find({}).exec();

    resp.status(200).json(allUsers);
  } catch (error) {
    return resp.status(400).json({
      error,
    });
  }
};

// Get User By I'd
export const getUserById = async(req,resp)=>{
  const {id}=req.params;
  try {
    const gUser = await userModel.findById(id)
    resp.status(201).json(gUser)
  } catch (error) {
    resp.status(400).json(error)
  }

}

// Update User by I'd
export const updateUserById = async (req, resp) => {
  const {id} = await req.params;
  try {
    const uUser = await userModel.findByIdAndUpdate(id,req.body,{new:true})
    resp.status(201).json(uUser)
  } catch (error) {
    resp.status(400).json(error)
  }
};
// Delete Product By I'd
export const deleteUserById = async (req, resp) => {
  const {id} = await req.params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if(!deletedUser){
      return resp.status(404).send('Product Not Found')
    }
    resp.status(200).send({message:"Product Deleted successfully"})
  } catch (error) {
    resp.status(500).send("server error")
  }
};
