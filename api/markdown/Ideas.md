public:: true

# Ideas
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ecab5fecf41145d7ce507c01ab7936ff2e88b4a4eef5c0238aa9ca12cf49e369",
  "@type": "Page",
  "vc:slug": "ideas",
  "title": "Ideas",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ideas"
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
  "@id": "urn:ngm:class:ideas",
  "@type": "Class",
  "label": "Ideas",
  "definition": "Ideas is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ideas:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ecab5fecf41145d7ce507c01ab7936ff2e88b4a4eef5c0238aa9ca12cf49e369"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    }
  ],
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
  - Ideas is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Ideas
  - owl-role:: Concept

- ### Relationships
  - bridges-to:: [[AI Agent System]]

- ### Content
  - Get Todays Information as a template
  - weather
  - stock prices
  - random quote
  - etc
  - Chatgpt example
  - simple accounting

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
