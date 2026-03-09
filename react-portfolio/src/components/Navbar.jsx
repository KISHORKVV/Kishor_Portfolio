import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Services', 'Projects'];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
            let current = '';

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                }
            });

            if (current) {
                setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const drawer = (
        <Box sx={{ width: 250, bgcolor: 'background.default', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <IconButton onClick={handleDrawerToggle} color="inherit">
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <Button
                            fullWidth
                            href={`#${item.toLowerCase()}`}
                            onClick={handleDrawerToggle}
                            sx={{
                                color: activeSection === item ? 'primary.main' : 'text.secondary',
                                justifyContent: 'flex-start',
                                px: 3,
                                py: 2
                            }}
                        >
                            {item}
                        </Button>
                    </ListItem>
                ))}
                <ListItem disablePadding sx={{ mt: 2, px: 2 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        href="#contact"
                        onClick={handleDrawerToggle}
                    >
                        Contact Me
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                elevation={scrolled ? 4 : 0}
                sx={{
                    bgcolor: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: scrolled ? 1 : 2 }}>
                        <Typography
                            variant="h5"
                            component="a"
                            href="#"
                            sx={{
                                fontFamily: '"Outfit", sans-serif',
                                fontWeight: 900,
                                color: 'text.primary',
                                textDecoration: 'none',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Kishor<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
                        </Typography>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    sx={{
                                        color: activeSection === item ? 'text.primary' : 'text.secondary',
                                        fontWeight: 500,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: activeSection === item ? '100%' : '0%',
                                            height: '2px',
                                            bgcolor: 'primary.main',
                                            transition: 'width 0.3s ease'
                                        },
                                        '&:hover::after': {
                                            width: '100%'
                                        },
                                        '&:hover': {
                                            color: 'text.primary',
                                            bgcolor: 'transparent'
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                            <Button
                                variant="outlined"
                                href="#contact"
                                sx={{
                                    borderRadius: '20px',
                                    py: 0.5,
                                    px: 2,
                                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                                    '&:hover': {
                                        bgcolor: 'primary.main',
                                        color: '#fff'
                                    }
                                }}
                            >
                                Contact Me
                            </Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        bgcolor: 'rgba(10, 10, 15, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.08)'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
