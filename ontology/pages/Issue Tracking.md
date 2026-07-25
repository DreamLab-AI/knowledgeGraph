public:: true

# Issue Tracking
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:issue-tracking", "@type":"Page", "title":"Issue Tracking", "vc:slug":"issue-tracking", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:issue-tracking",
  "@type": "Class",
  "label": "Issue Tracking",
  "definition": "Issue tracking is the practice and supporting tooling for recording, prioritising, assigning, and resolving units of work such as bugs, feature requests, and tasks across a software project. Each issue carries metadata, status, discussion, and links to code changes, giving teams a shared backlog and an audit trail of decisions. It underpins collaborative and agile development and integrates tightly with version control and continuous integration.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:project-management",
      "label": "Project Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bug-tracking",
        "label": "Bug Tracking"
      },
      {
        "@id": "urn:ngm:class:ticketing",
        "label": "Ticketing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kanban",
        "label": "Kanban"
      },
      {
        "@id": "urn:ngm:class:workflow",
        "label": "Workflow"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:agile-development",
        "label": "Agile Development"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:code-review",
        "label": "Code Review"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:jira",
        "label": "Jira"
      },
      {
        "@id": "urn:ngm:class:git-hub",
        "label": "GitHub"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Issue tracking is a [[Project Management]] practice for recording, prioritising, and resolving discrete units of work in a software project.
  - It encompasses [[Bug Tracking]], feature requests, and tasks captured as structured tickets.
  - It gives teams a shared backlog and an audit trail that links to [[Version Control]] and [[Code Review]].
- ### Overview
  - An issue tracker is the central record of what needs doing, who owns it, and its current state.
  - Each issue accumulates metadata, discussion, labels, and references to commits and pull requests.
  - It is a backbone of collaborative [[Software Development]], especially in distributed and [[Open Source]] teams.
- ### Key aspects
  - Structured states and transitions modelling a [[Workflow]] from open to closed.
  - Prioritisation, labelling, and assignment to coordinate effort.
  - Traceability linking issues to code, releases, and decisions.
- ### Mechanisms
  - Contributors file issues; maintainers triage, label, and assign them.
  - Boards such as [[Kanban]] visualise flow and limit work in progress.
  - Integration with [[Continuous Integration]] and pull requests closes issues automatically on merge.
- ### Applications
  - Managing bug backlogs and feature roadmaps.
  - Coordinating contributions in open source communities.
  - Supporting [[Agile Development]] sprints and retrospectives.
- ### Relationships
  - subClassOf:: [[Project Management]]
  - hasPart:: [[Bug Tracking]]
  - hasPart:: [[Ticketing]]
  - partOf:: [[Software Development]]
  - uses:: [[Kanban]]
  - uses:: [[Workflow]]
  - supports:: [[Agile Development]]
  - supports:: [[Collaboration]]
  - requires:: [[Version Control]]
  - enables:: [[Code Review]]
  - relatedTo:: [[Jira]]
  - relatedTo:: [[GitHub]]
  - relatedTo:: [[Continuous Integration]]
  - bridgesTo:: [[Open Source]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
