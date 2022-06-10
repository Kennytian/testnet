//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract GettersSetters {
    int public price;
    string public location = 'China';

    function setPrice(int _price) public {
        price = _price;
    }

    function getPrice() public view returns(int) {
        return price;
    }

    function setLocation(string memory _location) public {
        location = _location;
    }
}