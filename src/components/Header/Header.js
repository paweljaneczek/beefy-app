import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import styles from './styles';
import TVLInfo from 'components/TVLInfo/TVLInfo';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={`${classes.appBar} ${classes.dark}`} position="relative">
        <Toolbar className={classes.container} variant="dense">
          <Typography variant="h5">MOFI</Typography>
          <Typography variant="body2" color="textSecondary" className={classes.beta}>
            Beta
          </Typography>
          {/* <Divider orientation="vertical" flexItem /> */}
          {/* <div className={classes.middleNav}>
          {renderLink('vaults', t('vaults'), 'piggy-bank', classes)}
        </div> */}
          <Box flex={1} />
          <TVLInfo />
          <div className={classes.collapse}>{links}</div>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

export default Header;
