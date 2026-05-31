public:: true

# Semantic Web Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:96110fa3bd0d75dc30a6d0883c7d605dfc30765a018feca4c5b5800c4168a2d6",
  "@type": "Page",
  "vc:slug": "semantic-web-domain",
  "title": "Semantic Web Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ontology",
      "vc:label": "Ontology"
    },
    {
      "@id": "urn:visionflow:linked:linked-data",
      "vc:label": "Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:rdf-triple",
      "vc:label": "RDF Triple"
    },
    {
      "@id": "urn:visionflow:linked:sparql-query",
      "vc:label": "SPARQL Query"
    },
    {
      "@id": "urn:visionflow:linked:inference",
      "vc:label": "Inference"
    },
    {
      "@id": "urn:visionflow:linked:formal-methods-domain",
      "vc:label": "Formal Methods Domain"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:data-interoperability",
      "vc:label": "Data Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:interoperability-domain",
      "vc:label": "Interoperability Domain"
    },
    {
      "@id": "urn:visionflow:linked:data-management-domain",
      "vc:label": "Data Management Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:w-3-c-rdf-1-1",
      "vc:label": "W3C RDF 1.1"
    },
    {
      "@id": "urn:visionflow:linked:w-3-c-owl-2",
      "vc:label": "W3C OWL 2"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Semantic Web Domain"
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
  "@id": "urn:ngm:class:semantic-web-domain",
  "@type": "Class",
  "label": "Semantic Web Domain",
  "definition": "The Semantic Web Domain classifies concepts concerning machine-interpretable representations of meaning that allow data to be linked and reasoned over across sources. It covers ontologies, linked data, and the languages and reasoners that operate on them. As a top-level subject axis it provides the formal vocabulary by which knowledge graphs and interoperable data are constructed.",
  "domain": "semantic-web",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:rdf-triple",
        "label": "RDF Triple"
      },
      {
        "@id": "urn:ngm:class:sparql-query",
        "label": "SPARQL Query"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:formal-methods-domain",
        "label": "Formal Methods Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:semantic-web-domain:0c616a4d7ec0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:96110fa3bd0d75dc30a6d0883c7d605dfc30765a018feca4c5b5800c4168a2d6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ontology]]",
      "resolved": "urn:visionflow:linked:ontology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linked Data]]",
      "resolved": "urn:visionflow:linked:linked-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RDF Triple]]",
      "resolved": "urn:visionflow:linked:rdf-triple",
      "kind": "StubLink"
    },
    {
      "raw": "[[SPARQL Query]]",
      "resolved": "urn:visionflow:linked:sparql-query",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inference]]",
      "resolved": "urn:visionflow:linked:inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Formal Methods Domain]]",
      "resolved": "urn:visionflow:linked:formal-methods-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Interoperability]]",
      "resolved": "urn:visionflow:linked:data-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability Domain]]",
      "resolved": "urn:visionflow:linked:interoperability-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management Domain]]",
      "resolved": "urn:visionflow:linked:data-management-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[W3C RDF 1.1]]",
      "resolved": "urn:visionflow:linked:w-3-c-rdf-1-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C OWL 2]]",
      "resolved": "urn:visionflow:linked:w-3-c-owl-2",
      "kind": "StubLink"
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
  - The Semantic Web Domain classifies concepts concerning machine-interpretable representations of meaning that allow data to be linked and reasoned over across sources. It covers ontologies, linked data, and the languages and reasoners that operate on them. As a top-level subject axis it provides the formal vocabulary by which knowledge graphs and interoperable data are constructed.

- ### Semantic Classification
  - owl-class:: sw:SemanticWebDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Interoperability Domain]], [[Data Management Domain]]
  - has-part:: [[Ontology]], [[Linked Data]], [[RDF Triple]], [[SPARQL Query]], [[Inference]]
  - requires:: [[Formal Methods Domain]]
  - enables:: [[Knowledge Graph]], [[Data Interoperability]]

- ### Content
  - The semantic web represents information in a form that machines can interpret, using explicit statements about resources and the relationships between them. The resource description framework expresses facts as subject-predicate-object triples that combine into graphs spanning many sources. Shared identifiers allow data published independently to be joined without prior coordination.
  - Ontologies provide the vocabulary and the logical constraints that give terms a defined meaning, enabling reasoners to derive facts not stated explicitly. Query languages such as SPARQL retrieve and combine graph data, while inference rules expand the asserted facts into entailed consequences. The web ontology language supports varying expressiveness against decidable reasoning.
  - The semantic web bridges to interoperability and data management, supplying the formal substrate for integrating heterogeneous data. It draws on formal methods for the logic underlying ontology languages and the guarantees of their reasoners.

- ### Provenance
  - sources:: [[W3C RDF 1.1]], [[W3C OWL 2]]
  - migration-date:: 2026-05-29T00:00:00Z
