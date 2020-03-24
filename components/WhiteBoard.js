import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = props =>
  makeStyles(theme => ({
    whiteBoard: {
      background: props.bgColor
        ? props.bgColor
        : props.transparent
        ? '#0000'
        : '#fff',
      padding: props.useVerticalGap
        ? theme.spacing(12) + 'px ' + theme.spacing(4) + 'px'
        : theme.spacing(4),
      marginTop: theme.spacing(parseInt(props.marginTop) || 0),
      minHeight: props.minHeight || '100px',
      [theme.breakpoints.down('sm')]: {
        padding: props.useVerticalGap
          ? theme.spacing(6) + 'px ' + theme.spacing(4) + 'px'
          : theme.spacing(4),
      },
    },
  }));

const WhiteBoard = props => {
  const classes = useStyles(props)();
  return (
    <Box
      className={[classes.whiteBoard, props.className].join(' ')}
      width="100%">
      {props.children}
    </Box>
  );
};

export default WhiteBoard;
