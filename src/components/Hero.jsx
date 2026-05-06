import { Box, Typography, Button, Container, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)'
          : 'linear-gradient(135deg, #f5f0ff 0%, #ede4ff 30%, #f0e6ff 60%, #f5f0ff 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(187,134,252,0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <MotionTypography
            variant="subtitle1"
            color="primary"
            sx={{ mb: 1, fontWeight: 500, letterSpacing: 1 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, my name is
          </MotionTypography>
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 1,
              background: isDark
                ? 'linear-gradient(135deg, #ccd6f6 0%, #64ffda 100%)'
                : 'linear-gradient(135deg, #1a1a2e 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Khushali Dudhabade
          </MotionTypography>
          <MotionTypography
            variant="h4"
            color="text.secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            sx={{
              fontWeight: 500,
              fontSize: { xs: '1.2rem', md: '2rem' },
              mb: 3,
            }}
          >
            Frontend Developer (ReactJS) | Full-Stack Exposure
          </MotionTypography>
          <MotionTypography
            variant="h6"
            color="text.secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            sx={{
              maxWidth: 600,
              mb: 4,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.7,
            }}
          >
            I build scalable, dynamic, and performant web applications with modern
            frontend technologies. Passionate about crafting pixel-perfect UIs and
            seamless user experiences.
          </MotionTypography>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  px: 4,
                  py: 1.5,
                  background: isDark
                    ? 'linear-gradient(135deg, #64ffda 0%, #4ecdc4 100%)'
                    : 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                  color: isDark ? '#0a192f' : '#fff',
                  boxShadow: isDark
                    ? '0 4px 20px rgba(100,255,218,0.3)'
                    : '0 4px 20px rgba(124,58,237,0.3)',
                  '&:hover': {
                    boxShadow: isDark
                      ? '0 6px 30px rgba(100,255,218,0.4)'
                      : '0 6px 30px rgba(124,58,237,0.4)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<EmailIcon />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                    boxShadow: isDark
                      ? '0 4px 20px rgba(100,255,218,0.15)'
                      : '0 4px 20px rgba(124,58,237,0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
