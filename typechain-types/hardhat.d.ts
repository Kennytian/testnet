/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "BytesAndStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BytesAndStrings__factory>;
    getContractFactory(
      name: "Deposit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Deposit__factory>;
    getContractFactory(
      name: "DynamicArrays",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DynamicArrays__factory>;
    getContractFactory(
      name: "FixedSizeArray",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FixedSizeArray__factory>;
    getContractFactory(
      name: "GettersSetters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GettersSetters__factory>;
    getContractFactory(
      name: "GlobalVariables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GlobalVariables__factory>;
    getContractFactory(
      name: "Academy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Academy__factory>;
    getContractFactory(
      name: "School",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.School__factory>;
    getContractFactory(
      name: "Auction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Auction__factory>;
    getContractFactory(
      name: "Property",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Property__factory>;
    getContractFactory(
      name: "MyToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyToken__factory>;
    getContractFactory(
      name: "StateVariables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StateVariables__factory>;
    getContractFactory(
      name: "A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.A__factory>;
    getContractFactory(
      name: "B",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.B__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "BytesAndStrings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BytesAndStrings>;
    getContractAt(
      name: "Deposit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Deposit>;
    getContractAt(
      name: "DynamicArrays",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DynamicArrays>;
    getContractAt(
      name: "FixedSizeArray",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FixedSizeArray>;
    getContractAt(
      name: "GettersSetters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GettersSetters>;
    getContractAt(
      name: "GlobalVariables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GlobalVariables>;
    getContractAt(
      name: "Academy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Academy>;
    getContractAt(
      name: "School",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.School>;
    getContractAt(
      name: "Auction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Auction>;
    getContractAt(
      name: "Property",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Property>;
    getContractAt(
      name: "MyToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyToken>;
    getContractAt(
      name: "StateVariables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StateVariables>;
    getContractAt(
      name: "A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.A>;
    getContractAt(
      name: "B",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.B>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
