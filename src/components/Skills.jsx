import { Box, Typography, Container, Chip, Paper, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion.create(Paper);

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'Python'],
    color: '#ffd700',
  },
  {
    title: 'Frontend',
    skills: ['ReactJS', 'Redux', 'HTML', 'CSS', 'Material UI (MUI)'],
    color: '#64ffda',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
    color: '#bb86fc',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
    color: '#ff6b6b',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman'],
    color: '#4ecdc4',
  },
  {
    title: 'CS Fundamentals',
    skills: ['OOP', 'Data Structures & Algorithms', 'DBMS', 'Operating Systems'],
    color: '#f093fb',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        background: isDark
          ? 'linear-gradient(180deg, #112240 0%, #0a192f 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f5f0ff 100%)',
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
            Skills & Technologies
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Grid container spacing={3}>
            {skillCategories.map((category, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <MotionPaper
                  variants={cardVariants}
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(124,58,237,0.08)',
                    bgcolor: isDark ? 'rgba(17,34,64,0.6)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: category.color,
                      boxShadow: `0 16px 40px ${category.color}20`,
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 2, fontWeight: 600, color: category.color }}
                  >
                    {category.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          borderColor: `${category.color}60`,
                          color: 'text.primary',
                          border: '1px solid',
                          bgcolor: `${category.color}12`,
                          fontWeight: 500,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: `${category.color}30`,
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
