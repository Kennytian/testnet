//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Property {
    uint private price;
    address public owner;

    constructor() {
        price = 0;
        owner = msg.sender;
    }
}