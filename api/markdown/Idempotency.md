public:: true

# Idempotency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:idempotency",
  "@type": "Page",
  "vc:slug": "idempotency",
  "title": "Idempotency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:idempotency",
  "@type": "Class",
  "label": "Idempotency",
  "definition": "Idempotency is the property of an operation whereby applying it multiple times produces the same result as applying it once. In distributed systems and APIs it is essential for safe retries, ensuring that duplicated requests caused by network failures do not corrupt state or cause unintended side effects. Idempotency is commonly enforced via idempotency keys, deterministic merge functions, or naturally commutative state updates.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}],
    "relatedTo": [{"@id": "urn:ngm:class:crdt", "label": "CRDT"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Idempotency guarantees that repeated execution of an operation yields the same state, a precondition for safe retries that underpins [[Fault Tolerance]] and is realised in structures such as a [[CRDT]].
- ### Content
  - Systems achieve idempotency by deduplicating on client-supplied keys, by designing state transitions to be commutative and associative, or by recording applied operations. Conflict-free replicated data types exploit these algebraic properties so that the same update can be delivered any number of times and in any order without diverging.
