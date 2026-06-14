public:: true

# Blockstream
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df2d843cc074c5af9ee6f05deff37154b3472e432234a0d790de67174e6c2557",
  "@type": "Page",
  "vc:slug": "blockstream",
  "title": "Blockstream",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Blockstream"
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
  "@id": "urn:ngm:class:blockstream",
  "@type": "Class",
  "label": "Blockstream",
  "definition": "Blockstream is a Bitcoin-focused technology company founded in 2014 that develops open-source infrastructure and commercial products for the Bitcoin ecosystem, including the Liquid Network federated sidechain, c-lightning (now Core Lightning), and satellite-based blockchain distribution via Blockstream Satellite. The company is led by co-founders including Adam Back (inventor of Hashcash) and is a major contributor to Bitcoin Core protocol development. Blockstream's work spans cryptographic research, Layer 2 payment channels, hardware security modules, and institutional-grade Bitcoin financial products such as Blockstream AMP (Asset Management Platform).",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-infrastructure",
      "label": "Blockchain Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:liquid-network",
        "label": "Liquid Network"
      },
      {
        "@id": "urn:ngm:class:core-lightning",
        "label": "Core Lightning"
      },
      {
        "@id": "urn:ngm:class:blockstream-satellite",
        "label": "Blockstream Satellite"
      },
      {
        "@id": "urn:ngm:class:blockstream-amp",
        "label": "Blockstream AMP"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:confidential-transactions",
        "label": "Confidential Transactions"
      },
      {
        "@id": "urn:ngm:class:federated-peg",
        "label": "Federated Peg"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bitcoin-core",
        "label": "Bitcoin Core"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:elements-project",
        "label": "Elements Project"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hashcash",
        "label": "Hashcash"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      },
      {
        "@id": "urn:ngm:class:satellite-communication",
        "label": "Satellite Communication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin-core",
        "label": "Bitcoin Core"
      },
      {
        "@id": "urn:ngm:class:open-source-development",
        "label": "Open Source Development"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-asset-custody",
        "label": "Digital Asset Custody"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:payment-channel-network",
        "label": "Payment Channel Network"
      },
      {
        "@id": "urn:ngm:class:multisig",
        "label": "Multisig"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:blockstream-inc",
      "label": "Blockstream Inc"
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
  "@id": "urn:visionflow:annotation:link-resolutions:blockstream:cd81564821b2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df2d843cc074c5af9ee6f05deff37154b3472e432234a0d790de67174e6c2557"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
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
  - Blockstream is a Bitcoin-focused technology company founded in 2014, led by cryptographer [[Adam Back]] (inventor of [[Hashcash]]), that builds open-source [[Blockchain Infrastructure]] and commercial products extending the [[Bitcoin]] ecosystem. Its most significant contribution is the [[Liquid Network]], a [[Sidechain]] enabling faster settlement and [[Confidential Transactions]] for exchanges and institutions. Blockstream is also a principal author of [[Core Lightning]], one of the dominant [[Lightning Network]] implementations, and funds significant ongoing contributions to [[Bitcoin Core]] development. The company's foundational thesis is that [[Bitcoin]] is the singular sound monetary base layer and that all valuable additional functionality should be layered on top via [[Layer 2 Scaling]] and federated sidechain architectures rather than alternative chains.

- ### Overview
  - #### Origins and Philosophy
    - Blockstream emerged from early academic work on [[Payment Channel Network]] theory and sidechain architecture, publishing the influential "Enabling Blockchain Innovations with Pegged Sidechains" whitepaper in 2014. This paper introduced the concept of [[Federated Peg]] mechanisms allowing assets to move between [[Bitcoin]] and parallel chains without modifying the core Bitcoin protocol.
    - Unlike most blockchain companies that build on alternative chains or create new tokens, Blockstream's design philosophy holds that [[Bitcoin]] already provides the only credible decentralised monetary base layer, and that the proper route to scalability and feature richness is modular layers above it.
    - The company employs many of the most prominent [[Bitcoin Core]] contributors, creating a complex relationship between the company and the open-source project. Blockstream does not control Bitcoin Core but funds substantial contributor time, influencing the pace and direction of protocol research.
    - Blockstream has been both celebrated for its rigorous [[Cryptographic Hash Function]] and [[Schnorr Signature]] research and criticised by some segments of the Bitcoin community for being perceived as influential over the protocol's development roadmap.
  - #### Strategic Position
    - Blockstream operates at the intersection of open-source research, enterprise infrastructure, and Bitcoin financial services. Revenue streams include Liquid Network membership fees, Blockstream Mining hosting, Jade hardware wallet sales, and Blockstream AMP enterprise licensing.
    - The company is a vehicle for monetising Bitcoin infrastructure in ways that align with, rather than compete with, the base layer — a deliberate contrast to "altcoin" approaches.

- ### Key Components
  - #### Liquid Network
    - The [[Liquid Network]] is a [[Federated Peg]] [[Sidechain]] built on the [[Elements Project]] open-source platform. It is operated by a federation of exchanges, custodians, and financial institutions acting as "functionaries" who co-sign block production using threshold [[Multisig]] cryptography.
    - Liquid enables [[Confidential Transactions]], meaning transaction amounts and asset types are cryptographically hidden from non-participants using [[Pedersen Commitment]] schemes and range proofs, providing a meaningful privacy improvement for institutional participants.
    - The chain supports Issued Assets — representing L-BTC (pegged Bitcoin), L-USDT (pegged stablecoins), tokenised equities, and other financial instruments — alongside [[Schnorr Signature]] aggregation for efficient multi-party signing.
    - Settlement finality on Liquid is approximately two minutes, compared to Bitcoin's probabilistic finality spread over multiple confirmations. This deterministic finality is valuable for exchanges managing intraday settlement risk.
    - The two-way peg mechanism requires that funds moving from [[Bitcoin]] to Liquid be locked in a multisig address controlled by Liquid functionaries. This introduces a federation trust assumption absent from [[Bitcoin]] itself.
    - Liquid supports [[Taproot]] and [[Schnorr Signature]] features ahead of or contemporaneously with their activation on Bitcoin mainnet, allowing real-world production testing.
  - #### Core Lightning
    - [[Core Lightning]] (formerly c-lightning) is Blockstream's implementation of the [[Lightning Network]] protocol, written in C. It is one of the three major interoperable implementations alongside LND (Lightning Labs) and Eclair (ACINQ).
    - Core Lightning emphasises a plugin-based architecture enabling extensibility without modifying the core daemon. Each plugin communicates via a JSON-RPC interface, making it the implementation of choice for many developers building custom [[Payment Channel Network]] tooling, submarine swaps, and liquidity services.
    - The implementation's minimal-trust design and modularity have made it popular in research and production deployments where operators need fine-grained control over routing, fee policies, and channel management.
    - Core Lightning participates in the BOLT (Basis of Lightning Technology) specification process, contributing to cross-implementation interoperability standards.
  - #### Blockstream Satellite
    - [[Blockstream Satellite]] broadcasts the full [[Bitcoin]] blockchain continuously via geosynchronous satellites covering most of the globe, allowing nodes to synchronise without any internet connection and providing censorship-resistant access to the timechain.
    - The service uses [[Satellite Communication]] infrastructure primarily for downlink (receive-only), meaning users can validate the blockchain entirely without an ISP while still relying on the internet or radio for broadcasting their own transactions.
    - Satellite is particularly significant for Bitcoin's resilience properties — it ensures that even in scenarios of widespread internet censorship or disruption, full node operators can maintain awareness of the longest valid chain.
    - The service leverages the Blockstream Satellite API, which allows anyone to pay a small Bitcoin fee (via [[Lightning Network]]) to broadcast arbitrary data to the satellite network, enabling a censorship-resistant global messaging layer.
  - #### Blockstream AMP
    - [[Blockstream AMP]] (Asset Management Platform) is an enterprise product enabling regulated issuers to manage tokenised assets on the [[Liquid Network]], with configurable transfer restrictions, investor whitelisting, and compliance controls.
    - AMP is designed for security token offerings, fund tokenisation, and regulated digital instruments that require issuer control over secondary market transfers — a feature absent from permissionless [[Bitcoin]] transfers.
    - The platform provides an API layer abstracting the complexity of Liquid asset issuance, allowing financial institutions to integrate tokenised asset issuance without deep blockchain expertise.
  - #### Elements Project
    - The [[Elements Project]] is the open-source blockchain platform on which [[Liquid Network]] is built. It extends [[Bitcoin Core]] with additional opcodes, [[Confidential Transactions]], Issued Assets, and a generalised scripting environment.
    - Elements serves as a staging ground for features proposed to [[Bitcoin Core]] via [[BIP]] processes, allowing live testing in a production federated environment before broader adoption. Several features active on Liquid have subsequently been proposed or activated on Bitcoin mainnet.
    - Third parties can deploy their own Elements-based chains, making it a framework for building private or consortium ledgers with Bitcoin-compatible transaction semantics.
  - #### Jade Hardware Wallet
    - Blockstream Jade is a fully open-source [[Hardware Security Module]] and hardware wallet designed for [[Bitcoin]] and [[Liquid Network]] asset custody.
    - Jade supports air-gapped operation via QR-code signing, watch-only wallet configuration, and a novel "blind oracle" anti-extraction PIN protection scheme that avoids storing the private key on the device in plaintext.
    - Being fully open-source (hardware design, firmware, and companion software) distinguishes Jade from most competing hardware wallets, which rely on proprietary secure elements.
  - #### Blockstream Mining
    - Blockstream Mining is an industrial [[Proof of Work]] hash rate hosting service operating large-scale mining facilities. It provides hashrate hosting for institutional clients and contributes to Bitcoin mining infrastructure research.
    - The service includes a Mining Note product that enables accredited investors to gain exposure to Bitcoin mining economics without operating hardware directly, bridging [[Digital Asset Custody]] and yield-generating infrastructure investment.

- ### Applications and Use Cases
  - **Exchange settlement**: Liquid allows exchanges to transfer [[Bitcoin]] and other assets between one another with two-minute deterministic finality, reducing counterparty exposure and overnight settlement risk compared to on-chain transactions with probabilistic confirmation.
  - **Security token issuance**: Via [[Blockstream AMP]], regulated institutions issue tokenised bonds, funds, and equity on [[Liquid Network]] with built-in transfer restrictions enforced at the protocol level, enabling compliant secondary trading.
  - **Privacy-preserving institutional payments**: [[Confidential Transactions]] on Liquid hide transaction amounts and asset types, valuable for institutional OTC desks unwilling to broadcast trade sizes to public observers on the [[Bitcoin]] base layer.
  - **Off-grid and censorship-resistant nodes**: [[Blockstream Satellite]] allows full node operators in regions with restricted or surveilled internet access to receive the complete blockchain via satellite downlink, maintaining network participation without an internet service provider.
  - **Lightning developer tooling**: Core Lightning's plugin system enables Lightning service providers to build custom routing policies, liquidity management, submarine swaps, and [[Decentralised Finance]] applications anchored to [[Bitcoin]] without forking the node software.
  - **Institutional mining exposure**: Blockstream Mining's hosted hashrate services and Mining Note financial products allow institutional capital to access [[Proof of Work]] economics with operational and custody risk managed by Blockstream.
  - **Research pipeline to Bitcoin mainnet**: Features developed and tested on the [[Elements Project]] / Liquid ecosystem (e.g. [[Schnorr Signature]], [[Taproot]], [[Musig]]) provide a production test bed that informs and accelerates [[BIP]] proposals for Bitcoin Core.

- ### Relationships
  - hasPart:: [[Liquid Network]]
  - hasPart:: [[Core Lightning]]
  - hasPart:: [[Blockstream Satellite]]
  - hasPart:: [[Blockstream AMP]]
  - requires:: [[Bitcoin]]
  - requires:: [[Proof of Work]]
  - enables:: [[Lightning Network]]
  - enables:: [[Sidechain]]
  - enables:: [[Confidential Transactions]]
  - enables:: [[Federated Peg]]
  - dependsOn:: [[Bitcoin Core]]
  - dependsOn:: [[Cryptographic Hash Function]]
  - implements:: [[Elements Project]]
  - implements:: [[Schnorr Signature]]
  - implements:: [[Taproot]]
  - uses:: [[Hashcash]]
  - uses:: [[Hardware Security Module]]
  - uses:: [[Satellite Communication]]
  - supports:: [[Open Source Development]]
  - contrastsWith:: [[Ethereum]]
  - bridgesTo:: [[Digital Asset Custody]]
  - bridgesTo:: [[Decentralised Finance]]
  - relatedTo:: [[Layer 2 Scaling]]
  - relatedTo:: [[Payment Channel Network]]
  - relatedTo:: [[Multisig]]

- ### Standards and Context
  - #### Bitcoin Improvement Proposals
    - Blockstream has contributed directly to several [[BIP]] processes including the cryptographic specifications underpinning [[Taproot]] (BIP 340, 341, 342), [[Schnorr Signature]] formalisation, and [[Musig]] multi-party signing protocols for threshold signatures.
    - The [[Elements Project]] serves as a staging ground for features before BIP-level specification on [[Bitcoin Core]], providing an empirical production test environment in place of purely theoretical analysis.
  - #### Lightning Network BOLT Standards
    - Core Lightning participates actively in BOLT (Basis of Lightning Technology) specification development, the set of interoperability standards governing how [[Lightning Network]] implementations communicate channel state, routing, and payment encoding.
    - Blockstream has contributed BOLT proposals including dual-funded channels, interactive transaction construction, and splicing — features that improve capital efficiency in [[Payment Channel Network]] deployments.
  - #### Federation Model and Trust Assumptions
    - Liquid's functionary model is explicitly not trustless in the same sense as [[Bitcoin]] — it relies on a federation quorum (typically 11-of-15 or similar threshold) to produce blocks and process peg-in/peg-out requests.
    - This positions Liquid within the spectrum between fully custodial services and fully decentralised chains, a trade-off Blockstream acknowledges as appropriate for the institutional settlement use case where counterparties already accept credit risk.
    - The model is distinct from [[Ethereum]] layer-2 approaches such as rollups that attempt to inherit base-layer security properties via cryptographic proofs rather than federation trust.
  - #### Open Source Governance
    - Blockstream's relationship to [[Bitcoin Core]] development is one of the most discussed governance questions in the Bitcoin ecosystem. The company funds many Core contributors but does not have merge authority, which remains with a distributed set of maintainers following an informal rough-consensus process.
    - The [[Elements Project]] and [[Core Lightning]] are developed under open-source licences (MIT / Apache), with public GitHub repositories and community contribution processes.

- ### Cryptographic Foundations
  - Blockstream's cryptographic research team has made significant contributions to practical implementations of advanced [[Cryptographic Hash Function]] primitives, [[Schnorr Signature]] schemes, and zero-knowledge proof systems including range proofs underpinning [[Confidential Transactions]].
  - [[Hashcash]], invented by Blockstream co-founder [[Adam Back]] in 1997, is the direct precursor to Bitcoin's [[Proof of Work]] mining mechanism — an intellectual lineage that positions Blockstream's founders as architects of the broader Bitcoin paradigm.
  - [[Pedersen Commitment]] schemes used in [[Confidential Transactions]] allow amounts to be hidden while remaining mathematically verifiable for conservation — ensuring no assets are created or destroyed in a transaction without revealing the actual values.
  - [[Musig]] (MuSig2 in its production form) is a Blockstream-developed [[Schnorr Signature]] aggregation protocol enabling multiple parties to produce a single aggregate signature indistinguishable from a single-signer signature, enhancing both efficiency and privacy in [[Multisig]] setups.

- ### Provenance
  - sources:: Blockstream.com; "Enabling Blockchain Innovations with Pegged Sidechains" (Back et al., 2014); Bitcoin Improvement Proposals 340-342; Liquid Network technical documentation; Core Lightning GitHub (ElementsProject/lightning); Elements Project GitHub; Blockstream Satellite API documentation
  - updated:: 2026-06-13
