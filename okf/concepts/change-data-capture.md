---
okf_version: "0.2"
type: Class
title: Change Data Capture
resource: urn:ngm:class:change-data-capture
domain: data
description: "Change data capture is a set of techniques for identifying and propagating row-level changes — inserts, updates, and deletes — from a source database to downstream systems in near real time. The most robust approach reads the database transaction log, turning committed mutations into an ordered stream of change events without burdening the source with polling. It underpins data replication, event "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-integration
hasPart:
  - urn:ngm:class:event-streaming
enables:
  - urn:ngm:class:data-replication
  - urn:ngm:class:stream-processing
  - urn:ngm:class:event-sourcing
dependsOn:
  - urn:ngm:class:database
bridgesTo:
  - urn:ngm:class:stream-processing
uses:
  - urn:ngm:class:database
  - urn:ngm:class:event-streaming
  - urn:ngm:class:apache-kafka
supports:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:microservices
partOf:
  - urn:ngm:class:data-integration
relatedTo:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-lake
---

# Change Data Capture

Change data capture is a set of techniques for identifying and propagating row-level changes — inserts, updates, and deletes — from a source database to downstream systems in near real time. The most robust approach reads the database transaction log, turning committed mutations into an ordered stream of change events without burdening the source with polling. It underpins data replication, event streaming, and incremental data integration, keeping analytical stores, caches, and microservices consistent with operational systems.
