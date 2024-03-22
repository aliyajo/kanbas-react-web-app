import {createSlice} from '@reduxjs/toolkit';
import {assignments} from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: {
        title: "New Assignment",
        duedate: "2021-12-31",
        points: "Points",
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        // Add Assignment action
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        // Delete Assignment action
            deleteAssignment: (state, action) => {
                state.assignments = state.assignments.filter(
                    (assignment) => assignment._id !== action.payload
                );
            },
            // Update Assignment action
            updateAssignment: (state, action) => {
                state.assignments = state.assignments.map((assignment) => {
                    if (assignment._id === action.payload._id) {
                        return action.payload;
                    } else {
                        return assignment;
                    }
                }
                );
            },
            // Select Assignment action
            selectAssignment: (state, action) => {
                state.assignment = action.payload;
            },
        },
    });
export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;