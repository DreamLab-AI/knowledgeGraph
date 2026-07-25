public:: true

elevatedFrom:: [[Queries]]
# Datalog Knowledge Graph Query Language
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cd95b946e3d59c711a97526389d9db5600a1da5249aa1cd4592e8f86b2fc3f01",
  "@type": "Page",
  "vc:slug": "datalog-knowledge-graph-query-language",
  "title": "Datalog Knowledge Graph Query Language",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Queries"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:datalog-knowledge-graph-query-language",
  "@type": "Class",
  "label": "Datalog Knowledge Graph Query Language",
  "definition": "Queries, in the Logseq context, are structured Datalog or advanced query expressions embedded in pages using the `#+BEGIN_QUERY` / `#+END_QUERY` syntax. They dynamically retrieve and display blocks or pages matching specified conditions—such as filtering private pages by the absence of a `#Public` tag—without modifying underlying data. In the broader NarrativeGoldmine ontology, Queries represent the retrieval-layer mechanism that surfaces knowledge from the graph at read time.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:database-query", "label": "Database Query"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web Linked Data Standard"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:queries:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cd95b946e3d59c711a97526389d9db5600a1da5249aa1cd4592e8f86b2fc3f01"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Queries are structured Datalog or advanced query expressions embedded in Logseq pages using `#+BEGIN_QUERY` / `#+END_QUERY` syntax. They dynamically retrieve and display blocks or pages matching specified conditions without modifying underlying data. In the NarrativeGoldmine ontology, Queries represent the retrieval-layer mechanism that surfaces knowledge from the graph at read time.
- ### Semantic Classification
  - owl-class:: infrastructure:Queries
  - owl-role:: Concept
- ### Relationships
  - uses:: [[Knowledge Graph]], [[Data Management]]
  - enables:: [[Information Retrieval]], [[Semantic Search]]
  - relatedTo:: [[Database Query]], [[Semantic Web Linked Data Standard]], [[Linked Data]]
- ### Content
  - #+BEGIN_QUERY
  {
    :title "Private Pages"
    :query [:find (pull ?b [*])
            :where
            [?b :block/content ?content]
            (not [(clojure.string/includes? ?content "#Public")])]
  }
  #+END_QUERY
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
