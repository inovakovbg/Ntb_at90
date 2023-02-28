import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styles from './ProductTabs.module.scss';
import User from '../user/User';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import formatDistance from 'date-fns/formatDistance';
import parseISO from 'date-fns/parseISO';








export default function ProductTabs({ text, bids }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles['product-tabs']} >
      <TabContext spacing={1} value={value} >


        <Box className={styles['tabs-line']}>
          <TabList onChange={handleChange}>
            <Tab label="DETAILS" value="1" className={styles['tab-details']} />
            <Tab label="BIDS" value="2" className={styles['tab-bids']} />
          </TabList>
        </Box>

        <TabPanel className={styles['tab-details']} value="1">{text}</TabPanel>
        <TabPanel className={styles['tab-bids']} value="2" >

          <Table >

            {bids.map((bid, i) => {

              { console.log(`table-row-${i}`) }
              return (

                <TableRow key={i} className={`table-row-${i}`} style={{backgroundColor: i % 2 === 0 ? 'rgba(78, 36, 242, 0.05)' : 'rgba(78, 36, 242, 0.15)' }}>

                  <TableCell align="left" className={styles['table-cell']}>
                    <User size='53px' avatar={bid.user.avatar} name={bid.user.name} verified={bid.user.verified} />
                  </TableCell>

                  <TableCell align="right" className={styles['table-cell-price']}> {bid.amount + ' ETH'}</TableCell>

                  <TableCell align="right" className={styles['table-cell']}>
                    {formatDistance(parseISO(bid.date), new Date())}
                  </TableCell>

                </TableRow>
              )

            })}

          </Table>

        </TabPanel>

      </TabContext>
    </div>

  );
}