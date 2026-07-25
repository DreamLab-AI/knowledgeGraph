public:: true

# Shared Workspace

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:shared-workspace", "@type":"Page", "title":"Shared Workspace", "vc:slug":"shared-workspace", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shared-workspace",
  "@type": "Class",
  "label": "Shared Workspace",
  "definition": "A shared workspace is a common digital environment in which multiple people can view, edit and organise shared artefacts together, whether simultaneously or over time. It provides a persistent space holding documents, boards, tasks or models alongside cues about who is present and what they are doing. Shared workspaces are a core construct of collaborative and groupware systems, turning individual tools into venues for coordinated teamwork.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:collaboration",
      "label": "Collaboration"
    },
    {
      "@id": "urn:ngm:class:dc-workspace-tools",
      "label": "Workspace Tools"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:presence",
        "label": "Presence"
      },
      {
        "@id": "urn:ngm:class:awareness",
        "label": "Awareness"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:synchronisation",
        "label": "Synchronisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      },
      {
        "@id": "urn:ngm:class:remote-work",
        "label": "Remote Work"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:operational-transformation",
        "label": "Operational Transformation"
      },
      {
        "@id": "urn:ngm:class:crdt",
        "label": "CRDT"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:synchronisation",
        "label": "Synchronisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
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
  - A **Shared Workspace** is a common digital environment where several people can view, edit and organise the same artefacts together.
  - It is a form of [[Collaboration]] infrastructure that holds shared documents, boards, tasks or models in a persistent space.
  - Alongside the artefacts, it surfaces [[Presence]] and [[Awareness]] cues so participants know who is present and what they are doing.
  - Shared workspaces turn single-user tools into venues for coordinated [[Distributed Collaboration]].
- ### Overview
  - A workspace differs from a mere shared file by maintaining context: structure, history, membership and live activity rather than just content.
  - It may support synchronous co-editing, asynchronous contribution, or both, depending on how it reconciles concurrent changes.
  - Effective workspaces balance freedom to act independently with [[Awareness]] of others' actions, avoiding both isolation and constant interruption.
  - They are the backbone of modern [[Remote Work]] and [[Remote Collaboration]], replacing the physical shared desk or whiteboard.
- ### Key aspects
  - **Shared artefacts** — documents, canvases, task lists and models that all members can act upon.
  - **Presence and awareness** — indicators of who is online, where they are working, and recent activity, drawing on [[Presence]] and [[Awareness]].
  - **Concurrency control** — mechanisms such as [[Operational Transformation]] and [[CRDT]] reconcile simultaneous edits without conflict.
  - **History and recovery** — [[Version Control]] preserves the evolution of artefacts and supports rollback.
  - **Access and membership** — defined participants and permissions scope who can see and change what.
- ### Mechanisms
  - State is replicated to each participant and kept consistent through [[Synchronisation]].
  - Conflict-free merge strategies (CRDTs) or transformation of operations let many people edit the same object concurrently.
  - Activity feeds and cursors broadcast fine-grained awareness of ongoing work.
  - Persistence ensures the workspace survives sessions, so collaboration can pause and resume.
- ### Applications
  - Collaborative document and spreadsheet editing across distributed teams.
  - Shared whiteboards and design canvases for ideation and planning.
  - Project and task boards coordinating distributed [[Remote Work]].
  - Multi-user modelling and review environments in immersive collaboration.
- ### Relationships
  - hasPart:: [[Presence]]
  - hasPart:: [[Awareness]]
  - requires:: [[Synchronisation]]
  - enables:: [[Remote Collaboration]]
  - enables:: [[Remote Work]]
  - uses:: [[Operational Transformation]]
  - uses:: [[CRDT]]
  - supports:: [[Version Control]]
  - partOf:: [[Distributed Collaboration]]
  - dependsOn:: [[Synchronisation]]
  - relatedTo:: [[Collaboration]]
  - relatedTo:: [[Human-Computer Interaction]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
