public:: true

# RDF Schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:65014d0100d75aa2edeb3420107f98f27992f5a3ea2fd51fc24d4f48556baec9",
  "@type": "Page",
  "vc:slug": "rdf-schema",
  "title": "RDF Schema",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:rdf",
      "vc:label": "RDF"
    },
    {
      "@id": "urn:visionflow:linked:reasoning",
      "vc:label": "Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:owl-2-web-ontology-language",
      "vc:label": "OWL 2 Web Ontology Language"
    },
    {
      "@id": "urn:visionflow:linked:vocabulary",
      "vc:label": "Vocabulary"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:https-www-w-3-org-tr-rdf-schema",
      "vc:label": "https://www.w3.org/TR/rdf-schema/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "RDF Schema"
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
  "@id": "urn:ngm:class:rdf-schema",
  "@type": "Class",
  "label": "RDF Schema",
  "definition": "A World Wide Web Consortium vocabulary that extends the Resource Description Framework with the means to describe classes, properties and their hierarchies. It provides a lightweight modelling layer for typing resources and defining property domains and ranges.",
  "domain": "standards",
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
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:owl-2-web-ontology-language",
        "label": "OWL 2 Web Ontology Language"
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
  "@id": "urn:visionflow:annotation:link-resolutions:rdf-schema:936a09d21a81",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:65014d0100d75aa2edeb3420107f98f27992f5a3ea2fd51fc24d4f48556baec9"
  },
  "vc:resolutions": [
    {
      "raw": "[[RDF]]",
      "resolved": "urn:visionflow:linked:rdf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reasoning]]",
      "resolved": "urn:visionflow:linked:reasoning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OWL 2 Web Ontology Language]]",
      "resolved": "urn:visionflow:linked:owl-2-web-ontology-language",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vocabulary]]",
      "resolved": "urn:visionflow:linked:vocabulary",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:linked:knowledge-representation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.w3.org/TR/rdf-schema/]]",
      "resolved": "urn:visionflow:linked:https-www-w-3-org-tr-rdf-schema",
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
  - A World Wide Web Consortium vocabulary that extends the Resource Description Framework with the means to describe classes, properties and their hierarchies. It provides a lightweight modelling layer for typing resources and defining property domains and ranges.

- ### Semantic Classification
  - owl-class:: general:RDFSchema
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[RDF]]
  - bridges-to:: [[Vocabulary]], [[Knowledge Representation]]
  - requires:: [[RDF]]
  - enables:: [[Reasoning]], [[OWL 2 Web Ontology Language]]

- ### Content
  - RDF Schema, often abbreviated RDFS, adds vocabulary on top of RDF for stating that resources are instances of classes, that classes form subclass hierarchies and that properties have defined domains and ranges. This lets data publishers give basic structure and typing to RDF graphs.
  - It supports simple entailment, so a reasoner can infer, for example, that an instance of a subclass is also an instance of its superclass. RDFS is less expressive than OWL and is often used as a foundation that OWL ontologies build upon.

- ### Provenance
  - sources:: [[https://www.w3.org/TR/rdf-schema/]]
  - migration-date:: 2026-05-29T00:00:00Z
