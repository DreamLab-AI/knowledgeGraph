public:: true

# Infrastructure as Code
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:infrastructure-as-code", "@type":"Page", "title":"Infrastructure as Code", "vc:slug":"infrastructure-as-code", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:infrastructure-as-code",
  "@type":"Class",
  "label":"Infrastructure as Code",
  "definition":"Infrastructure as Code (IaC) is the practice of defining and provisioning computing infrastructure through machine-readable definition files rather than manual configuration. Declarative or imperative specifications describe the desired state of servers, networks, and services, which tooling then realises idempotently and reproducibly. Treating infrastructure like software allows version control, peer review, automated testing, and consistent deployment across environments, eliminating configuration drift.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:automation","label":"Automation"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:devops","label":"DevOps"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:version-control","label":"Version Control"},
      {"@id":"urn:ngm:class:cloud-infrastructure","label":"Cloud Infrastructure"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:idempotency","label":"Idempotency"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:immutable-infrastructure","label":"Immutable Infrastructure"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:continuous-deployment","label":"Continuous Deployment"},
      {"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"},
      {"@id":"urn:ngm:class:auto-scaling","label":"Auto-Scaling"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:terraform","label":"Terraform"},
      {"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:gitops","label":"GitOps"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:cloud-native","label":"Cloud Native"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:azure","label":"Azure Cloud"},
      {"@id":"urn:ngm:class:containerisation","label":"Containerisation"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Infrastructure as Code provisions computing infrastructure through machine-readable files rather than manual steps.
	- It is a form of [[Automation]] and a cornerstone practice within [[DevOps]].
	- Definitions live in [[Version Control]] and are applied idempotently via tools such as [[Terraform]].
- ### Overview
	- Manual infrastructure provisioning is slow, error-prone, and impossible to audit at scale.
	- IaC captures the desired state declaratively so tooling can converge real infrastructure to that state.
	- Because definitions are code, they benefit from review, testing, and reproducible deployment.
	- The approach eliminates configuration drift by making the repository the single source of truth.
- ### Key aspects
	- Declarative specification of the target state, with the engine computing the change plan.
	- Idempotency: applying the same definition repeatedly yields the same result.
	- Versioning and review of infrastructure changes alongside application code.
	- Drift detection and remediation to keep environments consistent.
- ### Applications
	- Provisioning cloud resources across multiple providers and regions.
	- Building reproducible staging and production environments from one definition.
	- GitOps pipelines where merges trigger infrastructure changes.
	- Disaster recovery by recreating entire environments from code.
- ### Relationships
	- subClassOf:: [[Automation]]
	- hasPart:: [[Configuration Management]]
	- partOf:: [[DevOps]]
	- requires:: [[Version Control]]
	- requires:: [[Cloud Infrastructure]]
	- dependsOn:: [[Idempotency]]
	- implements:: [[Immutable Infrastructure]]
	- enables:: [[Continuous Deployment]]
	- enables:: [[Reproducibility]]
	- enables:: [[Auto-Scaling]]
	- uses:: [[Terraform]]
	- uses:: [[Cloud Computing]]
	- supports:: [[GitOps]]
	- bridgesTo:: [[Cloud Native]]
	- relatedTo:: [[Azure Cloud]]
	- relatedTo:: [[Containerisation]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
