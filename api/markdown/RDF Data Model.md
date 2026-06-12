public:: true

# RDF Data Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8520a32402ed7c79655e896118dc56b63f575f95d42b74ccd948eb6db76f729e",
  "@type": "Page",
  "vc:slug": "rdf-data-model",
  "title": "RDF Data Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:linked-data",
      "vc:label": "Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:sparql",
      "vc:label": "SPARQL"
    },
    {
      "@id": "urn:visionflow:linked:ontology",
      "vc:label": "Ontology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "RDF Data Model"
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
  "@id": "urn:ngm:class:rdf-data-model",
  "@type": "Class",
  "label": "RDF Data Model",
  "definition": "The RDF data model represents information as triples of subject, predicate and object, forming a directed labelled graph. It is the foundation of the Resource Description Framework used to publish structured data on the web.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:semantic-web-linked-data-standard",
      "label": "Semantic Web"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rdf-data-model:eb72a41551b2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8520a32402ed7c79655e896118dc56b63f575f95d42b74ccd948eb6db76f729e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Semantic Web Linked Data Standard]]",
      "resolved": "urn:visionflow:linked:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linked Data]]",
      "resolved": "urn:visionflow:linked:linked-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SPARQL]]",
      "resolved": "urn:visionflow:linked:sparql",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ontology]]",
      "resolved": "urn:visionflow:linked:ontology",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The RDF data model represents information as triples of subject, predicate and object, forming a directed labelled graph. It is the foundation of the Resource Description Framework used to publish structured data on the web.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:RDFDataModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Semantic Web Linked Data Standard]]
  - bridges-to:: [[SPARQL]], [[Ontology]]
  - requires:: [[Semantic Web Linked Data Standard]]
  - enables:: [[Knowledge Graph]], [[Linked Data]]

- ### Content
  - The RDF data model expresses every statement as a triple linking a subject to an object through a predicate, where resources are identified by URIs. A set of triples forms a graph that can be merged with other graphs sharing the same identifiers.
  - Because the model is graph-based and uses global identifiers, data from different sources combines without a fixed schema. It is queried with SPARQL and provides the substrate for linked data and knowledge graphs on the semantic web.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
