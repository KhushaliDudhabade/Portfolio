import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const MotionBox = motion.create(Box);

const highlights = [
  { icon: <CodeIcon sx={{ fontSize: 40 }} />, title: 'Frontend Expert', desc: 'ReactJS, Redux, MUI, responsive design' },
  { icon: <DesignServicesIcon sx={{ fontSize: 40 }} />, title: 'UI/UX Focused', desc: 'Clean, minimal, pixel-perfect interfaces' },
  { icon: <StorageIcon sx={{ fontSize: 40 }} />, title: 'Full-Stack Exposure', desc: 'Node.js, Express.js, FastAPI, MongoDB, PostgreSQL' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        background: isDark
          ? 'linear-gradient(180deg, #0a192f 0%, #112240 100%)'
          : 'linear-gradient(180deg, #f5f0ff 0%, #ffffff 100%)',
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
            About Me
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

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mb: 5, lineHeight: 1.8, fontSize: '1.05rem' }}
          >
            I'm a Frontend Developer with 1.6+ years of professional experience building
            modern web applications. My core expertise lies in ReactJS, Redux, and
            component-driven architecture. I focus on creating scalable, maintainable,
            and performant user interfaces that deliver exceptional user experiences.
            Beyond frontend, I have hands-on experience with Node.js, Express.js, FastAPI,
            and databases like MongoDB and PostgreSQL, giving me a well-rounded understanding
            of full-stack development.
          </Typography>

          <Grid container spacing={3}>
            {highlights.map((item, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <MotionBox
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={cardVariants}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: isDark ? 'rgba(17,34,64,0.8)' : 'rgba(255,255,255,0.9)',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(100,255,218,0.1)' : 'rgba(124,58,237,0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: 'primary.main',
                        boxShadow: isDark
                          ? '0 20px 40px rgba(100,255,218,0.1)'
                          : '0 20px 40px rgba(124,58,237,0.12)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
