import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ bgcolor: 'background.default', borderTop: '1px solid', borderColor: 'divider', pt: 8, pb: 4 }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h4" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, mb: 1 }}>
                        Kishor<Box component="span" sx={{ color: 'primary.main' }}> k v</Box>
                    </Typography>
                    <Typography color="text.secondary" variant="body1">
                        Building realistic solutions, line by line.
                    </Typography>
                </Box>
                <Box borderTop="1px solid" borderColor="divider" pt={4} textAlign="center">
                    <Typography variant="body2" color="text.secondary">
                        &copy; {currentYear} Kishor KV. All rights reserved. Let's Build Something Great.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
