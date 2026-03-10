import { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ContactSection = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        const form = e.target;
        const formData = new FormData();
        formData.append('entry.604627084', form.name.value);
        formData.append('entry.1524815180', form.email.value);
        formData.append('entry.1407456875', form.message.value);

        try {
            await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfNZteJcXSfc4Zv73fqOJ6-Y8u0ShlslhRniS8O_g6Gc5pwLg/formResponse", {
                method: "POST",
                body: formData,
                mode: "no-cors"
            });
            setStatus('success');
            setOpenSnackbar(true);
            form.reset();
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('idle');
        }
    };

    return (
        <Box id="contact" component="section" className="section-padding">
            <Container maxWidth="lg">
                <Paper
                    elevation={0}
                    sx={{
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: '30px',
                        p: { xs: 3, md: 6 },
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Background Glow */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
                            opacity: 0.1,
                            zIndex: 0,
                            pointerEvents: 'none',
                        }}
                    />

                    <Grid container spacing={8} sx={{ position: 'relative', zIndex: 1 }}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="h2" className="title-gradient" mb={2} sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                Let's Work Together
                            </Typography>
                            <Typography variant="body1" color="text.secondary" mb={4}>
                                Currently open for freelance opportunities and full-time roles. If you're looking to build something amazing, drop me a message!
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ width: 50, height: 50, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', border: '1px solid', borderColor: 'divider' }}>
                                        <EmailIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                                        <Typography variant="body1" fontWeight={600}>kishor.k7v@gmail.com</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ width: 50, height: 50, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', border: '1px solid', borderColor: 'divider' }}>
                                        <LocationOnIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" color="text.secondary">Location</Typography>
                                        <Typography variant="body1" fontWeight={600}>Available Worldwide (Remote)</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {[
                                    { icon: <GitHubIcon />, link: 'https://github.com/KISHORKVV' },
                                    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/kishor-kv-4828a9362/' }
                                ].map((item, idx) => (
                                    <Box
                                        component="a"
                                        key={idx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            width: 45, height: 45, bgcolor: 'background.default', borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'text.secondary', border: '1px solid', borderColor: 'divider',
                                            transition: 'all 0.3s',
                                            '&:hover': { bgcolor: 'primary.main', color: '#fff', transform: 'translateY(-3px)', borderColor: 'primary.main' }
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    label="Your Name"
                                    variant="outlined"
                                    required
                                    sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2 } }}
                                />
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Your Email"
                                    type="email"
                                    variant="outlined"
                                    required
                                    sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2 } }}
                                />
                                <TextField
                                    fullWidth
                                    name="message"
                                    label="Your Message"
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    required
                                    sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2 } }}
                                />
                                <Button
                                    type="submit"
                                    variant={status === 'success' ? 'outlined' : 'contained'}
                                    color="primary"
                                    size="large"
                                    disabled={status === 'sending'}
                                    endIcon={status === 'success' ? <CheckCircleOutlineIcon /> : <SendIcon />}
                                    sx={{ py: 1.5, mt: 1 }}
                                >
                                    {status === 'idle' && 'Send Message'}
                                    {status === 'sending' && 'Sending...'}
                                    {status === 'success' && 'Message Sent!'}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }} variant="filled">
                    Message sent successfully! I'll get back to you soon.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactSection;
