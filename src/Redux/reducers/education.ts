import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EBoxType } from "../../types";

interface educationState {
  educations: EBoxType[];
}

const initialState: educationState = {
  educations: [],
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setEducations: (state, action: PayloadAction<EBoxType[]>) => {
      state.educations.splice(0, state.educations.length);
      state.educations.push(...action.payload);
    },
  },
});

export const { setEducations } = educationSlice.actions;
