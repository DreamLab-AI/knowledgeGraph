public:: true

# ETSI Domain Application + Education
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c2559803479cd9ecf6cfd28d6a5a7c7d7a81572c9013cf1d90fefe88646875b1",
  "@type": "Page",
  "vc:slug": "etsi-domain-application-education",
  "title": "ETSI Domain Application + Education",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:education-application-classification",
      "vc:label": "Education Application Classification"
    },
    {
      "@id": "urn:visionflow:linked:etsi-domain-taxonomy",
      "vc:label": "ETSI Domain Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gs-mec",
      "vc:label": "ETSI GS MEC"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:learning-platform-categorization",
      "vc:label": "Learning Platform Categorization"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20336"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain Application + Education"
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
  "@id": "urn:ngm:class:etsi-domain-application-education",
  "@type": "Class",
  "label": "ETSI Domain Application + Education",
  "definition": "Cross-domain marker for metaverse application components focused on education and training including virtual classrooms, immersive learning environments, educational simulations, and collaborative learning platforms.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:learning-platform-categorization",
        "label": "Learning Platform Categorization"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-domain-taxonomy",
        "label": "ETSI Domain Taxonomy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-application-education:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c2559803479cd9ecf6cfd28d6a5a7c7d7a81572c9013cf1d90fefe88646875b1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Education Application Classification]]",
      "resolved": "urn:visionflow:linked:education-application-classification",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI Domain Taxonomy]]",
      "resolved": "urn:visionflow:linked:etsi-domain-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GS MEC]]",
      "resolved": "urn:visionflow:linked:etsi-gs-mec",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Learning Platform Categorization]]",
      "resolved": "urn:visionflow:owl:class:learning-platform-categorization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society",
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
  - Cross-domain marker for metaverse application components focused on education and training including virtual classrooms, immersive learning environments, educational simulations, and collaborative learning platforms.
- ### Bridge-To
  - bridges-to:: [[Telecollaboration]] (tc)
- ### Semantic Classification
  - owl-class:: spatial-computing:ETSIDomainApplicationEducation
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]
- ### Relationships
  - is-part-of:: [[ETSI Domain Taxonomy]]
  - enables:: [[Education Application Classification]], [[Learning Platform Categorization]]
  - depends-on:: [[InfrastructureDomain]], [[VirtualSocietyDomain]]
- ### Content
  ETSI Domain Application + Education — content pending enrichment.
- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
