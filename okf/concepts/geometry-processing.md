---
okf_version: "0.2"
type: Class
title: Geometry Processing
resource: urn:ngm:class:geometry-processing
domain: spatial-computing
description: Geometry processing is the field concerned with acquiring, representing, analysing and manipulating geometric models, typically triangle meshes and point clouds. It encompasses operations such as smoothing, simplification, parameterisation, remeshing and surface reconstruction, drawing on differential geometry and linear algebra. Geometry processing underpins 3D content pipelines, simulation and r
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computational-geometry
hasPart:
  - urn:ngm:class:triangulation
  - urn:ngm:class:texture-mapping
requires:
  - urn:ngm:class:polygon-mesh
enables:
  - urn:ngm:class:real-time-rendering-pipeline
  - urn:ngm:class:level-of-detail
dependsOn:
  - urn:ngm:class:computational-geometry
bridgesTo:
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:computational-geometry
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:physics-simulation
partOf:
  - urn:ngm:class:3d-modelling
relatedTo:
  - urn:ngm:class:polygon-mesh
  - urn:ngm:class:point-cloud
---

# Geometry Processing

Geometry processing is the field concerned with acquiring, representing, analysing and manipulating geometric models, typically triangle meshes and point clouds. It encompasses operations such as smoothing, simplification, parameterisation, remeshing and surface reconstruction, drawing on differential geometry and linear algebra. Geometry processing underpins 3D content pipelines, simulation and rendering by transforming raw or noisy geometric data into clean, structured representations suitable for downstream use.
