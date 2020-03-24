import { Fragment } from 'react';
import WhiteBoard from '../components/WhiteBoard';
import {
  makeStyles,
  Container,
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
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
  table: {
    minWidth: 674,
    '& > thead > tr > th': {
      fontSize: '0.8rem',
    },
    '& > tbody > tr > td': {
      fontSize: '0.8rem',
    },
  },
  tableRow: {
    background: '#eee',
  },
  tableMobile: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 -20px',
      width: 'calc(100% + 40px)',
    },
  },
  tableHost: {
    width: 140,
  },
}));

const useJumbo = () => ({
  dTitle: 'Server List',
  dContent: 'A Small but Great Convergence',
  mTitle: 'Server List',
  mContent: 'A Small but Great Convergence',
});

const useTabs = () => [
  '일반 서버 목록',
  '리눅스 서버 목록',
  'GPU 서버 목록',
  'VM 서버 목록',
];

const breakLine = text => {
  let spl = text.split('\n');
  return spl.map((item, i) => (
    <Fragment key={i}>
      {item}
      {spl.length - 1 > i && <br />}
    </Fragment>
  ));
};

const createTable = (classes, data) => {
  return (
    <TableContainer className={classes.tableMobile} component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableHost} align="center">
              호스트명
            </TableCell>
            <TableCell align="center" colSpan={2}>
              사양
            </TableCell>
            <TableCell align="center">용도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((datum, i) => createTableData(datum, i))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const createTableData = (data, i) => {
  return (
    <TableRow key={'row_' + i}>
      <TableCell align="center">{breakLine(data.host)}</TableCell>
      <TableCell align="right">
        CPU
        <br />
        Memory
        <br />
        {data.gpu && breakLine('GPU\n')}
        Storage
        <br />
        PSU
      </TableCell>
      <TableCell>
        {data.cpu}
        <br />
        {data.memory}
        <br />
        {data.gpu && breakLine(data.gpu + '\n')}
        {data.storage}
        <br />
        {data.power}
      </TableCell>
      <TableCell align="center">{breakLine(data.purpose)}</TableCell>
    </TableRow>
  );
};

const useTables = () => ({
  normal: [
    {
      host: 'HLU-HPC-HOST',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '2TB+2TB(HDD)',
      power: '750W Redundent',
      purpose: '전체 서버관리, 웹페이지 호스팅',
    },
  ],
  linux: [
    {
      host: 'HLU-HPC-N-01',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '1TB(HDD)',
      power: '750W Redundent',
      purpose: '리눅스 서버 계정 발급용\nUbuntu Server 18.04 LTS',
    },
    {
      host: 'HLU-HPC-N-02',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '1TB(HDD)',
      power: '750W Redundent',
      purpose: '리눅스 서버 계정 발급용\nUbuntu Server 18.04 LTS',
    },
    {
      host: 'HLU-HPC-N-03',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '1TB(HDD)',
      power: '750W Redundent',
      purpose: '리눅스 서버 계정 발급용\nUbuntu Server 18.04 LTS',
    },
    {
      host: 'HLU-HPC-N-04',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '1TB(HDD)',
      power: '750W Redundent',
      purpose: '리눅스 서버 계정 발급용\nUbuntu Server 18.04 LTS',
    },
  ],
  gpu: [
    {
      host: 'HLU-GPU-WS-01',
      cpu: 'Intel Core i7 8700K (6C 12T)',
      memory: '32GB',
      gpu: 'Nvidia Geforce GTX 1080TI 11GB',
      storage: '256GB(SSD) + 4TB(HDD)',
      power: '750W',
      purpose:
        '캡스톤 디자인 프로젝트 용\nUbuntu Server 18.04 LTS\nCUDA 10.1, CuDNN 7.6.4',
    },
    {
      host: 'HLU-GPU-WS-02',
      cpu: 'Intel Core i7 8700K (6C 12T)',
      memory: '32GB',
      gpu: 'Nvidia Geforce GTX 1080TI 11GB',
      storage: '256GB(SSD) + 4TB(HDD)',
      power: '750W',
      purpose:
        '캡스톤 디자인 프로젝트 용\nUbuntu Server 18.04 LTS\nCUDA 10.1, CuDNN 7.6.4',
    },
    {
      host: 'HLU-GPU-WS-03',
      cpu: 'Intel Core i7 8700K (6C 12T)',
      memory: '32GB',
      gpu: 'Nvidia Geforce GTX 1080TI 11GB',
      storage: '256GB(SSD) + 4TB(HDD)',
      power: '750W',
      purpose:
        '캡스톤 디자인 프로젝트 용\nUbuntu Server 18.04 LTS\nCUDA 10.1, CuDNN 7.6.4',
    },
    {
      host: 'HLU-GPU-M-01',
      cpu: 'Intel Xeon E5-2623 v4 (8C 16T)',
      memory: '64GB',
      gpu: 'Nvidia Geforce Titan Xp 12GB x2',
      storage: '1.5TB(SSD)+2TB(HDD)',
      power: '1600W Redundent',
      purpose: '연구용\nUbuntu Server 18.04 LTS\nCUDA 10.1, CuDNN 7.6.4',
    },
    {
      host: 'HLU-GPU-M-02',
      cpu: 'Intel Core X i9-9920X (12C 24T)',
      memory: '128GB',
      gpu: 'Nvidia Geforce RTX 2080TI 11GB x2',
      storage: '500GB(SSD)+2TB(HDD)',
      power: '1200W 80+Platinum',
      purpose: '연구용\nUbuntu Server 18.04 LTS\nCUDA 10.1, CuDNN 7.6.4',
    },
    {
      host: 'HLU-GPU-M-03',
      cpu: 'Intel Core X i9-9920X (12C 24T)',
      memory: '128GB',
      gpu: 'Nvidia Geforce RTX 2080TI 11GB x2',
      storage: '500GB(SSD)+2TB(HDD)',
      power: '1200W 80+Platinum',
      purpose: '연구용\nUbuntu Server 18.04 LTS\nCUDA 10.1, CuDNN 7.6.4',
    },
  ],
  vm: [
    {
      host: 'HLU-HPC-VM-01',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '1TB(HDD)',
      power: '750W Redundent',
      purpose: 'VM 서버\nVMWare ESXi Hypervisor',
    },
    {
      host: 'HLU-HPC-VM-02',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '1TB(HDD)',
      power: '750W Redundent',
      purpose: 'VM 서버\nVMWare ESXi Hypervisor',
    },
    {
      host: 'HLU-HPC-VM-03',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB ECC-REG',
      storage: '1TB(HDD)',
      power: '750W Redundent',
      purpose: 'VM 서버\nVMWare ESXi Hypervisor',
    },
    {
      host: 'AMD Ryzen 9 3950x (16C 32T)',
      cpu: 'Intel Xeon E5-2650 v2 (16C 32T)',
      memory: '128GB',
      gpu: 'Nvidia Geforce GTX 1650 1GB',
      storage: '2TB+2TB(SSD)',
      power: '850W 80+Platinum',
      purpose: 'VM 서버 (운영체제 1,2분반)\nVMWare ESXi Hypervisor',
    },
  ],
});

const Servers = props => {
  const classes = useStyles();
  const jumboData = useJumbo();
  const tabsData = useTabs();
  const tableData = useTables();

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
                소프트웨어 중심대학 사업단에서 관리하는 일반 서버의 목록입니다.
              </Typography>
              {createTable(classes, tableData.normal)}
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
                소프트웨어 중심대학 사업단에서 관리하는 리눅스 서버의
                목록입니다.
              </Typography>
              {createTable(classes, tableData.linux)}
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
                소프트웨어 중심대학 사업단에서 관리하는 GPU 서버의 목록입니다.
              </Typography>
              {createTable(classes, tableData.gpu)}
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
              {createTable(classes, tableData.vm)}
            </TabPanel>
          </SideTabs>
        </Container>
      </WhiteBoard>
    </Fragment>
  );
};

export default Servers;
