import { Hidden, withWidth } from '@material-ui/core';
import PropTypes from 'prop-types';

const ImageSwap = props => {
  return <img className={props.className} src={props.imgSrc[props.width]} />;
};

ImageSwap.defaultProps = {
  imgSrc: {
    xl: '/static/img/map/map_xl.png',
    lg: '/static/img/map/map_lg.png',
    md: '/static/img/map/map_md.png',
    sm: '/static/img/map/map_sm.png',
    xs: '/static/img/map/map_xs.png',
  },
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ImageSwap);
