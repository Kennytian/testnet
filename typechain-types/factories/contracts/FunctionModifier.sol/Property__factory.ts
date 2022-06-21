/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Property,
  PropertyInterface,
} from "../../../contracts/FunctionModifier.sol/Property";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
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
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000808190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610370806100686000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638da5cb5b1461005157806391b7f5ed1461006f578063a035b1fe1461008b578063a6f9dae1146100a9575b600080fd5b6100596100c5565b6040516100669190610234565b60405180910390f35b6100896004803603810190610084919061028a565b6100eb565b005b61009361014f565b6040516100a091906102c6565b60405180910390f35b6100c360048036038101906100be919061030d565b610155565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461014557600080fd5b8060008190555050565b60005481565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101af57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061021e826101f3565b9050919050565b61022e81610213565b82525050565b60006020820190506102496000830184610225565b92915050565b600080fd5b6000819050919050565b61026781610254565b811461027257600080fd5b50565b6000813590506102848161025e565b92915050565b6000602082840312156102a05761029f61024f565b5b60006102ae84828501610275565b91505092915050565b6102c081610254565b82525050565b60006020820190506102db60008301846102b7565b92915050565b6102ea81610213565b81146102f557600080fd5b50565b600081359050610307816102e1565b92915050565b6000602082840312156103235761032261024f565b5b6000610331848285016102f8565b9150509291505056fea26469706673582212206080d8c36bc00fcee4849760906c927afcfca7f66ff920b6ef6c8ded7fff049264736f6c634300080f0033";

type PropertyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PropertyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Property__factory extends ContractFactory {
  constructor(...args: PropertyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Property> {
    return super.deploy(overrides || {}) as Promise<Property>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Property {
    return super.attach(address) as Property;
  }
  override connect(signer: Signer): Property__factory {
    return super.connect(signer) as Property__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PropertyInterface {
    return new utils.Interface(_abi) as PropertyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Property {
    return new Contract(address, _abi, signerOrProvider) as Property;
  }
}
