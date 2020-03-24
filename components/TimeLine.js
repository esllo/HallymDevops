import { Fragment } from 'react';
import { makeStyles, Typography, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(8),
      height: theme.spacing(6),
      lineHeight: theme.spacing(6) + 'px',
    },
    color: '#333',
    textAlign: 'center',
  },
  line: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      borderLeft: '2px solid #aaa',
      paddingLeft: theme.spacing(2),
      minHeight: '50px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(8),
      marginTop: -theme.spacing(3),
      borderTop: '2px solid #aaa',
    },
  },
  lineItem: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      borderLeft: '2px solid #aaa',
      paddingLeft: theme.spacing(2),
      minHeight: '50px',
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(3) + 'px ' + theme.spacing(1.5) + 'px',
      display: 'flex',
      flexDirection: 'column',
      lineHeight: theme.spacing(2) + 'px',
    },
  },
  timelineWrap: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      display: 'block',
    },
  },
  lineWrap: {
    [theme.breakpoints.up('md')]: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  text: {
    color: '#aaa',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginTop: -theme.spacing(4),
    },
  },
}));

const TimeLineItem = props => {
  const classes = props.class;
  const data = props.data;
  return (
    <Fragment>
      <div className={classes.lineWrap+ ' anim fadeIn delay0'+(props.index+1)}>
        <Typography variant="h5" className={classes.large}>
          {data.year}
        </Typography>
        <Hidden smDown>
          <div className={classes.line}></div>
        </Hidden>
        <div className={classes.lineItem}>
          {data.data.map((datum, index) => {
            return (
              <Fragment key={'timeline_item_' + index}>
                <Typography style={{ fontWeight: 'bold' }} variant="body1">
                  {datum.month}
                </Typography>
                {datum.text.map((text, i) => (
                  <Typography
                    key={'timeline_item_' + index + '_' + i}
                    variant="body2"
                    className={classes.text}>
                    {text}
                  </Typography>
                ))}
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

const TimeLine = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography className={props.className+' anim slideUpIn delay03'} variant={props.variant}>
        {props.title}
      </Typography>
      {props.children}
      <div className={classes.timelineWrap}>
        {props.data.map((datum, index) => {
          return (
            <TimeLineItem
              key={'timeline_' + index}
              index={index}
              data={datum}
              class={classes}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
TimeLine.defaultProps = {
  title: 'History',
  variant: 'h4',
  data: [
    { year: '2017', data: [] },
    {
      year: '2018',
      data: [{ month: 5, text: ['한림대학교 소프트웨어 융합대학 출범'] }],
    },
    { year: '2019', data: [] },
    {
      year: '2020',
      data: [
        { month: 3, text: ['시스템 모니터링 페이지 구축'] },
        { month: 9, text: ['전산실 통합구축'] },
      ],
    },
    { year: '2021', data: [] },
  ],
};

export default TimeLine;
