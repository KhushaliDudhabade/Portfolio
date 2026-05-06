import { useCallback, useEffect, useMemo } from 'react';
import { Box, Typography, Container, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const MotionBox = motion.create(Box);

const getNodes = (isDark) => {
  const bg = isDark ? '#1a1a2e' : '#ffffff';
  return [
    {
      id: '1',
      position: { x: 50, y: 50 },
      data: { label: '📋 User Input' },
      style: { background: bg, color: isDark ? '#64ffda' : '#7c3aed', border: `2px solid ${isDark ? '#64ffda' : '#7c3aed'}`, borderRadius: 12, padding: 10 },
    },
    {
      id: '2',
      position: { x: 300, y: 50 },
      data: { label: '⚛️ React Component' },
      style: { background: bg, color: isDark ? '#bb86fc' : '#9c27b0', border: `2px solid ${isDark ? '#bb86fc' : '#9c27b0'}`, borderRadius: 12, padding: 10 },
    },
    {
      id: '3',
      position: { x: 550, y: 50 },
      data: { label: '🔄 Redux Store' },
      style: { background: bg, color: isDark ? '#ffd700' : '#f59e0b', border: `2px solid ${isDark ? '#ffd700' : '#f59e0b'}`, borderRadius: 12, padding: 10 },
    },
    {
      id: '4',
      position: { x: 300, y: 180 },
      data: { label: '🌐 API Call' },
      style: { background: bg, color: isDark ? '#ff6b6b' : '#ef4444', border: `2px solid ${isDark ? '#ff6b6b' : '#ef4444'}`, borderRadius: 12, padding: 10 },
    },
    {
      id: '5',
      position: { x: 550, y: 180 },
      data: { label: '🗄️ Database' },
      style: { background: bg, color: isDark ? '#4ecdc4' : '#0d9488', border: `2px solid ${isDark ? '#4ecdc4' : '#0d9488'}`, borderRadius: 12, padding: 10 },
    },
    {
      id: '6',
      position: { x: 150, y: 180 },
      data: { label: '🎨 UI Update' },
      style: { background: bg, color: isDark ? '#64ffda' : '#7c3aed', border: `2px solid ${isDark ? '#64ffda' : '#7c3aed'}`, borderRadius: 12, padding: 10 },
    },
  ];
};

const getEdges = (isDark) => [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: isDark ? '#64ffda' : '#7c3aed' }, markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#64ffda' : '#7c3aed' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: isDark ? '#bb86fc' : '#9c27b0' }, markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#bb86fc' : '#9c27b0' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: isDark ? '#ff6b6b' : '#ef4444' }, markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#ff6b6b' : '#ef4444' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: isDark ? '#4ecdc4' : '#0d9488' }, markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#4ecdc4' : '#0d9488' } },
  { id: 'e3-6', source: '3', target: '6', animated: true, style: { stroke: isDark ? '#ffd700' : '#f59e0b' }, markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#ffd700' : '#f59e0b' } },
];

export default function InteractiveShowcase() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [nodes, setNodes, onNodesChange] = useNodesState(getNodes(isDark));
  const [edges, setEdges, onEdgesChange] = useEdgesState(getEdges(isDark));

  useEffect(() => {
    setNodes(getNodes(isDark));
    setEdges(getEdges(isDark));
  }, [isDark, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <Box id="showcase" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            Interactive Showcase
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: isDark
                ? 'linear-gradient(90deg, #64ffda, #bb86fc)'
                : 'linear-gradient(90deg, #7c3aed, #a855f7)',
              borderRadius: 2,
              mb: 2,
            }}
          />
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
            A live React Flow demo showcasing my ability to build interactive workflow
            editors. Drag nodes around, explore the data flow architecture I work with daily.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              height: 380,
              border: '1px solid',
              borderColor: isDark ? 'rgba(100,255,218,0.15)' : 'rgba(124,58,237,0.12)',
              borderRadius: 3,
              overflow: 'hidden',
              bgcolor: isDark ? 'rgba(17,34,64,0.6)' : 'rgba(255,255,255,0.9)',
            }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
              attributionPosition="bottom-left"
            >
              <Background color={isDark ? '#333' : '#ddd'} gap={20} />
              <Controls />
            </ReactFlow>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  );
}
