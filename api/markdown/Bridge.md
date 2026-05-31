public:: true

# Bridge
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c95303974dee8b3bd6885cc6e8a0dccc9a14e5a6b0a4ca171203625c2827ae52",
  "@type": "Page",
  "vc:slug": "bridge",
  "title": "Bridge",
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
      "@id": "urn:visionflow:linked:cross-chain-messaging",
      "vc:label": "Cross-Chain Messaging"
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
      "vc:value": "Bridge"
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
  "@id": "urn:ngm:class:bridge",
  "@type": "Class",
  "label": "Bridge",
  "definition": "A protocol that transfers assets or messages between separate ledgers by locking, burning, or attesting value on one chain and reproducing a representation on another.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:bridge:17f29b073143",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c95303974dee8b3bd6885cc6e8a0dccc9a14e5a6b0a4ca171203625c2827ae52"
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
      "raw": "[[Cross-Chain Messaging]]",
      "resolved": "urn:visionflow:linked:cross-chain-messaging",
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
  - A protocol that transfers assets or messages between separate ledgers by locking, burning, or attesting value on one chain and reproducing a representation on another.

- ### Semantic Classification
  - owl-class:: blockchain:Bridge
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Interoperability]]
  - bridges-to:: [[Cross-Chain Bridge]], [[Cross-Chain Messaging]]
  - requires:: [[Smart Contract]]
  - enables:: [[Cross Chain Asset Transfer]]

- ### Content
  - A bridge connects otherwise isolated ledgers so that value or data can move between them. A common pattern locks an asset in a contract on the source chain and mints a corresponding representation on the destination chain, reversing the process when the asset returns.
  - Bridges differ in their trust assumptions, ranging from designs secured by external validator sets to those that rely on the consensus of the connected chains. Because they concentrate locked value and depend on the correctness of their attestation logic, bridges have been a frequent target of exploits, and their security model is a central design concern.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
