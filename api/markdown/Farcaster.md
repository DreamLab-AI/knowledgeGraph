public:: true

# Farcaster
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7da6a1e81fe5ea8f94127b0368b538abde5b7657c115b3cf00073c67f1853acc",
  "@type": "Page",
  "vc:slug": "farcaster",
  "title": "Farcaster",
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
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Farcaster"
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
  "@id": "urn:ngm:class:farcaster",
  "@type": "Class",
  "label": "Farcaster",
  "definition": "Farcaster is a decentralised social networking protocol that stores user identity on a blockchain while distributing message data across nodes.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:farcaster:2ca68b4eceeb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7da6a1e81fe5ea8f94127b0368b538abde5b7657c115b3cf00073c67f1853acc"
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
  - Farcaster is a decentralised social networking protocol that stores user identity on a blockchain while distributing message data across nodes.

- ### Semantic Classification
  - owl-class:: blockchain:Farcaster
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Decentralised Identity]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Decentralised Identity]]
  - enables:: [[Web3]]

- ### Content
  - Farcaster is a protocol for building social applications in which user accounts are registered on-chain and content is propagated across a network of nodes.
  - The design aims to give users portable identities and the ability to move between client applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
