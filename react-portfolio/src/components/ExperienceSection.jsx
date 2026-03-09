import { Box, Container, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const experiences = [
    {
        role: "Software Engineer (Full-Stack)",
        company: "Entregar Solutions - Kollam, India",
        date: "June 2025 - Present",
        details: [
            "Developed a full-stack Employee Payroll Management System using Django REST Framework (backend), React (frontend), and PostgreSQL with role-based authentication.",
            "Implemented real-time attendance tracking with late mark detection, auto half-day salary deductions, and integrated email/SMS notifications.",
            "Built dynamic dashboards and reporting features with interactive UI using React and FullCalendar.",
            "Integrated secure APIs for employee registration, meeting scheduling, and holiday management.",
            "Designed and optimized payroll module including department-wise salary structures and automated monthly paysheet generation."
        ]
    },
    {
        role: "Intern Django Developer",
        company: "Yuva Tech Solutions - Sreekariyam, Trivandrum",
        date: "Feb 2024 - Dec 2024",
        details: [
            "Responsible for creating and maintaining web applications using the Django framework and Python.",
            "Refined legacy Django codebase by upgrading dependencies, restructuring models, and optimizing database queries to enhance maintainability and system responsiveness."
        ]
    }
];

const ExperienceSection = () => {
    return (
        <Box id="experience" component="section" className="section-padding" sx={{ bgcolor: 'background.default' }}>
            <Container maxWidth="md">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" className="title-gradient" mb={1}>Professional Experience</Typography>
                    <Box sx={{ height: 4, width: 60, background: 'linear-gradient(90deg, #6366f1, #ec4899)', mx: 'auto', borderRadius: 2 }} />
                </Box>

                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index} sx={{ minHeight: '120px' }}>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    color="primary"
                                    sx={{ borderWidth: 3, boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)' }}
                                />
                                {index < experiences.length - 1 && <TimelineConnector sx={{ bgcolor: 'divider' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ pb: 6, px: { xs: 2, md: 4 } }}>
                                <Box
                                    sx={{
                                        bgcolor: 'background.paper',
                                        p: { xs: 3, md: 4 },
                                        borderRadius: 4,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                        }
                                    }}
                                >
                                    <Typography variant="h5" color="text.primary" gutterBottom>
                                        {exp.role}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" fontWeight={500} gutterBottom>
                                        {exp.company}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        sx={{
                                            display: 'inline-block',
                                            bgcolor: 'rgba(99, 102, 241, 0.1)',
                                            color: 'primary.main',
                                            px: 2, py: 0.5,
                                            borderRadius: '15px',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            mb: 2, mt: 1
                                        }}
                                    >
                                        {exp.date}
                                    </Typography>
                                    <Box component="ul" sx={{ color: 'text.secondary', pl: 2, typography: 'body2', m: 0 }}>
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx} style={{ marginBottom: '8px', fontSize: '1rem', lineHeight: 1.6 }}>{detail}</li>
                                        ))}
                                    </Box>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
};

export default ExperienceSection;
