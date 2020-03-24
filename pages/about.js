import { Fragment } from 'react';
import WhiteBoard from '../components/WhiteBoard';
import {
  Typography,
  Hidden,
  makeStyles,
  Toolbar,
  Container,
  Divider,
} from '@material-ui/core';
import TimeLine from '../components/TimeLine';
import ContentPane from '../components/ContentPane';
import ImageSwap from '../components/ImageSwap';
import Jumbotron from '../components/Jumbotron';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    [theme.breakpoints.down('sm')]: { padding: 0 },
  },
  divMargin: {
    marginBottom: '16px',
    color: '#999',
  },
  startMargin: {
    marginTop: '84px',
  },
  appbar: {
    height: 84,
    lineHeight: 84,
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      height: 56,
    },
  },
  imageCover: {
    width: '100%',
    marginBottom: 16,
  },
}));

const useJumbo = () => ({
  dTitle: 'Hallym DevOps',
  dContent: 'A Small but Great Convergence',
  mTitle: 'Hallym DevOps',
  mContent: 'A Small but Great Convergence',
});

const About = props => {
  const classes = useStyles();
  const jumboData = useJumbo();
  return (
    <Fragment>
      {/*<Toolbar className={classes.appbar} />*/}
      <Jumbotron data={jumboData} />
      <WhiteBoard>
        <Container maxWidth="lg" className={classes.container}>
          <Typography
            variant="h4"
            className={classes.startMargin + ' anim slideUpIn delay01'}>
            Introduce
          </Typography>
          <Divider className={classes.divMargin} />
          <Typography
            variant="subtitle1"
            className={classes.divMargin + ' anim slideUpIn delay03'}>
            HLSW DevOps 페이지는 한림대학교 소프트웨어 중심대학 사업단에서
            운영합니다.
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.divMargin + ' anim slideUpIn delay05'}>
            DevOps 페이지의 서버 모니터링 서비스는 소프트웨어 중심대학에 비치된
            서버들을 대상으로 시행되고 있습니다. 또한, 학과 PC자산 관리와
            대여장비의 관리를 수행하고 있습니다.
          </Typography>

          <TimeLine className={classes.startMargin}>
            <Divider className={classes.divMargin} />
          </TimeLine>

          <div className={classes.divMargin}></div>
          <Typography
            variant="h4"
            className={classes.startMargin + ' anim slideUpIn delay01'}>
            Duty
          </Typography>
          <Divider className={classes.divMargin} />

          <ContentPane childAnim={['anim slideRightIn', 'anim slideLeftIn']} />

          <Typography
            variant="h4"
            className={classes.startMargin + ' anim slideUpIn delay01'}>
            Location
          </Typography>
          <Divider className={classes.divMargin} />

          <ImageSwap className={classes.imageCover + ' anim fadeIn delay05'} />
          <Typography
            variant="body2"
            className={classes.divMargin + ' anim slideUpIn delay01'}>
            24252 강원도 춘천시 한림대학길 1 한림대학교 SW중심대학 사업단
          </Typography>
          <Typography
            variant="body2"
            className={classes.divMargin + ' anim slideUpIn delay03'}>
            Software Convergence University, Hallym University,
            <Hidden mdUp>
              <br />
            </Hidden>
            HallymDaehakGil-1, ChunCheon-Si, GangWon-Do, 24252, Korea
          </Typography>
          <Typography
            variant="body2"
            className={classes.divMargin + ' anim slideUpIn delay05'}>
            TEL | 033-248-3356&emsp;&emsp;
            <Hidden smUp>
              <br />
            </Hidden>
            FAX | 033-242-2524&emsp;&emsp;
            <Hidden mdUp>
              <br />
            </Hidden>
            웹사이트 관리자 | 42602@hallym.ac.kr
          </Typography>
        </Container>
      </WhiteBoard>
    </Fragment>
  );
};

export default About;
