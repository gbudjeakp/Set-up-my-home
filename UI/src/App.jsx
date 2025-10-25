// HOME PAGE COMPONENT

import { useState } from "react";
import "./App.css";

function App() {
  const [docker, setDocker] = useState(false);
  const [nginx, setNginx] = useState(false);
  const [fileServer, setFileServer] = useState(false);
  const [mediaServer, setMediaServer] = useState(false);
  const [adBlocker, setAdBlocker] = useState(false);
  const [os, setOs] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [diskSpace, setDiskSpace] = useState("");

  return (
    <>
      <h1>Set Up My Home</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input
            type="checkbox"
            checked={docker}
            onChange={() => setDocker(!docker)}
          />
          Docker
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={nginx}
            onChange={() => setNginx(!nginx)}
          />
          Nginx
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={fileServer}
            onChange={() => setFileServer(!fileServer)}
          />
          File Server
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={mediaServer}
            onChange={() => setMediaServer(!mediaServer)}
          />
          Media Server
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={adBlocker}
            onChange={() => setAdBlocker(!adBlocker)}
          />
          Ad Blocker
        </label>
      </div>
      <div>
        <label>OS</label>
        <input
          type="text"
          placeholder="Enter your OS"
          value={os}
          onChange={(e) => setOs(e.target.value)}
        />
        <br />
        <label>IP Address</label>
        <input
          type="text"
          placeholder="Enter your IP Address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <br />
        <label>Available Disk Space</label>
        <input
          type="text"
          placeholder="Enter available disk space"
          value={diskSpace}
          onChange={(e) => setDiskSpace(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => alert("Setup started! (placeholder for now)")}>
          Install
        </button>
      </div>
      <div>
        <h2>Current Configuration:</h2>
        <p>Docker: {docker ? "Yes" : "No"}</p>
        <p>Nginx: {nginx ? "Yes" : "No"}</p>
        <p>File Server: {fileServer ? "Yes" : "No"}</p>
        <p>Media Server: {mediaServer ? "Yes" : "No"}</p>
        <p>Ad Blocker: {adBlocker ? "Yes" : "No"}</p>
        <p>OS: {os}</p>
        <p>IP Address: {ipAddress}</p>
        <p>Available Disk Space: {diskSpace}</p>
      </div>
    </>
  );
}

export default App;
