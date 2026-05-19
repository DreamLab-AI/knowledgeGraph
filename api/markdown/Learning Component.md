schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#LearningComponent
legacy_uri:: urn:visionclaw:concept:spatial-computing:learning-component
public:: true

# Learning Component
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57ceecd1d876d3696759f572c5f75d99605d2c51da33b46599a2d3072b8e47de",
  "@type": "Page",
  "vc:slug": "learning-component",
  "title": "Learning Component",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:customised-training",
      "vc:label": "Customised Training"
    },
    {
      "@id": "urn:visionflow:owl:class:educational-technology",
      "vc:label": "Educational Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-5d53a234a4ce"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#LearningComponent"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9942"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Learning Component"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:learning-component"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:learning-component"
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
    "@id": "urn:visionflow:page:57ceecd1d876d3696759f572c5f75d99605d2c51da33b46599a2d3072b8e47de@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:learning-component",
  "@type": "OntologyClass",
  "label": "Learning Component",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:educational-technology",
      "vc:label": "Educational Technology"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:57ceecd1d876d3696759f572c5f75d99605d2c51da33b46599a2d3072b8e47de"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:57ceecd1d876d3696759f572c5f75d99605d2c51da33b46599a2d3072b8e47de@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Modular educational elements designed for metaverse and XR training environments, including interactive simulations, 3D models, assessment tools, and collaborative spaces that can be combined to create comprehensive immersive learning experiences.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:customised-training",
      "vc:label": "Customised Training"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:learning-component:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57ceecd1d876d3696759f572c5f75d99605d2c51da33b46599a2d3072b8e47de"
  },
  "vc:resolutions": [
    {
      "raw": "[[Customised Training]]",
      "resolved": "urn:visionflow:linked:customised-training",
      "kind": "StubLink"
    },
    {
      "raw": "[[Educational Technology]]",
      "resolved": "urn:visionflow:owl:class:educational-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:57ceecd1d876d3696759f572c5f75d99605d2c51da33b46599a2d3072b8e47de@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Modular educational elements designed for metaverse and XR training environments, including interactive simulations, 3D models, assessment tools, and collaborative spaces that can be combined to create comprehensive immersive learning experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:LearningComponent
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Educational Technology]]
  - enables:: [[Customised Training]]

- ### Content

  ## Meta for Education Program

  ### Program Launch
  - Spring 2024 announcement
  - US and UK rollout
  - Teacher and school focus
  - Training institution support
  - Gradual implementation

  ### Beta Testing (November 2024)
  - 12+ universities participating
  - US and UK institutions
  - VR/XR prototype trials
  - Classroom integration testing
  - Feedback collection

  ### Partnership Institutions
  - University of Basque Country (Spain)
  - University of Hannover (Germany)
  - Leeds University (UK)
  - VictoryXR collaboration
  - Digital twin metaversities

  ## 2024 Technology Trends

  ### AI Integration
  - Natural language processing
  - Computer vision enhancement
  - Spatial experience improvement
  - Adaptive learning support
  - Personalised feedback

  ### Platform Flexibility
  - No-code/low-code solutions
  - LMS integration capability
  - Pre-built blocks available
  - Component combination
  - Custom content creation

  ## University Implementations

  ### University of Miami
  - ENGAGE XR platform adoption
  - Spatial computing technology
  - 40 different courses
  - Teaching enhancement
  - Training improvement

  ### Digital Twin Metaversities
  - Campus ground virtualisation
  - VR headset access
  - Browser accessibility
  - Hyper-realistic spaces
  - 3D model precision

  ## Academic Research

  ### Technology Convergence
  - AI advancement integration
  - VR/AR/MR combination
  - XR and IoT convergence
  - Immersive personalisation
  - Interactive experiences

  ### Educational Potential
  - Experiential learning delivery
  - Classroom boundary transcendence
  - Meaningful situation creation
  - Learner relevance
  - Life application

  ## Industry Partnerships

  ### Metaverse Learning
  - XR technology leadership
  - VR environment creation
  - AR integration
  - Industry collaboration
  - Government partnership

  ### Skills Gap Focus
  - Real-world skill addressing
  - Bespoke programme creation
  - Education provider collaboration
  - Immersive delivery
  - Practical application

  ## Component Types

  ### Interactive Elements
  - 3D simulations
  - Virtual laboratories
  - Collaborative spaces
  - Assessment tools
  - Feedback systems

  ### Content Formats
  - Video integration
  - Audio components
  - Text overlays
  - Interactive quizzes
  - Progress trackers

  ## Platform Capabilities

  ### XR Features
  - Spatial interaction
  - Object manipulation
  - Environment exploration
  - Peer collaboration
  - Instructor guidance

  ### Customisation Options
  - Branding integration
  - Content adaptation
  - Scenario modification
  - Difficulty scaling
  - Personalisation settings

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
