import { useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  fillScreen: {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  '@keyframes fadeOut': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  fadeOutEffect: {
    animationName: '$fadeOut',
    animationDuration: '1.2s',
    animationFillMode: 'forwards',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeInEffect: {
    animationName: '$fadeIn',
    animationDuration: '1.2s',
    animationFillMode: 'forwards',
  },
});

const ImageDisplay = () => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();
  const bgImages = ['/static/img/main_01.jpg', '/static/img/main_03.jpg'];

  const changeBackground = () => {
    setTimeout(() => {
      setIndex((index + 1) % bgImages.length);
    }, 5000);
  };

  changeBackground();

  return (
    <Box>
      {bgImages.map((e, i) => {
        return (
          <Box
            key={i}
            className={[
              classes.fillScreen,
              index == i ? classes.fadeInEffect : classes.fadeOutEffect,
            ].join(' ')}
            style={{ backgroundImage: "url('" + e + "')" }}></Box>
        );
      })}
    </Box>
  );
};

export default ImageDisplay;
