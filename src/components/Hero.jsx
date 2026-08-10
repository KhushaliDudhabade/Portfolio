import { Box, Typography, Button, Container, Stack, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const techBadges = [
  { label: '⚛️ React', top: '4%', left: '-8%', delay: 0 },
  { label: '🔷 JavaScript', top: '18%', right: '-10%', delay: 0.6 },
  { label: '🎨 MUI', top: '68%', left: '-12%', delay: 1.2 },
  { label: '⚡ FastAPI', top: '82%', right: '-6%', delay: 1.8 },
];

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? '#0C0B1E'
          : 'linear-gradient(135deg, #f5f0ff 0%, #ede4ff 30%, #f0e6ff 60%, #f5f0ff 100%)',
      }}
      className={isDark ? 'bg-grid' : undefined}
    >
      {isDark && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: 600,
              height: 600,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'ambientDrift 14s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '-15%',
              left: '-10%',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'ambientDrift 18s ease-in-out infinite reverse',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <MotionTypography
                variant="subtitle1"
                sx={{
                  mb: 1,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  color: isDark ? '#D946EF' : 'primary.main',
                }}
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
                  fontSize: { xs: '2.5rem', md: '3.8rem' },
                  mb: 1,
                  color: isDark ? '#F1EFFF' : undefined,
                  ...(!isDark && {
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }),
                }}
              >
                Khushali Dudhabade
              </MotionTypography>
              <MotionTypography
                variant="h4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.15rem', md: '1.8rem' },
                  mb: 3,
                  background: isDark
                    ? 'linear-gradient(90deg, #A855F7, #D946EF)'
                    : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Software Engineer | Frontend Developer | ReactJS Developer
              </MotionTypography>
              <MotionTypography
                variant="h6"
                color="text.secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                sx={{
                  maxWidth: 560,
                  mb: 4,
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.7,
                }}
              >
                Building scalable, intuitive, and user-centric web applications with
                2 years of experience in ReactJS, Redux, and modern frontend technologies.
                Passionate about reusable UI components and optimized performance.
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
                        ? 'linear-gradient(135deg, #A855F7 0%, #D946EF 100%)'
                        : 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                      color: '#fff',
                      boxShadow: isDark
                        ? '0 4px 24px rgba(168,85,247,0.45)'
                        : '0 4px 20px rgba(124,58,237,0.3)',
                      '&:hover': {
                        boxShadow: isDark
                          ? '0 6px 34px rgba(217,70,239,0.55)'
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
                      borderColor: isDark ? 'rgba(168,85,247,0.5)' : undefined,
                      color: isDark ? '#F1EFFF' : undefined,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                        boxShadow: isDark
                          ? '0 4px 20px rgba(168,85,247,0.25)'
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
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
              sx={{ position: 'relative', width: { xs: 220, md: 280 }, height: { xs: 220, md: 280 } }}
            >
              {isDark && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -6,
                    borderRadius: '28px',
                    background: 'conic-gradient(from 0deg, #A855F7, #D946EF, #22D3EE, #A855F7)',
                    animation: 'rotateBorder 8s linear infinite',
                    opacity: 0.8,
                  }}
                />
              )}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: isDark
                    ? 'linear-gradient(160deg, #1a1438 0%, #14132C 100%)'
                    : 'linear-gradient(160deg, #ede4ff, #f5f0ff)',
                  border: isDark ? '2px solid #0C0B1E' : '2px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isDark ? '0 0 50px rgba(168,85,247,0.35)' : 'none',
                }}
              >
                <Typography sx={{ fontSize: '4.5rem', fontWeight: 800, color: isDark ? '#A855F7' : '#7c3aed', opacity: 0.7 }}>
                  KD
                </Typography>
              </Box>

              {isDark &&
                techBadges.map((badge, i) => (
                  <MotionBox
                    key={badge.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -10, 0] }}
                    transition={{
                      opacity: { delay: 1.4 + i * 0.15, duration: 0.5 },
                      y: { delay: 1.4 + i * 0.15 + badge.delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    sx={{
                      position: 'absolute',
                      top: badge.top,
                      left: badge.left,
                      right: badge.right,
                      px: 1.5,
                      py: 0.7,
                      borderRadius: 2,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      color: '#F1EFFF',
                      bgcolor: 'rgba(20,19,44,0.9)',
                      border: '1px solid rgba(168,85,247,0.4)',
                      boxShadow: '0 4px 16px rgba(168,85,247,0.25)',
                    }}
                  >
                    {badge.label}
                  </MotionBox>
                ))}
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
