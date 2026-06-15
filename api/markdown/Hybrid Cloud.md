public:: true

# Hybrid Cloud

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:hybrid-cloud",
  "@type": "Page",
  "title": "Hybrid Cloud",
  "vc:slug": "hybrid-cloud",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hybrid-cloud",
  "@type": "Class",
  "label": "Hybrid Cloud",
  "definition": "Hybrid cloud is a computing architecture that combines on-premises or private-cloud infrastructure with one or more public clouds, orchestrated so that workloads and data can move between them. It lets organisations keep sensitive systems in controlled environments while bursting to public capacity for scale or specialised services. Hybrid cloud emphasises interoperability, unified management and consistent identity and networking across environments.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cloud-computing",
      "label": "Cloud Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:private-cloud",
        "label": "Private Cloud"
      },
      {
        "@id": "urn:ngm:class:public-cloud",
        "label": "Public Cloud"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:containerisation",
        "label": "Containerisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cloud-migration",
        "label": "Cloud Migration"
      },
      {
        "@id": "urn:ngm:class:elasticity",
        "label": "Elasticity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:on-premises",
        "label": "On-Premises"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:multi-cloud",
        "label": "Multi-Cloud"
      },
      {
        "@id": "urn:ngm:class:vendor-lock-in",
        "label": "Vendor Lock-In"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Cloud Infrastructure"
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
  - [[Hybrid Cloud]] unifies [[Private Cloud]], [[On-Premises]] and [[Public Cloud]] resources under common orchestration, a deployment model of [[Cloud Computing]] that bridges to [[Edge Computing]].
- ### Overview
  - Hybrid cloud connects controlled internal environments with elastic public capacity through secure networking and shared identity.
  - Workloads are placed according to data sovereignty, latency, cost and compliance requirements.
  - Container platforms and orchestration give a consistent runtime so the same application can run in either location.
  - It differs from multi-cloud, which spans several public providers without necessarily integrating private infrastructure.
- ### Key aspects
  - Workload portability across private and public environments.
  - Unified control plane for orchestration, observability and policy.
  - Secure connectivity (VPN, dedicated interconnects) and consistent identity.
  - Data placement governed by sovereignty and compliance constraints.
  - Cloud bursting to absorb demand spikes using public capacity.
- ### Applications
  - Regulated industries keeping sensitive data on-premises while using public AI services.
  - Disaster recovery replicating workloads to a public region.
  - Cloud migration in phases, gradually shifting workloads off legacy infrastructure.
  - Edge-to-cloud pipelines processing data near its source then aggregating centrally.
- ### Relationships
  - hasPart:: [[Private Cloud]]
  - hasPart:: [[Public Cloud]]
  - partOf:: [[Cloud Computing]]
  - uses:: [[Kubernetes]]
  - uses:: [[Containerisation]]
  - supports:: [[Disaster Recovery]]
  - supports:: [[Data Sovereignty]]
  - enables:: [[Cloud Migration]]
  - enables:: [[Elasticity]]
  - bridgesTo:: [[On-Premises]]
  - bridgesTo:: [[Edge Computing]]
  - requires:: [[Interoperability]]
  - contrastsWith:: [[Multi-Cloud]]
  - contrastsWith:: [[Vendor Lock-In]]
  - relatedTo:: [[Cloud Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
