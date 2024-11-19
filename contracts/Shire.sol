//SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Shire is ERC20 {
    uint constant _initial_supply = 100 * (10**18);
    constructor() ERC20("Shire", "SHR") {
        _mint(msg.sender, _initial_supply);
    }
}