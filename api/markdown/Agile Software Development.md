public:: true

# Agile Software Development
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52f52a94fb192c01d46ba135b2f90db6f7a5036905d8405e05d96a3fc5393147",
  "@type": "Page",
  "vc:slug": "agile-software-development",
  "title": "Agile Software Development",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering-domain",
      "vc:label": "Software Engineering Domain"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agile Software Development"
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
  "@id": "urn:ngm:class:agile-software-development",
  "@type": "Class",
  "label": "Agile Software Development",
  "definition": "Agile software development is a set of iterative, incremental methods that prioritise working software, close collaboration and adaptation to change over fixed up-front planning.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering-domain",
      "label": "Software Engineering Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:software-engineering-domain",
        "label": "Software Engineering Domain"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:agile-software-development:0f114a08c0aa",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:52f52a94fb192c01d46ba135b2f90db6f7a5036905d8405e05d96a3fc5393147"
  },
  "vc:resolutions": [
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Engineering Domain]]",
      "resolved": "urn:visionflow:linked:software-engineering-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Agile software development is a set of iterative, incremental methods that prioritise working software, close collaboration and adaptation to change over fixed up-front planning.

- ### Semantic Classification
  - owl-class:: metaverse:AgileSoftwareDevelopment
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Software Engineering Domain]]
  - bridges-to:: [[Distributed Systems]], [[Software Development]]
  - requires:: [[Software Development]]
  - enables:: [[Software Engineering Domain]]

- ### Content
  - Agile methods deliver software in short iterations, gathering feedback and adjusting scope rather than committing to a complete specification in advance. Practices such as iterative planning, frequent integration and retrospectives support continuous adaptation.
  - Frameworks including Scrum and Kanban operationalise these ideas with defined roles, cadences and flow controls. Agile underlies much modern software development across domains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
