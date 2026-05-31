public:: true

# Code Review
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fc7e4360ef4a816d38ac6ee676f5dd3ab7736a5f43c4e1de94a763f4d24c417c",
  "@type": "Page",
  "vc:slug": "code-review",
  "title": "Code Review",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:version-control",
      "vc:label": "Version Control"
    },
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:software-testing",
      "vc:label": "Software Testing"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Code Review"
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
  "@id": "urn:ngm:class:code-review",
  "@type": "Class",
  "label": "Code Review",
  "definition": "Code review is the systematic examination of source code by people other than the author to find defects, improve quality and share knowledge. It is commonly conducted through pull requests in modern development workflows.",
  "domain": "software-engineering",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
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
  "@id": "urn:visionflow:annotation:link-resolutions:code-review:717d32bb32db",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fc7e4360ef4a816d38ac6ee676f5dd3ab7736a5f43c4e1de94a763f4d24c417c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Version Control]]",
      "resolved": "urn:visionflow:linked:version-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Testing]]",
      "resolved": "urn:visionflow:linked:software-testing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Engineering]]",
      "resolved": "urn:visionflow:linked:software-engineering",
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
  - Code review is the systematic examination of source code by people other than the author to find defects, improve quality and share knowledge. It is commonly conducted through pull requests in modern development workflows.

- ### Semantic Classification
  - owl-class:: software-engineering:CodeReview
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Software Engineering]]
  - bridges-to:: [[Software Testing]]
  - requires:: [[Version Control]]
  - enables:: [[Software Development]]

- ### Content
  - Code review involves one or more reviewers reading proposed changes to assess correctness, readability, design and adherence to standards before the code is merged. It is most often performed asynchronously through pull or merge requests in version control platforms, with inline comments and approvals.
  - Beyond catching defects, code review spreads knowledge across a team and reinforces coding conventions. It complements automated testing and static analysis as part of a quality assurance process.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
