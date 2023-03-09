import { FormControl, InputLabel, MenuItem, Select, Stack, TextField,InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from './ProfileCollectionFilters.module.scss';
import SearchIcon from "@mui/icons-material/Search";


const ProfileCollectionFilters = ({ filters }) => {
    const { sort, price } = filters;

    return (
        <div className={styles['profile-collection-filters']}>


            <Stack direction="row" spacing={2}>

                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Sort By</InputLabel>

                    <Select >
                        {sort.map((option) => (
                            <MenuItem>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>

                </FormControl>


                <FormControl variant="outlined" className={styles.form}>
                    <InputLabel>Price Range</InputLabel>
                    <Select>
                        {price.map((option) => (
                            <MenuItem >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField className={styles.textField}   type="search"
                    variant="outlined"
                    // placeholder="Search NFTs"
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

export default ProfileCollectionFilters;
