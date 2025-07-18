import React, { useEffect, useState } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState
} from 'reactflow';
import AnimatedSVGEdge from './AnimatedSVGEdge';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: -100, y: -200 }, data: { label: 'Billetera' }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: '2', position: { x: -100, y: -110 }, data: { label: 'Administrador' }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: '3', position: { x: 100, y: -20 }, data: { label: 'Aceptador' }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: '4', position: { x: -100, y: -20 }, data: { label: 'Procesador' }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: '5', position: { x: -300, y: 100 }, data: { label: 'Banco Emisor (Usuario)' }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: '6', position: { x: -100, y: 100 }, data: { label: 'Banco Cta Puente' }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: '7', position: { x: 100, y: 100 }, data: { label: 'Banco Comercio' }, sourcePosition: 'bottom', targetPosition: 'top' },
  { id: '8', position: { x: 200, y: -200 }, data: { label: 'QR Comercio' }, sourcePosition: 'bottom', targetPosition: 'left' },
];

const initialEdges = [
  {
    id: 'edge1',
    type: 'animatedSvg',
    source: '1',
    target: '2',
    data: {
      delayAtoB: '0s',
      delayBtoA: '33s',
      colorAtoB: '#ff0073',
      colorBtoA: '#0073ff',
    },
  },
  {
    id: 'edge2',
    type: 'animatedSvg',
    source: '2',
    target: '3',
    data: {
      delayAtoB: '3s',
      delayBtoA: '6s',
      colorAtoB: '#ff0073',
      colorBtoA: '#0073ff',
    },
  },
  {
    id: 'edge3',
    type: 'animatedSvg',
    source: '2',
    target: '4',
    data: {
      delayAtoB: '9s',
      delayBtoA: '30s',
      colorAtoB: '#ff0073',
      colorBtoA: '#0073ff',
    },
  },
  {
    id: 'edge4',
    type: 'animatedSvg',
    source: '4',
    target: '5',
    data: {
      delayAtoB: '12s',
      delayBtoA: '15s',
      colorAtoB: '#ff0073',
      colorBtoA: '#0073ff',
    },
  },
  {
    id: 'edge5',
    type: 'animatedSvg',
    source: '4',
    target: '6',
    data: {
      delayAtoB: '18s',
      delayBtoA: '21s',
      colorAtoB: '#ff0073',
      colorBtoA: '#0073ff',
    },
  },
  {
    id: 'edge6',
    type: 'animatedSvg',
    source: '4',
    target: '7',
    data: {
      delayAtoB: '24s',
      delayBtoA: '27s',
      colorAtoB: '#ff0073',
      colorBtoA: '#0073ff',
    },
  },
  {
    id: 'edge7',
    type: 'animatedSvg',
    source: '2',
    target: '3',
    data: {
      delayAtoB: '33s',
      delayBtoA: '36s',
      colorAtoB: '#ff0073',
      colorBtoA: '#0073ff',
    },
  },
  {
    id: 'edge0',
    animated: true,
    type: 'smoothstep',
    label: 'LECTURA DE QR',
    source: '1',
    target: '8',
  },
  {
    id: 'edge0B',
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
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(match.matches ? 'dark' : 'light');

    const handleThemeChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    match.addEventListener('change', handleThemeChange);

    return () => match.removeEventListener('change', handleThemeChange);
  }, []);

  const backgroundColor = theme === 'dark' ? '#1a1a1a' : '#F7F9FB';
  const nodeTextColor = theme === 'dark' ? '#ffffff' : '#000000';
  const nodeBackground = theme === 'dark' ? '#333' : '#fff';

  const styledNodes = nodes.map((node) => ({
    ...node,
    style: {
      ...node.style,
      color: nodeTextColor,
      background: nodeBackground,
      border: '1px solid #ccc',
    },
  }));

  return (
    <div style={{  transform: 'scale(0.80)', transformOrigin: 'top center', width: '100%', height: '500px', backgroundColor }}>
      <ReactFlow
        nodes={styledNodes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={{ backgroundColor }}
      >
        <Background color={theme === 'dark' ? '#444' : '#aaa'} />
      </ReactFlow>
    </div>
  );
};

export default AnimatedEdgesFlow;
