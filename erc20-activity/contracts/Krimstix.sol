// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Krimstix is ERC20, Ownable {
    constructor(address initialOwner, uint pricePerToken, uint amount)
        ERC20("Krimstix", "KTX")
        Ownable(initialOwner)
    {
        for(uint i = 0; i < (amount / pricePerToken); i++) {
            _mint(initialOwner, pricePerToken * 10 ** decimals());
        }
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}