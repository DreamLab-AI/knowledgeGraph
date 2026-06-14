public:: true

# Carbon Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f304b214cd0a5f2e62acb2a479eed8241b3fa2d9861287e48233682236f961d3",
  "@type": "Page",
  "vc:slug": "carbon-registry",
  "title": "Carbon Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:credit-tracking",
      "vc:label": "Credit Tracking"
    },
    {
      "@id": "urn:visionflow:linked:database-infrastructure",
      "vc:label": "Database Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:double-counting-prevention",
      "vc:label": "Double Counting Prevention"
    },
    {
      "@id": "urn:visionflow:linked:market-transparency",
      "vc:label": "Market Transparency"
    },
    {
      "@id": "urn:visionflow:linked:unique-identifiers",
      "vc:label": "Unique Identifiers"
    },
    {
      "@id": "urn:visionflow:linked:verification-process",
      "vc:label": "Verification Process"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:environmental-registry",
      "vc:label": "Environmental Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9815"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Registry"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:carbon-registry",
  "@type": "Class",
  "label": "Carbon Registry",
  "definition": "A centralized database system that tracks the issuance, ownership, transfer, and retirement of carbon credits, assigning unique serial numbers to each credit for full lifecycle traceability and preventing double-counting across voluntary and compliance carbon markets.",
  "domain": "governance",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:environmental-registry",
    "label": "Environmental Registry"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:database-infrastructure",
        "label": "Database Infrastructure"
      },
      {
        "@id": "urn:ngm:class:unique-identifiers",
        "label": "Unique Identifiers"
      },
      {
        "@id": "urn:ngm:class:verification-process",
        "label": "Verification Process"
      },
      {
        "@id": "urn:ngm:class:third-party-auditing",
        "label": "Third-Party Auditing"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:credit-tracking",
        "label": "Credit Tracking"
      },
      {
        "@id": "urn:ngm:class:double-counting-prevention",
        "label": "Double Counting Prevention"
      },
      {
        "@id": "urn:ngm:class:market-transparency",
        "label": "Market Transparency"
      },
      {
        "@id": "urn:ngm:class:carbon-credit-retirement",
        "label": "Carbon Credit Retirement"
      },
      {
        "@id": "urn:ngm:class:emissions-offsetting",
        "label": "Emissions Offsetting"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:serial-number-issuance",
        "label": "Serial Number Issuance"
      },
      {
        "@id": "urn:ngm:class:project-documentation",
        "label": "Project Documentation"
      },
      {
        "@id": "urn:ngm:class:ownership-ledger",
        "label": "Ownership Ledger"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:carbon-market",
        "label": "Carbon Market"
      },
      {
        "@id": "urn:ngm:class:climate-governance-infrastructure",
        "label": "Climate Governance Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:vcs-standard",
        "label": "VCS Standard"
      },
      {
        "@id": "urn:ngm:class:gold-standard",
        "label": "Gold Standard"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:icvcm",
        "label": "ICVCM"
      },
      {
        "@id": "urn:ngm:class:corsia",
        "label": "CORSIA"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:voluntary-carbon-market",
        "label": "Voluntary Carbon Market"
      },
      {
        "@id": "urn:ngm:class:compliance-carbon-market",
        "label": "Compliance Carbon Market"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:redd-plus",
        "label": "REDD+"
      },
      {
        "@id": "urn:ngm:class:carbon-offset-project",
        "label": "Carbon Offset Project"
      },
      {
        "@id": "urn:ngm:class:greenhouse-gas-accounting",
        "label": "Greenhouse Gas Accounting"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:carbon-credit-registry",
      "label": "Carbon Credit Registry"
    },
    {
      "@id": "urn:ngm:class:emissions-registry",
      "label": "Emissions Registry"
    }
  ],
  "quality": 0.65,
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
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-registry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f304b214cd0a5f2e62acb2a479eed8241b3fa2d9861287e48233682236f961d3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Credit Tracking]]",
      "resolved": "urn:visionflow:linked:credit-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Database Infrastructure]]",
      "resolved": "urn:visionflow:linked:database-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Double Counting Prevention]]",
      "resolved": "urn:visionflow:linked:double-counting-prevention",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Transparency]]",
      "resolved": "urn:visionflow:linked:market-transparency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Unique Identifiers]]",
      "resolved": "urn:visionflow:linked:unique-identifiers",
      "kind": "StubLink"
    },
    {
      "raw": "[[Verification Process]]",
      "resolved": "urn:visionflow:linked:verification-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Environmental Registry]]",
      "resolved": "urn:visionflow:owl:class:environmental-registry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A centralized database system that tracks the issuance, ownership, transfer, and retirement of carbon credits, assigning unique serial numbers to each credit for full lifecycle traceability and preventing double-counting across voluntary and compliance carbon markets.

- ### Semantic Classification
  - owl-class:: spatial-computing:CarbonRegistry
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Environmental Registry]]
  - requires:: [[Database Infrastructure]], [[Verification Process]], [[Unique Identifiers]]
  - enables:: [[Credit Tracking]], [[Double Counting Prevention]], [[Market Transparency]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Major Voluntary Market Registries**:
		- **Verra (VCS)**: World's most widely used, 2,300+ projects, 1.3B credits issued
		- **Gold Standard**: WWF-founded, emphasis on sustainable development
		- **American Carbon Registry (ACR)**: Oldest voluntary program
		- **Climate Action Reserve (CAR)**: North America focused
		- **Architecture for REDD+ Transactions (ART)**: REDD+ jurisdictional programs
  - **Registry Functions**:
		- Project registration and documentation
		- Credit issuance with unique serial numbers
		- Ownership tracking and transfer recording
		- Retirement (permanent removal from circulation)
		- Public transparency and auditability
  - **Research Resources**: Berkeley Carbon Trading Project database aggregates all five major registries for research and transparency
  - **Quality Standards**: ICVCM approval, CORSIA eligibility verification
  - ## Applications
  - Carbon credit lifecycle management
  - Project documentation and verification
  - Market transparency and research
  - Regulatory compliance tracking
  - Double-counting prevention

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
