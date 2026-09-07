```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6004a3d670df2ab286ec8241473a4f6bf23961fee0eb5693c0ac2a281c48278",
  "@type": "Page",
  "vc:slug": "rdf-store",
  "title": "RDF Store",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:rdf",
      "vc:label": "RDF"
    },
    {
      "@id": "urn:visionflow:linked:sparql",
      "vc:label": "SPARQL"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:linked-data",
      "vc:label": "Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:semantic-interoperability",
      "vc:label": "Semantic Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:https-www-w-3-org-tr-sparql-11-query",
      "vc:label": "https://www.w3.org/TR/sparql11-query/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "RDF Store"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rdf-store",
  "@type": "Class",
  "label": "RDF Store",
  "definition": "A database designed to store and query data expressed as Resource Description Framework triples, typically supporting the SPARQL query language. Also called a triplestore, it manages subject-predicate-object statements rather than rows and tables.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rdf",
      "label": "RDF"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

- ### Definition
  - A database designed to store and query data expressed as Resource Description Framework triples, typically supporting the SPARQL query language. Also called a triplestore, it manages subject-predicate-object statements rather than rows and tables.

- ### Semantic Classification
  - owl-class:: general:RDFStore
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[RDF]]
  - bridges-to:: [[Linked Data]], [[Semantic Interoperability]]
  - requires:: [[RDF]], [[SPARQL]]
  - enables:: [[Knowledge Graph]], [[Data Integration]]

- ### Content
  - An RDF store, or triplestore, persists data as RDF triples and provides indexing and query processing tailored to graph-shaped statements. It is queried with SPARQL, which expresses graph patterns to be matched against the stored triples.
  - Many RDF stores also support inference over RDF Schema or OWL, returning derived as well as asserted triples. They are used to build knowledge graphs and to integrate data from heterogeneous sources under a shared vocabulary.

- ### Provenance
  - sources:: [[https://www.w3.org/TR/sparql11-query/]]
  - migration-date:: 2026-05-29T00:00:00Z
