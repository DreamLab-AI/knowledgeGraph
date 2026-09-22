public:: true

# GitOps

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:gitops", "@type":"Page", "title":"GitOps", "vc:slug":"gitops", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:gitops",
  "@type":"Class",
  "label":"GitOps",
  "definition":"GitOps is an operational model in which the desired state of infrastructure and applications is declared in version-controlled repositories and continuously reconciled into running systems by automated agents. Git becomes the single source of truth, so changes flow through pull requests and merges while reconcilers detect and correct drift. It applies software-delivery practices, review, audit and rollback, to operations.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:infrastructure-as-code","label":"Infrastructure as Code"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:version-control","label":"Version Control"},
      {"@id":"urn:ngm:class:git","label":"Git"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:continuous-delivery","label":"Continuous Delivery"},
      {"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:continuous-delivery","label":"Continuous Delivery"},
      {"@id":"urn:ngm:class:disaster-recovery","label":"Disaster Recovery"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:container-orchestration","label":"Container Orchestration"},
      {"@id":"urn:ngm:class:observability","label":"Observability"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:infrastructure-as-code","label":"Infrastructure as Code"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"},
      {"@id":"urn:ngm:class:containerisation","label":"Containerisation"},
      {"@id":"urn:ngm:class:audit-logging","label":"Audit Logging"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[GitOps]] is an operational model that declares the desired state of systems in [[Version Control]] and continuously reconciles it into running infrastructure. It treats [[Git]] as the single source of truth and is a specialisation of [[Infrastructure as Code]] applied to live operations.
	- Changes are proposed through pull requests, reviewed, merged and then automatically converged by reconcilers that detect and correct drift.
- ### Overview
	- GitOps closes the loop between declared intent and actual state. Operators commit declarative manifests describing applications, networking and policy; an in-cluster agent watches the repository and applies any differences, reverting unauthorised changes.
	- Because every change is a tracked commit, GitOps inherits review, [[Audit Logging]], reproducibility and instant rollback from version-control workflows. It is most mature in [[Kubernetes]] and [[Container Orchestration]] environments where declarative APIs make reconciliation natural.
	- The model integrates with [[Continuous Integration]] for building artefacts and with [[Continuous Delivery]] for promoting them across environments, while [[Observability]] confirms that the converged state is healthy.
- ### Key aspects
	- Declarative configuration stored entirely in [[Version Control]].
	- Continuous reconciliation that converges actual state toward declared state.
	- Drift detection and automatic correction of out-of-band changes.
	- Pull-request workflows providing review, approval and audit.
	- Fast, deterministic rollback by reverting commits.
- ### Applications
	- Managing Kubernetes clusters and workloads declaratively.
	- Promoting releases across environments through [[Continuous Delivery]].
	- Enforcing policy and [[Configuration Management]] as code.
	- Accelerating [[Disaster Recovery]] by re-applying the repository to fresh infrastructure.
- ### Relationships
	- uses:: [[Version Control]]
	- uses:: [[Git]]
	- requires:: [[Continuous Delivery]]
	- requires:: [[Configuration Management]]
	- enables:: [[Continuous Delivery]]
	- enables:: [[Disaster Recovery]]
	- supports:: [[Container Orchestration]]
	- supports:: [[Observability]]
	- implements:: [[Infrastructure as Code]]
	- dependsOn:: [[Kubernetes]]
	- relatedTo:: [[Continuous Integration]]
	- relatedTo:: [[Containerisation]]
	- relatedTo:: [[Audit Logging]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
