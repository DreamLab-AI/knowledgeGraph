public:: true

# sleep
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:129ad20ef2702bfcbef392fb95c0f617407e5789c752d1c287b4d40ef64e109e",
  "@type": "Page",
  "vc:slug": "sleep",
  "title": "sleep",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "sleep"
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
  "@id": "urn:ngm:class:sleep",
  "@type": "Class",
  "label": "sleep",
  "definition": "sleep is a technology infrastructure concept and a type of infrastructure.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:sleep:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:129ad20ef2702bfcbef392fb95c0f617407e5789c752d1c287b4d40ef64e109e"
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
  - sleep is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Sleep
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [aerotow/eightsleep-nosub-app: This WebApp allows users to control Eight Sleep mattresses without a subscription by using a custom scheduling system. It runs a script every 30 minutes to adjust mattress temperature according to a user-defined schedule, bypassing Eight Sleep's paid "Smart Scheduling" feature.](https://github.com/aerotow/eightsleep-nosub-app)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
