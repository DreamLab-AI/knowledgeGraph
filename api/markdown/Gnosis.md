public:: true

# Gnosis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cf077a316a9475372e06120604e2760b6cf689a70aa8d1f2a233c8330e95073b",
  "@type": "Page",
  "vc:slug": "gnosis",
  "title": "Gnosis",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:multisignature",
      "vc:label": "Multisignature"
    },
    {
      "@id": "urn:visionflow:linked:ethereum-smart-contracts",
      "vc:label": "Ethereum Smart Contracts"
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
      "vc:value": "Gnosis"
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
  "@id": "urn:ngm:class:gnosis",
  "@type": "Class",
  "label": "Gnosis",
  "definition": "An Ethereum-based platform and chain known for prediction markets and the widely used Safe multisignature smart contract wallet.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ethereum",
      "label": "Ethereum"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gnosis:5e089c032a3e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cf077a316a9475372e06120604e2760b6cf689a70aa8d1f2a233c8330e95073b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multisignature]]",
      "resolved": "urn:visionflow:linked:multisignature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contracts]]",
      "resolved": "urn:visionflow:linked:ethereum-smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
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
  - An Ethereum-based platform and chain known for prediction markets and the widely used Safe multisignature smart contract wallet.

- ### Semantic Classification
  - owl-class:: blockchain:Gnosis
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Ethereum]]
  - bridges-to:: [[Ethereum Smart Contracts]]
  - requires:: [[Smart Contract]]
  - enables:: [[Multisignature]]

- ### Content
  - Gnosis originated as a prediction market protocol on Ethereum and grew into a broader set of infrastructure including a sidechain and the Safe contract wallet. Its components are built from Ethereum smart contracts.
  - The Safe wallet popularised multisignature custody, requiring several authorised signatures before a transaction executes. This pattern is widely used by organisations to manage shared on-chain assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
