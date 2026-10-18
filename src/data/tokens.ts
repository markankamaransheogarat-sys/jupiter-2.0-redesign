export interface Token {
  symbol: string;
  name: string;
  mint: string;
  decimals: number;
  priceUsd: number;
  change24h: number;
  icon: string;
  balance: number;
}

export const TOKENS: Token[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    mint: 'So11111111111111111111111111111111111111112',
    decimals: 9,
    priceUsd: 182.45,
    change24h: 3.82,
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    balance: 24.5
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    decimals: 6,
    priceUsd: 1.00,
    change24h: 0.01,
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    balance: 4250.00
  },
  {
    symbol: 'JUP',
    name: 'Jupiter',
    mint: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    decimals: 6,
    priceUsd: 1.18,
    change24h: 7.45,
    icon: 'https://static.jup.ag/tokens/gen/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN.png',
    balance: 1500.00
  },
  {
    symbol: 'BONK',
    name: 'Bonk',
    mint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    decimals: 5,
    priceUsd: 0.0000214,
    change24h: -1.25,
    icon: 'https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cDc7I',
    balance: 45000000
  },
  {
    symbol: 'WIF',
    name: 'dogwifhat',
    mint: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
    decimals: 6,
    priceUsd: 2.68,
    change24h: 5.12,
    icon: 'https://bafkreibk3covs5ltyqxa272u16mvuclopp725ww1213.ipfs.nftstorage.link',
    balance: 250.0
  },
  {
    symbol: 'JTO',
    name: 'Jito',
    mint: 'jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL',
    decimals: 9,
    priceUsd: 3.42,
    change24h: 4.19,
    icon: 'https://metadata.jito.network/token/jto/icon.png',
    balance: 180.0
  }
];
