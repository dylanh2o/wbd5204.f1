import React from 'react';
import styled from "styled-components";


const StyledModal = styled.div`
	cursor: pointer;
	display:  ${props => props.open ? 'flex' : 'none'};
	align-items: center;
	justify-content: centerM
	position: fixed; 
	z-index: 1; 
	left: 0;
	top: 0;
	width: 100%; 
	height: 100%; 
	overflow: auto; 
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
	`;

const Modal = ({open = false, children}) => {

	const openModal = () => {
		open = true;
	};
	const closeModal = () => {
		open = false;
	};

	return (
		<>
			<button id="btnModal" onClick={() => openModal()}> {children}</button>
			<StyledModal
			open={open}
			>
				<div id="monModal" class="modal">

					<div class="modal-content">
						<a id="closeModal" onClick={() => closeModal()}>X</a>
						<p>test</p>
					</div>
				</div>
			</StyledModal>
		</>
	);
};


export default Modal;

