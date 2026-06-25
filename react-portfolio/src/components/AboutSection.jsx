import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SecurityIcon from '@mui/icons-material/Security';

const ExpertiseCard = ({ icon, title, desc }) => (
    <Paper
        elevation={0}
        sx={{
            p: 3,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '15px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: '100%',
                background: 'linear-gradient(180deg, #6366f1, #ec4899)',
                transform: 'scaleY(0)',
                transition: 'transform 0.3s ease',
                transformOrigin: 'bottom',
            },
            '&:hover': {
                transform: 'translateX(10px)',
                bgcolor: 'rgba(30, 30, 45, 0.8)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                '&::before': {
                    transform: 'scaleY(1)',
                    transformOrigin: 'top',
                }
            }
        }}
    >
        <Box sx={{ color: 'primary.main', display: 'flex' }}>
            {icon}
        </Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
    </Paper>
);

const AboutSection = () => {
    return (
        <Box id="about" component="section" className="section-padding">
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" className="title-gradient" mb={1}>About & Expertise</Typography>
                    <Box sx={{ height: 4, width: 60, background: 'linear-gradient(90deg, #6366f1, #ec4899)', mx: 'auto', borderRadius: 2 }} />
                </Box>

                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: '2rem', mb: 3 }}>
                                Building Scalable & Secure Systems
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.05rem' }}>
                                I am a <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Detail-oriented Full Stack Developer</Box> with 1+ year of experience designing and building scalable web applications using Python, Django, Django REST Framework, React, and PostgreSQL.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.05rem' }}>
                                Skilled in REST API design, authentication systems, and database optimization. I have successfully delivered enterprise-grade Employee Management and Loan Management systems with real-time features for production environments, focusing on clean code, database performance, and scalable backend architecture.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
                                Passionate about prompt engineering, LLM integration, clean code development, and creating measurable business impact.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ display: 'grid', gap: 2.5 }}>
                            <ExpertiseCard
                                icon={<StorageIcon fontSize="large" />}
                                title="Backend Architecture"
                                desc="Django, DRF, PostgreSQL, REST APIs"
                            />
                            <ExpertiseCard
                                icon={<DesktopMacIcon fontSize="large" />}
                                title="Frontend Development"
                                desc="React, JavaScript, HTML5, CSS3, Material-UI"
                            />
                            <ExpertiseCard
                                icon={<SecurityIcon fontSize="large" />}
                                title="System Security"
                                desc="Role-based Auth, Data Optimization, Architecture"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;
