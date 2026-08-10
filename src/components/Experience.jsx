import { Box, Typography, Container, Paper, Chip, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const MotionBox = motion.create(Box);

const responsibilities = [
  'Developed 25+ reusable and responsive UI components using ReactJS, Redux, and Material UI (MUI)',
  'Optimized visual workflow editors using React Flow, reducing ETL pipeline creation time',
  'Integrated FastAPI REST APIs for ETL workflow execution, scheduling, and real-time data processing',
  'Resolved production issues by debugging frontend applications, reducing execution time by 30%',
  'Delivered 20+ client-requested feature enhancements and integrated AI-powered chatbot using Flowise AI',
  'Collaborated with cross-functional teams for feature delivery and code reviews',
];

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="experience"
      className={isDark ? 'bg-grid' : undefined}
      sx={{
        py: { xs: 6, md: 10 },
        background: isDark ? '#0C0B1E' : 'linear-gradient(180deg, #ffffff 0%, #f5f0ff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="overline"
            sx={{ display: 'block', letterSpacing: 3, fontWeight: 700, color: isDark ? '#D946EF' : 'primary.main' }}
          >
            Experience
          </Typography>
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            Experience
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: isDark
                ? 'linear-gradient(90deg, #A855F7, #D946EF)'
                : 'linear-gradient(90deg, #7c3aed, #a855f7)',
              borderRadius: 2,
              mb: 4,
            }}
          />

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              border: '1px solid',
              borderColor: isDark ? 'rgba(34,211,238,0.2)' : 'rgba(124,58,237,0.12)',
              bgcolor: isDark ? 'rgba(20,19,44,0.75)' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              '&:hover': {
                boxShadow: isDark
                  ? '0 16px 40px rgba(34,211,238,0.15)'
                  : '0 16px 40px rgba(124,58,237,0.1)',
                borderColor: isDark ? 'rgba(34,211,238,0.4)' : 'rgba(124,58,237,0.25)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: 4,
                height: '100%',
                background: isDark
                  ? 'linear-gradient(180deg, #22D3EE, #A855F7)'
                  : 'linear-gradient(180deg, #7c3aed, #a855f7)',
              },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  bgcolor: isDark ? 'rgba(34,211,238,0.12)' : 'rgba(124,58,237,0.08)',
                  boxShadow: isDark ? '0 0 24px rgba(34,211,238,0.35)' : 'none',
                }}
              >
                <WorkIcon sx={{ fontSize: 32, color: isDark ? '#22D3EE' : 'primary.main' }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Software Engineer
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    background: isDark
                      ? 'linear-gradient(90deg, #22D3EE, #A855F7)'
                      : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hyperminds Tech Private Limited
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Oct 2024 — Present · Pune, Maharashtra
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
              {['ReactJS', 'Redux', 'React Flow', 'Material UI', 'FastAPI', 'Flowise AI', 'REST APIs'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    borderRadius: '999px',
                    borderColor: isDark ? 'rgba(34,211,238,0.4)' : 'rgba(124,58,237,0.3)',
                    border: '1px solid',
                    bgcolor: isDark ? 'rgba(34,211,238,0.08)' : 'rgba(124,58,237,0.06)',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: isDark ? 'rgba(34,211,238,0.18)' : 'rgba(124,58,237,0.12)',
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
