public:: true

# Supply Chain Risk Management
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:supply-chain-risk-management", "@type":"Page", "title":"Supply Chain Risk Management", "vc:slug":"supply-chain-risk-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:supply-chain-risk-management",
  "@type": "Class",
  "label": "Supply Chain Risk Management",
  "definition": "Supply chain risk management is the systematic identification, assessment, mitigation, and monitoring of risks that arise from an organisation's network of suppliers, vendors, and logistics dependencies. It addresses disruption, quality, financial, geopolitical, cyber, and integrity risks across multiple tiers of suppliers, including the software supply chain. Practitioners apply frameworks such as the NIST risk management approach, conduct vendor due diligence, and use artefacts like the software bill of materials to gain visibility. The goal is resilient, continuous operation in the face of upstream uncertainty and threats.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:risk-management-framework", "label": "Risk Management Framework" }
  ],
  "relations": {
    "partOf": [
      { "@id": "urn:ngm:class:risk-management-framework", "label": "Risk Management Framework" }
    ],
    "hasPart": [
      { "@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment" },
      { "@id": "urn:ngm:class:risk-mitigation", "label": "Risk Mitigation" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment" },
      { "@id": "urn:ngm:class:threat-modelling", "label": "Threat Modelling" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:software-bill-of-materials", "label": "Software Bill of Materials" },
      { "@id": "urn:ngm:class:vulnerability-management", "label": "Vulnerability Management" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:supply-chain-security", "label": "Supply Chain Security" },
      { "@id": "urn:ngm:class:resilience", "label": "Resilience" },
      { "@id": "urn:ngm:class:business-continuity", "label": "Business Continuity" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:operational-risk", "label": "Operational Risk" },
      { "@id": "urn:ngm:class:procurement", "label": "Procurement" }
    ],
    "standardizedBy": [
      { "@id": "urn:ngm:class:nist", "label": "NIST" },
      { "@id": "urn:ngm:class:nist-csf", "label": "NIST CSF" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:supply-chain", "label": "Supply Chain" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - Supply chain risk management is the disciplined identification, assessment, mitigation, and monitoring of risks arising from an organisation's supplier and logistics network. It is a domain-specific instance of a [[Risk Management Framework]] that spans disruption, quality, financial, cyber, and integrity risks.
  - It increasingly covers the software supply chain, drawing on [[Supply Chain Security]] practice and artefacts such as the [[Software Bill of Materials]].

- ### Overview
  - Modern organisations depend on deep, multi-tier supplier networks; a failure anywhere upstream can halt operations. Supply chain risk management makes those dependencies visible and manageable.
  - **Why it matters:** disruptions, supplier insolvency, geopolitical shocks, and compromised components in the supply chain can cause outsized damage. Proactive management builds [[Resilience]] and protects [[Business Continuity]].
  - **How it works:**
    - Suppliers and dependencies are mapped across tiers to expose concentration and single points of failure.
    - [[Risk Assessment]] and [[Threat Modelling]] characterise likelihood and impact for each dependency.
    - Mitigations (diversification, contractual controls, monitoring, [[Vulnerability Management]]) are applied.
    - Ongoing monitoring tracks supplier health, threat intelligence, and emerging vulnerabilities.

- ### Key aspects
  - **Visibility** — multi-tier mapping and inventories, including a [[Software Bill of Materials]] for components.
  - **Assessment** — vendor due diligence, criticality ratings, and exposure scoring.
  - **Mitigation** — supplier diversification, contractual safeguards, buffer stock, and security requirements.
  - **Monitoring** — continuous tracking of supplier risk, sanctions, and disclosed vulnerabilities.
  - **Governance** — alignment with [[NIST]] guidance and the [[NIST CSF]] supply-chain controls.

- ### Applications
  - Securing the software supply chain against compromised dependencies and build systems.
  - [[Procurement]] and vendor-risk programmes screening suppliers before onboarding.
  - Operational resilience planning for manufacturing and logistics networks.
  - Regulatory and audit compliance covering third-party and concentration risk.

- ### Relationships
  - subClassOf:: [[Risk Management Framework]]
  - partOf:: [[Risk Management Framework]]
  - hasPart:: [[Risk Assessment]]
  - hasPart:: [[Risk Mitigation]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Threat Modelling]]
  - uses:: [[Software Bill of Materials]]
  - uses:: [[Vulnerability Management]]
  - enables:: [[Supply Chain Security]]
  - enables:: [[Resilience]]
  - enables:: [[Business Continuity]]
  - supports:: [[Operational Risk]]
  - supports:: [[Procurement]]
  - standardizedBy:: [[NIST]]
  - standardizedBy:: [[NIST CSF]]
  - bridgesTo:: [[Cybersecurity]]
  - relatedTo:: [[Supply Chain]]

- ### Provenance
  - updated:: 2026-06-15
