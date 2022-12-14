import { NetworkName } from 'models/network-name'
import { V2V3ContractName } from 'models/v2v3/contracts'
import { ContractJson } from '../loadV2V3Contract'

/**
 * Courtesey of ser DrGorilla.eth
 */
const V2_GOERLI_CONTRACT_ADDRESSES: { [k in V2V3ContractName]?: string } = {}

/**
 *  Defines the ABI filename to use for a given V2V3ContractName.
 */
const V2_CONTRACT_ABI_OVERRIDES: {
  [k in V2V3ContractName]?: {
    version: string
    filename?: string
    addresses?: {
      [k in NetworkName]?: string
    }
  }
} = {
  DeprecatedJBSplitsStore: {
    version: '4.0.0',
    filename: 'JBSplitsStore',
  },
  DeprecatedJBDirectory: {
    version: '4.0.0',
    filename: 'JBDirectory',
  },
  JBETHERC20ProjectPayerDeployer: {
    version: 'latest',
    /**
     * This deployment of the JBETHERC20ProjectPayerDeployer has slightly different
     * internals to the one in the contracts-v2-latest package.
     *
     * It sets the beneficiary to tx.origin, instead of msg.sender.
     *
     * It was only deployed on mainnet, so we'll override it for mainnet only.
     */
    addresses: {
      [NetworkName.mainnet]: '0x325Ba0eFC2c750e0317561e79cFa6911e29B24CC',
    },
  },
}

/**
 * Return the contract JSON for a given V2 contract on Goerli.
 *
 * There is no V2 goerli deployment files in the contracts-v2 npm package.
 * So, we have to manually define the contract addresses, and use the
 * ABIs from mainnet.
 *
 * V2 on Goerli isn't really a thing, but we need to support it
 * to test various mainnet features (like project contract version upgrades).
 */
async function loadJuiceboxV2ContractGoerli(
  contractName: V2V3ContractName,
): Promise<ContractJson | undefined> {
  try {
    // const contractJson = (await import(
    //   `@jbx-protocol/contracts-v2-latest/deployments/mainnet/${contractName}.json`
    // )) as ContractJson

    const contractJson = { abi: [] }

    return {
      abi: contractJson.abi,
      address: V2_GOERLI_CONTRACT_ADDRESSES[contractName],
    }
  } catch (e) {
    return undefined
  }
}

export const loadJuiceboxV2Contract = async (
  contractName: V2V3ContractName,
  network: NetworkName,
): Promise<ContractJson | undefined> => {
  if (network === NetworkName.goerli) {
    return loadJuiceboxV2ContractGoerli(contractName)
  }

  const contractOverride = V2_CONTRACT_ABI_OVERRIDES[contractName]

  const version = contractOverride?.version ?? 'latest'
  const filename = contractOverride?.filename ?? contractName
  try {
    // const contractJson = (await import(
    //   `@jbx-protocol/contracts-v2-${version}/deployments/${network}/${filename}.json`
    // )) as ContractJson
    version
    filename
    const contractJson = { address: '', abi: [] }

    const address =
      contractOverride?.addresses?.[network] ?? contractJson.address

    return {
      ...contractJson,
      address,
    }
  } catch (e) {
    return undefined
  }
}
