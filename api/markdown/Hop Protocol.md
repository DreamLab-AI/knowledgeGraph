public:: true

# Hop Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:af24dbeb3d07382756c78baba9fd2a63c74feb3377af84a091ec563752d4ae55",
  "@type": "Page",
  "vc:slug": "hop-protocol",
  "title": "Hop Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:web-3-infrastructure",
      "vc:label": "Web3 Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:https-hop-exchange",
      "vc:label": "https://hop.exchange/"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-hop-exchange",
      "vc:label": "https://docs.hop.exchange/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hop Protocol"
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
  "@id": "urn:ngm:class:hop-protocol",
  "@type": "Class",
  "label": "Hop Protocol",
  "definition": "Hop Protocol is a cross-chain bridge that enables the transfer of tokens between Ethereum and its layer-two rollup networks.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:cross-chain-bridge",
      "label": "Cross-Chain Bridge"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hop-protocol:2297381d743a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:af24dbeb3d07382756c78baba9fd2a63c74feb3377af84a091ec563752d4ae55"
  },
  "vc:resolutions": [
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3 Infrastructure]]",
      "resolved": "urn:visionflow:linked:web-3-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://hop.exchange/]]",
      "resolved": "urn:visionflow:linked:https-hop-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.hop.exchange/]]",
      "resolved": "urn:visionflow:linked:https-docs-hop-exchange",
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
  - Hop Protocol is a cross-chain bridge that enables the transfer of tokens between Ethereum and its layer-two rollup networks.

- ### Semantic Classification
  - owl-class:: distributed-systems:HopProtocol
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Web3 Infrastructure]]
  - requires:: [[Token]]
  - enables:: [[Interoperability]]

- ### Content
  - Hop Protocol moves tokens across Ethereum and connected rollups using bonded liquidity and intermediary assets. It allows users to transfer assets between networks without waiting for native withdrawal periods.
  - The protocol uses liquidity providers, called bonders, who advance funds on the destination network and are later reimbursed. This design targets faster cross-rollup transfers of common tokens.

- ### Provenance
  - sources:: [[https://hop.exchange/]], [[https://docs.hop.exchange/]]
  - migration-date:: 2026-05-29T00:00:00Z
