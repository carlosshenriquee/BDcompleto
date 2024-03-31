import React from 'react'

const modal = ({titulo, mensagem, onClose}) => {
    return (
        <div className="modal modaltrue" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{titulo}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>{mensagem}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>OK</button>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal