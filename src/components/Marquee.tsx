import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: string; // e.g. "10s"
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = "30s" }) => (
  <div
    style={{
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: "100%",
    }}
  >
    <div
      style={{
        display: "inline-block",
        paddingLeft: "100%",
        animation: `marquee ${speed} linear infinite`,
      }}
    >
      {children}
    </div>
    <style>
      {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}
    </style>
  </div>
);

export default Marquee;
