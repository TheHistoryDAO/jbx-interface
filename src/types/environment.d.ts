export {}
import { NetworkName } from 'models/network-name'
type Networks = keyof typeof NetworkName

export type PinataGatewayHostnameURL = 'jbx.mypinata.cloud'

export type PublicBaseURLS =
  | 'http://localhost:3000'
  | 'https://juicebox.historydao.me'
  | 'https://goerli.juicebox.historydao.me'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PINATA_PINNER_KEY: string
      PINATA_PINNER_SECRET: string
      NEXT_PUBLIC_PINATA_GATEWAY_HOSTNAME: PinataGatewayHostnameURL

      GITHUB_ACCESS_TOKEN: string

      PRE_RENDER_INFURA_ID: Networks
      NEXT_PUBLIC_INFURA_ID: string
      NEXT_PUBLIC_INFURA_NETWORK: Networks

      // Ask in Discord for the goerli subgraph url
      // for both SCHEMA and SUBGRAPH_URL
      NEXT_PUBLIC_SUBGRAPH_URL: string
      GRAPHQL_SCHEMA_SUBGRAPH_URL: string

      NEXT_PUBLIC_BASE_URL: PublicBaseURLS

      NEXT_PUBLIC_SENTRY_DSN: string

      NEXT_PUBLIC_ARCX_API_KEY: string

      NEXT_PUBLIC_TENDERLY_API_KEY: string
      NEXT_PUBLIC_TENDERLY_PROJECT_NAME: string
      NEXT_PUBLIC_TENDERLY_ACCOUNT: string

      NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID: string
      NEXT_PUBLIC_INFURA_IPFS_API_SECRET: string
      NEXT_PUBLIC_INFURA_IPFS_HOSTNAME: string
    }
  }
}
