public:: true

# Soc 2

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:soc-2",
  "@type": "Page",
  "title": "Soc 2",
  "vc:slug": "soc-2",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:soc-2",
  "@type": "Class",
  "label": "Soc 2",
  "definition": "SOC 2 (System and Organisation Controls 2) is an auditing standard developed by the American Institute of Certified Public Accountants (AICPA) that evaluates the controls of service organisations relevant to security, availability, processing integrity, confidentiality, and privacy. A SOC 2 report, issued by an independent CPA, is widely used by cloud service providers and SaaS companies to demonstrate trustworthiness to enterprise customers. Type I reports assess design at a point in time; Type II reports assess operating effectiveness over a period.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:security", "label": "Security"}],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:iso-27001", "label": "ISO 27001"},
      {"@id": "urn:ngm:class:soc-1", "label": "SOC 1"},
      {"@id": "urn:ngm:class:pci-dss", "label": "PCI DSS"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:aicpa", "label": "AICPA"},
      {"@id": "urn:ngm:class:trust-services-criteria", "label": "Trust Services Criteria"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:security-audit", "label": "Security Audit"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:vendor-trust", "label": "Vendor Trust"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-security", "label": "Cloud Security"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:saas", "label": "SaaS"},
      {"@id": "urn:ngm:class:enterprise-software", "label": "Enterprise Software"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:trust-services-criteria", "label": "Trust Services Criteria"},
      {"@id": "urn:ngm:class:control-environment", "label": "Control Environment"}
    ],
    "relatedTo_2": [
      {"@id": "urn:ngm:class:gdpr", "label": "GDPR"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
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
  - [[Soc 2]] is an AICPA auditing standard assessing service organisation controls across five Trust Services Criteria.
  - Criteria: Security (mandatory), Availability, Processing Integrity, Confidentiality, and Privacy.
  - A Type I report attests control design; a Type II report attests operating effectiveness over a defined audit period.
  - Contrasts with [[ISO 27001]] (certifiable standard) and [[PCI DSS]] (payment card specific).

- ### Overview
  - Cloud service providers and SaaS vendors undergo SOC 2 audits to demonstrate trustworthiness to enterprise buyers.
  - The report is produced by an independent CPA firm and delivered to the service organisation for controlled sharing.
  - The [[Trust Services Criteria]] are defined by the AICPA and align with COSO internal control frameworks.
  - SOC 2+ reports extend the base criteria with additional criteria sets (e.g., HIPAA, HITRUST).

- ### Key Aspects
  - **Scope definition**: the system description specifying which services, infrastructure, and processes are in scope.
  - **Control activities**: technical and organisational controls mapped to each applicable Trust Services Criterion.
  - **Testing**: auditor tests control design (Type I) or samples evidence of control operation over the period (Type II).
  - **Exceptions**: deviations noted in the auditor opinion and management's response.

- ### Mechanisms
  - Organisations implement controls addressing [[Access Control]], encryption, change management, and monitoring.
  - Continuous control monitoring and evidence collection systems automate evidence gathering.
  - Third-party vendors (sub-processors) are assessed for their own SOC 2 reports under supply-chain diligence.
  - Annual audit cycles maintain ongoing assurance; bridge letters cover gaps between report periods.

- ### Applications
  - Enterprise [[SaaS]] procurement due diligence and vendor risk management.
  - [[Cloud Security]] posture validation for infrastructure providers.
  - [[Regulatory Compliance]] evidence supporting [[GDPR]], HIPAA, and other frameworks.
  - [[Data Governance]] programmes establishing supplier accountability.
  - AI platform providers demonstrating trustworthy data handling practices.

- ### Relationships
  - contrastsWith:: [[ISO 27001]]
  - contrastsWith:: [[SOC 1]]
  - contrastsWith:: [[PCI DSS]]
  - standardizedBy:: [[AICPA]]
  - standardizedBy:: [[Trust Services Criteria]]
  - requires:: [[Security Audit]]
  - requires:: [[Access Control]]
  - requires:: [[Incident Response]]
  - enables:: [[Vendor Trust]]
  - enables:: [[Regulatory Compliance]]
  - relatedTo:: [[Cloud Security]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Privacy]]
  - supports:: [[SaaS]]
  - supports:: [[Enterprise Software]]
  - hasPart:: [[Trust Services Criteria]]
  - relatedTo:: [[GDPR]]
  - relatedTo:: [[Risk Management]]

- ### Provenance
  - updated:: 2026-06-15
