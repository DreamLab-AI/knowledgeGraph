---
public: true
---

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
  - [ ] Python
  - [x] R
  - **Frameworks & Libraries:**
  - [ ] Scikit-learn
  - [ ] Numpy
  - [ ] Pandas
  - [ ] TensorFlow
  - [ ] PyTorch
  - [ ] XGBoost
  - [ ] LightGBM
  - [ ] **Keras** (High-level deep learning API)
  - [ ] **Jax** (High-performance numerical computation)
  - [ ] **CatBoost** (Gradient boosting framework)
  - [ ] **StaMPS** (Scalable Modeling and Partitioning for Statistics)
  - **Cloud Platforms & Services:**
  - [ ] Docker (Containerization platform)
  - [ ] Learn any one of the following:
		- [ ] GCP (Google Cloud Platform)
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
		- [ ] Azure (Microsoft Azure)
			- Blob Storage
			- Virtual Machines
			- SQL Database / Azure Database for PostgreSQL/MySQL
			- Azure Functions
			- Azure Synapse Analytics
			- Azure Machine Learning
		- [x] AWS (Amazon Web Services)
			- AWS S3
			- AWS EC2
			- AWS RDS
			- AWS Lambda
			- AWS Redshift
			- AWS SageMaker
  - [ ] Kubeflow (Cloud-native machine learning platform)
  - [ ] Kubernetes (Container orchestration platform)
  - **Data Tools & Libraries:**
  - [ ] SQL (including OLAP & OLTP variations)
  - [ ] Pandas
  - [ ] Elasticsearch
  - [ ] **Dask** (Parallel computing library for big data)
  - [ ] **Spark** (Large-scale data processing framework)
  - [ ] **Airbyte** (Open-source data integration platform)
  - **Web Development Frameworks:**
  - [ ] FastAPI
  - [ ] Uvicorn (likely mentioned in conjunction with FastAPI)
  - [ ] **Streamlit** (Machine learning app development framework)
  - **Machine Learning Concepts:**
  - [ ] Supervised Learning
		- [ ] Regression
		- [ ] Classification
  - [ ] Unsupervised Learning
		- [ ] Clustering
		- [ ] Dimensionality Reduction
  - [ ] Recommendation Systems
  - [ ] Time Series Forecasting
  - [ ] Natural Language Processing (NLP)
		- [ ] Text Mining
		- [ ] Natural Language Understanding (NLU)
			- [ ] Sentiment Analysis
			- [ ] Named Entity Recognition (NER)
			- [ ] Question Answering (QA)
		- [ ] Natural Language Generation (NLG)
  - [ ] Deep Learning Techniques
		- [ ] Convolutional Neural Networks (CNNs)
		- [ ] Long Short-Term Memory networks (LSTMs)
		- [ ] Generative AI
  - [ ] Reinforcement Learning
  - [ ] Bayesian Optimization
  - **DevOps & MLOps Tools:**
  - [ ] Airflow (Workflow orchestration tool)
  - [ ] MLFlow (Machine learning lifecycle management)
  - [ ] **Prometheus** (Monitoring and alerting system)
  - [ ] **Grafana** (Data visualization and analytics tool)
  - [ ] **Git version control** (e.g., GitLab, GitHub)
  - **Data Visualization Tools:**
  - [ ] Tableau
  - [ ] Matplotlib (Python plotting library)
  - [ ] Seaborn (Statistical data visualization library built on top of Matplotlib)
  - [ ] Power BI (Microsoft business intelligence platform)
  - **Other:**
  - [ ] ETL (Extract, Transform, Load) processes
  - [ ] Optimisation algorithms (can be broader than just machine learning)
  - [ ] Distributed training
  - [ ] Curse of dimensionality
  - [ ] Financial modeling
  - LLMs
  - [ ] Lang-chain Agents
  - [ ] Prompt engineering
  - [ ] RAG
  - [ ] Fine-tuning

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
