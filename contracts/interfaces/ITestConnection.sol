// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ITestConnection {
    function getMessage() external view returns (string memory);
    function setMessage(string memory newMessage) external;
}
