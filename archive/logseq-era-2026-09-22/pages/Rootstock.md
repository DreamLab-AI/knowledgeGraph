public:: true

# Rootstock
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2ba4167ea5051a4df369b45b7a6d204f27e7ce54496d7fe302e4e921a09a83b",
  "@type": "Page",
  "vc:slug": "rootstock",
  "title": "Rootstock",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sidechain",
      "vc:label": "Sidechain"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum-virtual-machine",
      "vc:label": "Ethereum Virtual Machine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Rootstock"
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
  "@id": "urn:ngm:class:rootstock",
  "@type": "Class",
  "label": "Rootstock",
  "definition": "A Bitcoin sidechain that supports Ethereum-compatible smart contracts, secured by merged mining with Bitcoin and connected through a two-way peg.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sidechain",
      "label": "Sidechain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      }
    ],
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:rootstock:ec6cdc05cfff",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e2ba4167ea5051a4df369b45b7a6d204f27e7ce54496d7fe302e4e921a09a83b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sidechain]]",
      "resolved": "urn:visionflow:linked:sidechain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:ethereum-virtual-machine",
      "kind": "StubLink"
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
  - A Bitcoin sidechain that supports Ethereum-compatible smart contracts, secured by merged mining with Bitcoin and connected through a two-way peg.

- ### Semantic Classification
  - owl-class:: blockchain:Rootstock
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sidechain]]
  - bridges-to:: [[Ethereum Virtual Machine]]
  - requires:: [[Sidechain]], [[Bitcoin Proof-of-Work Protocol]]
  - enables:: [[Smart Contract]]

- ### Content
  - Rootstock runs a smart contract platform compatible with the Ethereum Virtual Machine while pegging its asset to Bitcoin. Coins move between Bitcoin and the sidechain through a two-way peg controlled by a federation and related mechanisms.
  - The sidechain is secured by merged mining, allowing Bitcoin miners to also produce Rootstock blocks at little extra cost. This brings programmable contracts to Bitcoin-denominated value without changing the Bitcoin protocol.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
