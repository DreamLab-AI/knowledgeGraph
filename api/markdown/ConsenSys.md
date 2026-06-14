public:: true

# ConsenSys
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:12ee0b989ece4405a7711d06cdea6d474ac0388c9439e0381c7e2b3aa200a916",
  "@type": "Page",
  "vc:slug": "consen-sys",
  "title": "ConsenSys",
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
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ConsenSys"
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
  "@id": "urn:ngm:class:consen-sys",
  "@type": "Class",
  "label": "ConsenSys",
  "definition": "ConsenSys is a Brooklyn-founded blockchain software company, established in 2014 by Ethereum co-founder Joseph Lubin, that builds developer tooling, infrastructure, and end-user products for the Ethereum ecosystem. Its product portfolio spans the MetaMask browser wallet, the Infura node-as-a-service API network, the Truffle and Hardhat-adjacent development suite, and the Linea zkEVM Layer 2 network. ConsenSys acts as a principal driver of Ethereum protocol adoption by providing the production-grade infrastructure on which the majority of decentralised application front-ends depend. The company also engages in enterprise blockchain consulting and contributes to Ethereum standards through active participation in the Ethereum Foundation and EIP processes.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:metamask",
        "label": "MetaMask"
      },
      {
        "@id": "urn:ngm:class:infura",
        "label": "Infura"
      },
      {
        "@id": "urn:ngm:class:linea",
        "label": "Linea"
      },
      {
        "@id": "urn:ngm:class:truffle-suite",
        "label": "Truffle Suite"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
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
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposal"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK Rollup"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:json-rpc",
        "label": "JSON-RPC"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:coinbase",
        "label": "Coinbase"
      },
      {
        "@id": "urn:ngm:class:alchemy",
        "label": "Alchemy"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:enterprise-blockchain",
        "label": "Enterprise Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-asset-custody",
        "label": "Digital Asset Custody"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethereum-foundation",
        "label": "Ethereum Foundation"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:blockchain-software-company",
        "label": "Blockchain Software Company"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:consensys-ag",
      "label": "ConsenSys AG"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:consen-sys:7196d7446932",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:12ee0b989ece4405a7711d06cdea6d474ac0388c9439e0381c7e2b3aa200a916"
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
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
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
  - ConsenSys is a blockchain software company founded in 2014 by [[Ethereum]] co-founder Joseph Lubin, focused on building production-grade developer tools, node infrastructure, and consumer-facing products for the Ethereum ecosystem. It is most widely known for [[MetaMask]] (the dominant browser-extension and mobile cryptocurrency wallet) and [[Infura]] (a JSON-RPC node-access service that proxies Ethereum and IPFS for millions of decentralised applications). Through these products ConsenSys forms a critical layer of [[Web3]] infrastructure that underpins access to [[Decentralised Finance]], [[Non-Fungible Token]] markets, and [[Decentralised Application]] front-ends globally.

- ### Overview
  - ConsenSys was incorporated in Brooklyn, New York, and has grown into one of the largest private companies in the Ethereum ecosystem.
  - The company's strategic position is dual-sided: it sells developer infrastructure subscriptions (Infura, Diligence audit tooling) to enterprises and startups, while simultaneously operating consumer products (MetaMask) used by tens of millions of end-users.
  - ConsenSys has both contributed to and benefited from the growth of the [[Ethereum]] base layer, holding a commercially incentivised stake in Ethereum's adoption that distinguishes it from the non-profit [[Ethereum Foundation]].
  - The company has undergone significant corporate restructuring, including spinning off its enterprise division (formerly ConsenSys Enterprise / Quorum) into a separate entity (Consensys Software Inc. vs ConsenSys AG), and has faced strategic tension between consumer product growth and enterprise consulting.
  - Funding rounds from major banks and sovereign entities have reinforced ConsenSys's role as a bridge between traditional finance and [[Decentralised Finance]].

- ### Key Components
  - **[[MetaMask]]** — The flagship browser extension and mobile wallet; the primary interface through which users interact with [[Ethereum Virtual Machine]] compatible chains and sign [[Smart Contract]] transactions.
  - **[[Infura]]** — A node-as-a-service platform providing [[JSON-RPC]] API access to Ethereum mainnet, testnets, and [[IPFS]], relied upon by the majority of production DApp backends.
  - **[[Linea]]** — A zkEVM [[Layer 2 Scaling]] network developed by ConsenSys using [[ZK Rollup]] technology, offering lower transaction fees while inheriting Ethereum security.
  - **[[Truffle Suite]]** — A development framework and testing suite for [[Solidity]] smart contract compilation, migration, and testing (now largely superseded in community usage by Hardhat, though still maintained).
  - **ConsenSys Diligence** — A smart contract security audit service, producing audit reports that have become a de-facto standard for high-value protocol launches.
  - **Quorum (enterprise)** — A permissioned [[Enterprise Blockchain]] fork of the Ethereum client, originally built for J.P. Morgan; later divested and transferred to the Hyperledger Foundation.

- ### Applications / Use Cases
  - **DApp access layer** — MetaMask and Infura together act as the predominant gateway allowing end-users and developers to read/write to [[Decentralised Application]] state without running their own [[Ethereum]] node.
  - **DeFi interaction** — MetaMask wallet signatures enable users to interact with [[Decentralised Finance]] protocols (Uniswap, Aave, Compound) without custodial intermediaries.
  - **NFT minting and trading** — MetaMask wallet integration is embedded in all major [[Non-Fungible Token]] marketplaces (OpenSea, Blur), making it the default signing environment for NFT transactions.
  - **Enterprise private networks** — Quorum enabled financial institutions to run permissioned consortium chains using familiar [[Ethereum Virtual Machine]] tooling before the product was divested.
  - **Layer 2 deployment** — Linea allows projects to deploy existing [[Solidity]] contracts to a cheaper execution environment with ZK proof-based finality bridging back to Ethereum mainnet.
  - **Developer onboarding** — The Truffle framework and ConsenSys Academy courses lowered the entry barrier to [[Smart Contract]] development, seeding the broader Ethereum developer ecosystem.
  - **[[Decentralised Identity]]** — ConsenSys has contributed to identity standards via uPort (now Veramo), a self-sovereign identity framework built on Ethereum [[Decentralised Identity]] primitives.

- ### Relationships
  - hasPart:: [[MetaMask]]
  - hasPart:: [[Infura]]
  - hasPart:: [[Linea]]
  - hasPart:: [[Truffle Suite]]
  - requires:: [[Ethereum]]
  - requires:: [[Proof of Stake]]
  - enables:: [[Web3]]
  - enables:: [[Decentralised Application]]
  - enables:: [[Decentralised Finance]]
  - implements:: [[Ethereum Improvement Proposal]]
  - implements:: [[ZK Rollup]]
  - uses:: [[Smart Contract]]
  - uses:: [[JSON-RPC]]
  - uses:: [[Solidity]]
  - supports:: [[Ethereum Virtual Machine]]
  - supports:: [[Non-Fungible Token]]
  - supports:: [[Decentralised Identity]]
  - contrastsWith:: [[Coinbase]]
  - contrastsWith:: [[Alchemy]]
  - bridges-to:: [[Enterprise Blockchain]]
  - bridges-to:: [[Digital Asset Custody]]
  - relatedTo:: [[Ethereum Foundation]]
  - relatedTo:: [[Layer 2 Scaling]]
  - relatedTo:: [[Token Standard]]

- ### Standards & Context
  - ConsenSys participates actively in the [[Ethereum Improvement Proposal]] process, having authored and implemented EIPs that affect wallet standards (notably EIP-1193, the Ethereum Provider JavaScript API, and EIP-712, typed structured data signing used by MetaMask).
  - The company contributes to [[Token Standard]] discussions including ERC-20, ERC-721, and ERC-4337 (account abstraction), which reshape how wallets like MetaMask handle transactions.
  - ConsenSys Diligence publishes audit methodologies that have influenced informal security standards across the [[Decentralised Finance]] space.
  - Linea participates in the ZK-EVM specification discussions coordinated through the [[Ethereum Foundation]] and Polygon Labs, advancing [[ZK Rollup]] interoperability.
  - The company is subject to regulatory scrutiny from the SEC (regarding MetaMask Swaps and staking features) and has been an active litigant defending against regulatory overreach, positioning it at the intersection of technology and [[Governance]] for digital assets.

- ### Provenance
  - sources:: ConsenSys official product documentation; Ethereum EIP repository; public funding announcements; SEC litigation filings (public domain)
  - updated:: 2026-06-13
