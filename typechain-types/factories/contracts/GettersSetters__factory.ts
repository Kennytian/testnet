/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  GettersSetters,
  GettersSettersInterface,
} from "../../contracts/GettersSetters";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getPrice",
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
  {
    inputs: [],
    name: "location",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "price",
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
  {
    inputs: [
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
    ],
    name: "setLocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040526040518060400160405280600581526020017f4368696e61000000000000000000000000000000000000000000000000000000815250600190816200004a919062000355565b50601e60a0908152503480156200006057600080fd5b5060405162000eb738038062000eb78339818101604052810190620000869190620005e5565b8160008190555080600190816200009e919062000355565b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050506200064b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200015d57607f821691505b60208210810362000173576200017262000115565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001dd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200019e565b620001e986836200019e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000236620002306200022a8462000201565b6200020b565b62000201565b9050919050565b6000819050919050565b620002528362000215565b6200026a62000261826200023d565b848454620001ab565b825550505050565b600090565b6200028162000272565b6200028e81848462000247565b505050565b5b81811015620002b657620002aa60008262000277565b60018101905062000294565b5050565b601f8211156200030557620002cf8162000179565b620002da846200018e565b81016020851015620002ea578190505b62000302620002f9856200018e565b83018262000293565b50505b505050565b600082821c905092915050565b60006200032a600019846008026200030a565b1980831691505092915050565b600062000345838362000317565b9150826002028217905092915050565b6200036082620000db565b67ffffffffffffffff8111156200037c576200037b620000e6565b5b62000388825462000144565b62000395828285620002ba565b600060209050601f831160018114620003cd5760008415620003b8578287015190505b620003c4858262000337565b86555062000434565b601f198416620003dd8662000179565b60005b828110156200040757848901518255600182019150602085019450602081019050620003e0565b8683101562000427578489015162000423601f89168262000317565b8355505b6001600288020188555050505b505050505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620004658162000450565b81146200047157600080fd5b50565b60008151905062000485816200045a565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b620004b18262000495565b810181811067ffffffffffffffff82111715620004d357620004d2620000e6565b5b80604052505050565b6000620004e86200043c565b9050620004f68282620004a6565b919050565b600067ffffffffffffffff821115620005195762000518620000e6565b5b620005248262000495565b9050602081019050919050565b60005b838110156200055157808201518184015260208101905062000534565b8381111562000561576000848401525b50505050565b60006200057e6200057884620004fb565b620004dc565b9050828152602081018484840111156200059d576200059c62000490565b5b620005aa84828562000531565b509392505050565b600082601f830112620005ca57620005c96200048b565b5b8151620005dc84826020860162000567565b91505092915050565b60008060408385031215620005ff57620005fe62000446565b5b60006200060f8582860162000474565b925050602083015167ffffffffffffffff8111156200063357620006326200044b565b5b6200064185828601620005b2565b9150509250929050565b60805160a0516108496200066e6000396000505060006101ba01526108496000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063516f279e14610067578063827bfbdf146100855780638da5cb5b146100a157806398d5fdca146100bf578063a035b1fe146100dd578063f7a30806146100fb575b600080fd5b61006f610117565b60405161007c919061028e565b60405180910390f35b61009f600480360381019061009a91906103f9565b6101a5565b005b6100a96101b8565b6040516100b69190610483565b60405180910390f35b6100c76101dc565b6040516100d491906104b7565b60405180910390f35b6100e56101e5565b6040516100f291906104b7565b60405180910390f35b610115600480360381019061011091906104fe565b6101eb565b005b600180546101249061055a565b80601f01602080910402602001604051908101604052809291908181526020018280546101509061055a565b801561019d5780601f106101725761010080835404028352916020019161019d565b820191906000526020600020905b81548152906001019060200180831161018057829003601f168201915b505050505081565b80600190816101b49190610741565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008054905090565b60005481565b8060008190555050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561022f578082015181840152602081019050610214565b8381111561023e576000848401525b50505050565b6000601f19601f8301169050919050565b6000610260826101f5565b61026a8185610200565b935061027a818560208601610211565b61028381610244565b840191505092915050565b600060208201905081810360008301526102a88184610255565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61030682610244565b810181811067ffffffffffffffff82111715610325576103246102ce565b5b80604052505050565b60006103386102b0565b905061034482826102fd565b919050565b600067ffffffffffffffff821115610364576103636102ce565b5b61036d82610244565b9050602081019050919050565b82818337600083830152505050565b600061039c61039784610349565b61032e565b9050828152602081018484840111156103b8576103b76102c9565b5b6103c384828561037a565b509392505050565b600082601f8301126103e0576103df6102c4565b5b81356103f0848260208601610389565b91505092915050565b60006020828403121561040f5761040e6102ba565b5b600082013567ffffffffffffffff81111561042d5761042c6102bf565b5b610439848285016103cb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061046d82610442565b9050919050565b61047d81610462565b82525050565b60006020820190506104986000830184610474565b92915050565b6000819050919050565b6104b18161049e565b82525050565b60006020820190506104cc60008301846104a8565b92915050565b6104db8161049e565b81146104e657600080fd5b50565b6000813590506104f8816104d2565b92915050565b600060208284031215610514576105136102ba565b5b6000610522848285016104e9565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061057257607f821691505b6020821081036105855761058461052b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026105ed7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105b0565b6105f786836105b0565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061063e6106396106348461060f565b610619565b61060f565b9050919050565b6000819050919050565b61065883610623565b61066c61066482610645565b8484546105bd565b825550505050565b600090565b610681610674565b61068c81848461064f565b505050565b5b818110156106b0576106a5600082610679565b600181019050610692565b5050565b601f8211156106f5576106c68161058b565b6106cf846105a0565b810160208510156106de578190505b6106f26106ea856105a0565b830182610691565b50505b505050565b600082821c905092915050565b6000610718600019846008026106fa565b1980831691505092915050565b60006107318383610707565b9150826002028217905092915050565b61074a826101f5565b67ffffffffffffffff811115610763576107626102ce565b5b61076d825461055a565b6107788282856106b4565b600060209050601f8311600181146107ab5760008415610799578287015190505b6107a38582610725565b86555061080b565b601f1984166107b98661058b565b60005b828110156107e1578489015182556001820191506020850194506020810190506107bc565b868310156107fe57848901516107fa601f891682610707565b8355505b6001600288020188555050505b50505050505056fea26469706673582212200aee455ebd479ac2097296734401e7eec96ebed04692e5d96b870fdbc1a2163864736f6c634300080f0033";

type GettersSettersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GettersSettersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GettersSetters__factory extends ContractFactory {
  constructor(...args: GettersSettersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _price: PromiseOrValue<BigNumberish>,
    _location: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GettersSetters> {
    return super.deploy(
      _price,
      _location,
      overrides || {}
    ) as Promise<GettersSetters>;
  }
  override getDeployTransaction(
    _price: PromiseOrValue<BigNumberish>,
    _location: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_price, _location, overrides || {});
  }
  override attach(address: string): GettersSetters {
    return super.attach(address) as GettersSetters;
  }
  override connect(signer: Signer): GettersSetters__factory {
    return super.connect(signer) as GettersSetters__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GettersSettersInterface {
    return new utils.Interface(_abi) as GettersSettersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GettersSetters {
    return new Contract(address, _abi, signerOrProvider) as GettersSetters;
  }
}