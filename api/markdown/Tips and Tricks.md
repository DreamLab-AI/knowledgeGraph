public:: true

# Tips and Tricks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b590b1fefbfa0cded68293de994113172d1bdb0595bd86c8436e1fa6577c436f",
  "@type": "Page",
  "vc:slug": "tips-and-tricks",
  "title": "Tips and Tricks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:github",
      "vc:label": "github"
    },
    {
      "@id": "urn:visionflow:linked:la-te-x",
      "vc:label": "LaTeX"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tips and Tricks"
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
  "@id": "urn:ngm:class:tips-and-tricks",
  "@type": "Class",
  "label": "Tips and Tricks",
  "definition": "Tips and Tricks is a technology infrastructure concept and a type of infrastructure.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:tips-and-tricks:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b590b1fefbfa0cded68293de994113172d1bdb0595bd86c8436e1fa6577c436f"
  },
  "vc:resolutions": [
    {
      "raw": "[[github]]",
      "resolved": "urn:visionflow:linked:github",
      "kind": "StubLink"
    },
    {
      "raw": "[[LaTeX]]",
      "resolved": "urn:visionflow:linked:la-te-x",
      "kind": "StubLink"
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
  - Tips and Tricks is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:TipsAndTricks
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [Logseq Tutorial: 5 Tips to Improve Your Logseq Database
  - YouTube](https://www.youtube.com/watch?v=E2UszT7Z984)
  - Typing icon then double colon, then windows key and period, give you icons to search.
  - Using Pandoc and [[github]] to convert markdown to [[LaTeX]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
