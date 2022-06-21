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
import type { PromiseOrValue } from "../../../common";
import type {
  CrowdFunding,
  CrowdFundingInterface,
} from "../../../contracts/CrownFunding.sol/CrowdFunding";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "ContributeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_repipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "CreateRequestEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "MakePaymentEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
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
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "contributors",
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
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deadline",
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
    name: "getRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "goal",
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
        name: "_requestNo",
        type: "uint256",
      },
    ],
    name: "makePayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumContribution",
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
    name: "noOfContributors",
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
    name: "numRequests",
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
    name: "raisedAmount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "noOfVoters",
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
        name: "_requestNo",
        type: "uint256",
      },
    ],
    name: "voteRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001af638038062001af68339818101604052810190620000379190620000e3565b8160058190555080426200004c919062000159565b600481905550606460038190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620001b6565b600080fd5b6000819050919050565b620000bd81620000a8565b8114620000c957600080fd5b50565b600081519050620000dd81620000b2565b92915050565b60008060408385031215620000fd57620000fc620000a3565b5b60006200010d85828601620000cc565b92505060206200012085828601620000cc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200016682620000a8565b91506200017383620000a8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620001ab57620001aa6200012a565b5b828201905092915050565b61193080620001c66000396000f3fe6080604052600436106100ec5760003560e01c80635114cb521161008a578063b2d5ae4411610059578063b2d5ae44146102fb578063c59ee1dc14610312578063d7bb99ba1461033d578063f851a44014610347576100fb565b80635114cb521461023b57806381d12c5814610264578063937e09b1146102a55780639fb42b1f146102d0576100fb565b806329dcb0cf116100c657806329dcb0cf1461019157806340193883146101bc5780634cb6f4a5146101e75780634e260f6f14610210576100fb565b806312065fe0146101005780631b16bb5c1461012b5780631f6d494214610154576100fb565b366100fb576100f9610372565b005b600080fd5b34801561010c57600080fd5b50610115610503565b6040516101229190610cfa565b60405180910390f35b34801561013757600080fd5b50610152600480360381019061014d9190610ef9565b61050b565b005b34801561016057600080fd5b5061017b60048036038101906101769190610fa6565b610692565b6040516101889190610cfa565b60405180910390f35b34801561019d57600080fd5b506101a66106aa565b6040516101b39190610cfa565b60405180910390f35b3480156101c857600080fd5b506101d16106b0565b6040516101de9190610cfa565b60405180910390f35b3480156101f357600080fd5b5061020e60048036038101906102099190610fd3565b6106b6565b005b34801561021c57600080fd5b5061022561085b565b6040516102329190610cfa565b60405180910390f35b34801561024757600080fd5b50610262600480360381019061025d9190610fd3565b610861565b005b34801561027057600080fd5b5061028b60048036038101906102869190610fd3565b610a7f565b60405161029c9594939291906110b2565b60405180910390f35b3480156102b157600080fd5b506102ba610b6a565b6040516102c79190610cfa565b60405180910390f35b3480156102dc57600080fd5b506102e5610b70565b6040516102f29190610cfa565b60405180910390f35b34801561030757600080fd5b50610310610b76565b005b34801561031e57600080fd5b50610327610cb5565b6040516103349190610cfa565b60405180910390f35b610345610372565b005b34801561035357600080fd5b5061035c610cbb565b604051610369919061111b565b60405180910390f35b60045442106103b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ad90611182565b60405180910390fd5b6003543410156103fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f2906111ee565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540361045a57600260008154809291906104549061123d565b91905055505b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104a89190611285565b9250508190555034600660008282546104c19190611285565b925050819055507f2daf61dec57a2c194e9e87958b1a40a5c236b5e8c6041655d664ddbd16c2932033346040516104f99291906112db565b60405180910390a1565b600047905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461059b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059290611376565b60405180910390fd5b60006007600060085481526020019081526020016000209050600860008154809291906105c79061123d565b9190505550838160000190816105dd91906115a2565b50828160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081816002018190555060008160030160006101000a81548160ff021916908315150217905550600081600401819055507f5392bd80651676ccaaedec1afbe841d47e369223df0ba1586110b6426ee87a3a848484604051610684939291906116c9565b60405180910390a150505050565b60006020528060005260406000206000915090505481565b60045481565b60055481565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072e90611779565b60405180910390fd5b6000600760008381526020019081526020016000209050600015158160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146107e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107da906117e5565b60405180910390fd5b60018160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508060040160008154809291906108529061123d565b91905055505050565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e890611376565b60405180910390fd5b600554600654101561090257600080fd5b6000600760008381526020019081526020016000209050600015158160030160009054906101000a900460ff16151514610971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096890611851565b60405180910390fd5b6002805461097f91906118a0565b81600401541161098e57600080fd5b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600201549081150290604051600060405180830381858888f193505050501580156109fc573d6000803e3d6000fd5b5060018160030160006101000a81548160ff0219169083151502179055507f516e1673e5e85c44620165259173329adda2ad25e7bb15020c732be060b5b7908160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260020154604051610a739291906118d1565b60405180910390a15050565b6007602052806000526040600020600091509050806000018054610aa2906113c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610ace906113c5565b8015610b1b5780601f10610af057610100808354040283529160200191610b1b565b820191906000526020600020905b815481529060010190602001808311610afe57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900460ff16908060040154905085565b60035481565b60085481565b60045442118015610b8a5750600554600654105b610b9357600080fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610bde57600080fd5b600033905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610c6c573d6000803e3d6000fd5b5060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60065481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b610cf481610ce1565b82525050565b6000602082019050610d0f6000830184610ceb565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d7c82610d33565b810181811067ffffffffffffffff82111715610d9b57610d9a610d44565b5b80604052505050565b6000610dae610d15565b9050610dba8282610d73565b919050565b600067ffffffffffffffff821115610dda57610dd9610d44565b5b610de382610d33565b9050602081019050919050565b82818337600083830152505050565b6000610e12610e0d84610dbf565b610da4565b905082815260208101848484011115610e2e57610e2d610d2e565b5b610e39848285610df0565b509392505050565b600082601f830112610e5657610e55610d29565b5b8135610e66848260208601610dff565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e9a82610e6f565b9050919050565b610eaa81610e8f565b8114610eb557600080fd5b50565b600081359050610ec781610ea1565b92915050565b610ed681610ce1565b8114610ee157600080fd5b50565b600081359050610ef381610ecd565b92915050565b600080600060608486031215610f1257610f11610d1f565b5b600084013567ffffffffffffffff811115610f3057610f2f610d24565b5b610f3c86828701610e41565b9350506020610f4d86828701610eb8565b9250506040610f5e86828701610ee4565b9150509250925092565b6000610f7382610e6f565b9050919050565b610f8381610f68565b8114610f8e57600080fd5b50565b600081359050610fa081610f7a565b92915050565b600060208284031215610fbc57610fbb610d1f565b5b6000610fca84828501610f91565b91505092915050565b600060208284031215610fe957610fe8610d1f565b5b6000610ff784828501610ee4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561103a57808201518184015260208101905061101f565b83811115611049576000848401525b50505050565b600061105a82611000565b611064818561100b565b935061107481856020860161101c565b61107d81610d33565b840191505092915050565b61109181610e8f565b82525050565b60008115159050919050565b6110ac81611097565b82525050565b600060a08201905081810360008301526110cc818861104f565b90506110db6020830187611088565b6110e86040830186610ceb565b6110f560608301856110a3565b6111026080830184610ceb565b9695505050505050565b61111581610f68565b82525050565b6000602082019050611130600083018461110c565b92915050565b7f446561646c696e65206861732070617373656421000000000000000000000000600082015250565b600061116c60148361100b565b915061117782611136565b602082019050919050565b6000602082019050818103600083015261119b8161115f565b9050919050565b7f4d696e696d756d20636f6e747269627574696f6e206e6f74206d657421000000600082015250565b60006111d8601d8361100b565b91506111e3826111a2565b602082019050919050565b60006020820190508181036000830152611207816111cb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061124882610ce1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361127a5761127961120e565b5b600182019050919050565b600061129082610ce1565b915061129b83610ce1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112d0576112cf61120e565b5b828201905092915050565b60006040820190506112f0600083018561110c565b6112fd6020830184610ceb565b9392505050565b7f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008201527f6e21000000000000000000000000000000000000000000000000000000000000602082015250565b600061136060228361100b565b915061136b82611304565b604082019050919050565b6000602082019050818103600083015261138f81611353565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113dd57607f821691505b6020821081036113f0576113ef611396565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026114587fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261141b565b611462868361141b565b95508019841693508086168417925050509392505050565b6000819050919050565b600061149f61149a61149584610ce1565b61147a565b610ce1565b9050919050565b6000819050919050565b6114b983611484565b6114cd6114c5826114a6565b848454611428565b825550505050565b600090565b6114e26114d5565b6114ed8184846114b0565b505050565b5b81811015611511576115066000826114da565b6001810190506114f3565b5050565b601f82111561155657611527816113f6565b6115308461140b565b8101602085101561153f578190505b61155361154b8561140b565b8301826114f2565b50505b505050565b600082821c905092915050565b60006115796000198460080261155b565b1980831691505092915050565b60006115928383611568565b9150826002028217905092915050565b6115ab82611000565b67ffffffffffffffff8111156115c4576115c3610d44565b5b6115ce82546113c5565b6115d9828285611515565b600060209050601f83116001811461160c57600084156115fa578287015190505b6116048582611586565b86555061166c565b601f19841661161a866113f6565b60005b828110156116425784890151825560018201915060208501945060208101905061161d565b8683101561165f578489015161165b601f891682611568565b8355505b6001600288020188555050505b505050505050565b600061168f61168a61168584610e6f565b61147a565b610e6f565b9050919050565b60006116a182611674565b9050919050565b60006116b382611696565b9050919050565b6116c3816116a8565b82525050565b600060608201905081810360008301526116e3818661104f565b90506116f260208301856116ba565b6116ff6040830184610ceb565b949350505050565b7f596f75206d757374206265206120636f6e7472696275746f7220746f20766f7460008201527f6521000000000000000000000000000000000000000000000000000000000000602082015250565b600061176360228361100b565b915061176e82611707565b604082019050919050565b6000602082019050818103600083015261179281611756565b9050919050565b7f596f75206861766520616c726561647920766f74656421000000000000000000600082015250565b60006117cf60178361100b565b91506117da82611799565b602082019050919050565b600060208201905081810360008301526117fe816117c2565b9050919050565b7f546865207265717565737420686173206265656e20636f6d706c657465642100600082015250565b600061183b601f8361100b565b915061184682611805565b602082019050919050565b6000602082019050818103600083015261186a8161182e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006118ab82610ce1565b91506118b683610ce1565b9250826118c6576118c5611871565b5b828204905092915050565b60006040820190506118e660008301856116ba565b6118f36020830184610ceb565b939250505056fea2646970667358221220a394e98bd6b83642617e4e180998a68bcc7037c0102c28745e8b2cddd87f11c964736f6c634300080f0033";

type CrowdFundingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdFundingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowdFunding__factory extends ContractFactory {
  constructor(...args: CrowdFundingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _goal: PromiseOrValue<BigNumberish>,
    _deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrowdFunding> {
    return super.deploy(
      _goal,
      _deadline,
      overrides || {}
    ) as Promise<CrowdFunding>;
  }
  override getDeployTransaction(
    _goal: PromiseOrValue<BigNumberish>,
    _deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_goal, _deadline, overrides || {});
  }
  override attach(address: string): CrowdFunding {
    return super.attach(address) as CrowdFunding;
  }
  override connect(signer: Signer): CrowdFunding__factory {
    return super.connect(signer) as CrowdFunding__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdFundingInterface {
    return new utils.Interface(_abi) as CrowdFundingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdFunding {
    return new Contract(address, _abi, signerOrProvider) as CrowdFunding;
  }
}
