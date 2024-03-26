import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedUserById,
  fetchUserByIdAsync,
  updateUserByIdAsync,
  deleteUserByIdAsync,
} from "../features/userDetailSlice";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";

const UserDetailC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params?.id
  const selectedUserData = useSelector(selectedUserById);

  const formik = useFormik({
    initialValues: {
      name: "",
      email:"" ,
      age: "",
      gender: ""
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (updatedData,{resetForm}) => {
      dispatch(updateUserByIdAsync({id,updatedData}));
      resetForm()
      navigate('/read')
      
    },
  });

  useEffect(() => {
    dispatch(fetchUserByIdAsync(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <h2 className="my-2 text-center">Hi, {selectedUserData?.name}</h2>
      <h4 className="my-2 text-center">Edit The User Data</h4>
      <form className="w-25 mx-auto my-5" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" 
          {...formik.getFieldProps("name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" 
          {...formik.getFieldProps("email")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="text" name="age" className="form-control" 
          {...formik.getFieldProps("age")}
          />
        </div>
        <div className="mb-3">
          <input
          {...formik.getFieldProps("gender")}
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={formik.initialValues.gender==="Male"}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
          {...formik.getFieldProps("gender")}
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={formik.initialValues.gender==="Female"}
          />
          <label className="form-check-label">Female</label>
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Update user
          </button>
          <Link to={'/read'}>
          <button onClick={()=>dispatch( deleteUserByIdAsync(id))} className="btn btn-primary">
      
            Delete user
          </button>    
          </Link>
        </div>
      </form>
      
      
          
      
    </div>
  );
};

export default UserDetailC;
