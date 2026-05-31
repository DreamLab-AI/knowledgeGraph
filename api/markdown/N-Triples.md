public:: true

# N-Triples
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:n-triples",
  "@type": "Page",
  "vc:slug": "n-triples",
  "title": "N-Triples",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:n-triples",
  "@type": "Class",
  "label": "N-Triples",
  "definition": "N-Triples is a line-based, plain-text serialization format for RDF in which each line encodes a single subject-predicate-object triple terminated by a period. It is deliberately minimal and unambiguous, using full IRIs rather than prefixes, which makes it easy to parse, stream, and compare line by line. The format is a W3C standard and serves as a canonical interchange and testing representation for RDF graphs.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:turtle", "label": "Turtle"},
      {"@id": "urn:ngm:class:solid", "label": "Solid"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - N-Triples is a minimal RDF serialization where every line is one fully-expanded triple. It is closely related to [[Turtle]] (a more compact superset) and is consumed by data platforms such as [[Solid]].
- ### Content
  - Because each statement is independent and uses absolute IRIs, N-Triples is ideal for streaming large graphs, line-oriented diffing, and deterministic canonicalisation. The trade-off is verbosity: there is no prefixing, abbreviation, or nesting, so files are larger than equivalent Turtle or JSON-LD documents.
