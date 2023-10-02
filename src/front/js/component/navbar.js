import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const{actions, store} = useContext(Context)
	const navigate = useNavigate();

	function handleLogout() {
		let logged = actions.logout()
		if (!logged) {
			navigate("/login")
		}
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary me-2">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary  me-2">Sign Up</button>
					</Link>
					<Link to="/login">
						{store.auth ? <button className="btn btn-primary" onClick={handleLogout}>Logout</button>:null}
					</Link>
				</div>
			</div>
		</nav>
	);
};
