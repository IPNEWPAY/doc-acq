import React from "react";
import { BaseEdge, getSmoothStepPath } from "reactflow";

export function AnimatedSVGEdge({
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

  return (
    <>
      {/* Edge fijo */}
      <BaseEdge id={id} path={edgePath} />

      {/* Animación A -> B */}
      <circle r="10" fill={colorAtoB}>
        <animateMotion
          id={`anim-atoB-${id}`} // ID único para A -> B
          dur="5s" // Duración de ida
          repeatCount="1" // Solo una repetición
          path={edgePath} // Path para el movimiento
          begin={delayAtoB} // Inicio de A -> B
        />
      </circle>

      {/* Animación B -> A */}
      <circle r="10" fill={colorBtoA}>
        <animateMotion
          id={`anim-btoA-${id}`} // ID único para B -> A
          dur="5s" // Duración de vuelta
          repeatCount="1" // Solo una repetición
          path={edgePath} // Path para el movimiento
          begin={delayBtoA} // Inicio de B -> A
          keyPoints="1;0" // Invertir el flujo
          keyTimes="0;1" // Ajustar los tiempos
        />
      </circle>
    </>
  );
}
