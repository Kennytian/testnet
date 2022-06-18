/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BaseContractInterface,
} from "../../../contracts/Inheritance.sol/BaseContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_x",
        type: "int256",
      },
    ],
    name: "setX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class BaseContract__factory {
  static readonly abi = _abi;
  static createInterface(): BaseContractInterface {
    return new utils.Interface(_abi) as BaseContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseContract {
    return new Contract(address, _abi, signerOrProvider) as BaseContract;
  }
}
