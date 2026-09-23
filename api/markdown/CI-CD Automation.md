
Continuous integration and continuous delivery (CI/CD) automation is the practice of automatically building, testing, and deploying software changes through a defined pipeline triggered by source-control events. Continuous integration merges and validates changes frequently to detect defects early; continuous delivery extends this to produce always-deployable artefacts, while continuous deployment automates release to production. CI/CD automation reduces integration risk, shortens feedback loops, and makes deployments repeatable and auditable. It is implemented through pipeline-as-code definitions executed by orchestrators such as GitHub Actions, GitLab CI, and Jenkins.

- ### Content
  - A typical pipeline progresses through stages: checkout, dependency resolution, compilation, unit and integration testing, static analysis and security scanning, artefact packaging, and deployment to staging and production environments. Each stage acts as a quality gate that can halt the pipeline on failure.

  - Pipeline-as-code keeps the automation definition versioned alongside the application, making the delivery process itself reviewable and reproducible. In MLOps contexts the pipeline additionally manages data validation, model training, evaluation gates, and model-registry promotion, extending classic CI/CD into the model lifecycle.

