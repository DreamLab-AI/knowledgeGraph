public:: true

elevatedFrom:: [[Docker]]
# Docker Containerisation Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:docker",
  "@type": "Page",
  "vc:slug": "docker-containerisation-platform",
  "title": "Docker Containerisation Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:docker-containerisation-platform-containerisation-platform",
  "@type": "Class",
  "label": "Docker Containerisation Platform",
  "definition": "Docker is an open-source platform that automates the deployment, scaling, and management of applications using containerisation technology, packaging applications and their dependencies into lightweight, portable containers that run consistently across different computing environments. Founded in 2013 by Solomon Hykes, Docker Inc. commercialised Linux container technology and brought it to mainstream adoption, fundamentally transforming software development and deployment workflows. Docker containers share the host operating system kernel, making them more resource-efficient than virtual machines while providing process and filesystem isolation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-platform", "label": "Software Platform"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:software-infrastructure", "label": "Software Infrastructure"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"},
      {"@id": "urn:ngm:class:development-platform", "label": "Development Platform"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:machine-learning-discipline-infrastructure", "label": "Machine Learning Infrastructure"},
      {"@id": "urn:ngm:class:software-development-process", "label": "Software Development Process"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cloud-platform", "label": "Cloud Platform"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"},
      {"@id": "urn:ngm:class:model-ops", "label": "Model Ops"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Docker is the leading open-source containerisation platform that packages applications with their dependencies into portable containers, enabling consistent execution across development, testing, and production environments.
- ### Relationships
  - Docker is an instance of [[Software Platform]] and a foundational component of modern [[Software Infrastructure]] and [[Cloud Infrastructure]]. It enables [[Cloud-Native Applications]] by providing the containerisation primitive upon which orchestration systems like Kubernetes build. Docker supports [[Machine Learning Infrastructure]] and [[Machine Learning Pipeline]]s by enabling reproducible, isolated environments for model training, serving, and experimentation. It is a cornerstone of [[Software Development Process]]es and [[Software Engineering]] practice, and underpins [[Model Ops]] workflows.
- ### Content
  - Docker was first released in March 2013 by dotCloud (later renamed Docker Inc.) and rapidly became one of the most transformative infrastructure technologies of the decade. By packaging Linux container primitives (namespaces, cgroups) behind a clean API and intuitive tooling, Docker made containerisation accessible to developers without deep Linux kernel expertise. The Docker Hub registry further accelerated adoption by providing a public marketplace for pre-built container images.

  - A Docker container encapsulates an application, its runtime, libraries, and configuration into a single image that can be versioned, shared, and deployed identically across any Linux or Windows host with the Docker engine installed. This "build once, run anywhere" model solved the notorious "it works on my machine" problem that had long plagued software teams, dramatically improving consistency between development and production environments.

  - Docker's influence on AI and machine learning infrastructure has been profound. Container images have become the standard packaging format for ML models, training pipelines, and inference servers. Frameworks like PyTorch and TensorFlow publish official Docker images, and platforms like Kubeflow and MLflow rely on containers for reproducible experiment tracking and model serving. Docker ensures that complex dependency chains—including CUDA drivers, Python packages, and compiled extensions—are captured and reproducible.

  - Docker Compose allows multi-container application stacks to be defined declaratively in YAML, enabling complex development environments including databases, message queues, and services to be spun up with a single command. This capability made Docker central to modern development workflows and a prerequisite skill for software engineers across virtually all disciplines.

  - The Docker ecosystem catalysed the broader container revolution, leading to the formation of the Open Container Initiative (OCI) to standardise container image formats and runtimes, and driving the development of Kubernetes for production-scale container orchestration. Docker Inc. has evolved its business model over time, but the Docker toolchain remains the dominant developer-facing container interface and a foundational layer of cloud-native infrastructure worldwide.
