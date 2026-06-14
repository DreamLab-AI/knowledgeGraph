public:: true
alias:: PhysicsEngine

# Physics Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:605d1c8d3e5b8e94b85b7c72e3209bfe8265c7dec51286891637349bdab5b129",
  "@type": "Page",
  "vc:slug": "physics-engine",
  "title": "Physics Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-engine",
      "vc:label": "3D Engine"
    },
    {
      "@id": "urn:visionflow:linked:animation-system",
      "vc:label": "Animation System"
    },
    {
      "@id": "urn:visionflow:linked:collision-detection-system",
      "vc:label": "Collision Detection System"
    },
    {
      "@id": "urn:visionflow:linked:collision-response",
      "vc:label": "Collision Response"
    },
    {
      "@id": "urn:visionflow:linked:constraint-solver",
      "vc:label": "Constraint Solver"
    },
    {
      "@id": "urn:visionflow:linked:ewg-msf-taxonomy",
      "vc:label": "EWG/MSF Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23090-3",
      "vc:label": "ISO/IEC 23090-3"
    },
    {
      "@id": "urn:visionflow:linked:kinematic-animation",
      "vc:label": "Kinematic Animation"
    },
    {
      "@id": "urn:visionflow:linked:physical-simulation",
      "vc:label": "Physical Simulation"
    },
    {
      "@id": "urn:visionflow:linked:realistic-interaction",
      "vc:label": "Realistic Interaction"
    },
    {
      "@id": "urn:visionflow:linked:siggraph-pipeline-wg",
      "vc:label": "SIGGRAPH Pipeline WG"
    },
    {
      "@id": "urn:visionflow:linked:simulation-environment",
      "vc:label": "Simulation Environment"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-infrastructure",
      "vc:label": "Compute Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:game-engine",
      "vc:label": "Game Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:graphics-api",
      "vc:label": "Graphics API"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:math-library",
      "vc:label": "Math Library"
    },
    {
      "@id": "urn:visionflow:owl:class:particle-system",
      "vc:label": "Particle System"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-pipeline",
      "vc:label": "Rendering Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:rigid-body-dynamics",
      "vc:label": "Rigid Body Dynamics"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world",
      "vc:label": "Virtual World"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20118"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Physics Engine"
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
  "@id": "urn:ngm:class:physics-engine",
  "@type": "Class",
  "label": "Physics Engine",
  "definition": "Software component that simulates physical interactions, constraints, and dynamics in real-time for virtual environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:collision-detection-system",
        "label": "Collision Detection System"
      },
      {
        "@id": "urn:ngm:class:constraint-solver",
        "label": "Constraint Solver"
      },
      {
        "@id": "urn:ngm:class:particle-system",
        "label": "Particle System"
      },
      {
        "@id": "urn:ngm:class:rigid-body-dynamics",
        "label": "Rigid Body Dynamics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      },
      {
        "@id": "urn:ngm:class:math-library",
        "label": "Math Library"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collision-response",
        "label": "Collision Response"
      },
      {
        "@id": "urn:ngm:class:kinematic-animation",
        "label": "Kinematic Animation"
      },
      {
        "@id": "urn:ngm:class:physical-simulation",
        "label": "Physical Simulation"
      },
      {
        "@id": "urn:ngm:class:realistic-interaction",
        "label": "Realistic Interaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:simulation-environment",
        "label": "Simulation Environment"
      },
      {
        "@id": "urn:ngm:class:compute-layer",
        "label": "Compute Layer"
      },
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      },
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
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
  "@id": "urn:visionflow:annotation:link-resolutions:physics-engine:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:605d1c8d3e5b8e94b85b7c72e3209bfe8265c7dec51286891637349bdab5b129"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Engine]]",
      "resolved": "urn:visionflow:linked:3-d-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Animation System]]",
      "resolved": "urn:visionflow:linked:animation-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collision Detection System]]",
      "resolved": "urn:visionflow:linked:collision-detection-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collision Response]]",
      "resolved": "urn:visionflow:linked:collision-response",
      "kind": "StubLink"
    },
    {
      "raw": "[[Constraint Solver]]",
      "resolved": "urn:visionflow:linked:constraint-solver",
      "kind": "StubLink"
    },
    {
      "raw": "[[EWG/MSF Taxonomy]]",
      "resolved": "urn:visionflow:linked:ewg-msf-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23090-3]]",
      "resolved": "urn:visionflow:linked:iso-iec-23090-3",
      "kind": "StubLink"
    },
    {
      "raw": "[[Kinematic Animation]]",
      "resolved": "urn:visionflow:linked:kinematic-animation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Physical Simulation]]",
      "resolved": "urn:visionflow:linked:physical-simulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Realistic Interaction]]",
      "resolved": "urn:visionflow:linked:realistic-interaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[SIGGRAPH Pipeline WG]]",
      "resolved": "urn:visionflow:linked:siggraph-pipeline-wg",
      "kind": "StubLink"
    },
    {
      "raw": "[[Simulation Environment]]",
      "resolved": "urn:visionflow:linked:simulation-environment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compute Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:compute-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-application",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:owl:class:game-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:owl:class:graphics-api",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Math Library]]",
      "resolved": "urn:visionflow:owl:class:math-library",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Particle System]]",
      "resolved": "urn:visionflow:owl:class:particle-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rendering Pipeline]]",
      "resolved": "urn:visionflow:owl:class:rendering-pipeline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rigid Body Dynamics]]",
      "resolved": "urn:visionflow:owl:class:rigid-body-dynamics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:owl:class:virtual-world",
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
  - Software component that simulates physical interactions, constraints, and dynamics in real-time for virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:PhysicsEngine
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[InfrastructureDomain]]
  - implemented-in-layer:: [[ComputeLayer]]

- ### Relationships
  - has-part:: [[Collision Detection System]], [[Rigid Body Dynamics]], [[Constraint Solver]], [[Particle System]]
  - is-part-of:: [[Game Engine]], [[Simulation Environment]], [[Compute Layer]], [[Virtual World]]
  - requires:: [[Compute Infrastructure]], [[Graphics API]], [[Math Library]]
  - enables:: [[Physical Simulation]], [[Realistic Interaction]], [[Collision Response]], [[Kinematic Animation]]
  - depends-on:: [[3D Engine]], [[Animation System]], [[Rendering Pipeline]]

- ### Content
  Physics Engine — content pending enrichment.

- ### Provenance
  - sources:: [[EWG/MSF Taxonomy]], [[SIGGRAPH Pipeline WG]], [[ISO/IEC 23090-3]]
  - migration-date:: 2026-04-26T00:00:00Z
