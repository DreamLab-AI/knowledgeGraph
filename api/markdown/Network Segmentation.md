public:: true

# Network Segmentation

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:network-segmentation", "@type": "Page", "title": "Network Segmentation", "vc:slug": "network-segmentation", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-segmentation",
  "@type": "Class",
  "label": "Network Segmentation",
  "definition": "Network segmentation is the security practice of dividing a computer network into smaller, isolated zones so that traffic between them is controlled, inspected, and restricted by policy. By limiting the blast radius of a compromise, segmentation prevents an attacker who breaches one zone from moving laterally to others. It is a core control in defence-in-depth and a prerequisite for zero-trust network architectures.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-security",
      "label": "Network Security"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:vlan",
        "label": "VLAN"
      },
      {
        "@id": "urn:ngm:class:microsegmentation",
        "label": "Microsegmentation"
      },
      {
        "@id": "urn:ngm:class:firewall",
        "label": "Firewall"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:defence-in-depth",
        "label": "Defence in Depth"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:firewall",
        "label": "Firewall"
      },
      {
        "@id": "urn:ngm:class:software-defined-networking",
        "label": "Software-Defined Networking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:firewall",
        "label": "Firewall"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iec-62443",
        "label": "IEC 62443"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lateral-movement",
        "label": "Lateral Movement"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
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
  - Network segmentation is the security practice of dividing a computer network into smaller, isolated zones so that traffic between them is controlled, inspected, and restricted by policy. By limiting the blast radius of a compromise, segmentation prevents an attacker who breaches one zone from moving laterally to others. It is a core control in defence-in-depth and a prerequisite for zero-trust network architectures.
  - Related concepts: [[Network Security]] [[Zero Trust Architecture]] [[Firewall]] [[Access Control]] [[Defence in Depth]]
- ### Overview
  - Segmentation can be implemented at several layers: physical separation of networks, virtual LANs and subnets enforced by switches and routers, firewall zones between trust boundaries, and software-defined microsegmentation that applies policy down to individual workloads. The finer the segmentation, the smaller the lateral-movement surface available to an intruder. Modern data-centre and cloud environments increasingly rely on identity-aware microsegmentation, where east-west traffic between workloads is permitted only by explicit policy, aligning segmentation with zero-trust principles.
- ### Mechanisms
  - VLANs and subnetting: partitioning broadcast domains and IP ranges to separate user, server, and management traffic.
  - Firewall zoning: enforcing allow/deny policy at boundaries between segments of differing trust.
  - Microsegmentation: workload-level policy that controls east-west traffic independent of network topology.
  - Software-defined networking: programmatic, identity-aware policy enforcement across virtual and cloud fabrics.
  - Demilitarised zones: isolating internet-facing services from internal networks behind layered controls.
- ### Applications
  - Isolating operational technology (OT) and industrial control systems from corporate IT.
  - Constraining lateral movement after an endpoint compromise.
  - Meeting regulatory scope-reduction requirements such as cardholder-data isolation.
  - Separating multi-tenant workloads in cloud and data-centre environments.
- ### Relationships
  - partOf:: [[Network Security]]
  - hasPart:: [[VLAN]]
  - hasPart:: [[Microsegmentation]]
  - hasPart:: [[Firewall]]
  - enables:: [[Zero Trust Architecture]]
  - enables:: [[Defence in Depth]]
  - requires:: [[Access Control]]
  - requires:: [[Network Architecture]]
  - dependsOn:: [[Firewall]]
  - dependsOn:: [[Software-Defined Networking]]
  - uses:: [[Firewall]]
  - supports:: [[Network Security]]
  - standardizedBy:: [[IEC 62443]]
  - relatedTo:: [[Lateral Movement]]
  - relatedTo:: [[Access Control]]
  - contrastsWith:: [[Network Architecture]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
