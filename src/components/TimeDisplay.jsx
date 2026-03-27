import { useEffect, useState } from "react";

export default function TimeDisplay() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const formatTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formatDate = time.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (

    <div className="time-container">

      <div className="time-left">
        <div className="time-main">{formatTime}</div>
        <div className="time-date">{formatDate}</div>
      </div>

      <div className="time-right">

        <div className="time-info">

          <span className="time-icon"><img src="globe.png"/></span>

          <div>
            <div className="time-label">Time zone</div>
            <div className="time-value">
              (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
            </div>
          </div>

        </div>

        <div className="time-info">

          <span className="time-icon"><img src="clock.png"/></span>

          <div>
            <div className="time-label">Region</div>
            <div className="time-value">India</div>
          </div>

        </div>

      </div>

    </div>

  );

}