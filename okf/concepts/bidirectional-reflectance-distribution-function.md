---
okf_version: "0.2"
type: Class
title: Bidirectional Reflectance Distribution Function
resource: urn:ngm:class:bidirectional-reflectance-distribution-function
domain: earth-observation-and-geospatial-sensing
description: A Bidirectional Reflectance Distribution Function (BRDF) is a function that defines how light is reflected at an opaque surface, giving the ratio of reflected radiance to incident irradiance for each pair of incoming and outgoing directions. It encodes material appearance such as diffuse, glossy, and specular behaviour and is the core of physically based shading. Renderers evaluate the BRDF at sur
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:earth-observation-processing
  - urn:ngm:class:rendering-technique
relatedTo:
  - urn:ngm:class:earth-observation-processing
  - urn:ngm:class:ray-tracing
---

# Bidirectional Reflectance Distribution Function

A Bidirectional Reflectance Distribution Function (BRDF) is a function that defines how light is reflected at an opaque surface, giving the ratio of reflected radiance to incident irradiance for each pair of incoming and outgoing directions. It encodes material appearance such as diffuse, glossy, and specular behaviour and is the core of physically based shading. Renderers evaluate the BRDF at surface intersections to compute realistic light transport.
