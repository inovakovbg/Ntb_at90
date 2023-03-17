import { FormControl, InputLabel, MenuItem, Select, Stack, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from './ActivityFilters.module.scss';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';


export default function ActivityFilters({
    filters,
    sortMethod,
    filterType,
    handleChangeSort,
    handleChangeFilter,

}) {
    const { sort, type } = filters;


    return (
        <div className={styles['activity-filters']}>


            <Stack direction="row" spacing={2} >

                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Sort By</InputLabel>

                    <Select
                        value={sortMethod}
                        onChange={handleChangeSort}
                        label="Sort by"  >

                        {Object.values(filters).length > 0 &&
                            sort.map((option) => (
                                <MenuItem value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </Select>

                </FormControl>


                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Type</InputLabel>
                    <Select

                        value={filterType}
                        onChange={handleChangeFilter}
                        label="Type"
                    >
                        {Object.values(filters).length > 0 &&
                            type.map((option) => (
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
                                <SearchIcon className={styles.icon} />
                            </InputAdornment>
                        ),
                        disableUnderline: true
                    }}

                />




            </Stack>
        </div>
    );
};


