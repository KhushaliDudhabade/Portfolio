import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import InteractiveShowcase from './components/InteractiveShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar mode={mode} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <InteractiveShowcase />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
