public:: true

# Cybersecurity Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cybersecurity-framework",
  "@type": "Page",
  "title": "Cybersecurity Framework",
  "vc:slug": "cybersecurity-framework",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cybersecurity-framework",
  "@type": "Class",
  "label": "Cybersecurity Framework",
  "definition": "A cybersecurity framework is a structured set of standards, guidelines and practices that organisations use to identify, protect against, detect, respond to and recover from cyber threats. Frameworks such as the NIST Cybersecurity Framework provide a common taxonomy and maturity model for managing security risk in a repeatable, auditable way. They align technical controls with governance, risk management and regulatory obligations.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:security-framework",
      "label": "Security Framework"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:risk-management-framework",
        "label": "Risk Management Framework"
      },
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      },
      {
        "@id": "urn:ngm:class:nist-ai-risk-management-framework",
        "label": "NIST AI Risk Management Framework"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:security-framework",
        "label": "Security Framework"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:incident-reporting",
        "label": "Incident Reporting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gdpr-compliance",
        "label": "GDPR Compliance"
      },
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-trustworthiness",
        "label": "AI Trustworthiness"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
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
  - A cybersecurity framework is a structured set of standards, guidelines and practices that organisations use to identify, protect against, detect, respond to and recover from cyber threats. Frameworks such as the NIST Cybersecurity Framework provide a common taxonomy and maturity model for managing security risk in a repeatable, auditable way. They align technical controls with governance, risk management and regulatory obligations.
  - Related concepts: [[Security Framework]] [[NIST Cybersecurity Framework]] [[Risk Management Framework]] [[Zero Trust Architecture]] [[Compliance Framework]]
- ### Overview
  - A cybersecurity framework organises security activity into functions, typically identify, protect, detect, respond and recover, each decomposed into categories and controls mapped to informative references. Organisations assess their current posture against target profiles, prioritise gaps by risk, and track maturity over time. The framework provides a shared language between technical teams, executives and regulators, and underpins audit and certification.
- ### Key aspects
  - Core functions of identify, protect, detect, respond, recover
  - Control catalogues mapped to risk and regulatory references
  - Maturity profiles and gap assessment
  - Integration with enterprise risk management
  - Audit, certification and continuous improvement
- ### Applications
  - Enterprise security programme governance
  - Regulatory and contractual compliance demonstration
  - Third-party and supply-chain risk assessment
  - Board-level reporting on cyber risk posture
- ### Relationships
  - subClassOf:: [[Security Framework]]
  - bridgesTo:: [[Risk Management Framework]]
  - bridgesTo:: [[Compliance Framework]]
  - relatedTo:: [[NIST Cybersecurity Framework]]
  - relatedTo:: [[NIST AI Risk Management Framework]]
  - partOf:: [[Security Framework]]
  - implements:: [[Risk Management]]
  - uses:: [[Zero Trust Architecture]]
  - requires:: [[Incident Reporting]]
  - supports:: [[GDPR Compliance]]
  - supports:: [[Compliance Framework]]
  - enables:: [[AI Trustworthiness]]
  - dependsOn:: [[Risk Management]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]
  - contrastsWith:: [[Compliance Framework]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
