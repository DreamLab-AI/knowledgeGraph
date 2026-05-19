schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#AtomicSwap
legacy_uri:: urn:visionclaw:concept:blockchain:atomic-swap
public:: true

# Atomic Swap
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d64fce874cf711a852f123ef29e1fb18fff53a49cac102b6d24c255e988eae9a",
  "@type": "Page",
  "vc:slug": "atomic-swap",
  "title": "Atomic Swap",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cross-chain-interoperability",
      "vc:label": "Cross-Chain Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:erc-20-token",
      "vc:label": "ERC-20 Token"
    },
    {
      "@id": "urn:visionflow:linked:hash-time-locked-contract",
      "vc:label": "Hash Time-Locked Contract"
    },
    {
      "@id": "urn:visionflow:linked:litecoin",
      "vc:label": "Litecoin"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:polkadot",
      "vc:label": "Polkadot"
    },
    {
      "@id": "urn:visionflow:owl:class:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:owl:class:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:owl:class:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-20ef46fe2323"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#AtomicSwap"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8002"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Atomic Swap"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:atomic-swap"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:atomic-swap"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d64fce874cf711a852f123ef29e1fb18fff53a49cac102b6d24c255e988eae9a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:atomic-swap",
  "@type": "OntologyClass",
  "label": "Atomic Swap",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:blockchain-protocol",
      "vc:label": "Blockchain Protocol"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:d64fce874cf711a852f123ef29e1fb18fff53a49cac102b6d24c255e988eae9a"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d64fce874cf711a852f123ef29e1fb18fff53a49cac102b6d24c255e988eae9a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Trustless peer-to-peer cryptocurrency exchange mechanism across different blockchains using Hash Time-Locked Contracts (HTLCs) that guarantees atomic execution where the swap either completes fully or not at all, eliminating counterparty risk without requiring centralized intermediaries.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:cross-chain-interoperability",
      "vc:label": "Cross-Chain Interoperability"
    }
  ],
  "vc:implements": [
    {
      "@id": "urn:visionflow:linked:hash-time-locked-contract",
      "vc:label": "Hash Time-Locked Contract"
    }
  ],
  "vc:uses": [
    {
      "@id": "urn:visionflow:owl:class:hash-function",
      "vc:label": "Hash Function"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:atomic-swap:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d64fce874cf711a852f123ef29e1fb18fff53a49cac102b6d24c255e988eae9a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cross-Chain Interoperability]]",
      "resolved": "urn:visionflow:linked:cross-chain-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[ERC-20 Token]]",
      "resolved": "urn:visionflow:linked:erc-20-token",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hash Time-Locked Contract]]",
      "resolved": "urn:visionflow:linked:hash-time-locked-contract",
      "kind": "StubLink"
    },
    {
      "raw": "[[Litecoin]]",
      "resolved": "urn:visionflow:linked:litecoin",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "StubLink"
    },
    {
      "raw": "[[Polkadot]]",
      "resolved": "urn:visionflow:linked:polkadot",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:owl:class:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:owl:class:cross-chain-bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:owl:class:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:owl:class:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:owl:class:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:owl:class:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Economy]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d64fce874cf711a852f123ef29e1fb18fff53a49cac102b6d24c255e988eae9a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Trustless peer-to-peer cryptocurrency exchange mechanism across different blockchains using Hash Time-Locked Contracts (HTLCs) that guarantees atomic execution where the swap either completes fully or not at all, eliminating counterparty risk without requiring centralized intermediaries.

- ### Semantic Classification
  - owl-class:: blockchain:AtomicSwap
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Cross-Chain Interoperability]]
  - implements:: [[Hash Time-Locked Contract]]
  - bridges-to:: [[Virtual Economy]]

- ### Content

  ## Definition
  - Trustless peer-to-peer exchange of cryptocurrencies across different blockchains without intermediaries
  - Uses Hash Time-Locked Contracts (HTLCs) ensuring atomicity: swap completes fully or not at all
  - Enables decentralized cross-chain trading without centralized exchanges

  ## Core Components
  - **Hash Time-Locked Contract (HTLC)**: Smart contract with hash preimage and timeout
  - **Secret/Preimage**: Random value known only to initiator
  - **Hash Lock**: Cryptographic hash of secret used as condition
  - **Time Lock**: Expiration deadline for claim/refund

  ## Technical Characteristics
  - **Atomicity**: All-or-nothing execution guarantee
  - **Trustlessness**: No third-party custody of funds
  - **Cross-Chain**: Works between independent blockchains
  - **Non-Custodial**: Users maintain control until swap completion

  ## Protocol Flow
  1. **Initiation**: Alice creates HTLC on Chain A with hash(secret)
  2. **Response**: Bob creates HTLC on Chain B with same hash
  3. **Claim**: Alice reveals secret to claim Bob's funds on Chain B
  4. **Complete**: Bob uses revealed secret to claim Alice's funds on Chain A
  5. **Refund**: If timeout expires, both parties reclaim funds

  ## Implementation Methods
  - **On-Chain HTLCs**: Native smart contract support (Ethereum, etc.)
  - **Bitcoin Script**: Using OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY
  - **Lightning Network**: Off-chain atomic swaps via payment channels
  - **Submarine Swaps**: On-chain to off-chain atomic swaps

  ## Use Cases
  - Decentralized cryptocurrency exchanges
  - Cross-chain arbitrage
  - Privacy-preserving trades
  - Interoperability between blockchain ecosystems

  ## Examples
  - [[Bitcoin]] <-> [[Litecoin]] atomic swaps
  - [[Ethereum]] <-> [[ERC-20 Token]] swaps
  - [[Lightning Network]] cross-chain swaps
  - [[Polkadot]] parachain swaps

  ## Relationships
  - implements:: [[Hash Time-Locked Contract]]
  - enables:: [[Cross-Chain Interoperability]]
  - uses:: [[Hash Function]]
  - alternative-to:: [[Cross-Chain Bridge]]
  - component-of:: [[Decentralized Exchange]]

  ## Security Properties
  - No counterparty risk after setup
  - No third-party custody
  - Cryptographic guarantee of atomicity
  - Time-based refund mechanism

  ## Advantages
  - Trustless cross-chain exchange
  - No exchange custody risk
  - Censorship-resistant
  - Privacy-preserving (no KYC)

  ## Limitations
  - Both parties must be online during swap
  - Requires blockchain support for scripting/smart contracts
  - Time lock duration trade-offs (security vs capital efficiency)
  - No price discovery mechanism
  - User experience complexity

  ## Performance Considerations
  - Multi-step confirmation process
  - Total time = 2x confirmation time (both chains)
  - Capital lockup during swap duration
  - Gas costs for smart contract execution

  ## Variants
  - **American Call Option**: Time-asymmetric atomic swaps
  - **Adaptor Signatures**: Scriptless atomic swaps using signatures
  - **Threshold Signatures**: Multi-party atomic swaps
  - **Cross-Chain AMMs**: Automated market makers for atomic swaps

  ## HTLC Parameters
  - **Hash Function**: SHA256, RIPEMD160
  - **Time Lock**: Typically 24-48 hours
  - **Confirmation Requirements**: Chain-specific finality
  - **Refund Buffer**: Time margin between chain A and B locks

  #### Related Concepts
  - [[Hash Time-Locked Contract]]
  - [[Cross-Chain Bridge]]
  - [[Decentralized Exchange]]
  - [[Payment Channel]]

  #blockchain #atomic-swap #interoperability #cross-chain

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
