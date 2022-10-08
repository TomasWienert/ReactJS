import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = ({data}) => {

  return (
    <Card sx={{ maxWidth: 345 , margin: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            $ {data.precio}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.nombre} {data.marca} 
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Stock: {data.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;