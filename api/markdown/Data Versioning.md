public:: true

# Data Versioning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:262696b6233e92391f926fec582ef8ac2b97336cc741ebbcb2fea34459c49f41",
  "@type": "Page",
  "vc:slug": "data-versioning",
  "title": "Data Versioning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-engineering",
      "vc:label": "Data Engineering"
    },
    {
      "@id": "urn:visionflow:linked:dvc",
      "vc:label": "DVC"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9011"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Versioning"
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
  "@id": "urn:ngm:class:data-versioning",
  "@type": "Class",
  "label": "Data Versioning",
  "definition": "Data Versioning is the systematic practice of tracking, storing, and managing changes to datasets and machine learning models over time, ensuring reproducibility of experiments and auditability of data lineage. Tools such as DVC (Data Version Control) apply version control semantics to large binary assets, linking dataset snapshots to the code and configurations that produced them, enabling rollback, comparison, and collaborative data science workflows.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    },
    {
      "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
      "label": "Machine Learning Pipeline"
    }
  ],
  "quality": 0.75,
  "qualityScore": 0.75,
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:empirical-experimental-design", "label": "experiment"},
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:artifact-metadata", "label": "Artifact Metadata"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning-discipline-infrastructure", "label": "Machine Learning Infrastructure"},
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-versioning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:262696b6233e92391f926fec582ef8ac2b97336cc741ebbcb2fea34459c49f41"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Engineering]]",
      "resolved": "urn:visionflow:linked:data-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[DVC]]",
      "resolved": "urn:visionflow:linked:dvc",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps]]",
      "resolved": "urn:visionflow:linked:mlops",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Version control system for datasets and ML models, tracking changes to data over time to ensure reproducibility and lineage in machine learning workflows (e.g., DVC).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataVersioning
  - owl-role:: Process
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]]

- ### Content
  Data Versioning applies the principles of software version control — branching, tagging, diffing, and rollback — to the large binary assets that underpin machine learning: raw datasets, processed feature stores, and trained model artefacts. Unlike source code, data files are rarely stored in Git directly; instead, tools such as DVC maintain a lightweight pointer file tracked in Git while storing the actual data in remote object stores (S3, GCS, Azure Blob). This allows teams to reproduce any historical experiment by checking out a specific commit and pulling the matching dataset version.

  Beyond reproducibility, data versioning enables auditability and regulatory compliance by recording the provenance of every training run — which data slice, which preprocessing script, and which hyperparameters produced a given model checkpoint. In combination with experiment tracking and model registries, data versioning forms a core pillar of mature MLOps practice, closing the loop between data engineering pipelines and model deployment lifecycles.

- ### Provenance
  - sources:: [[MLOps]], [[Data Engineering]], [[DVC]]
  - migration-date:: 2026-04-26T00:00:00Z
