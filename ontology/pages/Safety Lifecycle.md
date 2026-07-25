public:: true

# Safety Lifecycle
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:safety-lifecycle",
  "@type": "Page",
  "title": "Safety Lifecycle",
  "vc:slug": "safety-lifecycle",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safety-lifecycle",
  "@type": "Class",
  "label": "Safety Lifecycle",
  "definition": "The safety lifecycle is a structured, end-to-end process defined by functional-safety standards for managing safety from concept through decommissioning. It organises activities such as hazard and risk analysis, safety requirement allocation, design, implementation, verification, validation, operation, and modification into defined phases with documented inputs, outputs, and review gates. Standards such as IEC 61508, IEC 62061, and ISO 26262 prescribe safety lifecycles to ensure that safety-related systems achieve and sustain their required integrity levels.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:functional-safety",
      "label": "Functional Safety"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:functional-safety",
        "label": "Functional Safety"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:hazard-analysis",
        "label": "Hazard Analysis"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:failure-mode-and-effects-analysis",
        "label": "Failure Mode And Effects Analysis"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hazard-analysis",
        "label": "Hazard Analysis"
      },
      {
        "@id": "urn:ngm:class:safety-integrity-level",
        "label": "Safety Integrity Level"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iec-61508",
        "label": "IEC 61508"
      },
      {
        "@id": "urn:ngm:class:iec-62061",
        "label": "IEC 62061"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iec-61508",
        "label": "IEC 61508"
      },
      {
        "@id": "urn:ngm:class:iso-26262",
        "label": "ISO 26262"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fmea",
        "label": "FMEA"
      },
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:safety-integrity-level",
        "label": "Safety Integrity Level"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:safety-instrumented-system",
        "label": "Safety Instrumented System"
      },
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:functional-safety",
        "label": "Functional Safety"
      },
      {
        "@id": "urn:ngm:class:safety-case",
        "label": "Safety Case"
      },
      {
        "@id": "urn:ngm:class:hazop",
        "label": "HAZOP"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The safety lifecycle is a structured, end-to-end process defined by functional-safety standards for managing safety from concept through decommissioning. It organises activities such as hazard and risk analysis, safety requirement allocation, design, implementation, verification, validation, operation, and modification into defined phases with documented inputs, outputs, and review gates. Standards such as IEC 61508, IEC 62061, and ISO 26262 prescribe safety lifecycles to ensure that safety-related systems achieve and sustain their required integrity levels.
  - Core related concepts: [[Functional Safety]], [[Hazard Analysis]], [[IEC 61508]], [[Safety Integrity Level]], [[Failure Mode And Effects Analysis]].

- ### Overview
  - The safety lifecycle imposes discipline on the development and operation of safety-related systems by sequencing activities and tying each to verifiable evidence. It begins with understanding the hazards and the risk they pose, derives safety requirements and integrity targets, and then ensures through design, verification, and validation that those targets are met before operation. Crucially, it continues through operation and change, recognising that safety is sustained, not achieved once.

- ### Mechanisms
  - Concept and hazard analysis: hazards are identified and the associated risk quantified to set required risk reduction.
  - Requirement allocation: safety functions and their integrity levels are specified and allocated to system elements.
  - Realisation and verification: design and implementation are checked against requirements through analysis, review, and test.
  - Operation and modification: in-service monitoring, maintenance, and managed change preserve integrity across the system's life.

- ### Applications
  - Industrial process safety governed by IEC 61508 and IEC 62061.
  - Automotive functional safety under ISO 26262.
  - Machinery and robotics safety integration and validation.
  - Safety-instrumented systems in process and energy industries.

- ### Relationships
  - subClassOf:: [[Functional Safety]]
  - partOf:: [[Functional Safety]]
  - hasPart:: [[Hazard Analysis]]
  - hasPart:: [[Risk Assessment]]
  - hasPart:: [[Failure Mode And Effects Analysis]]
  - requires:: [[Hazard Analysis]]
  - requires:: [[Safety Integrity Level]]
  - implements:: [[IEC 61508]]
  - implements:: [[IEC 62061]]
  - standardizedBy:: [[IEC 61508]]
  - standardizedBy:: [[ISO 26262]]
  - uses:: [[FMEA]]
  - uses:: [[Fault Tree Analysis]]
  - enables:: [[Safety Integrity Level]]
  - supports:: [[Safety Instrumented System]]
  - supports:: [[Reliability Engineering]]
  - relatedTo:: [[Functional Safety]]
  - relatedTo:: [[Safety Case]]
  - relatedTo:: [[HAZOP]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
