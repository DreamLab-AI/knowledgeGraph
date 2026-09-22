public:: true

# TC-0080-Team-Coordination
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63a6983f7696ce77fd73627d91bd2f3da5c9c9b91d207bca5e22870bb1d49a2d",
  "@type": "Page",
  "vc:slug": "tc-0080-team-coordination",
  "title": "TC-0080-Team-Coordination",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration",
      "vc:label": "Collaboration"
    },
    {
      "@id": "urn:visionflow:linked:remote-collaboration",
      "vc:label": "Remote Collaboration"
    },
    {
      "@id": "urn:visionflow:linked:project-management",
      "vc:label": "Project Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TC-0080-Team-Coordination"
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
  "@id": "urn:ngm:class:tc-0080-team-coordination",
  "@type": "Class",
  "label": "TC-0080-Team-Coordination",
  "definition": "Team coordination is the management of dependencies between people, tasks and resources so that members of a group act in a consistent and timely way towards shared objectives.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
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
    "requires": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tc-0080-team-coordination:2d5731e128f1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:63a6983f7696ce77fd73627d91bd2f3da5c9c9b91d207bca5e22870bb1d49a2d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration]]",
      "resolved": "urn:visionflow:linked:collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Remote Collaboration]]",
      "resolved": "urn:visionflow:linked:remote-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Project Management]]",
      "resolved": "urn:visionflow:linked:project-management",
      "kind": "ResolvedLink"
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
  - Team coordination is the management of dependencies between people, tasks and resources so that members of a group act in a consistent and timely way towards shared objectives.

- ### Semantic Classification
  - owl-class:: metaverse:TC0080TeamCoordination
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Collaboration]]
  - bridges-to:: [[Project Management]]
  - requires:: [[Collaboration]]
  - enables:: [[Remote Collaboration]]

- ### Content
  - Team coordination is the process of aligning the actions of group members by managing task dependencies, sequencing work and sharing relevant information. It addresses who does what, when, and how individual contributions fit together to meet a common goal.
  - In distributed and remote settings, coordination relies on explicit mechanisms such as shared schedules, status updates and communication tools to compensate for the loss of informal awareness present in co-located work. Effective coordination reduces duplicated effort, conflicting actions and delays.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
