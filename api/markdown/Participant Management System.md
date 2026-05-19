public:: true

# Participant Management System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5212f56e6512730e152d5789388bc7dd76daf0bf2225a5c1537f5f4bcabeb124",
  "@type": "Page",
  "vc:slug": "participant-management-system",
  "title": "Participant Management System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:event-analytics",
      "vc:label": "Event Analytics"
    },
    {
      "@id": "urn:visionflow:owl:class:event-management",
      "vc:label": "Event Management"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9996"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Participant Management System"
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
  "@id": "urn:ngm:class:participant-management-system",
  "@type": "Class",
  "label": "Participant Management System",
  "definition": "A platform for organizing event attendees through registration, invitation management, check-in tracking, and real-time attendance monitoring, providing tools for ticketing, payment processing, and post-event analytics.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:event-management",
      "label": "Event Management"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:event-analytics",
        "label": "Event Analytics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:participant-management-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5212f56e6512730e152d5789388bc7dd76daf0bf2225a5c1537f5f4bcabeb124"
  },
  "vc:resolutions": [
    {
      "raw": "[[Event Analytics]]",
      "resolved": "urn:visionflow:linked:event-analytics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Event Management]]",
      "resolved": "urn:visionflow:owl:class:event-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A platform for organizing event attendees through registration, invitation management, check-in tracking, and real-time attendance monitoring, providing tools for ticketing, payment processing, and post-event analytics.

- ### Semantic Classification
  - owl-class:: spatial-computing:ParticipantManagementSystem
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Event Management]]
  - enables:: [[Event Analytics]]

- ### Content

  - #### Core Features
		- Online registration and ticketing
		- Invitation management and RSVP tracking
		- Real-time check-in and badge printing
		- Attendee behavior analytics
		- Session and activity tracking
  - #### Leading Platforms
		- Eventleaf for conference management
		- AirLST for participant and invitation workflows
		- RSVPify for event registration
		- SpotMe for enterprise events (Forrester Leader 2024)
		- Cvent for attendee behavior insights

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
