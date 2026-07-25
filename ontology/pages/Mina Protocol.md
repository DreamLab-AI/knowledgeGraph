public:: true

# Mina Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:08bde32a050a2c0573025a7eb0916de97e2243ebc07fbf81a2b6e677910cc8a1",
  "@type": "Page",
  "vc:slug": "mina-protocol",
  "title": "Mina Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:web-3-infrastructure",
      "vc:label": "Web3 Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:https-minaprotocol-com",
      "vc:label": "https://minaprotocol.com/"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-minaprotocol-com",
      "vc:label": "https://docs.minaprotocol.com/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mina Protocol"
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
  "@id": "urn:ngm:class:mina-protocol",
  "@type": "Class",
  "label": "Mina Protocol",
  "definition": "Mina Protocol is a blockchain that maintains a constant-size proof of its state using recursive zero-knowledge proofs, keeping the chain compact.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:web-3-infrastructure",
        "label": "Web3 Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:mina-protocol:347f2936e40b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:08bde32a050a2c0573025a7eb0916de97e2243ebc07fbf81a2b6e677910cc8a1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3 Infrastructure]]",
      "resolved": "urn:visionflow:linked:web-3-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://minaprotocol.com/]]",
      "resolved": "urn:visionflow:linked:https-minaprotocol-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.minaprotocol.com/]]",
      "resolved": "urn:visionflow:linked:https-docs-minaprotocol-com",
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
  - Mina Protocol is a blockchain that maintains a constant-size proof of its state using recursive zero-knowledge proofs, keeping the chain compact.

- ### Semantic Classification
  - owl-class:: distributed-systems:MinaProtocol
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Distributed Ledger Technology]]
  - requires:: [[Cryptography]]
  - enables:: [[Web3 Infrastructure]]

- ### Content
  - Mina Protocol replaces the growing transaction history of typical blockchains with a recursive succinct proof that summarises the entire chain state. This keeps the verifiable record at a fixed, small size.
  - Nodes verify the current state by checking a single proof rather than replaying all prior blocks. The design targets lightweight participation and uses zero-knowledge proof techniques throughout.

- ### Provenance
  - sources:: [[https://minaprotocol.com/]], [[https://docs.minaprotocol.com/]]
  - migration-date:: 2026-05-29T00:00:00Z
