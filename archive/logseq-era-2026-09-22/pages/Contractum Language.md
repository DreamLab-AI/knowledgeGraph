public:: true

# Contractum Language
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:contractum-language",
  "@type": "Page",
  "vc:slug": "contractum-language",
  "title": "Contractum Language",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:contractum-language",
  "@type": "Class",
  "label": "Contractum Language",
  "definition": "Contractum is a high-level smart-contract programming language designed for the RGB protocol, which performs client-side validation of state transitions anchored to Bitcoin. It compiles to AluVM bytecode and lets developers express RGB schemas and contract logic in a readable, declarative form. It is central to authoring confidential, scalable contracts that settle off-chain while inheriting Bitcoin's security.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client Side Validation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Contractum is a high-level language for authoring [[RGB and Client-Side Validation]] smart contracts, compiling to AluVM bytecode.
- ### Content
  - Contractum expresses RGB schemas, state, and operations declaratively, abstracting the low-level AluVM and strict-encoding details. Because RGB validates contracts client-side with state anchored to Bitcoin transactions, Contractum enables confidential, scalable asset and contract logic that does not expose data on a public ledger.
