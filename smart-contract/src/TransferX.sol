// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract TransferX {
    error TotalRecipentsAndAmountsLengthMustBeSame();
    function send(address payable[] calldata recipents, uint[] calldata amounts) external payable{
        if(recipents.length != amounts.length){
            revert TotalRecipentsAndAmountsLengthMustBeSame();
        }
        for (uint i=0;i<recipents.length;i++){
            (bool success, ) = recipents[i].call{value: amounts[i]}("");
            require(success, "Transfer failed");
        }
    }
}