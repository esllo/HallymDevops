import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  makeStyles,
  Button,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import { Fragment, useState } from 'react';

const Header = props => {
  const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    logo: {
      height: 30,
      [theme.breakpoints.up('lg')]: {
        height: 40,
        marginLeft: theme.spacing(6),
      },
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(4),
      },
    },
    button: {
      fontWeight: 'bold',
      marginRight: theme.spacing(6),
      color: props.white ? '#fff' : '#000',
      [theme.breakpoints.down('lg')]: {
        marginRight: theme.spacing(4),
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    },
    appbar: {
      height: 84,
      lineHeight: 84,
      color: '#000',
      [theme.breakpoints.down('sm')]: {
        height: 54,
      },
    },
    whiteBar: { background: '#fff' },
    transparentBar: { background: 'transparent', boxShadow: 'none' },
  }));
  const classes = useStyles();
  const [lang, setLang] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const changeLang = lang => () => {
    if (lang !== undefined) {
      setLang(lang);
      setAnchorEl(null);
    }
  };
  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Fragment>
      <AppBar className={props.tp ? classes.transparentBar : classes.whiteBar}>
        <Toolbar className={classes.appbar}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={props.toggleTrigger(true)}
              style={{ color: props.white ? '#fff' : '#000' }}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link href="/">
            <img className={classes.logo} src="/static/img/logo.png"></img>
          </Link>
          {/*<Typography variant="h6" className={classes.title}>
                한림대학교
  </Typography>*/}
          <span className={classes.grow}></span>
          <Hidden smDown>
            <Link href="/about">
              <Button className={classes.button} color="inherit">
                ABOUT US
              </Button>
            </Link>
            <Link href="/services">
              <Button className={classes.button} color="inherit">
                SERVICES
              </Button>
            </Link>
            <Link href="/assets">
              <Button className={classes.button} color="inherit">
                ASSETS
              </Button>
            </Link>
            <Link href="/servers">
              <Button className={classes.button} color="inherit">
                SERVERS
              </Button>
            </Link>
            <Link href="/serverstatus">
              <Button className={classes.button} color="inherit">
                SERVER STATUS
              </Button>
            </Link>
          </Hidden>
          <IconButton
            className={classes.button}
            onClick={handleMenu}
            color="inherit">
            <LanguageIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={changeLang()}>
            <MenuItem onClick={changeLang(true)}>Korean</MenuItem>
            <MenuItem onClick={changeLang(false)}>English</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {props.toolbar ? <Toolbar className={classes.appbar} /> : ''}
    </Fragment>
  );
};

export default Header;
