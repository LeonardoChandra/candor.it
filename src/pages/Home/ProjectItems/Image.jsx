import React from "react";
import "./style.css";

export default function Image({ url, opacity, parallaxPos, rotationPosition, scale }) {
  return (
    <img
      src={url}
      className="project__projects-img"
      style={{
        opacity,
        transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPosition}deg) scale(${scale})`,
      }}
    />
  );
}
