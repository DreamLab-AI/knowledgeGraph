public:: true

# Cloud Native Computing Foundation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cloud-native-computing-foundation",
  "@type": "Page",
  "title": "Cloud Native Computing Foundation",
  "vc:slug": "cloud-native-computing-foundation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cloud-native-computing-foundation",
  "@type": "Class",
  "label": "Cloud Native Computing Foundation",
  "definition": "The Cloud Native Computing Foundation (CNCF) is a vendor-neutral, open-source foundation hosted by the Linux Foundation that stewards critical cloud-native projects such as Kubernetes, Prometheus and Envoy. It defines and promotes the cloud-native computing model based on containers, microservices and declarative orchestration. The CNCF maintains a graduated project lifecycle (sandbox, incubating, graduated) and coordinates the wider ecosystem through events, certification programmes and a technical oversight committee.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linux-foundation",
      "label": "Linux Foundation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:linux-foundation",
        "label": "Linux Foundation"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-organization",
        "label": "Standards Organization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cloud-native-applications",
        "label": "Cloud-Native Applications"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cloud-platform",
        "label": "Cloud Platform"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:standards-organization",
        "label": "Standards Organization"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
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
  - The Cloud Native Computing Foundation (CNCF) is a vendor-neutral, open-source foundation hosted by the Linux Foundation that stewards critical cloud-native projects such as Kubernetes, Prometheus and Envoy. It defines and promotes the cloud-native computing model based on containers, microservices and declarative orchestration. The CNCF maintains a graduated project lifecycle (sandbox, incubating, graduated) and coordinates the wider ecosystem through events, certification programmes and a technical oversight committee.
  - Related concepts: [[Linux Foundation]] [[Kubernetes]] [[Cloud-Native Applications]] [[Open Source]] [[Cloud Computing]]
- ### Overview
  - The Cloud Native Computing Foundation (CNCF) was established in 2015 as a sub-foundation of the [[Linux Foundation]] to govern [[Kubernetes]] and the broader cloud-native ecosystem.
  - It provides neutral governance, intellectual-property stewardship and shared infrastructure for projects that would otherwise be controlled by a single vendor.
  - Membership spans cloud providers, software vendors and end-user organisations who fund and contribute to the projects.
- ### Key aspects
  - A graduated maturity model moves projects through sandbox, incubating and graduated stages based on adoption and governance health.
  - A Technical Oversight Committee curates the project landscape and defines what cloud-native means in practice.
  - Certification programmes such as Certified Kubernetes Administrator standardise skills across the industry.
  - The CNCF Landscape catalogues hundreds of projects across [[Observability]], networking, storage and [[Service Mesh]] categories.
- ### Applications
  - Hosting and governance of [[Kubernetes]] as the de-facto container-orchestration platform.
  - Stewardship of monitoring and [[Observability]] tooling used across [[Cloud Platform]] deployments.
  - Promotion of the [[Microservices]] and [[Cloud-Native Applications]] architecture model.
  - Coordination of large community events that align the [[DevOps]] ecosystem.
- ### Relationships
  - subClassOf:: [[Linux Foundation]]
  - partOf:: [[Linux Foundation]]
  - partOf:: [[Open Source]]
  - hasPart:: [[Kubernetes]]
  - hasPart:: [[Observability]]
  - standardizedBy:: [[Standards Organization]]
  - supports:: [[Cloud-Native Applications]]
  - supports:: [[Microservices]]
  - supports:: [[Service Mesh]]
  - enables:: [[Cloud Computing]]
  - enables:: [[DevOps]]
  - uses:: [[Kubernetes]]
  - relatedTo:: [[Cloud Platform]]
  - relatedTo:: [[Observability]]
  - bridgesTo:: [[Standards Organization]]
  - contrastsWith:: [[Standards Body]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
