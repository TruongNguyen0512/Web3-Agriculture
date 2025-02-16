// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TestConnection {
    string public message;

    constructor() {
        message = "Connection Successful!";
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
