schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#Cardano
legacy_uri:: urn:visionclaw:concept:blockchain:cardano
public:: true

# Cardano
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1950ff3e6c3b3cb48f4bfd842f0064a614bc89809f6f207a12268f35b72c3241",
  "@type": "Page",
  "vc:slug": "cardano",
  "title": "Cardano",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:academic-research",
      "vc:label": "Academic Research"
    },
    {
      "@id": "urn:visionflow:linked:computation-layer",
      "vc:label": "Computation Layer"
    },
    {
      "@id": "urn:visionflow:linked:formal-verification",
      "vc:label": "Formal Verification"
    },
    {
      "@id": "urn:visionflow:linked:haskell",
      "vc:label": "Haskell"
    },
    {
      "@id": "urn:visionflow:linked:off-chain-infrastructure",
      "vc:label": "Off-Chain Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:ouroboros",
      "vc:label": "Ouroboros"
    },
    {
      "@id": "urn:visionflow:linked:plutus",
      "vc:label": "Plutus"
    },
    {
      "@id": "urn:visionflow:linked:plutus-smart-contract-language",
      "vc:label": "Plutus Smart Contract Language"
    },
    {
      "@id": "urn:visionflow:linked:scalable-smart-contracts",
      "vc:label": "Scalable Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:settlement-layer",
      "vc:label": "Settlement Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-protocol",
      "vc:label": "Blockchain Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:enterprise-blockchain",
      "vc:label": "Enterprise Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:owl:class:ouroboros-consensus",
      "vc:label": "Ouroboros Consensus"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[AI Agent System]] (ai), [[Virtual Economy]] (mv), or [[DID Nostr Identity]] (ngm)"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-2eb99e4344ba"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-13T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#Cardano"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0567"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cardano"
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
      "vc:value": "urn:visionclaw:concept:blockchain:cardano"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:cardano"
    },
    {
      "vc:key": "version",
      "vc:value": "2.1.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:1950ff3e6c3b3cb48f4bfd842f0064a614bc89809f6f207a12268f35b72c3241@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:individual:cardano",
  "@type": "Individual",
  "label": "Cardano",
  "definition": "A research-driven blockchain platform using the mathematically-verified Ouroboros Proof-of-Stake consensus protocol. Features layered architecture separating settlement and computation layers, written in Haskell with Plutus for smart contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:computation-layer",
        "label": "Computation Layer"
      },
      {
        "@id": "urn:ngm:class:off-chain-infrastructure",
        "label": "Off-Chain Infrastructure"
      },
      {
        "@id": "urn:ngm:class:settlement-layer",
        "label": "Settlement Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:scalable-smart-contracts",
        "label": "Scalable Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:haskell",
        "label": "Haskell"
      },
      {
        "@id": "urn:ngm:class:plutus-smart-contract-language",
        "label": "Plutus Smart Contract Language"
      },
      {
        "@id": "urn:ngm:class:ouroboros-consensus",
        "label": "Ouroboros Consensus"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "instanceOf": [
    {
      "@id": "urn:ngm:class:blockchain-protocol",
      "label": "Blockchain Protocol"
    },
    {
      "@id": "urn:ngm:class:smart-contract-platform",
      "label": "Smart Contract Platform"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cardano:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1950ff3e6c3b3cb48f4bfd842f0064a614bc89809f6f207a12268f35b72c3241"
  },
  "vc:resolutions": [
    {
      "raw": "[[Academic Research]]",
      "resolved": "urn:visionflow:linked:academic-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computation Layer]]",
      "resolved": "urn:visionflow:linked:computation-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Formal Verification]]",
      "resolved": "urn:visionflow:linked:formal-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Haskell]]",
      "resolved": "urn:visionflow:linked:haskell",
      "kind": "StubLink"
    },
    {
      "raw": "[[Off-Chain Infrastructure]]",
      "resolved": "urn:visionflow:linked:off-chain-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ouroboros]]",
      "resolved": "urn:visionflow:linked:ouroboros",
      "kind": "StubLink"
    },
    {
      "raw": "[[Plutus]]",
      "resolved": "urn:visionflow:linked:plutus",
      "kind": "StubLink"
    },
    {
      "raw": "[[Plutus Smart Contract Language]]",
      "resolved": "urn:visionflow:linked:plutus-smart-contract-language",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scalable Smart Contracts]]",
      "resolved": "urn:visionflow:linked:scalable-smart-contracts",
      "kind": "StubLink"
    },
    {
      "raw": "[[Settlement Layer]]",
      "resolved": "urn:visionflow:linked:settlement-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Protocol]]",
      "resolved": "urn:visionflow:owl:class:blockchain-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Enterprise Blockchain]]",
      "resolved": "urn:visionflow:owl:class:enterprise-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:owl:class:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ouroboros Consensus]]",
      "resolved": "urn:visionflow:owl:class:ouroboros-consensus",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:owl:class:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract Platform]]",
      "resolved": "urn:visionflow:owl:class:smart-contract-platform",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:1950ff3e6c3b3cb48f4bfd842f0064a614bc89809f6f207a12268f35b72c3241@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A research-driven blockchain platform using the mathematically-verified Ouroboros Proof-of-Stake consensus protocol. Features layered architecture separating settlement and computation layers, written in Haskell with Plutus for smart contracts. Emphasizes formal verification, sustainability, decentralization, and provable security guarantees.

- ### Semantic Classification
  - owl-class:: blockchain:Cardano
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Smart Contract Platform]], [[Blockchain Protocol]]
  - uses:: [[Ouroboros Consensus]], [[Plutus Smart Contract Language]], [[Haskell]]
  - enables:: [[Formal Verification]], [[Scalable Smart Contracts]], [[Interoperability]]
  - has-part:: [[Settlement Layer]], [[Computation Layer]], [[Off-Chain Infrastructure]]
  - bridges-to:: [[Academic Research]], [[Enterprise Blockchain]], [[Regulatory Compliance]]

- ### Content

  Cardano implements mathematically-verified [[Ouroboros]] Proof-of-Stake consensus, pioneering formal verification in blockchain protocol design. Academic peer review of core protocols precedes mainnet deployment, distinguishing Cardano from protocols deploying first then documenting. The platform separates settlement and computation layers, enabling independent evolution whilst maintaining decentralisation.

  [[Plutus]] smart contracts written in Haskell enable functional programming paradigms emphasising correctness and mathematical properties. Formal verification techniques prove contract properties before deployment, reducing vulnerability classes plaguing imperative languages. The Extended UTXO model balances expressive smart contract capability with efficient parallel transaction processing.

  Cardano's governance structure enables Ada holders to directly participate in development prioritisation through on-chain voting, establishing constitutional governance ensuring community alignment with protocol evolution. Staking mechanisms reward participants securing the network whilst maintaining sustainability through controlled inflation and transaction fees.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
