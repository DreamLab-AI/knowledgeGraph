---
okf_version: "0.2"
type: Class
title: Mapping
resource: urn:ngm:class:mapping
domain: ai
description: Mapping is the process of creating structured correspondences between two or more domains, spaces, or data representations — including cartographic, semantic, and data-schema contexts. In spatial computing it denotes the construction of environment models; in knowledge engineering it describes the alignment of ontologies, schemas, or concept hierarchies; in AI it encompasses learned transformation
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:knowledge-graph
hasPart:
  - urn:ngm:class:semantic-mapping
  - urn:ngm:class:metric-map
  - urn:ngm:class:topological-map
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:feature-extraction
enables:
  - urn:ngm:class:data-integration
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:path-planning
  - urn:ngm:class:scene-understanding
contrastsWith:
  - urn:ngm:class:localisation
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
  - urn:ngm:class:data
uses:
  - urn:ngm:class:slam
  - urn:ngm:class:localisation
  - urn:ngm:class:lidar
  - urn:ngm:class:depth-camera
  - urn:ngm:class:point-cloud
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:spatial-mapping
  - urn:ngm:class:geospatial-technology
  - urn:ngm:class:ontology-alignment
  - urn:ngm:class:coordinate-system
---

# Mapping

Mapping is the process of creating structured correspondences between two or more domains, spaces, or data representations — including cartographic, semantic, and data-schema contexts. In spatial computing it denotes the construction of environment models; in knowledge engineering it describes the alignment of ontologies, schemas, or concept hierarchies; in AI it encompasses learned transformations between input and output spaces. Mapping is foundational to navigation, data integration, and cross-domain reasoning.
