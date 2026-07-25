public:: true

# ETSI Domain Application + Health
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f01f9ea97cf3f59002d6661383b7211175fd8f31caa9106972f2edc82e0a6f02",
  "@type": "Page",
  "vc:slug": "etsi-domain-application-health",
  "title": "ETSI Domain Application + Health",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:etsi-domain-taxonomy",
      "vc:label": "ETSI Domain Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gs-mec",
      "vc:label": "ETSI GS MEC"
    },
    {
      "@id": "urn:visionflow:linked:medical-platform-categorization",
      "vc:label": "Medical Platform Categorization"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:healthcare-application-classification",
      "vc:label": "Healthcare Application Classification"
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
      "vc:value": "20337"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain Application + Health"
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
  "@id": "urn:ngm:class:etsi-domain-application-health",
  "@type": "Class",
  "label": "ETSI Domain Application + Health",
  "definition": "Cross-domain marker for metaverse application components focused on healthcare and wellness including telemedicine platforms, medical training simulations, therapeutic VR applications, and health monitoring systems.",
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
        "@id": "urn:ngm:class:healthcare-application-classification",
        "label": "Healthcare Application Classification"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-application-health:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f01f9ea97cf3f59002d6661383b7211175fd8f31caa9106972f2edc82e0a6f02"
  },
  "vc:resolutions": [
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
      "raw": "[[Medical Platform Categorization]]",
      "resolved": "urn:visionflow:linked:medical-platform-categorization",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Healthcare Application Classification]]",
      "resolved": "urn:visionflow:owl:class:healthcare-application-classification",
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
  - Cross-domain marker for metaverse application components focused on healthcare and wellness including telemedicine platforms, medical training simulations, therapeutic VR applications, and health monitoring systems.
- ### Bridge-To
  - bridges-to:: [[Telecollaboration]] (tc)
- ### Semantic Classification
  - owl-class:: spatial-computing:ETSIDomainApplicationHealth
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]
- ### Relationships
  - is-part-of:: [[ETSI Domain Taxonomy]]
  - enables:: [[Healthcare Application Classification]], [[Medical Platform Categorization]]
  - depends-on:: [[InfrastructureDomain]], [[VirtualSocietyDomain]]
- ### Content
  ETSI Domain Application + Health — content pending enrichment.
- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
