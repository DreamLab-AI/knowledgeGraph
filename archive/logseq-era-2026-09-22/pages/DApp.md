public:: true

# DApp
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4fa731e9486ca703f454dd6c839185f868da1eca9b92da6ef46538e097ac431e",
  "@type": "Page",
  "vc:slug": "dapp",
  "title": "DApp",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-application",
      "vc:label": "Decentralized Application"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DApp"
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
  "@id": "urn:ngm:class:dapp",
  "@type": "Class",
  "label": "DApp",
  "definition": "A decentralised application whose backend logic runs on a blockchain or other decentralised network rather than on centrally controlled servers. It typically combines smart contracts with a conventional user interface.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-application",
      "label": "Decentralized Application"
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
  "@id": "urn:visionflow:annotation:link-resolutions:dapp:c7e7d9f7ef45",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4fa731e9486ca703f454dd6c839185f868da1eca9b92da6ef46538e097ac431e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Application]]",
      "resolved": "urn:visionflow:linked:decentralized-application",
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
  - A decentralised application whose backend logic runs on a blockchain or other decentralised network rather than on centrally controlled servers. It typically combines smart contracts with a conventional user interface.

- ### Semantic Classification
  - owl-class:: blockchain:DApp
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Application]]
  - bridges-to:: [[Decentralized Application]]
  - requires:: [[Smart Contract]]
  - enables:: [[Web3]]

- ### Content
  - A DApp uses smart contracts deployed on a blockchain such as Ethereum to hold its core logic and state, so that no single party controls the backend. A front end interacts with these contracts through a wallet and node connection.
  - DApps span decentralised finance, gaming, marketplaces, and governance. Their reliance on on-chain code means logic is transparent and resistant to unilateral change, at the cost of higher latency and transaction fees than centralised applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
