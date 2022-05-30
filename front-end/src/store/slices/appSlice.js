import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'appState',
	initialState: {
		isLoading: false,
		showAlert: false,
		alertText: 'Invalid input!',
		alertType: 'danger'
	},
	reducers: {
		displayAlert: state => {
			state.showAlert = true;
		},
		clearAlert: state => {
			state.showAlert = false;
			state.alertText = '';
			state.alertType = '';
		}
	}
});

// export reducers
export const { displayAlert, clearAlert } = appSlice.actions;

// access app
export const selectApp = state => state.appState;

export default appSlice.reducer;
