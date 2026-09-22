public:: true

# Digital Pound
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cd1ae895983abd4c65b9cf01c07c4e5afaea2ea479fbf035777fa65ee9a86171",
  "@type": "Page",
  "vc:slug": "digital-pound",
  "title": "Digital Pound",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bank-of-england",
      "vc:label": "Bank of England"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:cbdc-cross-border-settlement",
      "vc:label": "CBDC Cross-Border Settlement"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bankofengland-co-uk-the-digital-pound",
      "vc:label": "https://www.bankofengland.co.uk/the-digital-pound"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bankofengland-co-uk-paper-2023-the-digital-pound-consultation-paper",
      "vc:label": "https://www.bankofengland.co.uk/paper/2023/the-digital-pound-consultation-paper"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Pound"
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
  "@id": "urn:ngm:class:digital-pound",
  "@type": "Class",
  "label": "Digital Pound",
  "definition": "The Digital Pound is a proposed central bank digital currency for the United Kingdom issued by the Bank of England. It is intended for retail payments and remains under design and consultation.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:central-bank-digital-currency",
      "label": "Central Bank Digital Currency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bank-of-england",
        "label": "Bank of England"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-pound:eb2a34954550",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cd1ae895983abd4c65b9cf01c07c4e5afaea2ea479fbf035777fa65ee9a86171"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bank of England]]",
      "resolved": "urn:visionflow:linked:bank-of-england",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CBDC Cross-Border Settlement]]",
      "resolved": "urn:visionflow:linked:cbdc-cross-border-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.bankofengland.co.uk/the-digital-pound]]",
      "resolved": "urn:visionflow:linked:https-www-bankofengland-co-uk-the-digital-pound",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.bankofengland.co.uk/paper/2023/the-digital-pound-consultation-paper]]",
      "resolved": "urn:visionflow:linked:https-www-bankofengland-co-uk-paper-2023-the-digital-pound-consultation-paper",
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
  - The Digital Pound is a proposed central bank digital currency for the United Kingdom issued by the Bank of England. It is intended for retail payments and remains under design and consultation.

- ### Semantic Classification
  - owl-class:: blockchain:DigitalPound
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Central Bank Digital Currency]]
  - bridges-to:: [[CBDC Cross-Border Settlement]]
  - requires:: [[Bank of England]]
  - enables:: [[Payment System]]

- ### Content
  - The Digital Pound is being considered by the Bank of England and HM Treasury as a digital form of central bank money for everyday payments. It would sit alongside cash and bank deposits rather than replacing them.
  - Design proposals describe a model in which private firms provide wallets and services while the central bank issues the currency. Consultations have addressed privacy, holding limits, and the role of the public and private sectors.

- ### Provenance
  - sources:: [[https://www.bankofengland.co.uk/the-digital-pound]], [[https://www.bankofengland.co.uk/paper/2023/the-digital-pound-consultation-paper]]
  - migration-date:: 2026-05-29T00:00:00Z
