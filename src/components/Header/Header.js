import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { getNetworkBuyUrl } from '../../features/helpers/getNetworkData';
import styles from './styles';
import TVLInfo from 'components/TVLInfo/TVLInfo';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const { chain } = useParams();

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`} position="relative">
      <Toolbar className={classes.container} variant="dense">
        <Link to={`/${chain}`}>
          <Button className={classes.title}>
            <Hidden xsDown>
              <img
                alt="BIFI"
                src={require(`images/BIFI-logo.svg`)}
                height={'40px'}
                className={classes.logo}
              />
            </Hidden>
            <Hidden smUp>
              <img
                alt="BIFI"
                src={require(`images/BIFI-logo.svg`)}
                height={'35px'}
                className={classes.logo}
              />
            </Hidden>
          </Button>
        </Link>
        <Divider orientation="vertical" flexItem />
        <div className={classes.middleNav}>
          {renderLink('vaults', t('vaults'), 'piggy-bank', classes)}
        </div>
        <Box flex={1} />
        <TVLInfo />
        <div className={classes.collapse}>{links}</div>
      </Toolbar>
    </AppBar>
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
