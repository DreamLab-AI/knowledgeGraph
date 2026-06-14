public:: true

# ETSI Domain Application + Tourism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:262ae10c3c336f616f4749e17fc4b5c732b6693885a54d0f1a3725b5de3193e0",
  "@type": "Page",
  "vc:slug": "etsi-domain-application-tourism",
  "title": "ETSI Domain Application + Tourism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cultural-experience-categorization",
      "vc:label": "Cultural Experience Categorization"
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
      "@id": "urn:visionflow:linked:tourism-application-classification",
      "vc:label": "Tourism Application Classification"
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
      "vc:value": "20339"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain Application + Tourism"
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
  "@id": "urn:ngm:class:etsi-domain-application-tourism",
  "@type": "Class",
  "label": "ETSI Domain Application + Tourism",
  "definition": "Cross-domain marker for metaverse application components focused on tourism and hospitality including virtual tours, destination previews, cultural heritage experiences, and travel planning platforms in immersive environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
      "label": "Etsi Metaverse Domain Taxonomy"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cultural-experience-categorization",
        "label": "Cultural Experience Categorization"
      },
      {
        "@id": "urn:ngm:class:tourism-application-classification",
        "label": "Tourism Application Classification"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-application-tourism:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:262ae10c3c336f616f4749e17fc4b5c732b6693885a54d0f1a3725b5de3193e0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cultural Experience Categorization]]",
      "resolved": "urn:visionflow:linked:cultural-experience-categorization",
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
      "raw": "[[Tourism Application Classification]]",
      "resolved": "urn:visionflow:linked:tourism-application-classification",
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
  - Cross-domain marker for metaverse application components focused on tourism and hospitality including virtual tours, destination previews, cultural heritage experiences, and travel planning platforms in immersive environments.
- ### Bridge-To
  - bridges-to:: [[Telecollaboration]] (tc)
- ### Semantic Classification
  - owl-class:: spatial-computing:ETSIDomainApplicationTourism
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]
- ### Relationships
  - is-part-of:: [[ETSI Domain Taxonomy]]
  - enables:: [[Tourism Application Classification]], [[Cultural Experience Categorization]]
  - depends-on:: [[InfrastructureDomain]], [[VirtualSocietyDomain]]
- ### Content
  ETSI Domain Application + Tourism — content pending enrichment.
- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
