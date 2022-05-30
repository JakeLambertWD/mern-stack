import { useSelector } from 'react-redux';

import { selectApp } from '../store/slices/appSlice';

export const Alert = () => {
	const { alertText, alertType } = useSelector(selectApp);

	return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
