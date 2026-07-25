public:: true

# xDai
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7b5486c0239d4b60d86e38a186dcf9f1d720d8887901e48c1e4022a687f9f84",
  "@type": "Page",
  "vc:slug": "x-dai",
  "title": "xDai",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:sidechain",
      "vc:label": "Sidechain"
    },
    {
      "@id": "urn:visionflow:linked:gnosis-chain",
      "vc:label": "Gnosis Chain"
    },
    {
      "@id": "urn:visionflow:linked:https-www-gnosischain-com",
      "vc:label": "https://www.gnosischain.com"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-gnosischain-com",
      "vc:label": "https://docs.gnosischain.com"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "xDai"
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
  "@id": "urn:ngm:class:x-dai",
  "@type": "Class",
  "label": "xDai",
  "definition": "xDai was the original name for the stable-token chain that became Gnosis Chain, an Ethereum-compatible sidechain using a stablecoin for transaction fees. It now operates under the Gnosis Chain name.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gnosis-chain",
      "label": "Gnosis Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
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
  "@id": "urn:visionflow:annotation:link-resolutions:x-dai:81aac48fbf2d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e7b5486c0239d4b60d86e38a186dcf9f1d720d8887901e48c1e4022a687f9f84"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sidechain]]",
      "resolved": "urn:visionflow:linked:sidechain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gnosis Chain]]",
      "resolved": "urn:visionflow:linked:gnosis-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.gnosischain.com]]",
      "resolved": "urn:visionflow:linked:https-www-gnosischain-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.gnosischain.com]]",
      "resolved": "urn:visionflow:linked:https-docs-gnosischain-com",
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
  - xDai was the original name for the stable-token chain that became Gnosis Chain, an Ethereum-compatible sidechain using a stablecoin for transaction fees. It now operates under the Gnosis Chain name.

- ### Semantic Classification
  - owl-class:: blockchain:xDai
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Gnosis Chain]]
  - bridges-to:: [[Sidechain]]
  - requires:: [[Ethereum Smart Contract Platform]]
  - enables:: [[DeFi]]

- ### Content
  - xDai was a sidechain compatible with Ethereum that used a stable-value token to pay transaction fees, keeping costs predictable. It was designed for low-cost transactions and payments.
  - The network later merged into the Gnosis Chain following a community process, retaining its compatibility with Ethereum tooling. It continues to host applications that benefit from low fees and fast confirmation.

- ### Provenance
  - sources:: [[https://www.gnosischain.com]], [[https://docs.gnosischain.com]]
  - migration-date:: 2026-05-29T00:00:00Z
