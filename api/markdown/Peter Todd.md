public:: true

# Peter Todd
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:86313babd6e625d5943e8b8323fd88d3b77d890465859907880ba12c1c897401",
  "@type": "Page",
  "vc:slug": "peter-todd",
  "title": "Peter Todd",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-core",
      "vc:label": "Bitcoin Core"
    },
    {
      "@id": "urn:visionflow:linked:https-petertodd-org",
      "vc:label": "https://petertodd.org"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-petertodd",
      "vc:label": "https://github.com/petertodd"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Peter Todd"
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
  "@id": "urn:ngm:class:peter-todd",
  "@type": "Class",
  "label": "Peter Todd",
  "definition": "Peter Todd is a Bitcoin developer and applied cryptography consultant known for contributions to the Bitcoin protocol and related projects. He has worked on consensus and transaction issues.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-core",
      "label": "Bitcoin Core"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-network",
        "label": "Bitcoin Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:peter-todd:1e29228f4165",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:86313babd6e625d5943e8b8323fd88d3b77d890465859907880ba12c1c897401"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Core]]",
      "resolved": "urn:visionflow:linked:bitcoin-core",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://petertodd.org]]",
      "resolved": "urn:visionflow:linked:https-petertodd-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/petertodd]]",
      "resolved": "urn:visionflow:linked:https-github-com-petertodd",
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
  - Peter Todd is a Bitcoin developer and applied cryptography consultant known for contributions to the Bitcoin protocol and related projects. He has worked on consensus and transaction issues.

- ### Semantic Classification
  - owl-class:: blockchain:PeterTodd
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Bitcoin Core]]
  - bridges-to:: [[Cryptography]]
  - enables:: [[Bitcoin Network]]

- ### Content
  - Peter Todd is a long-standing contributor to Bitcoin development, working on aspects of the protocol such as transaction handling and replace-by-fee. He also consults on applied cryptography for other projects.
  - He has written about Bitcoin protocol design and the trade-offs involved in changes to consensus rules. His work is part of the broader community of developers who maintain and review the Bitcoin software.

- ### Provenance
  - sources:: [[https://petertodd.org]], [[https://github.com/petertodd]]
  - migration-date:: 2026-05-29T00:00:00Z
