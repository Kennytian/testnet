// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract DynamicArrays {
    uint [] public numbers;

    function getLength() public view returns (uint) {
        return numbers.length;
    }

    function addElement(uint item) public {
        numbers.push(item);
    }

    function getElement(uint index) public view returns (uint) {
        require(index < numbers.length, 'index >= numbers.length');
        return numbers[index];
    }

    function popElement() public {
        numbers.pop();
    }

    function f() public {
        uint[] memory arr = new uint[](3);
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        numbers = arr;
    }
}
