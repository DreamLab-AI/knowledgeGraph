public:: true
alias:: TELE-301-virtual-office-spaces

# Virtual Office Spaces
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5cdea061f6584c6c3693467f5042a8af59e731d4fe610cda767c816f37dd4c4c",
  "@type": "Page",
  "vc:slug": "virtual-office-spaces",
  "title": "Virtual Office Spaces",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tele-002-telecollaboration",
      "vc:label": "TELE-002-telecollaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "vc:label": "TELE-020-virtual-reality-telepresence"
    },
    {
      "@id": "urn:visionflow:linked:tele-026-microsoft-mesh",
      "vc:label": "TELE-026-microsoft-mesh"
    },
    {
      "@id": "urn:visionflow:linked:tele-027-spatial-platform",
      "vc:label": "TELE-027-spatial-platform"
    },
    {
      "@id": "urn:visionflow:linked:tele-028-horizon-workrooms",
      "vc:label": "TELE-028-horizon-workrooms"
    },
    {
      "@id": "urn:visionflow:linked:tele-300-digital-twin-collaboration",
      "vc:label": "TELE-300-digital-twin-collaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-302-shared-whiteboards",
      "vc:label": "TELE-302-shared-whiteboards"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-environment",
      "vc:label": "Virtual Environment"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0301"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Office Spaces"
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
  "@id": "urn:ngm:class:virtual-office-spaces",
  "@type": "Class",
  "label": "Virtual Office Spaces",
  "definition": "Virtual office spaces are persistent 3D environments hosted on VR or metaverse platforms where distributed teams gather as avatars to collaborate, attend meetings, use shared whiteboards, and navigate spatial office layouts, replicating physical workplace social dynamics whilst enabling global remote participation through immersive telepresence. Unlike transient video calls, these environments preserve spatial context across sessions — desks remain assigned, whiteboards retain content, and colleagues can be discovered by proximity cues. Leading implementations include Microsoft Mesh, Meta Horizon Workrooms, and Spatial.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-workspace-tools",
      "label": "Workspace Tools"
    },
    {
      "@id": "urn:ngm:class:virtual-environment",
      "label": "Virtual Environment"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:spatial-audio", "label": "Spatial Audio"},
      {"@id": "urn:ngm:class:avatar-system", "label": "Avatar System"},
      {"@id": "urn:ngm:class:presence", "label": "Presence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:social-vr", "label": "Social VR"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-office-spaces:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5cdea061f6584c6c3693467f5042a8af59e731d4fe610cda767c816f37dd4c4c"
  },
  "vc:resolutions": [
    {
      "raw": "[[TELE-002-telecollaboration]]",
      "resolved": "urn:visionflow:linked:tele-002-telecollaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-020-virtual-reality-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-026-microsoft-mesh]]",
      "resolved": "urn:visionflow:linked:tele-026-microsoft-mesh",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-027-spatial-platform]]",
      "resolved": "urn:visionflow:linked:tele-027-spatial-platform",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-028-horizon-workrooms]]",
      "resolved": "urn:visionflow:linked:tele-028-horizon-workrooms",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-300-digital-twin-collaboration]]",
      "resolved": "urn:visionflow:linked:tele-300-digital-twin-collaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-302-shared-whiteboards]]",
      "resolved": "urn:visionflow:linked:tele-302-shared-whiteboards",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtual Environment]]",
      "resolved": "urn:visionflow:owl:class:virtual-environment",
      "kind": "ResolvedLink"
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
  - "Persistent virtual reality or metaverse environments designed as professional workspaces where distributed teams gather as avatars to collaborate, attend meetings, use shared whiteboards, and navigate 3D office layouts, replicating physical office spatial dynamics whilst enabling global remote participation through immersive telepresence platforms."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VirtualOfficeSpaces
  - owl-role:: Object

- ### Relationships
  - is-subclass-of:: [[Virtual Environment]]

- ### Content

  ## Definition

  **Virtual Office Spaces** are persistent 3D environments in platforms like [[TELE-028-horizon-workrooms]], [[TELE-026-microsoft-mesh]], [[TELE-027-spatial-platform]] where remote teams have dedicated "virtual offices" accessible via VR headsets [[TELE-020-virtual-reality-telepresence]]. Unlike temporary meeting rooms, these spaces persist across sessions: whiteboards retain content, desks have assigned avatars, and team members "walk" through virtual hallways to join spontaneous conversations.

  ## Features

  - **Persistent Configuration**: Office layout, furniture, decorations remain between sessions
  - **Hot-Desking**: Team members claim virtual desks, personalise avatars
  - **Spatial Audio**: Conversations audible based on avatar proximity (realistic office acoustics)
  - **Shared Artefacts**: Whiteboards [[TELE-302-shared-whiteboards]], 3D models, documents persist
  - **Meeting Rooms**: Dedicated conference spaces for scheduled/impromptu meetings

  ## Use Cases

  - **Hybrid Work**: Remote employees "attend" virtual office daily
  - **Global Teams**: Timezone-distributed teams overlap in virtual office hours
  - **Onboarding**: New hires tour virtual HQ, meet colleagues as avatars
  - **Social Interaction**: Watercooler conversations, casual cheque-ins

  ## Examples

  - **PwC UK**: 1,200-person virtual office in Horizon Workrooms
  - **Accenture**: "Nth Floor" metaverse office (100,000+ employees)
  - **Spatial**: Creator-focused virtual workspaces with NFT galleries

  #### Related Concepts
  - [[TELE-002-telecollaboration]]
  - [[TELE-020-virtual-reality-telepresence]]
  - [[TELE-028-horizon-workrooms]]
  - [[TELE-300-digital-twin-collaboration]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
