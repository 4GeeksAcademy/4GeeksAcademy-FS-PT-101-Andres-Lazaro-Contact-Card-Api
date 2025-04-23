import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className=" navbar navbar-light bg-light my-4 pb-4">
			<div className="container ">
				<Link to="/">
					<button className=" btn btn-primary mx-3 ">Listado de Contactos </button>
				</Link>
				<div className="ml-auto">
					<Link to="/new_contact">
						<button className="btn btn-primary mx-3">Create Contact</button>
					</Link>

					<button className="btn btn-danger">Delete All Contact </button> {/* Falta implementar la funcionalidad de este boton*/ }
				</div>
			</div>
		</nav>
	);
};