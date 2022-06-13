// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract GlobalVariables {
    address public owner;
    uint256 public sentValue;

    uint256 public thisMoment = block.timestamp;
    uint256 public blockNumber = block.number;
    uint256 public difficulty = block.difficulty;
    uint256 public gasLimit = block.gaslimit;

    constructor() {
        owner = msg.sender;
    }

    function changeOwner() public {
        owner = msg.sender;
    }

    function sentEther() public payable {
        sentValue = msg.value;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function howMuchGas() public view returns (uint256) {
        uint256 start = gasleft();
        uint256 j = 1;
        for (uint256 i = 1; i < 20; i++) {
            j *= i;
        }
        uint256 end = gesleft();
        return start - end;
    }
}
