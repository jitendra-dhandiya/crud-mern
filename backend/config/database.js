import mongoose from "mongoose";


const connect_DB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://jatindhandiya1:FDKTHfsNtaXW7TsDbvjdfgfvjARFDGFYH@cluster0.vj2lxos.mongodb.net/RTK-Crud?retryWrites=true&w=majority").then(()=>{
      console.log("Database Connected Successfully")
    })
   
  } catch (error) {
    console.error("Database Connection", error);
    process.exit();
  }
};

export default connect_DB;
