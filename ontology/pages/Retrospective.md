public:: true

# Retrospective

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:retrospective", "@type": "Page", "title": "Retrospective", "vc:slug": "retrospective", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:retrospective",
  "@type": "Class",
  "label": "Retrospective",
  "definition": "A retrospective is a recurring, facilitated meeting in which a team reflects on a recent period of work to identify what went well, what did not, and concrete improvements to try next. It is a cornerstone agile practice that institutionalises continuous improvement by turning shared experience into actionable changes to process, tooling and collaboration. Retrospectives are increasingly run on collaborative whiteboards so distributed teams can participate equally.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agile-software-development",
      "label": "Agile Software Development"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:agile-software-development",
        "label": "Agile Software Development"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:sticky-notes",
        "label": "Sticky Notes"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:collaborative-whiteboard",
        "label": "Collaborative Whiteboard"
      },
      {
        "@id": "urn:ngm:class:sticky-notes",
        "label": "Sticky Notes"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sprint-planning",
        "label": "Sprint Planning"
      },
      {
        "@id": "urn:ngm:class:project-management",
        "label": "Project Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kanban-board",
        "label": "Kanban Board"
      },
      {
        "@id": "urn:ngm:class:distributed-team-collaboration",
        "label": "Distributed Team Collaboration"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:velocity",
        "label": "Velocity"
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
  - A retrospective is a recurring, facilitated meeting in which a team reflects on a recent period of work to identify what went well, what did not, and concrete improvements to try next. It is a cornerstone agile practice that institutionalises continuous improvement by turning shared experience into actionable changes to process, tooling and collaboration. Retrospectives are increasingly run on collaborative whiteboards so distributed teams can participate equally.
  - [[Agile Software Development]] [[Sticky Notes]] [[Collaborative Whiteboard]] [[Sprint Planning]]
- ### Overview
  - A retrospective closes an iteration by giving a team protected time to inspect its own way of working and adapt it. A facilitator guides the group through gathering observations, generating insight about root causes, and deciding on a small number of improvement actions with clear owners. Common formats include Start-Stop-Continue, the 4Ls and timeline reviews, frequently surfaced as sticky notes on a physical or collaborative whiteboard so that quieter and remote voices contribute equally. The output feeds directly into the next cycle's planning, creating an explicit feedback loop that distinguishes agile delivery from one-off process change. Psychological safety is the precondition: without it, the meeting degrades into superficial agreement.
- ### Key aspects
  - Time-boxed, facilitated reflection at the end of an iteration.
  - Structured into gathering data, generating insight and deciding actions.
  - Produces a small set of owned, trackable improvement actions.
  - Relies on psychological safety for honest contribution.
  - Often run on collaborative whiteboards with sticky notes for equity.
- ### Applications
  - Sprint and iteration retrospectives in agile teams.
  - Incident and post-mortem reviews adapting operations.
  - Project and milestone reviews capturing lessons learned.
  - Distributed-team improvement using shared online boards.
- ### Relationships
  - subClassOf:: [[Agile Software Development]]
  - partOf:: [[Agile Software Development]]
  - enables:: [[Feedback Loop]]
  - hasPart:: [[Sticky Notes]]
  - uses:: [[Collaborative Whiteboard]]
  - uses:: [[Sticky Notes]]
  - supports:: [[Sprint Planning]]
  - supports:: [[Project Management]]
  - requires:: [[Collaboration]]
  - relatedTo:: [[Kanban Board]]
  - relatedTo:: [[Distributed Team Collaboration]]
  - relatedTo:: [[Distributed Collaboration]]
  - bridgesTo:: [[Velocity]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
