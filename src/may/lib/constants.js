import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

// main
// export const addressMap = {
//   uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
//   uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
//   YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
//   YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
//   UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
//   WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
//   LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
//   MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
//   SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
//   COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
//   LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
//   WAYYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
// }

export const contractAddresses = {
  may: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    3: '0x9B71902654185c4BDDfa5A83a5D7539Fe1dD0273',
    256: '0x0DEd4E530c579c073C8208C5d8bbF16eEd5809a3',
    128: '0x0DEd4E530c579c073C8208C5d8bbF16eEd5809a3'
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
    3: '0x201A99D602741E67a8716AA29f07d49019Cb6e8e',
    256: '0x719D9d2C790C32AB7Ed933FFb52dBd165c70122d',
    128: '0x719D9d2C790C32AB7Ed933FFb52dBd165c70122d'
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    3: '0xc778417e063141139fce010982780140aa0cd5ab',
    128: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f'
  },
}

// ropsten 
export const addressMap = {
  uniswapFactory: '0xed7d5f38c79115ca12fe6c0041abb22f0a06c300',
  uniswapFactoryV2: '0xed7d5f38c79115ca12fe6c0041abb22f0a06c300',
  YFI: '0x2492ca10a1957d6a77f107d05e978ea848775774',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5',
  UNIRouter: '0xb0b670fc1F7724119963018DB0BfA86aDb22d941',
  USDT: '0xa71edc38d189767582c38a3145b5873052c3e47a'
  // LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  // MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  // SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  // COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  // LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  // WAYYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852|0x6ee856ae55b6e1a249f04cd3b947141bc146273c
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc|0x362b8441dde173281926b4029e57d3fe856ba3ff
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11|0x0ee2a2afdc327aaf717f3030dcb411eff6f388d4
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c|0xcee657e679dc7a0d3ab69cb36a1abcad54deaed2
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28|0x2492ca10a1957d6a77f107d05e978ea848775774
12 WAY 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  // {
  //   pid: 12,
  //   lpAddresses: {
  //     1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
  //   },
  //   tokenAddresses: {
  //     1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  //   },
  //   name: 'May Party!',
  //   symbol: 'WAY-ETH UNI-V2 LP',
  //   tokenSymbol: 'WAY',
  //   icon: '⛵️',
  // },
  // {
  //   pid: 0,
  //   lpAddresses: {
  //     3: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
  //   },
  //   tokenAddresses: {
  //     3: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  //   },
  //   name: 'Tether Turtle',
  //   symbol: 'USDT-ETH UNI-V2 LP',
  //   tokenSymbol: 'USDT',
  //   icon: '🐢',
  // },
  // {
  //   pid: 3,
  //   lpAddresses: {
  //     3: '0xe10319257F1cc739E7d8145fD1BBF6b0Ed63C33E',
  //   },
  //   tokenAddresses: {
  //     3: '0x9B71902654185c4BDDfa5A83a5D7539Fe1dD0273',
  //   },
  //   name: 'MAY Flower',
  //   symbol: 'MAY-ETH LP',
  //   tokenSymbol: 'MAY',
  //   icon: 'chef1',
  // },
  // {
  //   pid: 2,
  //   lpAddresses: {
  //     3: '0x81CE1D6E8d0318B052D21fc026366289ECd5b788',
  //   },
  //   tokenAddresses: {
  //     3: '0x165FeEC7476a38f5F0CB59927405EB556114ce15',
  //   },
  //   name: 'Tether Lily',
  //   symbol: 'Eth-usdt LP',
  //   tokenSymbol: 'Tether Lily',
  //   icon: 'USDT',
  // },
  {
    pid: 0,
    lpAddresses: {
      3: '0x1c5dee94a34d795f9eeef830b68b80e44868d316',
      256: '0x4198748D5F6AC71A1d1d6011D13BD6cF14BB5F76',
      128: '0x269f99baf591d679cbc0314899065411cac42d0c'
    },
    tokenAddresses: {
      3: '0xad6d458402f60fd3bd25163575031acdce07538d',
      256: '0x5A19b661fbB7583b9aDAaD70DCa9B8463853E931',
      128: '0xa71edc38d189767582c38a3145b5873052c3e47a'
    },
    name: 'USDT Myosotis',
    symbol: 'PPS/USDT LP',
    tokenSymbol: 'USDT Myosotis',
    icon: 'UNI',
  },
  
  {
    pid: 1,
    lpAddresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      3: '0xd22e9ac68de86c11fc776f232f9888a2d91691b9',
      256: '0x026cBA6e6B0dDDcF686293f593B5511141Ad4971',
      128: '0x454ae650352dea405b50de589982209526f12731'
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
      3: '0xd48cb4331d89ad785c7C71E14E2a99E754b42ceB',
      256: '0x714952A1fcdD6461334E27C40c933C914be68c57',
      128: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea'
    },
    name: 'HBTC Gladiolus',
    symbol: 'PPS/HBTC LP',
    tokenSymbol: 'HBTC Gladiolus',
    icon: 'YAMV3',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      3: '0xd22e9ac68de86c11fc776f232f9888a2d91691b9',
      256: '0x026cBA6e6B0dDDcF686293f593B5511141Ad4971',
      128: '0xa0165d7de7f212222184965dd85190843c6ed0b2'
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
      3: '0xd48cb4331d89ad785c7C71E14E2a99E754b42ceB',
      256: '0x714952A1fcdD6461334E27C40c933C914be68c57',
      128: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f'
    },
    name: 'WHT Gladiolus',
    symbol: 'PPS/WHT LP',
    tokenSymbol: 'WHT Gladiolus',
    icon: 'YAMV3',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      3: '0xd22e9ac68de86c11fc776f232f9888a2d91691b9',
      256: '0x026cBA6e6B0dDDcF686293f593B5511141Ad4971',
      128: '0xfac0f98a655a067ab0844966576062604fcbb576'
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
      3: '0xd48cb4331d89ad785c7C71E14E2a99E754b42ceB',
      256: '0x714952A1fcdD6461334E27C40c933C914be68c57',
      128: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd'
    },
    name: 'ETH Gladiolus',
    symbol: 'PPS/ETH LP',
    tokenSymbol: 'ETH Gladiolus',
    icon: 'YAMV3',
  }
]
