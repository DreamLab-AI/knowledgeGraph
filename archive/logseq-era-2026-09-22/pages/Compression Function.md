public:: true

# Compression Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:compression-function",
  "@type": "Page",
  "vc:slug": "compression-function",
  "title": "Compression Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compression-function",
  "@type": "Class",
  "label": "Compression Function",
  "definition": "A compression function is a fixed-input-length cryptographic primitive that maps two inputs (a chaining value and a message block) to a single shorter output. It is the core building block of iterated hash functions, where it is applied repeatedly under constructions such as Merkle-Damgard to process arbitrary-length messages. Its collision and preimage resistance directly determine the security of the hash function built on top of it.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}],
    "partOf": [{"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A compression function maps a chaining value and a message block to a shorter fixed-length output, serving as the inner primitive of an iterated [[Hash Function]].
- ### Content
  - In Merkle-Damgard and sponge-derived designs the compression function is invoked once per message block, with each output feeding the next invocation as the chaining value. Its resistance to collisions and preimages is what propagates to the security guarantees of the overall hash function.
