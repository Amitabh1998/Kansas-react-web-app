import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
    console.log("DEBUG new", action.payload)

      state.assignments.push({
        ...action.payload,
        _id: new Date().getTime().toString(),
      });
      // return [...state.assignments]
    },
    deleteAssignment: (state, action) => {
      console.log("DEBUG action", action);
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;