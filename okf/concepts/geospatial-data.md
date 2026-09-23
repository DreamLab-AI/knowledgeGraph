---
okf_version: "0.2"
type: Class
title: Geospatial Data
resource: urn:ngm:class:geospatial-data
domain: spatial-computing
description: "Geospatial data is information explicitly tied to a location on or near the Earth's surface, expressed through coordinates, geometries, or raster grids. It encompasses vector features (points, lines, polygons), satellite and aerial imagery, elevation models, point clouds, and attributes associated with places. Such data underpins mapping, navigation, remote sensing, logistics, urban planning, and "
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:point-cloud-generation
requires:
  - urn:ngm:class:coordinate-reference-system
  - urn:ngm:class:spatial-database
enables:
  - urn:ngm:class:logistics-optimisation
  - urn:ngm:class:navigation
  - urn:ngm:class:urban-planning
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:disaster-response
dependsOn:
  - urn:ngm:class:global-positioning-system
  - urn:ngm:class:satellite-imagery
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:supply-chain-visibility
uses:
  - urn:ngm:class:spatial-index
standardizedBy:
  - urn:ngm:class:open-geospatial-consortium
  - urn:ngm:class:iso
partOf:
  - urn:ngm:class:geographic-information-system
relatedTo:
  - urn:ngm:class:logistics-optimisation
  - urn:ngm:class:point-cloud-generation
  - urn:ngm:class:lidar
---

# Geospatial Data

Geospatial data is information explicitly tied to a location on or near the Earth's surface, expressed through coordinates, geometries, or raster grids. It encompasses vector features (points, lines, polygons), satellite and aerial imagery, elevation models, point clouds, and attributes associated with places. Such data underpins mapping, navigation, remote sensing, logistics, urban planning, and spatial analysis across many domains.
