public:: true

# Ethereum Name Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d33da262fa1abf030017894eff63ba661149f17e91a8a53e40d888ec2aacf847",
  "@type": "Page",
  "vc:slug": "ethereum-name-service",
  "title": "Ethereum Name Service",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum-smart-contracts",
      "vc:label": "Ethereum Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:identity",
      "vc:label": "Identity"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Name Service"
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
  "@id": "urn:ngm:class:ethereum-smart-contract-platform-name-service",
  "@type": "Class",
  "label": "Ethereum Name Service",
  "definition": "The Ethereum Name Service (ENS) is a decentralised, open-source naming protocol deployed on Ethereum that maps human-readable names (e.g. 'alice.eth') to machine-readable identifiers including wallet addresses, content hashes, and arbitrary metadata stored on-chain. It operates through a hierarchy of smart contracts — a central registry recording ownership and resolver assignments, and resolver contracts that translate names to resources according to standardised ERC specifications. ENS names are minted as ERC-721 non-fungible tokens, granting cryptographic ownership without reliance on a centralised registrar, and extending DNS-compatible reverse resolution so on-chain addresses can be presented as readable identities. The protocol has become the dominant blockchain naming infrastructure on Ethereum, with millions of registered names and integrations across wallets, browsers, and decentralised applications.",
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
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:web3-wallet",
        "label": "Web3 Wallet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-137",
        "label": "ERC-137"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:domain-name-system",
        "label": "Domain Name System"
      },
      {
        "@id": "urn:ngm:class:unstoppable-domains",
        "label": "Unstoppable Domains"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposal"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-foundation",
        "label": "Ethereum Foundation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ens",
      "label": "ENS"
    }
  ],
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-name-service:ecc5374efda7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d33da262fa1abf030017894eff63ba661149f17e91a8a53e40d888ec2aacf847"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contracts]]",
      "resolved": "urn:visionflow:linked:ethereum-smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity]]",
      "resolved": "urn:visionflow:linked:identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - The Ethereum Name Service (ENS) is a decentralised, permissionless naming protocol built on [[Ethereum]] that translates human-readable labels — such as 'alice.eth' — into machine-readable identifiers including wallet addresses, [[IPFS]] content hashes, and arbitrary on-chain metadata. Names are registered as [[Non-Fungible Token]] assets governed by [[Smart Contract]] logic, granting cryptographic ownership without a central registrar, and enabling a portable, composable layer of on-chain [[Decentralised Identity]].

- ### Overview
  - ENS was conceived in 2017 by Nick Johnson at the [[Ethereum Foundation]] and launched on mainnet in May 2017. Its core design goal was to replicate the user-experience of the [[Domain Name System]] while removing the centralised trust anchors that DNS relies upon.
  - Where DNS maps domain names to IP addresses through hierarchical registries controlled by ICANN and registrars, ENS stores all ownership and resolution data on the Ethereum blockchain — making records censorship-resistant, composable with on-chain applications, and transferable as NFTs.
  - In November 2021 the protocol transitioned to community governance via the ENS DAO, a [[Decentralised Autonomous Organisation]] using the ENS ERC-20 governance token, placing future protocol upgrades and treasury allocation in the hands of name holders and delegates.
  - ENS operates at the intersection of [[Blockchain]] infrastructure, [[Decentralised Identity]], and naming standards, functioning as a critical piece of Web3 plumbing for wallets, browsers, and decentralised applications.

- ### Key Components
  - **Registry Contract**
    - The root registry is a single [[Smart Contract]] that records, for every registered name: the owner's address, the address of the assigned resolver contract, and the TTL (time-to-live) for caching.
    - All name lookups begin at the registry to discover which resolver contract is authoritative for a given name.
  - **Resolver Contracts**
    - Resolver contracts implement standardised interfaces defined in [[ERC-137]] and successor EIPs to return records for a name — such as [[Public Key Cryptography|public keys]], [[IPFS]] content hashes, text records, and coin-type addresses for non-Ethereum chains.
    - The Public Resolver is the standard implementation provided by the ENS team; custom resolvers allow advanced use cases.
  - **Namehash Algorithm**
    - Because storing arbitrary Unicode strings on-chain is expensive and potentially ambiguous, ENS uses a recursive hashing algorithm called Namehash to convert names into fixed-length 32-byte node identifiers.
    - Namehash produces a deterministic tree of hashes, ensuring that sub-domains relate predictably to their parents without exposing the plaintext name on-chain.
  - **Registrar Contracts**
    - The .eth top-level domain is administered by an [[Ethereum Smart Contracts|auction-and-renewal registrar]] that issues names as [[ERC-721]] NFTs after a registration fee paid in ETH.
    - Registration uses a commit-reveal scheme to prevent front-running: the registrant first submits a hash commitment, waits a block delay, then reveals the desired name.
  - **Reverse Resolution**
    - ENS supports reverse records in the `addr.reverse` sub-tree so that a given Ethereum address can be associated with a primary ENS name, enabling wallets and dApps to display readable names in place of hex addresses.
  - **CCIP-Read (EIP-3668)**
    - Cross-Chain Interoperability Protocol Read allows resolvers to serve records stored off-chain or on other chains, extending ENS beyond Ethereum Layer 1 without sacrificing the on-chain ownership model.
  - **Layer 2 and Off-Chain Names**
    - ENS has extended its architecture to support names resolved from [[Layer 2]] networks (such as Optimism and Base) and off-chain data stores via CCIP-Read, improving scalability and reducing gas costs for sub-domain issuance.

- ### Mechanisms
  - **Name Registration Flow**
    - 1. User submits a hashed commitment transaction to the Registrar.
    - 2. After a mandatory waiting period (minimum 1 minute), user submits a reveal transaction with the desired name and owner address.
    - 3. The Registrar mints an [[ERC-721]] NFT to the owner's address and records the name in the Registry.
    - 4. Owner configures a Resolver contract and sets desired records (ETH address, content hash, text records, etc.).
  - **Name Resolution Flow**
    - 1. Client computes the Namehash of the requested name.
    - 2. Client queries the Registry to retrieve the resolver address for that namehash.
    - 3. Client queries the Resolver for the desired record type.
    - 4. Resolver returns the record, optionally via CCIP-Read for off-chain data.
  - **Governance**
    - The ENS DAO controls the `.eth` registrar, fee parameters, and protocol upgrades through on-chain voting using the ENS governance token distributed to historical name registrants and contributors in November 2021.

- ### Applications and Use Cases
  - **Wallet Addressing**
    - ENS names replace 42-character hex addresses in [[Web3 Wallet]] interfaces, dramatically reducing the risk of copy-paste errors when sending cryptocurrency or tokens.
  - **Decentralised Website Hosting**
    - An ENS name can store an [[IPFS]] or Arweave content hash, enabling resolution of decentralised websites through ENS-aware browsers (e.g. Brave) or gateway services.
  - **Cross-Chain Identity**
    - ENS resolvers can store coin-type addresses for Bitcoin, Litecoin, and other chains, giving a single ENS name the capacity to represent identities across multiple blockchains.
  - **Decentralised Application Integration**
    - [[Decentralised Application|DApps]] use ENS names as human-friendly contract addresses, reducing hard-coded address dependencies and improving upgrade ergonomics.
  - **Verifiable Credentials and Attestations**
    - ENS names serve as anchors for off-chain [[Verifiable Credential]] frameworks and on-chain attestation systems (such as EAS — Ethereum Attestation Service), linking human-readable identities to cryptographic proofs.
  - **DAO and Organisation Identity**
    - Organisations use ENS sub-domains (e.g. `finance.dao.eth`) to organise multi-sig treasuries, governance participants, and operational addresses under a shared namespace.
  - **Email and Messaging**
    - Some messaging protocols use ENS names as identifiers, treating them as decentralised analogues of email addresses to route encrypted communications.
  - **NFT Profiles**
    - ENS names are frequently used as Web3 profile identifiers on social platforms, replacing numeric wallet addresses with memorable handles.

- ### Relationships
  - requires:: [[Ethereum]]
  - requires:: [[Smart Contract]]
  - requires:: [[Non-Fungible Token]]
  - enables:: [[Decentralised Identity]]
  - enables:: [[Human-Readable Address]]
  - enables:: [[Decentralised Application]]
  - enables:: [[Web3 Wallet]]
  - implements:: [[ERC-137]]
  - implements:: [[ERC-721]]
  - uses:: [[Public Key Cryptography]]
  - uses:: [[Namehash Algorithm]]
  - uses:: [[Ethereum Transaction]]
  - contrastsWith:: [[Domain Name System]]
  - contrastsWith:: [[Unstoppable Domains]]
  - contrastsWith:: [[Handshake Protocol]]
  - relatedTo:: [[Decentralised Autonomous Organisation]]
  - relatedTo:: [[IPFS]]
  - relatedTo:: [[Decentralised Identifier]]
  - relatedTo:: [[Ethereum Improvement Proposal]]
  - relatedTo:: [[Reverse Resolution]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[Verifiable Credential]]
  - standardizedBy:: [[Ethereum Foundation]]

- ### Standards & Context
  - **ERC-137** — the foundational ENS specification defining the registry interface and the Namehash algorithm.
  - **ERC-181** — specifies the reverse resolution interface for mapping addresses back to ENS names.
  - **ERC-634** — defines text record storage in ENS resolvers (key-value pairs for URLs, avatars, email, etc.).
  - **ERC-1185** — specifies DNS record storage in ENS, enabling ENS names to serve DNS resource records.
  - **EIP-3668 (CCIP-Read)** — defines the off-chain and cross-chain lookup gateway protocol used for scalable sub-domain resolution.
  - **ENSIP series** — ENS Improvement Proposals govern the protocol's own namespace of standards, supplementing the Ethereum EIP process with ENS-specific specifications.
  - ENS operates under a DAO governance model since November 2021; the ENS Constitution enshrines principles of permissionless access, user ownership, and protocol neutrality.
  - Compared with the [[Domain Name System]], ENS lacks DNSSEC-style trust anchors but gains trustlessness, composability, and censorship resistance through on-chain enforcement.
  - The [[Unstoppable Domains]] and [[Handshake Protocol]] projects provide alternative decentralised naming approaches with different trade-offs in decentralisation, chain integration, and browser support.

- ### Provenance
  - sources:: ENS documentation (docs.ens.domains); ERC-137 (EIP-137); EIP-3668; ENS DAO Constitution; Nick Johnson (ENS creator); Ethereum Foundation
  - updated:: 2026-06-13
