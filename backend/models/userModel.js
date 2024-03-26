import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    gender:String,
})

const virtual = userSchema.virtual('id');
virtual.get(function () {
  return this._id;
});

userSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform:(doc,ret,next)=>{
    delete ret._id;
    return ret
  }
})
const userModel = mongoose.models.users || mongoose.model("users",userSchema);

export default userModel;