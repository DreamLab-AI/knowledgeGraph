public:: true

# Terraform

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:terraform", "@type":"Page", "title":"Terraform", "vc:slug":"terraform", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:terraform",
  "@type":"Class",
  "label":"Terraform",
  "definition":"Terraform is an open-source infrastructure-as-code tool that lets engineers define cloud and on-premises resources in declarative configuration files and provision them through a consistent execution workflow. It maintains a state file that records the real-world mapping of declared resources, computes a plan describing the changes needed to reach the desired state, and applies those changes idempotently. Terraform supports many providers through a plugin model, enabling multi-cloud and hybrid provisioning from a single configuration language.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:infrastructure-as-code","label":"Infrastructure as Code"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:devops","label":"DevOps"}],
    "implements":[{"@id":"urn:ngm:class:infrastructure-as-code","label":"Infrastructure as Code"},{"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"}],
    "enables":[{"@id":"urn:ngm:class:automation","label":"Automation"},{"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"}],
    "uses":[{"@id":"urn:ngm:class:version-control","label":"Version Control"}],
    "supports":[{"@id":"urn:ngm:class:cloud-infrastructure","label":"Cloud Infrastructure"},{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"},{"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"}],
    "relatedTo":[{"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"},{"@id":"urn:ngm:class:data-center","label":"Data Center"}],
    "contrastsWith":[{"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"}],
    "bridgesTo":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Terraform]] is a declarative [[Infrastructure as Code]] tool that provisions cloud and on-premises resources from versioned configuration files.
	- It computes an execution plan against a recorded [[Version Control|state]] and applies changes idempotently across many providers.
	- Terraform is a cornerstone of modern [[DevOps]] and [[Cloud Infrastructure]] workflows.
- ### Overview
	- Terraform was created to give teams a single, provider-agnostic language for describing infrastructure rather than clicking through cloud consoles or writing imperative scripts.
	- Configurations are written in HashiCorp Configuration Language (HCL), a human-readable declarative syntax that describes the desired end state of resources.
	- The tool reconciles the declared desired state against a persisted state file, producing a plan that shows exactly which resources will be created, changed, or destroyed before any action is taken.
	- A plugin-based provider model lets Terraform manage hundreds of platforms, from major cloud providers to DNS, monitoring, and SaaS services, enabling multi-cloud and hybrid deployments.
- ### Key aspects
	- Declarative configuration: engineers specify the desired outcome, and Terraform determines the operations required to achieve it.
	- State management: a state file tracks the mapping between configuration and real resources, supporting drift detection and incremental change.
	- Plan and apply workflow: a dry-run plan precedes any mutation, improving safety and reviewability.
	- Provider plugins: an extensible ecosystem abstracts disparate APIs behind a uniform resource model.
	- Modules: reusable, parameterised configuration units that promote composition and standardisation.
- ### Mechanisms
	- Dependency graph construction: Terraform builds a directed acyclic graph of resources to determine correct creation and destruction ordering.
	- Idempotent reconciliation: repeated applies converge on the same desired state without unintended side effects.
	- Remote state backends: state can be stored centrally to support collaboration, locking, and consistency across teams.
- ### Applications
	- Provisioning compute, networking, and storage across [[Cloud Infrastructure]] providers.
	- Standardising environment creation for development, staging, and production in [[DevOps]] pipelines.
	- Managing [[Kubernetes]] clusters and their supporting cloud resources.
	- Codifying [[Data Center]] and hybrid infrastructure for auditable, repeatable deployments.
- ### Relationships
	- subClassOf:: [[Infrastructure as Code]]
	- partOf:: [[DevOps]]
	- implements:: [[Infrastructure as Code]]
	- implements:: [[Configuration Management]]
	- enables:: [[Automation]]
	- enables:: [[Reproducibility]]
	- uses:: [[Version Control]]
	- supports:: [[Cloud Infrastructure]]
	- supports:: [[Cloud Computing]]
	- supports:: [[Kubernetes]]
	- relatedTo:: [[Configuration Management]]
	- relatedTo:: [[Data Center]]
	- contrastsWith:: [[Configuration Management]]
	- bridgesTo:: [[Cloud Computing]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
