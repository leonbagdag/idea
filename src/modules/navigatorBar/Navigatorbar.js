import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



export default function SimpleBreadcrumbs() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="" onClick={handleClick}>
        Home
      </Link>
      <Link color="inherit" href="" onClick={handleClick}>
        Products
      </Link>
      <Link color="inherit" href="" onClick={handleClick}>
        Cart
      </Link>
    </Breadcrumbs>
  );
}