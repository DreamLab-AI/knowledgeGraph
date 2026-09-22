public:: true

# Kubernetes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:kubernetes",
  "@type": "Page",
  "vc:slug": "kubernetes",
  "title": "Kubernetes",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kubernetes",
  "@type": "Class",
  "label": "Kubernetes",
  "definition": "Kubernetes (K8s) is an open-source container orchestration platform originally developed by Google and donated to the Cloud Native Computing Foundation (CNCF) in 2014. It automates the deployment, scaling, scheduling, and lifecycle management of containerised workloads across clusters of physical or virtual machines. Kubernetes abstracts infrastructure resources into declarative objects—Pods, Deployments, Services, and Namespaces—that describe desired state, with a control plane continuously reconciling actual state to match the specification.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:orchestration", "label": "Orchestration"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:software-platform", "label": "Software Platform"},
      {"@id": "urn:ngm:class:technology-infrastructure", "label": "Technology Infrastructure"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:software-infrastructure", "label": "Software Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:resource-management", "label": "Resource Management"},
      {"@id": "urn:ngm:class:platform-engineering", "label": "Platform Engineering"},
      {"@id": "urn:ngm:class:machine-learning-discipline-infrastructure", "label": "Machine Learning Infrastructure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Kubernetes is an open-source container orchestration system that automates the deployment, scaling, and management of containerised applications across server clusters, using declarative configuration to reconcile desired and actual infrastructure state continuously.
- ### Relationships
  - Kubernetes is a subclass of [[Orchestration]] and is the dominant runtime for [[Microservices Architecture]] and [[Cloud-Native Applications]]. It operates across [[Distributed Systems]] and provides [[Resource Management]], [[Cloud Infrastructure]] provisioning, and [[Platform Engineering]] foundations. Kubernetes integrates with [[API Gateway]] solutions for ingress control and [[Event Driven Architecture]] patterns for reactive workloads. It supports [[Distributed Training]] of large [[Machine Learning Infrastructure]] workloads via operator frameworks such as Kubeflow. Cloud providers surface Kubernetes as managed services within their [[Cloud Computing]] platforms (EKS, GKE, AKS).
- ### Content
  - Kubernetes emerged from Google's internal Borg cluster management system, which had orchestrated production workloads at Google scale for over a decade before K8s was open-sourced. The project moved rapidly to dominate the container orchestration market, outcompeting Docker Swarm and Apache Mesos within a few years. Its donation to the CNCF established a vendor-neutral governance model that encouraged broad industry adoption and a rich ecosystem of complementary projects.

  - The core Kubernetes architecture separates a control plane from worker nodes. The control plane comprises the API server (declarative state store and entry point), the etcd distributed key-value store, the scheduler (assigns workloads to nodes based on resource availability and constraints), and the controller manager (reconciliation loops for built-in object types). Worker nodes run the kubelet (node agent), kube-proxy (network rules), and a container runtime such as containerd or CRI-O.

  - Declarative configuration through YAML manifests is Kubernetes' signature operational model. Operators declare the desired state—a Deployment specifying three replicas of a web service at a given image version—and the control plane continuously acts to achieve and maintain that state, automatically replacing failed Pods, redistributing workloads from unhealthy nodes, and rolling out updates with configurable strategies (RollingUpdate, Recreate). Horizontal Pod Autoscaler extends this to dynamic scaling based on CPU, memory, or custom metrics.

  - The Kubernetes ecosystem has grown into a comprehensive platform layer. Helm provides package management; Istio and Linkerd add service mesh capabilities (mutual TLS, traffic shaping, observability); ArgoCD and Flux enable GitOps continuous delivery; Prometheus and Grafana provide cluster monitoring. The CNCF landscape catalogues over 150 projects that integrate with Kubernetes, making it effectively the operating system of cloud-native infrastructure.

  - For machine learning workloads, Kubernetes has become the substrate for platforms such as Kubeflow, which wraps Kubernetes primitives to provide ML pipelines, notebook servers, hyperparameter tuning jobs, and model serving deployments. GPU resource management via the NVIDIA device plugin and fractional GPU allocation tools such as MIG (Multi-Instance GPU) make Kubernetes viable for training and inference at scale.
