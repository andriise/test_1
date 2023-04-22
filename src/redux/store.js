const { configureStore } = require("@reduxjs/toolkit");
const { followersReducer } = require("./followersSlice");



export const store = configureStore({
	reducer: 
		followersReducer,
})