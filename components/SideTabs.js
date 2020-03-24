import { Tabs, Tab, makeStyles, withWidth, Hidden } from '@material-ui/core';
import { scroller } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  tab: {
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  tabs: {
    width: 200,
    [theme.breakpoints.down('sm')]: {
      background: '#fff',
      width: '100%',
    },
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanels: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1) + 'px ' + theme.spacing(4) + 'px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2) + 'px ' + theme.spacing(1) + 'px',
    },
    '&.fixed': {
      [theme.breakpoints.up('md')]: {
        marginLeft: 200,
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: 50,
      },
    },
  },
  spy: {
    background: '#fff',
    '&.fixed': {
      zIndex: 999,
      position: 'fixed',
      top: 90,
      [theme.breakpoints.down('sm')]: {
        top: 64,
        width: '100%',
        left: 0,
      },
      [theme.breakpoints.down('xs')]: {
        top: 56,
      },
    },
  },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const SideTabs = props => {
  const classes = useStyles();
  const tabs_ = props.tabs;
  const panels_ = props.panels;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePanel = index => () => {
    if (process.browser) {
      scroller.scrollTo('vertical-tabpanel-' + index, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100,
      });
    }
  };
  const orient = {};

  return (
    <div className={classes.tab}>
      <Hidden smDown>
        <div fix-after={348} fix-with="#tab-panels" className={classes.spy}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            className={classes.tabs}>
            {tabs_.map((tab, index) => {
              return (
                <Tab
                  key={'tab_' + index}
                  label={tab}
                  {...a11yProps(index)}
                  onClick={handlePanel(index)}
                />
              );
            })}
          </Tabs>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div fix-after={254} fix-with="#tab-panels" className={classes.spy}>
          <Tabs
            orientation="horizontal"
            value={value}
            variant="scrollable"
            onChange={handleChange}
            className={classes.tabs}>
            {tabs_.map((tab, index) => {
              return (
                <Tab
                  key={'tab_' + index}
                  label={tab}
                  {...a11yProps(index)}
                  onClick={handlePanel(index)}
                />
              );
            })}
          </Tabs>
        </div>
      </Hidden>
      <div id="tab-panels" className={classes.tabPanels}>
        {props.children}
      </div>
    </div>
  );
};

export default withWidth()(SideTabs);
