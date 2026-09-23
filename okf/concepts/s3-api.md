---
okf_version: "0.2"
type: Class
title: S3 Api
resource: urn:ngm:class:s3-api
domain: infrastructure
description: The S3 API is a RESTful, HTTP-based application programming interface for object storage that exposes buckets and objects through operations such as PUT, GET, DELETE and LIST. Originating with Amazon Simple Storage Service, it has become a de facto standard implemented by many cloud and on-premises storage systems, enabling portable, vendor-neutral object access. Clients authenticate with signed r
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:object-storage
requires:
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:data-storage
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:infrastructure
implements:
  - urn:ngm:class:rest-api
  - urn:ngm:class:object-storage
bridgesTo:
  - urn:ngm:class:data-pipeline
uses:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:authentication
supports:
  - urn:ngm:class:storage-infrastructure
standardizedBy:
  - urn:ngm:class:api
partOf:
  - urn:ngm:class:cloud-storage
relatedTo:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:data-ingestion
---

# S3 Api

The S3 API is a RESTful, HTTP-based application programming interface for object storage that exposes buckets and objects through operations such as PUT, GET, DELETE and LIST. Originating with Amazon Simple Storage Service, it has become a de facto standard implemented by many cloud and on-premises storage systems, enabling portable, vendor-neutral object access. Clients authenticate with signed requests and address resources by bucket and key, allowing scalable, durable storage of unstructured data.
