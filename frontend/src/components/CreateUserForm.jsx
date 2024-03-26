import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {createUserAPIAsync} from '../features/userDetailSlice'

const CreateUserForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      gender: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      dispatch(createUserAPIAsync(values))
      navigate('/read')
    },
  });
  return (
    <div>
      <h2 className="my-2 text-center">Fill the data</h2>
      <h4 className=" text-center">Create User</h4>
      <form
        className="w-25 mx-auto my-5 bg-gray border-b"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            {...formik.getFieldProps("name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            required
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
            checked={formik.initialValues.gender === "Male"}
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
            checked={formik.initialValues.gender === "Female"}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
