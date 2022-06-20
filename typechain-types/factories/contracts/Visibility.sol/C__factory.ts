/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { C, CInterface } from "../../../contracts/Visibility.sol/C";

const _abi = [
  {
    inputs: [],
    name: "contractA",
    outputs: [
      {
        internalType: "contract A",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "xx",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405161001090610110565b604051809103906000f08015801561002c573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c3f902026040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fb9190610158565b60015534801561010a57600080fd5b50610185565b6101c68061033983390190565b600080fd5b6000819050919050565b61013581610122565b811461014057600080fd5b50565b6000815190506101528161012c565b92915050565b60006020828403121561016e5761016d61011d565b5b600061017c84828501610143565b91505092915050565b6101a5806101946000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635c0b97e61461003b578063ece57b0414610059575b600080fd5b610043610077565b6040516100509190610120565b60405180910390f35b61006161009b565b60405161006e9190610154565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006100e66100e16100dc846100a1565b6100c1565b6100a1565b9050919050565b60006100f8826100cb565b9050919050565b600061010a826100ed565b9050919050565b61011a816100ff565b82525050565b60006020820190506101356000830184610111565b92915050565b6000819050919050565b61014e8161013b565b82525050565b60006020820190506101696000830184610145565b9291505056fea2646970667358221220f3507fbd53e117aabff720b5d38d7284a8f71247517275a6f400b38069b8adbf64736f6c634300080f00336080604052600a600055601460015534801561001a57600080fd5b5061019c8061002a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630b7f16651461005c5780630c55699c1461007a5780633c9d377d146100985780639942ec6f146100b6578063c3f90202146100d4575b600080fd5b6100646100f2565b604051610071919061014b565b60405180910390f35b6100826100fc565b60405161008f919061014b565b60405180910390f35b6100a0610102565b6040516100ad919061014b565b60405180910390f35b6100be61010c565b6040516100cb919061014b565b60405180910390f35b6100dc610120565b6040516100e9919061014b565b60405180910390f35b6000600154905090565b60005481565b6000808091505090565b600080610117610129565b90508091505090565b60008054905090565b60008054905090565b6000819050919050565b61014581610132565b82525050565b6000602082019050610160600083018461013c565b9291505056fea2646970667358221220c89703109499d50e048c8eb15025670a834a4acf10e86fd169365c5c599c436e64736f6c634300080f0033";

type CConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class C__factory extends ContractFactory {
  constructor(...args: CConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<C> {
    return super.deploy(overrides || {}) as Promise<C>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): C {
    return super.attach(address) as C;
  }
  override connect(signer: Signer): C__factory {
    return super.connect(signer) as C__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CInterface {
    return new utils.Interface(_abi) as CInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): C {
    return new Contract(address, _abi, signerOrProvider) as C;
  }
}
