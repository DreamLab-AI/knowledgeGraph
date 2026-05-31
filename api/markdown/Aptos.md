public:: true

# Aptos
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7ab4ac4d63b20916a45124bb26d5f9a7cf11c48d4282d258994000c9e71d47a",
  "@type": "Page",
  "vc:slug": "aptos",
  "title": "Aptos",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:layer-1",
      "vc:label": "Layer 1"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-network",
      "vc:label": "Blockchain Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aptos"
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
  "@id": "urn:ngm:class:aptos",
  "@type": "Class",
  "label": "Aptos",
  "definition": "Aptos is a layer 1 proof-of-stake blockchain that uses the Move programming language and a parallel execution engine for smart contract processing.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-network",
      "label": "Blockchain Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:aptos:83ca6d000a92",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e7ab4ac4d63b20916a45124bb26d5f9a7cf11c48d4282d258994000c9e71d47a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 1]]",
      "resolved": "urn:visionflow:linked:layer-1",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Network]]",
      "resolved": "urn:visionflow:linked:blockchain-network",
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
  - Aptos is a layer 1 proof-of-stake blockchain that uses the Move programming language and a parallel execution engine for smart contract processing.

- ### Semantic Classification
  - owl-class:: blockchain:Aptos
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Blockchain Network]]
  - bridges-to:: [[Layer 1]]
  - requires:: [[Proof of Stake]], [[Smart Contract]]

- ### Content
  - Aptos was launched in 2022 by former members of the Diem project at Meta. It uses the Move language, originally developed for Diem, to define accounts, resources, and smart contracts.
  - The network applies a parallel transaction execution model named Block-STM, which detects non-conflicting transactions and processes them concurrently to raise throughput.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
