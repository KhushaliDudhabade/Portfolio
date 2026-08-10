import { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Stack,
  IconButton,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const MotionBox = motion.create(Box);

const contactLinks = [
  { icon: <EmailIcon />, label: 'khushalidudhabade27@gmail.com', href: 'mailto:khushalidudhabade27@gmail.com' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'http://www.linkedin.com/in/khushali-dudhabade-199a75221' },
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/KhushaliDudhabade' },
];

// ─── EmailJS Configuration ───────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)
// 2. Create an Email Service (e.g., Gmail) and get your SERVICE_ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Get your PUBLIC_KEY from Account > API Keys
// 5. Replace the values below:
const EMAILJS_SERVICE_ID = 'service_hqui1d6';
const EMAILJS_TEMPLATE_ID = 'template_aw9pr7p';
const EMAILJS_PUBLIC_KEY = 'fcEHhZhG-abpYIiPX';
// ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const formRef = useRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSnackbar({ open: true, message: 'Message sent successfully! I\'ll get back to you soon.', severity: 'success' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({ open: true, message: 'Failed to send message. Please email me directly.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      className={isDark ? 'bg-grid' : undefined}
      sx={{
        py: { xs: 6, md: 10 },
        background: isDark ? '#0C0B1E' : 'linear-gradient(180deg, #f5f0ff 0%, #ede4ff 100%)',
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
            Contact
          </Typography>
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            Get In Touch
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

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                I'm currently open to new opportunities and collaborations.
                Whether you have a question, a project idea, or just want to say hi,
                feel free to reach out!
              </Typography>

              <Stack spacing={2}>
                {contactLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: 'none',
                        color: 'text.secondary',
                        p: 1.5,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: isDark ? 'rgba(168,85,247,0.08)' : 'rgba(124,58,237,0.05)',
                          transform: 'translateX(8px)',
                        },
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          color: isDark ? '#A855F7' : 'primary.main',
                          bgcolor: isDark ? 'rgba(168,85,247,0.12)' : 'rgba(124,58,237,0.08)',
                        }}
                      >
                        {link.icon}
                      </IconButton>
                      <Typography variant="body2">{link.label}</Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Paper
                elevation={0}
                component="form"
                ref={formRef}
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(168,85,247,0.2)' : 'rgba(124,58,237,0.1)',
                  bgcolor: isDark ? 'rgba(20,19,44,0.7)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: isDark ? 'rgba(168,85,247,0.35)' : 'rgba(124,58,237,0.2)',
                    boxShadow: isDark
                      ? '0 8px 30px rgba(168,85,247,0.12)'
                      : '0 8px 30px rgba(124,58,237,0.08)',
                  },
                  '& .MuiOutlinedInput-root': isDark
                    ? {
                        '& fieldset': { borderColor: 'rgba(168,85,247,0.25)' },
                        '&:hover fieldset': { borderColor: 'rgba(168,85,247,0.5)' },
                        '&.Mui-focused fieldset': { borderColor: '#22D3EE', boxShadow: '0 0 0 3px rgba(34,211,238,0.15)' },
                      }
                    : undefined,
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="from_name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="from_email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      multiline
                      rows={4}
                      size="small"
                    />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      endIcon={<SendIcon />}
                      sx={{
                        px: 4,
                        py: 1.2,
                        background: isDark
                          ? 'linear-gradient(135deg, #A855F7, #22D3EE)'
                          : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                        color: '#fff',
                        boxShadow: isDark
                          ? '0 4px 15px rgba(168,85,247,0.35)'
                          : '0 4px 15px rgba(124,58,237,0.2)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: isDark
                            ? '0 6px 25px rgba(34,211,238,0.45)'
                            : '0 6px 25px rgba(124,58,237,0.3)',
                        },
                        '&:disabled': {
                          background: 'grey.500',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
