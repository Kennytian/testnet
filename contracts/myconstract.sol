// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Property {
    uint256 private price;
    address public owner;

    constructor() {
        price = 0;
        owner = msg.sender;
    }

    // Function Modifier
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function changeOwner(address _owner) public onlyOwner {
        owner = _owner;
    }

    function setPrice(uint _price) public {
        price = _price;
    }

    /// @notice Returns the price of the Property
    function getPrice() view public returns (uint){
        return price;
    }

    // Event
    event OwnerChanged(address owner);
}
