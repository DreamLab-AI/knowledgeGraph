schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#APIStandard
legacy_uri:: urn:visionclaw:concept:infrastructure:api-standard
public:: true

# API Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:80b2334c7b9eba9543d7210b7fdacd668bb2283ed7c0d98a4e8df33095caac55",
  "@type": "Page",
  "vc:slug": "api-standard",
  "title": "API Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication-schema",
      "vc:label": "Authentication Schema"
    },
    {
      "@id": "urn:visionflow:linked:component-integration",
      "vc:label": "Component Integration"
    },
    {
      "@id": "urn:visionflow:linked:data-format-specification",
      "vc:label": "Data Format Specification"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-30170",
      "vc:label": "ISO/IEC 30170"
    },
    {
      "@id": "urn:visionflow:linked:oma3",
      "vc:label": "OMA3"
    },
    {
      "@id": "urn:visionflow:linked:technical-specification-document",
      "vc:label": "Technical Specification Document"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-domain",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:system-interoperability",
      "vc:label": "System Interoperability"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-5adac3c6aff5"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#APIStandard"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20100"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "API Standard"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:api-standard"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:api-standard"
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
    "@id": "urn:visionflow:page:80b2334c7b9eba9543d7210b7fdacd668bb2283ed7c0d98a4e8df33095caac55@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:api-standard",
  "@type": "Class",
  "label": "API Standard",
  "definition": "Specification defining how independent software components communicate within metaverse systems, establishing protocols and data formats for interoperability.",
  "domain": "infrastructure",
  "maturity": "established",
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:authentication-schema",
        "label": "Authentication Schema"
      },
      {
        "@id": "urn:ngm:class:data-format-specification",
        "label": "Data Format Specification"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:technical-specification-document",
        "label": "Technical Specification Document"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:component-integration",
        "label": "Component Integration"
      },
      {
        "@id": "urn:ngm:class:system-interoperability",
        "label": "System Interoperability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:api-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:80b2334c7b9eba9543d7210b7fdacd668bb2283ed7c0d98a4e8df33095caac55"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication Schema]]",
      "resolved": "urn:visionflow:linked:authentication-schema",
      "kind": "StubLink"
    },
    {
      "raw": "[[Component Integration]]",
      "resolved": "urn:visionflow:linked:component-integration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Format Specification]]",
      "resolved": "urn:visionflow:linked:data-format-specification",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 30170]]",
      "resolved": "urn:visionflow:linked:iso-iec-30170",
      "kind": "StubLink"
    },
    {
      "raw": "[[OMA3]]",
      "resolved": "urn:visionflow:linked:oma3",
      "kind": "StubLink"
    },
    {
      "raw": "[[Technical Specification Document]]",
      "resolved": "urn:visionflow:linked:technical-specification-document",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:owl:class:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[System Interoperability]]",
      "resolved": "urn:visionflow:owl:class:system-interoperability",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:80b2334c7b9eba9543d7210b7fdacd668bb2283ed7c0d98a4e8df33095caac55@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Specification defining how independent software components communicate within metaverse systems, establishing protocols and data formats for interoperability.

- ### Semantic Classification
  - owl-class:: infrastructure:APIStandard
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[InteractionDomain]]
  - implemented-in-layer:: [[DataLayer]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - has-part:: [[Communication Protocol]], [[Data Format Specification]], [[Authentication Schema]]
  - requires:: [[Technical Specification Document]]
  - enables:: [[System Interoperability]], [[Component Integration]]

- ### Content
  API Standard — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]], [[OMA3]], [[ISO/IEC 30170]]
  - migration-date:: 2026-04-26T00:00:00Z
