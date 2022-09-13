const Instructions = () => {
	return (
		<div className="App-instructions">
			<p>
				<b>Note:</b> This is a simple Create React App based example strictly for the sake
				of this interview and will not be used for any other purpose.
			</p>
			<h3> Objective 1</h3>
			<ul>
				<li>
					<b>User Requirement</b>
				</li>
				<ul>
					<li>
						Add functionality to input field and update button to allow user to update
						the header with their name.
					</li>
				</ul>
				<li>
					<b>Technical Requirement</b>
				</li>
				<ul>
					<li>Use controlled components</li>
					<li>Use shared headerText state</li>
				</ul>
			</ul>
			<h3>Objective 2</h3>
			<ul>
				<li>
					<b>User requirement</b>
					<ul>
						<li>
							Header requires functional one second incrementing timer with start/stop
							capabilities
						</li>
					</ul>
				</li>
				<li>
					<b>Technical Requirements</b>
				</li>
				<ul>
					<li>Timer should not reset on re-render of parent component</li>
				</ul>
			</ul>
			<h3>Objective 3</h3>
			<ul>
				<li>
					<b>User requirement</b>
					<ul>
						<li>
							Add functionality to load data from local data.json file from public
							folder and display contents.
						</li>
					</ul>
				</li>
				<li>
					<b>Technical Requirements</b>
				</li>
				<ul>
					<li>Use controlled components</li>
					<li>Display formatted JSON data</li>
				</ul>
			</ul>
		</div>
	);
};

export default Instructions;
