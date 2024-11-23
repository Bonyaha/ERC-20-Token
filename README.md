# ERC-20 token Project

**This project is about setting up an ERC-20 token on the Sepolia test network AND sending it to other smart contract**

For this project we use @openzeppelin/contracts package.

After deploying the ERC-20 Token, we add it to MetaMask and send it to an address via the UI

We deployed another contract (Bucket), to whom we will be sending shire token.
It can be done via `npx hardhat run scripts/drop-tokens.js --network sepolia` command in terminal.

Here are addresses of contracts:
Shire - 0x6df8FFbFF0726c372892eae72CE1993dB159CA22
Bucket - 0x50542D49bB36dBC410cC21308BFA1eF3922B9dF6