// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract GettersSetters {
    int public price;
    string public location = 'China';
    address immutable public owner;
    int constant area = 100;
    int immutable age = 30;

    // Set values when the deploy
    constructor(int _price, string memory _location) {
        price = _price;
        location = _location;
        owner = msg.sender;
    }

    function setPrice(int _price) public {
        price = _price;
    }

    function getPrice() public view returns (int) {
        return price;
    }

    function setLocation(string memory _location) public {
        location = _location;
    }
}