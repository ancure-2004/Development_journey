import UserCard from "./components/userCard";
import "./App.css";
import ankurImg from "./assets/Ankur.jpg";
import dakshImg from "./assets/daksh.png";
import amanImg from "./assets/aman.png";

function App() {
	return (
		<div className="container">
			<UserCard name="Ankur Tyagi" desc="ankur" image={ankurImg} />
			<UserCard name="Aman Singhal" desc="Aman" image={amanImg} />
			<UserCard name="Daksh Kaushik" desc="Daksh" image={dakshImg} />
		</div>
	);
}

export default App;
