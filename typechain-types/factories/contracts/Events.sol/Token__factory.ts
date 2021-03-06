/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Token,
  TokenInterface,
} from "../../../contracts/Events.sol/Token";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061022f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a9059cbb14610030575b600080fd5b61004a60048036038101906100459190610122565b61004c565b005b7f69ca02dd4edd7bf0a4abb9ed3b7af3f14778db5d61921c7dc7cd545266326de2828260405161007d9291906101d0565b60405180910390a15050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100b98261008e565b9050919050565b6100c9816100ae565b81146100d457600080fd5b50565b6000813590506100e6816100c0565b92915050565b6000819050919050565b6100ff816100ec565b811461010a57600080fd5b50565b60008135905061011c816100f6565b92915050565b6000806040838503121561013957610138610089565b5b6000610147858286016100d7565b92505060206101588582860161010d565b9150509250929050565b6000819050919050565b600061018761018261017d8461008e565b610162565b61008e565b9050919050565b60006101998261016c565b9050919050565b60006101ab8261018e565b9050919050565b6101bb816101a0565b82525050565b6101ca816100ec565b82525050565b60006040820190506101e560008301856101b2565b6101f260208301846101c1565b939250505056fea264697066735822122034ac6e8efafdf08d18ea6411daa9a3d124970d4b2d35684946a278ee352375ee64736f6c634300080f0033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
