// supabase
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API key
const supabaseUrl = "https://gonsjfvfvuytjgpfpbmt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbnNqZnZmdnV5dGpncGZwYm10Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzE0MzkzNCwiZXhwIjoyMDE4NzE5OTM0fQ.gqQDcxdanrbtHLFs6z73fkOx86OUr7sJtU6zz6H_7Dw";

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

// React
import { useState } from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {

    const [invalidUser, setInvalidUser] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let userData = await supabase.from('user').select('*').match({
            email: data.get('email'),
            password: data.get('password'),
        });

        if (userData.error) {
            console.error('Error fetching data:', userData.error);
        } else {
            console.log("userData.data ", userData.data);
            if (userData.data.length > 0) {
                props.handleCloseSignIn();
                props.handleRemoveloginLink();
            } else {
                setInvalidUser(true);
            }
        }
    };

    const handleClose = (value) => {
        props.handleCloseSignIn();
    };

    // const handleLogin = async () => {
    //     let userData = await supabase.from('user').select('*').filter({
    //         email: data.get('email')
    //     });
    //     if (userData.error) {
    //         console.error('Error fetching data:', error.message);
    //     } else {
    //         console.log("userData.data ",userData.data);
    //     }
    //     props.handleCloseSignIn({close: true});
    // };

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>Login In Here</DialogTitle>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {
                            invalidUser ?
                                <Alert severity="error">User or password is invalid. Try again...</Alert>
                                : null
                        }
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            // onClick={handleLogin}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </Dialog>
    );
}