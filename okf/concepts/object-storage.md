---
okf_version: "0.2"
type: Class
title: Object Storage
resource: urn:ngm:class:object-storage
domain: infrastructure
description: "Object storage is a data storage architecture that manages data as discrete objects — each comprising an opaque payload, a globally unique identifier, and extensible metadata — accessed via a flat namespace through RESTful HTTP APIs rather than a file hierarchy or block device. It is designed for massive horizontal scalability, high durability, and cost-effective storage of unstructured data such "
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:data-storage
hasPart:
  - urn:ngm:class:access-control-list
requires:
  - urn:ngm:class:erasure-coding
enables:
  - urn:ngm:class:data-lake
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:cdn
implements:
  - urn:ngm:class:s3-api
contrastsWith:
  - urn:ngm:class:block-storage
  - urn:ngm:class:file-storage
bridgesTo:
  - urn:ngm:class:training-dataset
  - urn:ngm:class:model-registry
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:http-protocol
  - urn:ngm:class:storage-tiering
relatedTo:
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:data-durability
  - urn:ngm:class:immutable-storage
---

# Object Storage

Object storage is a data storage architecture that manages data as discrete objects — each comprising an opaque payload, a globally unique identifier, and extensible metadata — accessed via a flat namespace through RESTful HTTP APIs rather than a file hierarchy or block device. It is designed for massive horizontal scalability, high durability, and cost-effective storage of unstructured data such as media files, backups, and machine-learning datasets. Amazon S3 established the de facto API standard, now implemented by numerous compatible services.
