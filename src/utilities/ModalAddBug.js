import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import BugForm from "../components/BugForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faPlus, faPencil } from "@fortawesome/free-solid-svg-icons";

class ModalAddBug extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}

	render() {
		return (
			<div>
				{!this.props.title && (
					<FontAwesomeIcon
						style={{ marginRight: "10px" }}
						icon={faPencil}
						size={"1x"}
						color={"red"}
						onClick={this.toggle}
					/>
				)}
				{this.props.title && (
					<Button
						color="dark"
						onClick={this.toggle}
						style={{ marginRight: "20px", width: "125px" }}
					>
						{/* Add Bug */}
						{this.props.title}
					</Button>
				)}
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					size="lg"
				>
					<ModalHeader toggle={this.toggle}>
						<FontAwesomeIcon icon={faPlus} size={"1x"} color={"red"} />
						<FontAwesomeIcon icon={faBug} size={"1x"} color={"red"} /> Add A Bug
					</ModalHeader>
					<BugForm />
					<ModalFooter>
						{/* <Button color="danger" outline onClick={this.toggle}>
							Save Bug
						</Button>{" "} */}
						<Button
							color="secondary"
							style={{ width: "100px" }}
							outline
							onClick={this.toggle}
						>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default ModalAddBug;
