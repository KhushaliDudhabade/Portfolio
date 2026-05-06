import { Box, Typography, Container, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="center" spacing={2}>
          <Stack direction="row" spacing={1}>
            <IconButton href="https://github.com/KhushaliDudhabade" target="_blank" color="inherit" size="small">
              <GitHubIcon />
            </IconButton>
            <IconButton href="http://www.linkedin.com/in/khushali-dudhabade-199a75221" target="_blank" color="inherit" size="small">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:khushalidudhabade27@gmail.com" color="inherit" size="small">
              <EmailIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Designed & Built by Khushali Dudhabade © {new Date().getFullYear()}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
