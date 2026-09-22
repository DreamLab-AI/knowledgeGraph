public:: true

# Corporate Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab077b53213fb45c801d37dbe430fd676737717ebff4a94559306de824593aa0",
  "@type": "Page",
  "vc:slug": "corporate-governance",
  "title": "Corporate Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:compliance",
      "vc:label": "Compliance"
    },
    {
      "@id": "urn:visionflow:linked:audit",
      "vc:label": "Audit"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:governance-framework",
      "vc:label": "Governance Framework"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Corporate Governance"
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
  "@id": "urn:ngm:class:corporate-governance",
  "@type": "Class",
  "label": "Corporate Governance",
  "definition": "The system of rules, practices and processes by which a company is directed and controlled, balancing the interests of shareholders, management and other stakeholders, including board oversight, executive accountability, disclosure obligations, and mechanisms that align the interests of management, shareholders, and wider society.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:governance-framework",
    "label": "Governance Framework"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:board-of-directors",
        "label": "Board of Directors"
      },
      {
        "@id": "urn:ngm:class:audit-committee",
        "label": "Audit Committee"
      },
      {
        "@id": "urn:ngm:class:shareholder-rights",
        "label": "Shareholder Rights"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:institutional-framework",
        "label": "Institutional Framework"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:fiduciary-duty",
        "label": "Fiduciary Duty"
      },
      {
        "@id": "urn:ngm:class:disclosure-requirements",
        "label": "Disclosure Requirements"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:stakeholder-trust",
        "label": "Stakeholder Trust"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:governance-code",
        "label": "Governance Code"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oecd-principles-of-corporate-governance",
        "label": "OECD Principles of Corporate Governance"
      },
      {
        "@id": "urn:ngm:class:uk-corporate-governance-code",
        "label": "UK Corporate Governance Code"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:self-regulation",
        "label": "Self-Regulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:esg",
        "label": "ESG"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stewardship",
        "label": "Stewardship"
      },
      {
        "@id": "urn:ngm:class:executive-compensation",
        "label": "Executive Compensation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:company-governance",
      "label": "Company Governance"
    },
    {
      "@id": "urn:ngm:class:board-governance",
      "label": "Board Governance"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:corporate-governance:7c431ca01c11",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab077b53213fb45c801d37dbe430fd676737717ebff4a94559306de824593aa0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:linked:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compliance]]",
      "resolved": "urn:visionflow:linked:compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audit]]",
      "resolved": "urn:visionflow:linked:audit",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Framework]]",
      "resolved": "urn:visionflow:linked:governance-framework",
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
  - The system of rules, practices and processes by which a company is directed and controlled, balancing the interests of shareholders, management and other stakeholders.

- ### Semantic Classification
  - owl-class:: governance:CorporateGovernance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Governance Framework]]
  - bridges-to:: [[Audit]], [[Risk Management]]
  - requires:: [[Accountability]], [[Transparency]]
  - enables:: [[Compliance]]

- ### Content
  - Corporate governance concerns the structures and procedures that determine how companies are directed and held accountable. It addresses the roles of the board, executive management and shareholders, and the mechanisms that align their interests.
  - Common elements include board composition, audit and risk oversight, disclosure requirements and remuneration policy. Governance codes and listing rules set expectations that companies follow or explain departures from.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
