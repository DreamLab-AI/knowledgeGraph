public:: true

# ETSI Domain: Data Management + Creative Media
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:10263b664d72c2df2787cfcfc33876526efce4fef5452418675c556400a7c422",
  "@type": "Page",
  "vc:slug": "etsi-domain-data-management-creative-media",
  "title": "ETSI Domain: Data Management + Creative Media",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-database",
      "vc:label": "Asset Database"
    },
    {
      "@id": "urn:visionflow:linked:asset-version-control",
      "vc:label": "Asset Version Control"
    },
    {
      "@id": "urn:visionflow:linked:collaborative-authoring",
      "vc:label": "Collaborative Authoring"
    },
    {
      "@id": "urn:visionflow:linked:content-distribution",
      "vc:label": "Content Distribution"
    },
    {
      "@id": "urn:visionflow:linked:content-pipeline",
      "vc:label": "Content Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:creative-media",
      "vc:label": "Creative Media"
    },
    {
      "@id": "urn:visionflow:linked:distributed-storage",
      "vc:label": "Distributed Storage"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-mec-032",
      "vc:label": "ETSI GR MEC 032"
    },
    {
      "@id": "urn:visionflow:linked:version-control",
      "vc:label": "Version Control"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "vc:label": "ETSI Metaverse Domain Taxonomy"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:media-library",
      "vc:label": "Media Library"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-management",
      "vc:label": "Metadata Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20342"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain: Data Management + Creative Media"
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
  "@id": "urn:ngm:class:etsi-domain-data-management-creative-media",
  "@type": "Class",
  "label": "ETSI Domain: Data Management + Creative Media",
  "definition": "Crossover domain for ETSI metaverse categorisation addressing data infrastructure supporting creative content workflows, asset management, and version control systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:asset-database",
        "label": "Asset Database"
      },
      {
        "@id": "urn:ngm:class:content-pipeline",
        "label": "Content Pipeline"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:media-library",
        "label": "Media Library"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Asset Version Control"
      },
      {
        "@id": "urn:ngm:class:collaborative-systems-modality",
        "label": "Collaborative Authoring"
      },
      {
        "@id": "urn:ngm:class:content-distribution",
        "label": "Content Distribution"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
        "label": "Etsi Metaverse Domain Taxonomy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-data-management-creative-media:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:10263b664d72c2df2787cfcfc33876526efce4fef5452418675c556400a7c422"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Database]]",
      "resolved": "urn:visionflow:linked:asset-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Version Control]]",
      "resolved": "urn:visionflow:linked:asset-version-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collaborative Authoring]]",
      "resolved": "urn:visionflow:linked:collaborative-authoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Distribution]]",
      "resolved": "urn:visionflow:linked:content-distribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Pipeline]]",
      "resolved": "urn:visionflow:linked:content-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Creative Media]]",
      "resolved": "urn:visionflow:linked:creative-media",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Storage]]",
      "resolved": "urn:visionflow:linked:distributed-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR MEC 032]]",
      "resolved": "urn:visionflow:linked:etsi-gr-mec-032",
      "kind": "StubLink"
    },
    {
      "raw": "[[Version Control]]",
      "resolved": "urn:visionflow:linked:version-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:owl:class:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Metaverse Domain Taxonomy]]",
      "resolved": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Media Library]]",
      "resolved": "urn:visionflow:owl:class:media-library",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Management]]",
      "resolved": "urn:visionflow:owl:class:metadata-management",
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
  - Crossover domain for ETSI metaverse categorisation addressing data infrastructure supporting creative content workflows, asset management, and version control systems.

- ### Bridge-To
  - bridges-to:: [[Computer Vision]] (ai)

- ### Semantic Classification
  - owl-class:: infrastructure:ETSIDomain_DataMgmt_Creative
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Asset Database]], [[Version Control]], [[Content Pipeline]], [[Media Library]]
  - is-part-of:: [[ETSI Metaverse Domain Taxonomy]]
  - requires:: [[Data Management]], [[Creative Media]]
  - enables:: [[Asset Version Control]], [[Collaborative Authoring]], [[Content Distribution]]
  - depends-on:: [[Distributed Storage]], [[Metadata Management]]

- ### Content
  ETSI Domain: Data Management + Creative Media — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR MEC 032]]
  - migration-date:: 2026-04-26T00:00:00Z
