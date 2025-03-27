
import { useState } from "react";
import "./App.css";
import Button from "./components/button.jsx";
import Card from "./components/card.jsx";

function App() {
	const[count, setCount] = useState(0);

	function handleClick(){
		setCount(count+1);
	}

	return (
		<div>
			<Button handleClick={handleClick} text='Click Me'>
				<h1>{count}</h1>
			</Button>
			{/* <Card name="Ankur Tyagi">
				<h1>Best Web Dev Course</h1>
				<p>Trying to be consistent in this</p>
				<p>Will complete the course soon</p>
			</Card>
			<Card children="Hello Balak">
				Hello ji this is children
			</Card> */}
		</div>
	);
}

export default App;
