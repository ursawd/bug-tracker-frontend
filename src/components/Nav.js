import React from "react";
import { Button } from "reactstrap";
import ModalAddBug from "../utilities/ModalAddBug";

export default function Nav() {
	return (
		<div style={{ marginTop: "20px", marginBottom: "20px", display: "flex" }}>
			<Button style={{ marginRight: "20px", width: "125px" }} color="dark">
				List All Bugs
			</Button>
			<Button color="dark" style={{ marginRight: "20px", width: "125px" }}>
				Filter Bugs
			</Button>
			<ModalAddBug />
		</div>
	);
}
