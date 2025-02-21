import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { PendleContractFactory } from './contracts';
import { EthereumPendleFarmContractPositionFetcher } from './ethereum/pendle.farm.contract-position-fetcher';
import { EthereumPendleOwnershipTokenFetcher } from './ethereum/pendle.ownership.token-fetcher';
import { EthereumPendleYieldTokenFetcher } from './ethereum/pendle.yield.token-fetcher';
import { PendleAppDefinition, PENDLE_DEFINITION } from './pendle.definition';

@Register.AppModule({
  appId: PENDLE_DEFINITION.id,
  providers: [
    PendleAppDefinition,
    PendleContractFactory,
    EthereumPendleYieldTokenFetcher,
    EthereumPendleOwnershipTokenFetcher,
    EthereumPendleFarmContractPositionFetcher,
  ],
})
export class PendleAppModule extends AbstractApp() {}
