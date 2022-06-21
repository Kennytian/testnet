// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Auction {
    mapping(address => uint) public bids;

    function bid() payable public {
        bids[msg.sender] = msg.value;
    }
}