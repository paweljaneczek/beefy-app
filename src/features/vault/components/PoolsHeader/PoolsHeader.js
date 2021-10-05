import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import styles from './styles';

const useStyles = makeStyles(styles);

const Text = ({ children, align }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.text} variant="h6" color="primary" align={align || 'center'}>
      {children}
    </Typography>
  );
};

export default function PoolsHeader(props) {
  const { t } = useTranslation();
  return (
    <Grid container className={props.className}>
      <Grid item xs={6} xl={4}>
        <Text align="left">{t('Header-Vaults')}</Text>
      </Grid>
      <Grid item xs={0} xl={2}>
        <Text>{t('Header-Ballance')}</Text>
      </Grid>
      <Grid item xs={0} xl={2}>
        <Text>{t('Header-Deposited')}</Text>
      </Grid>
      <Grid item xs={0} xl={1}>
        <Text>{t('Header-APY')}</Text>
      </Grid>
      <Grid item xs={0} xl={1}>
        <Text>{t('Header-Daily')}</Text>
      </Grid>
      <Grid item xs={0} xl={2}>
        <Text>{t('Header-TVL')}</Text>
      </Grid>
    </Grid>
  );
}
