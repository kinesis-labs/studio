/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface KyberSwapClassicMasterchefInterface extends utils.Interface {
  functions: {
    'addPool(address,uint32,uint32,uint256[])': FunctionFragment;
    'admin()': FunctionFragment;
    'adminWithdraw(uint256,uint256)': FunctionFragment;
    'claimAdmin()': FunctionFragment;
    'deposit(uint256,uint256,bool)': FunctionFragment;
    'emergencyWithdraw(uint256)': FunctionFragment;
    'getPoolInfo(uint256)': FunctionFragment;
    'getRewardTokens()': FunctionFragment;
    'getUserInfo(uint256,address)': FunctionFragment;
    'harvest(uint256)': FunctionFragment;
    'harvestMultiplePools(uint256[])': FunctionFragment;
    'pendingAdmin()': FunctionFragment;
    'pendingRewards(uint256,address)': FunctionFragment;
    'poolExists(address)': FunctionFragment;
    'poolLength()': FunctionFragment;
    'renewPool(uint256,uint32,uint32,uint256[])': FunctionFragment;
    'rewardLocker()': FunctionFragment;
    'rewardTokens(uint256)': FunctionFragment;
    'transferAdmin(address)': FunctionFragment;
    'transferAdminQuickly(address)': FunctionFragment;
    'updatePool(uint256,uint32,uint256[])': FunctionFragment;
    'updatePoolRewards(uint256)': FunctionFragment;
    'withdraw(uint256,uint256)': FunctionFragment;
    'withdrawAll(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addPool'
      | 'admin'
      | 'adminWithdraw'
      | 'claimAdmin'
      | 'deposit'
      | 'emergencyWithdraw'
      | 'getPoolInfo'
      | 'getRewardTokens'
      | 'getUserInfo'
      | 'harvest'
      | 'harvestMultiplePools'
      | 'pendingAdmin'
      | 'pendingRewards'
      | 'poolExists'
      | 'poolLength'
      | 'renewPool'
      | 'rewardLocker'
      | 'rewardTokens'
      | 'transferAdmin'
      | 'transferAdminQuickly'
      | 'updatePool'
      | 'updatePoolRewards'
      | 'withdraw'
      | 'withdrawAll',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addPool',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
    ],
  ): string;
  encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'adminWithdraw',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'claimAdmin', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getPoolInfo', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getRewardTokens', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getUserInfo',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'harvest', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'harvestMultiplePools', values: [PromiseOrValue<BigNumberish>[]]): string;
  encodeFunctionData(functionFragment: 'pendingAdmin', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pendingRewards',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'poolExists', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renewPool',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
    ],
  ): string;
  encodeFunctionData(functionFragment: 'rewardLocker', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardTokens', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'transferAdmin', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'transferAdminQuickly', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'updatePool',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(functionFragment: 'updatePoolRewards', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'withdrawAll', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'addPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'adminWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRewardTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvestMultiplePools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolExists', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renewPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardLocker', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferAdminQuickly', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePoolRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAll', data: BytesLike): Result;

  events: {
    'AddNewPool(address,uint32,uint32,uint256[])': EventFragment;
    'AdminClaimed(address,address)': EventFragment;
    'Deposit(address,uint256,uint256,uint256)': EventFragment;
    'EmergencyWithdraw(address,uint256,uint256,uint256)': EventFragment;
    'Harvest(address,uint256,address,uint256,uint256)': EventFragment;
    'RenewPool(uint256,uint32,uint32,uint256[])': EventFragment;
    'TransferAdminPending(address)': EventFragment;
    'UpdatePool(uint256,uint32,uint256[])': EventFragment;
    'Withdraw(address,uint256,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddNewPool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AdminClaimed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RenewPool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferAdminPending'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdatePool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface AddNewPoolEventObject {
  stakeToken: string;
  startBlock: number;
  endBlock: number;
  rewardPerBlocks: BigNumber[];
}
export type AddNewPoolEvent = TypedEvent<[string, number, number, BigNumber[]], AddNewPoolEventObject>;

export type AddNewPoolEventFilter = TypedEventFilter<AddNewPoolEvent>;

export interface AdminClaimedEventObject {
  newAdmin: string;
  previousAdmin: string;
}
export type AdminClaimedEvent = TypedEvent<[string, string], AdminClaimedEventObject>;

export type AdminClaimedEventFilter = TypedEventFilter<AdminClaimedEvent>;

export interface DepositEventObject {
  user: string;
  pid: BigNumber;
  blockNumber: BigNumber;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  pid: BigNumber;
  blockNumber: BigNumber;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  EmergencyWithdrawEventObject
>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface HarvestEventObject {
  user: string;
  pid: BigNumber;
  rewardToken: string;
  lockedAmount: BigNumber;
  blockNumber: BigNumber;
}
export type HarvestEvent = TypedEvent<[string, BigNumber, string, BigNumber, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface RenewPoolEventObject {
  pid: BigNumber;
  startBlock: number;
  endBlock: number;
  rewardPerBlocks: BigNumber[];
}
export type RenewPoolEvent = TypedEvent<[BigNumber, number, number, BigNumber[]], RenewPoolEventObject>;

export type RenewPoolEventFilter = TypedEventFilter<RenewPoolEvent>;

export interface TransferAdminPendingEventObject {
  pendingAdmin: string;
}
export type TransferAdminPendingEvent = TypedEvent<[string], TransferAdminPendingEventObject>;

export type TransferAdminPendingEventFilter = TypedEventFilter<TransferAdminPendingEvent>;

export interface UpdatePoolEventObject {
  pid: BigNumber;
  endBlock: number;
  rewardPerBlocks: BigNumber[];
}
export type UpdatePoolEvent = TypedEvent<[BigNumber, number, BigNumber[]], UpdatePoolEventObject>;

export type UpdatePoolEventFilter = TypedEventFilter<UpdatePoolEvent>;

export interface WithdrawEventObject {
  user: string;
  pid: BigNumber;
  blockNumber: BigNumber;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface KyberSwapClassicMasterchef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KyberSwapClassicMasterchefInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addPool(
      _stakeToken: PromiseOrValue<string>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    adminWithdraw(
      rewardTokenIndex: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimAdmin(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _shouldHarvest: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolInfo(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string, number, number, number, BigNumber[], BigNumber[]] & {
        totalStake: BigNumber;
        stakeToken: string;
        startBlock: number;
        endBlock: number;
        lastRewardBlock: number;
        rewardPerBlocks: BigNumber[];
        accRewardPerShares: BigNumber[];
      }
    >;

    getRewardTokens(overrides?: CallOverrides): Promise<[string[]]>;

    getUserInfo(
      _pid: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber[], BigNumber[]] & {
        amount: BigNumber;
        unclaimedRewards: BigNumber[];
        lastRewardPerShares: BigNumber[];
      }
    >;

    harvest(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    harvestMultiplePools(
      _pids: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { rewards: BigNumber[] }>;

    poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renewPool(
      _pid: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rewardLocker(overrides?: CallOverrides): Promise<[string]>;

    rewardTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    transferAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferAdminQuickly(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePoolRewards(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdrawAll(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  addPool(
    _stakeToken: PromiseOrValue<string>,
    _startBlock: PromiseOrValue<BigNumberish>,
    _endBlock: PromiseOrValue<BigNumberish>,
    _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  adminWithdraw(
    rewardTokenIndex: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimAdmin(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  deposit(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    _shouldHarvest: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolInfo(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, string, number, number, number, BigNumber[], BigNumber[]] & {
      totalStake: BigNumber;
      stakeToken: string;
      startBlock: number;
      endBlock: number;
      lastRewardBlock: number;
      rewardPerBlocks: BigNumber[];
      accRewardPerShares: BigNumber[];
    }
  >;

  getRewardTokens(overrides?: CallOverrides): Promise<string[]>;

  getUserInfo(
    _pid: PromiseOrValue<BigNumberish>,
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber[], BigNumber[]] & {
      amount: BigNumber;
      unclaimedRewards: BigNumber[];
      lastRewardPerShares: BigNumber[];
    }
  >;

  harvest(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  harvestMultiplePools(
    _pids: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingRewards(
    _pid: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renewPool(
    _pid: PromiseOrValue<BigNumberish>,
    _startBlock: PromiseOrValue<BigNumberish>,
    _endBlock: PromiseOrValue<BigNumberish>,
    _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rewardLocker(overrides?: CallOverrides): Promise<string>;

  rewardTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  transferAdmin(
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferAdminQuickly(
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: PromiseOrValue<BigNumberish>,
    _endBlock: PromiseOrValue<BigNumberish>,
    _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePoolRewards(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdraw(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdrawAll(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addPool(
      _stakeToken: PromiseOrValue<string>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    adminWithdraw(
      rewardTokenIndex: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    claimAdmin(overrides?: CallOverrides): Promise<void>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _shouldHarvest: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    getPoolInfo(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string, number, number, number, BigNumber[], BigNumber[]] & {
        totalStake: BigNumber;
        stakeToken: string;
        startBlock: number;
        endBlock: number;
        lastRewardBlock: number;
        rewardPerBlocks: BigNumber[];
        accRewardPerShares: BigNumber[];
      }
    >;

    getRewardTokens(overrides?: CallOverrides): Promise<string[]>;

    getUserInfo(
      _pid: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber[], BigNumber[]] & {
        amount: BigNumber;
        unclaimedRewards: BigNumber[];
        lastRewardPerShares: BigNumber[];
      }
    >;

    harvest(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    harvestMultiplePools(_pids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renewPool(
      _pid: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    rewardLocker(overrides?: CallOverrides): Promise<string>;

    rewardTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    transferAdmin(newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    transferAdminQuickly(newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    updatePoolRewards(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    withdrawAll(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AddNewPool(address,uint32,uint32,uint256[])'(
      stakeToken?: PromiseOrValue<string> | null,
      startBlock?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      rewardPerBlocks?: null,
    ): AddNewPoolEventFilter;
    AddNewPool(
      stakeToken?: PromiseOrValue<string> | null,
      startBlock?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      rewardPerBlocks?: null,
    ): AddNewPoolEventFilter;

    'AdminClaimed(address,address)'(newAdmin?: null, previousAdmin?: null): AdminClaimedEventFilter;
    AdminClaimed(newAdmin?: null, previousAdmin?: null): AdminClaimedEventFilter;

    'Deposit(address,uint256,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): DepositEventFilter;
    Deposit(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): DepositEventFilter;

    'EmergencyWithdraw(address,uint256,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;

    'Harvest(address,uint256,address,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      rewardToken?: PromiseOrValue<string> | null,
      lockedAmount?: null,
      blockNumber?: null,
    ): HarvestEventFilter;
    Harvest(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      rewardToken?: PromiseOrValue<string> | null,
      lockedAmount?: null,
      blockNumber?: null,
    ): HarvestEventFilter;

    'RenewPool(uint256,uint32,uint32,uint256[])'(
      pid?: PromiseOrValue<BigNumberish> | null,
      startBlock?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      rewardPerBlocks?: null,
    ): RenewPoolEventFilter;
    RenewPool(
      pid?: PromiseOrValue<BigNumberish> | null,
      startBlock?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      rewardPerBlocks?: null,
    ): RenewPoolEventFilter;

    'TransferAdminPending(address)'(pendingAdmin?: null): TransferAdminPendingEventFilter;
    TransferAdminPending(pendingAdmin?: null): TransferAdminPendingEventFilter;

    'UpdatePool(uint256,uint32,uint256[])'(
      pid?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      rewardPerBlocks?: null,
    ): UpdatePoolEventFilter;
    UpdatePool(
      pid?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      rewardPerBlocks?: null,
    ): UpdatePoolEventFilter;

    'Withdraw(address,uint256,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): WithdrawEventFilter;
  };

  estimateGas: {
    addPool(
      _stakeToken: PromiseOrValue<string>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    adminWithdraw(
      rewardTokenIndex: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimAdmin(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _shouldHarvest: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolInfo(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getRewardTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getUserInfo(
      _pid: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    harvest(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    harvestMultiplePools(
      _pids: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renewPool(
      _pid: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rewardLocker(overrides?: CallOverrides): Promise<BigNumber>;

    rewardTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    transferAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferAdminQuickly(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePoolRewards(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdrawAll(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPool(
      _stakeToken: PromiseOrValue<string>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminWithdraw(
      rewardTokenIndex: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimAdmin(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _shouldHarvest: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolInfo(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewardTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserInfo(
      _pid: PromiseOrValue<BigNumberish>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    harvest(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    harvestMultiplePools(
      _pids: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingRewards(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renewPool(
      _pid: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rewardLocker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferAdminQuickly(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      _rewardPerBlocks: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePoolRewards(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
