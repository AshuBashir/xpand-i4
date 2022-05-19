import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://inspiration4.com/">
       Inspiration4
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

const Ourwork = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 2,
          pb: 4,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
           Inspiration4 Mission
          </Typography>
          <Typography variant="h6"  fontSize={'large'}   align="justify" color="text.secondary" paragraph>
          Inspiration4 is the world’s first all-civilian mission to orbit. The mission of this work will be commanded by Jared Isaacman, the 38-year-old founder and Chief Executive Officer of Shift4 Payments and an accomplished pilot and adventurer.
          </Typography>
          <Stack
            sx={{ pt: 2 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Contact Astronauts</Button>
            <Button variant="outlined">Contact Pis </Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '60%',display: 'flex', flexDirection: 'column', gap:"1rem" }}
              >
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                  style={{height:"50%"}}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography>
                  Inspiration4 is the world’s first all-civilian mission to orbit.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                  <Button size="small">Contact</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    {/* Footer */}
    <Box sx={{ bgcolor: 'black', p: 6, color:'white' }} component="footer">
     
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        component="p"
      >
        This is about Inspiration4.
      </Typography>
      <Copyright />
    </Box>
    {/* End footer */}
  </ThemeProvider>
  )
}

export default Ourwork
