import React from 'react';
import Grid from '@material-ui/core/Grid';

import DepositSection from '../PoolDetails/DepositSection/DepositSection';
import WithdrawSection from '../PoolDetails/WithdrawSection/WithdrawSection';
import FeesInfo from '../PoolDetails/FeesInfo/FeesInfo';
import { NetworkRequired } from '../../../../components/NetworkRequired/NetworkRequired';

const PoolActions = ({ pool, balanceSingle, index, sharesBalance }) => {
  return (
    <NetworkRequired inline>
      <Grid container>
        <FeesInfo pool={pool} />
        <DepositSection index={index} pool={pool} balanceSingle={balanceSingle} />
        <WithdrawSection index={index} pool={pool} sharesBalance={sharesBalance} />
      </Grid>
    </NetworkRequired>
  );
};

export default PoolActions;
