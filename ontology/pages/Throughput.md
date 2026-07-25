public:: true

# Throughput
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:throughput", "@type":"Page", "title":"Throughput", "vc:slug":"throughput", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:throughput",
  "@type":"Class",
  "label":"Throughput",
  "definition":"Throughput is the rate at which a system completes useful work over a unit of time, such as requests served per second, tokens generated per second or bytes transferred per second. It measures sustained productive capacity rather than the time to complete a single operation. In machine learning serving it captures how many inferences or training samples a system can process under load. Maximising throughput typically involves batching, parallelism and resource utilisation, often trading off against per-request latency.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:performance-metrics","label":"Performance Metrics"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:request-rate","label":"Request Rate"},
      {"@id":"urn:ngm:class:batch-size","label":"Batch Size"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:latency","label":"Latency"},
      {"@id":"urn:ngm:class:response-time","label":"Response Time"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:parallel-processing","label":"Parallel Processing"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:scalability","label":"Scalability"},
      {"@id":"urn:ngm:class:high-availability","label":"High Availability"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:batching","label":"Batching"},
      {"@id":"urn:ngm:class:load-balancing","label":"Load Balancing"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:hardware-acceleration","label":"Hardware Acceleration"},
      {"@id":"urn:ngm:class:resource-utilization","label":"Resource Utilization"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:model-serving","label":"Model Serving"},
      {"@id":"urn:ngm:class:performance-optimization","label":"Performance Optimization"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"},
      {"@id":"urn:ngm:class:benchmarking","label":"Benchmarking"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Throughput is the rate of useful work completed per unit time, a core [[Performance Metrics]] concept distinct from [[Latency]] and [[Response Time]]. It is raised through [[Batching]], [[Parallel Processing]] and [[Load Balancing]].

- ### Overview
  - Throughput expresses sustained productive capacity: how much work a system accomplishes in aggregate rather than how quickly any single operation finishes. It is typically reported in operations per second, such as requests, transactions, tokens or bytes per second.
  - In machine learning serving, throughput governs how many inference requests or training samples a system processes under load, directly shaping cost-efficiency and the ability to meet demand at scale.

- ### Mechanisms
  - Batching aggregates many requests into a single execution so fixed overheads and accelerator pipelines amortise across more work.
  - Parallelism across cores, devices and nodes multiplies the number of operations in flight at once.
  - Load balancing distributes work evenly so no resource becomes a bottleneck while others sit idle.
  - High resource utilisation keeps compute, memory bandwidth and I/O busy, which is the practical ceiling on throughput.

- ### Applications
  - Online inference services where many concurrent users must be served economically.
  - Training pipelines where samples processed per second determines time-to-convergence.
  - Network and storage systems measured in sustained data transfer rates.
  - Capacity planning and benchmarking of distributed systems.

- ### Relationships
  - subClassOf:: [[Performance Metrics]]
  - hasPart:: [[Request Rate]]
  - hasPart:: [[Batch Size]]
  - contrastsWith:: [[Latency]]
  - contrastsWith:: [[Response Time]]
  - requires:: [[Parallel Processing]]
  - enables:: [[Scalability]]
  - enables:: [[High Availability]]
  - uses:: [[Batching]]
  - uses:: [[Load Balancing]]
  - dependsOn:: [[Hardware Acceleration]]
  - dependsOn:: [[Resource Utilization]]
  - supports:: [[Model Serving]]
  - supports:: [[Performance Optimization]]
  - relatedTo:: [[Bandwidth]]
  - relatedTo:: [[Benchmarking]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
