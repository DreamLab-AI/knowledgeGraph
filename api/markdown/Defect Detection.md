public:: true

# Defect Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:defect-detection",
  "@type": "Page",
  "title": "Defect Detection",
  "vc:slug": "defect-detection",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:defect-detection",
  "@type": "Class",
  "label": "Defect Detection",
  "definition": "Defect Detection is the automated identification of flaws, anomalies, or deviations from specification in products, materials, or processes, typically performed using machine vision and machine-learning models on images or sensor data. It localises and classifies defects such as cracks, scratches, contamination, dimensional errors, or assembly faults, often in real time on a production line. Modern systems combine high-resolution imaging, deep-learning object detection and anomaly detection, and feedback to robotic or process controls. Defect detection underpins quality assurance and industrial inspection, reducing waste and ensuring consistency.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-vision",
      "label": "Machine Vision"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      },
      {
        "@id": "urn:ngm:class:quality-control",
        "label": "Quality Control"
      },
      {
        "@id": "urn:ngm:class:predictive-maintenance",
        "label": "Predictive Maintenance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-vision",
        "label": "Machine Vision"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:industrial-inspection",
        "label": "Industrial Inspection"
      },
      {
        "@id": "urn:ngm:class:manufacturing-process",
        "label": "Manufacturing Process"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      },
      {
        "@id": "urn:ngm:class:sensor-network",
        "label": "Sensor Network"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:computer-vision-system",
        "label": "Computer Vision System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:automation",
        "label": "Automation"
      },
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-vision",
        "label": "Machine Vision"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Defect Detection]] automatically identifies flaws in products using [[Machine Vision]] and [[Computer Vision]], applying [[Object Detection]] and [[Anomaly Detection]] models built on [[Deep Learning]] to enable [[Quality Assurance]] in [[Industrial Inspection]].

- ### Overview
  - Defect detection automates a task historically performed by human inspectors: spotting flaws that render a product non-conforming. It combines imaging hardware with learned models that classify and localise defects.
  - Approaches range from classical image processing (thresholding, edge detection, template matching) to deep-learning object detection and unsupervised anomaly detection that flags deviations from a learned normal distribution.
  - Integrated into production lines, defect detection closes a quality loop: detected faults trigger rejection, rework, or adjustments to the manufacturing process.

- ### Mechanisms
  - Imaging: cameras, line scanners, and specialised sensors capture the product surface under controlled lighting.
  - Feature extraction and classification: learned features distinguish defective from acceptable regions.
  - Anomaly detection: models trained on defect-free examples identify out-of-distribution patterns without labelled defects.
  - Closed-loop control: detections feed back to robotic sorting and process adjustment for continuous quality assurance.

- ### Applications
  - Surface inspection in semiconductor, automotive, and textile manufacturing.
  - Weld and assembly verification in robotic production cells.
  - Predictive maintenance through detection of wear and material degradation.

- ### Relationships
  - enables:: [[Quality Assurance]]
  - enables:: [[Quality Control]]
  - enables:: [[Predictive Maintenance]]
  - uses:: [[Machine Vision]]
  - uses:: [[Computer Vision]]
  - uses:: [[Object Detection]]
  - uses:: [[Anomaly Detection]]
  - dependsOn:: [[Convolutional Neural Network]]
  - dependsOn:: [[Deep Learning]]
  - supports:: [[Industrial Inspection]]
  - supports:: [[Manufacturing Process]]
  - requires:: [[Feature Extraction]]
  - requires:: [[Sensor Network]]
  - implements:: [[Computer Vision System]]
  - relatedTo:: [[Automation]]
  - relatedTo:: [[Data Analytics]]
  - partOf:: [[Machine Vision]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
