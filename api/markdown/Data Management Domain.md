public:: true

# Data Management Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4d1c7e4db971fb9cbdb944607180d5f5415e4fe7c5d41853e59d602e062e3670",
  "@type": "Page",
  "vc:slug": "data-management-domain",
  "title": "Data Management Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-model",
      "vc:label": "Data Model"
    },
    {
      "@id": "urn:visionflow:linked:storage-architecture",
      "vc:label": "Storage Architecture"
    },
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:indexing",
      "vc:label": "Indexing"
    },
    {
      "@id": "urn:visionflow:linked:backup-and-recovery",
      "vc:label": "Backup and Recovery"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems-domain",
      "vc:label": "Distributed Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:analytics",
      "vc:label": "Analytics"
    },
    {
      "@id": "urn:visionflow:linked:reliable-persistence",
      "vc:label": "Reliable Persistence"
    },
    {
      "@id": "urn:visionflow:linked:data-governance-domain",
      "vc:label": "Data Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web-domain",
      "vc:label": "Semantic Web Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:dama-dmbok",
      "vc:label": "DAMA-DMBOK"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Management Domain"
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
  "@id": "urn:ngm:class:data-management-domain",
  "@type": "Class",
  "label": "Data Management Domain",
  "definition": "The Data Management Domain classifies concepts concerning the storage, organisation, retrieval and lifecycle of data within systems. It covers data models, storage architectures, integration and the operations that maintain availability and integrity. As a top-level subject axis it provides the technical foundation on which analytics, governance and applications operate.",
  "domain": "data",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Infra Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      },
      {
        "@id": "urn:ngm:class:storage-architecture",
        "label": "Storage Architecture"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:indexing",
        "label": "Indexing"
      },
      {
        "@id": "urn:ngm:class:backup-and-recovery",
        "label": "Backup and Recovery"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-systems-domain",
        "label": "Distributed Systems Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:analytics",
        "label": "Analytics"
      },
      {
        "@id": "urn:ngm:class:reliable-persistence",
        "label": "Reliable Persistence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-management-domain:945219c768a8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4d1c7e4db971fb9cbdb944607180d5f5415e4fe7c5d41853e59d602e062e3670"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Model]]",
      "resolved": "urn:visionflow:linked:data-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Storage Architecture]]",
      "resolved": "urn:visionflow:linked:storage-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Indexing]]",
      "resolved": "urn:visionflow:linked:indexing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Backup and Recovery]]",
      "resolved": "urn:visionflow:linked:backup-and-recovery",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems Domain]]",
      "resolved": "urn:visionflow:linked:distributed-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Analytics]]",
      "resolved": "urn:visionflow:linked:analytics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reliable Persistence]]",
      "resolved": "urn:visionflow:linked:reliable-persistence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Governance Domain]]",
      "resolved": "urn:visionflow:linked:data-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web Domain]]",
      "resolved": "urn:visionflow:linked:semantic-web-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAMA-DMBOK]]",
      "resolved": "urn:visionflow:linked:dama-dmbok",
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
  - The Data Management Domain classifies concepts concerning the storage, organisation, retrieval and lifecycle of data within systems. It covers data models, storage architectures, integration and the operations that maintain availability and integrity. As a top-level subject axis it provides the technical foundation on which analytics, governance and applications operate.

- ### Semantic Classification
  - owl-class:: dm:DataManagementDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Data Governance Domain]], [[Semantic Web Domain]]
  - has-part:: [[Data Model]], [[Storage Architecture]], [[Data Integration]], [[Indexing]], [[Backup and Recovery]]
  - requires:: [[Distributed Systems Domain]]
  - enables:: [[Analytics]], [[Reliable Persistence]]

- ### Content
  - Data management concerns the practical means of storing and organising data so that it can be retrieved efficiently and kept consistent. It selects data models and storage architectures suited to the access patterns and consistency needs of an application. Indexing, partitioning and caching shape the trade-off between read and write performance.
  - The domain addresses integration, reconciling data from multiple sources into coherent forms for use, and the operations that preserve durability such as backup, replication and recovery. It manages the data lifecycle from ingestion through transformation, archival and deletion. Consistency and availability guarantees are inherited from the underlying distributed systems.
  - Data management bridges to data governance, which sets the policies it must enforce, and to the semantic web, which adds machine-interpretable structure. It depends on the Distributed Systems Domain for the consistency and durability of data at scale.

- ### Provenance
  - sources:: [[DAMA-DMBOK]]
  - migration-date:: 2026-05-29T00:00:00Z
