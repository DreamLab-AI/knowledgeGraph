public:: true

# Cloud-Native Architecture
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cloud-native-architecture", "@type":"Page", "title":"Cloud-Native Architecture", "vc:slug":"cloud-native-architecture", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:cloud-native-architecture",
  "@type":"Class",
  "label":"Cloud-Native Architecture",
  "definition":"Cloud-native architecture is an approach to designing and operating applications that fully exploit elastic, on-demand cloud infrastructure. It favours loosely coupled, independently deployable services packaged in containers, orchestrated dynamically, and managed through automation, declarative configuration and continuous delivery. The goal is resilient, scalable systems that can be evolved rapidly and recover automatically from failure.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cloud-infrastructure","label":"Cloud Infrastructure"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:microservices-architecture","label":"Microservices Architecture"},
      {"@id":"urn:ngm:class:containerisation","label":"Containerisation"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:cloud-infrastructure","label":"Cloud Infrastructure"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:containerisation","label":"Containerisation"},
      {"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:high-availability","label":"High Availability"},
      {"@id":"urn:ngm:class:continuous-deployment","label":"Continuous Deployment"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:infrastructure-as-code","label":"Infrastructure as Code"},
      {"@id":"urn:ngm:class:observability","label":"Observability"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"},
      {"@id":"urn:ngm:class:devops","label":"DevOps"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:microservices","label":"Microservices"},
      {"@id":"urn:ngm:class:immutable-infrastructure","label":"Immutable Infrastructure"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:service-oriented-architecture","label":"Service-Oriented Architecture"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:twelve-factor-app","label":"Twelve-Factor App"},
      {"@id":"urn:ngm:class:service-mesh","label":"Service Mesh"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:devops","label":"DevOps"},
      {"@id":"urn:ngm:class:observability","label":"Observability"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Cloud-native architecture builds applications to exploit elastic [[Cloud Infrastructure]], composing them from [[Microservices]] packaged through [[Containerisation]].
  - It relies on dynamic orchestration with [[Kubernetes]] and automation via [[DevOps]] and [[Infrastructure as Code]].

- ### Overview
  - The pattern decomposes systems into small, independently deployable services that scale horizontally and fail gracefully.
  - It assumes infrastructure is programmable and disposable, so resources are provisioned, replaced and torn down automatically.
  - Practices such as the twelve-factor methodology, immutable artefacts and continuous delivery make services portable and reproducible.

- ### Key aspects
  - Container packaging and declarative orchestration of workloads.
  - Loose coupling and API-driven communication between [[Microservices]].
  - Automated, repeatable provisioning through [[Infrastructure as Code]].
  - Built-in [[Observability]] for metrics, logs and traces, plus self-healing.

- ### Applications
  - Elastic web and API platforms that scale with demand.
  - Continuous-delivery pipelines releasing many times per day.
  - Multi-cloud and hybrid deployments needing portability.
  - Resilient back-ends using [[Service Mesh]] for traffic control.

- ### Relationships
  - subClassOf:: [[Cloud Infrastructure]]
  - hasPart:: [[Microservices Architecture]]
  - hasPart:: [[Containerisation]]
  - requires:: [[Containerisation]]
  - requires:: [[Kubernetes]]
  - enables:: [[High Availability]]
  - enables:: [[Continuous Deployment]]
  - dependsOn:: [[Infrastructure as Code]]
  - dependsOn:: [[Observability]]
  - uses:: [[DevOps]]
  - supports:: [[Immutable Infrastructure]]
  - contrastsWith:: [[Service-Oriented Architecture]]
  - bridgesTo:: [[Twelve-Factor App]]
  - bridgesTo:: [[Service Mesh]]
  - relatedTo:: [[DevOps]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
