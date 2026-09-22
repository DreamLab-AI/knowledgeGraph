public:: true

# Riot Platforms
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bfadbb573de9f14686303c0f69714c17dac43485e2aa2ffccbce0b6726a22f17",
  "@type": "Page",
  "vc:slug": "riot-platforms",
  "title": "Riot Platforms",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asic",
      "vc:label": "ASIC"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:https-www-riotplatforms-com",
      "vc:label": "https://www.riotplatforms.com"
    },
    {
      "@id": "urn:visionflow:linked:https-www-riotplatforms-com-investors",
      "vc:label": "https://www.riotplatforms.com/investors"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Riot Platforms"
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
  "@id": "urn:ngm:class:riot-platforms",
  "@type": "Class",
  "label": "Riot Platforms",
  "definition": "Riot Platforms is a United States company that operates large-scale Bitcoin mining facilities. It is listed on a public stock exchange.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
      "label": "Bitcoin Mining"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:asic",
        "label": "ASIC"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:riot-platforms:06c189ffe9d9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bfadbb573de9f14686303c0f69714c17dac43485e2aa2ffccbce0b6726a22f17"
  },
  "vc:resolutions": [
    {
      "raw": "[[ASIC]]",
      "resolved": "urn:visionflow:linked:asic",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Validation]]",
      "resolved": "urn:visionflow:linked:transaction-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.riotplatforms.com]]",
      "resolved": "urn:visionflow:linked:https-www-riotplatforms-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.riotplatforms.com/investors]]",
      "resolved": "urn:visionflow:linked:https-www-riotplatforms-com-investors",
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
  - Riot Platforms is a United States company that operates large-scale Bitcoin mining facilities. It is listed on a public stock exchange.

- ### Semantic Classification
  - owl-class:: blockchain:RiotPlatforms
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Bitcoin Mining]]
  - bridges-to:: [[Bitcoin Network]]
  - requires:: [[ASIC]]
  - enables:: [[Transaction Validation]]

- ### Content
  - Riot Platforms runs data-centre facilities filled with mining hardware to perform the proof-of-work computations that secure the Bitcoin network. Its operations are concentrated in regions with access to lower-cost electricity.
  - As a publicly traded company, Riot reports its hash rate, bitcoin holdings, and energy arrangements. It participates in demand-response programmes that adjust power use in response to grid conditions.

- ### Provenance
  - sources:: [[https://www.riotplatforms.com]], [[https://www.riotplatforms.com/investors]]
  - migration-date:: 2026-05-29T00:00:00Z
