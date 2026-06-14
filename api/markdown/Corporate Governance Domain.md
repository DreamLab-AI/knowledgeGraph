public:: true

# Corporate Governance Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57ccf2fd9e6e2d4484a404d0468dee1c102f4994f62183e17386ffc9bb530c47",
  "@type": "Page",
  "vc:slug": "corporate-governance-domain",
  "title": "Corporate Governance Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:board-oversight",
      "vc:label": "Board Oversight"
    },
    {
      "@id": "urn:visionflow:linked:internal-control",
      "vc:label": "Internal Control"
    },
    {
      "@id": "urn:visionflow:linked:shareholder-rights",
      "vc:label": "Shareholder Rights"
    },
    {
      "@id": "urn:visionflow:linked:disclosure",
      "vc:label": "Disclosure"
    },
    {
      "@id": "urn:visionflow:linked:executive-accountability",
      "vc:label": "Executive Accountability"
    },
    {
      "@id": "urn:visionflow:linked:compliance-domain",
      "vc:label": "Compliance Domain"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:audit",
      "vc:label": "Audit"
    },
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:stakeholder-trust",
      "vc:label": "Stakeholder Trust"
    },
    {
      "@id": "urn:visionflow:linked:transparent-reporting",
      "vc:label": "Transparent Reporting"
    },
    {
      "@id": "urn:visionflow:linked:regulation-domain",
      "vc:label": "Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-markets-domain",
      "vc:label": "Financial Markets Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Corporate Governance Domain"
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
  "@id": "urn:ngm:class:corporate-governance-domain",
  "@type": "Class",
  "label": "Corporate Governance Domain",
  "definition": "The Corporate Governance Domain covers the structures and processes by which organisations are directed, controlled and held accountable. Its scope includes board oversight, internal control, shareholder rights and disclosure. It is a top-level subject classification concerned with organisational accountability. The boundary excludes external regulatory rule-making, which belongs to the Regulation Domain.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal And Regulatory"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:board-oversight",
        "label": "Board Oversight"
      },
      {
        "@id": "urn:ngm:class:internal-control",
        "label": "Internal Control"
      },
      {
        "@id": "urn:ngm:class:shareholder-rights",
        "label": "Shareholder Rights"
      },
      {
        "@id": "urn:ngm:class:disclosure",
        "label": "Disclosure"
      },
      {
        "@id": "urn:ngm:class:executive-accountability",
        "label": "Executive Accountability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compliance-domain",
        "label": "Compliance Domain"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:stakeholder-trust",
        "label": "Stakeholder Trust"
      },
      {
        "@id": "urn:ngm:class:transparent-reporting",
        "label": "Transparent Reporting"
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
  "@id": "urn:visionflow:annotation:link-resolutions:corporate-governance-domain:63f93835bc9b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57ccf2fd9e6e2d4484a404d0468dee1c102f4994f62183e17386ffc9bb530c47"
  },
  "vc:resolutions": [
    {
      "raw": "[[Board Oversight]]",
      "resolved": "urn:visionflow:linked:board-oversight",
      "kind": "StubLink"
    },
    {
      "raw": "[[Internal Control]]",
      "resolved": "urn:visionflow:linked:internal-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Shareholder Rights]]",
      "resolved": "urn:visionflow:linked:shareholder-rights",
      "kind": "StubLink"
    },
    {
      "raw": "[[Disclosure]]",
      "resolved": "urn:visionflow:linked:disclosure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Executive Accountability]]",
      "resolved": "urn:visionflow:linked:executive-accountability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Domain]]",
      "resolved": "urn:visionflow:linked:compliance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audit]]",
      "resolved": "urn:visionflow:linked:audit",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stakeholder Trust]]",
      "resolved": "urn:visionflow:linked:stakeholder-trust",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparent Reporting]]",
      "resolved": "urn:visionflow:linked:transparent-reporting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulation Domain]]",
      "resolved": "urn:visionflow:linked:regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Markets Domain]]",
      "resolved": "urn:visionflow:linked:financial-markets-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Corporate Governance Domain covers the structures and processes by which organisations are directed, controlled and held accountable. Its scope includes board oversight, internal control, shareholder rights and disclosure. It is a top-level subject classification concerned with organisational accountability. The boundary excludes external regulatory rule-making, which belongs to the Regulation Domain.

- ### Semantic Classification
  - owl-class:: corpgov:CorporateGovernanceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Compliance Domain]], [[Regulation Domain]], [[Financial Markets Domain]]
  - has-part:: [[Board Oversight]], [[Internal Control]], [[Shareholder Rights]], [[Disclosure]], [[Executive Accountability]]
  - requires:: [[Compliance Domain]], [[Risk Management]], [[Audit]]
  - enables:: [[Accountability]], [[Stakeholder Trust]], [[Transparent Reporting]]

- ### Content
  - The Corporate Governance Domain addresses how an organisation is directed and controlled so that it serves its stakeholders responsibly. Its scope covers the oversight role of the board, the internal control environment, the protection of shareholder rights and the disclosure of material information. The boundary is internal direction and accountability; the external rules that constrain it are part of the Regulation Domain.
  - Member concepts include Board Oversight, Internal Control, Shareholder Rights, Disclosure and Executive Accountability. These depend on the Compliance Domain for adherence assurance, risk management for prioritisation and audit for independent verification.
  - The domain bridges to the Compliance Domain through control assurance, to the Regulation Domain through statutory governance requirements, and to the Financial Markets Domain through disclosure to investors. It enables accountability, stakeholder trust and transparent reporting.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
