public:: true

# Hyperlane
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d6b3efe47cfd41067a9759849196ae092573ff8b66d0c10a2e5b4b718af801b6",
  "@type": "Page",
  "vc:slug": "hyperlane",
  "title": "Hyperlane",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-interoperability",
      "vc:label": "Blockchain Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:bridge",
      "vc:label": "Bridge"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:linked:https-hyperlane-xyz",
      "vc:label": "https://hyperlane.xyz"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-hyperlane-xyz",
      "vc:label": "https://docs.hyperlane.xyz"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hyperlane"
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
  "@id": "urn:ngm:class:hyperlane",
  "@type": "Class",
  "label": "Hyperlane",
  "definition": "Hyperlane is an interoperability protocol that allows smart contracts on different blockchains to send messages and transfer assets between chains. It supports permissionless deployment to new chains.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-chain-bridge",
      "label": "Cross-Chain Bridge"
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
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hyperlane:d831013ba91d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d6b3efe47cfd41067a9759849196ae092573ff8b66d0c10a2e5b4b718af801b6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Interoperability]]",
      "resolved": "urn:visionflow:linked:blockchain-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bridge]]",
      "resolved": "urn:visionflow:linked:bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:linked:cross-chain-bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://hyperlane.xyz]]",
      "resolved": "urn:visionflow:linked:https-hyperlane-xyz",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.hyperlane.xyz]]",
      "resolved": "urn:visionflow:linked:https-docs-hyperlane-xyz",
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
  - Hyperlane is an interoperability protocol that allows smart contracts on different blockchains to send messages and transfer assets between chains. It supports permissionless deployment to new chains.

- ### Semantic Classification
  - owl-class:: blockchain:Hyperlane
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cross-Chain Bridge]]
  - bridges-to:: [[Bridge]]
  - requires:: [[Smart Contract]]
  - enables:: [[Blockchain Interoperability]]

- ### Content
  - Hyperlane provides a messaging layer through which applications on one chain can trigger actions on another. Developers can configure how messages are verified, choosing security models that suit their needs.
  - The protocol can be deployed to a new chain without requiring approval from a central party, which is intended to extend interchain connectivity as new networks appear. It is used for cross-chain applications and token transfers.

- ### Provenance
  - sources:: [[https://hyperlane.xyz]], [[https://docs.hyperlane.xyz]]
  - migration-date:: 2026-05-29T00:00:00Z
