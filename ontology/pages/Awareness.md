public:: true

# Awareness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ffb0fc274f5f793ade199103c771752cad2a6424062dee25de4b2ed77cf72353",
  "@type": "Page",
  "vc:slug": "awareness",
  "title": "Awareness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaborative-presence",
      "vc:label": "Collaborative Presence"
    },
    {
      "@id": "urn:visionflow:linked:notification-systems",
      "vc:label": "Notification Systems"
    },
    {
      "@id": "urn:visionflow:linked:situational-understanding",
      "vc:label": "Situational Understanding"
    },
    {
      "@id": "urn:visionflow:linked:social-computing",
      "vc:label": "Social Computing"
    },
    {
      "@id": "urn:visionflow:linked:social-interaction",
      "vc:label": "Social Interaction"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:presence-detection",
      "vc:label": "Presence Detection"
    },
    {
      "@id": "urn:visionflow:owl:class:state-synchronization",
      "vc:label": "State Synchronization"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9793"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Awareness"
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
  "@id": "urn:ngm:class:awareness",
  "@type": "Class",
  "label": "Awareness",
  "definition": "Awareness in metaverse contexts refers to systems and mechanisms that provide users with perception of other participants, environmental changes, and relevant contextual information in shared virtual spaces, supporting presence, social interaction, and collaborative activities through visual, aud...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:dc-communication",
        "label": "Communication Technology"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:notification-system",
        "label": "Notification System"
      },
      {
        "@id": "urn:ngm:class:presence-detection",
        "label": "Presence Detection"
      },
      {
        "@id": "urn:ngm:class:state-synchronization",
        "label": "State Synchronization"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-presence",
        "label": "Collaborative Presence"
      },
      {
        "@id": "urn:ngm:class:situational-understanding",
        "label": "Situational Understanding"
      },
      {
        "@id": "urn:ngm:class:social-interaction",
        "label": "Social Interaction"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:awareness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ffb0fc274f5f793ade199103c771752cad2a6424062dee25de4b2ed77cf72353"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaborative Presence]]",
      "resolved": "urn:visionflow:linked:collaborative-presence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Notification Systems]]",
      "resolved": "urn:visionflow:linked:notification-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Situational Understanding]]",
      "resolved": "urn:visionflow:linked:situational-understanding",
      "kind": "StubLink"
    },
    {
      "raw": "[[Social Computing]]",
      "resolved": "urn:visionflow:linked:social-computing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Social Interaction]]",
      "resolved": "urn:visionflow:linked:social-interaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Presence Detection]]",
      "resolved": "urn:visionflow:owl:class:presence-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[State Synchronization]]",
      "resolved": "urn:visionflow:owl:class:state-synchronization",
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
  - Awareness in metaverse contexts refers to systems and mechanisms that provide users with perception of other participants, environmental changes, and relevant contextual information in shared virtual spaces, supporting presence, social interaction, and collaborative activities through visual, audio, and haptic cues.
- ### Semantic Classification
  - owl-class:: spatial-computing:Awareness
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]
- ### Relationships
  - is-subclass-of:: [[Social Computing]]
  - requires:: [[Presence Detection]], [[State Synchronization]], [[Notification Systems]]
  - enables:: [[Collaborative Presence]], [[Social Interaction]], [[Situational Understanding]]
- ### Content
  ### Technical Details
  Key awareness types include:
  - **Presence Awareness**: Knowledge of who is online and available in virtual spaces
  - **Spatial Awareness**: Understanding of user positions and orientations in 3D environments
  - **Activity Awareness**: Visibility into what other users are doing or have done
  - **Contextual Awareness**: Environmental state, time, and relevant situational information
  ### Implementation Mechanisms
  - **Visual Indicators**: Avatars, name tags, status icons, and activity animations
  - **Audio Cues**: Spatial audio indicating direction and proximity of participants
  - **Notification Systems**: Alerts for arrivals, departures, and significant events
  - **Peripheral Vision**: Subtle indicators in UI margins for non-intrusive awareness
  ### CSCW Foundations
  Awareness concepts derive from Computer-Supported Cooperative Work research, adapted for 3D immersive environments to support natural social interactions and effective collaboration.
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
