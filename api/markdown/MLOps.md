public:: true

# MLOps
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mlops",
  "@type": "Page",
  "vc:slug": "mlops",
  "title": "MLOps",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mlops",
  "@type": "Class",
  "label": "MLOps",
  "definition": "MLOps (Machine Learning Operations) is the set of practices, tools, and cultural norms that operationalise machine learning models at production scale by applying DevOps principles to the ML lifecycle. It encompasses the end-to-end automation and monitoring of ML pipelines: data ingestion, feature engineering, model training, evaluation, deployment, serving, and continuous retraining in response to data drift. MLOps addresses the unique challenges of ML systems — namely that code, data, and model weights all evolve independently and must be versioned, tested, and governed together.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-lifecycle", "label": "AI Lifecycle"},
      {"@id": "urn:ngm:class:ai-monitoring", "label": "AI Monitoring"},
      {"@id": "urn:ngm:class:machine-learning-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-deployment", "label": "AI Deployment"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"},
      {"@id": "urn:ngm:class:data-versioning", "label": "Data Versioning"},
      {"@id": "urn:ngm:class:feature-store", "label": "Feature Store"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - MLOps applies DevOps principles to the machine learning lifecycle, providing the tooling, automation, and organisational practices needed to reliably build, deploy, monitor, and retrain ML models in production at scale.

- ### Relationships
  - MLOps is a subclass of [[Machine Learning]] and the operational discipline that governs the [[AI Lifecycle]] from experiment to production. It depends on [[Cloud Computing]] and [[Kubernetes]] for scalable infrastructure, uses [[Data Pipeline]]s for data ingestion and transformation, [[Feature Engineering]] and [[Feature Store]]s for consistent feature access, and [[Data Versioning]] and [[Version Control]] for reproducibility. It enables [[AI Deployment]] and live [[Inference]] serving while relying on [[AI Monitoring]] to detect drift. [[Machine Learning Pipeline]]s encode the end-to-end workflow, and [[Data Governance]] frameworks ensure compliance and data quality throughout.

- ### Content
  - MLOps emerged as a discipline around 2017–2018 in response to the "last mile" problem of machine learning: organisations found it straightforward to train promising models in notebooks but extremely difficult to deploy, maintain, and improve them reliably in production. The term borrowed from DevOps and Site Reliability Engineering, recognising that ML systems require continuous integration, continuous delivery, and continuous training (CI/CD/CT) rather than the one-shot release cycle typical of traditional software.

  - A central insight of MLOps is that ML systems are uniquely complex because they have three axes of change: the training code, the data, and the model weights. A model that performs well today may degrade without any code change if the statistical distribution of incoming data shifts — a phenomenon called data drift or concept drift. MLOps practice therefore mandates monitoring pipelines that continuously evaluate model performance on fresh production data, trigger retraining when degradation is detected, and validate the new model before promoting it to replace the incumbent.

  - The MLOps tooling ecosystem has grown rapidly. Experiment tracking tools (MLflow, Weights and Biases) record hyperparameters, metrics, and artefacts for every training run, enabling reproducibility and comparison. Model registries store versioned model artefacts with promotion gates (staging → production). Feature stores (Feast, Tecton, Hopsworks) ensure that the features used at training time exactly match those computed at inference time, eliminating training-serving skew. Workflow orchestrators (Apache Airflow, Kubeflow Pipelines, Prefect) schedule and execute multi-step pipelines across heterogeneous compute.

  - Deployment patterns in MLOps range from batch inference (running predictions on stored data overnight) to real-time online serving via REST or gRPC endpoints backed by model servers such as TorchServe, TensorFlow Serving, or Triton Inference Server. Canary and shadow deployments allow new model versions to handle a fraction of traffic alongside the incumbent, enabling statistical comparison before full rollout. A/B testing frameworks measure business-level outcomes (conversion rates, user engagement) beyond pure ML metrics.

  - Organisational maturity in MLOps is often characterised on a capability ladder. At level 0, data scientists manually train and deploy models. At level 1, training pipelines are automated but deployment remains manual. At level 2, the full CI/CD/CT loop is automated, with model changes triggering automated testing, validation, and deployment without human intervention. Reaching level 2 requires sustained investment in platform engineering, cultural alignment between data scientists and platform engineers, and governance frameworks that satisfy regulatory requirements around model explainability and audit trails.
