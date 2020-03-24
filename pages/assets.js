import { Fragment } from 'react';
import WhiteBoard from '../components/WhiteBoard';
import { makeStyles, Container, Typography, Button } from '@material-ui/core';
import Jumbotron from '../components/Jumbotron';
import SideTabs from '../components/SideTabs';
import TabPanel from '../components/TabPanel';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    [theme.breakpoints.down('sm')]: { padding: 0 },
  },
  appbar: {
    height: 84,
    lineHeight: 84,
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      height: 56,
    },
  },
  startMargin: {
    marginTop: theme.spacing(6),
  },
  divMargin: {
    marginBottom: '16px',
    color: '#999',
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(6),
  },
  single: {
    marginBottom: theme.spacing(4),
  },
}));

const useJumbo = () => ({
  dTitle: 'Asset List',
  dContent: 'A Small but Great Convergence',
  mTitle: 'Asset List',
  mContent: 'A Small but Great Convergence',
});

const useTabs = () => [
  'PC 장비 목록',
  '모바일 기기 목록',
  '임베디드 장비 목록',
  '서버 장비 목록',
];

const Assets = props => {
  const classes = useStyles();
  const jumboData = useJumbo();
  const tabsData = useTabs();

  return (
    <Fragment>
      <Jumbotron data={jumboData} />
      <WhiteBoard>
        <Container maxWidth="lg" className={classes.container}>
          <SideTabs tabs={tabsData}>
            <TabPanel index={0}>
              <Typography
                style={{ marginTop: 0 }}
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                {tabsData[0]}
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서 관리하는 공용 PC 장비의
                목록입니다.
              </Typography>
            </TabPanel>
            <TabPanel index={1}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                {tabsData[1]}
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서 관리하는 공용 모바일 기기
                목록입니다.
              </Typography>
            </TabPanel>
            <TabPanel index={2}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                {tabsData[2]}
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서 관리하는 공용 임베디드 장비
                목록입니다.
              </Typography>
            </TabPanel>
            <TabPanel index={3}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                {tabsData[3]}
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서 관리하는 서버 장비 목록입니다.
              </Typography>
            </TabPanel>
          </SideTabs>
        </Container>
      </WhiteBoard>
    </Fragment>
  );
};

export default Assets;
