public:: true

# CNCF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cncf",
  "@type": "Page",
  "vc:slug": "cncf",
  "title": "CNCF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cncf",
  "@type": "Class",
  "label": "CNCF",
  "definition": "The Cloud Native Computing Foundation (CNCF) is a vendor-neutral, open-source foundation established in 2015 under the Linux Foundation to steward cloud-native software projects including Kubernetes, Prometheus, Envoy, and over 150 additional hosted projects. CNCF defines cloud-native computing as building and running scalable applications in modern, dynamic environments such as public, private, and hybrid clouds using techniques including containers, microservices, and declarative APIs. The Foundation operates a Technical Oversight Committee (TOC) that governs project acceptance through sandbox, incubating, and graduated maturity stages.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:linux-foundation", "label": "Linux Foundation"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:open-telemetry", "label": "OpenTelemetry"},
      {"@id": "urn:ngm:class:prometheus", "label": "Prometheus"},
      {"@id": "urn:ngm:class:envoy-proxy", "label": "Envoy Proxy"},
      {"@id": "urn:ngm:class:argo-workflows", "label": "Argo Workflows"},
      {"@id": "urn:ngm:class:falco", "label": "Falco"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:linux-foundation", "label": "Linux Foundation"},
      {"@id": "urn:ngm:class:open-source-ecosystem", "label": "Open Source Ecosystem"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"},
      {"@id": "urn:ngm:class:container-orchestration", "label": "Container Orchestration"},
      {"@id": "urn:ngm:class:platform-engineering", "label": "Platform Engineering"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:supply-chain-security", "label": "Supply Chain Security"},
      {"@id": "urn:ngm:class:webassembly", "label": "WebAssembly"},
      {"@id": "urn:ngm:class:gitops", "label": "GitOps"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:technical-standards", "label": "Technical Standards"},
      {"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:microservices", "label": "Microservices"},
      {"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"},
      {"@id": "urn:ngm:class:observability", "label": "Observability"},
      {"@id": "urn:ngm:class:open-container-initiative", "label": "Open Container Initiative"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:cloud-native-computing-foundation", "label": "Cloud Native Computing Foundation"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The [[CNCF]] (Cloud Native Computing Foundation) is a [[Linux Foundation]] sub-foundation that hosts, governs, and promotes cloud-native open-source projects — most notably [[Kubernetes]] — through a structured maturity ladder, providing vendor-neutral stewardship that accelerates enterprise adoption of [[Cloud-Native Applications]] and [[Microservices Architecture]].

- ### Relationships
  - CNCF's project portfolio spans the full cloud-native stack: [[Kubernetes]] for container orchestration, [[OpenTelemetry]] for observability instrumentation, Envoy for service-proxy, Argo for GitOps, and Falco for runtime security. Together these projects define the reference architecture for [[Microservices]] deployments on [[Cloud Infrastructure]], and the Foundation's conformance programmes (Kubernetes conformance, OCI distribution) provide the [[Technical Standards]] that make cross-vendor portability possible.

- ### Content
  - CNCF was founded in June 2015 when Google donated the Kubernetes codebase to the Linux Foundation, seeking a governance home that could broaden community ownership beyond a single vendor. The founding recognised that container orchestration would be critical infrastructure requiring the same neutrality that the Apache Software Foundation had established for web server and big-data software. At launch, founding members included AT&T, Box, Cisco, Cloud Foundry Foundation, CoreOS, Docker, eBay, Goldman Sachs, Google, Huawei, IBM, Intel, Joyent, Mesosphere, Red Hat, Twitter, and VMware.

  - The Foundation operates a Technical Oversight Committee that evaluates project proposals against criteria covering production usage, governance maturity, security posture, and community diversity. Projects progress through three stages: Sandbox (early-stage, experimental), Incubating (growing adoption with defined governance), and Graduated (mature, production-ready with demonstrated cross-organisational committers). As of 2025, CNCF hosts over 170 projects, making it the largest open-source foundation by number of active projects in the infrastructure domain.

  - CNCF's significance lies in its role as a neutral convening body for an otherwise fragmented competitive ecosystem. Cloud providers that compete commercially on managed Kubernetes services nonetheless collaborate within CNCF on core Kubernetes enhancements, ensuring the upstream codebase remains independent of any single vendor's roadmap. The Foundation's annual KubeCon + CloudNativeCon conferences, held in North America, Europe, and China/India, serve as the primary venue for project announcements, with attendance regularly exceeding 10,000 in-person participants.

  - In 2024-2025, CNCF's agenda has expanded beyond container orchestration to encompass AI/ML infrastructure, with projects such as KServe (model serving), Kubeflow (ML pipelines), and Volcano (batch/GPU scheduling) gaining graduated or incubating status. The Platform Engineering working group is formalising internal developer platform patterns, while the Security TAG continues to publish supply-chain security guidance aligned to SLSA and SSDF frameworks. CNCF is also actively engaging with WebAssembly (WASM) as a complementary runtime to Linux containers for edge and serverless use cases.

