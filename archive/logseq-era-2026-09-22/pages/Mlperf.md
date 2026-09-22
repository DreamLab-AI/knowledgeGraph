public:: true

# Mlperf
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:mlperf", "@type":"Page", "title":"Mlperf", "vc:slug":"mlperf", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mlperf",
  "@type": "Class",
  "label": "Mlperf",
  "definition": "MLPerf is a suite of standardised benchmarks, governed by the MLCommons consortium, that measures the performance of machine learning hardware, software and systems for both training and inference. It defines fixed reference models, datasets, quality targets and submission rules so that results from different vendors are reproducible and directly comparable. MLPerf has become an industry reference for evaluating accelerators, frameworks and end-to-end systems on representative deep learning workloads.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:performance-benchmarks",
      "label": "Performance Benchmarks"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:benchmark-standard",
        "label": "Benchmark Standard"
      },
      {
        "@id": "urn:ngm:class:benchmarks",
        "label": "Benchmark"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:training",
        "label": "Training"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:mlcommons",
        "label": "MLCommons"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:performance-benchmarks",
        "label": "Performance Benchmarks"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:hardware-accelerator",
        "label": "Hardware Accelerator"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
- MLPerf is a suite of standardised [[Benchmark]] tests, governed by [[MLCommons]], that measures [[Machine Learning]] system performance for both [[Training]] and [[Inference]]. It fixes reference models, datasets and quality targets so vendor results are reproducible and comparable.
- ### Overview
- Before MLPerf, claims about accelerator and framework speed were hard to compare because vendors used different models, batch sizes and stopping criteria.
- MLPerf imposes a [[Benchmark Standard]]: defined tasks, target accuracies, and strict submission rules separating closed-division comparability from open-division innovation.
- Results cover datacentre and edge categories and report metrics such as time-to-train and queries-per-second, making the suite a touchstone for evaluating [[Hardware Accelerator]] and system designs.
- ### Key aspects
- Reference models and datasets across vision, language and recommendation.
- Quality targets that submissions must reach before timing counts.
- Separate training and inference benchmark categories.
- Closed and open divisions balancing comparability and freedom.
- Audited submission process ensuring [[Reproducibility]].
- ### Applications
- Comparing GPUs and accelerators on representative [[Deep Learning]] workloads.
- Guiding procurement and capacity decisions for ML infrastructure.
- Validating framework and compiler optimisations on real models.
- Tracking industry progress in [[Throughput]] and [[Latency]] over time.
- ### Relationships
- implements:: [[Benchmark Standard]]
- implements:: [[Benchmark]]
- hasPart:: [[Training]]
- hasPart:: [[Inference]]
- standardizedBy:: [[MLCommons]]
- partOf:: [[Performance Benchmarks]]
- requires:: [[Reproducibility]]
- requires:: [[Model Training]]
- uses:: [[GPU]]
- uses:: [[Hardware Accelerator]]
- supports:: [[Deep Learning]]
- supports:: [[Machine Learning]]
- relatedTo:: [[Throughput]]
- relatedTo:: [[Latency]]
- relatedTo:: [[Neural Network]]
- relatedTo:: [[Artificial Intelligence]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
