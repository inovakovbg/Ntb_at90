import { FormControl, InputLabel, MenuItem, Select, Stack, TextField,InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from './ProfileCollectionFilters.module.scss';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';


export default function ProfileCollectionFilters  ({ filters })  {
    const { sort, price } = filters;

    // const [sortBy, setSortBy] = useState('');
    // const [priceRange, setPriceRange] = useState('');
  
    // const handleSortByChange = (event) => {
    //   setSortBy(event.target.value);
    // };
  
    // const handlePriceRangeChange = (event) => {
    //   setPriceRange(event.target.value);
    // };
  

    return (
        <div className={styles['profile-collection-filters']}>


            <Stack direction="row" spacing={2} >

                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Sort By</InputLabel>

                    <Select   >
                   
                        {sort.map((option) => (
                            <MenuItem value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>

                </FormControl>


                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Price Range</InputLabel>
                    <Select>
                        {price.map((option) => (
                            <MenuItem value={option.value} >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                

                <TextField className={styles.textField} type="search"
                    variant="standard"
                    // placeholder="Search NFTs"
                    inputProps={{
                        style: { display: "flex", alignItems: "center" }
                      }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon className={styles.icon}/>
                            </InputAdornment>
                        ),
                    }}
                    
                />




            </Stack>
        </div>
    );
};


