import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/progressBar.jsx";
import axios from "axios";

function App() {
  const [docker, setDocker] = useState(false);
  const [nginx, setNginx] = useState(false);
  const [fileServer, setFileServer] = useState(false);
  const [mediaServer, setMediaServer] = useState(false);
  const [adBlocker, setAdBlocker] = useState(false);
  // const [os, setOs] = useState("");
  // const [ipAddress, setIpAddress] = useState("");
  // const [diskSpace, setDiskSpace] = useState("");
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = () => {
    if (isInstalling) return;
    setIsInstalling(true);
    sendConfiguration();
  };

  const sendConfiguration = async () => {
    const config = {
      docker,
      nginx,
      fileServer,
      mediaServer,
      adBlocker,
      // os,
      // ipAddress,
      // diskSpace,
    };
    try {
      const response = await axios.post("/api/someFlask", config);
      console.log("Configuration sent successfully:", response.data);
      if (response.data.status === "success") {
        setIsInstalling(false);
        // handle success here
      }
    } catch (error) {
      console.error("Error sending configuration:", error);
    }

    console.log("Sending configuration:", config);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 bg-gray-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Set Up My Homelab</h1>

      {/* Checkboxes */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          ["Docker", docker, setDocker],
          ["Nginx", nginx, setNginx],
          ["File Server", fileServer, setFileServer],
          ["Media Server", mediaServer, setMediaServer],
          ["Ad Blocker", adBlocker, setAdBlocker],
        ].map(([label, state, setter]) => (
          <label
            key={label}
            className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg shadow-sm border cursor-pointer"
          >
            <input
              type="checkbox"
              checked={state}
              onChange={() => setter(!state)}
              className="accent-blue-500"
            />
            {label}
          </label>
        ))}
      </div>

      {/* Text Inputs */}
      {/* <div className="flex flex-col gap-3 w-full max-w-md">
        <div className="flex flex-col">
          <label className="font-medium">OS</label>
          <input
            className="border rounded-md px-3 py-2"
            type="text"
            placeholder="Enter your OS"
            value={os}
            onChange={(e) => setOs(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">IP Address</label>
          <input
            className="border rounded-md px-3 py-2"
            type="text"
            placeholder="Enter your IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Available Disk Space</label>
          <input
            className="border rounded-md px-3 py-2"
            type="text"
            placeholder="Enter available disk space"
            value={diskSpace}
            onChange={(e) => setDiskSpace(e.target.value)}
          />
        </div>
      </div> */}

      {/* Install button */}
      <button
        disabled={isInstalling}
        onClick={handleInstall}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isInstalling ? "Installing..." : "Install"}
      </button>

      {/* Progress bar */}
      <div className="w-full max-w-md">
        <ProgressBar value={45} />
      </div>

      {/* Configuration summary */}
      <div className="w-full max-w-md bg-grey-10 border-2 border-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Current Configuration:</h2>
        <ul className="space-y-1 text-sm">
          <li>Docker: {docker ? "Yes" : "No"}</li>
          <li>Nginx: {nginx ? "Yes" : "No"}</li>
          <li>File Server: {fileServer ? "Yes" : "No"}</li>
          <li>Media Server: {mediaServer ? "Yes" : "No"}</li>
          <li>Ad Blocker: {adBlocker ? "Yes" : "No"}</li>
          {/* <li>OS: {os}</li>
          <li>IP Address: {ipAddress}</li>
          <li>Available Disk Space: {diskSpace}</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
