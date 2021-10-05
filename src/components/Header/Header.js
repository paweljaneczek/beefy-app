import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { getNetworkBuyUrl } from '../../features/helpers/getNetworkData';
import styles from './styles';
import TVLInfo from 'components/TVLInfo/TVLInfo';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const { chain } = useParams();

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

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};

const getLinkUrl = name => {
  return name === 'buy' ? getNetworkBuyUrl() : `https://${name}.beefy.finance`;
};

export default Header;
