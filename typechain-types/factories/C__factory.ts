/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { C, CInterface } from "../C";

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
  "0x60806040526040516100109061011f565b604051809103906000f08015801561002c573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c3f902026040518163ffffffff1660e01b815260040160206040518083038186803b1580156100d257600080fd5b505afa1580156100e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010a9190610141565b60015534801561011957600080fd5b5061018b565b6101c68061031383390190565b60008151905061013b81610174565b92915050565b60006020828403121561015357600080fd5b60006101618482850161012c565b91505092915050565b6000819050919050565b61017d8161016a565b811461018857600080fd5b50565b6101798061019a6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635c0b97e61461003b578063ece57b0414610059575b600080fd5b610043610077565b60405161005091906100bf565b60405180910390f35b61006161009b565b60405161006e91906100da565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6100aa8161011f565b82525050565b6100b9816100f5565b82525050565b60006020820190506100d460008301846100a1565b92915050565b60006020820190506100ef60008301846100b0565b92915050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061012a82610131565b9050919050565b600061013c826100ff565b905091905056fea2646970667358221220b06c35db8c05393a5e52b204fcbcbd8dd5bfd0611b5d32a15e53fe3a4b80b0b364736f6c634300080400336080604052600a600055601460015534801561001a57600080fd5b5061019c8061002a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630b7f16651461005c5780630c55699c1461007a5780633c9d377d146100985780639942ec6f146100b6578063c3f90202146100d4575b600080fd5b6100646100f2565b6040516100719190610141565b60405180910390f35b6100826100fc565b60405161008f9190610141565b60405180910390f35b6100a0610102565b6040516100ad9190610141565b60405180910390f35b6100be61010c565b6040516100cb9190610141565b60405180910390f35b6100dc610120565b6040516100e99190610141565b60405180910390f35b6000600154905090565b60005481565b6000808091505090565b600080610117610129565b90508091505090565b60008054905090565b60008054905090565b61013b8161015c565b82525050565b60006020820190506101566000830184610132565b92915050565b600081905091905056fea2646970667358221220a13e1e42e0bfa4cf4c5fd07eb7b4855e87f63aa3bc139f44c7acaec61924f04864736f6c63430008040033";

export class C__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<C> {
    return super.deploy(overrides || {}) as Promise<C>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): C {
    return super.attach(address) as C;
  }
  connect(signer: Signer): C__factory {
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