import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const projects = [
    {
        title: "Entregar Payroll & HR",
        desc: "Full-stack Employee Payroll Management System with real-time attendance tracking, automated salary deductions, and dynamic reporting dashboards.",
        tech: ["Django REST", "React", "PostgreSQL"],
        link: "https://github.com/KISHORKVV/Entregar",
        imgBg: "linear-gradient(45deg, #111, #222)",
        imgText: "Entregar System"
    },
    {
        title: "Diet Plan System",
        desc: "A web application that generates personalized fat-loss diet plans with daily calorie tracking and curated meal suggestions.",
        tech: ["Django", "Python", "HTML/CSS"],
        link: "https://github.com/KISHORKVV/Diet-Plan",
        imgBg: "linear-gradient(45deg, #1a1a2e, #16213e)",
        imgText: "Diet Plan"
    },
    {
        title: "Villa Agency Booking",
        desc: "A web platform for booking luxury villas for vacation stays, allowing users to browse properties and schedule bookings.",
        tech: ["Django", "HTML5", "CSS3"],
        link: "https://github.com/KISHORKVV/Villa-agency",
        imgBg: "linear-gradient(45deg, #0f2027, #203a43, #2c5364)",
        imgText: "Villa Agency"
    }
];

const ProjectsSection = () => {
    return (
        <Box id="projects" component="section" className="section-padding" sx={{ bgcolor: 'rgba(5, 5, 7, 0.8)' }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" className="title-gradient" mb={1}>Featured Projects</Typography>
                    <Box sx={{ height: 4, width: 60, background: 'linear-gradient(90deg, #6366f1, #ec4899)', mx: 'auto', borderRadius: 2 }} />
                </Box>

                <Grid container spacing={4} justifyContent="center" mt={2}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        borderColor: 'rgba(255,255,255,0.2)',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                                        '& .project-link': { gap: '12px', color: 'primary.main' }
                                    }
                                }}
                            >
                                {/* Image Placeholder */}
                                <Box
                                    sx={{
                                        height: 220,
                                        background: project.imgBg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderBottom: '1px solid',
                                        borderColor: 'divider'
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)', fontWeight: 700 }}>
                                        {project.imgText}
                                    </Typography>
                                </Box>

                                <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h5" mb={2} fontWeight={600}>{project.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" mb={3} sx={{ minHeight: '60px' }}>
                                        {project.desc}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4, flexGrow: 1 }}>
                                        {project.tech.map((t, idx) => (
                                            <Typography
                                                key={idx}
                                                variant="caption"
                                                sx={{
                                                    bgcolor: 'rgba(255,255,255,0.05)',
                                                    color: 'primary.light',
                                                    px: 1.5, py: 0.5,
                                                    borderRadius: '15px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {t}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Button
                                        className="project-link"
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="text"
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{
                                            color: 'text.primary',
                                            p: 0,
                                            justifyContent: 'flex-start',
                                            transition: 'gap 0.3s ease, color 0.3s ease',
                                            '&:hover': { bgcolor: 'transparent' }
                                        }}
                                    >
                                        View Project
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box textAlign="center" mt={8}>
                    <Button
                        variant="outlined"
                        href="https://github.com/KISHORKVV"
                        target="_blank"
                        size="large"
                        sx={{
                            borderWidth: 2,
                            '&:hover': { borderWidth: 2 }
                        }}
                    >
                        See More on GitHub
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ProjectsSection;
