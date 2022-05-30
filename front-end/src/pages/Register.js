// external
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// internal
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import logo from '../assets/images/logo.svg';
import { selectApp, displayAlert, clearAlert } from '../store/slices/appSlice';

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true
};

export const Register = () => {
	const [values, setValues] = useState(initialState);
	const { showAlert } = useSelector(selectApp);
	const dispatch = useDispatch();

	const toggleMember = () => setValues({ ...values, isMember: !values.isMember });

	const onSubmit = e => {
		e.preventDefault();

		const { name, email, password, isMember } = values;
		if (!email || !password || (!name && !isMember)) {
			dispatch(displayAlert());
			setTimeout(() => {
				dispatch(clearAlert());
			}, 3000);
			return;
		}
	};

	const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value }); // key: value

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo logo={logo} />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{showAlert && <Alert />}

				{values.isMember && (
					<>
						<FormRow name='name' type='text' value={values.name} handleChange={handleChange} />
						<FormRow name='email' type='email' value={values.email} handleChange={handleChange} />
						<FormRow name='password' type='password' value={values.password} handleChange={handleChange} />
					</>
				)}

				<button className='btn btn-block'>Submit</button>
				<p>
					{values.isMember ? 'Not a member yet?' : 'Already a member?'}
					<button className='member-btn' onClick={toggleMember}>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};
