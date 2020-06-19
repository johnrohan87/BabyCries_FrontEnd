import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [dropDown, setDropDown] = useState(false);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">BabyName</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary" onClick={() => setDropDown(true)}>
					Menu ?Burger
				</button>
			</div>

			{dropDown ? (
				<div>
					<button>Live Video</button>
					<button>Settings</button>
					<button>History</button>
				</div>
			) : null}
		</nav>
	);
};
