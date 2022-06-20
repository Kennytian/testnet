/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FixedSizeArray,
  FixedSizeArrayInterface,
} from "../../../contracts/FixedArray.sol/FixedSizeArray";

const _abi = [
  {
    inputs: [],
    name: "b1",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "b2",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "b3",
    outputs: [
      {
        internalType: "bytes3",
        name: "",
        type: "bytes3",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "numbers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setBytesArray",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setElement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060600160405280600160ff168152602001600260ff168152602001600460ff16815250600090600361003b92919061004e565b5034801561004857600080fd5b506100b0565b8260038101928215610082579160200282015b82811115610081578251829060ff16905591602001919060010190610061565b5b50905061008f9190610093565b5090565b5b808211156100ac576000816000905550600101610094565b5090565b6104b7806100bf6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063be1c766b1161005b578063be1c766b146100c6578063d39fa233146100e4578063e9b6190914610114578063ee495002146101325761007d565b806309b8e39f146100825780630add6ef21461008c578063a16e7215146100aa575b600080fd5b61008a610150565b005b610094610205565b6040516100a191906102b9565b60405180910390f35b6100c460048036038101906100bf919061030f565b610218565b005b6100ce610236565b6040516100db919061035e565b60405180910390f35b6100fe60048036038101906100f99190610379565b61023f565b60405161010b919061035e565b60405180910390f35b61011c61025a565b60405161012991906103e1565b60405180910390f35b61013a61026b565b6040516101479190610437565b60405180910390f35b7f6100000000000000000000000000000000000000000000000000000000000000600360006101000a81548160ff021916908360f81c02179055507f6162000000000000000000000000000000000000000000000000000000000000600360016101000a81548161ffff021916908360f01c02179055507f61626300000000000000000000000000000000000000000000000000000000006003806101000a81548162ffffff021916908360e81c0217905550565b600360019054906101000a900460f01b81565b806000836003811061022d5761022c610452565b5b01819055505050565b60006003905090565b6000816003811061024f57600080fd5b016000915090505481565b60038054906101000a900460e81b81565b600360009054906101000a900460f81b81565b60007fffff00000000000000000000000000000000000000000000000000000000000082169050919050565b6102b38161027e565b82525050565b60006020820190506102ce60008301846102aa565b92915050565b600080fd5b6000819050919050565b6102ec816102d9565b81146102f757600080fd5b50565b600081359050610309816102e3565b92915050565b60008060408385031215610326576103256102d4565b5b6000610334858286016102fa565b9250506020610345858286016102fa565b9150509250929050565b610358816102d9565b82525050565b6000602082019050610373600083018461034f565b92915050565b60006020828403121561038f5761038e6102d4565b5b600061039d848285016102fa565b91505092915050565b60007fffffff000000000000000000000000000000000000000000000000000000000082169050919050565b6103db816103a6565b82525050565b60006020820190506103f660008301846103d2565b92915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b610431816103fc565b82525050565b600060208201905061044c6000830184610428565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212208f91234e6331a33ba118c79a19985b0031b7900bf75b926a217e08cc97a92eea64736f6c634300080f0033";

type FixedSizeArrayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedSizeArrayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedSizeArray__factory extends ContractFactory {
  constructor(...args: FixedSizeArrayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FixedSizeArray> {
    return super.deploy(overrides || {}) as Promise<FixedSizeArray>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FixedSizeArray {
    return super.attach(address) as FixedSizeArray;
  }
  override connect(signer: Signer): FixedSizeArray__factory {
    return super.connect(signer) as FixedSizeArray__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedSizeArrayInterface {
    return new utils.Interface(_abi) as FixedSizeArrayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedSizeArray {
    return new Contract(address, _abi, signerOrProvider) as FixedSizeArray;
  }
}