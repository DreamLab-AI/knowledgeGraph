public:: true

# Defence In Depth

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:defence-in-depth",
  "@type": "Page",
  "title": "Defence In Depth",
  "vc:slug": "defence-in-depth",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:defence-in-depth",
  "@type": "Class",
  "label": "Defence In Depth",
  "definition": "Defence in Depth is a cybersecurity strategy that layers multiple independent security controls such that the failure of any single control does not expose the system to compromise. Originating from military doctrine, it applies redundancy and diversity across physical, technical, and administrative security dimensions. The strategy reduces the probability of successful attack by requiring adversaries to defeat multiple independent barriers sequentially.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:security", "label": "Security"}],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:security-architecture", "label": "Security Architecture"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:resilience", "label": "Resilience"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:intrusion-detection-system", "label": "Intrusion Detection System"},
      {"@id": "urn:ngm:class:firewall", "label": "Firewall"},
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:security-policy", "label": "Security Policy"},
      {"@id": "urn:ngm:class:threat-modelling", "label": "Threat Modelling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:network-segmentation", "label": "Network Segmentation"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"},
      {"@id": "urn:ngm:class:vulnerability-management", "label": "Vulnerability Management"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:perimeter-security", "label": "Perimeter Security"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:cloud-security", "label": "Cloud Security"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-cybersecurity-framework", "label": "NIST Cybersecurity Framework"}
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
  - [[Defence In Depth]] is a layered [[Security Architecture]] strategy deploying multiple independent controls across physical, technical, and administrative domains.
  - Borrowed from military strategy: each layer slows, detects, or stops an adversary even if outer layers are breached.
  - Contrasts with [[Perimeter Security]], which relies on a single hardened boundary.
  - Endorsed by the [[NIST Cybersecurity Framework]] and foundational to enterprise security design.

- ### Overview
  - Core insight: no single control is infallible, so redundancy reduces the probability of successful compromise.
  - Controls are selected to be diverse (different vendors, mechanisms) to avoid common-mode failure.
  - Layers typically include: physical security, network controls, host hardening, application controls, and data protection.
  - Operational visibility (logging, monitoring) spans all layers to enable [[Incident Response]].

- ### Key Aspects
  - **Layering**: controls operate at network perimeter, internal segmentation, endpoint, application, and data levels.
  - **Diversity**: heterogeneous control types and vendors reduce the risk of a single vulnerability spanning layers.
  - **Least privilege**: each layer restricts access to only what is required, minimising blast radius.
  - **Detection**: each layer provides telemetry feeding [[Intrusion Detection System]] and SIEM pipelines.

- ### Mechanisms
  - [[Firewall]] rules segment network zones; [[Network Segmentation]] limits lateral movement.
  - [[Encryption]] protects data at rest and in transit independently of access controls.
  - [[Access Control]] enforces authorisation at application and resource level.
  - [[Threat Modelling]] drives control selection by mapping attacker paths to defensive responses.

- ### Applications
  - Enterprise cloud environments combining [[Zero Trust Architecture]] with layered network controls.
  - Industrial control systems protecting operational technology with air gaps, firewalls, and monitoring.
  - [[Regulatory Compliance]] frameworks (PCI DSS, NIS2) mandating layered controls.
  - AI system security combining model-level, API-level, and infrastructure-level controls.
  - [[Cloud Security]] posture management across multi-account environments.

- ### Relationships
  - implements:: [[Security Architecture]]
  - implements:: [[Risk Management]]
  - enables:: [[Resilience]]
  - enables:: [[Zero Trust Architecture]]
  - enables:: [[Incident Response]]
  - hasPart:: [[Access Control]]
  - hasPart:: [[Intrusion Detection System]]
  - hasPart:: [[Firewall]]
  - hasPart:: [[Encryption]]
  - requires:: [[Security Policy]]
  - requires:: [[Threat Modelling]]
  - relatedTo:: [[Network Segmentation]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Vulnerability Management]]
  - contrastsWith:: [[Perimeter Security]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[Cloud Security]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]

- ### Provenance
  - updated:: 2026-06-15
