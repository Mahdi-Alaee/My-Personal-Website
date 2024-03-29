import { configureStore } from "@reduxjs/toolkit";
import { experienceSlice } from "./reducers/experience";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { educationSlice } from "./reducers/education";

export const store = configureStore({
  reducer: {
    experience: experienceSlice.reducer,
    education: educationSlice.reducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
