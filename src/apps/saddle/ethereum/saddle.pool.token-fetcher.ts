import { Inject } from '@nestjs/common';
import { BigNumber } from 'ethers';

import { Register } from '~app-toolkit/decorators';
import {
  CurvePoolOnChainCoinStrategy,
  CurvePoolOnChainReserveStrategy,
  CurvePoolTokenHelper,
  CurvePoolVirtualPriceStrategy,
} from '~apps/curve';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { SaddleContractFactory, SaddleSwap } from '../contracts';
import { SADDLE_DEFINITION } from '../saddle.definition';

import { SADDLE_POOL_DEFINITIONS } from './saddle.pool.definitions';

@Register.TokenPositionFetcher({
  appId: SADDLE_DEFINITION.id,
  groupId: SADDLE_DEFINITION.groups.pool.id,
  network: Network.ETHEREUM_MAINNET,
})
export class EthereumSaddlePoolTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(CurvePoolTokenHelper)
    private readonly curvePoolTokenHelper: CurvePoolTokenHelper,
    @Inject(CurvePoolOnChainCoinStrategy)
    private readonly curvePoolOnChainCoinStrategy: CurvePoolOnChainCoinStrategy,
    @Inject(CurvePoolOnChainReserveStrategy)
    private readonly curvePoolOnChainReserveStrategy: CurvePoolOnChainReserveStrategy,
    @Inject(CurvePoolVirtualPriceStrategy)
    private readonly curvePoolVirtualPriceStrategy: CurvePoolVirtualPriceStrategy,
    @Inject(SaddleContractFactory)
    private readonly saddleContractFactory: SaddleContractFactory,
  ) {}

  async getPositions() {
    return this.curvePoolTokenHelper.getTokens<SaddleSwap>({
      network: Network.ETHEREUM_MAINNET,
      appId: SADDLE_DEFINITION.id,
      groupId: SADDLE_DEFINITION.groups.pool.id,
      poolDefinitions: SADDLE_POOL_DEFINITIONS,
      resolvePoolContract: ({ network, address }) => this.saddleContractFactory.saddleSwap({ network, address }),
      resolvePoolCoinAddresses: this.curvePoolOnChainCoinStrategy.build({
        resolveCoinAddress: ({ multicall, poolContract, index }) => multicall.wrap(poolContract).getToken(index),
      }),
      resolvePoolReserves: this.curvePoolOnChainReserveStrategy.build({
        resolveReserve: ({ multicall, poolContract, index }) => multicall.wrap(poolContract).getTokenBalance(index),
      }),
      resolvePoolTokenPrice: this.curvePoolVirtualPriceStrategy.build({
        resolveVirtualPrice: ({ multicall, poolContract }) => multicall.wrap(poolContract).getVirtualPrice(),
      }),
      resolvePoolFee: async () => BigNumber.from('4000000'),
    });
  }
}
