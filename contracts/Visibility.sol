// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract A {
    int public x = 10;
    int y = 20;

    function getY() public view returns (int){
        return y; // 20
    }

    function f1() private view returns (int) {
        return x; // can not show
    }

    function f2() public view returns (int) {
        int a;
        a = f1();
        return a; // 10
    }

    function f3() internal view returns (int) {
        return x; // 10
    }

    function f4() external view returns(int) {
        return x;
    }

    function f5() public pure returns(int) {
         int b;
        // b = f4();  // f4() is external
         return b;
    }
}

contract B is A {
    int public xx = f3(); // 10
}

contract C {
    A public contractA = new A();
    int public xx = contractA.f4(); // 10
}