import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ValueBrand() {
  return (
    <Card sx={{ minWidth: 275 ,background:"#000"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20 ,color:"#fff",textAlign:"center"}}  gutterBottom>
          Coming Soon ...
        </Typography>
      </CardContent>
    </Card>
  );
}
