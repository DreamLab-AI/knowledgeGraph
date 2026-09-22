public:: true

# Cloud Security
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cloud-security",
  "@type": "Page",
  "title": "Cloud Security",
  "vc:slug": "cloud-security",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cloud-security",
  "@type": "Class",
  "label": "Cloud Security",
  "definition": "Cloud security is the discipline of protecting data, applications, identities and infrastructure hosted in cloud computing environments against unauthorised access, misconfiguration, data loss and service disruption. It applies controls across the shared-responsibility boundary between cloud providers and customers, spanning identity and access management, encryption, network segmentation, configuration governance and continuous monitoring. Cloud security extends established information-security principles to elastic, multi-tenant and API-driven platforms where infrastructure is provisioned programmatically.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:security",
      "label": "Security"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:threat-detection",
        "label": "Threat Detection"
      },
      {
        "@id": "urn:ngm:class:data-loss-prevention",
        "label": "Data Loss Prevention"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:confidential-computing",
        "label": "Confidential Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security-architecture",
        "label": "Security Architecture"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-27001",
        "label": "ISO 27001"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
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
  - [[Cloud Security]] is the branch of [[Security]] that protects [[Cloud Computing]] workloads using [[Identity and Access Management]], [[Encryption]] and a [[Zero Trust Architecture]] across the shared-responsibility boundary.
- ### Overview
  - Cloud security adapts information-security practice to environments where infrastructure is software-defined, multi-tenant and provisioned through APIs. The shared-responsibility model divides obligations: providers secure the underlying platform, while customers secure their data, identities, configurations and code.
  - Because misconfiguration rather than provider compromise is the dominant cause of cloud incidents, much of the discipline focuses on configuration governance, least-privilege identity and continuous posture monitoring.
- ### Key aspects
  - Shared responsibility: the division of security duties shifts with the service model from infrastructure to platform to software.
  - Identity-centric control: fine-grained, least-privilege access management is the primary perimeter.
  - Data protection: encryption at rest and in transit, key management and loss prevention safeguard information.
  - Posture management: automated detection of misconfiguration and drift maintains a secure baseline.
- ### Mechanisms
  - Policy-as-code and configuration scanning enforce secure defaults across accounts and resources.
  - Centralised logging, threat detection and anomaly analytics surface attacks in near real time.
  - Network segmentation and zero-trust verification limit lateral movement.
- ### Applications
  - Securing SaaS, PaaS and IaaS deployments, regulated workloads, hybrid and multi-cloud estates and DevOps pipelines.
- ### Relationships
  - partOf:: [[Security]]
  - partOf:: [[Cloud Computing]]
  - requires:: [[Identity and Access Management]]
  - requires:: [[Encryption]]
  - uses:: [[Zero Trust Architecture]]
  - uses:: [[Access Control]]
  - uses:: [[Threat Detection]]
  - uses:: [[Data Loss Prevention]]
  - supports:: [[Compliance]]
  - supports:: [[Data Privacy]]
  - bridgesTo:: [[Confidential Computing]]
  - relatedTo:: [[Security Architecture]]
  - relatedTo:: [[Data Governance]]
  - standardizedBy:: [[ISO 27001]]
  - implements:: [[Authentication]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - maturity:: mature
