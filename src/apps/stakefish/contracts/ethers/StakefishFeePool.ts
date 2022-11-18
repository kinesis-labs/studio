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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace IStakefishTransactionFeePool {
  export type ComputationCacheStruct = {
    lastCacheUpdateTime: BigNumberish;
    totalValidatorUptime: BigNumberish;
    totalUncollectedCommission: BigNumberish;
    totalUncollectedUserBalance: BigNumberish;
    totalUnsentUserRewards: BigNumberish;
  };

  export type ComputationCacheStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    lastCacheUpdateTime: BigNumber;
    totalValidatorUptime: BigNumber;
    totalUncollectedCommission: BigNumber;
    totalUncollectedUserBalance: BigNumber;
    totalUnsentUserRewards: BigNumber;
  };
}

export interface StakefishFeePoolInterface extends utils.Interface {
  functions: {
    'bulkJoinPool(bytes,address[],uint256)': FunctionFragment;
    'bulkPartPool(bytes,uint256)': FunctionFragment;
    'changeOperator(address)': FunctionFragment;
    'closePoolForWithdrawal()': FunctionFragment;
    'collectPoolCommission(address,uint256)': FunctionFragment;
    'collectReward(address,uint256)': FunctionFragment;
    'emergencyWithdraw(address[],address[],uint256)': FunctionFragment;
    'getPoolState()': FunctionFragment;
    'initialize(address,address,address)': FunctionFragment;
    'joinPool(bytes,address,uint256)': FunctionFragment;
    'openPoolForWithdrawal()': FunctionFragment;
    'partPool(bytes,uint256)': FunctionFragment;
    'pendingReward(address)': FunctionFragment;
    'proxiableUUID()': FunctionFragment;
    'setCommissionRate(uint256)': FunctionFragment;
    'stakefishCommissionRateBasisPoints()': FunctionFragment;
    'totalValidators()': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'upgradeToAndCall(address,bytes)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'bulkJoinPool'
      | 'bulkPartPool'
      | 'changeOperator'
      | 'closePoolForWithdrawal'
      | 'collectPoolCommission'
      | 'collectReward'
      | 'emergencyWithdraw'
      | 'getPoolState'
      | 'initialize'
      | 'joinPool'
      | 'openPoolForWithdrawal'
      | 'partPool'
      | 'pendingReward'
      | 'proxiableUUID'
      | 'setCommissionRate'
      | 'stakefishCommissionRateBasisPoints'
      | 'totalValidators'
      | 'upgradeTo'
      | 'upgradeToAndCall',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'bulkJoinPool', values: [BytesLike, string[], BigNumberish]): string;
  encodeFunctionData(functionFragment: 'bulkPartPool', values: [BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
  encodeFunctionData(functionFragment: 'closePoolForWithdrawal', values?: undefined): string;
  encodeFunctionData(functionFragment: 'collectPoolCommission', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'collectReward', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values: [string[], string[], BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getPoolState', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, string, string]): string;
  encodeFunctionData(functionFragment: 'joinPool', values: [BytesLike, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'openPoolForWithdrawal', values?: undefined): string;
  encodeFunctionData(functionFragment: 'partPool', values: [BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'pendingReward', values: [string]): string;
  encodeFunctionData(functionFragment: 'proxiableUUID', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setCommissionRate', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'stakefishCommissionRateBasisPoints', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalValidators', values?: undefined): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgradeToAndCall', values: [string, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'bulkJoinPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bulkPartPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'closePoolForWithdrawal', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collectPoolCommission', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collectReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolState', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'joinPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'openPoolForWithdrawal', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'partPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxiableUUID', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setCommissionRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakefishCommissionRateBasisPoints', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalValidators', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeToAndCall', data: BytesLike): Result;

  events: {
    'AdminChanged(address,address)': EventFragment;
    'BeaconUpgraded(address)': EventFragment;
    'CommissionRateChanged(uint256)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'OperatorChanged(address)': EventFragment;
    'Upgraded(address)': EventFragment;
    'ValidatorBulkJoined(bytes,address[],uint256)': EventFragment;
    'ValidatorBulkParted(bytes,address[],uint256)': EventFragment;
    'ValidatorJoined(bytes,address,uint256)': EventFragment;
    'ValidatorParted(bytes,address,uint256)': EventFragment;
    'ValidatorRewardCollected(address,address,uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommissionRateChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OperatorChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ValidatorBulkJoined'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ValidatorBulkParted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ValidatorJoined'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ValidatorParted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ValidatorRewardCollected'): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[string, string], AdminChangedEventObject>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[string], BeaconUpgradedEventObject>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface CommissionRateChangedEventObject {
  newRate: BigNumber;
}
export type CommissionRateChangedEvent = TypedEvent<[BigNumber], CommissionRateChangedEventObject>;

export type CommissionRateChangedEventFilter = TypedEventFilter<CommissionRateChangedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OperatorChangedEventObject {
  newOperator: string;
}
export type OperatorChangedEvent = TypedEvent<[string], OperatorChangedEventObject>;

export type OperatorChangedEventFilter = TypedEventFilter<OperatorChangedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface ValidatorBulkJoinedEventObject {
  validatorPubkeyArray: string;
  depositorAddress: string[];
  time: BigNumber;
}
export type ValidatorBulkJoinedEvent = TypedEvent<[string, string[], BigNumber], ValidatorBulkJoinedEventObject>;

export type ValidatorBulkJoinedEventFilter = TypedEventFilter<ValidatorBulkJoinedEvent>;

export interface ValidatorBulkPartedEventObject {
  validatorPubkeyArray: string;
  depositorAddress: string[];
  time: BigNumber;
}
export type ValidatorBulkPartedEvent = TypedEvent<[string, string[], BigNumber], ValidatorBulkPartedEventObject>;

export type ValidatorBulkPartedEventFilter = TypedEventFilter<ValidatorBulkPartedEvent>;

export interface ValidatorJoinedEventObject {
  validatorPubkey: string;
  depositorAddress: string;
  ts: BigNumber;
}
export type ValidatorJoinedEvent = TypedEvent<[string, string, BigNumber], ValidatorJoinedEventObject>;

export type ValidatorJoinedEventFilter = TypedEventFilter<ValidatorJoinedEvent>;

export interface ValidatorPartedEventObject {
  validatorPubkey: string;
  depositorAddress: string;
  ts: BigNumber;
}
export type ValidatorPartedEvent = TypedEvent<[string, string, BigNumber], ValidatorPartedEventObject>;

export type ValidatorPartedEventFilter = TypedEventFilter<ValidatorPartedEvent>;

export interface ValidatorRewardCollectedEventObject {
  depositorAddress: string;
  beneficiary: string;
  rewardAmount: BigNumber;
  requester: string;
}
export type ValidatorRewardCollectedEvent = TypedEvent<
  [string, string, BigNumber, string],
  ValidatorRewardCollectedEventObject
>;

export type ValidatorRewardCollectedEventFilter = TypedEventFilter<ValidatorRewardCollectedEvent>;

export interface StakefishFeePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakefishFeePoolInterface;

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
    bulkJoinPool(
      validatorPubkeyArray: BytesLike,
      depositorAddresses: string[],
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    bulkPartPool(
      validatorPubkeyArray: BytesLike,
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeOperator(
      newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    closePoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    collectPoolCommission(
      beneficiary: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    collectReward(
      beneficiary: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      depositorAddresses: string[],
      beneficiaries: string[],
      maxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getPoolState(overrides?: CallOverrides): Promise<[IStakefishTransactionFeePool.ComputationCacheStructOutput]>;

    initialize(
      operatorAddress_: string,
      adminAddress_: string,
      devAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    joinPool(
      validatorPubKey: BytesLike,
      depositor: string,
      joinTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    openPoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    partPool(
      validatorPubKey: BytesLike,
      leaveTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    pendingReward(depositorAddress: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    setCommissionRate(
      commissionRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    stakefishCommissionRateBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalValidators(overrides?: CallOverrides): Promise<[BigNumber]>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  bulkJoinPool(
    validatorPubkeyArray: BytesLike,
    depositorAddresses: string[],
    ts: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  bulkPartPool(
    validatorPubkeyArray: BytesLike,
    ts: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeOperator(
    newOperator: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  closePoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  collectPoolCommission(
    beneficiary: string,
    amountRequested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  collectReward(
    beneficiary: string,
    amountRequested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    depositorAddresses: string[],
    beneficiaries: string[],
    maxAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getPoolState(overrides?: CallOverrides): Promise<IStakefishTransactionFeePool.ComputationCacheStructOutput>;

  initialize(
    operatorAddress_: string,
    adminAddress_: string,
    devAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  joinPool(
    validatorPubKey: BytesLike,
    depositor: string,
    joinTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  openPoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  partPool(
    validatorPubKey: BytesLike,
    leaveTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  pendingReward(depositorAddress: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  setCommissionRate(
    commissionRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  stakefishCommissionRateBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  totalValidators(overrides?: CallOverrides): Promise<BigNumber>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    bulkJoinPool(
      validatorPubkeyArray: BytesLike,
      depositorAddresses: string[],
      ts: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    bulkPartPool(validatorPubkeyArray: BytesLike, ts: BigNumberish, overrides?: CallOverrides): Promise<void>;

    changeOperator(newOperator: string, overrides?: CallOverrides): Promise<void>;

    closePoolForWithdrawal(overrides?: CallOverrides): Promise<void>;

    collectPoolCommission(beneficiary: string, amountRequested: BigNumberish, overrides?: CallOverrides): Promise<void>;

    collectReward(beneficiary: string, amountRequested: BigNumberish, overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(
      depositorAddresses: string[],
      beneficiaries: string[],
      maxAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    getPoolState(overrides?: CallOverrides): Promise<IStakefishTransactionFeePool.ComputationCacheStructOutput>;

    initialize(
      operatorAddress_: string,
      adminAddress_: string,
      devAddress_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    joinPool(
      validatorPubKey: BytesLike,
      depositor: string,
      joinTime: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    openPoolForWithdrawal(overrides?: CallOverrides): Promise<void>;

    partPool(validatorPubKey: BytesLike, leaveTime: BigNumberish, overrides?: CallOverrides): Promise<void>;

    pendingReward(depositorAddress: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    setCommissionRate(commissionRate: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakefishCommissionRateBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalValidators(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
    AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;

    'BeaconUpgraded(address)'(beacon?: string | null): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    'CommissionRateChanged(uint256)'(newRate?: null): CommissionRateChangedEventFilter;
    CommissionRateChanged(newRate?: null): CommissionRateChangedEventFilter;

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'OperatorChanged(address)'(newOperator?: null): OperatorChangedEventFilter;
    OperatorChanged(newOperator?: null): OperatorChangedEventFilter;

    'Upgraded(address)'(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;

    'ValidatorBulkJoined(bytes,address[],uint256)'(
      validatorPubkeyArray?: null,
      depositorAddress?: null,
      time?: null,
    ): ValidatorBulkJoinedEventFilter;
    ValidatorBulkJoined(
      validatorPubkeyArray?: null,
      depositorAddress?: null,
      time?: null,
    ): ValidatorBulkJoinedEventFilter;

    'ValidatorBulkParted(bytes,address[],uint256)'(
      validatorPubkeyArray?: null,
      depositorAddress?: null,
      time?: null,
    ): ValidatorBulkPartedEventFilter;
    ValidatorBulkParted(
      validatorPubkeyArray?: null,
      depositorAddress?: null,
      time?: null,
    ): ValidatorBulkPartedEventFilter;

    'ValidatorJoined(bytes,address,uint256)'(
      validatorPubkey?: BytesLike | null,
      depositorAddress?: string | null,
      ts?: null,
    ): ValidatorJoinedEventFilter;
    ValidatorJoined(
      validatorPubkey?: BytesLike | null,
      depositorAddress?: string | null,
      ts?: null,
    ): ValidatorJoinedEventFilter;

    'ValidatorParted(bytes,address,uint256)'(
      validatorPubkey?: BytesLike | null,
      depositorAddress?: string | null,
      ts?: null,
    ): ValidatorPartedEventFilter;
    ValidatorParted(
      validatorPubkey?: BytesLike | null,
      depositorAddress?: string | null,
      ts?: null,
    ): ValidatorPartedEventFilter;

    'ValidatorRewardCollected(address,address,uint256,address)'(
      depositorAddress?: string | null,
      beneficiary?: null,
      rewardAmount?: null,
      requester?: null,
    ): ValidatorRewardCollectedEventFilter;
    ValidatorRewardCollected(
      depositorAddress?: string | null,
      beneficiary?: null,
      rewardAmount?: null,
      requester?: null,
    ): ValidatorRewardCollectedEventFilter;
  };

  estimateGas: {
    bulkJoinPool(
      validatorPubkeyArray: BytesLike,
      depositorAddresses: string[],
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    bulkPartPool(
      validatorPubkeyArray: BytesLike,
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeOperator(
      newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    closePoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    collectPoolCommission(
      beneficiary: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    collectReward(
      beneficiary: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    emergencyWithdraw(
      depositorAddresses: string[],
      beneficiaries: string[],
      maxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getPoolState(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      operatorAddress_: string,
      adminAddress_: string,
      devAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    joinPool(
      validatorPubKey: BytesLike,
      depositor: string,
      joinTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    openPoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    partPool(
      validatorPubKey: BytesLike,
      leaveTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    pendingReward(depositorAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    setCommissionRate(
      commissionRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    stakefishCommissionRateBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalValidators(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bulkJoinPool(
      validatorPubkeyArray: BytesLike,
      depositorAddresses: string[],
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    bulkPartPool(
      validatorPubkeyArray: BytesLike,
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeOperator(
      newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    closePoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    collectPoolCommission(
      beneficiary: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    collectReward(
      beneficiary: string,
      amountRequested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      depositorAddresses: string[],
      beneficiaries: string[],
      maxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getPoolState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      operatorAddress_: string,
      adminAddress_: string,
      devAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    joinPool(
      validatorPubKey: BytesLike,
      depositor: string,
      joinTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    openPoolForWithdrawal(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    partPool(
      validatorPubKey: BytesLike,
      leaveTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    pendingReward(depositorAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCommissionRate(
      commissionRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stakefishCommissionRateBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalValidators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
