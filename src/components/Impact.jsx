import { useEffect, useState, useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WidgetsIcon from '@mui/icons-material/Widgets';

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

const stats = [
  { icon: <WidgetsIcon sx={{ fontSize: 32 }} />, value: 25, suffix: '+', label: 'Reusable Components Built' },
  { icon: <TrendingUpIcon sx={{ fontSize: 32 }} />, value: 30, suffix: '%', label: 'Performance Improvement' },
  { icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />, value: 20, suffix: '+', label: 'Features Delivered' },
  { icon: <CodeIcon sx={{ fontSize: 32 }} />, value: 2, suffix: '', label: 'Live Enterprise Products' },
];

const valueProps = [
  '2 years of hands-on ReactJS experience building enterprise-grade applications',
  'Proven track record of optimizing performance and reducing execution times',
  'Experience with complex UI — workflow builders, CRM dashboards, data pipelines',
  'Strong CS fundamentals: DSA, OOP, DBMS — not just a framework user',
  'Self-driven, collaborative, and focused on delivering measurable impact',
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <Typography ref={ref} variant="h3" sx={{ fontWeight: 800 }}>
      {count}{suffix}
    </Typography>
  );
}

export default function Impact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="impact"
      sx={{
        py: 10,
        background: isDark
          ? 'linear-gradient(180deg, #0a192f 0%, #112240 50%, #0a192f 100%)'
          : 'linear-gradient(180deg, #f5f0ff 0%, #ede4ff 50%, #f5f0ff 100%)',
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
            Impact & Achievements
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: isDark
                ? 'linear-gradient(90deg, #64ffda, #bb86fc)'
                : 'linear-gradient(90deg, #7c3aed, #a855f7)',
              borderRadius: 2,
              mb: 5,
            }}
          />

          {/* Stats Grid */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {stats.map((stat, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <MotionPaper
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(100,255,218,0.1)' : 'rgba(124,58,237,0.1)',
                    bgcolor: isDark ? 'rgba(17,34,64,0.8)' : 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'primary.main',
                      boxShadow: isDark
                        ? '0 16px 40px rgba(100,255,218,0.1)'
                        : '0 16px 40px rgba(124,58,237,0.12)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 1 }}>{stat.icon}</Box>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>

          {/* Why Hire Me */}
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Why Work With Me
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {valueProps.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 1.5, lineHeight: 1.8 }}
                    >
                      {item}
                    </Typography>
                  </motion.li>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(100,255,218,0.15)' : 'rgba(124,58,237,0.12)',
                  bgcolor: isDark ? 'rgba(17,34,64,0.6)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                  Interested in my work?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Download my resume for a detailed overview of my experience,
                  projects, and technical skills.
                </Typography>
                <Stack spacing={2} alignItems="center">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    href="/resume.pdf"
                    download="Khushali_Dudhabade_Resume.pdf"
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: isDark
                        ? 'linear-gradient(135deg, #64ffda, #4ecdc4)'
                        : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                      color: isDark ? '#0a192f' : '#fff',
                      boxShadow: isDark
                        ? '0 4px 20px rgba(100,255,218,0.3)'
                        : '0 4px 20px rgba(124,58,237,0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: isDark
                          ? '0 6px 30px rgba(100,255,218,0.4)'
                          : '0 6px 30px rgba(124,58,237,0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download Resume
                  </Button>
                  <Typography variant="caption" color="text.secondary">
                    PDF • Updated July 2025
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
