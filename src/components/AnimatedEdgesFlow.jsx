import React from 'react';
import { ReactFlow, Background, useNodesState, useEdgesState } from 'reactflow';
import AnimatedSVGEdge from './AnimatedSVGEdge';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: -100, y: -200 }, data: { label: 'Billetera' } },
  { id: '2', position: { x: -100, y: 0 }, data: { label: 'Administrador' } },
  { id: '3', position: { x: 100, y: 0 }, data: { label: 'Aceptador' } },
  { id: '4', position: { x: -100, y: 200 }, data: { label: 'Procesador' } },
  { id: '5', position: { x: -300, y: 400 }, data: { label: 'Banco Emisor (Usuario)' } },
  { id: '6', position: { x: -100, y: 400 }, data: { label: 'Banco Cta Puente' } },
  { id: '7', position: { x: 100, y: 400 }, data: { label: 'Banco Comercio' } },
  { id: '8', position: { x: 200, y: -200 }, data: { label: 'QR Comercio' }, targetPosition: 'left' },
];

const initialEdges = [
    {
      id: 'edge1', // Billetera a Administrador
      type: 'animatedSvg',
      source: '1',
      target: '2',
      data: {
        delayAtoB: '0s', // Inicio de A -> B
        delayBtoA: '33s', // Inicio de B -> A
        colorAtoB: '#ff0073', // Color de A -> B
        colorBtoA: '#0073ff', // Color de B -> A
      },
    },
    {
        id: 'edge2', // Administrador a Aceptador
        type: 'animatedSvg',
        source: '2',
        target: '3',
        data: {
          delayAtoB: '3s', // Inicio de A -> B
          delayBtoA: '6s', // Inicio de B -> A
          colorAtoB: '#ff0073', // Color de A -> B
          colorBtoA: '#0073ff', // Color de B -> A
        },
      },
      {
        id: 'edge3', // Administrador a Procesador
        type: 'animatedSvg',
        source: '2',
        target: '4',
        data: {
          delayAtoB: '9s', // Inicio de A -> B
          delayBtoA: '30s', // Inicio de B -> A
          colorAtoB: '#ff0073', // Color de A -> B
          colorBtoA: '#0073ff', // Color de B -> A
        },
      },
      {
        id: 'edge4', //Procesador a Bcro Emisor
        type: 'animatedSvg',
        source: '4',
        target: '5',
        data: {
          delayAtoB: '12s', // Inicio de A -> B
          delayBtoA: '15s', // Inicio de B -> A
          colorAtoB: '#ff0073', // Color de A -> B
          colorBtoA: '#0073ff', // Color de B -> A
        },
      },
      {
        id: 'edge5', //Procesador a Bco cta Puente
        type: 'animatedSvg',
        source: '4',
        target: '6',
        data: {
          delayAtoB: '18s', // Inicio de A -> B
          delayBtoA: '21s', // Inicio de B -> A
          colorAtoB: '#ff0073', // Color de A -> B
          colorBtoA: '#0073ff', // Color de B -> A
        },
      },
      {
        id: 'edge6', //Procesador a Bco Comercio
        type: 'animatedSvg',
        source: '4',
        target: '7',
        data: {
          delayAtoB: '24s', // Inicio de A -> B
          delayBtoA: '27s', // Inicio de B -> A
          colorAtoB: '#ff0073', // Color de A -> B
          colorBtoA: '#0073ff', // Color de B -> A
        },
      },
      {
        id: 'edge7', //Procesador a Bco Comercio
        type: 'animatedSvg',
        source: '2',
        target: '3',
        data: {
          delayAtoB: '33s', // Inicio de A -> B
          delayBtoA: '36s', // Inicio de B -> A
          colorAtoB: '#ff0073', // Color de A -> B
          colorBtoA: '#0073ff', // Color de B -> A
        },
      },
      {
        id: 'edge0', //Billetera a QR Comercio
        animated: true,
        type: 'smoothstep',
        label: 'LECTURA DE QR',
        source: '1',
        target: '8',
      },
      {
        id: 'edge0B', //Billetera a Aceptador
        animated: true,
        type: 'smoothstep',
        label: 'API RESOLVE',
        source: '1',
        target: '3',
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
