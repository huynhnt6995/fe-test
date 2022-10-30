import React from "react";

interface Props {
  x?: number; 
  y?: number; 
  stroke?: number;
  payload?: {value: string};
}

function BodyWeightTick({x, y, stroke, payload}: Props){
  const texts = payload?.value.split(" ") as string[];
  return(
    <g transform={`translate(${x},${y})`}>
      <style>
      </style>
      <text x={-10} y={0} dy={16} fill="#FFF" >
        <tspan fontSize="0.75rem" fontFamily="Inter">{texts[0]}</tspan>
        <tspan dx="3" fontSize="0.5rem" fontFamily="Hiragino Kaku Gothic Pro" style={{marginLeft: 5}}>{texts[1]}</tspan>
      </text>
    </g>
  )
}

export default React.memo(BodyWeightTick);