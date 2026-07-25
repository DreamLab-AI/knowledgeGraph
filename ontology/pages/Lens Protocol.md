public:: true

# Lens Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d8a3d8fbf9320c14c70f63bd5f1ecf4e419d302ec386e66269cad9e00f462a0",
  "@type": "Page",
  "vc:slug": "lens-protocol",
  "title": "Lens Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Lens Protocol"
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
  "@id": "urn:ngm:class:lens-protocol",
  "@type": "Class",
  "label": "Lens Protocol",
  "definition": "Lens Protocol is a decentralised social networking protocol in which user profiles and social connections are represented as on-chain assets.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-identity",
      "label": "Decentralised Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lens-protocol:025c4130cd93",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1d8a3d8fbf9320c14c70f63bd5f1ecf4e419d302ec386e66269cad9e00f462a0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
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
  - Lens Protocol is a decentralised social networking protocol in which user profiles and social connections are represented as on-chain assets.

- ### Semantic Classification
  - owl-class:: blockchain:LensProtocol
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Decentralised Identity]]
  - bridges-to:: [[NFT]]
  - requires:: [[Decentralised Identity]]
  - enables:: [[Web3]]

- ### Content
  - Lens Protocol provides a framework for building social applications where profiles, posts, and follows are recorded on-chain.
  - Representing social graph elements as tokens is intended to give users ownership and portability of their connections and content.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
