import React, { memo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getSingleAssetSrc } from '../../../../helpers/getSingleAssetSrc';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolTitle = ({
  name,
  logo,
  poolId,
  description,
  buyTokenUrl,
  addLiquidityUrl,
  removeLiquidityUrl,
  assets,
}) => {
  const classes = useStyles();

  let avatar;
  if (logo) {
    avatar = (
      <Avatar
        alt={logo}
        variant="square"
        className={classes.icon}
        imgProps={{ style: { objectFit: 'contain' } }}
        src={require(`images/${logo}`)}
      />
    );
  } else {
    avatar = (
      <AvatarGroup className={`${classes.icon} MuiAvatar-root MuiAvatar-square`} spacing="small">
        <Avatar
          alt={assets[0]}
          variant="square"
          imgProps={{ style: { objectFit: 'contain' } }}
          src={getSingleAssetSrc(assets[0]).default}
        />
        <Avatar
          alt={assets[1]}
          variant="square"
          imgProps={{ style: { objectFit: 'contain' } }}
          src={getSingleAssetSrc(assets[1]).default}
        />
      </AvatarGroup>
    );
  }

  return (
    <Grid className={classes.container} container wrap="nowrap">
      {avatar}
      <div className={classes.texts}>
        <Typography variant="h6" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="primary">
          {description}
        </Typography>
        {/* <div style={{ display: 'flex', marginTop: '6px' }}>
          {buyTokenUrl ? (
            <a className={classes.url} href={buyTokenUrl} target="_blank" rel="noopener noreferrer">
              <span>{name === 'WBNB' ? t('Wrap-BNB') : t('Buy-Token')}</span>
              {'\u00A0\u00A0'}
            </a>
          ) : (
            ''
          )}
          {addLiquidityUrl ? (
            <a
              className={classes.url}
              href={addLiquidityUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t('Add-Liquidity')}</span>
            </a>
          ) : (
            ''
          )}
          {removeLiquidityUrl ? (
            <a
              className={classes.url}
              href={removeLiquidityUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t('Remove-Liquidity')}</span>
            </a>
          ) : (
            ''
          )}
        </div> */}
      </div>
    </Grid>
  );
};

export default memo(PoolTitle);
