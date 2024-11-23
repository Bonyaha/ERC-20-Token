// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Bucket {
    event Winner(address);

    function drop(address erc20, uint amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(IERC20(erc20).transferFrom(msg.sender, address(this), amount));
        emit Winner(msg.sender);
    }
}