public:: true

# Continuous Delivery

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:continuous-delivery",
  "@type": "Page",
  "title": "Continuous Delivery",
  "vc:slug": "continuous-delivery",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:continuous-delivery",
  "@type": "Class",
  "label": "Continuous Delivery",
  "definition": "Continuous Delivery is a software engineering discipline in which code changes are automatically built, tested and prepared for release to production so that the software is always in a deployable state. It extends continuous integration by adding automated release pipelines, environment promotion and deployment gates, allowing teams to ship changes rapidly, reliably and with low risk. Releases become routine, low-ceremony events rather than infrequent high-stakes operations.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:devops",
      "label": "DevOps"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:automation",
        "label": "Automation"
      },
      {
        "@id": "urn:ngm:class:git",
        "label": "Git"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:cloud-native",
        "label": "Cloud Native"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      },
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:testing",
        "label": "Testing"
      },
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Continuous Delivery is a software engineering discipline in which code changes are automatically built, tested and prepared for release to production so that the software is always in a deployable state. It extends continuous integration by adding automated release pipelines, environment promotion and deployment gates, allowing teams to ship changes rapidly, reliably and with low risk. Releases become routine, low-ceremony events rather than infrequent high-stakes operations.
  - Related core concepts: [[DevOps]] [[Continuous Integration]] [[Version Control]] [[Automation]] [[Software Engineering]]
- ### Overview
  - Continuous Delivery (CD) emerged from agile and lean software practices as a way to shorten the feedback loop between writing code and delivering value to users. Where continuous integration ensures that every commit is merged and verified against an automated build and test suite, continuous delivery carries that verified artefact further along a deployment pipeline through staging and pre-production environments until it is one button-press away from production. Crucially, the decision to release becomes a business choice rather than a technical bottleneck.
  - A mature continuous delivery practice treats the deployment pipeline as the single, authoritative path to production. Every change enters the same pipeline, accrues confidence as it passes successive automated stages, and is recorded for audit. Manual approvals, where they remain, are explicit gates rather than ad-hoc handoffs. The discipline shifts the cost of releasing from a tense, all-hands ceremony to an unremarkable, repeatable operation, which in turn encourages smaller and safer changes.
- ### History and context
  - The practice was crystallised in the early 2010s as teams sought to escape the pain of large, infrequent, error-prone releases. It built directly on continuous integration and lean manufacturing ideas, reframing release as a continuous flow rather than a discrete event. The widespread adoption of cloud infrastructure, containers and infrastructure-as-code made fully automated pipelines practical at scale.
- ### Key aspects
  - Deployment pipeline: an automated sequence of build, test and promotion stages that gives fast, repeatable feedback on every change.
  - Trunk-based or short-lived branches: small, frequent merges keep integration cost low and keep the mainline releasable.
  - Automated testing at multiple levels: unit, integration, contract and acceptance tests gate progression through the pipeline.
  - Environment parity: staging and pre-production environments mirror production to reduce deployment surprises.
  - Release decoupling: techniques such as feature flags separate deployment from release, so code can ship dark and be activated later.
  - Rollback and recovery: automated rollback, blue-green and canary strategies limit the blast radius of a bad release.
- ### Applications
  - High-velocity SaaS teams shipping multiple times a day with minimal manual intervention.
  - Regulated environments where a fully audited, automated pipeline provides traceability for every change.
  - Platform engineering groups offering golden-path pipelines as an internal product.
  - Mobile and embedded delivery where signed, tested artefacts are staged for staged rollouts.
- ### Challenges and considerations
  - Test reliability: flaky tests erode trust in the pipeline and stall delivery.
  - Environment drift: divergence between staging and production reintroduces deployment risk.
  - Database and stateful changes: schema migrations require care to remain backward compatible.
  - Organisational change: continuous delivery is as much a cultural shift as a technical one.
  - Security and compliance: pipelines must embed controls without becoming bottlenecks.
- ### Examples
  - A web platform promoting every green build automatically through staging to a one-click production release.
  - An internal platform team offering opinionated, reusable pipelines as a paved road for product teams.
  - A fintech using progressive delivery with canaries and automated rollback to limit blast radius.
- ### Relationships
  - subClassOf:: [[DevOps]]
  - partOf:: [[DevOps]]
  - requires:: [[Continuous Integration]]
  - requires:: [[Version Control]]
  - uses:: [[Kubernetes]]
  - uses:: [[Automation]]
  - uses:: [[Git]]
  - enables:: [[Microservices]]
  - enables:: [[Cloud Native]]
  - supports:: [[Observability]]
  - supports:: [[Site Reliability Engineering]]
  - supports:: [[Reliability Engineering]]
  - dependsOn:: [[Testing]]
  - dependsOn:: [[Monitoring]]
  - relatedTo:: [[Infrastructure]]
  - relatedTo:: [[Software Engineering]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
