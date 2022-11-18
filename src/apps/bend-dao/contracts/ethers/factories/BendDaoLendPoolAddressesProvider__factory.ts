/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  BendDaoLendPoolAddressesProvider,
  BendDaoLendPoolAddressesProviderInterface,
} from '../BendDaoLendPoolAddressesProvider';

const _abi = [
  {
    inputs: [],
    name: 'getBendDataProvider',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getIncentivesController',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLendPool',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class BendDaoLendPoolAddressesProvider__factory {
  static readonly abi = _abi;
  static createInterface(): BendDaoLendPoolAddressesProviderInterface {
    return new utils.Interface(_abi) as BendDaoLendPoolAddressesProviderInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BendDaoLendPoolAddressesProvider {
    return new Contract(address, _abi, signerOrProvider) as BendDaoLendPoolAddressesProvider;
  }
}
