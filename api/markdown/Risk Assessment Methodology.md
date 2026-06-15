public:: true

# Risk Assessment Methodology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:risk-assessment-methodology",
  "@type": "Page",
  "vc:slug": "risk-assessment-methodology",
  "title": "Risk Assessment Methodology",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-assessment-methodology",
  "@type": "Class",
  "label": "Risk Assessment Methodology",
  "definition": "A Risk Assessment Methodology is a structured, repeatable set of procedures for identifying, analysing, and evaluating potential hazards or threats to an organisation's objectives, assets, or stakeholders, producing a prioritised risk register that informs mitigation decisions. Methodologies range from qualitative (likelihood-impact matrices) to quantitative (Monte Carlo simulation, fault tree analysis) approaches, and are codified in standards such as ISO 31000, NIST SP 800-30, and FAIR for cybersecurity contexts.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:risk-assessment",
    "label": "Risk Assessment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:risk-identification",
        "label": "Risk Identification"
      },
      {
        "@id": "urn:ngm:class:risk-analysis",
        "label": "Risk Analysis"
      },
      {
        "@id": "urn:ngm:class:risk-evaluation",
        "label": "Risk Evaluation"
      },
      {
        "@id": "urn:ngm:class:risk-treatment",
        "label": "Risk Treatment"
      },
      {
        "@id": "urn:ngm:class:risk-register",
        "label": "Risk Register"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:threat-modelling",
        "label": "Threat Modelling"
      },
      {
        "@id": "urn:ngm:class:risk-assessment-matrix",
        "label": "Risk Assessment Matrix"
      },
      {
        "@id": "urn:ngm:class:stakeholder-analysis",
        "label": "Stakeholder Analysis"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:risk-assessment-engine",
        "label": "Risk Assessment Engine"
      },
      {
        "@id": "urn:ngm:class:enterprise-risk-management",
        "label": "Enterprise Risk Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-31000-risk-management",
        "label": "ISO 31000 Risk Management"
      },
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-31000-risk-management",
        "label": "ISO 31000 Risk Management"
      },
      {
        "@id": "urn:ngm:class:nist-sp-800-30",
        "label": "NIST SP 800-30"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-risk-management",
        "label": "AI Risk Management"
      },
      {
        "@id": "urn:ngm:class:cybersecurity-risk-assessment",
        "label": "Cybersecurity Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:supply-chain-risk-management",
        "label": "Supply Chain Risk Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-simulation",
        "label": "Monte Carlo Simulation"
      },
      {
        "@id": "urn:ngm:class:failure-mode-effects-analysis",
        "label": "Failure Mode and Effects Analysis"
      },
      {
        "@id": "urn:ngm:class:probabilistic-risk-assessment",
        "label": "Probabilistic Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:risk-evaluation-framework",
      "label": "Risk Evaluation Framework"
    },
    {
      "@id": "urn:ngm:class:hazard-assessment-methodology",
      "label": "Hazard Assessment Methodology"
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
  - A [[Risk Assessment Methodology]] is a formalised procedure for systematically identifying, quantifying, and prioritising risks against an organisation's objectives, typically grounded in frameworks such as [[ISO 31000 Risk Management]] and producing outputs that drive [[Enterprise Risk Management]] decision-making.

- ### Relationships
  - Risk Assessment Methodology is a concrete instantiation of [[Risk Assessment]] concepts, standardised by [[ISO 31000 Risk Management]]; its outputs feed [[Enterprise Risk Management]] systems and specialised domains including [[AI Risk Management]]; it is frequently implemented using [[Risk Assessment Matrix]] tools and can be automated through a [[Risk Assessment Engine]].

- ### Content
  - Risk assessment as a formal discipline emerged from actuarial science, nuclear safety engineering, and occupational health in the mid-twentieth century. The Failure Mode and Effects Analysis (FMEA) method was developed by the US military in the 1940s and formally documented in MIL-P-1629 (1949). Probabilistic Risk Assessment (PRA) gained prominence after the WASH-1400 Reactor Safety Study (1975) introduced fault trees and event trees for nuclear facility risk quantification. The development of ISO 31000 in 2009 (revised 2018) provided a unified, principles-based framework applicable across sectors, while the COSO ERM framework served corporate governance contexts.
  - A complete risk assessment methodology typically follows five phases: context establishment (defining scope, objectives, and risk criteria); risk identification (systematic enumeration of hazard sources using techniques such as HAZOP, SWIFT, or threat modelling); risk analysis (determining likelihood and consequence, either qualitatively via 5×5 matrices or quantitatively via expected value or Value-at-Risk calculations); risk evaluation (comparing analysed risks against acceptance thresholds and prioritising treatment); and risk treatment (selecting and implementing controls, accepting residual risk, or transferring it via insurance). Documentation in a risk register records each identified risk, its assessed parameters, assigned owner, and treatment status.
  - Risk assessment methodologies matter because they convert subjective expert judgment into structured, auditable inputs for resource allocation decisions. Regulatory frameworks increasingly mandate specific methodologies: the EU AI Act requires conformity assessment procedures drawing on risk-based classification; DORA (Digital Operational Resilience Act) mandates ICT risk assessment for financial entities; and NIST CSF 2.0 integrates risk assessment as a foundational governance function. In AI contexts, red-teaming and adversarial risk assessment methodologies identify failure modes that conventional safety testing misses, becoming essential for high-stakes deployment decisions.
  - In 2024–2025, AI-assisted risk assessment is gaining traction: large language models are being applied to automate threat identification from regulatory text, maintenance logs, and audit reports, while machine learning models trained on historical loss data improve quantitative likelihood estimation. The EU AI Act's tiered risk classification framework has catalysed development of standardised AI system risk assessment procedures, with ENISA and NIST publishing guidance documents. Simultaneously, systemic and interconnected risks (climate, cyber, AI) are challenging traditional siloed methodologies, driving adoption of integrated risk frameworks that model cross-sector contagion through network and scenario analysis techniques.
