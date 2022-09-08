import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount"

const Item = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 , margin: 10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={data.avatar_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.login}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.login} {/* price */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.html_url}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount />
    </Card>
  );
}

export default Item;