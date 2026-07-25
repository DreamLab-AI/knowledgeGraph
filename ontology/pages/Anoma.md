public:: true

# Anoma
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:03c75ef1b745274c2243e85b380899064f5589c1e198c1df2c8bda0bd73689c0",
  "@type": "Page",
  "vc:slug": "anoma",
  "title": "Anoma",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:https-anoma-net",
      "vc:label": "https://anoma.net"
    },
    {
      "@id": "urn:visionflow:linked:https-specs-anoma-net",
      "vc:label": "https://specs.anoma.net"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Anoma"
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
  "@id": "urn:ngm:class:anoma",
  "@type": "Class",
  "label": "Anoma",
  "definition": "Anoma is a protocol and architecture for intent-centric and privacy-preserving decentralised applications. It allows users to express desired outcomes that the network matches and settles.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
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
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
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
  "@id": "urn:visionflow:annotation:link-resolutions:anoma:72e97b1c07ad",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:03c75ef1b745274c2243e85b380899064f5589c1e198c1df2c8bda0bd73689c0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://anoma.net]]",
      "resolved": "urn:visionflow:linked:https-anoma-net",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://specs.anoma.net]]",
      "resolved": "urn:visionflow:linked:https-specs-anoma-net",
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
  - Anoma is a protocol and architecture for intent-centric and privacy-preserving decentralised applications. It allows users to express desired outcomes that the network matches and settles.

- ### Semantic Classification
  - owl-class:: blockchain:Anoma
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[Privacy]]
  - requires:: [[Cryptography]]
  - enables:: [[DeFi]]

- ### Content
  - Anoma proposes an architecture in which users submit intents that describe what they want to achieve rather than the exact transactions to execute. Solvers in the network find ways to satisfy combinations of intents, which are then settled.
  - The design incorporates privacy features and aims to support applications such as bartering, counterparty discovery, and private transfers. It treats intent matching as a first-class part of the protocol.

- ### Provenance
  - sources:: [[https://anoma.net]], [[https://specs.anoma.net]]
  - migration-date:: 2026-05-29T00:00:00Z
