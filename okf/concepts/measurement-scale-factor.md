---
okf_version: "0.2"
type: Class
title: Measurement Scale Factor
resource: urn:ngm:class:measurement-scale-factor
domain: earth-observation-and-geospatial-sensing
description: A measurement scale factor is the multiplier by which stored data values are multiplied after reading to recover the physical values of a variable.[^1] In the netCDF attribute convention the multiplication is applied after the data are read, and when an offset is also present the data are scaled first and the offset added afterwards.[^1][^2] The convention applies to packed storage, where the stor
maturity: draft
quality: 0
relatedTo:
  - urn:ngm:class:earth-observation-processing
---

# Measurement Scale Factor

A measurement scale factor is the multiplier by which stored data values are multiplied after reading to recover the physical values of a variable.[^1] In the netCDF attribute convention the multiplication is applied after the data are read, and when an offset is also present the data are scaled first and the offset added afterwards.[^1][^2] The convention applies to packed storage, where the stored variable is typically a narrow integer type and the unpacked values are floating point.[^1]
