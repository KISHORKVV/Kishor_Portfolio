import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const EducationSection = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology, Computer Science",
            institution: "Mount Zion College of Engineering, Kadammanitta",
            period: "2019 – 2023",
        },
        {
            degree: "Higher Secondary Education",
            institution: "MMHSS, Uppoddu",
            period: "2017 – 2019",
        }
    ];

    const certificationsData = [
        {
            title: "Foundations of Prompt Engineering",
            provider: "AWS Training & Certification",
            date: "June 2026",
        },
        {
            title: "AI Fundamentals: Foundations for Understanding AI",
            provider: "IBM SkillsBuild",
            date: "June 2026",
        },
        {
            title: "AI Literacy",
            provider: "IBM SkillsBuild",
            date: "June 2026",
        },
        {
            title: "Data Analytics Job Simulation",
            provider: "Deloitte (Forage)",
            date: "June 2026",
        },
        {
            title: "Python, Django & React Development",
            provider: "Django & React Bootcamp",
            date: "July 2023",
        }
    ];

    return (
        <Box id="education" component="section" className="section-padding" sx={{ bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography variant="h2" className="title-gradient" mb={1}>Education & Certifications</Typography>
                    <Box sx={{ height: 4, width: 60, background: 'linear-gradient(90deg, #6366f1, #ec4899)', mx: 'auto', borderRadius: 2 }} />
                </Box>

                <Grid container spacing={6}>
                    {/* Education Column */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <SchoolIcon color="primary" sx={{ fontSize: '2.5rem' }} />
                            Education
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {educationData.map((edu, idx) => (
                                <Paper
                                    key={idx}
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: '15px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: 'primary.main',
                                            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.15)'
                                        }
                                    }}
                                >
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {edu.degree}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                        {edu.institution}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'inline-block',
                                            bgcolor: 'rgba(99, 102, 241, 0.1)',
                                            color: 'primary.light',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '10px',
                                            fontWeight: 600,
                                            mt: 1
                                        }}
                                    >
                                        {edu.period}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                    </Grid>

                    {/* Certifications Column */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <WorkspacePremiumIcon color="secondary" sx={{ fontSize: '2.5rem' }} />
                            Certifications
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {certificationsData.map((cert, idx) => (
                                <Paper
                                    key={idx}
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: '15px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: 'secondary.main',
                                            boxShadow: '0 8px 25px rgba(236, 72, 153, 0.15)'
                                        }
                                    }}
                                >
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {cert.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                        {cert.provider}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'inline-block',
                                            bgcolor: 'rgba(236, 72, 153, 0.1)',
                                            color: 'secondary.light',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '10px',
                                            fontWeight: 600,
                                            mt: 1
                                        }}
                                    >
                                        {cert.date}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default EducationSection;
