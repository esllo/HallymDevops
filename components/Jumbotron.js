import WhiteBoard from '../components/WhiteBoard';
import { Hidden, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

  bdMargin: { width: '70%', margin: '0 auto' },
  white: { color: '#fff' },
}));

const Jumbotron = props => {
  const classes = useStyles();

  return (<WhiteBoard
    bgColor="rgba(0,0,0,0.5)"
    useVerticalGap={true}
    transparent={true}>
    <Hidden only="xs">
      <Typography
        style={{ marginBottom: 16 }}
        className={[
          classes.bdMargin,
          classes.white,
          'anim slideDownIn',
        ].join(' ')}
        variant="h2">
        {props.data.dTitle}
      </Typography>
      <Typography
        className={[classes.bdMargin, classes.white, 'anim slideUpIn'].join(
          ' '
        )}
        variant="h4">
        {props.data.dContent}
      </Typography>
    </Hidden>
    <Hidden smUp>
      <Typography
        className={[
          classes.bdMargin,
          classes.white,
          'anim slideDownIn',
        ].join(' ')}
        variant="h3">
        {props.data.mTitle}
      </Typography>
      <Typography
        className={[classes.bdMargin, classes.white, 'anim slideUpIn'].join(
          ' '
        )}
        variant="body2"
        display="block">
        {props.data.mContent}
      </Typography>
    </Hidden>
  </WhiteBoard>);
}

Jumbotron.defaultProps = {
  data:{
    dTitle: '',
    dContent: '',
    mTitle: '',
    mContent: ''
  }
}

export default Jumbotron;