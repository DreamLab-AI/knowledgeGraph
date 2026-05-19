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
  "definition": "\"Digital canvases in telepresence platforms enabling distributed team members to simultaneously draw, write, annotate, and manipulate visual content (text, images, diagrams, sticky notes) in real-time, replicating physical whiteboard collaboration dynamics through multi-user synchronisation and p...",
  "domain": "distributed-collaboration",
  "maturity": "established",
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
  "quality": 0.35,
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
  - "Digital canvases in telepresence platforms enabling distributed team members to simultaneously draw, write, annotate, and manipulate visual content (text, images, diagrams, sticky notes) in real-time, replicating physical whiteboard collaboration dynamics through multi-user synchronisation and persistent storage of collaborative artefacts."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:SharedWhiteboards
  - owl-role:: Object

- ### Relationships
  - is-subclass-of:: [[TELE-002-telecollaboration]]

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
