
const AdminModal = ({ isOpen, onClose, title, children, onConfirm, confirmText = "Save Changes", loading = false }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(4px);
                    display: grid;
                    place-items: center;
                    z-index: 9999;
                    animation: fadeIn 0.2s ease-out;
                }
                .modal-content {
                    background: white;
                    width: 90%;
                    max-width: 500px;
                    border-radius: 24px;
                    padding: 32px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    position: relative;
                    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .modal-header {
                    margin-bottom: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .modal-header h2 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 800;
                    color: #1e293b;
                }
                .close-btn {
                    background: #f1f5f9;
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: grid;
                    place-items: center;
                    color: #64748b;
                    transition: all 0.2s;
                }
                .close-btn:hover {
                    background: #e2e8f0;
                    color: #0f172a;
                }
                .modal-body {
                    margin-bottom: 32px;
                }
                .modal-footer {
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                }
                .btn-cancel {
                    padding: 12px 24px;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    background: white;
                    color: #64748b;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-confirm {
                    padding: 12px 24px;
                    border-radius: 12px;
                    border: none;
                    background: #0f172a;
                    color: white;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-confirm:hover {
                    background: #334155;
                }
                .btn-confirm:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={onClose}>Cancel</button>
                    {onConfirm && (
                        <button 
                            className="btn-confirm" 
                            onClick={onConfirm}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : confirmText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminModal;
