import React from "react";
import Navbar from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
