import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Iphone 7"
        />
        <CardContent>
          <Typography align="left" variant="h6" color="initial" component="h2">
            Iphone 7
          </Typography>
          <Typography align="right" variant="h6" color="initial" component="h2">
            2000 
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" align="center" >
            Iphone 7 128 Silver, Gold,
             Rose Gold, Black
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="medium" color="Secondary" >
          Add To Cart
        </Button>
    
      </CardActions>
    </Card>
</div>
  );
}



