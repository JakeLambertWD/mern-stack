import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		email: '',
		password: '',
		isMember: true,
		showAlert: true
	},
	reducers: {
		toggleMember: state => {
			state.isMember = !state.isMember;
		}
	}
});

// export reducers
export const { toggleMember } = userSlice.actions;

// access user
export const selectUser = state => state.user;

export default userSlice.reducer;
