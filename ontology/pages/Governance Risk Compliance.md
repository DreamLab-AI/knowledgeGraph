public:: true

# Governance Risk Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b8b68308832394e08449890a6728023d46ce98bb8680295812f57c047ec10769",
  "@type": "Page",
  "vc:slug": "governance-risk-compliance",
  "title": "Governance Risk Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:compliance-monitoring",
      "vc:label": "Compliance Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:grc-platform",
      "vc:label": "Grc Platform"
    },
    {
      "@id": "urn:visionflow:linked:operational-risk",
      "vc:label": "Operational Risk"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:governance-risk-compliance",
  "@type": "Class",
  "label": "Governance Risk Compliance",
  "definition": "An integrated organisational discipline that aligns corporate governance, enterprise risk management, and regulatory compliance into one coordinated capability, so that objectives are set and overseen reliably, uncertainty is addressed within appetite, and the organisation acts with integrity within legal and regulatory boundaries. Formalised by OCEG's 'principled performance' model, GRC replaces siloed oversight functions with shared taxonomies of risks, controls, policies, and obligations, typically operationalised through dedicated platforms.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:governance",
    "label": "Governance"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:compliance-monitoring",
        "label": "Compliance Monitoring"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:grc-platform",
        "label": "Grc Platform"
      },
      {
        "@id": "urn:ngm:class:operational-risk",
        "label": "Operational Risk"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "An integrated organisational discipline that aligns corporate governance, enterprise risk management, and regulatory compliance into one coordinated capability, so that objectives are set and overseen reliably, uncertainty is addressed within appetite, and the organisation acts with integrity within legal and regulatory boundaries. Formalised by OCEG's 'principled performance' model, GRC replaces siloed oversight functions with shared taxonomies of risks, controls, policies, and obligations, typically operationalised through dedicated platforms."

- ### Semantic Classification
  - owl-class:: governance:GovernanceRiskCompliance
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Governance]]
  - has-part:: [[Risk Management]], [[Regulatory Compliance]]
  - uses:: [[Compliance Monitoring]]
  - related-to:: [[Grc Platform]]

- ### Content

  ## Definition

  **Governance, risk, and compliance (GRC)** names the integration of three oversight disciplines that, run separately, duplicate effort and leave gaps: *governance* — the structures and decision rights by which leadership sets objectives and holds the organisation to account; *risk management* — identifying, assessing, and treating the uncertainties that threaten those objectives; and *compliance* — meeting the external laws, regulations, and standards and the internal policies the organisation binds itself to. The term was coined in the early 2000s (popularised by OCEG and analyst firms in the wake of Sarbanes-Oxley), when boards discovered that audit, risk, legal, and IT security were each maintaining their own incompatible registers of essentially the same controls.

  The integrating move is a shared model: one taxonomy of obligations, risks, policies, and controls, mapped to each other and to organisational units, so a single control ("access reviews quarterly") can evidence many obligations (SOX, ISO 27001, GDPR, PCI DSS) and inform many risk assessments at once. Around this model sit common workflows — control testing, issue and remediation tracking, policy attestation, third-party due diligence — and roll-up reporting that gives boards a defensible view of exposure. Concepts such as the "three lines" model (operational management, risk/compliance functions, internal audit) describe how accountability is layered across the integrated whole.

  In this graph, GRC subsumes [[Risk Management]] and [[Regulatory Compliance]] as constituent parts under [[Governance]], draws on continuous [[Compliance Monitoring]] for evidence, bridges into [[Operational Risk]] practice in regulated finance, and is operationalised in software as the [[Grc Platform]].

  ## Current Landscape

  - **Frameworks**: OCEG's GRC Capability Model ("Red Book"), COSO ERM and Internal Control frameworks, ISO 31000 for risk and ISO 37301 for compliance management, and NIST frameworks on the IT risk side.
  - **Tooling**: enterprise platforms (ServiceNow IRM, Archer, MetricStream, LogicGate, AuditBoard, Vanta and Drata at the lighter end) automate control mapping, evidence collection, and attestation; "compliance as code" pushes control checks into CI/CD pipelines.
  - **Drivers**: regulatory volume and velocity (financial services, privacy, AI regulation such as the EU AI Act), ESG and supply-chain due-diligence duties, and cyber risk have widened GRC's scope from financial controls to the whole operating model.
  - **Direction of travel**: continuous controls monitoring over point-in-time audits, quantified risk (FAIR) over heat maps, and increasing use of AI to map obligations to controls — which itself becomes a governed risk within the same GRC apparatus.
  - **Market and AI**: MarketsandMarkets values the enterprise GRC (eGRC) market at USD 20.56bn in 2025, projected to USD 39.99bn by 2030 (14.2% CAGR); in March 2025 ServiceNow agreed to acquire Moveworks for USD 2.85bn to push agentic AI into risk and compliance workflows, and vendors now ship dedicated "AI Risk and Compliance" modules (e.g. ServiceNow, 2025) to govern AI systems within the GRC apparatus itself.
  - **Market split (2026)**: the platform market has bifurcated into lightweight compliance-automation tools (Vanta, Drata, Secureframe) optimised for SOC 2 / ISO 27001 evidence collection, and integrated risk-management suites (ServiceNow IRM, Archer, IBM OpenPages, LogicGate, OneTrust) covering enterprise risk, policy, vendor and business-continuity management.

  **Sources**:
  - https://www.marketsandmarkets.com/ResearchInsight/enterprise-governance-risk-compliance-market.asp
  - https://www.servicenow.com/docs/r/zurich/governance-risk-compliance/r_WhatIsGRC.html
  - https://pathlock.com/blog/grc/list-of-top-grc-tools-and-softwares/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
