public:: true

# Bitcoin Whitepaper
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:86bfb5fea272c19e15995c494f4ef423951eb9734751f1b3c02c9d178b6a4405",
  "@type": "Page",
  "vc:slug": "bitcoin-whitepaper",
  "title": "Bitcoin Whitepaper",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hashcash",
      "vc:label": "Hashcash"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-protocol",
      "vc:label": "Bitcoin Protocol"
    },
    {
      "@id": "urn:visionflow:linked:satoshi-nakamoto",
      "vc:label": "Satoshi Nakamoto"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bitcoin Whitepaper"
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
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-whitepaper",
  "@type": "Class",
  "label": "Bitcoin Whitepaper",
  "definition": "The 2008 paper by Satoshi Nakamoto that introduced Bitcoin as a peer-to-peer electronic cash system secured by proof-of-work consensus.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
      "label": "Bitcoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hashcash",
        "label": "Hashcash"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-protocol",
        "label": "Bitcoin Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bitcoin-whitepaper:74b0e544e5b7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:86bfb5fea272c19e15995c494f4ef423951eb9734751f1b3c02c9d178b6a4405"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hashcash]]",
      "resolved": "urn:visionflow:linked:hashcash",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Satoshi Nakamoto]]",
      "resolved": "urn:visionflow:linked:satoshi-nakamoto",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - The 2008 paper by Satoshi Nakamoto that introduced Bitcoin as a peer-to-peer electronic cash system secured by proof-of-work consensus.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinWhitepaper
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Proof-of-Work Protocol]]
  - bridges-to:: [[Satoshi Nakamoto]]
  - requires:: [[Hashcash]]
  - enables:: [[Bitcoin Protocol]]

- ### Content
  - The whitepaper described a system in which transactions are timestamped into a chain of blocks linked by hashes, with proof-of-work used to make the history costly to rewrite. It set out how nodes reach agreement without a central authority.
  - It built on earlier ideas such as Hashcash for proof-of-work and presented a solution to double-spending using a public, append-only ledger. The paper established the design later realised in the Bitcoin protocol.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
