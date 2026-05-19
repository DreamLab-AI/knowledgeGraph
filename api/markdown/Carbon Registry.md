schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#CarbonRegistry
legacy_uri:: urn:visionclaw:concept:spatial-computing:carbon-registry
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-0daad976c3cf"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#CarbonRegistry"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9815"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Registry"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:carbon-registry"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:carbon-registry"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f304b214cd0a5f2e62acb2a479eed8241b3fa2d9861287e48233682236f961d3@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:environmental-registry",
      "label": "Environmental Registry"
    }
  ],
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
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f304b214cd0a5f2e62acb2a479eed8241b3fa2d9861287e48233682236f961d3@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
