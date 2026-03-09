import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkIcon from '@mui/icons-material/Work';

const HeroSection = () => {
    const theme = useTheme();
    const texts = [
        "Full Stack Python Django Developer",
        "React Frontend Enthusiast",
        "API & Backend Architect",
        "Problem Solver"
    ];

    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + texts[textIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentText("");
                setCharIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex, texts]);

    return (
        <Box
            id="home"
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                pt: 10,
                overflow: 'hidden'
            }}
        >
            {/* Background Particles placeholder */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.3 }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 8,
                    alignItems: 'center',
                    textAlign: { xs: 'center', md: 'left' }
                }}>
                    {/* Content */}
                    <Box sx={{ animation: 'fadeInUp 1s ease forwards' }}>
                        <Typography
                            component="span"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                display: 'inline-block',
                                mb: 1,
                                py: 0.5, px: 2,
                                bgcolor: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: '20px',
                                border: '1px solid rgba(99, 102, 241, 0.2)'
                            }}
                        >
                            👋 Hello, I'm
                        </Typography>

                        <Typography variant="h1" className="title-gradient" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, mb: 1 }}>
                            Kishor KV
                        </Typography>

                        <Typography variant="h3" sx={{ color: 'text.secondary', fontWeight: 500, height: '40px', mb: 3, fontSize: { xs: '1.3rem', md: '1.8rem' } }}>
                            <span className="text-gradient">{currentText}</span>
                            <span className="cursor-blink" style={{ display: 'inline-block', width: '3px', backgroundColor: '#fff', marginLeft: '5px' }}>&nbsp;</span>
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4, maxWidth: 500, mx: { xs: 'auto', md: 0 } }}>
                            A passionate tech enthusiast and self-taught developer building scalable, real-world web applications. I specialize in secure, performance-driven backend systems using Django.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
                            <Button variant="contained" color="primary" href="#projects">
                                View My Work
                            </Button>
                            <Button variant="outlined" sx={{
                                borderColor: 'divider',
                                color: 'text.primary',
                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: 'divider'
                                }
                            }} href="#contact">
                                Let's Connect
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            {[
                                { icon: <GitHubIcon />, link: 'https://github.com/KISHORKVV' },
                                { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/kishor-kv-4828a9362/' },
                                { icon: <InstagramIcon />, link: '#' },
                                { icon: <WorkIcon />, link: '#' }
                            ].map((item, index) => (
                                <IconButton
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        color: 'text.secondary',
                                        width: 45, height: 45,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: 'primary.main',
                                            color: '#fff',
                                            borderColor: 'primary.main',
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 5px 15px rgba(99, 102, 241, 0.4)'
                                        }
                                    }}
                                >
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Box>

                    {/* Image/Visuals */}
                    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box className="glow-ring"></Box>
                        <Box
                            className="morph-shape"
                            sx={{
                                width: { xs: 300, md: 350 },
                                height: { xs: 300, md: 350 },
                                background: `linear-gradient(135deg, ${theme.palette.background.paper}, #050507)`,
                                border: '1px solid',
                                borderColor: 'divider',
                                position: 'relative',
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5), 0 20px 50px rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {/* Tech Icons Floating inside shape */}
                            <Typography component="div" sx={{ fontSize: '5rem', position: 'absolute', opacity: 0.8, color: '#3776AB', top: '30%', left: '25%' }} className="animate-float">
                                <i className="fa-brands fa-python"></i>
                            </Typography>
                            <Typography component="div" sx={{ fontSize: '5rem', position: 'absolute', opacity: 0.8, color: '#61DAFB', bottom: '30%', right: '25%' }} className="animate-float-reverse">
                                <i className="fa-brands fa-react"></i>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
