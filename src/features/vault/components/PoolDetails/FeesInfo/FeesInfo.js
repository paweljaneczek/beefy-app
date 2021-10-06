import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const FeesInfo = ({ pool }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Grid container item xs={12} xl={2} alignContent="center" className={classes.container}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h6" color="primary">
            {t('Pool-Fees')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="primary">
            {t('Pool-PlatformFee', { platformFee: pool.platformFee })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="primary">
            {t('Pool-DepositFee', { depositFee: pool.depositFee })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="primary">
            {t('Pool-WithdrawalFee', { withdrawalFee: pool.withdrawalFee })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="primary">
            {t('Pool-FeeCaption')}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeesInfo;
