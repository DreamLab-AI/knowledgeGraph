public:: true

elevatedFrom:: [[Revision List]]
# Practitioner Learning Roadmap Backlog
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1ff6a8d0b338c665b522d00fba65e7d604d02402937852192bcab61c8fe8b50b",
  "@type": "Page",
  "vc:slug": "practitioner-learning-roadmap-backlog",
  "title": "Practitioner Learning Roadmap Backlog",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Revision List"
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
  "@id": "urn:ngm:class:practitioner-learning-roadmap-backlog",
  "@type": "Class",
  "label": "Practitioner Learning Roadmap Backlog",
  "definition": "A Revision List is a curated, task-tracked syllabus of technologies, frameworks, and concepts that a practitioner aims to learn or revisit, typically structured as a prioritised backlog with completion states. In a data science and AI context, such a list spans programming languages, ML frameworks, cloud platforms, DevOps tooling, and conceptual foundations such as deep learning, NLP, and reinforcement learning. It functions as a personal knowledge-gap audit and learning roadmap.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:python-pytorch-deep-learning-stack", "label": "Python PyTorch Deep Learning Stack"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:revision-list:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1ff6a8d0b338c665b522d00fba65e7d604d02402937852192bcab61c8fe8b50b"
  },
  "vc:resolutions": [],
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
  - A Revision List is a curated, task-tracked syllabus of technologies, frameworks, and concepts that a practitioner aims to learn or revisit, typically structured as a prioritised backlog with completion states. In a data science and AI context, such a list spans programming languages, ML frameworks, cloud platforms, DevOps tooling, and conceptual foundations such as deep learning, NLP, and reinforcement learning. It functions as a personal knowledge-gap audit and learning roadmap.

- ### Semantic Classification
  - owl-class:: infrastructure:RevisionList
  - owl-role:: Concept

- ### Relationships
  - **hasPart**: Machine Learning, Deep Learning
  - **relatedTo**: Machine Learning Pipeline, Python and PyTorch
  - **enables**: Knowledge Management

- ### Content
  - from here [xandie985/data-scientist-roadmap2024 (github.com)](https://github.com/xandie985/data-scientist-roadmap2024?tab=readme-ov-file)
  - Languages
  - TODO Python
  - DONE R
  - **Frameworks & Libraries:**
  - TODO Scikit-learn
  - TODO Numpy
  - TODO Pandas
  - TODO TensorFlow
  - TODO PyTorch
  - TODO XGBoost
  - TODO LightGBM
  - TODO **Keras** (High-level deep learning API)
  - TODO **Jax** (High-performance numerical computation)
  - TODO **CatBoost** (Gradient boosting framework)
  - TODO **StaMPS** (Scalable Modeling and Partitioning for Statistics)
  - **Cloud Platforms & Services:**
  - TODO Docker (Containerization platform)
  - TODO Learn any one of the following:
		- TODO GCP (Google Cloud Platform)
			- Cloud Storage
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:41]--[2024-04-19 Fri 12:26:42] =>  00:00:01
			  :END:
			- Compute Engine
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- Cloud SQL
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- Cloud Functions
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- BigQuery
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- AI Platform (includes Vertex AI)
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
		- TODO Azure (Microsoft Azure)
			- Blob Storage
			- Virtual Machines
			- SQL Database / Azure Database for PostgreSQL/MySQL
			- Azure Functions
			- Azure Synapse Analytics
			- Azure Machine Learning
		- DONE AWS (Amazon Web Services)
			- AWS S3
			- AWS EC2
			- AWS RDS
			- AWS Lambda
			- AWS Redshift
			- AWS SageMaker
  - TODO Kubeflow (Cloud-native machine learning platform)
  - TODO Kubernetes (Container orchestration platform)
  - **Data Tools & Libraries:**
  - TODO SQL (including OLAP & OLTP variations)
  - TODO Pandas
  - TODO Elasticsearch
  - TODO **Dask** (Parallel computing library for big data)
  - TODO **Spark** (Large-scale data processing framework)
  - TODO **Airbyte** (Open-source data integration platform)
  - **Web Development Frameworks:**
  - TODO FastAPI
  - TODO Uvicorn (likely mentioned in conjunction with FastAPI)
  - TODO **Streamlit** (Machine learning app development framework)
  - **Machine Learning Concepts:**
  - TODO Supervised Learning
		- TODO Regression
		- TODO Classification
  - TODO Unsupervised Learning
		- TODO Clustering
		- TODO Dimensionality Reduction
  - TODO Recommendation Systems
  - TODO Time Series Forecasting
  - TODO Natural Language Processing (NLP)
		- TODO Text Mining
		- TODO Natural Language Understanding (NLU)
			- TODO Sentiment Analysis
			- TODO Named Entity Recognition (NER)
			- TODO Question Answering (QA)
		- TODO Natural Language Generation (NLG)
  - TODO Deep Learning Techniques
		- TODO Convolutional Neural Networks (CNNs)
		- TODO Long Short-Term Memory networks (LSTMs)
		- TODO Generative AI
  - TODO Reinforcement Learning
  - TODO Bayesian Optimization
  - **DevOps & MLOps Tools:**
  - TODO Airflow (Workflow orchestration tool)
  - TODO MLFlow (Machine learning lifecycle management)
  - TODO **Prometheus** (Monitoring and alerting system)
  - TODO **Grafana** (Data visualization and analytics tool)
  - TODO **Git version control** (e.g., GitLab, GitHub)
  - **Data Visualization Tools:**
  - TODO Tableau
  - TODO Matplotlib (Python plotting library)
  - TODO Seaborn (Statistical data visualization library built on top of Matplotlib)
  - TODO Power BI (Microsoft business intelligence platform)
  - **Other:**
  - TODO ETL (Extract, Transform, Load) processes
  - TODO Optimisation algorithms (can be broader than just machine learning)
  - TODO Distributed training
  - TODO Curse of dimensionality
  - TODO Financial modeling
  - LLMs
  - TODO Lang-chain Agents
  - TODO Prompt engineering
  - TODO RAG
  - TODO Fine-tuning

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
