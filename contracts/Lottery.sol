// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Lottery {
    address payable[] public players;
    address public manager;

    constructor() {
        manager = msg.sender;
    }

    receive() external payable {
        require(msg.value == 0.1 ether, 'not enough 0.1 ether');
        players.push(payable(msg.sender));
    }

    function getBalance() public view returns (uint256) {
        require(msg.sender == manager, "not owner");
        return address(this).balance;
    }

    function random() public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players.length)));
    }

    function pickWinner() public {
        require(msg.sender == manager, "not owner");
        require(players.length >= 3, "can not less than 3");

        uint256 r = random();
        address payable winner;

        uint256 index = r % players.length;
        winner = players[index];
        winner.transfer(getBalance());
        players = new address payable[](0);
    }
}
