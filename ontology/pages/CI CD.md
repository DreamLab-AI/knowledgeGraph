public:: true

# CI/CD
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:05d131b75cc2a7536d59fa14d0d3820317b4e983e8d3a887dc328c70693e8d4f",
  "@type": "Page",
  "vc:slug": "ci-cd",
  "title": "CI/CD",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:devops",
      "vc:label": "DevOps"
    },
    {
      "@id": "urn:visionflow:linked:continuous-integration",
      "vc:label": "Continuous Integration"
    },
    {
      "@id": "urn:visionflow:linked:continuous-deployment",
      "vc:label": "Continuous Deployment"
    },
    {
      "@id": "urn:visionflow:linked:canary-deployment",
      "vc:label": "Canary Deployment"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ci-cd",
  "@type": "Class",
  "label": "CI/CD",
  "definition": "CI/CD (continuous integration and continuous delivery/deployment) is the software engineering practice of automatically building, testing and releasing every code change through a versioned pipeline. Continuous integration merges work into a shared trunk many times a day behind automated test gates; continuous delivery keeps the mainline permanently releasable; continuous deployment pushes each passing change to production automatically. Together they shrink feedback loops, reduce integration risk and enable progressive release strategies such as canary and zero-downtime deployments.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:devops",
    "label": "DevOps"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:continuous-deployment",
        "label": "Continuous Deployment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:automated-testing",
        "label": "Automated Testing"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:container",
        "label": "Container"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:canary-deployment",
        "label": "Canary Deployment"
      },
      {
        "@id": "urn:ngm:class:zero-downtime-deployment",
        "label": "Zero Downtime Deployment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:infrastructure-as-code",
        "label": "Infrastructure as Code"
      },
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "CI/CD (continuous integration and continuous delivery/deployment) is the software engineering practice of automatically building, testing and releasing every code change through a versioned pipeline. Continuous integration merges work into a shared trunk many times a day behind automated test gates; continuous delivery keeps the mainline permanently releasable; continuous deployment pushes each passing change to production automatically. Together they shrink feedback loops, reduce integration risk and enable progressive release strategies such as canary and zero-downtime deployments."

- ### Semantic Classification
  - owl-class:: infrastructure:CICD
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[DevOps]]
  - has-part:: [[Continuous Integration]]
  - has-part:: [[Continuous Deployment]]
  - enables:: [[Canary Deployment]]

- ### Content

  ## Definition

  **CI/CD** is the automation backbone of modern software delivery, pairing [[Continuous Integration]] with continuous delivery or [[Continuous Deployment]]. CI, articulated by Grady Booch and popularised through Extreme Programming and Martin Fowler's writing, requires developers to merge small changes into a shared mainline frequently — at least daily — with every merge triggering an automated build and test run, so integration conflicts and regressions surface within minutes rather than at release time. Continuous delivery, codified by Jez Humble and David Farley (2010), extends the pipeline through packaging, environment provisioning and acceptance testing so the mainline is always in a deployable state, with release remaining a business decision; continuous deployment removes even that manual gate, shipping every passing change to production.

  A pipeline is a directed sequence of stages defined as code alongside the application: compile and unit test, static analysis and dependency scanning, artefact build (typically a [[Container]] image), integration and end-to-end tests against ephemeral environments, then promotion through staging to production. Everything hangs off [[Version Control]] — pipeline definitions, [[Infrastructure as Code]], and the artefact versioning that makes any build reproducible and any release traceable to a commit. Deployment stages implement progressive strategies: [[Canary Deployment]] routes a small traffic slice to the new version and watches error budgets, blue-green switchovers and rolling updates achieve [[Zero Downtime Deployment]], and automated rollback closes the loop.

  ## Current Landscape

  Dominant platforms include GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Azure DevOps and cloud-native systems such as Tekton and Argo (whose GitOps model continuously reconciles cluster state with a Git repository). DORA's research programme ties CI/CD maturity directly to organisational performance via its four key metrics — deployment frequency, lead time for changes, change failure rate and time to restore — with elite performers deploying on demand, many times a day. Current emphases are supply-chain security (artefact signing with Sigstore, SLSA provenance levels, SBOM generation in-pipeline), merge queues and test-impact analysis to keep feedback fast at monorepo scale, and increasingly AI-assisted test generation and failure triage. The practice is now table stakes: the VisionFlow corpus itself is built and republished by a CI pipeline on every push.
