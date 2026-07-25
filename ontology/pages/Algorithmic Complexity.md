public:: true

# Algorithmic Complexity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:algorithmic-complexity", "@type":"Page", "title":"Algorithmic Complexity", "vc:slug":"algorithmic-complexity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:algorithmic-complexity",
  "@type":"Class",
  "label":"Algorithmic Complexity",
  "definition":"Algorithmic complexity is the study of how the computational resources required by an algorithm, principally time and memory, grow as a function of input size. It is expressed using asymptotic notation that abstracts away constant factors to characterise scaling behaviour. In machine learning it governs the feasibility of training and inference, shaping choices of model architecture, optimisation and data structures.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:statistical-learning-theory","label":"Statistical Learning Theory"}],
  "relations":{
    "bridgesTo":[{"@id":"urn:ngm:class:scalability","label":"Scalability"}],
    "dependsOn":[{"@id":"urn:ngm:class:parallel-computing","label":"Parallel Computing"}],
    "relatedTo":[{"@id":"urn:ngm:class:sample-complexity","label":"Sample Complexity"},{"@id":"urn:ngm:class:vc-dimension","label":"VC Dimension"},{"@id":"urn:ngm:class:generalisation","label":"Generalisation"},{"@id":"urn:ngm:class:model-capacity","label":"Model Capacity"}],
    "enables":[{"@id":"urn:ngm:class:scalability","label":"Scalability"}],
    "constrains":[{"@id":"urn:ngm:class:transformer-architecture","label":"Transformer Architecture"}],
    "supports":[{"@id":"urn:ngm:class:inference-optimisation","label":"Inference Optimisation"}],
    "requires":[{"@id":"urn:ngm:class:learning-theory","label":"Learning Theory"}],
    "contrastsWith":[{"@id":"urn:ngm:class:sample-complexity","label":"Sample Complexity"}],
    "uses":[{"@id":"urn:ngm:class:latency","label":"Latency"}],
    "partOf":[{"@id":"urn:ngm:class:statistical-learning-theory","label":"Statistical Learning Theory"}],
    "influences":[{"@id":"urn:ngm:class:throughput","label":"Throughput"},{"@id":"urn:ngm:class:memory-bandwidth","label":"Memory Bandwidth"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Algorithmic complexity quantifies how an algorithm's running time and memory consumption scale with input size, expressed asymptotically so that constant factors and lower-order terms are abstracted away. Within [[Statistical Learning Theory]] it complements [[Sample Complexity]] by describing the computational, rather than statistical, cost of learning.
- It is the lens through which engineers reason about [[Scalability]], comparing algorithms by their growth rates and identifying which approaches remain tractable as data and model size increase.
- ### Overview
- Time complexity captures the number of elementary operations as a function of input size; space complexity captures peak memory usage.
- Asymptotic notation classifies algorithms into families such as constant, logarithmic, linear, quadratic and exponential growth, enabling order-of-magnitude comparison independent of hardware.
- In machine learning, the quadratic cost of attention or the cubic cost of certain matrix operations directly motivates architectural and algorithmic redesign.
- Complexity analysis interacts with [[Parallel Computing]], since parallelism can reduce wall-clock time without changing the underlying work performed.
- ### Key aspects
- Worst-case, average-case and amortised analysis describe different views of resource usage.
- Asymptotic upper, lower and tight bounds characterise scaling behaviour.
- Trade-offs between time and [[Memory Bandwidth]] shape practical implementations.
- Complexity informs whether an approach meets [[Latency]] and [[Throughput]] targets.
- It interacts with [[Model Capacity]] and [[Generalisation]] when balancing accuracy against compute.
- ### Applications
- Selecting tractable training algorithms for large datasets and models.
- Motivating efficient attention variants that reduce the quadratic cost in [[Transformer Architecture]].
- Guiding [[Inference Optimisation]] to meet deployment budgets.
- Comparing data structures and optimisation routines by their growth rates.
- ### Relationships
- subClassOf:: [[Statistical Learning Theory]]
- bridgesTo:: [[Scalability]]
- dependsOn:: [[Parallel Computing]]
- relatedTo:: [[Sample Complexity]]
- relatedTo:: [[VC Dimension]]
- relatedTo:: [[Generalisation]]
- relatedTo:: [[Model Capacity]]
- enables:: [[Scalability]]
- supports:: [[Inference Optimisation]]
- requires:: [[Learning Theory]]
- contrastsWith:: [[Sample Complexity]]
- uses:: [[Latency]]
- partOf:: [[Statistical Learning Theory]]
- influences:: [[Throughput]]
- influences:: [[Memory Bandwidth]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
