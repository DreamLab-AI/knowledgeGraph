public:: true

# Cognitive Load Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c67f13e449fec2ca87a9d3f685c1d3fff66b9b609bfa869e25a7460280fde2df",
  "@type": "Page",
  "vc:slug": "cognitive-load-metric",
  "title": "Cognitive Load Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:interface-design-validation",
      "vc:label": "Interface Design Validation"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-112",
      "vc:label": "ISO 9241-112"
    },
    {
      "@id": "urn:visionflow:linked:measurement-framework",
      "vc:label": "Measurement Framework"
    },
    {
      "@id": "urn:visionflow:linked:presentation-layer",
      "vc:label": "PresentationLayer"
    },
    {
      "@id": "urn:visionflow:linked:psychometric-scale",
      "vc:label": "Psychometric Scale"
    },
    {
      "@id": "urn:visionflow:linked:task-complexity-analysis",
      "vc:label": "Task Complexity Analysis"
    },
    {
      "@id": "urn:visionflow:linked:usability-testing",
      "vc:label": "Usability Testing"
    },
    {
      "@id": "urn:visionflow:linked:user-experience-assessment",
      "vc:label": "User Experience Assessment"
    },
    {
      "@id": "urn:visionflow:linked:user-feedback",
      "vc:label": "User Feedback"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:performance-optimization",
      "vc:label": "Performance Optimization"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20253"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cognitive Load Metric"
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
  "@id": "urn:ngm:class:cognitive-load-metric",
  "@type": "Class",
  "label": "Cognitive Load Metric",
  "definition": "Quantitative measure of mental effort required during virtual interaction tasks, typically assessed using standardized scales like NASA-TLX.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:measurement-framework",
        "label": "Measurement Framework"
      },
      {
        "@id": "urn:ngm:class:psychometric-scale",
        "label": "Psychometric Scale"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interface-design-validation",
        "label": "Interface Design Validation"
      },
      {
        "@id": "urn:ngm:class:performance-optimization",
        "label": "Performance Optimization"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:usability-testing",
        "label": "Usability Testing"
      },
      {
        "@id": "urn:ngm:class:user-experience-assessment",
        "label": "User Experience Assessment"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cognitive-load-metric:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c67f13e449fec2ca87a9d3f685c1d3fff66b9b609bfa869e25a7460280fde2df"
  },
  "vc:resolutions": [
    {
      "raw": "[[Interface Design Validation]]",
      "resolved": "urn:visionflow:linked:interface-design-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 9241-112]]",
      "resolved": "urn:visionflow:linked:iso-9241-112",
      "kind": "StubLink"
    },
    {
      "raw": "[[Measurement Framework]]",
      "resolved": "urn:visionflow:linked:measurement-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[PresentationLayer]]",
      "resolved": "urn:visionflow:linked:presentation-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Psychometric Scale]]",
      "resolved": "urn:visionflow:linked:psychometric-scale",
      "kind": "StubLink"
    },
    {
      "raw": "[[Task Complexity Analysis]]",
      "resolved": "urn:visionflow:linked:task-complexity-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Usability Testing]]",
      "resolved": "urn:visionflow:linked:usability-testing",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Experience Assessment]]",
      "resolved": "urn:visionflow:linked:user-experience-assessment",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Feedback]]",
      "resolved": "urn:visionflow:linked:user-feedback",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Performance Optimization]]",
      "resolved": "urn:visionflow:owl:class:performance-optimization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - Quantitative measure of mental effort required during virtual interaction tasks, typically assessed using standardized scales like NASA-TLX.

- ### Semantic Classification
  - owl-class:: spatial-computing:CognitiveLoadMetric
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[ApplicationLayer]], [[PresentationLayer]]

- ### Relationships
  - is-part-of:: [[User Experience Assessment]], [[Usability Testing]]
  - requires:: [[Measurement Framework]], [[Psychometric Scale]]
  - enables:: [[Performance Optimization]], [[Interface Design Validation]]
  - depends-on:: [[User Feedback]], [[Task Complexity Analysis]]
  - bridges-to:: [[Telecollaboration]]

- ### Content
  Cognitive Load Metric — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 9241-112]]
  - migration-date:: 2026-04-26T00:00:00Z
