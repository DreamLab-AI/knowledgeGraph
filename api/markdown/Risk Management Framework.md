public:: true

# Risk Management Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:risk-management-framework",
  "@type": "Page",
  "vc:slug": "risk-management-framework",
  "title": "Risk Management Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-management-framework",
  "@type": "Class",
  "label": "Risk Management Framework",
  "definition": "A Risk Management Framework is a structured methodology for identifying, assessing, treating, and monitoring risks to an organisation's objectives, assets, or systems. It provides a repeatable process and governance structure that links risk appetite, control selection, and assurance activities into a coherent programme aligned with recognised standards such as ISO 31000, NIST RMF, or the NIST AI RMF.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:risk-register", "label": "Risk Register"},
      {"@id": "urn:ngm:class:control-catalogue", "label": "Control Catalogue"},
      {"@id": "urn:ngm:class:risk-appetite-statement", "label": "Risk Appetite Statement"},
      {"@id": "urn:ngm:class:continuous-monitoring", "label": "Continuous Monitoring"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:risk-mitigation", "label": "Risk Mitigation"},
      {"@id": "urn:ngm:class:risk-identification", "label": "Risk Identification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"},
      {"@id": "urn:ngm:class:audit", "label": "Audit"},
      {"@id": "urn:ngm:class:residual-risk-acceptance", "label": "Residual Risk Acceptance"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:iso-31000", "label": "ISO 31000"},
      {"@id": "urn:ngm:class:nist-cybersecurity-framework", "label": "NIST Cybersecurity Framework"},
      {"@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:nist", "label": "NIST"},
      {"@id": "urn:ngm:class:security-framework", "label": "Security Framework"},
      {"@id": "urn:ngm:class:threat-modelling", "label": "Threat Modelling"},
      {"@id": "urn:ngm:class:grc-platform", "label": "GRC Platform"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"},
      {"@id": "urn:ngm:class:organisational-resilience", "label": "Organisational Resilience"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:supply-chain-risk-management", "label": "Supply Chain Risk Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:information-security-management-system", "label": "Information Security Management System"},
      {"@id": "urn:ngm:class:business-continuity-planning", "label": "Business Continuity Planning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:enterprise-risk-management-framework", "label": "Enterprise Risk Management Framework"},
    {"@id": "urn:ngm:class:integrated-risk-management", "label": "Integrated Risk Management"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Risk Management Framework]] is a structured, iterative methodology that guides organisations through the identification, classification, assessment, treatment, and ongoing monitoring of risks to their objectives and assets. It establishes the governance scaffolding — roles, accountabilities, escalation paths, and reporting cadences — needed to operate a coherent risk programme. Leading frameworks include NIST SP 800-37 (federal information systems), ISO 31000 (general risk management), and [[NIST AI RMF]] (artificial intelligence systems), each providing a vocabulary, process model, and control catalogue.

- ### Relationships
  - A Risk Management Framework is a specialisation of [[Risk Management]] and operationalises the [[Risk Assessment]] and [[Risk Mitigation]] disciplines within a formal process structure. It draws on [[NIST]] publications and sector-specific [[Security Framework]] catalogues for control guidance, and is closely coupled to [[Governance Framework]] for authority and accountability. [[Threat Modelling]] feeds threat identification inputs, while [[Compliance]] programmes consume the framework's output to satisfy regulatory obligations.

- ### Content
  - Formal risk management frameworks emerged from financial services regulation in the late 1980s and early 1990s, with COSO's Internal Control — Integrated Framework (1992) establishing the first widely adopted enterprise model. The US government's NIST Risk Management Framework (originally NIST SP 800-37, 2004) brought a structured six-step process — categorise, select, implement, assess, authorise, monitor — into federal IT procurement and certification practice, influencing a generation of practitioners.

  - Methodologically, a risk management framework typically defines a risk register structure, a scoring methodology (likelihood × impact matrices or quantitative Monte Carlo approaches), a control catalogue mapped to risk categories, and a residual-risk acceptance process. Continuous monitoring activities close the loop by detecting control failures or environmental changes that alter the risk profile, triggering re-assessment cycles.

  - In practice, framework implementation ranges from lightweight procedural approaches in small organisations to fully automated GRC platform deployments in complex enterprises. Sector-specific variants abound: DORA for financial-sector operational resilience (EU), the NIST Cybersecurity Framework (CSF) for critical infrastructure operators, and PCI DSS for payment card environments. Framework selection is driven by regulatory mandate, customer requirement, and organisational maturity.

  - In 2024–2025, the NIST AI RMF (released January 2023) has become the reference framework for AI risk governance in the United States, providing a Map-Measure-Manage-Govern structure applicable across AI system lifecycles. The EU AI Act's risk-tier obligations are reshaping how organisations adapt existing frameworks for AI contexts, and cross-framework harmonisation efforts are accelerating to reduce the compliance burden of operating across jurisdictions.