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
	width: 30%; 
	height: 30%; 
	overflow: auto; 
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
	`;

const Modal = ({open, children}) => {


alert(open);
	const onClose = () => {
		alert(open);
		open = false;
	};
	return (
		<>

			<StyledModal
				open={open}
			>

				<div id="monModal">

					<div class="modal-content">
						<a id="closeModal" onClick={() => onClose()}>X</a>
						<p>{children}</p>
					</div>
				</div>
			</StyledModal>
		</>
	);
};


export default Modal;

