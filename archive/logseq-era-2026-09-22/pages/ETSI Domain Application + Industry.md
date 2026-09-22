public:: true

# ETSI Domain Application + Industry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e8233b79e371b6f64bfcb86578a1ddb58d73e8498bdd1f9da60c57a7bce2735d",
  "@type": "Page",
  "vc:slug": "etsi-domain-application-industry",
  "title": "ETSI Domain Application + Industry",
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
      "@id": "urn:visionflow:linked:industrial-application-classification",
      "vc:label": "Industrial Application Classification"
    },
    {
      "@id": "urn:visionflow:linked:manufacturing-platform-categorization",
      "vc:label": "Manufacturing Platform Categorization"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20338"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain Application + Industry"
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
  "@id": "urn:ngm:class:etsi-domain-application-industry",
  "@type": "Class",
  "label": "ETSI Domain Application + Industry",
  "definition": "Cross-domain marker for metaverse application components focused on industrial applications including manufacturing simulations, industrial digital twins, predictive maintenance, remote operations, and industrial training systems.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-application-industry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e8233b79e371b6f64bfcb86578a1ddb58d73e8498bdd1f9da60c57a7bce2735d"
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
      "raw": "[[Industrial Application Classification]]",
      "resolved": "urn:visionflow:linked:industrial-application-classification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Manufacturing Platform Categorization]]",
      "resolved": "urn:visionflow:linked:manufacturing-platform-categorization",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - Cross-domain marker for metaverse application components focused on industrial applications including manufacturing simulations, industrial digital twins, predictive maintenance, remote operations, and industrial training systems.
- ### Bridge-To
  - bridges-to:: [[Autonomous Robot]] (rb)
- ### Semantic Classification
  - owl-class:: spatial-computing:ETSIDomainApplicationIndustry
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]
- ### Relationships
  - is-part-of:: [[ETSI Domain Taxonomy]]
  - enables:: [[Industrial Application Classification]], [[Manufacturing Platform Categorization]]
  - depends-on:: [[InfrastructureDomain]], [[VirtualEconomyDomain]]
- ### Content
  ETSI Domain Application + Industry — content pending enrichment.
- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
