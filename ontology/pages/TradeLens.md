public:: true

# TradeLens
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cbda6dadecb39e174f2b27685d068fe69c359aebee5911cecbe27a1539d4df1d",
  "@type": "Page",
  "vc:slug": "trade-lens",
  "title": "TradeLens",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TradeLens"
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
  "@id": "urn:ngm:class:trade-lens",
  "@type": "Class",
  "label": "TradeLens",
  "definition": "A blockchain-based supply chain platform for the shipping industry, jointly developed by IBM and Maersk, that aimed to digitise and share trade documentation among participants. It was discontinued in 2023.",
  "domain": "supply-chain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain",
      "label": "Supply Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:trade-lens:27d34693a5cf",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cbda6dadecb39e174f2b27685d068fe69c359aebee5911cecbe27a1539d4df1d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
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
  - A blockchain-based supply chain platform for the shipping industry, jointly developed by IBM and Maersk, that aimed to digitise and share trade documentation among participants. It was discontinued in 2023.

- ### Semantic Classification
  - owl-class:: supply-chain:TradeLens
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Supply Chain]]
  - bridges-to:: [[Blockchain]]
  - requires:: [[Distributed Ledger]]
  - enables:: [[Supply Chain]]

- ### Content
  - TradeLens was launched in 2018 by IBM and Maersk to provide a shared, permissioned ledger for shipping and trade documents, intended to improve visibility and reduce paperwork across ports, carriers, and customs authorities.
  - Despite onboarding many participants, the platform did not reach the level of global industry collaboration needed to be commercially viable, and its operators announced its discontinuation in late 2022, winding it down through early 2023.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
