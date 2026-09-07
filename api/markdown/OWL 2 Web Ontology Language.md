```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:117ceeda5eba0d7048971204b5db359f90f79294c2cb87e667665d8d57f08f47",
  "@type": "Page",
  "vc:slug": "owl-2-web-ontology-language",
  "title": "OWL 2 Web Ontology Language",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:description-logic",
      "vc:label": "Description Logic"
    },
    {
      "@id": "urn:visionflow:linked:rdf",
      "vc:label": "RDF"
    },
    {
      "@id": "urn:visionflow:linked:semantic-reasoning-engine",
      "vc:label": "Semantic Reasoning Engine"
    },
    {
      "@id": "urn:visionflow:linked:reasoning",
      "vc:label": "Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:ontology",
      "vc:label": "Ontology"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:owl",
      "vc:label": "OWL"
    },
    {
      "@id": "urn:visionflow:linked:https-www-w-3-org-tr-owl-2-overview",
      "vc:label": "https://www.w3.org/TR/owl2-overview/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OWL 2 Web Ontology Language"
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
  "@id": "urn:ngm:class:owl-2-web-ontology-language",
  "@type": "Class",
  "label": "OWL 2 Web Ontology Language",
  "definition": "A World Wide Web Consortium standard for representing ontologies on the web, providing formal semantics based on description logic for classes, properties and individuals. It extends earlier web ontology work with richer modelling features and defined reasoning profiles.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl",
      "label": "OWL"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logic"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:semantic-reasoning-engine",
        "label": "Semantic Reasoning Engine"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
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
  - A World Wide Web Consortium standard for representing ontologies on the web, providing formal semantics based on description logic for classes, properties and individuals. It extends earlier web ontology work with richer modelling features and defined reasoning profiles.

- ### Semantic Classification
  - owl-class:: general:OWL2WebOntologyLanguage
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[OWL]]
  - bridges-to:: [[Ontology]], [[Knowledge Representation]]
  - requires:: [[Description Logic]], [[RDF]]
  - enables:: [[Semantic Reasoning Engine]], [[Reasoning]]

- ### Content
  - OWL 2 is the second-generation Web Ontology Language standardised by the World Wide Web Consortium, giving a formal vocabulary for describing classes, properties, individuals and the relationships and constraints among them. Its semantics are grounded in description logic, which makes automated inference well defined.
  - The standard defines profiles that trade expressive power for computational guarantees, so users can choose a subset suited to scalable reasoning. OWL 2 ontologies are serialised in RDF and other syntaxes and are consumed by reasoners to derive implied facts and check consistency.

- ### Provenance
  - sources:: [[https://www.w3.org/TR/owl2-overview/]]
  - migration-date:: 2026-05-29T00:00:00Z
