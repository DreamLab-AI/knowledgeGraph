public:: true

# Cosmos IBC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:435914ce4ca0faa7d55c001959613cd5cc5cf929108fd61f4bcd2fe9e7a1e801",
  "@type": "Page",
  "vc:slug": "cosmos-ibc",
  "title": "Cosmos IBC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-light-client",
      "vc:label": "Blockchain Light Client"
    },
    {
      "@id": "urn:visionflow:linked:channel-protocol",
      "vc:label": "Channel Protocol"
    },
    {
      "@id": "urn:visionflow:linked:connection-protocol",
      "vc:label": "Connection Protocol"
    },
    {
      "@id": "urn:visionflow:linked:cosmos-ecosystem",
      "vc:label": "Cosmos Ecosystem"
    },
    {
      "@id": "urn:visionflow:linked:cosmos-network",
      "vc:label": "Cosmos Network"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-communication",
      "vc:label": "Cross-Chain Communication"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-contracts",
      "vc:label": "Cross-Chain Contracts"
    },
    {
      "@id": "urn:visionflow:linked:ibc-protocol",
      "vc:label": "IBC Protocol"
    },
    {
      "@id": "urn:visionflow:linked:inter-chain-value-transfer",
      "vc:label": "Inter-Chain Value Transfer"
    },
    {
      "@id": "urn:visionflow:linked:interoperability-protocol",
      "vc:label": "Interoperability Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-interop",
      "vc:label": "Layer 2 Interop"
    },
    {
      "@id": "urn:visionflow:linked:packet-authentication",
      "vc:label": "Packet Authentication"
    },
    {
      "@id": "urn:visionflow:linked:packet-system",
      "vc:label": "Packet System"
    },
    {
      "@id": "urn:visionflow:linked:polkadot-xcm",
      "vc:label": "Polkadot XCM"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:merkle-proof",
      "vc:label": "Merkle Proof"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cosmos IBC"
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
  "@id": "urn:ngm:class:cosmos-ibc",
  "@type": "Class",
  "label": "Cosmos IBC",
  "definition": "Inter-Blockchain Communication protocol that enables sovereign blockchain networks to exchange data and tokens trustlessly, using light clients and Merkle proofs to verify state across chains without centralised intermediaries, providing the foundational interoperability layer of the Cosmos ecosystem.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:cross-chain-communication",
    "label": "Cross-Chain Communication"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "Channel Protocol"
      },
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "ICS-20 Fungible Token Transfer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:light-client",
        "label": "Blockchain Light Client"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Packet Authentication"
      },
      {
        "@id": "urn:ngm:class:merkle-proof",
        "label": "Merkle Proof"
      },
      {
        "@id": "urn:ngm:class:tendermint-consensus",
        "label": "Tendermint Consensus"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-contracts",
        "label": "Cross-Chain Contracts"
      },
      {
        "@id": "urn:ngm:class:value-transfer",
        "label": "Inter-Chain Value Transfer"
      },
      {
        "@id": "urn:ngm:class:interchain-accounts",
        "label": "Interchain Accounts"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cosmos-sdk",
        "label": "Cosmos SDK"
      },
      {
        "@id": "urn:ngm:class:relayer",
        "label": "Relayer Network"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:interoperability-protocol",
        "label": "Interoperability Protocol"
      },
      {
        "@id": "urn:ngm:class:ibc",
        "label": "IBC Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Cryptographic Commitment Scheme"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:layer-2-interop",
        "label": "Layer 2 Interop"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:polkadot-xcm",
        "label": "Polkadot XCM"
      },
      {
        "@id": "urn:ngm:class:bridge",
        "label": "Blockchain Bridge"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ibc-protocol",
      "label": "IBC Protocol"
    },
    {
      "@id": "urn:ngm:class:inter-blockchain-communication",
      "label": "Inter-Blockchain Communication"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cosmos-ibc:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:435914ce4ca0faa7d55c001959613cd5cc5cf929108fd61f4bcd2fe9e7a1e801"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Light Client]]",
      "resolved": "urn:visionflow:linked:blockchain-light-client",
      "kind": "StubLink"
    },
    {
      "raw": "[[Channel Protocol]]",
      "resolved": "urn:visionflow:linked:channel-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Connection Protocol]]",
      "resolved": "urn:visionflow:linked:connection-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cosmos Ecosystem]]",
      "resolved": "urn:visionflow:linked:cosmos-ecosystem",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cosmos Network]]",
      "resolved": "urn:visionflow:linked:cosmos-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Chain Communication]]",
      "resolved": "urn:visionflow:linked:cross-chain-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Chain Contracts]]",
      "resolved": "urn:visionflow:linked:cross-chain-contracts",
      "kind": "StubLink"
    },
    {
      "raw": "[[IBC Protocol]]",
      "resolved": "urn:visionflow:linked:ibc-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inter-Chain Value Transfer]]",
      "resolved": "urn:visionflow:linked:inter-chain-value-transfer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interoperability Protocol]]",
      "resolved": "urn:visionflow:linked:interoperability-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Layer 2 Interop]]",
      "resolved": "urn:visionflow:linked:layer-2-interop",
      "kind": "StubLink"
    },
    {
      "raw": "[[Packet Authentication]]",
      "resolved": "urn:visionflow:linked:packet-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Packet System]]",
      "resolved": "urn:visionflow:linked:packet-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Polkadot XCM]]",
      "resolved": "urn:visionflow:linked:polkadot-xcm",
      "kind": "StubLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Merkle Proof]]",
      "resolved": "urn:visionflow:owl:class:merkle-proof",
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
  - Inter-Blockchain Communication protocol that enables different blockchain networks to exchange data and tokens, providing trustless interoperability in the Cosmos ecosystem.

- ### Semantic Classification
  - owl-class:: blockchain:CosmosIBC
  - owl-role:: Process
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - is-subclass-of:: [[Interoperability Protocol]], [[Cross-Chain Communication]]
  - requires:: [[Blockchain Light Client]], [[Merkle Proof]], [[Packet Authentication]]
  - enables:: [[Inter-Chain Value Transfer]], [[Cross-Chain Contracts]], [[Cosmos Ecosystem]]
  - has-part:: [[Connection Protocol]], [[Channel Protocol]], [[Packet System]]
  - bridges-to:: [[Polkadot XCM]], [[Layer 2 Interop]]

- ### Content

  Inter-Blockchain Communication (IBC) protocol enables trustless communication between independent Cosmos SDK blockchains without centralised intermediaries. Each chain maintains light clients of counterparty chains, verifying state through Merkle proofs rather than trusting external validators. IBC establishes bidirectional "channels" enabling packet relay at the application layer.

  The protocol operates in three layers: connection layer managing cryptographic proofs between chains, channel layer establishing virtual communication paths for specific applications, and packet layer transferring serialised data with timeout and acknowledgement mechanisms. Tokens transfer through fungible token transfers (ICS-20) creating wrapped representations on destination chains whilst burning originals.

  IBC enables the Cosmos "Internet of Blockchains" vision—a network of independent chains maintaining sovereignty whilst achieving interoperability. Application-specific blockchains optimise for particular use cases (identity, payments, DeFi), then connect through IBC enabling users and value to flow seamlessly across the ecosystem.

- ### Provenance
  - sources:: [[Cosmos Network]], [[IBC Protocol]]
  - migration-date:: 2026-04-26T00:00:00Z
