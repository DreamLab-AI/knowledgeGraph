public:: true

# ETSI Domain: Data Management + AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb93146f6e22ee5d540fcb40a52ffb4bd14ea4a9403e90ec336a414e712a48e9",
  "@type": "Page",
  "vc:slug": "etsi-domain-data-management-ai",
  "title": "ETSI Domain: Data Management + AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-and-machine-learning",
      "vc:label": "AI & Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:data-pipelines",
      "vc:label": "Data Pipelines"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-mec-032",
      "vc:label": "ETSI GR MEC 032"
    },
    {
      "@id": "urn:visionflow:linked:experiment-tracking",
      "vc:label": "Experiment Tracking"
    },
    {
      "@id": "urn:visionflow:linked:ml-operations",
      "vc:label": "ML Operations"
    },
    {
      "@id": "urn:visionflow:linked:mlops-infrastructure",
      "vc:label": "MLOps Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:model-deployment",
      "vc:label": "Model Deployment"
    },
    {
      "@id": "urn:visionflow:linked:model-registry",
      "vc:label": "Model Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:owl:class:data-versioning",
      "vc:label": "Data Versioning"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "vc:label": "ETSI Metaverse Domain Taxonomy"
    },
    {
      "@id": "urn:visionflow:owl:class:feature-store",
      "vc:label": "Feature Store"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:training-data-repository",
      "vc:label": "Training Data Repository"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20345"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain: Data Management + AI"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:etsi-domain-data-management-ai",
  "@type": "Class",
  "label": "ETSI Domain: Data Management + AI",
  "definition": "Crossover domain for ETSI metaverse categorisation addressing data infrastructure supporting AI/ML workflows, training data management, model versioning, and inference serving.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:etsi-domain-ai-data-mgmt",
      "label": "ETSI Domain AI + Data Mgmt"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-infrastructure",
        "label": "AI Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:empirical-experimental-design-tracking",
        "label": "Experiment Tracking"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:feature-store",
        "label": "Feature Store"
      },
      {
        "@id": "urn:ngm:class:training-data-repository",
        "label": "Training Data Repository"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ai-machine-learning",
        "label": "AI & Machine Learning"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Data Versioning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
        "label": "Etsi Metaverse Domain Taxonomy"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-data-management-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb93146f6e22ee5d540fcb40a52ffb4bd14ea4a9403e90ec336a414e712a48e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI & Machine Learning]]",
      "resolved": "urn:visionflow:linked:ai-and-machine-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Pipelines]]",
      "resolved": "urn:visionflow:linked:data-pipelines",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR MEC 032]]",
      "resolved": "urn:visionflow:linked:etsi-gr-mec-032",
      "kind": "StubLink"
    },
    {
      "raw": "[[Experiment Tracking]]",
      "resolved": "urn:visionflow:linked:experiment-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[ML Operations]]",
      "resolved": "urn:visionflow:linked:ml-operations",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps Infrastructure]]",
      "resolved": "urn:visionflow:linked:mlops-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Deployment]]",
      "resolved": "urn:visionflow:linked:model-deployment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Registry]]",
      "resolved": "urn:visionflow:linked:model-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:owl:class:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Versioning]]",
      "resolved": "urn:visionflow:owl:class:data-versioning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Metaverse Domain Taxonomy]]",
      "resolved": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feature Store]]",
      "resolved": "urn:visionflow:owl:class:feature-store",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Training Data Repository]]",
      "resolved": "urn:visionflow:owl:class:training-data-repository",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The **ETSI Domain: Data Management + AI** is a crossover classification node within the [[ETSI Metaverse Domain Taxonomy]] that demarcates the intersection of [[Data Management]] infrastructure with [[AI & Machine Learning]] operational requirements. It encompasses the full lifecycle of data artefacts that support artificial intelligence workflows in distributed and metaverse-scale deployments: from raw data ingestion through [[Data Pipelines]] and transformation into curated training corpora stored in [[Training Data Repository|Training Data Repositories]], through feature engineering captured in a [[Feature Store]], to model experimentation tracked via [[Experiment Tracking]] systems, model lifecycle governance via a [[Model Registry]], and finally operational inference serving through [[Model Deployment]] mechanisms. The domain is explicitly framed within the [[ETSI GR MEC 032]] Multi-access Edge Computing reference architecture, where AI inference workloads must be co-located with managed data stores to satisfy latency requirements in immersive and spatial computing applications. Within the [[ETSI Metaverse Domain Taxonomy]], this crossover node signals that any metaverse component assigned to this classification exhibits both a data management concern — governing storage, versioning, consistency, and lineage — and an AI operations concern — governing training reproducibility, model governance, and deployment pipelines. It is architecturally positioned in the [[ApplicationLayer]] and draws its operational substrate from the [[InfrastructureDomain]], bridging raw computing resources with the intelligent application services that consume and produce machine learning artefacts. The domain is the standardisation anchor for [[ML Operations]] and [[MLOps Infrastructure]] considerations within ETSI's broader metaverse technical framework, ensuring that organisations building AI-powered spatial and immersive services have a normative reference classification aligning their data and model governance practices with European telecommunications and computing standards. As [[EU AI Act]] obligations around data quality and training data governance (Article 10) come into force through 2025–2026, this domain becomes the natural ETSI-side mapping point for conformity assessment of data management practices in high-risk AI systems deployed at scale across metaverse infrastructure.

- ### Bridge-To
  - bridges-to:: [[Computer Vision]] (ai)

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ETSIDomain_DataMgmt_AI
  - owl-role:: DomainCrossoverMarker | InfrastructureConcept | MLOpsConcept
  - owl-inferred:: mv:VirtualObject, ai:MLOpsComponent, infra:DataGovernanceComponent
  - belongs-to-domain:: [[InfrastructureDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[ETSI Domain AI + Data Mgmt]], [[ETSI Domain: Data Management]], [[ETSI Metaverse Domain Taxonomy]]
  - has-part:: [[Training Data Repository]], [[Model Registry]], [[Feature Store]], [[Experiment Tracking]], [[Data Pipelines]], [[Data Versioning]]
  - is-part-of:: [[ETSI Metaverse Domain Taxonomy]]
  - requires:: [[Data Management]], [[AI & Machine Learning]], [[MLOps Infrastructure]], [[Data Storage]], [[Data Processing]]
  - enables:: [[ML Operations]], [[Model Deployment]], [[Data Versioning]], [[Experiment Tracking]], [[Model Registry]], [[Inference Serving]]
  - depends-on:: [[MLOps Infrastructure]], [[Data Pipelines]], [[Distributed Systems]], [[InfrastructureDomain]], [[ETSI Domain AI + Data Mgmt]]
  - supports:: [[EU AI Act]], [[AI Conformity Assessment]], [[ETSI Domain Taxonomy]], [[AI Governance and Ethics]]
  - uses:: [[ETSI GR MEC 032]], [[Kubernetes]], [[MLflow]], [[Feature Store]], [[Data Lake]]
  - implements:: [[ETSI Domain AI + Data Mgmt]], [[ETSI Metaverse Domain Taxonomy]]
  - contrasts-with:: [[ETSI Domain: Data Management + Ethics]], [[ETSI Domain: Data Management + Security]], [[ETSI Domain: Data Management + Creative Media]]
  - related-to:: [[Computer Vision]], [[Deep Learning]], [[Model Monitoring]], [[Data Drift Detection]], [[Continuous Integration]], [[Continuous Deployment]], [[Data Governance]]
  - standardized-by:: [[ETSI]], [[ISO/IEC JTC 1/SC 42]], [[ETSI ISG AI]]
  - bridges-to:: [[AI Infrastructure]], [[Edge Computing]], [[Multi-access Edge Computing]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:hasPart ai:TrainingDataRepository))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:hasPart ai:ModelRegistry))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:hasPart ai:FeatureStore))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:hasPart ai:ExperimentTracking))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:hasPart ai:DataPipelines))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:hasPart ai:DataVersioning))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:hasPart ai:InferenceServing))

  ## Dependency Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:requires ai:DataManagement))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:requires ai:AIMachineLearning))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:requires ai:MLOpsInfrastructure))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:requires ai:DistributedSystems))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:requires ai:DataStorage))

  ## Capability Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:enables ai:MLOperations))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:enables ai:ModelDeployment))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:enables ai:DataVersioning))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:enables ai:ExperimentTracking))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:enables ai:AIConformityAssessment))

  ## Implementation Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:implements ai:ETSIDomainAIDataMgmt))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:implements ai:ETSIMetaverseDomainTaxonomy))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:implements ai:EUAIActArticle10))

  ## Reduction Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:reducesTo ai:ETSIDomainAIDataMgmt))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:reducesTo ai:ETSIDomainDataManagement))

  ## Support Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:supports ai:EUAIAct))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:supports ai:AIConformityAssessment))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:supports ai:DataGovernance))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:supports ai:TrustworthyAI))

  ## Usage Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:uses ai:MLflow))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:uses ai:Kubernetes))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:uses ai:FeatureStore))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:uses ai:DataVersionControl))

  ## Contrast Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:contrastsWith ai:ETSIDomain_DataMgmt_Ethics))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:contrastsWith ai:ETSIDomain_DataMgmt_Security))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:contrastsWith ai:ETSIDomain_DataMgmt_CreativeMedia))

  ## Relation Relationships
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:relatedTo ai:ModelMonitoring))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:relatedTo ai:DataDriftDetection))
      SubClassOf(ai:ETSIDomain_DataMgmt_AI
        ObjectSomeValuesFrom(ai:relatedTo ai:ContinuousIntegration))

  ## About
    The ETSI Domain: Data Management + AI node emerged as a necessary conceptual bridge within the [[ETSI Metaverse Domain Taxonomy]] because AI and data management, while treated as independent domains in many classification schemes, are operationally inseparable in real-world metaverse deployments. A spatial computing platform that deploys [[Computer Vision]] models for scene understanding, or a digital twin environment that uses [[Deep Learning]] for predictive simulation, requires not just the AI model itself but an entire supporting infrastructure of curated datasets, versioned training corpora, feature transformation pipelines, and model governance mechanisms. ETSI recognised this coupling explicitly in [[ETSI GR MEC 032]] and subsequent Multi-access Edge Computing specifications, which describe AI inference as a first-class workload type that must be co-managed with the edge data fabric. The crossover node therefore provides a normative label for components that cannot be classified cleanly as either purely data management or purely AI: they are MLOps components, and the ETSI taxonomy needed a dedicated classification slot to accommodate them.

    Historically, the data management and AI disciplines diverged from the early 2000s as data warehousing and ETL engineering became a distinct profession separate from the machine learning researcher community. The re-convergence began around 2017–2019 with the rise of [[ML Operations]] as a discipline: organisations discovered that building production machine learning systems required the same rigorous software and data engineering practices — versioning, testing, deployment pipelines, monitoring — that had long been applied to traditional software. The seminal paper by Sculley et al. (2015), "Hidden Technical Debt in Machine Learning Systems," articulated the costs of ignoring data management discipline in AI systems. The emergence of [[Feature Store]] as an architectural pattern (Uber's Michelangelo, 2017; Feast open-source release, 2020), [[Model Registry]] as a governance component, and [[Data Versioning]] tools such as DVC and lakeFS crystallised this discipline into the current MLOps stack. ETSI's crossover taxonomy node reflects this matured understanding: it is impossible to govern AI in production without governing the data lifecycle that feeds it.

    As of 2026, the domain aligns directly with regulatory obligations. [[EU AI Act]] Article 10 mandates specific data governance practices for high-risk AI systems, requiring that training, validation, and testing datasets be subject to governance practices covering relevance, representativeness, error-freeness, and completeness. These obligations bind all providers of high-risk AI systems from August 2026, making the ETSI Data Management + AI crossover domain an essential reference for conformity assessment purposes. ETSI Technical Specification ETSI TS 104 008, which introduces a Continuous Auditing-Based Conformity Assessment (CABCA) framework, draws directly on the kinds of automated logging, dataset traceability, and model lineage tracking that the Data Management + AI domain encompasses.

  ## Components and Architecture
    - **Training Data Repository**: Immutable, versioned storage for labelled datasets and raw training corpora, supporting point-in-time reconstruction of any training run. Tools in this space include [[DVC]] (Data Version Control), [[lakeFS]] (which acquired DVC in November 2025), and cloud-native immutable storage patterns. EU AI Act Article 10 compliance requires auditable training data records at scale.
    - **Feature Store**: A centralised repository that stores, manages, versions, and serves [[Machine Learning]] features at scale. It enforces point-in-time consistency between training and online inference, preventing training–serving skew. Leading implementations include open-source [[Feast]], Tecton, Hopsworks, and cloud-native offerings (AWS SageMaker Feature Store, Google Vertex AI Feature Store). The feature store is the single most critical component for achieving consistent model behaviour between training and production environments.
    - **Experiment Tracking**: A logging and versioning layer that captures hyperparameters, metrics, code versions, environment specifications, and model artefacts for every training run. [[MLflow]] remains the dominant open-source platform; Weights & Biases (W&B) and neptune.ai provide enhanced collaboration features. MLflow 3.0 extended support to generative AI and agent-based workflows, connecting model versions to prompt configurations and evaluation results.
    - **Model Registry**: A centralised governance store for trained model artefacts, enabling stage-transition workflows (Staging → Production → Archived), approval gates, alias assignment (e.g., @champion, @production), and lineage tracing back to the originating experiment. Integrated into MLflow, AWS SageMaker, Azure ML, and Google Vertex AI.
    - **Data Pipelines**: Orchestrated transformation workflows that move data from ingestion sources through cleaning, labelling, feature engineering, and loading stages into the training data repository and feature store. Tools include Apache Airflow, Kubeflow Pipelines, Prefect, and Dagster. In [[Multi-access Edge Computing]] (MEC) contexts, pipelines must handle distributed data federation across edge nodes.
    - **Inference Serving**: The operational layer that deploys versioned model artefacts to serve predictions in real time. In metaverse and spatial computing applications, inference serving must meet strict latency budgets (typically <10ms for immersive rendering). Tools include TorchServe, Triton Inference Server (NVIDIA), BentoML, and cloud-native model endpoints.
    - **Model Monitoring and Data Drift Detection**: Ongoing surveillance of deployed model behaviour and input data distributions to detect performance degradation. Tightly coupled with the [[Experiment Tracking]] and [[Model Registry]] components, enabling automated rollback when drift exceeds thresholds.

  ## MLOps Stack Architecture (2026)
    As of 2026, the MLOps tooling landscape has consolidated significantly from the fragmented ecosystem of 2021–2023. The dominant architectural pattern for the ETSI Data Management + AI domain comprises:
    - **Data versioning backbone**: lakeFS (post-DVC acquisition, November 2025) or cloud-native immutable storage with snapshot semantics
    - **Experiment tracking and model registry**: MLflow (open-source) or cloud-native (SageMaker, Vertex AI, Azure ML)
    - **Feature store**: Feast (open-source) or managed (Tecton, Hopsworks, cloud-native)
    - **Pipeline orchestration**: Kubeflow Pipelines on Kubernetes, or Airflow with ML-specific operators
    - **Inference serving**: Triton Inference Server for GPU-accelerated workloads; BentoML or Ray Serve for CPU workloads
    - **Monitoring**: Evidently AI, WhyLabs, or integrated cloud-native drift detection

    ETSI demonstrations of MEC AI integration (referenced in ETSI GR MEC 036 V4.1.1, 2025) integrated open-source MLOps stacks comprising Kubernetes, MLflow, and MinIO with network architecture, introducing capabilities for model registry, metadata management, artefact storage, and continuous monitoring at the edge.

  ## Use Cases in Metaverse and Spatial Computing Contexts
    - **Autonomous avatar behaviour training**: Training data repositories capture interaction logs from millions of avatar sessions; feature stores provide low-latency access to user preference features at inference time; model registries govern the deployment of behaviour policy models across a distributed metaverse platform.
    - **3D scene understanding and semantic mapping**: Computer vision models trained on spatially indexed datasets require point-in-time consistency between the training corpus spatial metadata and inference-time scene graphs. The ETSI Data Management + AI domain provides the classification anchor for this data–model coupling.
    - **Digital twin predictive simulation**: Industrial digital twins that incorporate physics simulation and learned surrogate models require tight versioning of both the simulation parameters and the training datasets derived from physical sensor readings. The model registry ensures that deployed surrogate models can be traced to their training data provenance.
    - **Edge inference for immersive rendering**: In MEC-deployed immersive environments, AI models for super-resolution, foveated rendering, and scene completion must be served from edge nodes co-located with compressed media streams. The inference serving component of the Data Management + AI domain governs model deployment to these edge-distributed inference endpoints.
    - **Personalised recommendation in social XR**: Extended reality platforms that personalise content recommendations require online feature serving (from the feature store) at sub-millisecond latency, synchronised with model versions managed in the model registry.

  ## Data Quality Governance for AI Systems
    Data quality is the foundational concern of the ETSI Data Management + AI domain. [[EU AI Act]] Article 10 establishes that training, validation, and testing datasets for high-risk AI systems must be subject to data governance practices ensuring their relevance, representativeness, freedom from errors, and completeness. In metaverse and spatial computing contexts, data quality encompasses several distinct dimensions:
    - **Annotation quality**: Labelled training data must be annotated consistently and accurately. In large-scale metaverse datasets — which may include millions of spatially indexed frames, audio segments, interaction logs, and sensor readings — annotation quality management requires automated consistency checking, inter-annotator agreement measurement, and systematic label validation pipelines integrated into the [[Training Data Repository]].
    - **Representativeness and bias**: Training datasets must represent the full diversity of operating conditions and user populations that the deployed AI system will encounter. For metaverse AI systems serving global user bases, representativeness requires careful curation of training corpora across demographic groups, environmental conditions, hardware configurations (different VR headset specifications introduce different sensor characteristics), and interaction modalities.
    - **Distribution shift monitoring**: The gap between training data distributions and production inference data distributions — known as covariate shift or concept drift — is a fundamental challenge in deployed AI systems. The [[ETSI Domain: Data Management + AI]] domain's [[Model Monitoring and Data Drift Detection]] component addresses this through continuous monitoring of input feature distributions and model prediction distributions against baseline statistics computed on training data.
    - **Data lineage and provenance**: [[EU AI Act]] Article 10 requires that training data provenance be documented and auditable. Data lineage tracking — recording the complete processing history of each data record from source collection through cleaning, transformation, and feature extraction to its final use in a training run — is a core capability of the [[Training Data Repository]] and [[Experiment Tracking]] components.
    - **Version coherence**: In production ML systems, models, training data, and inference-serving code evolve asynchronously. Version coherence — ensuring that a given model version is always associated with the exact training data snapshot and code version used to produce it — is the fundamental problem addressed by the [[Data Versioning]] component. Tools like DVC (now lakeFS-integrated) provide Git-like branch and commit semantics for data artefacts, enabling precise version coherence across the full ML artifact graph.

  ## Formal Model of the MLOps Lifecycle
    The ETSI Data Management + AI domain encompasses the following formal lifecycle stages, each constituting a distinct operational concern with associated data management requirements:

    **Stage 1: Data Ingestion and Curation**
    Raw data from metaverse platform telemetry, sensor streams, and user interaction logs enters the pipeline. Curation involves deduplication, quality filtering, privacy-preserving preprocessing (alignment with [[ETSI Domain: Data Management + Ethics]]), format standardisation, and partitioned storage in the [[Training Data Repository]]. Versioned commits capture each curation run.

    **Stage 2: Feature Engineering and Feature Store Population**
    Curated raw data is transformed into ML features via transformation pipelines. Feature definitions (names, data types, transformation logic, owners) are registered in the [[Feature Store]] schema. Batch feature computation populates the offline store; streaming feature computation maintains the online store for low-latency inference access.

    **Stage 3: Model Training and Experiment Tracking**
    Model training runs consume frozen data snapshots from the [[Training Data Repository]] and feature snapshots from the offline [[Feature Store]]. Each training run is logged to the [[Experiment Tracking]] system with its hyperparameters, dependency versions, evaluation metrics, and output model artefact. Point-in-time correctness is enforced to prevent data leakage from future data into training runs.

    **Stage 4: Model Evaluation and Registry Promotion**
    Candidate models are evaluated against held-out test sets from the [[Training Data Repository]]. Evaluation results are compared against baseline metrics in the [[Experiment Tracking]] system. Models that pass evaluation thresholds are promoted to the [[Model Registry]] with appropriate stage labels (Staging, then Production upon approval gate sign-off).

    **Stage 5: Inference Serving and Online Feature Retrieval**
    Deployed models served via the inference layer retrieve real-time features from the online [[Feature Store]] — ensuring that the same feature transformations applied at training time are applied identically at inference time, preventing training–serving skew. Prediction results and associated input features are logged for monitoring.

    **Stage 6: Model Monitoring and Lifecycle Management**
    Deployed models are continuously monitored for performance degradation, data drift, and prediction distribution shifts. Monitoring alerts trigger re-evaluation, re-training on updated data, or rollback to a previous [[Model Registry]] version. The complete lifecycle is auditable via the [[Experiment Tracking]] and [[Audit Logging]] systems, satisfying [[EU AI Act]] continuous monitoring obligations.

  ## Standardisation Context
    The ETSI Data Management + AI domain is positioned within a broader international standardisation landscape:
    - **ETSI ISG AI**: ETSI's Industry Specification Group on Artificial Intelligence is the primary standards body maintaining the [[ETSI Metaverse Domain Taxonomy]] and producing technical reports that reference this crossover domain. ISG AI work items address AI quality, trustworthiness, and data management for AI systems aligned with [[EU AI Act]] obligations.
    - **ETSI GR MEC 036 V4.1.1 (2025)**: The updated Multi-access Edge Computing AI use cases and solutions report explicitly addresses the MLOps stack at the edge — including model registry, artefact management, and inference serving — directly instantiating the ETSI Data Management + AI domain's components in an MEC deployment context.
    - **ISO/IEC JTC 1/SC 42**: The international AI standardisation committee has published ISO/IEC 22989 (AI concepts and terminology), ISO/IEC 42001 (AI management systems), and is developing ISO/IEC 5259 (Data quality for analytics and ML) — standards that complement the ETSI domain's data management and model governance components.
    - **ISO/IEC 25012 (Data Quality Model)**: Provides a foundational vocabulary and quality model for data management that underpins the [[Training Data Repository]] quality assurance practices in the ETSI domain.
    - **CEN-CENELEC JTC 21**: The European joint technical committee on AI coordinating with ETSI on harmonised standards for the [[EU AI Act]] covers AI data quality (aligned with ISO/IEC 5259) and AI system documentation requirements (model cards, datasheets) that implement the [[Experiment Tracking]] and [[Model Registry]] components' governance outputs.
    - **IEEE Std 2941-2021** (Artificial Intelligence Model Representation, Compression, Distribution, and Management): Addresses model distribution and management standards relevant to the [[Model Registry]] and [[Inference Serving]] components.

  ## Benchmark Datasets and Evaluation Resources
    The ETSI Data Management + AI domain's components are exercised and validated using several canonical benchmark resources:
    - **MLPerf Training and Inference Benchmarks**: MLCommons' MLPerf benchmarks measure the performance of training and inference systems under standardised conditions, directly evaluating the [[Inference Serving]] and training pipeline efficiency components of this domain.
    - **DVC Get Started Dataset**: The canonical dataset used to demonstrate data versioning workflows in DVC/lakeFS — a practical implementation of the [[Training Data Repository]] component.
    - **Feast Quickstart Dataset**: The reference dataset for feature store demonstrations, illustrating [[Feature Store]] population, point-in-time correct retrieval, and training–serving skew prevention.
    - **OpenML Benchmark Suites**: Collections of standardised ML datasets enabling reproducible comparison of ML pipeline configurations — relevant to the [[Experiment Tracking]] component's reproducibility mission.
    - **Metaverse-specific datasets**: The OXR Alliance's XRBench and Meta's Ego4D egocentric video dataset are emerging canonical resources for evaluating AI systems in extended reality contexts — training corpora that would be managed by the ETSI Data Management + AI domain's [[Training Data Repository]] component.

  ## Key Terminology
    - **Training–serving skew**: A discrepancy between model behaviour at training time and inference time caused by differences in how features are computed or preprocessed. The [[Feature Store]] is the primary architectural remedy.
    - **Point-in-time correctness**: The guarantee that feature values used to train a model reflect only information that was available at or before the label timestamp, preventing data leakage from future events.
    - **Model lineage**: The complete traced relationship between a deployed model artefact and its originating training run, training dataset version, feature definitions, and code version.
    - **Data drift**: A statistical shift in the distribution of input data seen by a deployed model relative to the distribution of training data, potentially degrading model performance without any change to the model itself.
    - **Concept drift**: A shift in the underlying statistical relationship between input features and target labels, requiring model retraining even if the input feature distribution remains stable.
    - **Artefact registry**: A versioned store for any ML artefact — model weights, feature definitions, training datasets, evaluation reports — providing the governance backbone of the [[Model Registry]] and [[Training Data Repository]] components.
    - **CI/CD for ML (CI4ML / CD4ML)**: The application of Continuous Integration and Continuous Deployment practices to ML model development and deployment, automating testing, evaluation, and promotion workflows integrated with the [[Experiment Tracking]] and [[Model Registry]] components.

  ## Academic Context
    The theoretical foundations of the ETSI Data Management + AI domain draw from several research lineages:
    - **Software engineering for ML**: Sculley et al. (2015) articulated the concept of hidden technical debt in ML systems, motivating the disciplined data and model management practices that define this domain. Their identification of configuration debt, data dependency chains, and the feedback loops inherent in production ML systems directly maps to the architectural components of this ETSI crossover domain.
    - **Reproducible ML research**: Hutson (2018) in Science documented the reproducibility crisis in machine learning, leading to community standards for dataset and experiment documentation (datasheets for datasets, model cards) that underpin the training data repository and experiment tracking components. The subsequent FAIR data principles (Wilkinson et al., 2016) — Findable, Accessible, Interoperable, Reusable — provide a normative framework for training data repository design.
    - **Feature engineering at scale**: Kanter and Veeramachaneni (2015) formalised deep feature synthesis; Uber's 2017 Michelangelo paper described the first production feature store architecture. The 2020 paper "Feature Stores for ML" by Beaumont formalised the feature store design pattern as a community architectural standard.
    - **Data versioning**: The DVC project (Ruslan Kuprieiev et al., 2020) provided the first systematic treatment of applying Git semantics to ML data artefacts. Lakehouse architectures (Armbrust et al., 2021) provided a complementary approach to combining data lake scale with data warehouse transaction semantics for ML workloads.
    - **MLOps as a discipline**: Sculley et al. (2015); Kreuzberger et al. (2023) "Machine Learning Operations (MLOps): Overview, Definition, and Architecture" published in IEEE Access provided a comprehensive academic framing of MLOps as a discipline. Shankar et al. (2022) provided empirical grounding via an interview study of 18 ML engineers at diverse organisations revealing common MLOps challenges in production deployment.

  ## Current Landscape (2026)
    The regulatory and technical landscape in 2026 has accelerated adoption of the practices covered by this domain:
    - **EU AI Act enforcement**: From August 2026, Article 10 data governance obligations bind providers of high-risk AI systems. This has driven enterprise adoption of formal training data repositories, version control for datasets, and auditable experiment tracking.
    - **ETSI AI and Data Conference 2026**: ETSI convened a dedicated conference on AI and data integration, reflecting the organisation's recognition of data management as a first-class concern in AI standardisation.
    - **ETSI TS 104 008 CABCA**: The Continuous Auditing-Based Conformity Assessment specification (2025–2026) operationalises continuous compliance for dynamic AI systems, requiring automated logging and traceability of model and data artefacts — capabilities delivered by the components of this domain.
    - **lakeFS–DVC consolidation (November 2025)**: The acquisition of DVC by lakeFS consolidated the two dominant open-source data versioning tools, simplifying the data versioning toolchain and deepening integration with MLflow and other MLOps components.
    - **MLflow 3.0**: Extended MLflow to generative AI and agent-based workflows, making the experiment tracking and model registry components of this domain applicable to large language models, multi-modal models, and agentic AI systems.
    - **ETSI GR MEC 036 V4.1.1 (2025)**: Updated Multi-access Edge Computing guidance explicitly addresses AI workload management at the edge, including model artefact management and inference serving, directly instantiating the components of the Data Management + AI crossover domain in an MEC context.

  ## UK Context
    The United Kingdom has significant academic and industrial presence relevant to the ETSI Data Management + AI domain:
    - **Alan Turing Institute (London)**: The UK's national institute for data science and AI, hosted at the British Library, conducts research into responsible ML systems, data governance for AI, and reproducible machine learning — all core concerns of this domain.
    - **University of Edinburgh School of Informatics**: Ranked first in the UK for NLP and hosting the Edinburgh International Data Facility (petabyte-scale), Edinburgh conducts research on ML infrastructure, data management for conversational AI, and ML for climate modelling — workflows that instantiate the ETSI Data Management + AI patterns.
    - **Imperial College London Data Science Institute**: Imperial's data science research includes distributed ML systems, feature engineering at scale, and ML infrastructure — direct contributions to the component space of this domain. Imperial is home to the UK's largest concentration of computing and AI researchers.
    - **UCL Centre for Artificial Intelligence**: UCL leads the UKRI-funded national generative AI hub, which spans Imperial, Cambridge, Oxford, Manchester, Edinburgh, and Surrey. The hub's research infrastructure employs production-grade MLOps stacks that implement the ETSI Data Management + AI domain's components.
    - **Manchester and Northern England industrial context**: The Greater Manchester data economy includes significant deployment of AI pipelines in logistics, retail, and digital health — sectors where training data management, feature engineering, and model registry governance are operational necessities. NHS England's ambition to be "the world's most AI-enabled health service" drives demand for clinical AI data management infrastructure in Leeds, Sheffield, Newcastle, and Manchester NHS trusts.
    - **UK GDPR and Data (Use and Access) Act 2025**: The UK regulatory landscape, including updated ICO guidance on anonymisation and data minimisation for AI systems (2025), directly shapes how UK organisations implement training data repositories and data pipeline governance — practices codified in the ETSI Data Management + AI domain.

  ## Future Directions (2026–2030)
    - **Agentic MLOps**: As AI agents increasingly orchestrate their own training and fine-tuning loops, the data management and experiment tracking components must evolve to handle recursive, self-directed learning workflows. MLflow 3.0's initial support for agent workflows signals this trajectory. Agentic systems that autonomously select training datasets, trigger retraining, and promote model versions will require the [[Training Data Repository]], [[Experiment Tracking]], and [[Model Registry]] components to support automated provenance attribution and human-reviewable decision logs.
    - **Federated and privacy-preserving training pipelines**: The integration of [[Federated Learning]] with the [[Training Data Repository]] and [[Feature Store]] components will enable training on distributed data without centralisation, supporting [[GDPR]] compliance by design and enabling cross-border AI training in metaverse contexts. Combining [[Federated Learning]] with [[Differential Privacy]] (DP-FL) addresses residual gradient leakage risks identified by the EDPS TechDispatch (June 2025).
    - **Automated data quality assurance**: AI-powered data quality monitoring will increasingly be integrated into [[Data Pipelines]], automatically detecting labelling errors, distribution shifts, and bias in training datasets before they propagate to trained models. Tools such as Great Expectations, Soda Core, and cloud-native data quality services will become standard components of the ETSIDomain_DataMgmt_AI implementation stack.
    - **Standardised model and data cards**: Building on Google's model card (Mitchell et al., 2019) and Gebru et al.'s datasheet for datasets (2018) frameworks, standardised machine-readable documentation formats for training data and model artefacts will become normative requirements under [[EU AI Act]] conformity assessment (Article 11 technical documentation), driving tool support in [[Model Registry]] and [[Training Data Repository]] platforms.
    - **Edge-native MLOps**: As inference moves further toward the network edge (5G [[Multi-access Edge Computing]], on-device inference on XR headsets), MLOps infrastructure must extend to manage model artefacts deployed on heterogeneous edge hardware, including weight quantisation metadata, hardware capability metadata, battery consumption budgets, and over-the-air model update mechanisms — extending the [[Model Registry]] and [[Inference Serving]] components to a distributed edge deployment topology.
    - **Synthetic data integration**: Increasing use of synthetically generated training data — using VAEs, diffusion models, and neural radiance fields for spatial data synthesis — will require [[Feature Store]]s and [[Training Data Repository|Training Data Repositories]] to manage provenance and quality metadata of synthetic datasets alongside real datasets, with ICO-aligned documentation of statistical fidelity to the original data.
    - **Foundation model management**: As pre-trained foundation models (LLMs, vision-language models, multimodal models) become the basis for metaverse AI through fine-tuning and retrieval augmentation, the [[Model Registry]] component must evolve to manage fine-tuned adapter weights, retrieval index versions, and prompt template versions alongside full model weights — extending model versioning to the compound artefact graph of a foundation model deployment.
    - **Lakehouse convergence**: The architectural convergence of data lakes and data warehouses (lakehouse architectures using Delta Lake, Apache Iceberg, or Apache Hudi) will become the dominant [[Training Data Repository]] pattern, providing ACID transaction semantics, time-travel queries, and schema evolution for petabyte-scale metaverse training datasets within a unified storage infrastructure.
    - **Continuous integration for ML (CI4ML)**: Automated testing pipelines that validate data quality, feature definitions, model evaluations, and deployment contracts on every commit will become standard practice, integrating [[Experiment Tracking]] and [[Model Registry]] governance with [[Data Pipelines]] automation through CI/CD systems such as GitHub Actions, GitLab CI, and Kubeflow Pipelines.

  ## Research and Literature
    1. Sculley, D., Holt, G., Golovin, D., Davydov, E., Phillips, T., Ebner, D., Chaudhary, V., Young, M., Crespo, J.-F., & Dennison, D. (2015). Hidden technical debt in machine learning systems. *Advances in Neural Information Processing Systems (NeurIPS)*, 28.
    2. Hermann, J., & Del Balso, M. (2017). Meet Michelangelo: Uber's machine learning platform. *Uber Engineering Blog*.
    3. Hutson, M. (2018). Artificial intelligence faces reproducibility crisis. *Science*, 359(6377), 725–726.
    4. Gebru, T., Morgenstern, J., Vecchione, B., Wortman Vaughan, J., Wallach, H., Daumé III, H., & Crawford, K. (2018). Datasheets for datasets. *Communications of the ACM*, 64(12), 86–92.
    5. Mitchell, M., Wu, S., Zaldivar, A., Barnes, P., Vasserman, L., Hutchinson, B., Spitzer, E., Raji, I. D., & Gebru, T. (2019). Model cards for model reporting. *Proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, 220–229.
    6. Kanter, J. M., & Veeramachaneni, K. (2015). Deep feature synthesis: Towards automating data science endeavors. *Proceedings of the IEEE International Conference on Data Science and Advanced Analytics (DSAA)*.
    7. Kuprieiev, R., Petrov, D., & et al. (2020). DVC: Data Version Control — Git for Data and Models. *Iterative.ai Technical Report*.
    8. Kreuzberger, D., Kühl, N., & Hirschl, S. (2023). Machine learning operations (MLOps): Overview, definition, and architecture. *IEEE Access*, 11, 31866–31879.
    9. Paleyes, A., Urma, R.-G., & Lawrence, N. D. (2022). Challenges in deploying machine learning: A survey of case studies. *ACM Computing Surveys*, 55(6), 114:1–114:29.
    10. Breck, E., Zinkevich, M., Roy, N., Whang, S., & Polyzotis, N. (2019). Data validation for machine learning. *Proceedings of the MLSys Conference*, 334–347.
    11. Klaise, J., Van Looveren, A., Vacanti, G., & Coca, A. (2021). Alibi detect: Algorithms for outlier, adversarial and drift detection. *Journal of Machine Learning Research*, 22(147), 1–6.
    12. Polyzotis, N., Roy, S., Whang, S. E., & Zinkevich, M. (2018). Data lifecycle challenges in production machine learning: A survey. *ACM SIGMOD Record*, 47(2), 17–28.
    13. ETSI GR MEC 032 V3.1.1 (2023). Multi-access Edge Computing (MEC): MEC Testing Framework. *European Telecommunications Standards Institute*.
    14. ETSI GR MEC 036 V4.1.1 (2025). Multi-access Edge Computing (MEC): Edge AI — Use Cases and Solutions. *European Telecommunications Standards Institute*.
    15. ETSI TS 104 008 (2025). Continuous Auditing-Based Conformity Assessment (CABCA) for Dynamic AI Systems. *European Telecommunications Standards Institute*.
    16. European Parliament and Council. (2024). Regulation (EU) 2024/1689 on Artificial Intelligence (EU AI Act). *Official Journal of the European Union*.
    17. Renggli, C., Rimanic, L., Gürel, N. M., Karlaš, B., Wu, W., & Zhang, C. (2021). A data quality-driven view of MLOps. *IEEE Data Engineering Bulletin*, 44(4).
    18. Amershi, S., Begel, A., Bird, C., DeLine, R., Gall, H., Kamar, E., Nagappan, N., Nushi, B., & Zimmermann, T. (2019). Software engineering for machine learning: A case study. *Proceedings of the 41st International Conference on Software Engineering (ICSE)*, 291–300.
    19. Zaharia, M., Chen, A., Davidson, A., Ghodsi, A., Hong, S. A., Konwinski, A., Murching, S., Nykodym, T., Ogden, P., Parkhe, M., Singh, F., & Xie, C. (2018). Accelerating the machine learning lifecycle with MLflow. *IEEE Data Engineering Bulletin*, 41(4), 39–45.
    20. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press. (Chapter 11: Practical Methodology — dataset management).
    21. Lwakatare, L. E., Raj, A., Crnkovic, I., Bosch, J., & Olsson, H. H. (2020). Large-scale machine learning systems in real-world industrial settings: A review of challenges and solutions with case studies. *Information and Software Technology*, 127, 106368.
    22. Sculley, D., Bailey, G., Golovin, D., Golland, P., Ruchansky, N., & Pincus, M. (2014). Machine learning: The high interest credit card of technical debt. *NIPS 2014 Workshop on Software Engineering for Machine Learning*.
    23. Vartak, M., Subramanyam, H., Lee, W.-E., Viswanathan, S., Huber, S., Bhardwaj, A., Murthy, R., & Madden, S. (2016). ModelDB: A system for machine learning model management. *Proceedings of the Workshop on Human-In-the-Loop Data Analytics (HILDA)*, ACM.
    24. Bernstein, P. A., & Dayal, U. (2021). Rethinking data management for machine learning. *Proceedings of the VLDB Endowment*, 14(12), 3148–3151.
    25. Shankar, S., Garcia, R., Hellerstein, J. M., & Parameswaran, A. (2022). Operationalizing machine learning: An interview study. *arXiv:2209.09125*.
    26. Makinen, S., Skön, J.-P., Porres, I., Mäkinen, S., & Mäki, T. (2021). Who needs MLOps: What data scientists seek to accomplish and how can MLOps help? *Proceedings of the 1st Workshop on AI Engineering — Software Engineering for AI (WAIN '21)*, 109–116.
    27. Liu, M., Dalmia, S., Shi, P., & Gormley, M. R. (2022). VIST5: An adapted pretrained language model for dialogue-based automated analysis of student scientific explanations. *Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing (EMNLP)*.
    28. ICO. (2025). Guidance on anonymisation and pseudonymisation for AI systems. *Information Commissioner's Office*, UK.

  ## Key Terminology
    - **MLOps**: Machine Learning Operations — the set of practices, tools, and cultural norms that operationalise the deployment, monitoring, and lifecycle management of machine learning models in production systems. Analogous to DevOps for ML.
    - **Feature Store**: A data system for storing, versioning, and serving machine learning features, ensuring consistency between training-time feature computation and inference-time feature retrieval. Prevents training–serving skew.
    - **Training–serving skew**: A discrepancy between model predictions at training time versus inference time caused by differences in feature computation, data preprocessing, or environmental conditions between the training and serving pipelines.
    - **Model Registry**: A centralised metadata store for trained model artefacts, providing versioning, stage transitions, lineage tracking, and governance workflows across the model development lifecycle.
    - **Experiment Tracking**: The practice of systematically recording all parameters, metrics, code versions, data versions, and output artefacts associated with each ML training run, enabling reproducibility and comparison.
    - **Data Version Control (DVC)**: An open-source tool applying Git-like versioning semantics to large data files and ML artefacts, enabling reproducible ML pipelines with full data and model lineage tracking.
    - **lakeFS**: An open-source data lake versioning system that provides Git semantics (branch, commit, merge, revert) for data objects stored in cloud storage (S3, GCS, Azure Blob). Acquired DVC in November 2025.
    - **Point-in-time correctness**: The guarantee that feature values used for a given training example reflect only information that was available at or before the label timestamp, preventing temporal data leakage.
    - **Data lineage**: The documented history of a data item's origins, transformations, and destinations — enabling auditable tracing of how training data was collected, processed, and used.
    - **Model lineage**: The complete relationship graph between a deployed model version and its originating training run, training dataset version, feature definitions, hyperparameter configuration, and code version.
    - **Inference serving**: The operational infrastructure for deploying trained ML model artefacts to serve real-time predictions. In metaverse contexts, must meet sub-10ms latency requirements for immersive rendering applications.
    - **Data drift**: Statistical shift in the distribution of input data seen by a deployed model relative to training data distribution, potentially degrading model performance without any model change.
    - **Model monitoring**: Ongoing operational surveillance of deployed ML model behaviour, input data distributions, and prediction distributions to detect performance degradation or anomalous behaviour.
    - **Continuous training**: Automating periodic retraining of ML models on fresh data to maintain model performance as data distributions evolve — particularly relevant for metaverse platforms where user behaviour patterns shift over time.
    - **EU AI Act Article 10**: The data governance provision of the EU AI Act requiring that training, validation, and testing datasets for high-risk AI systems be subject to governance practices ensuring relevance, representativeness, error-freeness, and completeness.
    - **CABCA**: Continuous Auditing-Based Conformity Assessment — ETSI TS 104 008's framework for ongoing conformity assessment of dynamic AI systems, requiring automated logging and traceability of model and data artefacts.
    - **Feature engineering**: The process of transforming raw data into informative numerical representations (features) suitable for input to ML model training. Feature engineering expertise is captured and shared through the [[Feature Store]].
    - **Hyperparameter**: A configuration parameter set before training that controls the learning algorithm (e.g., learning rate, batch size, number of layers) as opposed to model parameters learned during training.
    - **Model artefact**: The serialised output of a training run — the trained model weights and associated metadata — stored in the [[Model Registry]] and deployed via the [[Inference Serving]] infrastructure.
    - **Lakehouse**: An architectural pattern combining data lake scale and flexibility with data warehouse transaction semantics (ACID transactions, schema enforcement), providing a unified platform for both analytical and ML workloads.

  ## Cross-Domain Integration Patterns
    The ETSI Data Management + AI domain integrates with other ETSI metaverse domain taxonomy nodes through several architectural patterns:

    **Integration with [[ETSI Domain: Data Management + Ethics]]**: Training data governance requires simultaneous application of AI operational concerns (reproducibility, quality, lineage) and ethical governance concerns (consent scope, data minimisation, right to erasure). In practice, the [[Training Data Repository]] must enforce both version coherence (AI concern) and consent scope (ethics concern) — a capability requiring integration between this domain's components and the Ethics domain's [[Consent Management]] and [[Audit Logging]] components.

    **Integration with [[ETSI Domain: Data Management + Security]]**: The data management infrastructure for AI must be secured against adversarial attacks, data poisoning, and model extraction. The [[Inference Serving]] layer must be protected against model inversion attacks and adversarial inputs. Security controls from the Security domain complement the operational reliability controls of the AI domain.

    **Integration with [[ETSI Domain: Data Management + Creative Media]]**: Generative AI models for creative content in metaverse environments — image generation, 3D asset generation, spatial audio synthesis — require the same MLOps infrastructure (training data repositories, experiment tracking, model registry, inference serving) as other AI systems, but with additional media-specific metadata for provenance tracking and copyright compliance.

    **Integration with [[ETSI Domain: Data Management]]**: The base data management domain provides the foundational storage, processing, synchronisation, and lifecycle management infrastructure upon which the AI domain's specialised components are built. The [[Training Data Repository]] is a specialised instantiation of data storage with AI-specific versioning semantics; the [[Data Pipelines]] component extends base data processing with ML-specific transformations.

    **Integration with [[ETSI Domain AI + Data Mgmt]]**: The parent domain in the ETSI taxonomy hierarchy provides the cross-domain marker classification; the Data Management + AI crossover domain refines this with specific component-level detail and operational lifecycle specification.

  ## Freshness Updates (2024–2026)
    - **November 2025**: lakeFS acquired DVC, consolidating the two dominant open-source data versioning tools under one organisation and deepening integration with the broader MLOps ecosystem including MLflow, DataChain, and Neptune.
    - **2025**: MLflow 3.0 released, extending experiment tracking and model registry support to generative AI applications, AI agents, prompt configurations, and multi-modal model versioning.
    - **August 2025**: EU AI Act GPAI (General Purpose AI) model obligations became binding; providers of models with systemic risk must maintain technical documentation and training data summaries satisfying Article 53 obligations.
    - **August 2026 (enforcement date)**: EU AI Act Article 10 data governance obligations fully binding on providers of high-risk AI systems; training data repositories must provide auditable evidence of dataset governance practices.
    - **2025–2026**: ETSI TS 104 008 Continuous Auditing-Based Conformity Assessment (CABCA) framework published, providing normative specification for automated compliance verification of dynamic AI systems using artefact traceability from the Data Management + AI domain's components.
    - **August 2025**: ETSI GR MEC 036 V4.1.1 published, extending Multi-access Edge Computing AI guidance to include edge AI function management, model artefact distribution, and inference serving at the edge — directly referencing the components of this crossover domain in an MEC deployment context.
    - **2026**: UK Data (Use and Access) Act 2025 fully in force, updating the legal basis framework for AI training data processing in UK-based metaverse deployments; ICO updated anonymisation guidance aligned with this legislation.
    - **2026**: ETSI AI and Data Conference 2026 (scheduled) focusing on AI data management integration and standardisation for metaverse and telecommunications applications.
    - **2025–2026**: Major cloud providers (AWS, Azure, GCP) have unified their MLOps offerings — integrating experiment tracking, model registry, feature store, and inference serving into coherent managed platforms (SageMaker Studio, Azure ML Studio, Vertex AI) — reducing operational overhead for organisations implementing this domain's components without committing to open-source toolchains.
    - **2026**: Metaverse Standards Forum working groups on AI and data interoperability have advanced cross-platform model and dataset format standards, enabling portability of trained model artefacts across metaverse platform boundaries — extending the [[Model Registry]] governance scope from single-platform to cross-platform asset management.

- ### Provenance
  - sources:: https://www.etsi.org/technologies/artificial-intelligence-automation/, https://www.etsi.org/deliver/etsi_gr/MEC/001_099/036/04.01.01_60/gr_MEC036v040101p.pdf, https://lakefs.io/mlops/mlops-tools/, https://www.kernshell.com/best-practices-for-scalable-machine-learning-deployment/, https://www.azilen.com/blog/mlops-best-practices/, https://artificialintelligenceact.eu/high-level-summary/, https://atlan.com/know/ai-model-versioning-best-practices/, [[ETSI GR MEC 032]]
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
