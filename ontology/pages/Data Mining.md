public:: true

# Data Mining
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c59f22a9d2ddc10bc9e347c547c09d152f649094d8d6fb5dac46e3e86a9e6526",
  "@type": "Page",
  "vc:slug": "data-mining",
  "title": "Data Mining",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:knowledge-discovery",
      "vc:label": "Knowledge Discovery"
    },
    {
      "@id": "urn:visionflow:linked:clustering",
      "vc:label": "Clustering"
    },
    {
      "@id": "urn:visionflow:linked:text-mining",
      "vc:label": "Text Mining"
    },
    {
      "@id": "urn:visionflow:linked:big-data",
      "vc:label": "Big Data"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
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
  "@id": "urn:ngm:class:data-mining",
  "@type": "Class",
  "label": "Data Mining",
  "definition": "Data mining is the computational process of discovering non-obvious patterns, correlations, anomalies and predictive structure in large datasets, sitting at the core of the knowledge discovery in databases (KDD) pipeline. It combines techniques from machine learning, statistics and database systems — including clustering, classification, association-rule learning, regression and anomaly detection — to turn raw operational data into actionable models and insights across science, commerce and government.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:knowledge-discovery",
    "label": "Knowledge Discovery"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:clustering",
        "label": "Clustering"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:text-mining",
        "label": "Text Mining"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:big-data",
        "label": "Big Data"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-science",
        "label": "Data Science"
      },
      {
        "@id": "urn:ngm:class:data-analysis",
        "label": "Data Analysis"
      },
      {
        "@id": "urn:ngm:class:pattern-recognition",
        "label": "Pattern Recognition"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Data mining is the computational process of discovering non-obvious patterns, correlations, anomalies and predictive structure in large datasets, sitting at the core of the knowledge discovery in databases (KDD) pipeline. It combines techniques from machine learning, statistics and database systems — including clustering, classification, association-rule learning, regression and anomaly detection — to turn raw operational data into actionable models and insights across science, commerce and government."

- ### Semantic Classification
  - owl-class:: data:DataMining
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Knowledge Discovery]]
  - has-part:: [[Clustering]]
  - has-part:: [[Text Mining]]
  - depends-on:: [[Big Data]]

- ### Content

  ## Definition

  **Data mining** is the analysis step of [[Knowledge Discovery]] in databases (KDD), the framework articulated by Fayyad, Piatetsky-Shapiro and Smyth in 1996: after data selection, cleaning and transformation, mining algorithms extract patterns which are then evaluated and interpreted into knowledge. The term covers a family of task types rather than a single method — descriptive tasks that characterise data ([[Clustering]], association-rule and sequential-pattern mining, summarisation) and predictive tasks that generalise from it (classification, regression, [[Anomaly Detection]]). Canonical algorithms include Apriori and FP-Growth for market-basket analysis, k-means and DBSCAN for segmentation, decision trees, and isolation forests for outlier detection.

  Data mining is distinguished from routine [[Data Analysis]] by scale and intent: it seeks previously unknown, non-trivial structure in datasets too large for manual inspection, historically drawn from a [[Data Warehouse]] and today from [[Big Data]] platforms and data lakes. It overlaps heavily with [[Machine Learning]] — most mining algorithms are learning algorithms — but the framing differs: machine learning centres on predictive model quality, whilst data mining centres on the end-to-end discovery process, including interestingness measures, validity on new data, and the comprehensibility of what is found. Specialised branches apply the same programme to particular data types: [[Text Mining]] for documents, web mining for clickstreams and link graphs, graph mining for networks, and process mining for event logs.

  ## Current Landscape

  Methodologically, CRISP-DM (business understanding → data understanding → preparation → modelling → evaluation → deployment) remains the most widely used process model, effectively the ancestor of modern [[Data Science]] workflows and MLOps pipelines. Tooling has shifted from dedicated suites (SAS Enterprise Miner, RapidMiner, Weka, KNIME) towards Python and SQL ecosystems — pandas, scikit-learn, Spark MLlib — running against cloud warehouses. Applications remain pervasive: fraud and intrusion detection, customer segmentation and churn, recommendation, bioinformatics motif discovery, and scientific literature mining. The field's hard problems are increasingly governance problems: privacy-preserving mining (differential privacy, federated analytics), fairness of discovered patterns, and the regulatory treatment of mined personal data under regimes such as UK/EU GDPR.

  Recent developments (2025-2026):

  - **Federated analytics goes mainstream**: driven by GDPR and HIPAA restrictions on centralising sensitive data, federated learning/analytics — aggregating patterns from distributed models without moving raw records — is now a de facto framework for mining across institutional silos, the theme of the 2025 FedKDD workshop at KDD.
  - **Differential privacy in production**: once confined to research, differential privacy is now deployed at scale by Apple, Google, Microsoft and the US Census Bureau, and is increasingly referenced in regulatory guidance including NIST's 2025 recommendations, making DP-SGD and noise-added statistical summaries standard tools for privacy-preserving mining.
  - **Hybrid PET stacks**: combining differential privacy with secure multi-party computation and homomorphic encryption within federated pipelines is an active 2025 research direction, allowing mining over encrypted, distributed data without a central trusted curator.
  - **Regulatory framing**: the field's centre of gravity has shifted from algorithmic novelty toward compliance — lineage, consent, and fairness of discovered patterns — under the overlapping GDPR and EU AI Act regimes.

  **Sources**:
  - https://arxiv.org/html/2509.03294v3
  - https://www.cs.emory.edu/~jyang71/files/fedkdd2025.pdf
