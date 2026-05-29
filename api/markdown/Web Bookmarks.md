public:: true

# Web Bookmarks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:781f124eef7ca67c62af96e3c250f532e58f4cfc1a4c4368e313a8ec49f79969",
  "@type": "Page",
  "vc:slug": "web-bookmarks",
  "title": "Web Bookmarks",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Web Bookmarks"
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
  "@id": "urn:ngm:class:web-bookmarks",
  "@type": "Class",
  "label": "Web Bookmarks",
  "definition": "A curated collection of saved hyperlinks to external web resources, serving as a personal or shared reference library for articles, tools, and research material. In knowledge management contexts, web bookmarks act as annotated entry points linking internal knowledge graphs to external sources.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:web-technology", "label": "Web Technology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:web-dev-and-consumer-tooling", "label": "Web Dev and Consumer Tooling"}
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-bookmarks:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:781f124eef7ca67c62af96e3c250f532e58f4cfc1a4c4368e313a8ec49f79969"
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
  - A curated collection of saved hyperlinks to external web resources, serving as a personal or shared reference library for articles, tools, and research material. In knowledge management contexts, web bookmarks act as annotated entry points linking internal knowledge graphs to external sources.

- ### Semantic Classification
  - owl-class:: infrastructure:WebBookmarks
  - owl-role:: Concept

- ### Relationships
  - **Part-of**: [[Knowledge Management]] reference system
  - **Related-to**: [[Knowledge Base]], [[Web Technology]]
  - **Uses**: [[Web Dev and Consumer Tooling]]

- ### Content
  # Articles
  - # Articles
  - # Articles
  - # Articles

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
