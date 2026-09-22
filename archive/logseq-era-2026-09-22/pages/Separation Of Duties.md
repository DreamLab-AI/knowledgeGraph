public:: true

# Separation Of Duties

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:separation-of-duties",
  "@type": "Page",
  "title": "Separation Of Duties",
  "vc:slug": "separation-of-duties",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:separation-of-duties",
  "@type": "Class",
  "label": "Separation Of Duties",
  "definition": "Separation of duties is a control principle that divides a sensitive task among multiple people or roles so that no single individual can complete it alone, reducing the risk of fraud, error and abuse of privilege. It requires collusion to subvert controls and is foundational to access governance, financial controls and compliance regimes. It complements least-privilege and is operationalised through role-based access control.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:security",
      "label": "Security"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fraud-prevention",
        "label": "Fraud Prevention"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:least-privilege",
        "label": "Least Privilege"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:segregation-of-duties",
        "label": "Segregation of Duties"
      },
      {
        "@id": "urn:ngm:class:least-privilege",
        "label": "Least Privilege"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:role-based-access-control",
        "label": "Role-Based Access Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:role-based-access-control",
        "label": "Role-Based Access Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:least-privilege",
        "label": "Least Privilege"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:segregation-of-duties",
      "label": "Segregation of Duties"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Separation Of Duties is a key concept in the security domain.
  - Related foundational concepts: [[Security]] [[Access Control]] [[Least Privilege]] [[Role-Based Access Control]] [[Compliance]].
  - Separation of duties is a control principle that divides a sensitive task among multiple people or roles so that no single individual can complete it alone, reducing the risk of fraud, error and abuse of privilege. It requires collusion to subvert controls and is foundational to access governance, financial controls and compliance regimes. It complements least-privilege and is operationalised through role-based access control.
- ### Overview
  - Separation of duties prevents concentration of power by splitting high-risk activities - for example requesting, approving and disbursing a payment - across distinct roles. It is a cornerstone of internal control and regulatory regimes, and is enforced technically through role design, approval workflows and access governance.
- ### Mechanisms
  - Splitting initiation, approval and execution of sensitive tasks.
  - Collusion-resistance: multiple parties required to subvert controls.
  - Enforcement via role-based access control and approval workflows.
  - Pairing with least-privilege and audit trails.
  - Detection of toxic role combinations during access reviews.
- ### Applications
  - Financial controls and payment authorisation.
  - Privileged-access governance in IT systems.
  - Regulatory compliance and audit assurance.
  - Change-management and deployment approvals.
- ### Relationships
  - subClassOf:: [[Security]]
  - enables:: [[Fraud Prevention]]
  - enables:: [[Compliance]]
  - hasPart:: [[Least Privilege]]
  - hasPart:: [[Audit Trail]]
  - relatedTo:: [[Segregation of Duties]]
  - relatedTo:: [[Least Privilege]]
  - implements:: [[Access Control]]
  - supports:: [[Identity Management]]
  - supports:: [[Governance]]
  - requires:: [[Role-Based Access Control]]
  - uses:: [[Role-Based Access Control]]
  - bridgesTo:: [[Compliance]]
  - contrastsWith:: [[Least Privilege]]
  - sameAs:: [[Segregation of Duties]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
