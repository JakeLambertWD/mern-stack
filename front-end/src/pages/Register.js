// external
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// internal
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import logo from '../assets/images/logo.svg';
import { selectUser, toggleMember } from '../store/slices/userSlice';

export const Register = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(toggleMember);
	}, [dispatch]);

	const onSubmit = e => {
		e.preventDefault();
		console.log(e.target);
	};

	const handleChange = e => {
		console.log(e.target);
	};

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo logo={logo} />
				<h3>{user.isMember ? 'Login' : 'Register'}</h3>
				{user.showAlert && <Alert />}

				{user.isMember && (
					<>
						<FormRow name='name' type='text' value={user.name} handleChange={handleChange} />
						<FormRow name='email' type='email' value={user.email} handleChange={handleChange} />
						<FormRow name='password' type='password' value={user.password} handleChange={handleChange} />
					</>
				)}

				<button className='btn btn-block'>Submit</button>
				<p>
					{user.isMember ? 'Not a member yet?' : 'Already a member?'}
					<button className='member-btn' onClick={toggleMember}>
						{user.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};
