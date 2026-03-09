import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const services = [
    {
        icon: <CodeIcon fontSize="inherit" />,
        title: "Full Stack Development",
        desc: "End-to-end web application development using Django for robust backends and React for dynamic frontends."
    },
    {
        icon: <StorageIcon fontSize="inherit" />,
        title: "API Design & Integration",
        desc: "Designing and implementing secure, scalable RESTful APIs with Django REST Framework."
    },
    {
        icon: <AccountTreeIcon fontSize="inherit" />,
        title: "Management Systems",
        desc: "Custom solutions for HR, Payroll, Loan Processing, and enterprise-level management systems."
    }
];

const ServicesSection = () => {
    return (
        <Box id="services" component="section" className="section-padding">
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" className="title-gradient" mb={1}>My Services</Typography>
                    <Box sx={{ height: 4, width: 60, background: 'linear-gradient(90deg, #6366f1, #ec4899)', mx: 'auto', borderRadius: 2 }} />
                    <Typography variant="h6" color="text.secondary" mt={2} fontWeight={400}>
                        What I can do for you
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center" mt={2}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: '20px',
                                    p: { xs: 4, md: 5 },
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(5px)',
                                    height: '100%',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        borderColor: 'primary.main',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 0 20px rgba(99, 102, 241, 0.05)',
                                        '& .service-icon': {
                                            bgcolor: 'primary.main',
                                            color: '#fff',
                                            transform: 'scale(1.1)'
                                        }
                                    }
                                }}
                            >
                                <Box
                                    className="service-icon"
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        bgcolor: 'rgba(99, 102, 241, 0.1)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        fontSize: '2rem',
                                        color: 'primary.main',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                <Typography variant="h5" mb={2} fontWeight={600}>{service.title}</Typography>
                                <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                                    {service.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;
