public:: true

# ETSI Domain AI + Creative Media
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:578213cb0f2435ad2a6e1d55f09476262b45787bd966cc16be340c17efc8480b",
  "@type": "Page",
  "vc:slug": "etsi-domain-ai-creative-media",
  "title": "ETSI Domain AI + Creative Media",
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
      "@id": "urn:visionflow:linked:generative-content-classification",
      "vc:label": "Generative Content Classification"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-art-categorization",
      "vc:label": "AI Art Categorization"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:computation-and-intelligence-domain",
      "vc:label": "ComputationAndIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:creative-media-domain",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-domain-ai",
      "vc:label": "ETSI Domain AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20331"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain AI + Creative Media"
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
  "@id": "urn:ngm:class:etsi-domain-ai-creative-media",
  "@type": "Class",
  "label": "ETSI Domain AI + Creative Media",
  "definition": "Cross-domain marker for metaverse components that combine artificial intelligence capabilities with creative media applications such as generative content, procedural generation, and AI-assisted authoring.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:generative-content-classification",
        "label": "Generative Content Classification"
      },
      {
        "@id": "urn:ngm:class:ai-art-categorization",
        "label": "AI Art Categorization"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-ai-creative-media:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:578213cb0f2435ad2a6e1d55f09476262b45787bd966cc16be340c17efc8480b"
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
      "raw": "[[Generative Content Classification]]",
      "resolved": "urn:visionflow:linked:generative-content-classification",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Art Categorization]]",
      "resolved": "urn:visionflow:owl:class:ai-art-categorization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputationAndIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:computation-and-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:creative-media-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Domain AI]]",
      "resolved": "urn:visionflow:owl:class:etsi-domain-ai",
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
  - Cross-domain marker for metaverse components that combine artificial intelligence capabilities with creative media applications such as generative content, procedural generation, and AI-assisted authoring.

- ### Bridge-To
  - bridges-to:: [[Computer Vision]] (ai)

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ETSIDomainAICreativeMedia
  - owl-role:: Object
  - owl-inferred:: mv:VirtualObject
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]], [[CreativeMediaDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-part-of:: [[ETSI Domain Taxonomy]]
  - enables:: [[Generative Content Classification]], [[AI Art Categorization]]
  - depends-on:: [[ETSI Domain AI]], [[CreativeMediaDomain]]

- ### Content
  ETSI Domain AI + Creative Media — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
