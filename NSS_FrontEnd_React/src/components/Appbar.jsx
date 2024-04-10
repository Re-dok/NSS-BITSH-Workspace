import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useMediaQuery } from '@mui/material';

const pages = ['Home', 'Events', 'About Us', 'Office Bearers', 'Contact Us'];

function Appbar() {
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const isMediumScreen = useMediaQuery('(min-width:600px)');
      const isLargeScreen = useMediaQuery('(min-width:960px)'); 
      const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');

      const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
            setAnchorElNav(null);
      };


      return (
            <AppBar position="static">
                  <Container maxWidth="xl" width="full" sx={{ background: '#353a40', height: '70px' }} >
                        <Toolbar disableGutters sx={{
                              paddingLeft: '0px',
                              paddingRight: '0px',
                              '@media (min-width: 960px)': {
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                              },
                              '@media (min-width: 320x)': {
                                    paddingLeft: '0x',
                                    paddingRight: '0px',
                              },
                        }}>
                             <img
            src="./src/assets/NSS-symbol.png"
            alt="NSS logo"
            loading="lazy"
            style={{
              width: isMediumScreen ? (isLargeScreen ? '60px' : '50px') : '50px',
            }}
          />      
                              <Box sx={{ display: 'block' }}>

                                   <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              letterSpacing: '.1rem',
              fontSize: isSmallMobile ? '16px' : '1.25rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
                                          NATIONAL SERVICE SCHEME
                                    </Typography>
                                    <Typography variant="caption" sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '10px', ml: 2 }} gutterBottom>
                                          BITS Pilani, Hyderabad Campus
                                    </Typography>
                                    <Typography
                                          variant="h5"
                                          noWrap
                                          component="a"
                                          href="#app-bar-with-responsive-menu"
                                          sx={{
                                                mr: 2,
                                                ml: 2,
                                                display: { xs: 'flex', md: 'none' },
                                                flexGrow: 1,
                                                fontFamily: 'sans-serif',
                                                letterSpacing: '0',
                                                color: 'inherit',
                                                fontSize: isSmallMobile ? '16px' : '1.25rem',
                                                textDecoration: 'none',
                                               
                                          }}
                                    >
                                          NATIONAL SERVICE SCHEME
                                    </Typography>
                                    <Typography variant="caption" sx={{ display: { xs: 'flex', md: 'none' }, fontSize: '10px', ml: 2 }} gutterBottom>
                                          BITS Pilani, Hyderabad Campus
                                    </Typography>
                              </Box>
                              <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', lg: 'flex' } }}>
                                    {pages.map((page) => (
                                          <Button
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{
                                                      my: 2, color: 'white', display: 'block',
                                                      ':hover': {
                                                            color: '#e0583b',
                                                            cursor: 'pointer',
                                                      },
                                                }}
                                          >
                                                {page}
                                          </Button>
                                    ))}
                              </Box>
                              <Box 
                              
                              sx={{
                                   
                                    flexGrow: 1,
                                    justifyContent: 'right',
                                    display: { xs: 'flex', lg: 'none' },
                              }}>
                                    <IconButton
                                          sx={{padding:0}}
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
                                                display: { xs: 'flex', xl: 'none' },
                                                '& .MuiList-padding': {
                                                      paddingTop: 0,
                                                      paddingBottom: 0,
                                                },
                                          }}
                                    >
                                          <MenuList >
                                                {pages.map((page) => (
                                                      <MenuItem key={page}
                                                            onClick={handleCloseNavMenu}
                                                            sx={{
                                                                  background: '#353a40',
                                                                  color: 'white',
                                                                  ':hover': {
                                                                        color: '#e0583b',
                                                                        background: '#353a40',
                                                                        cursor: 'pointer',
                                                                  },
                                                            }}>
                                                            <Typography textAlign="right">{page}</Typography>
                                                      </MenuItem>
                                                ))}
                                          </MenuList>
                                    </Menu>
                              </Box>
                        </Toolbar>
                  </Container>
            </AppBar>
      );
}
export default Appbar;
