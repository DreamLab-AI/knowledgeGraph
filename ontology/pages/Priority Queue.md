public:: true

# Priority Queue

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:priority-queue", "@type":"Page", "title":"Priority Queue", "vc:slug":"priority-queue", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:priority-queue",
  "@type":"Class",
  "label":"Priority Queue",
  "definition":"A priority queue is an abstract data type in which each element has an associated priority and elements are served in order of priority rather than insertion order. It supports insertion of elements and extraction of the highest- (or lowest-) priority element, and is most commonly implemented with a binary heap. Priority queues underpin many graph and scheduling algorithms where the next item to process is the most urgent one.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:data-structure","label":"Data Structure"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:graph-search","label":"Graph Search"},
      {"@id":"urn:ngm:class:dynamic-programming","label":"Dynamic Programming"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:dijkstra-algorithm","label":"Dijkstra Algorithm"},
      {"@id":"urn:ngm:class:pathfinding","label":"Pathfinding"},
      {"@id":"urn:ngm:class:priority-scheduling","label":"Priority Scheduling"},
      {"@id":"urn:ngm:class:heuristic-search","label":"Heuristic Search"},
      {"@id":"urn:ngm:class:discrete-event-simulation","label":"Discrete-Event Simulation"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:data-structure","label":"Data Structure"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:optimisation-algorithm","label":"Optimization Algorithm"},
      {"@id":"urn:ngm:class:event-driven-architecture","label":"Event-Driven Architecture"},
      {"@id":"urn:ngm:class:task-scheduling","label":"Task Scheduling"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:data-structure","label":"Data Structure"},
      {"@id":"urn:ngm:class:graph-search","label":"Graph Search"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:dynamic-programming","label":"Dynamic Programming"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A priority queue is an abstract [[Data Structure]] that serves elements in priority order. It is a workhorse behind [[Dijkstra Algorithm]], [[Pathfinding]] and [[Heuristic Search]], and supports [[Priority Scheduling]] in operating systems and event systems.
- ### Overview
  - Where an ordinary queue is first-in-first-out, a priority queue dequeues the element with the most extreme priority value, regardless of when it was inserted. This makes it the natural structure for "always process the best candidate next" problems.
  - The canonical implementation is the binary heap, giving logarithmic insertion and extraction. Other implementations include Fibonacci heaps, pairing heaps and ordered arrays, each trading off the cost of different operations.
  - Priority queues appear throughout computer science: in shortest-path search, in greedy and best-first algorithms, in discrete-event simulation and in task schedulers.
- ### Key aspects
  - Ordering by priority: the element returned is always the current minimum or maximum priority.
  - Core operations: insert (push), peek (find-min/max) and extract (pop).
  - Heap implementation: balanced binary tree stored in an array gives O(log n) updates and O(1) peek.
  - Stability and tie-breaking: secondary keys resolve elements of equal priority.
  - Mutable priorities: decrease-key operations let algorithms relax tentative costs.
- ### Mechanisms
  - Binary heap with sift-up on insert and sift-down on extract to maintain the heap invariant.
  - Decrease-key used by Dijkstra and A* to update tentative distances as shorter paths are found.
  - Lazy deletion to avoid expensive in-place updates in some implementations.
- ### Applications
  - Single-source shortest paths in weighted graphs.
  - Best-first and A*-style heuristic search.
  - CPU and task scheduling by priority.
  - Discrete-event simulation event lists.
  - Huffman coding and other greedy constructions.
- ### Relationships
  - uses:: [[Graph Search]]
  - uses:: [[Dynamic Programming]]
  - enables:: [[Dijkstra Algorithm]]
  - enables:: [[Pathfinding]]
  - enables:: [[Priority Scheduling]]
  - enables:: [[Heuristic Search]]
  - enables:: [[Discrete-Event Simulation]]
  - requires:: [[Data Structure]]
  - supports:: [[Optimisation Algorithm]]
  - supports:: [[Event-Driven Architecture]]
  - supports:: [[Task Scheduling]]
  - relatedTo:: [[Data Structure]]
  - relatedTo:: [[Graph Search]]
  - contrastsWith:: [[Dynamic Programming]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
