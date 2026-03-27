import { useState } from "react";
import Toggle from "./Toggle";

export default function InternetPanel() {
  const [wifiOn, setWifiOn] = useState(true);
  const [hotspotOn, setHotspotOn] = useState(false);
  const [airplaneOn, setAirplaneOn] = useState(false);

  return (
    <div className="internet-wrapper">
      <div className="internet-hero glass">
        <div className="wifi-icon"><img src="wifi.png" alt="Wi-Fi Icon" /></div>

        <div>
          <div className="internet-title">Wi‑Fi</div>
          <div className="internet-sub">Connect network</div>
        </div>
      </div>

      {/* 📋 LIST */}
      <div className="internet-list">
        {/* WiFi */}
        <div className="internet-item glass">
          <div>
            <div className="internet-item-title">Wi‑Fi</div>
            <div className="internet-item-desc">
              Connect, manage known networks
            </div>
          </div>

          <Toggle
            label=""
            settingKey="wifiEnabled"
            checked={wifiOn}
            onChange={() => setWifiOn(!wifiOn)}
          />
        </div>

        {/* VPN */}
        <div className="internet-item glass clickable">
          <div>
            <div className="internet-item-title">VPN</div>
            <div className="internet-item-desc">
              Add, connect, manage
            </div>
          </div>

          <span className="chevron">›</span>
        </div>

        {/* Hotspot */}
        <div className="internet-item glass">
          <div>
            <div className="internet-item-title">Mobile hotspot</div>
            <div className="internet-item-desc">
              Share your internet connection
            </div>
          </div>

          <Toggle
            label=""
            settingKey="hotspot"
            checked={hotspotOn}
            onChange={() => setHotspotOn(!hotspotOn)}
          />
        </div>

        {/* Airplane */}
        <div className="internet-item glass">
          <div>
            <div className="internet-item-title">Airplane mode</div>
            <div className="internet-item-desc">
              Stop wireless communication
            </div>
          </div>

          <Toggle
            label=""
            settingKey="airplane"
            checked={airplaneOn}
            onChange={() => setAirplaneOn(!airplaneOn)}
          />
        </div>

        {/* Advanced */}
        <div className="internet-item glass clickable">
          <div>
            <div className="internet-item-title">
              Advanced network settings
            </div>
            <div className="internet-item-desc">
              View adapters, network reset
            </div>
          </div>

          <span className="chevron">›</span>
        </div>
      </div>
    </div>
  );
}