public:: true

elevatedFrom:: [[devpod]]
# Provider-Agnostic Dev Environment Tool
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978",
  "@type": "Page",
  "vc:slug": "provider-agnostic-dev-environment-tool",
  "title": "Provider-Agnostic Dev Environment Tool",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "devpod"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:provider-agnostic-dev-environment-tool",
  "@type": "Class",
  "label": "Provider-Agnostic Dev Environment Tool",
  "definition": "DevPod is an open-source, provider-agnostic tool for creating reproducible cloud development environments defined by devcontainer specifications. It abstracts over compute providers — including local Docker, Kubernetes clusters, cloud VMs, and managed container services — allowing developers to spin up identical, pre-configured workspaces on any infrastructure without vendor lock-in. DevPod acts as a portable alternative to managed cloud IDE products such as GitHub Codespaces or GitPod, enabling teams to self-host development environments on their own Kubernetes or cloud infrastructure.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:software-development-process", "label": "Software Development Process"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:devpod:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - DevPod is an open-source, provider-agnostic tool for creating reproducible cloud development environments defined by devcontainer specifications (the same standard used by VS Code Dev Containers). It supports multiple compute providers — Docker, Kubernetes, AWS, GCP, Azure, Coder, SSH remotes — through a plugin architecture, allowing teams to define workspace configuration once and provision it anywhere. Developers interact with DevPod through a CLI or desktop GUI, and workspaces are launched with pre-installed toolchains, dependencies, and editor extensions, eliminating "works on my machine" problems.

- ### Semantic Classification
  - owl-class:: infrastructure:Devpod
  - owl-role:: Concept

- ### Relationships
  - DevPod is positioned as a self-hosted, vendor-neutral alternative to GitHub Codespaces and GitPod, offering full control over the underlying compute and networking. Its Kubernetes provider integration (demonstrated in the content notes) enables running persistent development environments on private cloud clusters, making it suitable for organisations with data-residency requirements or air-gapped environments. The devcontainer standard it relies on is increasingly adopted across IDEs, CI/CD pipelines, and cloud platforms, making DevPod workspaces portable across the software development lifecycle.

- ### Content
  - I use this: https://devpod.sh/
  - Instructions from Discord:
  - 1) Sign up for Rackspace
  2) Create cloudspace
  3) Select server mix. There is no need to set a load balancer, of turn on high availability. 
  4) Download kubectl file
  5) In devpod.sh desktop app, create a new provider. Point to that kubectl file. 
  6) Create devpod
  7) Install python, node, and claude code. 
  8) Copy the kubeconfig file into the devpod space.
  9) Prompt claude code to generate a "superuser" kubeconfig file
  10) Download the new kubeconfig file
  11) Update the provider to use the new kubeconfig file. 
  12) Profit
  - Same instructions--abridged
  1) Create rackspace cluster. Get kubeconfig file--this one will expire. 
  2) Initialize claude code within pod on cluster using downloaded kubeconfig 
  3) Use claude code to generate replacement kubeconfig file that doesn't expire. 
  4) Update devpod.sh provider configuration to use new kubeconfig file.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
