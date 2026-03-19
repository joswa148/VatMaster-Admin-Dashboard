import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const result = await login(username, password);
            if (result.success) {
                navigate("/dashboard");
            } else {
                setError(result.message);
                setIsSubmitting(false);
            }
        } catch {
            setError("An unexpected error occurred.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-root">
            <style>{`
                .login-root {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0B2F35;
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                /* Background Effects */
                .login-root::before {
                    content: '';
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(0, 230, 246, 0.1) 0%, transparent 70%);
                    top: -200px;
                    right: -100px;
                }

                .login-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 48px;
                    border-radius: 32px;
                    width: min(450px, 90vw);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    z-index: 10;
                }

                .login-header { text-align: center; margin-bottom: 40px; }
                .login-header h1 { color: white; font-size: 28px; font-weight: 800; margin: 0; }
                .login-header p { color: #00E6F6; font-size: 14px; margin-top: 8px; font-weight: 500; opacity: 0.8; }

                .form-group { margin-bottom: 24px; }
                .form-group label { display: block; color: rgba(255, 255, 255, 0.6); font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px; }
                
                .input-wrapper { position: relative; }
                .login-input {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 14px 16px;
                    border-radius: 12px;
                    color: white;
                    font-size: 15px;
                    outline: none;
                    transition: all 0.2s;
                }
                .login-input:focus {
                    border-color: #00E6F6;
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 0 0 4px rgba(0, 230, 246, 0.1);
                }

                .error-box {
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                    padding: 12px;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 24px;
                    text-align: center;
                }

                .login-btn {
                    width: 100%;
                    background: #00E6F6;
                    color: #0B2F35;
                    border: none;
                    padding: 16px;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .login-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0, 230, 246, 0.3); }
                .login-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

                .login-footer { margin-top: 32px; text-align: center; color: rgba(255, 255, 255, 0.4); font-size: 13px; }
            `}</style>

            <div className="login-card">
                <div className="login-header">
                    <h1>VAT Masters</h1>
                    <p>Admin Control Center</p>
                </div>

                {error && <div className="error-box">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="login-input" 
                            placeholder="Enter username" 
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="login-input" 
                            placeholder="••••••••" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn" disabled={isSubmitting}>
                        {isSubmitting ? "Authenticating..." : "Sign In to Dashboard"}
                    </button>
                </form>

                <div className="login-footer">
                    Authorized Personnel Only <br/>
                    &copy; 2026 VAT Masters UAE
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
