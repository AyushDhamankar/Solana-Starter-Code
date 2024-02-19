import { useEffect, useState } from 'react';
import * as anchor from "@project-serum/anchor";
import { Buffer } from 'buffer';
import idl from './idl.json';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3, utils } from '@project-serum/anchor';

// Destructuring web3 objects
const { SystemProgram, Keypair } = web3;

// Set Buffer globally
window.Buffer = Buffer;

// Initialize program ID
const programID = new PublicKey(idl.metadata.address);

// Define network configuration
const network = clusterApiUrl("devnet");

// Options for establishing connection
const opts = {
  preflightCommitment: "processed",
};

// Generate a base account keypair
const baseAccount = Keypair.generate();
console.log("baseAccount publicKey :", baseAccount.publicKey.toString());

// Initialize connection to Solana blockchain
const connection = new Connection(network, opts.preflightCommitment);

const App = () => {

  // Function to get Anchor provider
  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(
      connection,
      window.solana,
      opts.preflightCommitment
    );
    return provider;
  };

  // Function to check if a wallet is connected
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          const response = await solana.connect({
            onlyIfTrusted: true,
          });
          console.log(response.publicKey);
        }
      } else {
        alert("Solana object not found!, Get a Phantom Wallet");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Hook to check if wallet is connected on component mount
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <h1>Hi I am Ayush</h1>
    </>
  );
};

export default App;