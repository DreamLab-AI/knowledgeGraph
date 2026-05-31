public:: true

# Citi Token Services
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a4a8d83836cf520f3b9f9905ed4a2d7280ec51e5c747abbd0a1dae824666e973",
  "@type": "Page",
  "vc:slug": "citi-token-services",
  "title": "Citi Token Services",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:permissioned-blockchain",
      "vc:label": "Permissioned Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:tokenization",
      "vc:label": "Tokenization"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:trade-finance",
      "vc:label": "Trade Finance"
    },
    {
      "@id": "urn:visionflow:linked:https-www-citigroup-com-global-news",
      "vc:label": "https://www.citigroup.com/global/news"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Citi Token Services"
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
  "@id": "urn:ngm:class:citi-token-services",
  "@type": "Class",
  "label": "Citi Token Services",
  "definition": "A service from Citi that issues tokenised representations of institutional client deposits on a permissioned blockchain to support faster cash management and trade transactions. It operates within the bank's regulated infrastructure rather than on a public network.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:trade-finance",
      "label": "Trade Finance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:permissioned-blockchain",
        "label": "Permissioned Blockchain"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
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
  "@id": "urn:visionflow:annotation:link-resolutions:citi-token-services:b703f3b37e75",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a4a8d83836cf520f3b9f9905ed4a2d7280ec51e5c747abbd0a1dae824666e973"
  },
  "vc:resolutions": [
    {
      "raw": "[[Permissioned Blockchain]]",
      "resolved": "urn:visionflow:linked:permissioned-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenization]]",
      "resolved": "urn:visionflow:linked:tokenization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trade Finance]]",
      "resolved": "urn:visionflow:linked:trade-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.citigroup.com/global/news]]",
      "resolved": "urn:visionflow:linked:https-www-citigroup-com-global-news",
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
  - A service from Citi that issues tokenised representations of institutional client deposits on a permissioned blockchain to support faster cash management and trade transactions. It operates within the bank's regulated infrastructure rather than on a public network.

- ### Semantic Classification
  - owl-class:: blockchain:CitiTokenServices
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Trade Finance]]
  - bridges-to:: [[Distributed Ledger Technology]], [[Smart Contract]]
  - requires:: [[Permissioned Blockchain]], [[Tokenization]]
  - enables:: [[Payment Channel]]

- ### Content
  - Citi Token Services tokenises institutional deposits so that corporate clients can move value and trigger payments at any hour, including for trade finance arrangements. The tokens represent claims on deposits held at the bank and are recorded on a private blockchain operated by Citi.
  - By combining tokenised deposits with programmable conditions, the service aims to automate steps such as conditional payments tied to delivery events. It stays inside a permissioned, regulated environment, distinguishing it from public-chain stablecoins.

- ### Provenance
  - sources:: [[https://www.citigroup.com/global/news]]
  - migration-date:: 2026-05-29T00:00:00Z
