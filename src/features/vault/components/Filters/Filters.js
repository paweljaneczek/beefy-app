import React, { memo, useCallback, useEffect } from 'react';
import * as R from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import styles from './styles';
import { assets, platforms } from './constants';
import FilterSelect from './FilterSelect/FilterSelect';

const useStyles = makeStyles(styles);

const prependAll = (items, t) => R.prepend({ value: 'All', name: t('Filters-All') }, items);

const Filters = ({
  toggleFilter,
  filters,
  platform,
  vaultType,
  asset,
  order,
  setPlatform,
  setVaultType,
  setAsset,
  setOrder,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handlePlatformChange = useCallback(value => setPlatform(value), [setPlatform]);
  const handleAssetChange = useCallback(value => setAsset(value), [setAsset]);

  useEffect(() => {
    if ((!asset || !assets.find(value => value === asset)) && asset !== 'All') {
      setAsset('All');
    }
  }, [asset, setAsset]);

  useEffect(() => {
    if ((!platform || !platforms.includes(platform)) && platform !== 'All') {
      setPlatform('All');
    }
  }, [platform, setPlatform]);

  const { platformItems, tokenItems } = React.useMemo(
    () => ({
      platformItems: prependAll(
        R.map(p => ({ value: p, name: p }), platforms),
        t
      ),
      tokenItems: prependAll(
        R.map(a => ({ value: a, name: a }), assets),
        t
      ),
    }),
    [t]
  );

  return (
    <div className={classes.container}>
      <FormControlLabel
        className={classes.hideZeroVault}
        control={
          <Checkbox
            checked={filters.hideZeroVaultBalances}
            onChange={() => toggleFilter('hideZeroVaultBalances')}
            color="primary"
          />
        }
        // TODO: translate labels
        label={t('Hide-Zero-Vault-Balances')}
      />
      <FilterSelect
        label={t('Filters-Platform')}
        items={platformItems}
        value={platform}
        onChange={handlePlatformChange}
      />
      <FilterSelect
        label={t('Filters-Asset')}
        items={tokenItems}
        value={asset}
        onChange={handleAssetChange}
      />
    </div>
  );
};

export default memo(Filters);
