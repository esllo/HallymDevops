import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  leftImg: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  },
  rightDiv: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      paddingLeft: 0,
      textAlign: 'center',
    },
    width: theme.spacing(42),
    paddingLeft: theme.spacing(4),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  gridItem: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  content: {
    color: '#aaa',
  },
}));

const ContentPane = props => {
  const classes = useStyles();
  return (
    <Grid className={props.className} container spacing={0}>
      {props.data.map((data, index) => {
        let cls =
          'childAnim' in props
            ? props.childAnim[index % props.childAnim.length]
            : '';
        if (cls != '') cls += ' delay0' + index;
        return (
          <Grid
            key={'pane_item_' + index}
            item
            xs={12}
            sm={6}
            className={[classes.gridItem, cls].join(' ')}>
            <img className={classes.leftImg} src={data.imgSrc} />
            <div className={classes.rightDiv}>
              <Typography variant="h6" className={classes.title}>
                {data.title}
              </Typography>
              <Typography variant="body1" className={classes.content}>
                {data.content}
              </Typography>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

ContentPane.defaultProps = {
  data: [
    {
      imgSrc: '/static/img/img_work.png',
      title: 'Work',
      content: 'SW중심대학의 서버와 실습자원을 관리합니다',
    },
    {
      imgSrc: '/static/img/img_asset.png',
      title: 'Asset Service',
      content: '전산 장비의 대여 및 관리를 총괄합니다',
    },
    {
      imgSrc: '/static/img/img_linux.png',
      title: 'Linux Account Service',
      content: '리눅스 서버의 계정 발급 서비스를 지원합니다',
    },
    {
      imgSrc: '/static/img/img_vm.png',
      title: 'VM Service',
      content: 'VM 발급 서비스를 지원합니다',
    },
  ],
};

export default ContentPane;
