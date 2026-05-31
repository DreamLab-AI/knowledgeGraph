public:: true

# Law Commission
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d6659c6598887e53efd67bc265382f7089b1cc7b796444af41e87eece67365a1",
  "@type": "Page",
  "vc:slug": "law-commission",
  "title": "Law Commission",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:regulation",
      "vc:label": "Regulation"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:https-www-lawcom-gov-uk",
      "vc:label": "https://www.lawcom.gov.uk/"
    },
    {
      "@id": "urn:visionflow:linked:https-www-legislation-gov-uk-ukpga-1965-22",
      "vc:label": "https://www.legislation.gov.uk/ukpga/1965/22"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Law Commission"
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
  "@id": "urn:ngm:class:law-commission",
  "@type": "Class",
  "label": "Law Commission",
  "definition": "The Law Commission is the statutory independent body for England and Wales that reviews the law and recommends reform to government.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-frameworks",
        "label": "Regulatory Frameworks"
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
  "@id": "urn:visionflow:annotation:link-resolutions:law-commission:a0fb829baea1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d6659c6598887e53efd67bc265382f7089b1cc7b796444af41e87eece67365a1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulation]]",
      "resolved": "urn:visionflow:linked:regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.lawcom.gov.uk/]]",
      "resolved": "urn:visionflow:linked:https-www-lawcom-gov-uk",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.legislation.gov.uk/ukpga/1965/22]]",
      "resolved": "urn:visionflow:linked:https-www-legislation-gov-uk-ukpga-1965-22",
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
  - The Law Commission is the statutory independent body for England and Wales that reviews the law and recommends reform to government.

- ### Semantic Classification
  - owl-class:: governance:LawCommission
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Governance]]
  - bridges-to:: [[Regulation]]
  - enables:: [[Regulatory Frameworks]]

- ### Content
  - The Law Commission was established under the Law Commissions Act 1965 to keep the law of England and Wales under review and to recommend reform. It conducts consultations and publishes reports with proposals.
  - Its work has covered areas including contract, property, criminal law and emerging topics such as digital assets and electronic documents. Recommendations may lead to legislation when adopted by government and Parliament.

- ### Provenance
  - sources:: [[https://www.lawcom.gov.uk/]], [[https://www.legislation.gov.uk/ukpga/1965/22]]
  - migration-date:: 2026-05-29T00:00:00Z
