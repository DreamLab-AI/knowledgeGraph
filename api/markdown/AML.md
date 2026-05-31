public:: true

# AML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c6015895d214a2f3174dcc3febd7127523508c912a477a0bd0006156c34d659",
  "@type": "Page",
  "vc:slug": "aml",
  "title": "AML",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:classification",
      "vc:label": "Classification"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:financial-services",
      "vc:label": "Financial Services"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AML"
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
  "@id": "urn:ngm:class:aml",
  "@type": "Class",
  "label": "AML",
  "definition": "Anti-money laundering: the set of regulations, controls and analytical methods used by financial institutions to detect and prevent the disguising of illicit funds as legitimate income.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-services",
      "label": "Financial Services"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aml:22775a0eeeb5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5c6015895d214a2f3174dcc3febd7127523508c912a477a0bd0006156c34d659"
  },
  "vc:resolutions": [
    {
      "raw": "[[Classification]]",
      "resolved": "urn:visionflow:linked:classification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Services]]",
      "resolved": "urn:visionflow:linked:financial-services",
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
  - Anti-money laundering: the set of regulations, controls and analytical methods used by financial institutions to detect and prevent the disguising of illicit funds as legitimate income.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AML
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Services]]
  - bridges-to:: [[Financial Services]]
  - requires:: [[Classification]]
  - enables:: [[Anti-Money Laundering]]

- ### Content
  - AML refers to anti-money laundering, the legal and operational framework that obliges banks and other regulated entities to monitor transactions, verify customer identity and report suspicious activity. Failure to comply carries substantial regulatory penalties.
  - Machine learning is increasingly applied to transaction monitoring and customer risk scoring to reduce false positives and surface genuinely suspicious patterns. Such systems must balance detection performance against explainability and regulatory scrutiny, since decisions affect customers and must be auditable.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
