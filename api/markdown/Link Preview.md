schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#LinkPreview
legacy_uri:: urn:visionclaw:concept:infrastructure:link-preview
public:: true

# Link Preview
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a534fea5f9efe8260d019d3e52c577b0184a9cd2d050ecd164be5b65e8b9e7da",
  "@type": "Page",
  "vc:slug": "link-preview",
  "title": "Link Preview",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-a9c1238c2a01"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#LinkPreview"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Link Preview"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:link-preview"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:link-preview"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a534fea5f9efe8260d019d3e52c577b0184a9cd2d050ecd164be5b65e8b9e7da@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:link-preview",
  "@type": "Class",
  "label": "Link Preview",
  "definition": "Link Preview is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a534fea5f9efe8260d019d3e52c577b0184a9cd2d050ecd164be5b65e8b9e7da@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Link Preview is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:LinkPreview
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [LinkPreview API
	 - Documentation](https://docs.linkpreview.net/)
  - [meyt/linkpreview: Get link preview in python (github.com)](https://github.com/meyt/linkpreview)
  - [API to scrape meta from URLs
	 - URL Meta](https://urlmeta.org/docs/meta-api)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
