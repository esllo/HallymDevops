import { Box } from "@material-ui/core";

const TabPanel = props => {
  const { index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      name={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {props.children}
    </Box>
  );
};

export default TabPanel;
