'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ConnectButton, useActiveAccount, useActiveWallet, useConnect, useDisconnect } from "thirdweb/react";
import { client } from "../client";
import { optimism } from "thirdweb/chains";
import { createWallet } from "thirdweb/wallets";

const AccountAbstractionPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="Account Abstraction"
                subtitle="Learn how to implement account abstraction with ConnectButton."
            />
            <CustomFlows />
            <Footer />
        </div>
    );
};

function CustomFlows() {
    return (
        <div className="grid gap-4 lg:grid-cols-3 justify-center">
            <DefaultAccountFactory />
            <CustomAccountFactory />
            <CustomAAConnectFlow />
        </div>
    );
}

// Default Account Abstraction with ConnectButton
// Use the default account factory contract
function DefaultAccountFactory() {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p className="text-zinc-300 text-base mb-4 md:mb-4">Default Account Factory</p>
            <ConnectButton
                client={client}
                accountAbstraction={{
                    chain: optimism,
                    sponsorGas: true,
                }}
                showThirdwebBranding={false} // Hide Thirdweb branding
            />
        </div>
    );
}

// Custom Account Abstraction with ConnectButton
// Deploy your own account factory contract
function CustomAccountFactory() {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p className="text-zinc-300 text-base mb-4 md:mb-4">Custom Account Factory</p>
            <ConnectButton
                client={client}
                accountAbstraction={{
                    factoryAddress: "0xB724c771d34dE6f93764D6d8D6924F3108e8d426", // Your custom factory address
                    chain: optimism,
                    sponsorGas: true,
                }}
                showThirdwebBranding={false} // Hide Thirdweb branding
            />
        </div>
    );
}

// Build a custom AA connect flow using Smart Wallet
function CustomAAConnectFlow() {
    // Get active account and wallet
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    // Get connect and disconnect functions
    const { connect } = useConnect({
        client: client,
        accountAbstraction: {
            chain: optimism,
            sponsorGas: true,
        },
    });
    const { disconnect } = useDisconnect();

    // Create smart wallet and connect
    const connectSmartWallet = async () => {
        connect(async () => {
            const wallet = createWallet("smart", {
                factoryAddress: "0xB724c771d34dE6f93764D6d8D6924F3108e8d426", // Use the custom factory address
                chain: optimism,
                sponsorGas: true,
            });
            await wallet.connect({
                client: client,
                chain: optimism,
            });
            return wallet;
        });
    };

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p className="text-zinc-300 text-base mb-4 md:mb-4">Custom AA Connect Flow</p>
            {account && connectedWallet ? (
                <button
                    className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg"
                    onClick={() => disconnect(connectedWallet)}
                >
                    Disconnect
                </button>
            ) : (
                <button
                    className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg"
                    onClick={connectSmartWallet}
                >
                    Connect
                </button>
            )}
        </div>
    );
}

export default AccountAbstractionPage;
