public:: true

# Cloud Native
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cloud-native",
  "@type": "Page",
  "vc:slug": "cloud-native",
  "title": "Cloud Native",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cloud-native",
  "@type": "Class",
  "label": "Cloud Native",
  "definition": "Cloud Native is an approach to building and running applications that fully exploits the advantages of cloud computing infrastructure — elastic scaling, managed services, pay-per-use economics, and high availability — by designing for containerisation, dynamic orchestration, microservices decomposition, and declarative APIs. The Cloud Native Computing Foundation (CNCF) defines it as the use of containers, service meshes, microservices, immutable infrastructure, and declarative APIs to build resilient, manageable, and observable systems. Cloud Native architectures enable rapid, reproducible delivery of software at scale across public, private, and hybrid cloud environments.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:microservices", "label": "Microservices"},
      {"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:scalability", "label": "Scalability"},
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"},
      {"@id": "urn:ngm:class:continuous-integration", "label": "Continuous Integration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Cloud Native describes a design philosophy and technical approach where applications are architected from the ground up for cloud environments rather than lifted and shifted from on-premises infrastructure. Core pillars include containerisation (packaging applications and dependencies immutably), [[Microservices]] decomposition (independent deployability of service components), [[Kubernetes]] orchestration (automated scheduling, scaling, and self-healing), and [[Service Mesh]] networking (observability, mTLS, traffic management). Twelve-factor application principles, GitOps, and declarative configuration management are foundational operational practices.

- ### Relationships
  - Cloud Native architectures rely on [[Kubernetes]] as the dominant container orchestration layer, with [[Microservices]] decomposed services communicating through [[Service Mesh]] proxies such as Istio or Linkerd. [[Continuous Integration]] pipelines drive automated testing and deployment into [[Kubernetes]] clusters. [[Scalability]] is achieved through horizontal pod autoscaling and cluster autoscaling, while [[High Availability]] is guaranteed by replica sets, pod disruption budgets, and multi-zone deployments. [[Edge Computing]] extends the Cloud Native model toward the network edge using lightweight runtimes such as K3s and WebAssembly.

- ### Content
  - The term Cloud Native was popularised around 2010–2013 as Amazon Web Services, Google Cloud, and Microsoft Azure matured beyond simple virtual machine hosting into managed container, database, and messaging services. Netflix's public engineering blog describing their adoption of microservices and chaos engineering principles (including Chaos Monkey) around 2012–2013 became a widely studied blueprint. The Cloud Native Computing Foundation (CNCF) was established in 2015 under the Linux Foundation as Google donated [[Kubernetes]], providing governance for the growing ecosystem of Cloud Native projects.

  - The CNCF landscape (landscape.cncf.io) catalogues over 1,000 projects across observability, storage, networking, security, and runtime categories, reflecting the ecosystem's breadth. Key technical patterns include: Helm for [[Kubernetes]] package management, Prometheus and Grafana for monitoring, Jaeger and OpenTelemetry for distributed tracing, Argo CD and Flux for GitOps continuous deployment, Envoy as the universal data-plane proxy, and cert-manager for automated TLS certificate management. The Operator Framework extends [[Kubernetes]] with custom resource definitions (CRDs) to manage stateful applications like databases and message brokers.

  - [[Service Mesh]] adoption (Istio, Linkerd, Consul Connect) decouples networking concerns — mutual TLS, circuit breaking, retries, traffic shifting — from application code, enabling polyglot [[Microservices]] to communicate securely without per-service implementation of these concerns. eBPF-based networking (Cilium, Calico eBPF) is replacing iptables-based approaches for higher performance and richer observability at the kernel level. WebAssembly (Wasm) and the WebAssembly System Interface (WASI) are emerging as a complementary sandboxed compute primitive for Cloud Native edge and serverless deployments.

  - By 2024–2025, Cloud Native has become the default deployment paradigm for new enterprise applications, with Kubernetes running the majority of containerised workloads across major clouds. [[Edge Computing]] convergence (K3s, MicroK8s, AWS Outposts, Azure Arc) extends Cloud Native patterns to manufacturing, retail, and telco edge sites. AI workloads are increasingly cloud native, with GPU operator, KubeFlow, and Ray Kubernetes integrations enabling scalable training and inference at [[Scalability]] levels previously requiring specialised HPC infrastructure. Multi-cloud and [[Fault Tolerance]] across providers is managed through Federation, Cluster API, and CAPI implementations.

