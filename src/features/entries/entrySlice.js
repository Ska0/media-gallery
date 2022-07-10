import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import entryService from "./entryService";

const initialState = {
  entries: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

//create new entry
export const createEntry = createAsyncThunk(
  "entries/createEntry",
  async (entryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await entryService.createEntry(entryData, token);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//get all entries
export const getEntries = createAsyncThunk(
  "entries/getEntries",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await entryService.getEntries(token);
    } catch (errorMessage) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateEntry = createAsyncThunk(
  "entries/updateEntry",
  async (entryid, entryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await entryService.updateEntry(entryid, entryData, token);
    } catch (errorMessage) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteEntry = createAsyncThunk(
  "entries/deleteEntry",
  async (entryid, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await entryService.deleteEntry(entryid, token);
    } catch (errorMessage) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const entrySlice = createSlice({
  name: "entries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEntry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEntry.fulfilled, (state, action) => {
        state.entries.push(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createEntry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getEntries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEntries.fulfilled, (state, action) => {
        state.entries = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getEntries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(updateEntry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEntry.fulfilled, (state, action) => {
        state.entries = state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            return action.payload;
          }
          return entry;
        });
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateEntry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(deleteEntry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEntry.fulfilled, (state, action) => {
        state.entries = state.entries.filter(
          (entry) => entry.id !== action.payload.id
        );
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteEntry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default entrySlice.reducer;
