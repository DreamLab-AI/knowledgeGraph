public:: true

# Open Container Initiative

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:open-container-initiative",
  "@type": "Page",
  "title": "Open Container Initiative",
  "vc:slug": "open-container-initiative",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-container-initiative",
  "@type": "Class",
  "label": "Open Container Initiative",
  "definition": "The Open Container Initiative (OCI) is an open governance structure under the Linux Foundation that produces vendor-neutral specifications for container formats and runtimes. Its core deliverables are the image specification, the runtime specification, and the distribution specification, which together standardise how container images are built, distributed, and executed. By defining these contracts, the OCI guarantees interoperability and portability across the container ecosystem.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cloud-native",
        "label": "Cloud Native"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:linux-foundation",
        "label": "Linux Foundation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:portability",
        "label": "Portability"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:container",
        "label": "Container"
      },
      {
        "@id": "urn:ngm:class:container-runtime",
        "label": "Container Runtime"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cncf",
        "label": "Cloud Native Computing Foundation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
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
  - [[Standards]]
  - [[Container]]
  - [[Container Runtime]]
  - [[Cloud Native]]
  - [[Linux Foundation]]
- ### Overview
  - Defines the lowest-common-denominator contracts that let any compliant tool build, ship, and run containers.
  - Decouples image formats and runtimes from any single vendor, preventing lock-in.
  - Underpins the broader cloud-native ecosystem by making containers a stable interoperability boundary.
- ### Key aspects
  - Image specification fixing the layered filesystem and manifest format of container images.
  - Runtime specification defining how a filesystem bundle is configured and executed.
  - Distribution specification standardising how images are pushed to and pulled from registries.
  - Open, consensus-driven governance under the Linux Foundation.
  - Reference implementations such as runc that anchor conformance.
- ### Applications
  - Guaranteeing images built by one tool run under any conformant runtime.
  - Enabling Kubernetes to schedule workloads across heterogeneous runtimes via the CRI.
  - Standardising registry distribution so images move freely between platforms.
  - Providing a stable substrate for supply-chain signing and provenance tooling.
- ### Relationships
  - partOf:: [[Cloud Native]]
  - standardizedBy:: [[Linux Foundation]]
  - enables:: [[Portability]]
  - enables:: [[Interoperability]]
  - supports:: [[Container]]
  - supports:: [[Container Runtime]]
  - uses:: [[Open Source]]
  - implements:: [[Standards]]
  - dependsOn:: [[Kubernetes]]
  - bridgesTo:: [[Cloud Native Computing Foundation]]
  - relatedTo:: [[Microservices]]
  - relatedTo:: [[Infrastructure]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
