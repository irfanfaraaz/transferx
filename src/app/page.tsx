"use client";

import { useState } from "react";
import { Importer, ImporterField } from "react-csv-importer";
import { ethers, Contract } from "ethers";
import transferXJson from "./transferX.json";
import Welcome from "@/components/Welcome";

const blockchainExplorerUrls = {
    "11155111": "https://sepolia.etherscan.io/tx",
};
export default function Home() {
    const [payments, setPayments] = useState(undefined as any[] | undefined);
    const [sending, setSending] = useState(false);
    const [blockchainExplorer, setBlockchainExplorer] = useState(undefined);
    const [error, setError] = useState(false);
    const [transaction, setTransaction] = useState("");

    const sendPayments = async () => {
        // Connect to metamask
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();

        const { chainId } = await provider.getNetwork();
        setBlockchainExplorer(blockchainExplorerUrls[chainId.toString()]);

        setSending(true);

        const { recipients, amounts, total } = payments?.reduce(
            (acc, val) => {
                acc.recipients.push(val.recipient);
                acc.amounts.push(val.amount);
                acc.total += parseInt(val.amount);
                return acc;
            },
            {
                recipients: [],
                amounts: [],
                total: 0,
            }
        );

        // send payments

        const transferX = new Contract(
            transferXJson.address,
            transferXJson.abi,
            signer
        );

        try {
            const tx = await transferX.send(recipients, amounts, {
                value: total,
            });
            const txReceipt = await tx.wait();
            setTransaction(txReceipt.hash);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    return (
        <>
            <nav className="w-full flex md:justify-start justify-start items-start px-4 pt-4">
                <div className="font-bold text-3xl sm:text-5xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:from-indigo-600 hover:to-cyan-300 hover:cursor-pointer">
                    TransferX
                </div>
            </nav>
            <div className="container  flex justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                    <Welcome />
                    <div className="mt-2">
                        <Importer
                            dataHandler={(rows) => setPayments(rows)}
                            defaultNoHeader={false}
                            restartable={false}
                        >
                            <ImporterField name="recipient" label="recipient" />
                            <ImporterField name="amount" label="amount" />
                            <ImporterField
                                name="currency"
                                label="currency"
                                optional
                            />
                        </Importer>
                    </div>
                    <button
                        className="mt-5 text-white w-full  border-[1px] p-2 border-[#3d4f7c] rounded-full hover:cursor-pointer"
                        onClick={sendPayments}
                        disabled={sending || typeof payments === "undefined"}
                    >
                        Send Payment
                    </button>
                </div>
                {sending && (
                    <div className="mt-4">
                        Payments Processing... Please wait
                    </div>
                )}
                {transaction && (
                    <div className="mt-4">
                        Congrats!!! The payments were sent at{" "}
                        <a
                            href={`${blockchainExplorer}/${transaction}`}
                            target="_blank"
                        >{`${transaction.substr(0, 20)}...`}</a>
                    </div>
                )}
                {error && (
                    <div className="mt-4">
                        Oops... There was a problem. Your payments were not
                        sent. Please try again later.
                    </div>
                )}
            </div>
        </>
    );
}
