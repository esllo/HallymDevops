import Link from 'next/link';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useState, Fragment } from 'react';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
  },
  drawerLogo: {
    margin: theme.spacing(2),
    width: 'calc(240px - ' + theme.spacing(4) + 'px)',
  },
  nested: {
    marginLeft: theme.spacing(2),
  },
}));

const SideDrawer = props => {
  const classes = useStyles();
  const menus = [
    { name: 'Home', sub: [], path: '/' },
    {
      name: 'About Us',
      sub: [{ name: '소개', path: '/about' }],
      path: '/about',
    },
    {
      name: 'Services',
      sub: [{ name: '전체 서비스', path: '/services' }],
      path: '/services',
    },
    {
      name: 'Assets',
      sub: [
        { name: '자산 목록', path: '' },
        { name: '자산 대여', path: '' },
        { name: '자산 반납', path: '' },
      ],
      path: '/assets',
    },
    { name: 'Servers', sub: [{ name: '서버 목록', path: '' }], path: '/servers' },
    { name: 'Server Status', sub: [], path: '/serverstatus' },
  ];

  const log = e => {
    console.log(e);
    return '';
  };

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={props.toggleTrigger(false)}>
      <img className={classes.drawerLogo} src="/static/img/logo.png" />
      <Divider />
      <List className={classes.drawer} component="nav">
        {menus.map((e, i) => (
          <Fragment key={'item_' + i}>
            <Link href={e.path}>
              <ListItem button onClick={props.toggleTrigger(false)}>
                <ListItemText primary={e.name} />
                {e.sub.length > 0 ? <ExpandMore /> : ''}
              </ListItem>
            </Link>
            {e.sub.length > 0 ? (
              <List component="div" disablePadding>
                {e.sub.map((s, ind) => (
                  <Link href={s.path} key={'item_sub_' + i + '_' + ind}>
                    <ListItem
                      button
                      className={classes.nested}
                      onClick={props.toggleTrigger(false)}>
                      <ListItemText primary={s.name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            ) : (
              ''
            )}
          </Fragment>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideDrawer;
