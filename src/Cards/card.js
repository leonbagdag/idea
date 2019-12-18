import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const card=()=>
{
    const useStyles = makeStyles({
        card: {
          maxWidth: 300,
        },
        media: {
          height: 120,
        },
      });
    
<Card>
      <CardActionArea>
        <CardMedia
          
          image=""
          title="Iphone 7"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Iphone 7
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            128 Gb , silver
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
        
      </CardActions>
</Card>

};
export default card;