public:: true

# Asset Inventory
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:asset-inventory",
  "@type": "Page",
  "title": "Asset Inventory",
  "vc:slug": "asset-inventory",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:asset-inventory",
  "@type": "Class",
  "label": "Asset Inventory",
  "definition": "Asset Inventory is the systematic, continuously maintained catalogue of all hardware, software, data stores, network devices and cloud resources within an organisation's environment. It establishes the authoritative record of what must be protected, forming the foundation for vulnerability management, configuration control and incident response. An accurate inventory enables defenders to scope attack surfaces, prioritise patching and detect unauthorised or rogue assets.",
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
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:threat-model",
        "label": "Threat Model"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      },
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
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
  - Asset Inventory is the systematic, continuously maintained catalogue of all hardware, software, data stores, network devices and cloud resources within an organisation's environment. It establishes the authoritative record of what must be protected, forming the foundation for vulnerability management, configuration control and incident response. An accurate inventory enables defenders to scope attack surfaces, prioritise patching and detect unauthorised or rogue assets.
  - Related core concepts: [[Vulnerability Management]] [[Configuration Management]] [[Incident Response]] [[Threat Model]] [[Cybersecurity]]
- ### Overview
  - Asset inventory turns an unknown, sprawling estate into a governed, queryable register. Discovery agents, network scanners and cloud APIs feed a normalised database keyed by ownership, criticality, location and lifecycle state. Because attackers exploit the assets defenders forget, completeness and freshness are the primary quality metrics.
- ### Key aspects
  - Discovery: active and passive scanning, agent-based enumeration and cloud provider API ingestion to detect every reachable asset.
  - Classification: tagging assets by business criticality, data sensitivity, owner and environment to drive risk-based prioritisation.
  - Lifecycle tracking: recording provisioning, change, decommissioning and ownership transfers so the register reflects reality.
  - Reconciliation: deduplicating and merging records from multiple sources into a single authoritative entry per asset.
  - Drift detection: flagging rogue, shadow-IT or unmanaged assets that appear outside approved provisioning channels.
- ### Applications
  - Scoping vulnerability scans and patch campaigns to ensure no system is missed.
  - Feeding configuration management databases (CMDBs) and IT service management workflows.
  - Accelerating incident response by mapping affected systems and their owners during a breach.
  - Demonstrating regulatory compliance for frameworks that mandate a known, controlled estate.
- ### Relationships
  - subClassOf:: [[Vulnerability Management]]
  - requires:: [[Configuration Management]]
  - requires:: [[Monitoring]]
  - enables:: [[Vulnerability Management]]
  - enables:: [[Incident Response]]
  - enables:: [[Threat Intelligence]]
  - supports:: [[Threat Model]]
  - supports:: [[Cybersecurity]]
  - uses:: [[Monitoring]]
  - partOf:: [[Vulnerability Management]]
  - relatedTo:: [[Configuration Management]]
  - relatedTo:: [[Vulnerability]]
  - relatedTo:: [[Network Security]]
  - dependsOn:: [[Monitoring]]
  - bridgesTo:: [[Cybersecurity]]
  - contrastsWith:: [[Threat Intelligence]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
