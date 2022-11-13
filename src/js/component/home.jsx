import React from "react";
import { Navbar } from "./navbar.jsx"
import { Jumbotron } from "./jumbotran.jsx"
import { Card } from "./cardone.jsx"
import { Footer } from "./footer.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	let text1 = " It has been such a challenging but incredible journey. I'm thankful for the oppurtunity."
	let text2 = "I'm officially a Full Stack Developer and I get to travel the World while doing what i love!>"
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex">
					<Card description={text1} />
					<Card description={text2} />
					<Card description={text1} />
					<Card description={text2} />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
