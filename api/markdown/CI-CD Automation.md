public:: true

# CI-CD Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ci-cd-automation",
  "@type": "Page",
  "vc:slug": "ci-cd-automation",
  "title": "CI-CD Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ci-cd-automation",
  "@type": "Class",
  "label": "CI-CD Automation",
  "definition": "Continuous integration and continuous delivery (CI/CD) automation is the practice of automatically building, testing, and deploying software changes through a defined pipeline triggered by source-control events. Continuous integration merges and validates changes frequently to detect defects early; continuous delivery extends this to produce always-deployable artefacts, while continuous deployment automates release to production. CI/CD automation reduces integration risk, shortens feedback loops, and makes deployments repeatable and auditable. It is implemented through pipeline-as-code definitions executed by orchestrators such as GitHub Actions, GitLab CI, and Jenkins.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:automation", "label": "Automation"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"},
      {"@id": "urn:ngm:class:model-deployment", "label": "Model Deployment"}
    ]
  },
  "quality": 0.78
}
```

- ### Definition
  - [[CI-CD Automation]] is the automated build, test, and deployment of software changes through a pipeline triggered by source-control events. It is a form of [[Automation]] applied to the software delivery lifecycle, encompassing continuous integration, continuous delivery, and continuous deployment.
- ### Relationships
  - CI/CD automation is a core practice of [[Software Engineering]] and increasingly of machine-learning delivery, where it underpins reproducible [[Model Deployment]]. Its pipeline stages are structurally analogous to a [[Data Pipeline]], transforming committed source through successive validated stages into deployable artefacts.
- ### Content
  - A typical pipeline progresses through stages: checkout, dependency resolution, compilation, unit and integration testing, static analysis and security scanning, artefact packaging, and deployment to staging and production environments. Each stage acts as a quality gate that can halt the pipeline on failure.

  - Pipeline-as-code keeps the automation definition versioned alongside the application, making the delivery process itself reviewable and reproducible. In MLOps contexts the pipeline additionally manages data validation, model training, evaluation gates, and model-registry promotion, extending classic CI/CD into the model lifecycle.
