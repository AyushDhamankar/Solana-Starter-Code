# Solana DApp Starter Code

This is a starter code for building decentralized applications (DApps) on the Solana blockchain. It includes basic setup for connecting to the Solana network, initializing a program, and checking if a wallet is connected.

## Installation

To install the dependencies required for this project, run the following command in your terminal:

```bash
npx create-react-app startercode
cd startercode
npm install @project-serum/anchor@^0.25.0 @solana/wallet-adapter-wallets@^0.17.2 @solana/web3.js@^1.50.1 @testing-library/jest-dom@^5.16.5 @testing-library/react@^13.3.0 @testing-library/user-event@^13.5.0 assert@^2.0.0 react@^18.2.0 react-dom@^18.2.0 react-scripts@5.0.1 solana-wallets-vue@^0.4.3 web-vitals@^2.1.4 @solana/wallet-adapter-material-ui@^0.13.1 @solana/wallet-adapter-react@^0.13.1 @solana/wallet-adapter-react-ui@^0.6.1 --legacy-peer-deps
```

## Usage

1. Clone this repository to your local machine.
2. Install the dependencies using the above command.
3. Replace the `idl.json` file with your own program's interface definition language (IDL) file.
4. Modify the `App` component and add your DApp logic.
5. Run the application using `npm start` or your preferred script.

## Components

- **App.js**: Main component containing the DApp logic.
- **idl.json**: Interface definition language file defining the structure of the Solana program.
- **package.json**: Configuration file for npm dependencies and scripts.

## Dependencies

- **@project-serum/anchor**: Library for interacting with Solana programs.
- **@solana/web3.js**: Library for interacting with the Solana blockchain.
- **@testing-library/react**: Library for testing React components.
- **solana-wallets-vue**: Vue.js integration for Solana wallet adapters.
- **@solana/wallet-adapter-material-ui**: Material UI components for Solana wallet adapters.
- **@solana/wallet-adapter-react**: React components for Solana wallet adapters.
- **@solana/wallet-adapter-react-ui**: React UI components for Solana wallet adapters.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
