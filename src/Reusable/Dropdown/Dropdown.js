import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 , mb:2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={props.title}
          onChange={handleChange}
        >
          <MenuItem value={10}>{props.value1}</MenuItem>
          <MenuItem value={20}>{props.value2}</MenuItem>
          <MenuItem value={30}>{props.value3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}