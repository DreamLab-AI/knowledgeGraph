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