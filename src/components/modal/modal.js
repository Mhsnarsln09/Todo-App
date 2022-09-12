import React from 'react'
import "./modal.css"
export function Modal({
    title = "Modal Title",
	children,
	openModal = false,
	closeModal = () => null,
	modalFooter,
}) {
    if(!openModal) return null
    return (
        <div className="modal" style={{ display: openModal ? "block" : "none" }} tabIndex="-1" onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                    {children}
                    </div>
                    <div className="modal-footer">
                    {modalFooter}
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

