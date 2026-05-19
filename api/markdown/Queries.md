public:: true

# Queries
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cd95b946e3d59c711a97526389d9db5600a1da5249aa1cd4592e8f86b2fc3f01",
  "@type": "Page",
  "vc:slug": "queries",
  "title": "Queries",
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
  "@id": "urn:ngm:class:queries",
  "@type": "Class",
  "label": "Queries",
  "definition": "Queries is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
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
  - Queries is a concept within the ngm domain.
- ### Semantic Classification
  - owl-class:: infrastructure:Queries
  - owl-role:: Concept
- ### Relationships
  - <!-- No relationships defined -->
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
