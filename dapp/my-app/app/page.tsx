"use client"; // need to run nextjs for some reason...
import { BrowserProvider } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContract } from "../config";

export default function Home() {
  const [walletKey, setwalletKey] = useState(""); // use state: a `hook`
  const [currentData, setcurrentData] = useState("");

  // Connects to etheruem wallet
  const connectWallet = async () => {
    const { ethereum } = window as any;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setwalletKey(accounts[0]); //  use hook
  };

  const setData = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum); // Gets wallet ethereum info
    const signer = await provider.getSigner(); // gets signer
    const contract = getContract(signer);
    try {
      const tx = await contract.setData("");
      await tx.wait();
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Transaction failed: ${decodedError?.args}`);
    }
  };

  const getData = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.data();
      alert(tx);

      setcurrentData(tx);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Transaction failed: ${decodedError?.args}`);
    }
  };

  return (
    <main className="">
      <button
        onClick={() => { connectWallet(); }}
        className="p-3 bg-slate-800 text-white rounded"
      >
        {walletKey != "" ? walletKey : " Connect wallet"}
      </button>
      <button
        onClick={() => { getData(); }}
        className="p-3 bg-slate-800 text-white rounded"
      >
        Get Data
      </button>
      <button
        onClick={() => { setData(); }}
        className="p-3 bg-slate-800 text-white rounded"
      >
        Set Data
      </button>
      {currentData}
    </main>
  );
}

// 1. Connect wallet
// 2. Get data
// 3. Set data

// npm run dev --- run website
// npm i ethers  --- install package for communicating with the blockchain (wallet)
