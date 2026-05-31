public:: true

# MetaMask
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e39e8f0964b9c7dfe4910b26861d4d7ff1c8bdce5b69a593ca5b6ff165a913af",
  "@type": "Page",
  "vc:slug": "meta-mask",
  "title": "MetaMask",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:digital-wallet",
      "vc:label": "Digital Wallet"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MetaMask"
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
  "@id": "urn:ngm:class:meta-mask",
  "@type": "Class",
  "label": "MetaMask",
  "definition": "MetaMask is a software cryptocurrency wallet, available as a browser extension and mobile application, for interacting with Ethereum and compatible networks.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-wallet",
      "label": "Digital Wallet"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
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
  "@id": "urn:visionflow:annotation:link-resolutions:meta-mask:b7b0a251394e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e39e8f0964b9c7dfe4910b26861d4d7ff1c8bdce5b69a593ca5b6ff165a913af"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:linked:digital-wallet",
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
  - MetaMask is a software cryptocurrency wallet, available as a browser extension and mobile application, for interacting with Ethereum and compatible networks.

- ### Semantic Classification
  - owl-class:: blockchain:MetaMask
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Digital Wallet]]
  - bridges-to:: [[Self-Custody]]
  - requires:: [[Ethereum]]
  - enables:: [[Web3]]

- ### Content
  - MetaMask is a self-custodial wallet that stores keys locally and allows users to manage assets and connect to decentralised applications.
  - It is available as a browser extension and mobile app and is widely used to interact with Ethereum and other compatible blockchains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
