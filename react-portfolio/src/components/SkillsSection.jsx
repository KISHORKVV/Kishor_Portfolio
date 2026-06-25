import { Box, Container, Typography, Chip } from '@mui/material';

const SkillsSection = () => {
    const skillsData = [
        { title: "Languages & Frameworks", items: ['Python', 'Django', 'Django REST Framework', 'JavaScript', 'React', 'Redux'], color: 'primary.main' },
        { title: "Databases", items: ['PostgreSQL', 'SQLite', 'Database Optimization & Caching'], color: 'secondary.main' },
        { title: "APIs & Real-Time", items: ['REST API Development', 'WebSockets', 'Celery', 'JWT Authentication'], color: '#10b981' },
        { title: "Tools & Practices", items: ['Git', 'GitHub', 'Agile Collaboration', 'Role-Based Access Control'], color: '#f59e0b' },
        { title: "Deployment & DevOps", items: ['Render', 'Vercel', 'AWS', 'CI/CD Pipelines'], color: '#8b5cf6' },
        { title: "AI / ML & LLM", items: ['Prompt Engineering', 'LLM Integration', 'AI Fundamentals', 'Applied AI Literacy'], color: '#ec4899' }
    ];

    const renderChip = (label) => (
        <Chip
            key={label}
            label={label}
            variant="outlined"
            sx={{
                m: 1,
                px: 1,
                py: 2.5,
                fontSize: '1rem',
                borderRadius: '30px',
                bgcolor: 'background.paper',
                borderColor: 'divider',
                color: 'text.secondary',
                transition: 'all 0.3s ease',
                '&:hover': {
                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }
            }}
        />
    );

    return (
        <Box id="skills" component="section" className="section-padding" sx={{ bgcolor: 'rgba(5, 5, 7, 0.8)' }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" className="title-gradient" mb={1}>Technical Skills</Typography>
                    <Box sx={{ height: 4, width: 60, background: 'linear-gradient(90deg, #6366f1, #ec4899)', mx: 'auto', borderRadius: 2 }} />
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, mt: 4 }}>
                    {skillsData.map((category, idx) => (
                        <Box key={idx}>
                            <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box component="span" sx={{ width: 15, height: 15, bgcolor: category.color, borderRadius: '50%', display: 'inline-block' }} />
                                {category.title}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: -1 }}>
                                {category.items.map(skill => renderChip(skill))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default SkillsSection;
