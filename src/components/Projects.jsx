import { Box, Typography, Container, Card, CardContent, Chip, Button, Stack, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const MotionCard = motion.create(Card);

const projects = [
  {
    title: 'Skyshift',
    subtitle: 'ETL Platform (Live)',
    description:
      'A comprehensive ETL platform enabling users to build, manage, and monitor data pipelines with an intuitive drag-and-drop workflow editor built using React Flow.',
    tech: ['ReactJS', 'Redux', 'React Flow', 'Material UI', 'FastAPI', 'PostgreSQL'],
    contributions: [
      'Built interactive workflow editor with React Flow',
      'Implemented complex state management with Redux',
      'Designed responsive UI components with MUI',
    ],
    live: 'https://app.myskyshift.com/',
    github: '#',
  },
  {
    title: 'Personal Finance Tracker',
    subtitle: 'Full-Stack Web App',
    description:
      'A full-stack application for tracking personal finances, managing budgets, and visualizing spending patterns with interactive charts and dashboards.',
    tech: ['ReactJS', 'Node.js', 'MongoDB', 'Material UI', 'Chart.js'],
    contributions: [
      'Developed responsive dashboard with data visualizations',
      'Implemented authentication and user management',
      'Built RESTful APIs for CRUD operations',
    ],
    live: '#',
    github: 'https://github.com/KhushaliDudhabade/personalFinanceTracker',
  },
  {
    title: 'Podcast Web App',
    subtitle: 'Media Streaming Platform',
    description:
      'A modern podcast streaming application with features like playlist management, episode tracking, and a clean audio player interface.',
    tech: ['ReactJS', 'Firebase', 'Redux', 'CSS3'],
    contributions: [
      'Created custom audio player with playback controls',
      'Implemented real-time data sync with Firebase',
      'Built search and filter functionality',
    ],
    live: '#',
    github: 'https://github.com/KhushaliDudhabade/Podcast_platform',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: isDark
          ? 'linear-gradient(180deg, #0a192f 0%, #112240 100%)'
          : 'linear-gradient(180deg, #f5f0ff 0%, #ede4ff 50%, #f5f0ff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            Featured Projects
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
        </motion.div>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <MotionCard
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(124,58,237,0.1)',
                  bgcolor: isDark ? 'rgba(17,34,64,0.8)' : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: 'primary.main',
                    boxShadow: isDark
                      ? '0 20px 50px rgba(100,255,218,0.1)'
                      : '0 20px 50px rgba(124,58,237,0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      background: isDark
                        ? 'linear-gradient(90deg, #64ffda, #4ecdc4)'
                        : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {project.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2, lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>

                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                    Key Contributions:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 0.5, mb: 2 }}>
                    {project.contributions.map((c, j) => (
                      <Typography component="li" variant="caption" color="text.secondary" key={j} sx={{ mb: 0.3 }}>
                        {c}
                      </Typography>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {project.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '0.7rem',
                          borderColor: isDark ? 'rgba(100,255,218,0.3)' : 'rgba(124,58,237,0.3)',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <Stack direction="row" spacing={1} sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={project.live}
                    sx={{
                      background: isDark
                        ? 'linear-gradient(135deg, #64ffda, #4ecdc4)'
                        : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                      color: isDark ? '#0a192f' : '#fff',
                      '&:hover': { transform: 'scale(1.02)' },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    sx={{
                      '&:hover': { transform: 'scale(1.02)' },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    GitHub
                  </Button>
                </Stack>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
