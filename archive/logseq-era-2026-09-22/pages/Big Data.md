public:: true

# Big Data

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:big-data", "@type":"Page", "title":"Big Data", "vc:slug":"big-data", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:big-data",
  "@type":"Class",
  "label":"Big Data",
  "definition":"Big data denotes datasets whose volume, velocity and variety exceed the capacity of conventional single-machine tools, demanding distributed storage and parallel computation. It is characterised by horizontally scalable architectures, schema-flexible stores, and batch or streaming processing frameworks that move computation to where data resides. The term also names the discipline of extracting value from such datasets through analytics, mining and machine learning at scale.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-processing","label":"Data Processing"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"},{"@id":"urn:ngm:class:scalability","label":"Scalability"}],
    "uses":[{"@id":"urn:ngm:class:apache-spark","label":"Apache Spark"},{"@id":"urn:ngm:class:nosql-database","label":"NoSQL Database"}],
    "dependsOn":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
    "hasPart":[{"@id":"urn:ngm:class:batch-processing","label":"Batch Processing"},{"@id":"urn:ngm:class:stream-processing","label":"Stream Processing"}],
    "enables":[{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"},{"@id":"urn:ngm:class:predictive-analytics","label":"Predictive Analytics"}],
    "supports":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},{"@id":"urn:ngm:class:data-mining","label":"Data Mining"}],
    "implements":[{"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-warehouse","label":"Data Warehouse"},{"@id":"urn:ngm:class:data-lake","label":"Data Lake"},{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
    "bridgesTo":[{"@id":"urn:ngm:class:data-engineering","label":"Data Engineering"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Big Data]] describes datasets so large, fast-moving or heterogeneous that conventional single-machine tools cannot store or process them. It is a specialisation of [[Data Processing]] for scale.
- It is conventionally framed by the dimensions of volume, velocity and variety, which together demand [[Distributed Computing]] and horizontal [[Scalability]].
- Practitioners rely on frameworks such as [[Apache Spark]] and schema-flexible [[NoSQL Database]] stores, frequently deployed on [[Cloud Computing]] infrastructure.
- Its purpose is to extract value through [[Data Analytics]], [[Data Mining]] and [[Machine Learning]] at a scale otherwise unreachable.
- ### Overview
- Big data emerged as digitisation produced data faster than storage and compute could keep pace using vertical scaling alone. The response was to partition data across clusters and bring computation to the data.
- The defining "three Vs" — volume, velocity, variety — are often extended with veracity and value, capturing the uncertainty of raw inputs and the need to justify analytical effort.
- Architecturally, big data systems favour shared-nothing clusters, replicated distributed storage, and processing engines that tolerate node failure transparently.
- The field reshaped data engineering practice: pipelines became distributed, storage moved towards lakes and lakehouses, and elastic cloud resources replaced fixed on-premise capacity for many workloads.
- ### Key aspects
- Volume: petabyte-scale collections that exceed the addressable storage of any single server.
- Velocity: high-throughput, low-latency streams requiring continuous ingestion and processing.
- Variety: structured, semi-structured and unstructured sources combined within one system.
- Distribution: data and computation partitioned across many nodes for parallelism and fault tolerance.
- Storage layers: distributed file systems, object stores, NoSQL databases, data lakes and warehouses.
- Processing models: batch frameworks for throughput and stream frameworks for timeliness, often unified.
- ### Applications
- Powering recommendation, search and personalisation across web-scale platforms.
- Training and serving machine-learning models on very large corpora.
- Real-time monitoring of telemetry, logs and IoT sensor streams.
- Fraud detection, risk modelling and predictive analytics in finance.
- Genomics, climate modelling and other compute-intensive scientific analyses.
- Consolidating enterprise data into lakes and warehouses for organisation-wide analytics.
- ### Relationships
- requires:: [[Distributed Computing]]
- requires:: [[Scalability]]
- uses:: [[Apache Spark]]
- uses:: [[NoSQL Database]]
- dependsOn:: [[Cloud Computing]]
- hasPart:: [[Batch Processing]]
- hasPart:: [[Stream Processing]]
- enables:: [[Data Analytics]]
- enables:: [[Predictive Analytics]]
- supports:: [[Machine Learning]]
- supports:: [[Data Mining]]
- implements:: [[Data Pipeline]]
- relatedTo:: [[Data Warehouse]]
- relatedTo:: [[Data Lake]]
- relatedTo:: [[Distributed Systems]]
- bridgesTo:: [[Data Engineering]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
