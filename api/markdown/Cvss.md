public:: true

# Cvss
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cvss",
  "@type": "Page",
  "title": "Cvss",
  "vc:slug": "cvss",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cvss",
  "@type": "Class",
  "label": "Cvss",
  "definition": "The Common Vulnerability Scoring System (CVSS) is an open, standardised framework for rating the severity of software vulnerabilities on a 0-10 scale. It decomposes severity into Base, Temporal and Environmental metric groups capturing intrinsic exploitability, real-world threat conditions and organisation-specific impact. CVSS provides a vendor-neutral common language so defenders can compare and prioritise remediation consistently across heterogeneous products.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:vulnerability-management",
      "label": "Vulnerability Management"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:threat-model",
        "label": "Threat Model"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:asset-inventory",
        "label": "Asset Inventory"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
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
  - The Common Vulnerability Scoring System (CVSS) is an open, standardised framework for rating the severity of software vulnerabilities on a 0-10 scale. It decomposes severity into Base, Temporal and Environmental metric groups capturing intrinsic exploitability, real-world threat conditions and organisation-specific impact. CVSS provides a vendor-neutral common language so defenders can compare and prioritise remediation consistently across heterogeneous products.
  - Related core concepts: [[Vulnerability Management]] [[Vulnerability]] [[Risk Assessment]] [[Cybersecurity]] [[Threat Model]]
- ### Overview
  - CVSS converts qualitative vulnerability characteristics into a reproducible numeric vector, letting organisations triage thousands of findings objectively. The Base score reflects fixed properties such as attack vector, complexity and impact on confidentiality, integrity and availability. Temporal and Environmental metrics then adjust the rating for exploit maturity and the defender's specific deployment context.
- ### Mechanisms
  - Base metrics: attack vector, attack complexity, privileges required, user interaction, scope and CIA impact.
  - Temporal metrics: exploit code maturity, remediation level and report confidence that change over a vulnerability's lifetime.
  - Environmental metrics: organisation-specific impact weighting and modified base values reflecting local mitigations.
  - Vector string: a compact, machine-readable encoding of all metric choices enabling tooling interoperability.
  - Score-to-severity mapping: numeric scores translated into None/Low/Medium/High/Critical bands for human triage.
- ### Applications
  - Prioritising patch deployment across large vulnerability backlogs.
  - Populating advisories and security bulletins with a comparable severity rating.
  - Driving service-level agreements that tie remediation deadlines to severity bands.
  - Feeding risk-assessment and threat-modelling pipelines with normalised severity inputs.
- ### Relationships
  - subClassOf:: [[Vulnerability Management]]
  - uses:: [[Vulnerability]]
  - dependsOn:: [[Vulnerability]]
  - standardizedBy:: [[Cybersecurity]]
  - enables:: [[Vulnerability Management]]
  - enables:: [[Risk Assessment]]
  - supports:: [[Threat Model]]
  - supports:: [[Incident Response]]
  - partOf:: [[Vulnerability Management]]
  - requires:: [[Vulnerability]]
  - relatedTo:: [[Threat Intelligence]]
  - relatedTo:: [[Risk Assessment]]
  - relatedTo:: [[Asset Inventory]]
  - contrastsWith:: [[Threat Intelligence]]
  - bridgesTo:: [[Cybersecurity]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
