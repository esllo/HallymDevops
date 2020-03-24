import { Fragment } from 'react';
import WhiteBoard from './WhiteBoard';
import { Container, makeStyles, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    color: '#999',
    [theme.breakpoints.down('sm')]: { padding: 0 },
  },
  divider: {
    margin: '-' + theme.spacing(4) + 'px',
    marginBottom: theme.spacing(3),
  },
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <WhiteBoard>
        <Divider className={classes.divider} />
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="button" display="block">
            24252 강원도 춘천시 한림대학길 1 한림대학교 SW중심대학 사업단
          </Typography>
          <Typography variant="button" display="block">
            © Hallym Software Convergence University. All rights reserved.
          </Typography>
        </Container>
      </WhiteBoard>
    </Fragment>
  );
};
export default Footer;
