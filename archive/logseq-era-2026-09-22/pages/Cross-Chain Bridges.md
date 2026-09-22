public:: true

# Cross-Chain Bridges
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5bbce0385b9531f35bf6cf9d7dd6ec203839b357fa0e2b09341bb6999098c8cb",
  "@type": "Page",
  "vc:slug": "cross-chain-bridges",
  "title": "Cross-Chain Bridges",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-asset-transfer",
      "vc:label": "Cross Chain Asset Transfer"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:linked:bridge",
      "vc:label": "Bridge"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-interoperability",
      "vc:label": "Blockchain Interoperability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cross-Chain Bridges"
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
  "@id": "urn:ngm:class:cross-chain-bridges",
  "@type": "Class",
  "label": "Cross-Chain Bridges",
  "definition": "The category of protocols that move assets and data between distinct blockchains, treated collectively as connective infrastructure between ledgers.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-interoperability",
      "label": "Blockchain Interoperability"
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
        "@id": "urn:ngm:class:cross-chain-asset-transfer",
        "label": "Cross Chain Asset Transfer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cross-chain-bridges:23c4a6548a83",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5bbce0385b9531f35bf6cf9d7dd6ec203839b357fa0e2b09341bb6999098c8cb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross Chain Asset Transfer]]",
      "resolved": "urn:visionflow:linked:cross-chain-asset-transfer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:linked:cross-chain-bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bridge]]",
      "resolved": "urn:visionflow:linked:bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Interoperability]]",
      "resolved": "urn:visionflow:linked:blockchain-interoperability",
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
  - The category of protocols that move assets and data between distinct blockchains, treated collectively as connective infrastructure between ledgers.

- ### Semantic Classification
  - owl-class:: blockchain:CrossChainBridges
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Interoperability]]
  - bridges-to:: [[Cross-Chain Bridge]], [[Bridge]]
  - requires:: [[Smart Contract]]
  - enables:: [[Cross Chain Asset Transfer]]

- ### Content
  - Cross-chain bridges describe the set of protocols that interconnect separate ledgers, enabling assets and messages to pass between ecosystems that have no shared consensus. They underpin multi-chain applications by letting liquidity and state move across network boundaries.
  - Designs vary in how they verify events on a source chain, spanning external validator committees, optimistic schemes with challenge periods, and light-client approaches that verify source-chain consensus directly. The concentration of locked value and the difficulty of securing cross-domain verification make this category a recurring source of large exploits.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
