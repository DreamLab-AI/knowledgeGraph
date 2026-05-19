schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#LearningModule
legacy_uri:: urn:visionclaw:concept:spatial-computing:learning-module
public:: true

# Learning Module
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0ae2297207e22786b0bea443167e7d1de9da2f3e268250a03cbea945f8c58f5a",
  "@type": "Page",
  "vc:slug": "learning-module",
  "title": "Learning Module",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:structured-training",
      "vc:label": "Structured Training"
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
      "vc:value": "sha256-12-1949813d5f6a"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#LearningModule"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9944"
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
      "vc:value": "Learning Module"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:learning-module"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:learning-module"
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
    "@id": "urn:visionflow:page:0ae2297207e22786b0bea443167e7d1de9da2f3e268250a03cbea945f8c58f5a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:learning-module",
  "@type": "OntologyClass",
  "label": "Learning Module",
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
    "@id": "urn:visionflow:page:0ae2297207e22786b0bea443167e7d1de9da2f3e268250a03cbea945f8c58f5a"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0ae2297207e22786b0bea443167e7d1de9da2f3e268250a03cbea945f8c58f5a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Self-contained educational units within VR and metaverse training systems that provide structured learning experiences, including interactive simulations, assessments, and collaborative activities designed for specific skill development objectives.",
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
      "@id": "urn:visionflow:linked:structured-training",
      "vc:label": "Structured Training"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:learning-module:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0ae2297207e22786b0bea443167e7d1de9da2f3e268250a03cbea945f8c58f5a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Structured Training]]",
      "resolved": "urn:visionflow:linked:structured-training",
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
    "@id": "urn:visionflow:page:0ae2297207e22786b0bea443167e7d1de9da2f3e268250a03cbea945f8c58f5a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Self-contained educational units within VR and metaverse training systems that provide structured learning experiences, including interactive simulations, assessments, and collaborative activities designed for specific skill development objectives.

- ### Semantic Classification
  - owl-class:: spatial-computing:LearningModule
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Educational Technology]]
  - enables:: [[Structured Training]]

- ### Content

  ## Healthcare Training Modules

  ### ACLS Training
  - VR-based multiplayer module
  - Advanced cardiac life support
  - Metaverse environment delivery
  - Simulation supplement
  - Machine or educator guidance

  ### Module Benefits
  - Immersion and engagement
  - Social connection enabling
  - Shared learning experience
  - Practical skill development
  - Real-time feedback

  ## Mining Safety Training

  ### University of Utah Programme
  - Minverso partnership
  - Health and safety training
  - Evacuation training system
  - Public release (Feb 2024)
  - Real-time emergency guidance

  ### Educational Framework
  - Theoretical knowledge bridging
  - Practical application
  - Underground worker support
  - Emergency preparedness
  - Safety protocol training

  ## Academic Courses

  ### University of Surrey (2024/5)
  - VR/AR concepts module
  - Metaverse exploration
  - Technology challenges
  - Industry impact analysis
  - Society considerations

  ### STEM Education Research
  - MeILE platform usage
  - Community of Inquiry framework
  - Student interaction enhancement
  - Collaboration improvement
  - Avatar and gamification

  ## Training Effectiveness

  ### PwC Research Findings
  - 4x more focused learners
  - 275% confidence improvement
  - 4x faster training completion
  - Time and cost savings
  - Skill application readiness

  ### Business Adoption
  - 51% integrating VR strategy
  - 34% value training benefits
  - Dedicated business lines
  - People development focus
  - Effective skill building

  ## Module Framework

  ### Meta-MILE Framework
  - Multi-layered design
  - Immersive environment structure
  - Metaverse infrastructure integration
  - Personalised interactions
  - Social collaboration

  ### Advanced Components
  - Assessment techniques
  - Personalisation systems
  - Collaboration tools
  - Feedback mechanisms
  - Progress tracking

  ## Module Types

  ### Simulation Modules
  - Procedure practice
  - Scenario exploration
  - Skill rehearsal
  - Error-safe learning
  - Repeated practice

  ### Assessment Modules
  - Knowledge verification
  - Skill evaluation
  - Competency testing
  - Progress measurement
  - Certification preparation

  ### Collaborative Modules
  - Team exercises
  - Group projects
  - Peer learning
  - Social interaction
  - Communication practice

  ## Development Considerations

  ### Content Design
  - Learning objective alignment
  - Engagement optimisation
  - Interactivity integration
  - Feedback loop creation
  - Assessment embedding

  ### Technical Requirements
  - VR platform compatibility
  - LMS integration
  - Performance optimisation
  - Accessibility support
  - Multi-device delivery

  ## Industry Applications

  ### Healthcare
  - Medical procedures
  - Patient communication
  - Emergency response
  - Equipment operation
  - Protocol compliance

  ### Industrial
  - Safety training
  - Equipment operation
  - Process simulation
  - Emergency evacuation
  - Compliance training

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
