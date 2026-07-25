public:: true

# IRI
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:iri",
  "@type": "Page",
  "title": "IRI",
  "vc:slug": "iri",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iri",
  "@type": "Class",
  "label": "IRI",
  "definition": "An Internationalised Resource Identifier (IRI) is a compact string that uniquely identifies an abstract or physical resource, generalising the Uniform Resource Identifier (URI) to permit characters from the full Unicode repertoire rather than only ASCII. IRIs are the foundational naming mechanism of the Semantic Web: every node and predicate in an RDF graph is named by an IRI, allowing data published by independent parties to refer unambiguously to the same entity. An IRI may be mapped to an equivalent URI through percent-encoding, preserving compatibility with legacy web infrastructure.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linked-data",
      "label": "Linked Data"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:turtle",
        "label": "Turtle"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:schema-org",
        "label": "Schema.org"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:uri",
        "label": "URI"
      },
      {
        "@id": "urn:ngm:class:namespace",
        "label": "Namespace"
      },
      {
        "@id": "urn:ngm:class:content-identifier",
        "label": "Content Identifier"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - An Internationalised Resource Identifier (IRI) is a compact string that uniquely identifies an abstract or physical resource, generalising the Uniform Resource Identifier (URI) to permit characters from the full Unicode repertoire rather than only ASCII. IRIs are the foundational naming mechanism of the Semantic Web: every node and predicate in an RDF graph is named by an IRI, allowing data published by independent parties to refer unambiguously to the same entity. An IRI may be mapped to an equivalent URI through percent-encoding, preserving compatibility with legacy web infrastructure.
  - Related core concepts: [[Linked Data]] [[RDF]] [[Knowledge Graph]] [[Ontology]]
- ### Overview
  - An IRI extends the URI syntax (RFC 3987) to the Universal Character Set, so identifiers may contain characters from non-Latin scripts directly rather than via percent-encoding.
  - Every resource in the Semantic Web stack — subjects, predicates and many objects in RDF triples — is named by an IRI, giving global, dereferenceable identity to data.
  - An IRI can be shortened in serialisations such as Turtle and JSON-LD using prefixes and compact forms, while still expanding to a full absolute identifier.
- ### Key aspects
  - Globally unique: an IRI names exactly one resource, enabling independent datasets to refer to the same thing without coordination.
  - Unicode-aware: unlike ASCII-only URIs, IRIs allow internationalised characters, improving readability for non-English vocabularies.
  - Dereferenceable: many IRIs use the HTTP scheme so that resolving them returns a description of the resource (Linked Data principle).
  - URI mapping: any IRI has a deterministic mapping to an equivalent URI via percent-encoding for compatibility with legacy systems.
- ### Applications
  - Naming classes and properties in ontologies and RDF vocabularies.
  - Identifying entities in knowledge graphs so that edges resolve to defined nodes.
  - Carrying stable identifiers within JSON-LD and Turtle documents.
  - Supporting SPARQL queries that match patterns over IRI-named graph terms.
- ### Relationships
  - partOf:: [[Linked Data]]
  - partOf:: [[RDF]]
  - requires:: [[Metadata]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Ontology]]
  - uses:: [[HTTP]]
  - supports:: [[Turtle]]
  - supports:: [[SPARQL]]
  - standardizedBy:: [[Schema.org]]
  - relatedTo:: [[URI]]
  - relatedTo:: [[Namespace]]
  - relatedTo:: [[Content Identifier]]
  - relatedTo:: [[Decentralised Identifier]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
