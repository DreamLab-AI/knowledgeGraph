public:: true

# Cyber Resilience

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cyber-resilience",
  "@type": "Page",
  "title": "Cyber Resilience",
  "vc:slug": "cyber-resilience",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cyber-resilience",
  "@type": "Class",
  "label": "Cyber Resilience",
  "definition": "Cyber resilience is the capacity of an organisation or system to anticipate, withstand, recover from, and adapt to adverse cyber events while continuing to deliver its intended outcomes. It extends conventional cybersecurity from breach prevention towards graceful degradation, rapid restoration, and continuous learning under sustained attack. Cyber resilience integrates technical controls, business continuity planning, and governance so that critical functions persist even when individual defences fail.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:security",
      "label": "Security"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:business-continuity",
        "label": "Business Continuity"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:business-continuity",
        "label": "Business Continuity"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:intrusion-detection",
        "label": "Intrusion Detection"
      },
      {
        "@id": "urn:ngm:class:defense-in-depth",
        "label": "Defense In Depth"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:security-operations",
        "label": "Security Operations"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
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
  - Cyber resilience is a discipline within [[Security]] that builds on [[Cybersecurity]] and [[Risk Management]].
  - It composes [[Incident Response]], [[Disaster Recovery]], and [[Business Continuity]] into a unified survivability posture.
  - It depends on [[Redundancy]] and [[Fault Tolerance]] and leverages [[Zero Trust Architecture]] and [[Threat Intelligence]].
- ### Overview
  - Cyber resilience reframes security around the assumption of compromise: defences will eventually be breached, so systems must limit blast radius and recover essential services quickly.
  - It couples preventive controls with detective and recovery capabilities, measured by metrics such as mean time to detect and mean time to recover.
  - Resilience spans people, process, and technology, embedding security into governance and continuity planning rather than treating it as a perimeter problem.
- ### Key aspects
  - Anticipation through threat intelligence and proactive risk assessment.
  - Withstanding via defence-in-depth, segmentation, and zero-trust controls that contain intrusions.
  - Recovery through tested backups, disaster recovery runbooks, and incident response playbooks.
  - Adaptation by post-incident learning that hardens the system against recurrence.
- ### Applications
  - Critical national infrastructure protection where downtime is unacceptable.
  - Financial services and healthcare systems subject to strict continuity and regulatory requirements.
  - Cloud and distributed platforms that must survive ransomware, supply-chain compromise, and DDoS while maintaining service.
- ### Relationships
  - hasPart:: [[Incident Response]]
  - hasPart:: [[Disaster Recovery]]
  - hasPart:: [[Business Continuity]]
  - partOf:: [[Security]]
  - requires:: [[Risk Management]]
  - requires:: [[Threat Intelligence]]
  - enables:: [[Business Continuity]]
  - enables:: [[Fault Tolerance]]
  - dependsOn:: [[Redundancy]]
  - dependsOn:: [[Network Security]]
  - uses:: [[Zero Trust Architecture]]
  - uses:: [[Intrusion Detection]]
  - uses:: [[Defense In Depth]]
  - supports:: [[Security Operations]]
  - relatedTo:: [[Cybersecurity]]
  - relatedTo:: [[Risk Management]]
  - bridgesTo:: [[Disaster Recovery]]
  - bridgesTo:: [[Fault Tolerance]]
  - subClassOf:: [[Security]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
