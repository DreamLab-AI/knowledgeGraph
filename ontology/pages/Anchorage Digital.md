public:: true

# Anchorage Digital
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79023f7738127dfa93d5cac1f11bdc76acfb0f91559a99f271f3544c8a713b71",
  "@type": "Page",
  "vc:slug": "anchorage-digital",
  "title": "Anchorage Digital",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:coinbase",
      "vc:label": "Coinbase"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Anchorage Digital"
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
  "@id": "urn:ngm:class:anchorage-digital",
  "@type": "Class",
  "label": "Anchorage Digital",
  "definition": "A United States digital asset platform that holds a federal bank charter and provides custody, trading, staking, and financing services for institutional clients. It was the first crypto firm to receive a national trust bank charter from the Office of the Comptroller of the Currency.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:self-custody",
      "label": "Self-Custody"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
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
  "@id": "urn:visionflow:annotation:link-resolutions:anchorage-digital:83f540d0edd1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79023f7738127dfa93d5cac1f11bdc76acfb0f91559a99f271f3544c8a713b71"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Coinbase]]",
      "resolved": "urn:visionflow:linked:coinbase",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
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
  - A United States digital asset platform that holds a federal bank charter and provides custody, trading, staking, and financing services for institutional clients. It was the first crypto firm to receive a national trust bank charter from the Office of the Comptroller of the Currency.

- ### Semantic Classification
  - owl-class:: blockchain:AnchorageDigital
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Self-Custody]]
  - bridges-to:: [[Coinbase]]
  - requires:: [[Regulatory Compliance]]
  - enables:: [[Proof of Stake]]

- ### Content
  - Anchorage Digital, founded in 2017, provides regulated custody and related services for digital assets to institutions. In January 2021 its subsidiary received a national trust bank charter from the Office of the Comptroller of the Currency, a first for a digital asset firm.
  - The company offers custody, staking, trading, and lending, positioning itself as a regulated counterparty for funds, corporations, and other institutional participants in digital asset markets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
