public:: true

# Polkadot Parachains
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:95aaa543560c9f8762346df81c33152e63f444921d9a41fe5a950b79b33c865e",
  "@type": "Page",
  "vc:slug": "polkadot-parachains",
  "title": "Polkadot Parachains",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:polkadot",
      "vc:label": "Polkadot"
    },
    {
      "@id": "urn:visionflow:linked:web3-foundation",
      "vc:label": "Web3 Foundation"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Polkadot Parachains"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:polkadot-parachains",
  "@type": "Class",
  "label": "Polkadot Parachains",
  "definition": "Application-specific sovereign blockchains that lease a slot on the Polkadot Relay Chain, inheriting its shared security model and cross-chain messaging infrastructure. Parachains can have custom runtime logic, consensus rules, and token economics whilst relying on the relay chain's validator set for finalisation, enabling heterogeneous specialised chains to interoperate without sacrificing security or decentralisation.",
  "domain": "blockchain",
  "maturity": "emerging",
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:nominated-proof-of-stake", "label": "Nominated Proof of Stake"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:web-assembly", "label": "WebAssembly"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"},
      {"@id": "urn:ngm:class:cross-chain-messaging", "label": "Cross-Chain Messaging"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:polkadot-parachains:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:95aaa543560c9f8762346df81c33152e63f444921d9a41fe5a950b79b33c865e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Polkadot]]",
      "resolved": "urn:visionflow:linked:polkadot",
      "kind": "StubLink"
    },
    {
      "raw": "[[Web3 Foundation]]",
      "resolved": "urn:visionflow:linked:web3-foundation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Application-specific blockchains that connect to and are secured by the Polkadot Relay Chain, enabling interoperability and shared security across heterogeneous blockchain networks.

- ### Semantic Classification
  - owl-class:: blockchain:PolkadotParachains
  - owl-role:: Process
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Content
  Polkadot Parachains are sovereign blockchains built with the Substrate framework and leased a slot on the Polkadot Relay Chain through an on-chain auction mechanism. Once connected, a parachain's block production is collated locally and validated by a randomly assigned subset of the relay chain's nominated proof-of-stake validators, meaning the parachain inherits the full economic security of the entire DOT-staked validator pool without needing to bootstrap its own validator set.

  Cross-parachain communication is handled natively via the Cross-Consensus Messaging format (XCM), enabling assets and arbitrary data to flow between parachains and the relay chain without external bridges. This architecture addresses the blockchain scalability trilemma by separating application-layer execution (parachains) from consensus and security (relay chain), and represents one of the most technically sophisticated approaches to heterogeneous multi-chain interoperability deployed in production.

- ### Provenance
  - sources:: [[Polkadot]], [[Web3 Foundation]]
  - migration-date:: 2026-04-26T00:00:00Z
