import React from 'react';
import styled from "styled-components";
import Button from "./Button";

const StyledModal = styled.div`
	cursor: pointer;
	display:   ${props => props.visible ? 'flex' : 'none'};
	align-items: center;
	justify-content: centerM
	position: fixed; 
	z-index: 1; 
	left: 0;
	top: 0;
	width: 30%; 
	height: 30%; 
	overflow: auto; 
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
	`;

const Modal = ({visible,onClose,onOk,title, children}) => {

	return (
		<>

			<StyledModal
				visible={visible}
				onClose={onClose}
				onOk={onOk}
			>

				<div id="MyModal">
					{title}
					<div id="contentModal">
						<Button id="okModal" onClick={() => onOk()}>Ok</Button>
						<Button id="closeModal" onClick={() => onClose()}>Close</Button>
						<p>{children}</p>
					</div>
				</div>
			</StyledModal>
		</>
	);
};


export default Modal;

