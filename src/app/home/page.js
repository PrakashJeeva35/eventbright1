"use client";

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LiquorIcon from '@mui/icons-material/Liquor';
import Link from '@mui/material/Link';
import HomePoster from '../../../components/home/homePoster';
import HomeFooter from '../../../components/home/footer';
import HomeEventCard from '../../../components/home/eventCard';
import SignUp from '../../../components/login/signup';
import SignIn from '../../../components/login/signin';

import { useRouter } from 'next/navigation';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useState } from 'react';

const pages = ['Find events', 'Create events', 'Log in', 'Sign up'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const appTitle = 'Event Bright';

export default function Home() {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [showSignUpDialog, setShowSignUpDialog] = useState(false);
    const [showSignInDialog, setShowSignInDialog] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
        if (e.target.innerText.toLowerCase() == 'sign up') setShowSignUpDialog(true)
        else if (e.target.innerText.toLowerCase() == 'log in') setShowSignInDialog(true)
        else if (e.target.innerText.toLowerCase() == 'create event') router.push('/event/create')
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseSignUp = () => {
        setShowSignUpDialog(false);
    };

    const handleCloseSignIn = () => {
        setShowSignInDialog(false);
    };

    const router = useRouter();

    return (
        <>
            <SignIn open={showSignInDialog} handleCloseSignIn={handleCloseSignIn} />
            <SignUp open={showSignUpDialog} handleCloseSignUp={handleCloseSignUp} />
            <AppBar color='inherit' position='static' variant='dense' sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }}>
                <Toolbar>
                    <LiquorIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {appTitle}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <LiquorIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none'
                        }}
                    >
                        {appTitle}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>
                        {/* {pages.map((page) => ( */}
                        <Link
                            key='Find event'
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'black',
                                display: 'block',
                                // fontFamily: 'Neue Plak Text,Neue Plak', 
                                fontWeight: 400,
                                marginLeft: '30px',
                                fontSize: '17px',
                                textDecoration: 'none',
                                letterSpacing: '1px',
                                ':hover': {
                                    cursor: 'pointer',
                                    color: 'blue'
                                }
                            }}
                        >
                            Find event
                        </Link>
                        <Link
                            key='Create event'
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'black',
                                display: 'block',
                                // fontFamily: 'Neue Plak Text,Neue Plak', 
                                fontWeight: 400,
                                marginLeft: '30px',
                                fontSize: '17px',
                                textDecoration: 'none',
                                letterSpacing: '1px',
                                ':hover': {
                                    cursor: 'pointer',
                                    color: 'blue'
                                }
                            }}
                        >
                            Create event
                        </Link>
                        <Link
                            key='Log in'
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'black',
                                display: 'block',
                                // fontFamily: 'Neue Plak Text,Neue Plak', 
                                fontWeight: 400,
                                marginLeft: '30px',
                                fontSize: '17px',
                                textDecoration: 'none',
                                letterSpacing: '1px',
                                ':hover': {
                                    cursor: 'pointer',
                                    color: 'blue'
                                }
                            }}
                        >
                            Log in
                        </Link>
                        <Link
                            key='Sign up'
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'black',
                                display: 'block',
                                // fontFamily: 'Neue Plak Text,Neue Plak', 
                                fontWeight: 400,
                                marginLeft: '30px',
                                fontSize: '17px',
                                textDecoration: 'none',
                                letterSpacing: '1px',
                                ':hover': {
                                    cursor: 'pointer',
                                    color: 'blue'
                                }
                            }}
                        >
                            Sign up
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar >
            <HomePoster />
            <HomeEventCard />
            <HomeFooter />
        </>
    )
}