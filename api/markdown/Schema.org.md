public:: true

# Schema.org
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:schema-org",
  "@type": "Page",
  "vc:slug": "schema-org",
  "title": "Schema.org",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:schema-org",
  "@type": "Class",
  "label": "Schema.org",
  "definition": "Schema.org is a collaborative, community-maintained vocabulary project founded in 2011 by Google, Microsoft, Yahoo, and Yandex to define a shared set of structured data markup schemas for web pages, enabling search engines and other consumers to understand the semantic content of web resources. The vocabulary defines types and properties for entities such as persons, organisations, events, products, reviews, and creative works, expressed using JSON-LD, Microdata, or RDFa. Schema.org markup embedded in web pages allows search engines to generate rich snippets, knowledge panels, and structured results. The vocabulary is extensible and hosted at schema.org, with governance managed by a W3C community group.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:controlled-vocabulary", "label": "Controlled Vocabulary"},
      {"@id": "urn:ngm:class:microdata", "label": "Microdata"},
      {"@id": "urn:ngm:class:rdfa", "label": "RDFa"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"},
      {"@id": "urn:ngm:class:rich-snippet", "label": "Rich Snippet"},
      {"@id": "urn:ngm:class:structured-data-markup", "label": "Structured Data Markup"},
      {"@id": "urn:ngm:class:entity-recognition", "label": "Entity Recognition"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:web-ontology-language", "label": "Web Ontology Language"},
      {"@id": "urn:ngm:class:resource-description-framework-schema", "label": "RDF Schema"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:w3c-community-group", "label": "W3C Community Group"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:search-engine-optimisation", "label": "Search Engine Optimisation"},
      {"@id": "urn:ngm:class:data-annotation", "label": "Data Annotation"},
      {"@id": "urn:ngm:class:information-extraction", "label": "Information Extraction"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:search-engine", "label": "Search Engine"},
      {"@id": "urn:ngm:class:open-graph-protocol", "label": "Open Graph Protocol"},
      {"@id": "urn:ngm:class:dublin-core", "label": "Dublin Core"},
      {"@id": "urn:ngm:class:wikidata", "label": "Wikidata"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:microformat", "label": "Microformat"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:schema-org-vocabulary", "label": "Schema.org Vocabulary"},
    {"@id": "urn:ngm:class:structured-data-vocabulary", "label": "Structured Data Vocabulary"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Schema.org is a community vocabulary expressed in [[JSON-LD]], [[RDF]], and Microdata that provides a [[Controlled Vocabulary]] of types and properties enabling web publishers to mark up semantic content so that [[Search Engine]] systems can construct [[Knowledge Graph]] entries and rich result features.

- ### Relationships
  - Schema.org uses [[JSON-LD]] as its preferred serialisation format, [[RDF]] as its underlying data model, and draws on [[Controlled Vocabulary]] principles to maintain consistent term definitions. It enables [[Knowledge Graph]] construction by major search engines and contributes to the broader [[Semantic Web Linked Data Standard]] vision of a machine-readable web. It relates to [[Ontology]] formalisms that provide richer logical constraints, to [[Search Engine]] applications that consume its markup for result enhancement, and to [[Data Annotation]] workflows that use its types to label training datasets for information extraction and entity recognition systems.

- ### Content
  - Schema.org was created in response to a fragmented landscape of proprietary structured data formats—rich snippets, open graph, microformats—that each search engine interpreted differently. By providing a single, shared vocabulary endorsed by all major search engines, Schema.org created an incentive for web publishers to invest in structured markup, knowing it would be interpreted consistently across platforms. Within a few years of launch it became one of the most widely deployed web standards, appearing in tens of millions of websites.

  - The vocabulary is organised as a type hierarchy rooted in schema:Thing, with major branches for creative works, events, organisations, persons, places, products, and actions. Each type has associated properties specifying the data that can be attached, with expected value types (Text, URL, another schema.org type, etc.). Extensions to the core vocabulary are managed through hosted extensions and external vocabularies that follow the schema.org linking conventions. The governance model, operated through a W3C community group, allows community contributions whilst maintaining vocabulary coherence through editorial review.

  - In the era of large language models, Schema.org markup has taken on additional significance. LLM training corpora that include structured web content benefit from schema.org annotations that provide machine-readable labels for entity types, relationships, and factual claims. Conversely, knowledge graph construction pipelines for search engines use schema.org as the target vocabulary when extracting entities and relationships from unstructured text, closing a feedback loop between web markup and AI training data.

  - Schema.org's relationship with [[Ontology]] formalisms is complementary rather than competitive. Whilst Schema.org prioritises broad adoption and simplicity over logical rigour, the vocabulary is mapped to more expressive formalisms including OWL and the Wikidata property model. This allows schema.org-annotated data to be lifted into richer knowledge representation frameworks when more precise semantic reasoning is required, making it a pragmatic entry point into the linked-data ecosystem rather than a terminal destination.
