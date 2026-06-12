public:: true

# JSON-LD Context
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:json-ld-context",
  "@type": "Page",
  "vc:slug": "json-ld-context",
  "title": "JSON-LD Context",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-ld-context",
  "@type": "Class",
  "label": "JSON-LD Context",
  "definition": "A JSON-LD Context is the machine-readable document or inline object that maps the shorthand terms and prefixes used in a JSON-LD document to their fully qualified IRIs in a target vocabulary or ontology. It serves as the bridge between the compact, human-readable JSON representation and the globally unambiguous RDF data model, enabling semantic interoperability across disparate systems. Contexts may be embedded inline within a document, referenced by URL, or composed from multiple context documents. The JSON-LD 1.1 specification extends context capabilities with scoped contexts, type-scoped and property-scoped contexts, and protected terms that resist accidental overriding. Correct context design is foundational to knowledge graph compilation and Linked Data publication.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:json-data-interchange-format-ld", "label": "JSON-LD"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:semantic-interoperability", "label": "Semantic Interoperability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format-ld-1-1", "label": "JSON-LD 1.1"},
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:schema-registry", "label": "Schema Registry"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[JSON-LD Context]] is the declarative mapping layer within [[JSON-LD]] that resolves compact term names to full [[RDF]] IRIs, enabling [[Knowledge Graph]] compilation and [[Semantic Interoperability]] between systems publishing [[Linked Data]] in JSON format.
- ### Relationships
  - The JSON-LD Context sits at the core of the [[Semantic Web Linked Data Standard]] stack, translating between compact JSON representations and the triple-based [[RDF]] data model. It enables [[Knowledge Graph]] construction by providing stable [[Knowledge Representation]] mappings to [[Ontology]] vocabularies. [[Linked Data]] publication depends on well-designed contexts to ensure round-trip fidelity between compact and expanded forms. [[SPARQL]] query engines consume expanded JSON-LD (via the context) to execute graph queries. The [[JSON-LD 1.1]] specification introduced scoped contexts that allow term semantics to vary by property or type, and the [[Schema Registry]] pattern manages versioned context documents across distributed systems.
- ### Content
  - A JSON-LD Context document specifies prefix expansions (e.g. mapping "schema" to "https://schema.org/"), type coercions (ensuring numeric strings are interpreted as integers), language tagging for string literals, and base IRI declarations. When a JSON-LD processor encounters a term in a document, it looks up the term in the active context to produce the full IRI used in the output RDF graph. This allows compact, readable JSON to produce globally unambiguous statements.

  - Context documents may be hosted at dereferenceable URLs, allowing them to be shared across documents and cached. The JSON-LD 1.1 specification introduced protected terms—context entries that raise an error if a nested context attempts to redefine them—critical for security-sensitive vocabularies like Verifiable Credentials. Scoped contexts allow different property definitions to apply within specific subtrees of a document, enabling rich, context-sensitive data modelling without namespace collisions.

  - Practical context design involves careful vocabulary alignment with established ontologies such as Schema.org, Dublin Core, SKOS, and OWL. Well-designed contexts minimise redundancy, use established [[RDF]] vocabularies for common properties, and version-stamp the context IRI to enable graceful schema evolution. The W3C JSON-LD Working Group maintains the canonical context processing algorithm, and compliant processor libraries are available in JavaScript, Python, Java, Ruby, and PHP.

  - In knowledge graph compilation pipelines such as this ontology, JSON-LD Contexts serve as the semantic glue between authoring-time compact notation and the [[Ontology]] IRIs required for [[SPARQL]] querying, OWL reasoning, and WebVOWL visualisation. A malformed context—mismatched prefixes, dangling term references, or invalid IRI syntax—will cause downstream compilation failures, underscoring the importance of context validation tooling such as the W3C JSON-LD Playground and jsonld.js.
