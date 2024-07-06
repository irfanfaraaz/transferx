# Crypto Transfer Tool

## Introduction

The Crypto Transfer Tool is a web application that enables users to make multiple cryptocurrency transfers using a CSV file. This tool leverages Next.js for the frontend, Solidity for the smart contract, Tailwind CSS for styling, and Foundry for smart contract development and testing.

## Features

- **Batch Transfers**: Upload a CSV file containing multiple addresses and amounts for batch cryptocurrency transfers.
- **Smart Contract Integration**: Utilize a Solidity smart contract to handle the transfers securely.
- **User-Friendly Interface**: A responsive and modern UI built with Next.js and styled with Tailwind CSS.
- **Robust Testing**: Smart contracts are thoroughly tested using Foundry.

## Tech Stack

- **Frontend**: Next.js
- **Smart Contracts**: Solidity
- **Styling**: Tailwind CSS
- **Smart Contract Development and Testing**: Foundry

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v18 or later)
- npm or yarn
- Foundry

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://https://github.com/irfanfaraaz/transferx
    cd transferx
    ```

2. **Install frontend dependencies**:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Install Foundry**:

    Follow the instructions on the [Foundry GitHub page](https://github.com/foundry-rs/foundry) to install Foundry.

### Smart Contract Deployment

1. **Compile the smart contracts**:

    ```bash
    forge build
    ```

2. **Deploy the smart contract**:

    Create a script for deploying the smart contract in the `script` directory, then run:

    ```bash
    forge script script/DeployContract.s.sol:DeployContract --broadcast
    ```

    Ensure you have configured your Foundry environment with the necessary RPC URL and private key.

### Running the Application

1. **Start the development server**:

    ```bash
    npm run dev
    ```


2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Prepare the CSV File**:

    The CSV file should have the following format:

    ```csv
    address,amount
    0xAddress1,10
    0xAddress2,20
    0xAddress3,15
    ```

2. **Upload the CSV File**:

    - Navigate to the upload section on the homepage.
    - Click on the "Upload CSV" button and select your CSV file.

3. **Execute Transfers**:

    - After uploading, the application will display the parsed data.
    - Click on "Execute Transfers" to start the batch transfer process.



## Testing

1. **Run Foundry tests**:

    ```bash
    forge test
    ```

2. Ensure all tests pass before deploying the smart contracts.



## Contact

For any questions or inquiries, please contact:

- **Name**: Syed Irfan Faraz
- **GitHub**: [irfanfaraaz](https://github.com/irfanfaraaz)
