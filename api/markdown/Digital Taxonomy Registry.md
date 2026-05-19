public:: true

# Digital Taxonomy Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:88bd31be4d67f0274c8bb184aa11c106001a02fe35e666ec0f5f2a2fbe881015",
  "@type": "Page",
  "vc:slug": "digital-taxonomy-registry",
  "title": "Digital Taxonomy Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:analytics-and-reporting",
      "vc:label": "Analytics & Reporting"
    },
    {
      "@id": "urn:visionflow:linked:api-interface",
      "vc:label": "API Interface"
    },
    {
      "@id": "urn:visionflow:linked:change-management-process",
      "vc:label": "Change Management Process"
    },
    {
      "@id": "urn:visionflow:linked:classification-scheme-database",
      "vc:label": "Classification Scheme Database"
    },
    {
      "@id": "urn:visionflow:linked:cross-platform-categorization",
      "vc:label": "Cross-Platform Categorization"
    },
    {
      "@id": "urn:visionflow:linked:database-management-system",
      "vc:label": "Database Management System"
    },
    {
      "@id": "urn:visionflow:linked:iso-11179",
      "vc:label": "ISO 11179"
    },
    {
      "@id": "urn:visionflow:linked:oecd-crypto-asset-registry",
      "vc:label": "OECD Crypto-Asset Registry"
    },
    {
      "@id": "urn:visionflow:linked:quality-assurance-system",
      "vc:label": "Quality Assurance System"
    },
    {
      "@id": "urn:visionflow:linked:semantic-interoperability",
      "vc:label": "Semantic Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:unique-identifier-system",
      "vc:label": "Unique Identifier System"
    },
    {
      "@id": "urn:visionflow:linked:versioning-system",
      "vc:label": "Versioning System"
    },
    {
      "@id": "urn:visionflow:owl:class:authentication-service",
      "vc:label": "Authentication Service"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:computation-and-intelligence-domain",
      "vc:label": "ComputationAndIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:governance-framework",
      "vc:label": "Governance Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-repository",
      "vc:label": "Metadata Repository"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:owl:class:standardized-asset-classification",
      "vc:label": "Standardized Asset Classification"
    },
    {
      "@id": "urn:visionflow:owl:class:standards-documentation",
      "vc:label": "Standards Documentation"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy-domain",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20128"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Taxonomy Registry"
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
  "@id": "urn:ngm:class:digital-taxonomy-registry",
  "@type": "Class",
  "label": "Digital Taxonomy Registry",
  "definition": "Digital Taxonomy Registry is a type of Metadata Repository in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:metadata-repository",
      "label": "Metadata Repository"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:api-interface",
        "label": "API Interface"
      },
      {
        "@id": "urn:ngm:class:classification-scheme-database",
        "label": "Classification Scheme Database"
      },
      {
        "@id": "urn:ngm:class:unique-identifier-system",
        "label": "Unique Identifier System"
      },
      {
        "@id": "urn:ngm:class:versioning-system",
        "label": "Versioning System"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      },
      {
        "@id": "urn:ngm:class:metadata-repository",
        "label": "Metadata Repository"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:change-management-process",
        "label": "Change Management Process"
      },
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      },
      {
        "@id": "urn:ngm:class:quality-assurance-system",
        "label": "Quality Assurance System"
      },
      {
        "@id": "urn:ngm:class:authentication-service",
        "label": "Authentication Service"
      },
      {
        "@id": "urn:ngm:class:standards-documentation",
        "label": "Standards Documentation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:analytics-and-reporting",
        "label": "Analytics & Reporting"
      },
      {
        "@id": "urn:ngm:class:cross-platform-categorization",
        "label": "Cross-Platform Categorization"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:standardized-asset-classification",
        "label": "Standardized Asset Classification"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-taxonomy-registry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:88bd31be4d67f0274c8bb184aa11c106001a02fe35e666ec0f5f2a2fbe881015"
  },
  "vc:resolutions": [
    {
      "raw": "[[Analytics & Reporting]]",
      "resolved": "urn:visionflow:linked:analytics-and-reporting",
      "kind": "StubLink"
    },
    {
      "raw": "[[API Interface]]",
      "resolved": "urn:visionflow:linked:api-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[Change Management Process]]",
      "resolved": "urn:visionflow:linked:change-management-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Classification Scheme Database]]",
      "resolved": "urn:visionflow:linked:classification-scheme-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Platform Categorization]]",
      "resolved": "urn:visionflow:linked:cross-platform-categorization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Database Management System]]",
      "resolved": "urn:visionflow:linked:database-management-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 11179]]",
      "resolved": "urn:visionflow:linked:iso-11179",
      "kind": "StubLink"
    },
    {
      "raw": "[[OECD Crypto-Asset Registry]]",
      "resolved": "urn:visionflow:linked:oecd-crypto-asset-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Quality Assurance System]]",
      "resolved": "urn:visionflow:linked:quality-assurance-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Semantic Interoperability]]",
      "resolved": "urn:visionflow:linked:semantic-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Unique Identifier System]]",
      "resolved": "urn:visionflow:linked:unique-identifier-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Versioning System]]",
      "resolved": "urn:visionflow:linked:versioning-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authentication Service]]",
      "resolved": "urn:visionflow:owl:class:authentication-service",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputationAndIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:computation-and-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Framework]]",
      "resolved": "urn:visionflow:owl:class:governance-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Repository]]",
      "resolved": "urn:visionflow:owl:class:metadata-repository",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:owl:class:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standardized Asset Classification]]",
      "resolved": "urn:visionflow:owl:class:standardized-asset-classification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards Documentation]]",
      "resolved": "urn:visionflow:owl:class:standards-documentation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy-domain",
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
  - An authoritative registry that assigns unique identifiers to digital asset categories and classification schemes, supporting compliance, analytics, and standardised categorisation across platforms.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalTaxonomyRegistry
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]], [[VirtualEconomyDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]], [[DataLayer]]

- ### Relationships
  - has-part:: [[Classification Scheme Database]], [[Unique Identifier System]], [[Metadata Repository]], [[Versioning System]], [[API Interface]], [[Governance Framework]]
  - requires:: [[Database Management System]], [[Authentication Service]], [[Standards Documentation]], [[Change Management Process]], [[Quality Assurance System]]
  - enables:: [[Standardized Asset Classification]], [[Cross-Platform Categorization]], [[Regulatory Compliance]], [[Analytics & Reporting]], [[Semantic Interoperability]]

- ### Content
  Digital Taxonomy Registry — content pending enrichment.

- ### Provenance
  - sources:: [[OECD Crypto-Asset Registry]], [[ISO 11179]]
  - migration-date:: 2026-04-26T00:00:00Z
