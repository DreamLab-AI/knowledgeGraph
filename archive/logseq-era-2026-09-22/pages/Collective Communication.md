public:: true

# Collective Communication
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:collective-communication", "@type":"Page", "title":"Collective Communication", "vc:slug":"collective-communication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:collective-communication",
  "@type":"Class",
  "label":"Collective Communication",
  "definition":"Collective communication is the class of synchronised, multi-party data-exchange operations in which a group of processes jointly participate, such as broadcast, scatter, gather, all-gather, reduce, and all-reduce. It provides the communication primitives that coordinate state across the nodes of a parallel or distributed system, and it is the backbone of distributed machine-learning training, where gradients and parameters are aggregated and synchronised across many accelerators. Implementations are optimised over high-speed interconnects to minimise the communication overhead that otherwise bottlenecks scaling.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:distributed-training","label":"Distributed Training"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:distributed-training","label":"Distributed Training"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:interconnect","label":"Interconnect"},
      {"@id":"urn:ngm:class:gpu-cluster","label":"GPU Cluster"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"},
      {"@id":"urn:ngm:class:rdma","label":"RDMA"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:mpi","label":"MPI"},
      {"@id":"urn:ngm:class:infiniband","label":"InfiniBand"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:gradient-aggregation","label":"Gradient Aggregation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:data-parallelism","label":"Data Parallelism"},
      {"@id":"urn:ngm:class:model-parallelism","label":"Model Parallelism"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:parameter-server","label":"Parameter Server"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"},
      {"@id":"urn:ngm:class:gradient-aggregation","label":"Gradient Aggregation"},
      {"@id":"urn:ngm:class:gpu-cluster","label":"GPU Cluster"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Collective communication is the family of synchronised group operations (broadcast, reduce, all-reduce, gather) over many processes.
	- It is the communication layer of [[Distributed Training]], aggregating gradients and parameters across devices.
	- It relies on [[Message Passing]] over fast [[Interconnect]] fabrics.
	- It implements [[Gradient Aggregation]] that keeps replicas consistent during training.
- ### Overview
	- Where point-to-point messaging connects two processes, collectives coordinate a whole group in one logical operation.
	- All-reduce is the workhorse of synchronous data-parallel training, summing and redistributing gradients each step.
	- Performance hinges on topology-aware algorithms (ring, tree, hierarchical) that overlap computation with communication.
	- Communication efficiency frequently determines how well training scales to thousands of accelerators.
- ### Mechanisms
	- Reduction operations combine contributions from all participants into a shared result.
	- Broadcast and scatter distribute data from one or partitioned sources to the group.
	- All-gather assembles each participant's shard into a complete view on every node.
	- RDMA and high-bandwidth links minimise per-operation latency.
- ### Applications
	- Synchronous gradient averaging in [[Data Parallelism]].
	- Tensor and pipeline exchange within [[Model Parallelism]].
	- Parameter synchronisation across a [[GPU Cluster]].
	- Large-scale HPC simulations coordinating distributed state.
- ### Relationships
	- subClassOf:: [[Distributed Training]]
	- partOf:: [[Distributed Training]]
	- requires:: [[Interconnect]]
	- requires:: [[GPU Cluster]]
	- dependsOn:: [[Message Passing]]
	- dependsOn:: [[RDMA]]
	- uses:: [[MPI]]
	- uses:: [[InfiniBand]]
	- implements:: [[Gradient Aggregation]]
	- enables:: [[Data Parallelism]]
	- enables:: [[Model Parallelism]]
	- supports:: [[Parameter Server]]
	- relatedTo:: [[Message Passing]]
	- relatedTo:: [[Gradient Aggregation]]
	- relatedTo:: [[GPU Cluster]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
