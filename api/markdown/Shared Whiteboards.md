public:: true

# Shared Whiteboards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:472d5ad603e2963eb98293438d13b6c1668216c103ca9a4c31fff1f39ea055a2",
  "@type": "Page",
  "vc:slug": "shared-whiteboards",
  "title": "Shared Whiteboards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tele-002-telecollaboration",
      "vc:label": "TELE-002-telecollaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-028-horizon-workrooms",
      "vc:label": "TELE-028-horizon-workrooms"
    },
    {
      "@id": "urn:visionflow:linked:tele-301-virtual-office-spaces",
      "vc:label": "TELE-301-virtual-office-spaces"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0302"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shared Whiteboards"
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
  "@id": "urn:ngm:class:shared-whiteboards",
  "@type": "Class",
  "label": "Shared Whiteboards",
  "definition": "Digital canvases in telepresence and collaboration platforms enabling distributed team members to simultaneously draw, write, annotate, and manipulate visual content — including text, images, diagrams, and sticky notes — in real time. Shared whiteboards replicate physical whiteboard collaboration dynamics through multi-user synchronisation and persistent storage of collaborative artefacts, supporting brainstorming, diagramming, and visual sensemaking across geographic distances.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-workspace-tools",
      "label": "Workspace Tools"
    },
    {
      "@id": "urn:ngm:class:tele-002-telecollaboration",
      "label": "TELE-002-telecollaboration"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"},
      {"@id": "urn:ngm:class:synchronous-collaboration", "label": "Synchronous Collaboration"},
      {"@id": "urn:ngm:class:asynchronous-collaboration", "label": "Asynchronous Collaboration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:telepresence", "label": "Telepresence"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:virtual-office-spaces", "label": "Virtual Office Spaces"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:video-conferencing", "label": "Video Conferencing"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:shared-whiteboards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:472d5ad603e2963eb98293438d13b6c1668216c103ca9a4c31fff1f39ea055a2"
  },
  "vc:resolutions": [
    {
      "raw": "[[TELE-002-telecollaboration]]",
      "resolved": "urn:visionflow:linked:tele-002-telecollaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-028-horizon-workrooms]]",
      "resolved": "urn:visionflow:linked:tele-028-horizon-workrooms",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-301-virtual-office-spaces]]",
      "resolved": "urn:visionflow:linked:tele-301-virtual-office-spaces",
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
  Digital canvases in telepresence and collaboration platforms enabling distributed team members to simultaneously draw, write, annotate, and manipulate visual content in real time. They replicate physical whiteboard dynamics through multi-user synchronisation and persistent artefact storage, supporting brainstorming and visual sensemaking across geographic distances.

- ### Relationships
  Shared Whiteboards **enable** Remote Collaboration, Synchronous Collaboration, and Asynchronous Collaboration modes. They **use** Telepresence infrastructure for immersive integration and Augmented Reality for spatial annotation overlays. They are **part of** Collaboration Platform ecosystems and Virtual Office Spaces. They are **related to** Video Conferencing (often co-embedded), Virtual Reality whiteboard implementations, and Mixed Reality spatial canvases.

- ### Content

  ## Definition

  **Shared Whiteboards** are collaborative visual workspaces in telepresence platforms ([[TELE-028-horizon-workrooms]], Miro, Mural, FigJam) where distributed teams brainstorm, diagram, and organise ideas through synchronous multi-user editing. Unlike static documents, whiteboards support freeform drawing, sticky note clustering, and spatial arrangement, enabling visual thinking and collaborative sensemaking across distance.

  ## Platforms

  - **VR**: Horizon Workrooms, Microsoft Mesh (3D whiteboards in virtual rooms)
  - **2D Web**: Miro, Mural, FigJam, Google Jamboard
  - **Hybrid**: iPad/Apple Pencil input mirrored to web viewers

  ## Features

  - **Real-Time Collaboration**: Multiple cursors, live updates
  - **Infinite Canvas**: Unlimited workspace (zoom in/out)
  - **Templates**: Brainstorming, SWOT analysis, user journey maps
  - **AI Assistance**: Auto-generate diagrams, summarise sticky notes

  #### Related Concepts
  - [[TELE-002-telecollaboration]]
  - [[TELE-028-horizon-workrooms]]
  - [[TELE-301-virtual-office-spaces]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
