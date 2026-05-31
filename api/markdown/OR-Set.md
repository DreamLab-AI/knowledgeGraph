public:: true

# OR-Set
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:or-set",
  "@type": "Page",
  "vc:slug": "or-set",
  "title": "OR-Set",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:or-set",
  "@type": "Class",
  "label": "OR-Set",
  "definition": "An OR-Set (Observed-Remove Set) is a conflict-free replicated data type (CRDT) that supports concurrent add and remove operations on a set while guaranteeing eventual consistency across replicas. Each added element is tagged with a unique identifier so that concurrent adds and removes resolve deterministically, with adds winning over concurrent removes of unobserved tags. It is a foundational structure for collaborative applications that must merge edits without central coordination.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-data-structure", "label": "Distributed Data Structure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"},
      {"@id": "urn:ngm:class:collaborative-whiteboard", "label": "Collaborative Whiteboard"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An OR-Set is an Observed-Remove [[CRDT]] supporting concurrent adds and removes with eventual consistency, used to merge edits in applications such as a [[Collaborative Whiteboard]].
- ### Content
  - Elements carry unique tags so that concurrent operations resolve deterministically, typically with adds winning over removes of tags a replica has not yet observed. This lets distributed replicas converge without coordination, making OR-Sets a building block for offline-capable collaborative tools.
