public:: true

# Twelve Factor App

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:twelve-factor-app", "@type":"Page", "title":"Twelve Factor App", "vc:slug":"twelve-factor-app", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:twelve-factor-app",
  "@type":"Class",
  "label":"Twelve Factor App",
  "definition":"The Twelve-Factor App is a methodology for building software-as-a-service applications that are portable, resilient, and suitable for deployment on modern cloud platforms. It defines twelve guidelines covering codebase management, declared dependencies, configuration in the environment, backing services, build-release-run separation, stateless processes, port binding, concurrency, disposability, dev/prod parity, logs as event streams, and admin tasks. Adherence yields applications that scale horizontally, deploy continuously, and integrate cleanly with containerised and orchestrated infrastructure.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cloud-native-applications","label":"Cloud-Native Applications"}],
  "relations":{
    "relatedTo":[{"@id":"urn:ngm:class:cloud-native","label":"Cloud-Native"},{"@id":"urn:ngm:class:software-architecture","label":"Software Architecture"},{"@id":"urn:ngm:class:microservices","label":"Microservices"}],
    "dependsOn":[{"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"}],
    "bridgesTo":[{"@id":"urn:ngm:class:containerisation","label":"Containerisation"}],
    "enables":[{"@id":"urn:ngm:class:scalability","label":"Scalability"},{"@id":"urn:ngm:class:continuous-delivery","label":"Continuous Delivery"}],
    "requires":[{"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"}],
    "supports":[{"@id":"urn:ngm:class:devops","label":"DevOps"}],
    "implements":[{"@id":"urn:ngm:class:cloud-native","label":"Cloud-Native"}],
    "uses":[{"@id":"urn:ngm:class:containerisation","label":"Containerisation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:microservices","label":"Microservices"}],
    "hasPart":[{"@id":"urn:ngm:class:configuration-management","label":"Configuration Management"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The Twelve-Factor App is a methodology for building portable [[Cloud-Native Applications]] that deploy cleanly on managed platforms. It emphasises strict [[Configuration Management]] in the environment, stateless processes, and build-release-run separation, aligning naturally with [[Containerisation]] and [[Continuous Delivery]].
- ### Overview
- The methodology distils common practices for software-as-a-service into twelve concise factors that, taken together, make an application portable and operable across environments.
- Each factor addresses a recurring source of friction between development and production, such as configuration drift, hidden dependencies, or stateful processes that resist scaling.
- Following the factors tends to produce applications that are disposable, horizontally scalable, and observable, which suits them to elastic cloud infrastructure.
- ### Key aspects
- A single codebase tracked in version control maps to many deployments, with dependencies explicitly declared and isolated.
- Configuration that varies between deployments lives in the environment rather than in code, keeping the build artefact identical across stages.
- Processes are stateless and share nothing, persisting durable data in backing services so that instances can be added or removed freely.
- Logs are treated as event streams, and administrative tasks run as one-off processes in an identical environment.
- ### Applications
- Designing microservices that orchestrators can schedule and scale automatically.
- Establishing reproducible build-release-run pipelines for continuous delivery.
- Containerising legacy applications by remediating configuration and statefulness.
- Setting baseline platform engineering standards for cloud-native teams.
- ### Relationships
- relatedTo:: [[Cloud-Native]]
- relatedTo:: [[Software Architecture]]
- relatedTo:: [[Microservices]]
- dependsOn:: [[Configuration Management]]
- bridgesTo:: [[Containerisation]]
- enables:: [[Scalability]]
- enables:: [[Continuous Delivery]]
- requires:: [[Configuration Management]]
- supports:: [[DevOps]]
- implements:: [[Cloud-Native]]
- uses:: [[Containerisation]]
- contrastsWith:: [[Microservices]]
- hasPart:: [[Configuration Management]]
- ### Provenance
- updated:: 2026-06-15
