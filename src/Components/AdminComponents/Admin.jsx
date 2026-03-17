import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  // ✅ change your admin credentials here
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "2020@Global";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");

    const u = username.trim();
    const p = password;

    if (!u || !p) {
      setErr("Please enter username and password");
      return;
    }

    if (u === ADMIN_USER && p === ADMIN_PASS) {
      // ✅ store login session
      localStorage.setItem("ADMIN_AUTH", "true");

      // ✅ go to dashboard
      navigate("/dashboard", { replace: true });
    } else {
      setErr("Invalid username or password");
    }
  };

  return (
    <>
      <style>{`
        .ad-wrap{
          min-height:100vh;
          display:grid;
          place-items:center;
          padding:18px;
          background: #f6f7fb;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        .ad-card{
          width:min(420px, 96vw);
          background:#fff;
          border:1px solid rgba(0,0,0,.08);
          border-radius:12px;
          box-shadow:0 18px 50px rgba(0,0,0,.10);
          overflow:hidden;
        }
        .ad-head{
          padding:16px 16px 12px;
          border-bottom:1px solid rgba(0,0,0,.08);
          background: #ffffff;
        }
        .ad-title{ margin:0; font-size:22px; font-weight:900; }
        .ad-sub{ margin:6px 0 0; color:#6b7280; font-weight:700; font-size:13px; }
        .ad-body{ padding:16px; display:flex; flex-direction:column; gap:12px; }
        .ad-field label{ display:block; font-size:13px; font-weight:900; color:#6b7280; margin-bottom:6px; }
        .ad-input{
          width:100%;
          height:44px;
          border:1px solid rgba(0,0,0,.12);
          border-radius:10px;
          padding:0 12px;
          outline:none;
          font-weight:800;
        }
        .ad-input:focus{ border-color:#5b63d6; box-shadow:0 0 0 4px rgba(91,99,214,.14); }
        .ad-passRow{ display:flex; gap:10px; align-items:center; }
        .ad-eye{
          height:44px; width:52px;
          border-radius:10px;
          border:1px solid rgba(0,0,0,.12);
          background:#fff;
          cursor:pointer;
          font-weight:900;
        }
        .ad-btn{
          height:46px;
          border:0;
          border-radius:10px;
          background:#5b63d6;
          color:#fff;
          font-weight:900;
          cursor:pointer;
        }
        .ad-btn:active{ transform: translateY(1px); }
        .ad-err{
          background: rgba(231,76,60,.10);
          color: #b42318;
          border: 1px solid rgba(231,76,60,.25);
          padding:10px 12px;
          border-radius:10px;
          font-weight:900;
          font-size:13px;
        }
      `}</style>

      <div className="ad-wrap">
        <div className="ad-card">
          <div className="ad-head">
            <h1 className="ad-title">Admin Login</h1>
            <p className="ad-sub">Enter your credentials to continue</p>
          </div>

          <form className="ad-body" onSubmit={handleSubmit}>
            {err ? <div className="ad-err">{err}</div> : null}

            <div className="ad-field">
              <label>Username</label>
              <input
                className="ad-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>

            <div className="ad-field">
              <label>Password</label>
              <div className="ad-passRow">
                <input
                  className="ad-input"
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="ad-eye"
                  onClick={() => setShowPass((s) => !s)}
                  aria-label="Toggle password visibility"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button className="ad-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
