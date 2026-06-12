public:: true

elevatedFrom:: [[Tips and Tricks]]
# Practitioner Workflow Optimisation Heuristics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b590b1fefbfa0cded68293de994113172d1bdb0595bd86c8436e1fa6577c436f",
  "@type": "Page",
  "vc:slug": "practitioner-workflow-optimisation-heuristics",
  "title": "Practitioner Workflow Optimisation Heuristics",
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
  "@id": "urn:ngm:class:practitioner-workflow-optimisation-heuristics",
  "@type": "Class",
  "label": "Practitioner Workflow Optimisation Heuristics",
  "definition": "Practical heuristics, shortcuts, and workflow optimisations accumulated through practitioner experience with software tools, knowledge-management systems, and AI-assisted development. This category collects actionable guidance that reduces friction in everyday tasks such as Logseq database management, document format conversion, and prompt engineering.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:software-development-process", "label": "Software Development Process"},
      {"@id": "urn:ngm:class:documentation-standards", "label": "Documentation Standards"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}
    ]
  },
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
  - Practical heuristics, shortcuts, and workflow optimisations accumulated through practitioner experience with software tools, knowledge-management systems, and AI-assisted development. This category collects actionable guidance that reduces friction in everyday tasks such as Logseq database management, document format conversion, and prompt engineering.

- ### Semantic Classification
  - owl-class:: infrastructure:TipsAndTricks
  - owl-role:: Concept

- ### Relationships
  - **relatedTo**: Prompt Engineering, Version Control — tips for effective prompting and source-control hygiene are the most common entries in this category.
  - **supports**: Software Development Process, Documentation Standards — practitioner tips improve both the development workflow and the quality of resulting documentation.
  - **uses**: Workflow Automation — many tips describe how to automate repetitive tasks using available tooling.

- ### Content
  - [Logseq Tutorial: 5 Tips to Improve Your Logseq Database
  - YouTube](https://www.youtube.com/watch?v=E2UszT7Z984)
  - Typing icon then double colon, then windows key and period, give you icons to search.
  - Using Pandoc and [[github]] to convert markdown to [[LaTeX]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
