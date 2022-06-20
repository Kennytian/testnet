/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  GlobalVariables,
  GlobalVariablesInterface,
} from "../../contracts/GlobalVariables";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "blockNumber",
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
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "difficulty",
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
    name: "gasLimit",
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
    name: "howMuchGas",
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
    name: "sentEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "sentValue",
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
    name: "thisMoment",
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
];

const _bytecode =
  "0x60806040524260025543600355446004554560055534801561002057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104c6806100706000396000f3fe6080604052600436106100915760003560e01c80636dcb8d84116100595780636dcb8d84146101385780638da5cb5b14610163578063997b3d831461018e578063b332fb5e146101b9578063f68016b7146101e457610091565b806312065fe01461009657806319cae462146100c157806336e1f1fc146100ec57806357e871e7146100f657806362a0947714610121575b600080fd5b3480156100a257600080fd5b506100ab61020f565b6040516100b89190610314565b60405180910390f35b3480156100cd57600080fd5b506100d6610217565b6040516100e39190610314565b60405180910390f35b6100f461021d565b005b34801561010257600080fd5b5061010b610226565b6040516101189190610314565b60405180910390f35b34801561012d57600080fd5b5061013661022c565b005b34801561014457600080fd5b5061014d61026e565b60405161015a9190610314565b60405180910390f35b34801561016f57600080fd5b50610178610274565b6040516101859190610370565b60405180910390f35b34801561019a57600080fd5b506101a3610298565b6040516101b09190610314565b60405180910390f35b3480156101c557600080fd5b506101ce6102ef565b6040516101db9190610314565b60405180910390f35b3480156101f057600080fd5b506101f96102f5565b6040516102069190610314565b60405180910390f35b600047905090565b60045481565b34600181905550565b60035481565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000805a90506000600190506000600190505b60148110156102d55780826102c091906103ba565b915080806102cd90610414565b9150506102ab565b5060005a905080836102e7919061045c565b935050505090565b60025481565b60055481565b6000819050919050565b61030e816102fb565b82525050565b60006020820190506103296000830184610305565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061035a8261032f565b9050919050565b61036a8161034f565b82525050565b60006020820190506103856000830184610361565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103c5826102fb565b91506103d0836102fb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156104095761040861038b565b5b828202905092915050565b600061041f826102fb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036104515761045061038b565b5b600182019050919050565b6000610467826102fb565b9150610472836102fb565b9250828210156104855761048461038b565b5b82820390509291505056fea26469706673582212205c34126b3f51627a7a261ee2264abd4563f23f178573919596d2617e9c3a0fc664736f6c634300080f0033";

type GlobalVariablesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GlobalVariablesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GlobalVariables__factory extends ContractFactory {
  constructor(...args: GlobalVariablesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GlobalVariables> {
    return super.deploy(overrides || {}) as Promise<GlobalVariables>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GlobalVariables {
    return super.attach(address) as GlobalVariables;
  }
  override connect(signer: Signer): GlobalVariables__factory {
    return super.connect(signer) as GlobalVariables__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GlobalVariablesInterface {
    return new utils.Interface(_abi) as GlobalVariablesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlobalVariables {
    return new Contract(address, _abi, signerOrProvider) as GlobalVariables;
  }
}