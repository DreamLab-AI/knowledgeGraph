public:: true

# FSB
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98acc22b2ea55e298badb3ffeaaef0d015a70a3cb82e23a7c0d7c6c35444c13d",
  "@type": "Page",
  "vc:slug": "fsb",
  "title": "FSB",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:financial-stability",
      "vc:label": "Financial Stability"
    },
    {
      "@id": "urn:visionflow:linked:systemic-risk",
      "vc:label": "Systemic Risk"
    },
    {
      "@id": "urn:visionflow:linked:financial-system",
      "vc:label": "Financial System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FSB"
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
  "@id": "urn:ngm:class:fsb",
  "@type": "Class",
  "label": "FSB",
  "definition": "The Financial Stability Board, an international body that monitors the global financial system and makes recommendations to promote financial stability.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fsb:53072cc488a1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98acc22b2ea55e298badb3ffeaaef0d015a70a3cb82e23a7c0d7c6c35444c13d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Stability]]",
      "resolved": "urn:visionflow:linked:financial-stability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Systemic Risk]]",
      "resolved": "urn:visionflow:linked:systemic-risk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial System]]",
      "resolved": "urn:visionflow:linked:financial-system",
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
  - The Financial Stability Board, an international body that monitors the global financial system and makes recommendations to promote financial stability.

- ### Semantic Classification
  - owl-class:: governance:FSB
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Regulation]]
  - bridges-to:: [[Systemic Risk]], [[Financial System]]
  - requires:: [[Financial Regulation]]
  - enables:: [[Financial Stability]]

- ### Content
  - The Financial Stability Board coordinates national financial authorities and international standard-setting bodies to develop and promote effective regulatory, supervisory and other financial sector policies. It was established to strengthen oversight of the global financial system.
  - The board publishes assessments of vulnerabilities in the financial system and issues recommendations addressing matters such as systemic risk, market infrastructure and the financial stability implications of new asset classes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
