- ### Definition
  - [[CI-CD Automation]] is the automated build, test, and deployment of software changes through a pipeline triggered by source-control events. It is a form of [[Automation]] applied to the software delivery lifecycle, encompassing continuous integration, continuous delivery, and continuous deployment.
- ### Relationships
  - CI/CD automation is a core practice of [[Software Engineering]] and increasingly of machine-learning delivery, where it underpins reproducible [[Model Deployment]]. Its pipeline stages are structurally analogous to a [[Data Pipeline]], transforming committed source through successive validated stages into deployable artefacts.
- ### Content
  - A typical pipeline progresses through stages: checkout, dependency resolution, compilation, unit and integration testing, static analysis and security scanning, artefact packaging, and deployment to staging and production environments. Each stage acts as a quality gate that can halt the pipeline on failure.

  - Pipeline-as-code keeps the automation definition versioned alongside the application, making the delivery process itself reviewable and reproducible. In MLOps contexts the pipeline additionally manages data validation, model training, evaluation gates, and model-registry promotion, extending classic CI/CD into the model lifecycle.