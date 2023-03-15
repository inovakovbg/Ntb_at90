import { FormControl, InputLabel, MenuItem, Select, Stack, TextField, InputAdornment } from '@mui/material';
import styles from './ExploreFilters.module.scss';
import SearchIcon from "@mui/icons-material/Search";



export default function ExploreFilters({ filters }) {
    const { sort, price } = filters;

    return (
        <div className={styles['explore-filters']}>


            <Stack direction="row" spacing={2} justifyContent={"flex-end"} >

                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Sort By</InputLabel>

                    <Select  >

                        {sort.map((option) => (
                            <MenuItem value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>

                </FormControl>


                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Price range</InputLabel>
                    <Select>
                        {price.map((option) => (
                            <MenuItem value={option.value} >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>



                <TextField  className={styles.textField} type="search"
                    variant="standard"
                    placeholder="Search NFTs"
                   
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


