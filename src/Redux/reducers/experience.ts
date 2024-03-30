import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EBoxType } from "../../types";

interface ExperienceState {
  experiences: EBoxType[];
}

const initialState: ExperienceState = {
  experiences: [],
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExperiences: (state, action: PayloadAction<EBoxType[]>) => {
      state.experiences.splice(0, state.experiences.length);
      state.experiences.push(...action.payload);
    },
  },
});

export const { setExperiences } = experienceSlice.actions;
