public:: true

# Digital Curation Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:438e4fa10dbf8630bd5c5ed5d2dfe3567508ac7d50311286004486befb794987",
  "@type": "Page",
  "vc:slug": "digital-curation-platform",
  "title": "Digital Curation Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collection-management",
      "vc:label": "Collection Management"
    },
    {
      "@id": "urn:visionflow:linked:content-discovery",
      "vc:label": "Content Discovery"
    },
    {
      "@id": "urn:visionflow:linked:content-repository",
      "vc:label": "Content Repository"
    },
    {
      "@id": "urn:visionflow:linked:cultural-heritage-preservation",
      "vc:label": "Cultural Heritage Preservation"
    },
    {
      "@id": "urn:visionflow:linked:iso-21127",
      "vc:label": "ISO 21127"
    },
    {
      "@id": "urn:visionflow:linked:metadata-manager",
      "vc:label": "Metadata Manager"
    },
    {
      "@id": "urn:visionflow:linked:preservation-engine",
      "vc:label": "Preservation Engine"
    },
    {
      "@id": "urn:visionflow:linked:preservation-policy",
      "vc:label": "Preservation Policy"
    },
    {
      "@id": "urn:visionflow:linked:public-access",
      "vc:label": "Public Access"
    },
    {
      "@id": "urn:visionflow:linked:unesco-digital-heritage",
      "vc:label": "UNESCO Digital Heritage"
    },
    {
      "@id": "urn:visionflow:linked:versioning-system",
      "vc:label": "Versioning System"
    },
    {
      "@id": "urn:visionflow:owl:class:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "Application Layer"
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
      "@id": "urn:visionflow:owl:class:creative-media-domain",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset-management",
      "vc:label": "Digital Asset Management"
    },
    {
      "@id": "urn:visionflow:owl:class:long-term-archival",
      "vc:label": "Long-Term Archival"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-standards",
      "vc:label": "Metadata Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:search-interface",
      "vc:label": "Search Interface"
    },
    {
      "@id": "urn:visionflow:owl:class:storage-infrastructure",
      "vc:label": "Storage Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society-domain",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20124"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Curation Platform"
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
  "@id": "urn:ngm:class:digital-curation-platform",
  "@type": "Class",
  "label": "Digital Curation Platform",
  "definition": "Digital Curation Platform is a type of Digital Asset Management in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:digital-asset-management",
      "label": "Digital Asset Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:content-repository",
        "label": "Content Repository"
      },
      {
        "@id": "urn:ngm:class:metadata-manager",
        "label": "Metadata Manager"
      },
      {
        "@id": "urn:ngm:class:preservation-engine",
        "label": "Preservation Engine"
      },
      {
        "@id": "urn:ngm:class:versioning-system",
        "label": "Versioning System"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:search-interface",
        "label": "Search Interface"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:preservation-policy",
        "label": "Preservation Policy"
      },
      {
        "@id": "urn:ngm:class:authentication-service",
        "label": "Authentication Service"
      },
      {
        "@id": "urn:ngm:class:digital-asset-management",
        "label": "Digital Asset Management"
      },
      {
        "@id": "urn:ngm:class:metadata-standards",
        "label": "Metadata Standards"
      },
      {
        "@id": "urn:ngm:class:storage-infrastructure",
        "label": "Storage Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collection-management",
        "label": "Collection Management"
      },
      {
        "@id": "urn:ngm:class:content-discovery",
        "label": "Content Discovery"
      },
      {
        "@id": "urn:ngm:class:cultural-heritage-preservation",
        "label": "Cultural Heritage Preservation"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-access",
        "label": "Public Access"
      },
      {
        "@id": "urn:ngm:class:long-term-archival",
        "label": "Long-Term Archival"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-curation-platform:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:438e4fa10dbf8630bd5c5ed5d2dfe3567508ac7d50311286004486befb794987"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collection Management]]",
      "resolved": "urn:visionflow:linked:collection-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Discovery]]",
      "resolved": "urn:visionflow:linked:content-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Repository]]",
      "resolved": "urn:visionflow:linked:content-repository",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cultural Heritage Preservation]]",
      "resolved": "urn:visionflow:linked:cultural-heritage-preservation",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 21127]]",
      "resolved": "urn:visionflow:linked:iso-21127",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metadata Manager]]",
      "resolved": "urn:visionflow:linked:metadata-manager",
      "kind": "StubLink"
    },
    {
      "raw": "[[Preservation Engine]]",
      "resolved": "urn:visionflow:linked:preservation-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Preservation Policy]]",
      "resolved": "urn:visionflow:linked:preservation-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Public Access]]",
      "resolved": "urn:visionflow:linked:public-access",
      "kind": "StubLink"
    },
    {
      "raw": "[[UNESCO Digital Heritage]]",
      "resolved": "urn:visionflow:linked:unesco-digital-heritage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Versioning System]]",
      "resolved": "urn:visionflow:linked:versioning-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:owl:class:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
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
      "raw": "[[ComputationAndIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:computation-and-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:creative-media-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Management]]",
      "resolved": "urn:visionflow:owl:class:digital-asset-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Long-Term Archival]]",
      "resolved": "urn:visionflow:owl:class:long-term-archival",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Standards]]",
      "resolved": "urn:visionflow:owl:class:metadata-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Search Interface]]",
      "resolved": "urn:visionflow:owl:class:search-interface",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Storage Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:storage-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society-domain",
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
  - Integrated system for organising, preserving, managing, and providing long-term access to digital cultural artifacts, collections, and heritage materials in metaverse environments.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalCurationPlatform
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[VirtualSocietyDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[Data Layer]], [[Application Layer]]

- ### Relationships
  - has-part:: [[Content Repository]], [[Metadata Manager]], [[Preservation Engine]], [[Access Control]], [[Search Interface]], [[Versioning System]]
  - requires:: [[Digital Asset Management]], [[Storage Infrastructure]], [[Metadata Standards]], [[Preservation Policy]], [[Authentication Service]]
  - enables:: [[Cultural Heritage Preservation]], [[Content Discovery]], [[Long-Term Archival]], [[Collection Management]], [[Public Access]]

- ### Content
  Digital Curation Platform — content pending enrichment.

- ### Provenance
  - sources:: [[UNESCO Digital Heritage]], [[ISO 21127]]
  - migration-date:: 2026-04-26T00:00:00Z
