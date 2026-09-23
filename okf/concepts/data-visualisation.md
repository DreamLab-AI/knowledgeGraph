---
okf_version: "0.2"
type: Class
title: Data Visualisation
resource: urn:ngm:class:data-visualisation
domain: data
description: Data Visualisation is the systematic practice of encoding data attributes into perceptual channels — position, colour, size, shape, and motion — to enable rapid human comprehension of patterns, trends, anomalies, and relational structures within datasets. It encompasses both static and interactive representations, spanning two-dimensional charts, network graphs, geospatial maps, and immersive thre
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:monitoring-dashboard
  - urn:ngm:class:chart
  - urn:ngm:class:monitoring-dashboard
  - urn:ngm:class:geospatial-map
  - urn:ngm:class:network-graph
requires:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:data-access-interface
enables:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:decision-support
  - urn:ngm:class:exploratory-data-analysis
  - urn:ngm:class:decision-support
dependsOn:
  - urn:ngm:class:data-model
  - urn:ngm:class:graphics-processing-unit
contrastsWith:
  - urn:ngm:class:data-table
  - urn:ngm:class:text-report
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:explainable-ai
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:colour-theory
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:telecollaboration
  - urn:ngm:class:business-intelligence
relatedTo:
  - urn:ngm:class:scientific-visualisation
  - urn:ngm:class:visual-analytics
  - urn:ngm:class:information-design
---

# Data Visualisation

Data Visualisation is the systematic practice of encoding data attributes into perceptual channels — position, colour, size, shape, and motion — to enable rapid human comprehension of patterns, trends, anomalies, and relational structures within datasets. It encompasses both static and interactive representations, spanning two-dimensional charts, network graphs, geospatial maps, and immersive three-dimensional scenes rendered in augmented or virtual reality environments. Effective data visualisation integrates principles from information design, cognitive psychology, and computer graphics, requiring rendering infrastructure, data pipelines, and interaction paradigms suited to the display medium. In the context of real-time analytics and spatial computing, visualisation systems must handle streaming data, high-dimensionality reduction, and multi-user collaborative viewing at interactive frame rates.
