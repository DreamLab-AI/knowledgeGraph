public:: true

# Patch Management

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:patch-management", "@type":"Page", "title":"Patch Management", "vc:slug":"patch-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:patch-management",
  "@type": "Class",
  "label": "Patch Management",
  "definition": "Patch management is the systematic process of acquiring, testing, prioritising, and deploying software updates across an organisation's systems to remediate vulnerabilities and defects. It tracks asset inventory and known vulnerabilities, schedules and stages patches to balance risk against operational disruption, and verifies that fixes are applied. Effective patch management is a core control for reducing the window during which known exploits can be used.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:vulnerability-management",
      "label": "Vulnerability Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      },
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:security-operations",
        "label": "Security Operations"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      },
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
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
- [[Patch Management]] systematically deploys updates to remediate a [[Vulnerability]]; it implements [[Vulnerability Management]], uses [[Configuration Management]] and [[DevOps]], and supports [[Security Operations]].
- ### Overview
- Patch management closes the gap between a vulnerability becoming known and its fix being applied.
- It depends on accurate asset inventory and vulnerability intelligence to prioritise.
- Patches are tested and staged to avoid breaking production while reducing risk.
- Automation and configuration management make patching repeatable at scale.
- ### Mechanisms
- Discovery: inventorying assets and the software they run.
- Assessment: mapping vulnerabilities and severities to affected systems.
- Prioritisation: ranking patches by exploitability and business impact.
- Deployment: testing, staging, and rolling out updates with rollback plans.
- Verification: confirming patches applied and vulnerabilities closed.
- ### Applications
- Remediating known CVEs across servers, endpoints, and devices.
- Meeting compliance requirements for timely patching.
- Reducing the attack surface exploited by malware and worms.
- Coordinating maintenance windows with operational constraints.
- ### Relationships
- requires:: [[Configuration Management]]
- requires:: [[Vulnerability]]
- hasPart:: [[Incident Response]]
- implements:: [[Vulnerability Management]]
- uses:: [[Configuration Management]]
- uses:: [[DevOps]]
- enables:: [[Data Protection]]
- supports:: [[Security Operations]]
- dependsOn:: [[Vulnerability]]
- contrastsWith:: [[Incident Response]]
- bridgesTo:: [[Cybersecurity]]
- standardizedBy:: [[Standards]]
- standardizedBy:: [[NIST]]
- relatedTo:: [[Vulnerability Management]]
- relatedTo:: [[Cybersecurity]]
- relatedTo:: [[Vulnerability]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
