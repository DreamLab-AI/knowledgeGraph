public:: true

# Linked Open Data

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:linked-open-data",
  "@type": "Page",
  "title": "Linked Open Data",
  "vc:slug": "linked-open-data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:linked-open-data",
  "@type": "Class",
  "label": "Linked Open Data",
  "definition": "Linked Open Data is the practice of publishing structured data on the web under open licences using Linked Data principles, RDF and dereferenceable URIs so that datasets can be interlinked and queried across sources. It forms a global web of data, complementary to the web of documents, in which entities reference one another across organisational boundaries. Reference datasets such as DBpedia and Wikidata are central hubs, and Berners-Lee's five-star scheme rates the openness and linkage of published data.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linked-data",
      "label": "Linked Data"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:uri",
        "label": "URI"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      },
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:triple-store",
        "label": "Triple Store"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:dbpedia",
        "label": "DBpedia"
      },
      {
        "@id": "urn:ngm:class:wikidata",
        "label": "Wikidata"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
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
  - [[Linked Open Data]] publishes [[Linked Data]] under open licences using [[RDF]], [[URI]] identifiers and [[SPARQL]], so that datasets such as [[DBpedia]] and [[Wikidata]] interlink into a global graph.
- ### Overview
  - Linked Open Data is the practice of publishing structured data on the web under open licences, using web standards so that it can be interlinked and queried across sources.
  - It applies the Linked Data principles, dereferenceable URIs and RDF, to data that is freely reusable, forming a web of data complementary to the web of documents.
  - Tim Berners-Lee's five-star deployment scheme rates openness and linkage, with the top rating reserved for data linked to other open datasets.
- ### Key aspects
  - Use of dereferenceable HTTP URIs as global identifiers.
  - RDF representation of statements as subject-predicate-object triples.
  - Open licensing permitting reuse and redistribution.
  - Outbound links to entities in other datasets.
- ### Applications
  - Cross-domain knowledge graphs aggregating encyclopaedic data.
  - Government open-data portals exposing machine-readable statistics.
  - Enrichment of enterprise data with public reference vocabularies.
- ### Relationships
  - enables:: [[Data Interoperability]]
  - enables:: [[Data Integration]]
  - enables:: [[Knowledge Graph]]
  - supports:: [[Semantic Web]]
  - supports:: [[Open Data]]
  - uses:: [[RDF]]
  - uses:: [[URI]]
  - uses:: [[SPARQL]]
  - hasPart:: [[Linked Data]]
  - hasPart:: [[Metadata]]
  - relatedTo:: [[Ontology]]
  - relatedTo:: [[OWL]]
  - relatedTo:: [[Data Provenance]]
  - implements:: [[Triple Store]]
  - bridgesTo:: [[DBpedia]]
  - bridgesTo:: [[Wikidata]]
  - partOf:: [[Artificial Intelligence]]
- ### Provenance
  - updated:: 2026-06-15
