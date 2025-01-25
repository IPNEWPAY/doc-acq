import React from 'react';
import { ReactFlow, Background, useNodesState, useEdgesState } from 'reactflow';
import { AnimatedSVGEdge } from './AnimatedSVGEdge';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: -100, y: -200 }, data: { label: 'A' } },
  { id: '2', position: { x: 100, y: 200 }, data: { label: 'B' } },
  { id: '3', position: { x: 400, y: 600 }, data: { label: 'C' } },
];

const initialEdges = [
    {
      id: 'edge1',
      type: 'animatedSvg',
      source: '1',
      target: '2',
      data: {
        delayAtoB: '0s', // Inicio de A -> B
        delayBtoA: '15s', // Inicio de B -> A
        colorAtoB: '#ff0073', // Color de A -> B
        colorBtoA: '#0073ff', // Color de B -> A
      },
    },
    {
        id: 'edge2',
        type: 'animatedSvg',
        source: '2',
        target: '3',
        data: {
          delayAtoB: '5s', // Inicio de A -> B
          delayBtoA: '10s', // Inicio de B -> A
          colorAtoB: '#ff0073', // Color de A -> B
          colorBtoA: '#0073ff', // Color de B -> A
        },
      },
  ];

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

const AnimatedEdgesFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '500px' }}> {/* Contenedor */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={{ backgroundColor: "#F7F9FB" }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default AnimatedEdgesFlow;
