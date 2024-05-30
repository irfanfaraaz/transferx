// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TransferX} from "../src/TransferX.sol";

contract TransferXTest is Test {
    TransferX public transferX;

    function setUp() public {
        transferX = new TransferX();
    }

    function test_send() public {
        address payable[] memory recipents = new address payable[](2);
        uint[] memory amounts = new uint[](2);
        recipents[0] = payable(0x1E7A78498F9B6C16Ee52bCd33133Fc58007cE229);
        recipents[1] = payable(0xa1D3Bfcfc2A656298B2c1B0ff4394f3108eB5b64);

        amounts[0] = 0.001 ether;
        amounts[1] = 0.002 ether;

        transferX.send{value: 0.003 ether}(recipents, amounts);

        assertEq(address(recipents[0]).balance,amounts[0]);
        assertEq(address(recipents[1]).balance, amounts[1]);
    }    
}
