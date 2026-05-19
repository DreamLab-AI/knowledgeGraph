schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#ParticipantManagementSystem
legacy_uri:: urn:visionclaw:concept:spatial-computing:participant-management-system
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-b7435fa7da67"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#ParticipantManagementSystem"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9996"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Participant Management System"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:participant-management-system"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:participant-management-system"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5212f56e6512730e152d5789388bc7dd76daf0bf2225a5c1537f5f4bcabeb124@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:participant-management-system",
  "@type": "OntologyClass",
  "label": "Participant Management System",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:event-management",
      "vc:label": "Event Management"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:5212f56e6512730e152d5789388bc7dd76daf0bf2225a5c1537f5f4bcabeb124"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5212f56e6512730e152d5789388bc7dd76daf0bf2225a5c1537f5f4bcabeb124@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A platform for organizing event attendees through registration, invitation management, check-in tracking, and real-time attendance monitoring, providing tools for ticketing, payment processing, and post-event analytics.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:event-analytics",
      "vc:label": "Event Analytics"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5212f56e6512730e152d5789388bc7dd76daf0bf2225a5c1537f5f4bcabeb124@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
