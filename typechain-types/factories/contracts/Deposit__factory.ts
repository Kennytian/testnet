/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Deposit, DepositInterface } from "../../contracts/Deposit";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
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
    name: "sendEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferEther",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104e6806100606000396000f3fe6080604052600436106100435760003560e01c806305b1137b1461004c5780630e29df221461008957806312065fe0146100935780638da5cb5b146100be5761004a565b3661004a57005b005b34801561005857600080fd5b50610073600480360381019061006e91906102ba565b6100e9565b6040516100809190610315565b60405180910390f35b6100916101e2565b005b34801561009f57600080fd5b506100a86101f5565b6040516100b5919061033f565b60405180910390f35b3480156100ca57600080fd5b506100d36101fd565b6040516100e0919061037b565b60405180910390f35b60003373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610179576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017090610419565b60405180910390fd5b6101816101f5565b82116101d7578273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156101cd573d6000803e3d6000fd5b50600190506101dc565b600090505b92915050565b600080806101ef90610468565b91505050565b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061025182610226565b9050919050565b61026181610246565b811461026c57600080fd5b50565b60008135905061027e81610258565b92915050565b6000819050919050565b61029781610284565b81146102a257600080fd5b50565b6000813590506102b48161028e565b92915050565b600080604083850312156102d1576102d0610221565b5b60006102df8582860161026f565b92505060206102f0858286016102a5565b9150509250929050565b60008115159050919050565b61030f816102fa565b82525050565b600060208201905061032a6000830184610306565b92915050565b61033981610284565b82525050565b60006020820190506103546000830184610330565b92915050565b600061036582610226565b9050919050565b6103758161035a565b82525050565b6000602082019050610390600083018461036c565b92915050565b600082825260208201905092915050565b7f5472616e73666572206661696c65642c20796f7520617265206e6f742074686560008201527f206f776e65722100000000000000000000000000000000000000000000000000602082015250565b6000610403602783610396565b915061040e826103a7565b604082019050919050565b60006020820190508181036000830152610432816103f6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061047382610284565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036104a5576104a4610439565b5b60018201905091905056fea26469706673582212202d699a64937a9d1b2db82cbc2059f5537ce4160a5412d3f0414e9c5be3cb5dd364736f6c634300080f0033";

type DepositConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Deposit__factory extends ContractFactory {
  constructor(...args: DepositConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Deposit> {
    return super.deploy(overrides || {}) as Promise<Deposit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Deposit {
    return super.attach(address) as Deposit;
  }
  override connect(signer: Signer): Deposit__factory {
    return super.connect(signer) as Deposit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositInterface {
    return new utils.Interface(_abi) as DepositInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Deposit {
    return new Contract(address, _abi, signerOrProvider) as Deposit;
  }
}
