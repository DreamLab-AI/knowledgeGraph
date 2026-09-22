public:: true

# Phase Transition

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:phase-transition",
  "@type": "Page",
  "title": "Phase Transition",
  "vc:slug": "phase-transition",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:phase-transition",
  "@type": "Class",
  "label": "Phase Transition",
  "definition": "A phase transition is a qualitative, often abrupt, change in the macroscopic behaviour of a system as a control parameter crosses a critical threshold. Originating in statistical physics to describe transformations such as freezing or magnetisation, the concept is now applied to complex and learning systems where a small change in scale, data, or connectivity produces a discontinuous jump in capability. It is closely associated with emergence and critical phenomena.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:complex-systems",
      "label": "Complex Systems"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:complex-systems",
        "label": "Complex Systems"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      },
      {
        "@id": "urn:ngm:class:emergence",
        "label": "Emergence"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      },
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:complex-systems",
        "label": "Complex Systems"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:thermodynamics",
        "label": "Thermodynamics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:chaos-theory",
        "label": "Chaos Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      },
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:self-organisation",
        "label": "Self-Organisation"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:emergence",
        "label": "Emergence"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:self-organisation",
        "label": "Self-Organisation"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A phase transition is a qualitative, often abrupt, change in the macroscopic behaviour of a system as a control parameter crosses a critical threshold. Originating in statistical physics to describe transformations such as freezing or magnetisation, the concept is now applied to complex and learning systems where a small change in scale, data, or connectivity produces a discontinuous jump in capability. It is closely associated with emergence and critical phenomena.
  - [[Complex Systems]] [[Scaling Laws]] [[Emergent Capabilities]] [[Self-Organisation]]
- ### Overview
  - Phase transitions mark points where the collective behaviour of many interacting components reorganises qualitatively.
  - Near a critical point, systems often exhibit large fluctuations, long-range correlations, and power-law behaviour.
  - In machine learning the term describes sharp jumps in capability as model scale, data, or training compute increases.
- ### Key aspects
  - An order parameter quantifies the degree of order and changes character across the transition.
  - Critical points separate distinct phases and can be first-order (discontinuous) or continuous.
  - Control parameters such as temperature, density, or model scale drive the system across the boundary.
  - Emergent, system-level properties appear that are not evident in individual components.
- ### Applications
  - Explaining emergent abilities of large language models as scale crosses thresholds.
  - Modelling percolation, connectivity, and resilience in networks and infrastructure.
  - Analysing tipping points in collective and self-organising systems.
- ### Relationships
  - partOf:: [[Complex Systems]]
  - hasPart:: [[Scaling Laws]]
  - enables:: [[Emergent Capabilities]]
  - enables:: [[Emergence]]
  - supports:: [[Emergent Capabilities]]
  - supports:: [[Resilience]]
  - requires:: [[Complex Systems]]
  - dependsOn:: [[Thermodynamics]]
  - uses:: [[Chaos Theory]]
  - relatedTo:: [[Scaling Laws]]
  - relatedTo:: [[Self-Organisation]]
  - relatedTo:: [[Large Language Model]]
  - relatedTo:: [[Emergence]]
  - relatedTo:: [[Deep Learning]]
  - contrastsWith:: [[Self-Organisation]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
