import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import journalService from './journalService';

const initialState = {
journals: [],
isLoading: false,
isError: false,
isSuccess: false,
errorMessage: '',
};

//create new journal
export const createJournal = createAsyncThunk(
  'journals/createJournal',
  async (journalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await journalService.createJournal(journalData, token);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
      }
);


//get all journals
export const getJournals = createAsyncThunk(
  'journals/getJournals',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await journalService.getJournals(token);
    } catch (errorMessage) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteJournal = createAsyncThunk(
  'journals/deleteJournal',
  async (journalid, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await journalService.deleteJournal(journalid, token);
    } catch (errorMessage) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const journalSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJournal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJournal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.journals.push(action.payload);
      })
      .addCase(createJournal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getJournals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJournals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.journals = action.payload;
      })
      .addCase(getJournals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteJournal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJournal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.journals = state.journals.filter(journal => journal._id !== action.payload);
      })
      .addCase(deleteJournal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
  },
});

export default journalSlice.reducer;