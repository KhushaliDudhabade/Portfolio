import { Box, Typography, Container, Card, CardContent, Chip, Button, Stack, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const MotionCard = motion.create(Card);

const projects = [
  {
    title: 'Sigma CRM',
    subtitle: 'Sales, Marketing & Support Platform',
    description:
      'Enterprise CRM supporting deal pipelines, campaign automation, ticketing, and analytics dashboards with a visual workflow builder.',
    tech: ['ReactJS', 'React Query', 'Material UI', 'FastAPI'],
    contributions: [
      'Built frontend modules for deal pipelines, ticketing, and analytics',
      'Implemented visual workflow builder with 7 trigger types and 10+ automated actions',
      'Crafted marketing interfaces for campaigns, audience segmentation, and email templates',
      'Engineered bulk import/export with column mapping and batch processing',
      'Enabled scalable operations with RBAC, React Query caching, and webhook integration',
    ],
    live: 'https://www.sigma.hyperminds.tech/crm',
    github: null,
  },
  {
    title: 'Skyshift',
    subtitle: 'ETL & Data Integration Platform',
    description:
      'Enterprise ETL platform with scheduled and on-demand data pipelines, visual workflow editors, and enterprise connector integrations.',
    tech: ['ReactJS', 'React Flow', 'Redux', 'Material UI', 'FastAPI'],
    contributions: [
      'Designed visual workflow editors using React Flow for pipeline creation and execution',
      'Integrated FastAPI REST APIs with Salesforce, Snowflake, Databricks, HubSpot connectors',
      'Supported frontend features for scheduled and on-demand data pipelines',
    ],
    live: 'https://app.myskyshift.com/',
    github: null,
  },
  {
    title: 'Personal Finance Tracker',
    subtitle: 'Full-Stack Web App',
    description:
      'Personal finance tracker for monitoring income, expenses, and real-time account balance with secure authentication and interactive charts.',
    tech: ['ReactJS', 'JavaScript', 'Firebase', 'Firestore'],
    contributions: [
      'Created finance tracker with real-time income and expense monitoring',
      'Leveraged Firebase Authentication and Firestore for secure data management',
      'Built interactive charts for spending insights and analytics',
    ],
    live: null,
    github: 'https://github.com/KhushaliDudhabade/personalFinanceTracker',
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
                  {project.live && (
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      href={project.live}
                      target="_blank"
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
                  )}
                  {project.github && (
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        '&:hover': { transform: 'scale(1.02)' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                </Stack>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
