import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0x18544029A5Cd77dbc9fC9aD1AB57D5cD1669abe3", // Contract address taken from erc20 deployment (StringSaver Activity)
        abi as any,
        signer
    );
}