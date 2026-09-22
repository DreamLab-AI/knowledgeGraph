public:: true

# Computer-Supported Cooperative Work

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:computer-supported-cooperative-work", "@type":"Page", "title":"Computer-Supported Cooperative Work", "vc:slug":"computer-supported-cooperative-work", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computer-supported-cooperative-work",
  "@type": "Class",
  "label": "Computer-Supported Cooperative Work",
  "definition": "Computer-Supported Cooperative Work (CSCW) is the interdisciplinary research field that studies how people work together using computer systems and how to design technology that supports their collaboration. It examines coordination, communication, awareness and the social organisation of group work across time and space, informing the design of groupware and collaborative tools. CSCW bridges human-computer interaction, the social sciences and distributed-systems engineering.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    },
    {
      "@id": "urn:ngm:class:dc-workspace-tools",
      "label": "Workspace Tools"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:awareness",
        "label": "Awareness"
      },
      {
        "@id": "urn:ngm:class:presence",
        "label": "Presence"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:shared-workspace",
        "label": "Shared Workspace"
      },
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      },
      {
        "@id": "urn:ngm:class:remote-work",
        "label": "Remote Work"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:synchronisation",
        "label": "Synchronisation"
      }
    ],
    "informs": [
      {
        "@id": "urn:ngm:class:operational-transformation",
        "label": "Operational Transformation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:crdt",
        "label": "CRDT"
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
  - **Computer-Supported Cooperative Work** (CSCW) is the research field studying how people collaborate through computer systems and how to design technology that supports them.
  - It treats [[Distributed Collaboration]] as a socio-technical phenomenon, attending to coordination and communication as much as to software.
  - CSCW bridges [[Human-Computer Interaction]] with the social sciences and distributed-systems engineering.
  - Its findings inform the design of groupware, [[Shared Workspace]] tools and collaborative platforms.
- ### Overview
  - Emerging in the 1980s, CSCW grew from the recognition that real work is cooperative and that technology must fit the social practices around it.
  - A central organising idea is the time–space matrix: collaboration may be same-time or different-time, same-place or different-place, each posing distinct design problems.
  - Researchers study how groups maintain [[Awareness]] of one another, negotiate shared understanding, and coordinate interdependent tasks.
  - The field repeatedly shows that naive automation of group work can fail because it ignores tacit social conventions.
- ### Key aspects
  - **Awareness** — keeping participants informed of relevant activity is a recurring CSCW design concern, drawing on [[Awareness]] and [[Presence]].
  - **Coordination** — managing interdependencies between tasks and people so work flows without conflict.
  - **Articulation work** — the often-invisible effort of organising and aligning cooperative activity.
  - **Common ground** — building shared context so that communication is efficient and unambiguous.
  - **Socio-technical fit** — ensuring tools respect existing social structures rather than imposing rigid workflows.
- ### Mechanisms
  - Empirical workplace studies and ethnography reveal how cooperative work actually happens.
  - Design frameworks translate those insights into requirements for [[Shared Workspace]] and groupware systems.
  - Concurrency research (e.g. [[Operational Transformation]] and [[CRDT]]) addresses the engineering of simultaneous editing.
  - Evaluation methods assess whether deployed systems genuinely improve group outcomes.
- ### Applications
  - Designing collaborative editors, conferencing systems and project tools.
  - Informing [[Remote Work]] and [[Remote Collaboration]] practice and platforms.
  - Shaping awareness features in distributed teams and immersive collaboration.
  - Guiding the introduction of new technology into organisations.
- ### Relationships
  - bridgesTo:: [[Human-Computer Interaction]]
  - hasPart:: [[Awareness]]
  - hasPart:: [[Presence]]
  - enables:: [[Shared Workspace]]
  - enables:: [[Remote Collaboration]]
  - supports:: [[Collaboration]]
  - supports:: [[Remote Work]]
  - uses:: [[Synchronisation]]
  - informs:: [[Operational Transformation]]
  - relatedTo:: [[Distributed Collaboration]]
  - relatedTo:: [[CRDT]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
