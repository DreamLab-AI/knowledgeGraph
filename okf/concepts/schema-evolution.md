---
okf_version: "0.2"
type: Class
title: Schema Evolution
resource: urn:ngm:class:schema-evolution
domain: data
description: Schema evolution is the practice of modifying a data schema over time, such as adding, removing, or renaming fields, while preserving the ability to read data written under earlier versions. It is a core concern for serialisation formats such as Avro, Protobuf, and Parquet, which define explicit compatibility rules governing which changes are backward, forward, or fully compatible. Systems that ma
maturity: established
quality: 0
is-a:
  - urn:ngm:class:data-schema
---

# Schema Evolution

Schema evolution is the practice of modifying a data schema over time, such as adding, removing, or renaming fields, while preserving the ability to read data written under earlier versions. It is a core concern for serialisation formats such as Avro, Protobuf, and Parquet, which define explicit compatibility rules governing which changes are backward, forward, or fully compatible. Systems that manage schema evolution typically rely on a schema registry to version schemas centrally and validate that producers and consumers remain compatible before a change is deployed. Poorly managed schema evolution is a common source of pipeline breakage in streaming and data lake architectures.
