import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6366f1', // Indigo
            light: '#818cf8',
            dark: '#4f46e5',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ec4899', // Pink
            light: '#f472b6',
            dark: '#db2777',
            contrastText: '#ffffff',
        },
        background: {
            default: '#0a0a0f',
            paper: 'rgba(20, 20, 30, 0.6)',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a0a0b0',
        },
        divider: 'rgba(255, 255, 255, 0.08)',
    },
    typography: {
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 900,
        },
        h2: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        h4: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        h5: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        h6: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        button: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    padding: '10px 24px',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
                    },
                },
                outlinedPrimary: {
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                        background: '#6366f1',
                        color: '#fff',
                        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 20,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-10px)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                    },
                },
            },
        },
    },
});

export default theme;
