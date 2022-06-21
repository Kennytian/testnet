/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Lottery, LotteryInterface } from "../../contracts/Lottery";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getBalance",
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
    name: "manager",
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
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "players",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "random",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610979806100616000396000f3fe60806040526004361061004e5760003560e01c806312065fe014610106578063481c6a75146101315780635d495aea1461015c5780635ec01e4d14610173578063f71d96cb1461019e57610101565b366101015767016345785d8a0000341461009d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161009490610605565b60405180910390fd5b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055005b600080fd5b34801561011257600080fd5b5061011b6101db565b604051610128919061063e565b60405180910390f35b34801561013d57600080fd5b50610146610273565b604051610153919061069a565b60405180910390f35b34801561016857600080fd5b50610171610299565b005b34801561017f57600080fd5b50610188610488565b604051610195919061063e565b60405180910390f35b3480156101aa57600080fd5b506101c560048036038101906101c091906106e6565b6104c2565b6040516101d29190610734565b60405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461026d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102649061079b565b60405180910390fd5b47905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610329576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103209061079b565b60405180910390fd5b60036000805490501015610372576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036990610807565b60405180910390fd5b600061037c610488565b9050600080600080549050836103929190610856565b9050600081815481106103a8576103a7610887565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508173ffffffffffffffffffffffffffffffffffffffff166108fc6103f76101db565b9081150290604051600060405180830381858888f19350505050158015610422573d6000803e3d6000fd5b50600067ffffffffffffffff81111561043e5761043d6108b6565b5b60405190808252806020026020018201604052801561046c5781602001602082028036833780820191505090505b5060009080519060200190610482929190610501565b50505050565b600044426000805490506040516020016104a493929190610906565b6040516020818303038152906040528051906020012060001c905090565b600081815481106104d257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805482825590600052602060002090810192821561057a579160200282015b828111156105795782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610521565b5b509050610587919061058b565b5090565b5b808211156105a457600081600090555060010161058c565b5090565b600082825260208201905092915050565b7f6e6f7420656e6f75676820302e31206574686572000000000000000000000000600082015250565b60006105ef6014836105a8565b91506105fa826105b9565b602082019050919050565b6000602082019050818103600083015261061e816105e2565b9050919050565b6000819050919050565b61063881610625565b82525050565b6000602082019050610653600083018461062f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061068482610659565b9050919050565b61069481610679565b82525050565b60006020820190506106af600083018461068b565b92915050565b600080fd5b6106c381610625565b81146106ce57600080fd5b50565b6000813590506106e0816106ba565b92915050565b6000602082840312156106fc576106fb6106b5565b5b600061070a848285016106d1565b91505092915050565b600061071e82610659565b9050919050565b61072e81610713565b82525050565b60006020820190506107496000830184610725565b92915050565b7f6e6f74206f776e65720000000000000000000000000000000000000000000000600082015250565b60006107856009836105a8565b91506107908261074f565b602082019050919050565b600060208201905081810360008301526107b481610778565b9050919050565b7f63616e206e6f74206c657373207468616e203300000000000000000000000000600082015250565b60006107f16013836105a8565b91506107fc826107bb565b602082019050919050565b60006020820190508181036000830152610820816107e4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061086182610625565b915061086c83610625565b92508261087c5761087b610827565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000819050919050565b6109006108fb82610625565b6108e5565b82525050565b600061091282866108ef565b60208201915061092282856108ef565b60208201915061093282846108ef565b60208201915081905094935050505056fea2646970667358221220b52a945c72a1a7e5598bfdb70e78fd4bd540451a8e4975cf10c92c7ed205ceb264736f6c634300080f0033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lottery> {
    return super.deploy(overrides || {}) as Promise<Lottery>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  override connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
