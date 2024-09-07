// SpiderWeb.js
import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SpiderWeb = ({ size = 300, strokeColor = "#00ff00" }) => {
  const numLines = 12; // Number of radial lines
  const numCircles = 4; // Number of concentric circles
  const radiusStep = size / (numCircles + 1);
  const angleStep = (2 * Math.PI) / numLines;

  const lines = [];
  const circles = [];

  // Generate radial lines
  for (let i = 0; i < numLines; i++) {
    const angle = i * angleStep;
    const x1 = size / 2 + (radiusStep * (numCircles + 1)) * Math.cos(angle);
    const y1 = size / 2 + (radiusStep * (numCircles + 1)) * Math.sin(angle);

    for (let j = 1; j <= numCircles; j++) {
      const r = j * radiusStep;
      const x2 = size / 2 + r * Math.cos(angle);
      const y2 = size / 2 + r * Math.sin(angle);
      lines.push(
        <Line key={`line-${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={strokeColor} strokeWidth="1" />
      );
    }
  }

  // Generate concentric circles
  for (let i = 1; i <= numCircles; i++) {
    const r = i * radiusStep;
    circles.push(
      <Circle key={`circle-${i}`} cx={size / 2} cy={size / 2} r={r} stroke={strokeColor} fill="none" strokeWidth="1" />
    );
  }

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg" style={{opacity:0.5}}>
      {circles}
      {lines}
    </Svg>
  );
};

export default SpiderWeb;
