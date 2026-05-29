public:: true

# Apache Kafka
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:apache-kafka",
  "@type": "Page",
  "vc:slug": "apache-kafka",
  "title": "Apache Kafka",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apache-kafka",
  "@type": "Class",
  "label": "Apache Kafka",
  "definition": "Apache Kafka is an open-source distributed event streaming platform originally developed at LinkedIn and donated to the Apache Software Foundation in 2011. It provides a high-throughput, low-latency, fault-tolerant publish-subscribe messaging system built around an immutable, ordered, partitioned commit log. Kafka decouples producers and consumers of data streams, enabling real-time data pipelines, event-driven architectures, and stream processing applications at scale across thousands of nodes handling trillions of events per day.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:data-integration", "label": "Data Integration"},
      {"@id": "urn:ngm:class:real-time-processing", "label": "Real-time Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"},
      {"@id": "urn:ngm:class:etl-pipeline", "label": "ETL Pipeline"},
      {"@id": "urn:ngm:class:machine-learning-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:real-time", "label": "Real Time"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:batch-processing", "label": "Batch Processing"},
      {"@id": "urn:ngm:class:data-processing", "label": "Data Processing"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-architecture", "label": "Distributed Architecture"},
      {"@id": "urn:ngm:class:software-infrastructure", "label": "Software Infrastructure"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:monitoring-dashboard", "label": "Monitoring Dashboard"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Apache Kafka is a distributed event streaming platform that uses a durable, partitioned commit log to provide high-throughput, fault-tolerant publish-subscribe messaging, decoupling producers from consumers in real-time data pipelines and event-driven architectures.
- ### Relationships
  - Apache Kafka is a subclass of [[Distributed System]] and is the canonical implementation of [[Event Driven Architecture]] at scale. It forms the backbone of enterprise [[Data Pipeline]] and [[Data Integration]] workflows, enabling [[Real-time Processing]] alongside [[Batch Processing]] via replay of stored events. Kafka enables [[Microservices Architecture]] by providing a durable event bus for service decoupling, and serves as the ingestion layer for [[Data Lake]] platforms and [[ETL Pipeline]] processes. It integrates with [[Machine Learning Pipeline]] tooling for feature serving and model monitoring. Deployment commonly occurs on [[Cloud Infrastructure]] via managed offerings such as Confluent Cloud, AWS MSK, and Azure Event Hubs.
- ### Content
  - Apache Kafka was created at LinkedIn by Jay Kreps, Neha Narkhede, and Jun Rao to solve the problem of integrating heterogeneous data systems at LinkedIn's scale. The name references Franz Kafka as a nod to the system being "a system optimised for writing." After open-sourcing in 2011 and entering the Apache incubator, Kafka became the de facto standard for enterprise event streaming, with adoption at companies including Netflix, Uber, Airbnb, and Twitter.

  - Kafka's core abstraction is the topic: an ordered, immutable sequence of records (events) that is partitioned across a cluster of brokers for parallel throughput and replicated for fault tolerance. Producers append records to topic partitions; consumers subscribe to partitions and read at their own pace, with offset tracking enabling both real-time consumption and historical replay. This durable, replayable log model separates Kafka from traditional message queues that delete messages upon consumption.

  - The Kafka Streams API and the companion Apache Flink and Apache Spark frameworks enable stateful stream processing directly on Kafka topics. Kafka Connect provides a standardised connector ecosystem for ingesting data from databases (via Change Data Capture), file systems, cloud storage, and SaaS platforms into Kafka topics, and for sinking processed data to downstream stores. The Schema Registry (from Confluent) enforces data contract compatibility across producer-consumer boundaries using Avro, Protobuf, or JSON Schema.

  - KRaft mode (Kafka Raft metadata), reaching production readiness in Kafka 3.3 (2022), eliminated the historical dependency on Apache ZooKeeper for cluster metadata management. ZooKeeper had been a complexity and scalability bottleneck; replacing it with an internal Raft-based consensus protocol simplified deployment significantly and improved cluster startup and failover performance.

  - In machine learning contexts, Kafka serves as the real-time feature pipeline for online feature stores, delivering model input features with millisecond latency. It also underpins model monitoring infrastructure by streaming prediction logs and ground-truth labels to detection systems that watch for data drift and model degradation. Confluent's managed Kafka-as-a-service and the availability of Kafka on all major cloud providers have made it foundational infrastructure in both traditional enterprise data architectures and modern AI/ML platforms.
