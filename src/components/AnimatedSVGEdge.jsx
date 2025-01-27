import React, { useState } from "react";
import { BaseEdge, getSmoothStepPath } from "reactflow";

export default function AnimatedSVGEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const delayAtoB = data?.delayAtoB || "0s"; // Retraso para A -> B
  const delayBtoA = data?.delayBtoA || "5s"; // Retraso para B -> A
  const colorAtoB = data?.colorAtoB || "#ff0073"; // Color para A -> B
  const colorBtoA = data?.colorBtoA || "#0073ff"; // Color para B -> A

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const handleMouseEnter = (event, text) => {
    setTooltip({
      visible: true,
      x: event.clientX + 10,
      y: event.clientY + 10,
      text,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, text: "" });
  };

  return (
    <>
      {/* Edge fijo */}
      <BaseEdge id={id} path={edgePath} />

      {/* Animación A -> B */}
      <circle
        r="10"
        fill={colorAtoB}
        onMouseEnter={(e) => handleMouseEnter(e, "A to B: Moving")}
        onMouseLeave={handleMouseLeave}
      >
        <animateMotion
          id={`anim-atoB-${id}`} // ID único para A -> B
          dur="3s" // Duración de ida
          repeatCount="1" // Solo una repetición
          path={edgePath} // Path para el movimiento
          begin={delayAtoB} // Inicio de A -> B
        />
      </circle>

      {/* Animación B -> A */}
      <circle
        r="10"
        fill={colorBtoA}
        onMouseEnter={(e) => handleMouseEnter(e, "B to A: Returning")}
        onMouseLeave={handleMouseLeave}
      >
        <animateMotion
          id={`anim-btoA-${id}`} // ID único para B -> A
          dur="3s" // Duración de vuelta
          repeatCount="1" // Solo una repetición
          path={edgePath} // Path para el movimiento
          begin={delayBtoA} // Inicio de B -> A
          keyPoints="1;0" // Invertir el flujo
          keyTimes="0;1" // Ajustar los tiempos
        />
      </circle>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: "black",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            pointerEvents: "none",
            fontSize: "12px",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
}
