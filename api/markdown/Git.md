public:: true

# Git
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bc4c82bb0644193966ed59e016fc9ce9b2dd4f191dd4c502c4ec4aedbae17dbf",
  "@type": "Page",
  "vc:slug": "git",
  "title": "Git",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:git-hub",
      "vc:label": "GitHub"
    },
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:open-source",
      "vc:label": "Open Source"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering"
    },
    {
      "@id": "urn:visionflow:linked:version-control",
      "vc:label": "Version Control"
    },
    {
      "@id": "urn:visionflow:linked:https-git-scm-com",
      "vc:label": "https://git-scm.com"
    },
    {
      "@id": "urn:visionflow:linked:https-git-scm-com-book",
      "vc:label": "https://git-scm.com/book"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Git"
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
  "@id": "urn:ngm:class:git",
  "@type": "Class",
  "label": "Git",
  "definition": "Git is a distributed version control system that tracks changes to files and coordinates work across multiple contributors. It was created by Linus Torvalds for Linux kernel development.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:version-control",
      "label": "Version Control"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:git-hub",
        "label": "GitHub"
      },
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
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
  "@id": "urn:visionflow:annotation:link-resolutions:git:9a881b9b9f23",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bc4c82bb0644193966ed59e016fc9ce9b2dd4f191dd4c502c4ec4aedbae17dbf"
  },
  "vc:resolutions": [
    {
      "raw": "[[GitHub]]",
      "resolved": "urn:visionflow:linked:git-hub",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Source]]",
      "resolved": "urn:visionflow:linked:open-source",
      "kind": "StubLink"
    },
    {
      "raw": "[[Software Engineering]]",
      "resolved": "urn:visionflow:linked:software-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Version Control]]",
      "resolved": "urn:visionflow:linked:version-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://git-scm.com]]",
      "resolved": "urn:visionflow:linked:https-git-scm-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://git-scm.com/book]]",
      "resolved": "urn:visionflow:linked:https-git-scm-com-book",
      "kind": "StubLink"
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
  - Git is a distributed version control system that tracks changes to files and coordinates work across multiple contributors. It was created by Linus Torvalds for Linux kernel development.

- ### Semantic Classification
  - owl-class:: general:Git
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Version Control]]
  - bridges-to:: [[Software Engineering]]
  - enables:: [[GitHub]], [[Software Development]], [[Open Source]]

- ### Content
  - Git stores project history as a graph of commits, where each commit records a snapshot of tracked files and references its parent commits. Because every clone contains the full history, contributors can work offline and synchronise later through push and pull operations.
  - Branching and merging are inexpensive operations in Git, which supports workflows where developers create feature branches and integrate them after review. The model has become the dominant approach to source control in modern software development.

- ### Provenance
  - sources:: [[https://git-scm.com]], [[https://git-scm.com/book]]
  - migration-date:: 2026-05-29T00:00:00Z
