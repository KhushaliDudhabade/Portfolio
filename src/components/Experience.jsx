import { Box, Typography, Container, Paper, Chip, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const MotionBox = motion.create(Box);

const responsibilities = [
  'Building and maintaining ReactJS-based web applications',
  'Implementing complex state management using Redux',
  'Developing interactive workflow editors with React Flow',
  'Integrating RESTful APIs and handling async data flows',
  'Debugging, performance optimization, and code reviews',
  'Collaborating with cross-functional teams for feature delivery',
];

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="experience"
      sx={{
        py: 10,
        background: isDark
          ? 'linear-gradient(180deg, #112240 0%, #0a192f 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f5f0ff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            Experience
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: isDark
                ? 'linear-gradient(90deg, #64ffda, #bb86fc)'
                : 'linear-gradient(90deg, #7c3aed, #a855f7)',
              borderRadius: 2,
              mb: 4,
            }}
          />

          <Paper
            elevation={0}
            sx={{
              p: 4,
              border: '1px solid',
              borderColor: isDark ? 'rgba(100,255,218,0.15)' : 'rgba(124,58,237,0.12)',
              bgcolor: isDark ? 'rgba(17,34,64,0.8)' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              '&:hover': {
                boxShadow: isDark
                  ? '0 16px 40px rgba(100,255,218,0.08)'
                  : '0 16px 40px rgba(124,58,237,0.1)',
                borderColor: isDark ? 'rgba(100,255,218,0.3)' : 'rgba(124,58,237,0.25)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: 4,
                height: '100%',
                background: isDark
                  ? 'linear-gradient(180deg, #64ffda, #bb86fc)'
                  : 'linear-gradient(180deg, #7c3aed, #a855f7)',
              },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  bgcolor: isDark ? 'rgba(100,255,218,0.1)' : 'rgba(124,58,237,0.08)',
                }}
              >
                <WorkIcon color="primary" sx={{ fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Frontend Developer
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    background: isDark
                      ? 'linear-gradient(90deg, #64ffda, #4ecdc4)'
                      : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hyperminds Tech
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023 — Present · 1.6+ years
                </Typography>
              </Box>
            </Stack>

            <Box component="ul" sx={{ pl: 2, mb: 3 }}>
              {responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1, lineHeight: 1.7 }}
                  >
                    {item}
                  </Typography>
                </motion.li>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['ReactJS', 'Redux', 'React Flow', 'Material UI', 'Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    borderColor: isDark ? 'rgba(100,255,218,0.4)' : 'rgba(124,58,237,0.3)',
                    border: '1px solid',
                    bgcolor: isDark ? 'rgba(100,255,218,0.08)' : 'rgba(124,58,237,0.06)',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: isDark ? 'rgba(100,255,218,0.15)' : 'rgba(124,58,237,0.12)',
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              ))}
            </Box>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  );
}
