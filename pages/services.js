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
  dTitle: 'IT Services',
  dContent: 'A Small but Great Convergence',
  mTitle: 'IT Services',
  mContent: 'A Small but Great Convergence',
});

const useTabs = () => [
  'G Suite 계정발급',
  '자산대여',
  '리눅스 계정 발급',
  'GPU 서버 계정 발급',
  'VM 발급',
  '서버 모니터링',
];

const Services = props => {
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
                G Suite 계정 발급 서비스
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서는 한림대학교 학내 구성원(교수,
                직원, 학부생, 대학원생)을 위한 G Suite for Education 계정 발급
                서비스를 진행하고 있습니다.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                G Suite for Education을 사용하면 다음과 같은 여러가지 구글
                서비스들을 한 번에 폭넓게 이용하실 수 있습니다.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                - 구글 클래스룸
                <br /> - 구글 드라이브(무제한)
                <br /> - 구글 그룹스
                <br /> - 구글 오피스(슬라이드, 스프레드시트, 워드, 설문지 등)
                <br /> - 기타 서비스(YouTube, 구글 앱스토어 등록앱 등)
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                아래 신청서 링크를 통해 계정을 신청할 수 있습니다. (단,
                중복개설, 비구성원은 개설하실 수 없습니다) 계정이 생성된 이후에
                각 사용자는 구글 클래스룸, 구글 그룹스 등의 서비스를 이용하실 수
                있습니다. 자세한 사항은 매뉴얼을 참조하세요.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                단, 많은 Google 서비스에서 계정을 사용할 수 있지만 계정을
                사용하여 액세스할 수 있는 서비스는 glab.hallym.ac.kr 관리자가
                결정합니다. 사용자가 Google 서비스를 이용할 때 도메인 관리자는
                사용자가 계정을 이용해 Google 서비스에서 지정한 데이터를 포함해
                사용자의 계정 정보에 액세스할 수 있습니다. 조직으로부터 G Suite
                핵심 서비스 액세스 권한을 부여받으면 해당 서비스의 사용은 조직의
                G Suite 계약에 의거하여 처리됩니다. 기타 사항들은 Google 서비스
                약관 및 Google 개인정보처리방침을 따릅니다.
              </Typography>

              <Button
                className={'anim fadeIn'}
                variant="outlined"
                size="large"
                color="primary">
                G Suite 계정신청
              </Button>
            </TabPanel>
            <TabPanel index={1}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                자산대여 서비스
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서는 SW융합대학에 비치되어 있는
                여러가지 자산을 지원하고 있습니다. 학내 구성원은 소정의 절차에
                따라 등록된 자산을 대여하실 수 있습니다.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                개인이 쉽게 보유할 수 없는 3D프린터와 같은 장비의 차이가
                결과물의 완성도에서 큰 차이를 만들어 냅니다. 소프트웨어
                융합대학에서는 학내 구성원이 개발이나 연구에서 유용하게 사용할
                수 있는 장비를 비치하기 위해 최선을 다하고 있습니다. 본 자산대여
                서비스를 통해 그 작은 차이를 경험해 보세요.
              </Typography>
              <Button
                className={'anim fadeIn'}
                variant="outlined"
                size="large"
                color="primary">
                자산 목록 확인
              </Button>
            </TabPanel>
            <TabPanel index={2}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                리눅스 계정발급 서비스
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서는 SW융합대학에서 보유하고 있는
                서버에 대한 리눅스 계쩡 발급 서비스를 진행하고 있습니다.
                사용하고자 하는 서버를 목록에서 확인한 후 소정의 양식을 신청서에
                작성하여 제출하시면 계쩡을 발급 받을 수 있습니다.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                리눅스 계정은 관리자 권한이 부여되지 않으므로 Anaconda와
                Docker의 사용을 권장합니다.
              </Typography>
            </TabPanel>
            <TabPanel index={3}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                GPU 서버 계정발급 서비스
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서는 SW융합대학에서 보유하고 있는
                GPU 서버에 대한 리눅스 계정 발급 서비스를 진행하고 있습니다. GPU
                서버는 현재 연구용으로 할당되어 교수 이상의 직급을 가진 구성원만
                신청이 가능합니다.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                GPU 서버는 제한된 리소스를 여러명이 동시에 사용하기 때문에
                사용자가 많아질 경우 리소스 할당량이 부여될 수 있습니다.
              </Typography>
            </TabPanel>
            <TabPanel index={4}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                VM 발급 서비스
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서는 SW융합대학에서 보유하고 있는
                서버에서 VM 발급 서비스를 진행하고 있습니다. VM 서버는 여러가지
                운영체제의 VM이 발급 가능하지만, 별도의 시리얼(Key)가 필요한
                운영체제의 경우 발급이 제한될 수 있습니다.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                서버 구축중
              </Typography>
            </TabPanel>
            <TabPanel index={5}>
              <Typography
                className={classes.title + ' anim slideUpIn delay01'}
                variant="h5">
                서버 모니터링 서비스
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                소프트웨어 중심대학 사업단에서는 SW융합대학에서 구동하고 있는
                서버에 대한 모니터링 서비스를 지원하고 있습니다.
              </Typography>
              <Typography
                className={classes.single + ' anim slideUpIn delay03'}
                variant="body1">
                아래의 링크에서 현재 보유하고 있는 서버들의 리소스를 직접 확인할
                수 있습니다.
              </Typography>
              <Button
                className={'anim fadeIn duration12'}
                variant="outlined"
                size="large"
                color="primary">
                서버 모니터링
              </Button>
            </TabPanel>
          </SideTabs>
        </Container>
      </WhiteBoard>
    </Fragment>
  );
};

export default Services;
