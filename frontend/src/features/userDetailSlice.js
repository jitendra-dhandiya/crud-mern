import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserAPI,
  fetchUserAPI,
  fetchUserById
} from "./userDetailAPI";

const initialState = {
  users: [],
  loading: false,
  error: null,
  status: "idle",
  selectedUser: null,
};
export const fetchAllUsersAsync = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const response = await fetchUserAPI();
    return response.data;
  }
);

export const createUserAPIAsync = createAsyncThunk(
  "user/createUser",
  async (user) => {
    const response = await createUserAPI(user);
    return response.data;
  }
);

export const fetchUserByIdAsync = createAsyncThunk(
  "user/fetchUserById",
  async (id) => {
    try {
      const response = await fetchUserById(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUserByIdAsync = createAsyncThunk(
  "user/updateUserById",
  async ({id,updatedData}) => {
    const response = await fetch(`http://localhost:5000/api/user/update/${id}`,{
      method:'PUT',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(updatedData)
    });
    if(!response.ok){
      throw new Error("Failed to update product")
    }
    return await response.json()
  }
);
export const deleteUserByIdAsync = createAsyncThunk('users/deleteUserById',
async(id,thunkAPI)=>{
  try {
    const response = await fetch(`http://localhost:5000/api/user/delete/${id}`,{
      method:'DELETE',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(thunkAPI)
    });
    if(!response.ok){
      throw new Error("Failed To Delete Product")
    }
    return id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const userDetail = createSlice({
  name: "userDetail",
  initialState,
  extraReducers: (builder) => {
    builder
      // For Creating The Users

      .addCase(createUserAPIAsync.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(createUserAPIAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUserAPIAsync.rejected, (state, action) => {
        state.status = "Error";
        state.loading = false;
        state.users = action.payload;
      })

      //   Fetching The Data
      .addCase(fetchAllUsersAsync.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsersAsync.rejected, (state, action) => {
        state.status = "Error";
        state.loading = false;
        state.users = action.payload;
      })

      // Fetch User By I'd
      .addCase(fetchUserByIdAsync.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchUserByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedUser = action.payload;
      })

      // Update User By I'd
      .addCase(updateUserByIdAsync.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updateUserByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        state.users[index] = action.payload;
        state.selectedUser = action.payload;
      })
      .addCase(updateUserByIdAsync.rejected, (state, action) => {
        state.status = "Error";
        state.error = action.error.message;
      })

      // Delete User By I'd
      .addCase(deleteUserByIdAsync.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(deleteUserByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = state.users.filter(
          (product)=> product.id !== action.payload
        )
      })
      .addCase(deleteUserByIdAsync.rejected, (state, action) => {
        state.status = "Error";
        state.error = action.payload;
      })
  },
});

export const selectUsers = (state) => state.app?.users;
export const selectedUserById = (state) => state.app?.selectedUser;
export default userDetail.reducer;
