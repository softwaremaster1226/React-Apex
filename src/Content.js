import { useContext, useState } from 'react';
import { AppContext } from './Context.js';
import DisplayData from './DisplayData.js';

const Content = () => {
	const { updateName } = useContext(AppContext);
	const [value, setValue] = useState('');
	// Loads and displays formatted JSON data


	const onNameChanged = (event) => {
		setValue(event.target.value);
	}

	const onUpdateName = () => {
		updateName(value);
	}

	return (
		<>
			<div className="Objective-one">
				{/* TODO Update greeting in header */}
				<label htmlFor="name">Name:</label>
				<input value={value} id="name" onChange={onNameChanged}></input>
				<button onClick={onUpdateName}>Update</button>
			</div>
			<hr />
			<DisplayData />
		</>
	);
};

export default Content;
