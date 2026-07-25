public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c1f1c6e5279ae85042932b36c9d514ce7d62e9a22e11a7942c9e0eaab9a76ac6",
  "@type": "Page",
  "vc:slug": "dc-workspace-tools",
  "title": "Workspace Tools",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:dc-workspace-tools",
  "label": "Workspace Tools",
  "definition": "Workspace Tools is the distributed-collaboration taxonomy hub for software and platform technologies that support remote and hybrid team productivity — including collaboration platforms, shared whiteboards, asynchronous video, meeting AI assistants, and immersive workspaces. It is a peer category to Telepresence and Communication Technology within the distributed collaboration domain.",
  "domain": "distributed-collaboration",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:collaborative-systems-modality-whiteboard", "label": "Collaborative Whiteboard"},
      {"@id": "urn:ngm:class:asynchronous-collaboration", "label": "Asynchronous Collaboration"},
      {"@id": "urn:ngm:class:synchronous-collaboration", "label": "Synchronous Collaboration"},
      {"@id": "urn:ngm:class:meeting-ai-assistant", "label": "Meeting AI Assistant"},
      {"@id": "urn:ngm:class:immersive-workspaces", "label": "Immersive Workspaces"},
      {"@id": "urn:ngm:class:virtual-office-spaces", "label": "Virtual Office Spaces"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"},
      {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"},
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```

Workspace Tools covers the full spectrum of software used by geographically distributed teams, from document co-editing and project management to AI-powered meeting transcription and virtual office environments. The category has expanded significantly with the mainstreaming of remote work, incorporating immersive workspaces that blend XR technology with familiar collaboration workflows.
