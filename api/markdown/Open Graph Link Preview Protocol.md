public:: true

elevatedFrom:: [[Link Preview]]
# Open Graph Link Preview Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a534fea5f9efe8260d019d3e52c577b0184a9cd2d050ecd164be5b65e8b9e7da",
  "@type": "Page",
  "vc:slug": "open-graph-link-preview-protocol",
  "title": "Open Graph Link Preview Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Link Preview"
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
  "@id": "urn:ngm:class:open-graph-link-preview-protocol",
  "@type": "Class",
  "label": "Open Graph Link Preview Protocol",
  "definition": "Link Preview is a web infrastructure technique that fetches and parses Open Graph metadata, title, description, and thumbnail from a target URL to generate a rich card preview for display in social feeds, chat applications, or note-taking tools. APIs and Python libraries such as linkpreview and URLMeta automate this extraction, enabling knowledge graphs and collaborative platforms to surface contextual summaries alongside raw hyperlinks.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:user-interface", "label": "User Interface"},
      {"@id": "urn:ngm:class:social-media-platform-infrastructure", "label": "social media"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:link-preview:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a534fea5f9efe8260d019d3e52c577b0184a9cd2d050ecd164be5b65e8b9e7da"
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
  - Link Preview is a web infrastructure technique that fetches and parses Open Graph metadata, title, description, and thumbnail from a target URL to generate a rich card preview for display in social feeds, chat applications, or note-taking tools. APIs and Python libraries such as linkpreview and URLMeta automate this extraction, enabling knowledge graphs and collaborative platforms to surface contextual summaries alongside raw hyperlinks.

- ### Semantic Classification
  - owl-class:: infrastructure:LinkPreview
  - owl-role:: Concept

- ### Relationships
  - relatedTo:: [[Knowledge Graph]], [[User Interface]], [[Social Media Platform Infrastructure]]
  - uses:: [[Semantic Web Linked Data Standard]]

- ### Content
  - [LinkPreview API
	 - Documentation](https://docs.linkpreview.net/)
  - [meyt/linkpreview: Get link preview in python (github.com)](https://github.com/meyt/linkpreview)
  - [API to scrape meta from URLs
	 - URL Meta](https://urlmeta.org/docs/meta-api)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
