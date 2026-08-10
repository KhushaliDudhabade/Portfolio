import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setVisible(false), reduceMotion ? 0 : 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at 50% 45%, #1a1438 0%, #0C0B1E 70%)',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.6rem' },
                  letterSpacing: 2,
                  background: 'linear-gradient(135deg, #F1EFFF 0%, #A855F7 60%, #D946EF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {'<KD />'}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              style={{
                height: 3,
                margin: '14px auto 0',
                borderRadius: 4,
                background: 'linear-gradient(90deg, transparent, #A855F7, #D946EF, transparent)',
                boxShadow: '0 0 20px 2px rgba(168,85,247,0.6)',
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
