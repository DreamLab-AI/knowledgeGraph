public:: true

# Collaborative Editing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:collaborative-editing", "@type":"Page", "title":"Collaborative Editing", "vc:slug":"collaborative-editing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:collaborative-editing",
  "@type":"Class",
  "label":"Collaborative Editing",
  "definition":"Collaborative editing is the capability for multiple people to view and modify a shared document simultaneously, with their changes merged consistently and surfaced to all participants in near real time. It relies on concurrency-control techniques such as operational transformation or conflict-free replicated data types to reconcile concurrent edits without conflicts. Combined with presence and cursor awareness, it makes co-authoring across distributed users feel immediate and coherent.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:real-time-collaboration","label":"Real-Time Collaboration"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:real-time-collaboration","label":"Real-Time Collaboration"},
      {"@id":"urn:ngm:class:collaboration","label":"Collaboration"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:operational-transformation","label":"Operational Transformation"},
      {"@id":"urn:ngm:class:crdt","label":"CRDT"},
      {"@id":"urn:ngm:class:websocket","label":"WebSocket"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:conflict-resolution","label":"Conflict Resolution"},
      {"@id":"urn:ngm:class:presence-awareness","label":"Presence Awareness"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:conflict-free-replicated-data-type","label":"Conflict-Free Replicated Data Type"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:distributed-collaboration","label":"Distributed Collaboration"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:distributed-collaboration","label":"Distributed Collaboration"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:operational-transformation","label":"Operational Transformation"},
      {"@id":"urn:ngm:class:crdt","label":"CRDT"},
      {"@id":"urn:ngm:class:presence-awareness","label":"Presence Awareness"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Collaborative editing lets multiple users modify a shared document at once with changes merged consistently in near real time.
  - It is a capability of [[Real-Time Collaboration]] within [[Distributed Collaboration]] systems.
  - It is built on concurrency control such as [[Operational Transformation]] and [[CRDT]] data structures.
  - It depends on [[Conflict Resolution]] and [[Presence Awareness]] to keep co-authoring coherent.
- ### Overview
  - Collaborative editing reconciles concurrent edits from many participants so that all converge on the same document state.
  - Operational transformation rewrites concurrent operations to preserve intent, while CRDTs encode merge rules that always converge.
  - A real-time transport such as WebSocket propagates changes, and presence cues show who is editing where.
  - The result is a fluid co-authoring experience used across documents, code, design canvases, and knowledge graphs.
- ### Mechanisms
  - Operational transformation: transforming concurrent operations against each other to maintain consistency.
  - Conflict-free replicated data types: data structures whose merges are commutative and convergent by construction.
  - Change propagation: low-latency transport that streams edits to all participants.
  - Presence and awareness: shared cursors, selections, and participant indicators.
  - Convergence guarantees: eventual consistency so all replicas reach an identical state.
- ### Applications
  - Real-time co-authoring of documents, spreadsheets, and presentations.
  - Pair and mob programming in shared code editors.
  - Multi-user editing of design and whiteboard canvases.
  - Concurrent editing of knowledge graphs and structured notes.
- ### Relationships
  - enables:: [[Real-Time Collaboration]]
  - enables:: [[Collaboration]]
  - uses:: [[Operational Transformation]]
  - uses:: [[CRDT]]
  - uses:: [[WebSocket]]
  - requires:: [[Conflict Resolution]]
  - requires:: [[Presence Awareness]]
  - implements:: [[Conflict-Free Replicated Data Type]]
  - supports:: [[Distributed Collaboration]]
  - partOf:: [[Distributed Collaboration]]
  - relatedTo:: [[Operational Transformation]]
  - relatedTo:: [[CRDT]]
  - relatedTo:: [[Presence Awareness]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
