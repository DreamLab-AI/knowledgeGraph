public:: true

# MLCommons
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mlcommons",
  "@type": "Page",
  "vc:slug": "mlcommons",
  "title": "MLCommons",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mlcommons",
  "@type": "Class",
  "label": "MLCommons",
  "definition": "MLCommons is an open engineering consortium that builds benchmarks, datasets, and best practices to accelerate machine learning innovation in a fair and reproducible way. It is best known for the MLPerf benchmark suites, which measure training and inference performance across hardware and software stacks. Membership includes major chip vendors, cloud providers, and research institutions.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:mlperf",
        "label": "MLPerf"
      },
      {
        "@id": "urn:ngm:class:peoples-speech-dataset",
        "label": "People's Speech Dataset"
      },
      {
        "@id": "urn:ngm:class:mlperf-inference",
        "label": "MLPerf Inference"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:benchmarking",
        "label": "Benchmarking"
      },
      {
        "@id": "urn:ngm:class:reproducible-research",
        "label": "Reproducible Research"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "AI Model Evaluation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Datasets"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:deep-learning-framework",
        "label": "Deep Learning Frameworks"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:industry-consortium",
        "label": "Industry Consortium"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:spec-benchmark",
        "label": "SPEC Benchmark"
      },
      {
        "@id": "urn:ngm:class:supercomputer-top500",
        "label": "TOP500 Supercomputer List"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards",
        "label": "Evaluation benchmarks and leaderboards"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ml-commons-consortium",
      "label": "ML Commons Consortium"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - MLCommons is an open consortium producing ML benchmarks and datasets, most notably MLPerf. It standardises measurement of [[Compute Infrastructure]] and contributes to [[Evaluation Benchmarks and Leaderboards]].
- ### Content
  - MLPerf defines tightly specified training and inference tasks with rules ensuring comparable, audited submissions, giving the industry a neutral basis for hardware and system claims. Beyond benchmarks, MLCommons curates large open datasets and develops standards for safety and data quality.
