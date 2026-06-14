public:: true

# MetaMask
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e39e8f0964b9c7dfe4910b26861d4d7ff1c8bdce5b69a593ca5b6ff165a913af",
  "@type": "Page",
  "vc:slug": "meta-mask",
  "title": "MetaMask",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:digital-wallet",
      "vc:label": "Digital Wallet"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MetaMask"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:meta-mask",
  "@type": "Class",
  "label": "MetaMask",
  "definition": "MetaMask is a self-custodial software cryptocurrency wallet, distributed as a browser extension (Chrome, Firefox, Brave, Edge) and mobile application (iOS and Android), that enables users to manage Ethereum and EVM-compatible blockchain assets directly in the browser without handing custody of private keys to a third party. It implements the EIP-1193 provider standard to expose a JavaScript API that decentralised applications (dApps) use to request signatures and transactions, making it the de facto gateway through which most users access Web3 services. MetaMask stores an encrypted HD wallet (BIP-32/BIP-39) locally in the browser's secure storage and signs all transactions client-side before broadcasting them to the chosen network via JSON-RPC. Developed by ConsenSys and first released in 2016, it is the most widely adopted non-custodial wallet by active monthly users.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-wallet",
      "label": "Digital Wallet"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:evm-compatible-blockchain",
        "label": "EVM-Compatible Blockchain"
      },
      {
        "@id": "urn:ngm:class:json-rpc",
        "label": "JSON-RPC"
      },
      {
        "@id": "urn:ngm:class:bip-39",
        "label": "BIP-39"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:nft-trading",
        "label": "NFT Trading"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eip-1193",
        "label": "EIP-1193"
      },
      {
        "@id": "urn:ngm:class:bip-32",
        "label": "BIP-32"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hierarchical-deterministic-wallet",
        "label": "Hierarchical Deterministic Wallet"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:token-standard-erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:token-standard-erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:custodial-wallet",
        "label": "Custodial Wallet"
      },
      {
        "@id": "urn:ngm:class:coinbase-wallet",
        "label": "Coinbase Wallet"
      },
      {
        "@id": "urn:ngm:class:trust-wallet",
        "label": "Trust Wallet"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      },
      {
        "@id": "urn:ngm:class:network-rpc-endpoint",
        "label": "Network RPC Endpoint"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:metamask-wallet",
      "label": "MetaMask Wallet"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:meta-mask:b7b0a251394e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e39e8f0964b9c7dfe4910b26861d4d7ff1c8bdce5b69a593ca5b6ff165a913af"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:linked:digital-wallet",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - MetaMask is a self-custodial [[Digital Wallet]] and browser-based gateway to [[Web3]], enabling users to manage [[Ethereum]] and [[EVM-Compatible Blockchain]] assets, sign transactions, and interact with [[Decentralised Application]]s without surrendering private-key control to a third party. It bridges the familiar Web 2.0 browser environment with on-chain [[Smart Contract]] infrastructure through a standardised JavaScript provider interface ([[EIP-1193]]).

- ### Overview
  - MetaMask was created by ConsenSys and first released in 2016 as a browser extension that removed the barrier of running a full [[Ethereum]] node to interact with [[Decentralised Application]]s.
  - Its core value proposition is [[Self-Custody]]: private keys are generated and stored client-side, encrypted by the user's password, and never transmitted to external servers.
  - The wallet derives accounts from a 12- or 24-word [[Seed Phrase]] following the [[BIP-39]] mnemonic standard and derives child keys using [[BIP-32]] hierarchical deterministic (HD) derivation.
  - MetaMask injects a `window.ethereum` object into every web page, conforming to [[EIP-1193]], which dApps use to request account access, sign messages, and broadcast transactions.
  - Transactions are signed locally with [[Elliptic Curve Cryptography]] (secp256k1) and submitted to the network via [[JSON-RPC]] calls (e.g., `eth_sendRawTransaction`).
  - Beyond [[Ethereum]] mainnet, users can add any [[EVM-Compatible Blockchain]] (Polygon, BNB Chain, Avalanche, Arbitrum, Optimism, etc.) by supplying a custom [[Network RPC Endpoint]], making MetaMask network-agnostic.
  - The mobile application (iOS and Android) replicates the extension experience, including WalletConnect support for scanning QR codes from desktop dApps.

- ### Key Components
  - **HD Wallet Engine**
    - Implements [[BIP-32]] key derivation from a root entropy encoded as a [[Seed Phrase]] per [[BIP-39]].
    - Derives multiple [[Ethereum]] accounts from a single seed, enabling key hygiene without multiple backups.
  - **EIP-1193 Provider**
    - Exposes `window.ethereum` as the canonical Web3 provider interface.
    - Handles `eth_requestAccounts`, `eth_sendTransaction`, `personal_sign`, `eth_signTypedData_v4` and other JSON-RPC methods.
    - Implements [[EIP-1559]] fee-market awareness for dynamic base-fee and priority-fee estimation.
  - **Transaction Signing & Broadcasting**
    - All signing occurs locally; the extension bundles `ethereumjs-tx` and `@metamask/eth-sig-util`.
    - Raw signed transactions are broadcast to the user-selected RPC endpoint.
    - [[Gas Fee]] estimation pulls from the connected network and allows manual override.
  - **Network Manager**
    - Maintains a list of network configurations (chain ID, RPC URL, currency symbol, block explorer).
    - Supports simultaneous connection to multiple chains; users switch chains via the UI or programmatically via `wallet_switchEthereumChain` (EIP-3326).
  - **Token & NFT Management**
    - Detects and displays [[ERC-20]] fungible tokens and [[ERC-721]] / ERC-1155 non-fungible tokens ([[NFT Trading]]).
    - Token lists (e.g., Uniswap default token list) are queried to populate metadata automatically.
  - **Hardware Wallet Integration**
    - Supports [[Hardware Wallet]] devices (Ledger, Trezor, Lattice1) via USB/HID, allowing offline key storage while using MetaMask as the UI.
    - Hardware accounts appear alongside software accounts in the same interface.
  - **Snaps (Extensibility Platform)**
    - MetaMask Snaps (introduced experimentally from 2022, generally available 2023) allow third-party JavaScript plugins to extend wallet functionality.
    - Snaps enable non-EVM chain support (Bitcoin, Solana, Cosmos), custom UI dialogs, transaction insights, and notification subscriptions.
  - **MetaMask Institutional (MMI)**
    - Enterprise-grade variant offering custodial integrations, transaction compliance workflows, and multi-signature policy enforcement for institutional [[Decentralised Finance]] desks.

- ### Applications and Use Cases
  - **[[Decentralised Finance]] (DeFi)**
    - Connecting to AMM protocols (Uniswap, Curve, Balancer) to swap tokens, provide liquidity, and claim yield.
    - Borrowing and lending on Aave, Compound, and Maker using MetaMask-signed collateralisation transactions.
  - **[[NFT Trading]] and Minting**
    - Purchasing, minting, and transferring [[ERC-721]] and ERC-1155 tokens on marketplaces such as OpenSea and Blur.
    - Signing EIP-712 typed data for off-chain order books (Seaport protocol).
  - **[[Decentralised Application]] Onboarding**
    - Used as the primary authentication and signing mechanism by most Ethereum-based dApps (games, DAOs, DeSoc platforms).
    - EIP-4361 (Sign-In with Ethereum) enables Web2-style login via MetaMask signature, bridging to [[Decentralised Identity]].
  - **Cross-Chain Bridging**
    - MetaMask's integrated bridge aggregator (powered by LI.FI, Socket, and other routers) enables cross-chain asset transfers directly in the UI across [[EVM-Compatible Blockchain]]s.
  - **Governance Participation**
    - Signing on-chain or off-chain (Snapshot) governance votes for DAOs managing [[Decentralised Finance]] protocols.
  - **Developer Testing**
    - Extension can be pointed at local Hardhat / Foundry / Ganache networks, making it the standard developer tool for testing [[Smart Contract]] interactions in the browser.
  - **Institutional DeFi**
    - MMI variant used by crypto hedge funds and prime brokers requiring compliance-grade transaction tagging and custodial key management integration.

- ### Relationships
  - subClassOf:: [[Digital Wallet]]
  - requires:: [[Ethereum]]
  - requires:: [[EVM-Compatible Blockchain]]
  - requires:: [[JSON-RPC]]
  - requires:: [[BIP-39]]
  - enables:: [[Web3]]
  - enables:: [[Decentralised Application]]
  - enables:: [[NFT Trading]]
  - enables:: [[Decentralised Finance]]
  - implements:: [[EIP-1193]]
  - implements:: [[BIP-32]]
  - uses:: [[Hierarchical Deterministic Wallet]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Seed Phrase]]
  - supports:: [[Self-Custody]]
  - supports:: [[ERC-20]]
  - supports:: [[ERC-721]]
  - supports:: [[Hardware Wallet]]
  - contrastsWith:: [[Custodial Wallet]]
  - contrastsWith:: [[Coinbase Wallet]]
  - contrastsWith:: [[Trust Wallet]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - relatedTo:: [[Smart Contract]]
  - relatedTo:: [[Gas Fee]]
  - relatedTo:: [[Network RPC Endpoint]]

- ### Standards and Context
  - **[[EIP-1193]]** — Ethereum Provider JavaScript API: the interface MetaMask exposes to dApps. Ratified as an EIP to ensure wallet interoperability.
  - **[[EIP-1559]]** — London hard fork fee model (base fee + priority fee) supported natively in MetaMask's fee estimation UI.
  - **EIP-712** — Typed structured data signing, used for Seaport NFT orders, permit signatures, and off-chain governance; supported by MetaMask's `eth_signTypedData_v4`.
  - **EIP-3326 / EIP-3085** — Standards for switching and adding Ethereum chains programmatically (`wallet_switchEthereumChain`, `wallet_addEthereumChain`).
  - **EIP-4361** — Sign-In with Ethereum, enabling MetaMask as an authentication provider for Web2-facing applications, bridging to [[Decentralised Identity]] frameworks.
  - **[[BIP-32]] / [[BIP-39]] / BIP-44** — Bitcoin Improvement Proposals defining the HD wallet key derivation and mnemonic encoding that MetaMask uses for account generation.
  - **Regulatory context** — MetaMask is a non-custodial software wallet; as of mid-2024 most jurisdictions have not classified it as a regulated custodian, but evolving frameworks (EU MiCA, US DCCPA drafts) continue to probe the custody boundary for self-hosted wallets.
  - **ConsenSys** — Parent company, also develops Infura (default JSON-RPC provider), Linea (zkEVM L2), and Diligence (smart contract auditing), giving MetaMask deep integration with the broader [[Ethereum]] infrastructure stack.

- ### Security Considerations
  - MetaMask's security model is only as strong as the browser environment: malicious extensions, clipboard hijackers, and phishing sites impersonating dApps are persistent attack vectors.
  - The [[Seed Phrase]] must never be entered anywhere except the MetaMask UI itself; phishing sites routinely prompt users to "restore" wallets to steal keys.
  - Hardware wallet integration ([[Hardware Wallet]]) is the recommended mitigation for high-value accounts, as it moves signing off the browser-connected attack surface.
  - MetaMask's Content Security Policy and permission system isolate the extension from page scripts, but the `window.ethereum` injection surface is still accessible to page JavaScript after the user connects.
  - [[Zero-Knowledge Proof]]-based approaches (e.g., zkSNARK-based wallet abstraction) are an active research direction to reduce on-chain key exposure.

- ### Provenance
  - sources:: ConsenSys MetaMask documentation; Ethereum Improvement Proposals (EIPs 1193, 1559, 712, 3326, 4361); BIP-32/39 specifications; MetaMask Snaps developer docs
  - updated:: 2026-06-13
