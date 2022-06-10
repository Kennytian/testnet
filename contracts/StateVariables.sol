//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract StateVariables {
    int public price = 100;
    string constant public location = 'London';

    function f1() public pure returns (int) {
        int x = 5;
        x = x * 2;
        string memory s1 = 'abc';
        return x;
    }
}