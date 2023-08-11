import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const dsslackconnector1_get_v1_albums_list = createAsyncThunk(
  "dsslackconnector1_response_get_GetAlbums/dsslackconnector1_get_v1_albums_list",
  async payload => {
    const response = await apiService.dsslackconnector1_get_v1_albums_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dsslackconnector1_response_get_GetAlbumsSlice = createSlice({
  name: "dsslackconnector1_response_get_GetAlbums",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        dsslackconnector1_get_v1_albums_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        dsslackconnector1_get_v1_albums_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        dsslackconnector1_get_v1_albums_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  dsslackconnector1_get_v1_albums_list,
  slice: dsslackconnector1_response_get_GetAlbumsSlice
}
