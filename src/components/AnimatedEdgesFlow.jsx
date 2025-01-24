import React from 'react';
import { ReactFlow, Background, useNodesState, useEdgesState } from 'reactflow';
import { AnimatedSVGEdge } from './AnimatedSVGEdge';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: -100, y: -200 }, data: { label: 'A' } },
  { id: '2', position: { x: 100, y: 200 }, data: { label: 'B' } },
];

const initialEdges = [
  { id: '1->2', type: 'animatedSvg', source: '1', target: '2' },
];

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

const AnimatedEdgesFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '500px' }}> {/* Contenedor con dimensiones */}
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
