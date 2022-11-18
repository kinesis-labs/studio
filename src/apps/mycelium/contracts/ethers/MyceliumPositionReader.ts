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
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface MyceliumPositionReaderInterface extends utils.Interface {
  functions: {
    'BASIS_POINTS_DIVISOR()': FunctionFragment;
    'POSITION_PROPS_LENGTH()': FunctionFragment;
    'PRICE_PRECISION()': FunctionFragment;
    'USDG_DECIMALS()': FunctionFragment;
    'getAmountOut(address,address,address,uint256)': FunctionFragment;
    'getFeeBasisPoints(address,address,address,uint256)': FunctionFragment;
    'getFees(address,address[])': FunctionFragment;
    'getFullVaultTokenInfo(address,address,uint256,address[])': FunctionFragment;
    'getFundingRates(address,address,address[])': FunctionFragment;
    'getMaxAmountIn(address,address,address)': FunctionFragment;
    'getPairInfo(address,address[])': FunctionFragment;
    'getPositions(address,address,address[],address[],bool[])': FunctionFragment;
    'getPrices(address,address[])': FunctionFragment;
    'getStakingInfo(address,address[])': FunctionFragment;
    'getTokenBalances(address,address[])': FunctionFragment;
    'getTokenBalancesWithSupplies(address,address[])': FunctionFragment;
    'getTokenSupply(address,address[])': FunctionFragment;
    'getTotalBalance(address,address[])': FunctionFragment;
    'getTotalStaked(address[])': FunctionFragment;
    'getVaultTokenInfo(address,address,uint256,address[])': FunctionFragment;
    'getVaultTokenInfoV2(address,address,uint256,address[])': FunctionFragment;
    'getVestingInfo(address,address[])': FunctionFragment;
    'gov()': FunctionFragment;
    'hasMaxGlobalShortSizes()': FunctionFragment;
    'setConfig(bool)': FunctionFragment;
    'setGov(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'BASIS_POINTS_DIVISOR'
      | 'POSITION_PROPS_LENGTH'
      | 'PRICE_PRECISION'
      | 'USDG_DECIMALS'
      | 'getAmountOut'
      | 'getFeeBasisPoints'
      | 'getFees'
      | 'getFullVaultTokenInfo'
      | 'getFundingRates'
      | 'getMaxAmountIn'
      | 'getPairInfo'
      | 'getPositions'
      | 'getPrices'
      | 'getStakingInfo'
      | 'getTokenBalances'
      | 'getTokenBalancesWithSupplies'
      | 'getTokenSupply'
      | 'getTotalBalance'
      | 'getTotalStaked'
      | 'getVaultTokenInfo'
      | 'getVaultTokenInfoV2'
      | 'getVestingInfo'
      | 'gov'
      | 'hasMaxGlobalShortSizes'
      | 'setConfig'
      | 'setGov',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'BASIS_POINTS_DIVISOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'POSITION_PROPS_LENGTH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'PRICE_PRECISION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'USDG_DECIMALS', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getAmountOut',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getFeeBasisPoints',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getFees', values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
  encodeFunctionData(
    functionFragment: 'getFullVaultTokenInfo',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getFundingRates',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getMaxAmountIn',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPairInfo',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPositions',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<boolean>[],
    ],
  ): string;
  encodeFunctionData(functionFragment: 'getPrices', values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
  encodeFunctionData(
    functionFragment: 'getStakingInfo',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTokenBalances',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTokenBalancesWithSupplies',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTokenSupply',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTotalBalance',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(functionFragment: 'getTotalStaked', values: [PromiseOrValue<string>[]]): string;
  encodeFunctionData(
    functionFragment: 'getVaultTokenInfo',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getVaultTokenInfoV2',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getVestingInfo',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(functionFragment: 'gov', values?: undefined): string;
  encodeFunctionData(functionFragment: 'hasMaxGlobalShortSizes', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setConfig', values: [PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'setGov', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'BASIS_POINTS_DIVISOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'POSITION_PROPS_LENGTH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'PRICE_PRECISION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'USDG_DECIMALS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAmountOut', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFeeBasisPoints', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFullVaultTokenInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFundingRates', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMaxAmountIn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPairInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPositions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPrices', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStakingInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTokenBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTokenBalancesWithSupplies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTokenSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTotalBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTotalStaked', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVaultTokenInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVaultTokenInfoV2', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVestingInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'gov', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasMaxGlobalShortSizes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setConfig', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setGov', data: BytesLike): Result;

  events: {};
}

export interface MyceliumPositionReader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MyceliumPositionReaderInterface;

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
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAmountOut(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>;

    getFeeBasisPoints(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getFees(
      _vault: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getFullVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getFundingRates(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getMaxAmountIn(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getPairInfo(
      _factory: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getPositions(
      _vault: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _collateralTokens: PromiseOrValue<string>[],
      _indexTokens: PromiseOrValue<string>[],
      _isLong: PromiseOrValue<boolean>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getPrices(
      _priceFeed: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getStakingInfo(
      _account: PromiseOrValue<string>,
      _yieldTrackers: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getTokenBalances(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getTokenBalancesWithSupplies(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getTokenSupply(
      _token: PromiseOrValue<string>,
      _excludedAccounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getTotalBalance(
      _token: PromiseOrValue<string>,
      _accounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getTotalStaked(_yieldTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getVaultTokenInfoV2(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    getVestingInfo(
      _account: PromiseOrValue<string>,
      _vesters: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<[boolean]>;

    setConfig(
      _hasMaxGlobalShortSizes: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  getAmountOut(
    _vault: PromiseOrValue<string>,
    _tokenIn: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    _amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber]>;

  getFeeBasisPoints(
    _vault: PromiseOrValue<string>,
    _tokenIn: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    _amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  getFees(
    _vault: PromiseOrValue<string>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getFullVaultTokenInfo(
    _vault: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _usdgAmount: PromiseOrValue<BigNumberish>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getFundingRates(
    _vault: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getMaxAmountIn(
    _vault: PromiseOrValue<string>,
    _tokenIn: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getPairInfo(
    _factory: PromiseOrValue<string>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getPositions(
    _vault: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _collateralTokens: PromiseOrValue<string>[],
    _indexTokens: PromiseOrValue<string>[],
    _isLong: PromiseOrValue<boolean>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getPrices(
    _priceFeed: PromiseOrValue<string>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getStakingInfo(
    _account: PromiseOrValue<string>,
    _yieldTrackers: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getTokenBalances(
    _account: PromiseOrValue<string>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getTokenBalancesWithSupplies(
    _account: PromiseOrValue<string>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getTokenSupply(
    _token: PromiseOrValue<string>,
    _excludedAccounts: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getTotalBalance(
    _token: PromiseOrValue<string>,
    _accounts: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getTotalStaked(_yieldTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;

  getVaultTokenInfo(
    _vault: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _usdgAmount: PromiseOrValue<BigNumberish>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getVaultTokenInfoV2(
    _vault: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _usdgAmount: PromiseOrValue<BigNumberish>,
    _tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getVestingInfo(
    _account: PromiseOrValue<string>,
    _vesters: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  gov(overrides?: CallOverrides): Promise<string>;

  hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<boolean>;

  setConfig(
    _hasMaxGlobalShortSizes: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>;

    getFeeBasisPoints(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getFees(
      _vault: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getFullVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getFundingRates(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getMaxAmountIn(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPairInfo(
      _factory: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getPositions(
      _vault: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _collateralTokens: PromiseOrValue<string>[],
      _indexTokens: PromiseOrValue<string>[],
      _isLong: PromiseOrValue<boolean>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getPrices(
      _priceFeed: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getStakingInfo(
      _account: PromiseOrValue<string>,
      _yieldTrackers: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getTokenBalances(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getTokenBalancesWithSupplies(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getTokenSupply(
      _token: PromiseOrValue<string>,
      _excludedAccounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTotalBalance(
      _token: PromiseOrValue<string>,
      _accounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTotalStaked(_yieldTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;

    getVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getVaultTokenInfoV2(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getVestingInfo(
      _account: PromiseOrValue<string>,
      _vesters: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    gov(overrides?: CallOverrides): Promise<string>;

    hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<boolean>;

    setConfig(_hasMaxGlobalShortSizes: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getFeeBasisPoints(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getFees(
      _vault: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getFullVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getFundingRates(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getMaxAmountIn(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPairInfo(
      _factory: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPositions(
      _vault: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _collateralTokens: PromiseOrValue<string>[],
      _indexTokens: PromiseOrValue<string>[],
      _isLong: PromiseOrValue<boolean>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPrices(
      _priceFeed: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getStakingInfo(
      _account: PromiseOrValue<string>,
      _yieldTrackers: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenBalances(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenBalancesWithSupplies(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenSupply(
      _token: PromiseOrValue<string>,
      _excludedAccounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTotalBalance(
      _token: PromiseOrValue<string>,
      _accounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTotalStaked(_yieldTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;

    getVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getVaultTokenInfoV2(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getVestingInfo(
      _account: PromiseOrValue<string>,
      _vesters: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<BigNumber>;

    setConfig(
      _hasMaxGlobalShortSizes: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountOut(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getFeeBasisPoints(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getFees(
      _vault: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getFullVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getFundingRates(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getMaxAmountIn(
      _vault: PromiseOrValue<string>,
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPairInfo(
      _factory: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPositions(
      _vault: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _collateralTokens: PromiseOrValue<string>[],
      _indexTokens: PromiseOrValue<string>[],
      _isLong: PromiseOrValue<boolean>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPrices(
      _priceFeed: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getStakingInfo(
      _account: PromiseOrValue<string>,
      _yieldTrackers: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTokenBalances(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTokenBalancesWithSupplies(
      _account: PromiseOrValue<string>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTokenSupply(
      _token: PromiseOrValue<string>,
      _excludedAccounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTotalBalance(
      _token: PromiseOrValue<string>,
      _accounts: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTotalStaked(_yieldTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVaultTokenInfo(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getVaultTokenInfoV2(
      _vault: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _usdgAmount: PromiseOrValue<BigNumberish>,
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getVestingInfo(
      _account: PromiseOrValue<string>,
      _vesters: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setConfig(
      _hasMaxGlobalShortSizes: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
