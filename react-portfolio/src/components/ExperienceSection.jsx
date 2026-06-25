import { Box, Container, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const experiences = [
    {
        role: "Software Engineer (Full Stack)",
        company: "Entregar Solutions - Kollam, India",
        date: "Jun 2025 - Dec 2025",
        details: [
            "Developed a full-stack Employee Management system supporting 50+ users with role-based authentication, improving operational efficiency by 30%.",
            "Built a production-grade Loan Management System handling the complete loan lifecycle, reducing manual processing effort by 40%.",
            "Designed and integrated REST APIs for loan tracking, EMI schedules, and borrower data, improving system reliability and scalability.",
            "Built interactive dashboards for attendance and payroll, reducing report generation time by 35%.",
            "Optimized database queries and implemented caching strategies, reducing API response time by 30%.",
            "Implemented secure authentication and authorization workflows, ensuring data protection and access control."
        ]
    },
    {
        role: "Django Developer Intern",
        company: "Yuva Tech Solutions - Trivandrum",
        date: "Feb 2024 - Dec 2024",
        details: [
            "Developed and maintained Django-based applications, supporting multiple client deployments.",
            "Refactored legacy code and optimized database queries, improving performance by 25%.",
            "Enhanced application stability and maintainability through code restructuring and dependency upgrades.",
            "Collaborated with cross-functional team members to deliver production-ready features on schedule."
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
