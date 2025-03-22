/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type Subscriber = {
  EmailAddress: string;
  Name: string;
};

type SubscribersState = {
  subscribers: Subscriber[];
  loading: boolean;
  error: string | null;
  total: number;
  numOfPages: number;
};

const initialState: SubscribersState = {
  subscribers: [],
  loading: false,
  error: null,
  total: 0,
  numOfPages: 0,
};

// Fetch subscribers
export const fetchSubscribers = createAsyncThunk(
  "subscribers/fetchSubscribers",
  async (params: {
    page: number;
    pagesize: number;
    sortField: string;
    orderdirection: string;
  }) => {
    const response = await fetch(
      `${API_BASE_URL}/api/subscribers?page=${params.page}&pagesize=${params.pagesize}&orderField=${params.sortField}&orderDirection=${params.orderdirection}`
    );
    if (!response.ok) throw new Error("Failed to fetch subscribers");
    return await response.json();
  }
);

// Delete subscriber
export const deleteSubscriber = createAsyncThunk(
  "subscribers/deleteSubscriber",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/subscribers/${email}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete subscriber");
      return email;
    } catch (error) {
      return rejectWithValue("Failed to delete subscriber");
    }
  }
);

// Add subscriber
export const addSubscriberAsync = createAsyncThunk(
  "subscribers/addSubscriberAsync",
  async (subscriber: { name: string; email: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriber),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Check if the response has a message or some details about the error
        throw new Error(errorData.message || "Failed to add subscriber");
      }

      const newSubscriber = await response.json();
      return newSubscriber;
    } catch (error) {
      return rejectWithValue("Failed to add subscriber");
    }
  }
);

const subscribersSlice = createSlice({
  name: "subscribers",
  initialState,
  reducers: {
    addSubscriber: (state, action: PayloadAction<Subscriber>) => {
      state.subscribers.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch subscribers
      .addCase(fetchSubscribers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = action.payload.Results || [];
        state.total = action.payload.TotalNumberOfRecords || 0;
        state.numOfPages = action.payload.NumberOfPages || 0;
      })
      .addCase(fetchSubscribers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch subscribers";
      })

      // Delete subscriber
      .addCase(deleteSubscriber.fulfilled, (state, action) => {
        state.subscribers = state.subscribers.filter(
          (sub) => sub.EmailAddress !== action.payload
        );
        state.total -= 1;
      })
      .addCase(deleteSubscriber.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // Add subscriber
      .addCase(addSubscriberAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSubscriberAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers.unshift(action.payload);
        state.total += 1;
      })
      .addCase(addSubscriberAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to add subscriber";
      });
  },
});

export const { addSubscriber } = subscribersSlice.actions;
export default subscribersSlice.reducer;
