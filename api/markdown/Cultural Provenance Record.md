public:: true

# Cultural Provenance Record
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5319a3142ae60cff3315a2e33cfd0ae5612e1cb7d7ec066c5473757cfe236209",
  "@type": "Page",
  "vc:slug": "cultural-provenance-record",
  "title": "Cultural Provenance Record",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication-record",
      "vc:label": "Authentication Record"
    },
    {
      "@id": "urn:visionflow:linked:authenticity-certification",
      "vc:label": "Authenticity Certification"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-ledger",
      "vc:label": "Blockchain Ledger"
    },
    {
      "@id": "urn:visionflow:linked:cidoc-crm",
      "vc:label": "CIDOC-CRM"
    },
    {
      "@id": "urn:visionflow:linked:condition-report",
      "vc:label": "Condition Report"
    },
    {
      "@id": "urn:visionflow:linked:conservation-database",
      "vc:label": "Conservation Database"
    },
    {
      "@id": "urn:visionflow:linked:cultural-context",
      "vc:label": "Cultural Context"
    },
    {
      "@id": "urn:visionflow:linked:cultural-heritage-management-system",
      "vc:label": "Cultural Heritage Management System"
    },
    {
      "@id": "urn:visionflow:linked:cultural-heritage-tracking",
      "vc:label": "Cultural Heritage Tracking"
    },
    {
      "@id": "urn:visionflow:linked:heritage-registry",
      "vc:label": "Heritage Registry"
    },
    {
      "@id": "urn:visionflow:linked:museum-collection-system",
      "vc:label": "Museum Collection System"
    },
    {
      "@id": "urn:visionflow:linked:museum-information-system",
      "vc:label": "Museum Information System"
    },
    {
      "@id": "urn:visionflow:linked:ownership-chain",
      "vc:label": "Ownership Chain"
    },
    {
      "@id": "urn:visionflow:linked:ownership-transfer",
      "vc:label": "Ownership Transfer"
    },
    {
      "@id": "urn:visionflow:linked:spectrum-museum-standard",
      "vc:label": "SPECTRUM Museum Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:artifact-metadata",
      "vc:label": "Artifact Metadata"
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
      "@id": "urn:visionflow:owl:class:creative-media-domain",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-archive",
      "vc:label": "Digital Archive"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-schema",
      "vc:label": "Metadata Schema"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:provenance-verification",
      "vc:label": "Provenance Verification"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20301"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cultural Provenance Record"
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
  "@id": "urn:ngm:class:cultural-provenance-record",
  "@type": "Class",
  "label": "Cultural Provenance Record",
  "definition": "A structured metadata object that documents the origin, ownership history, authenticity verification, and cultural context of cultural artifacts, artworks, or digital cultural assets to establish legitimacy and preserve heritage lineage.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:authentication-record",
        "label": "Authentication Record"
      },
      {
        "@id": "urn:ngm:class:condition-report",
        "label": "Condition Report"
      },
      {
        "@id": "urn:ngm:class:cultural-context",
        "label": "Cultural Context"
      },
      {
        "@id": "urn:ngm:class:ownership-chain",
        "label": "Ownership Chain"
      },
      {
        "@id": "urn:ngm:class:artifact-metadata",
        "label": "Artifact Metadata"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-ledger",
        "label": "Blockchain Ledger"
      },
      {
        "@id": "urn:ngm:class:conservation-database",
        "label": "Conservation Database"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:metadata-schema",
        "label": "Metadata Schema"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authenticity-certification",
        "label": "Authenticity Certification"
      },
      {
        "@id": "urn:ngm:class:cultural-heritage-tracking",
        "label": "Cultural Heritage Tracking"
      },
      {
        "@id": "urn:ngm:class:ownership-transfer",
        "label": "Ownership Transfer"
      },
      {
        "@id": "urn:ngm:class:provenance-verification",
        "label": "Provenance Verification"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cultural-heritage-management-system",
        "label": "Cultural Heritage Management System"
      },
      {
        "@id": "urn:ngm:class:museum-information-system",
        "label": "Museum Information System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cultural-provenance-record:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5319a3142ae60cff3315a2e33cfd0ae5612e1cb7d7ec066c5473757cfe236209"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication Record]]",
      "resolved": "urn:visionflow:linked:authentication-record",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authenticity Certification]]",
      "resolved": "urn:visionflow:linked:authenticity-certification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Ledger]]",
      "resolved": "urn:visionflow:linked:blockchain-ledger",
      "kind": "StubLink"
    },
    {
      "raw": "[[CIDOC-CRM]]",
      "resolved": "urn:visionflow:linked:cidoc-crm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Condition Report]]",
      "resolved": "urn:visionflow:linked:condition-report",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conservation Database]]",
      "resolved": "urn:visionflow:linked:conservation-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cultural Context]]",
      "resolved": "urn:visionflow:linked:cultural-context",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cultural Heritage Management System]]",
      "resolved": "urn:visionflow:linked:cultural-heritage-management-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cultural Heritage Tracking]]",
      "resolved": "urn:visionflow:linked:cultural-heritage-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Heritage Registry]]",
      "resolved": "urn:visionflow:linked:heritage-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Museum Collection System]]",
      "resolved": "urn:visionflow:linked:museum-collection-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Museum Information System]]",
      "resolved": "urn:visionflow:linked:museum-information-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ownership Chain]]",
      "resolved": "urn:visionflow:linked:ownership-chain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ownership Transfer]]",
      "resolved": "urn:visionflow:linked:ownership-transfer",
      "kind": "StubLink"
    },
    {
      "raw": "[[SPECTRUM Museum Standard]]",
      "resolved": "urn:visionflow:linked:spectrum-museum-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artifact Metadata]]",
      "resolved": "urn:visionflow:owl:class:artifact-metadata",
      "kind": "ResolvedLink"
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
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:creative-media-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Archive]]",
      "resolved": "urn:visionflow:owl:class:digital-archive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:owl:class:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Schema]]",
      "resolved": "urn:visionflow:owl:class:metadata-schema",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance Verification]]",
      "resolved": "urn:visionflow:owl:class:provenance-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
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
  - A structured metadata object that documents the origin, ownership history, authenticity verification, and cultural context of cultural artifacts, artworks, or digital cultural assets to establish legitimacy and preserve heritage lineage.

- ### Semantic Classification
  - owl-class:: spatial-computing:CulturalProvenanceRecord
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - bridges-to:: [[Blockchain]]
  - has-part:: [[Artifact Metadata]], [[Ownership Chain]], [[Authentication Record]], [[Cultural Context]], [[Condition Report]]
  - is-part-of:: [[Cultural Heritage Management System]], [[Museum Information System]]
  - requires:: [[Metadata Schema]], [[Digital Signature]], [[Blockchain Ledger]], [[Conservation Database]]
  - enables:: [[Provenance Verification]], [[Authenticity Certification]], [[Ownership Transfer]], [[Cultural Heritage Tracking]]
  - depends-on:: [[Museum Collection System]], [[Authentication Service]], [[Heritage Registry]], [[Digital Archive]]

- ### Content
  Cultural Provenance Record — content pending enrichment.

- ### Provenance
  - sources:: [[CIDOC-CRM]], [[SPECTRUM Museum Standard]]
  - migration-date:: 2026-04-26T00:00:00Z
