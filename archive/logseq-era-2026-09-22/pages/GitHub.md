public:: true

# GitHub
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f093f3bfb1c3f2e48e4bce761cefdf3ad6b08cb148a061b39c4d32c7e2924d1d",
  "@type": "Page",
  "vc:slug": "git-hub",
  "title": "GitHub",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:git",
      "vc:label": "Git"
    },
    {
      "@id": "urn:visionflow:linked:open-source",
      "vc:label": "Open Source"
    },
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
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
      "@id": "urn:visionflow:linked:https-github-com",
      "vc:label": "https://github.com"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-github-com",
      "vc:label": "https://docs.github.com"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GitHub"
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
  "@id": "urn:ngm:class:git-hub",
  "@type": "Class",
  "label": "GitHub",
  "definition": "GitHub is a web-based platform for hosting Git repositories that provides version control, code review, issue tracking, project management, and collaborative software development features. Acquired by Microsoft in 2018, it serves as the primary distribution hub for open-source software and integrates CI/CD via GitHub Actions, package registries, and an extensible API and webhook ecosystem.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:version-control",
    "label": "Version Control"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:git",
        "label": "Git"
      },
      {
        "@id": "urn:ngm:class:internet-infrastructure",
        "label": "Internet Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      },
      {
        "@id": "urn:ngm:class:code-review",
        "label": "Code Review"
      },
      {
        "@id": "urn:ngm:class:inner-source",
        "label": "Inner Source"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:git-hub-actions",
        "label": "GitHub Actions"
      },
      {
        "@id": "urn:ngm:class:github-copilot",
        "label": "GitHub Copilot"
      },
      {
        "@id": "urn:ngm:class:pull-request",
        "label": "Pull Request"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:microsoft",
        "label": "Microsoft"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:graph-ql",
        "label": "GraphQL"
      },
      {
        "@id": "urn:ngm:class:webhook",
        "label": "Webhook"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:agile-software-development",
        "label": "Agile Development"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Supply Chain Security"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:issue-tracking",
        "label": "Issue Tracking"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:github-platform",
      "label": "GitHub Platform"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:git-hub:c42dc8901218",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f093f3bfb1c3f2e48e4bce761cefdf3ad6b08cb148a061b39c4d32c7e2924d1d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Git]]",
      "resolved": "urn:visionflow:linked:git",
      "kind": "StubLink"
    },
    {
      "raw": "[[Open Source]]",
      "resolved": "urn:visionflow:linked:open-source",
      "kind": "StubLink"
    },
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
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
      "raw": "[[https://github.com]]",
      "resolved": "urn:visionflow:linked:https-github-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.github.com]]",
      "resolved": "urn:visionflow:linked:https-docs-github-com",
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
  - GitHub is a web platform for hosting Git repositories, providing version control, code review, issue tracking, and collaboration features. It is owned by Microsoft.

- ### Semantic Classification
  - owl-class:: general:GitHub
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Version Control]]
  - bridges-to:: [[Software Engineering]]
  - requires:: [[Git]]
  - enables:: [[Open Source]], [[Software Development]]

- ### Content
  - GitHub hosts Git repositories and adds collaboration layers on top of the underlying version control system. Developers use it to fork projects, open pull requests, track issues, and manage releases. The platform also provides continuous integration through GitHub Actions and package hosting.
  - Many open-source projects use GitHub as their primary home, which has made it a common point of distribution for software libraries and tools. It supports access control, code review workflows, and integration with external services through webhooks and an API.

- ### Provenance
  - sources:: [[https://github.com]], [[https://docs.github.com]]
  - migration-date:: 2026-05-29T00:00:00Z
