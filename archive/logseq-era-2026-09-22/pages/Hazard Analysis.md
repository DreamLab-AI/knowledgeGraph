public:: true

# Hazard Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hazard-analysis",
  "@type": "Page",
  "vc:slug": "hazard-analysis",
  "title": "Hazard Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hazard-analysis",
  "@type": "Class",
  "label": "Hazard Analysis",
  "definition": "Hazard analysis is the systematic identification, characterisation, and prioritisation of conditions or events with the potential to cause harm to people, systems, or environments, forming the foundational step in safety engineering processes that design controls to prevent or mitigate those harms. Methods range from qualitative techniques such as HAZOP and FMEA to quantitative probabilistic risk assessment, applied across aviation, automotive, nuclear, medical devices, and increasingly AI systems.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:risk-assessment",
      "label": "Risk Assessment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      },
      {
        "@id": "urn:ngm:class:hazard-identification",
        "label": "Hazard Identification"
      },
      {
        "@id": "urn:ngm:class:risk",
        "label": "Risk Estimation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:safety-engineering",
        "label": "Safety Engineering"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-assessment-methodology",
        "label": "Risk Assessment Methodology"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      },
      {
        "@id": "urn:ngm:class:risk-assessment-methodology",
        "label": "Risk Assessment Methodology"
      },
      {
        "@id": "urn:ngm:class:probabilistic-risk-assessment",
        "label": "Probabilistic Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:hazop",
        "label": "HAZOP"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:safety-case",
        "label": "Safety Case"
      },
      {
        "@id": "urn:ngm:class:functional-safety",
        "label": "Functional Safety"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:system-model",
        "label": "System Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:fault-tolerance-system",
        "label": "Fault Tolerance System"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:safety-integrity-level",
        "label": "Safety Integrity Level"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-26262",
        "label": "ISO 26262"
      },
      {
        "@id": "urn:ngm:class:iec-61508",
        "label": "IEC 61508"
      },
      {
        "@id": "urn:ngm:class:mil-std-882",
        "label": "MIL-STD-882"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      },
      {
        "@id": "urn:ngm:class:technical-standards",
        "label": "Technical Standards"
      },
      {
        "@id": "urn:ngm:class:safety-critical-systems",
        "label": "Safety-Critical Systems"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:hazard-and-risk-analysis",
      "label": "Hazard and Risk Analysis"
    },
    {
      "@id": "urn:ngm:class:safety-risk-assessment",
      "label": "Safety Risk Assessment"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Hazard Analysis]] is the disciplined process of identifying conditions, events, or system states that could lead to harm, assessing their likelihood and severity, and establishing the basis for safety requirements and controls. It is the cornerstone of safety engineering lifecycles in regulated industries, informing design decisions from architecture through detailed implementation, and producing artefacts — hazard logs, safety cases, mitigation rationales — that demonstrate regulatory [[Compliance]].

- ### Relationships
  - [[Fault Tree Analysis]] and Failure Modes and Effects Analysis (FMEA) are the canonical quantitative and qualitative tools employed within hazard analysis, structured according to [[Risk Assessment Methodology]]s. Results directly specify requirements for [[Fault Tolerance]] mechanisms and feed into [[Fault Tolerance System]] design. The outputs must satisfy [[Technical Standards]] and [[Compliance Framework]]s specific to the application domain (e.g., ISO 26262 for automotive, DO-178C for aerospace), and the overall [[Risk Assessment]] informs resource prioritisation for safety-critical design decisions.

- ### Content
  - Hazard analysis formalised within chemical process safety in the 1970s through HAZOP (Hazard and Operability Study), developed at ICI and standardised in IEC 61882. The aerospace sector developed Failure Modes and Effects Analysis (FMEA, MIL-STD-1629) and fault tree analysis (Bell Telephone Laboratories, 1961) for missile system safety. These techniques were later adopted by the automotive industry under the ISO 26262 functional safety standard (2011) and adapted for medical devices in IEC 62304.

  - The analysis process typically follows: (1) System Definition — establish scope, operational environment, and interfaces; (2) Hazard Identification — use structured guidewords, experience databases, and model-based analysis to enumerate potential hazards; (3) Risk Estimation — assess severity and exposure frequency; (4) Risk Evaluation — compare against acceptable risk criteria; (5) Control Specification — define requirements for design safeguards, warnings, and procedural mitigations. STPA (System-Theoretic Process Analysis) is a modern extension that treats hazards as emergent from control structure flaws rather than component failures.

  - In safety-critical software, hazard analysis underpins the derivation of software safety integrity levels (SIL or ASIL) that determine the rigour of development processes, testing coverage, and verification methods. Automotive ASIL D systems require exhaustive testing, formal proof, and diverse redundancy, whilst ASIL A permits lighter-weight assurance. Toolchains from MathWorks (Simulink Design Verifier), dSpace, and IBM Rational integrate hazard analysis artefacts with model-based development workflows.

  - In 2024–2025, hazard analysis is being extended to AI and machine learning systems, where traditional component-failure models are inadequate because ML behaviour emerges from training data and statistical generalisation rather than deterministic logic. Frameworks such as ISO/PAS 8800 (AI in road vehicles) and AMLAS (Assurance of Machine Learning for Autonomous Systems) adapt classical hazard analysis vocabulary to probabilistic, data-dependent systems. Regulators including the UK CAA and EASA are requiring hazard analyses for autonomous aerial systems, expanding the methodology's reach into previously unregulated domains.

