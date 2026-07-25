public:: true

# User Context Awareness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0e86cfc449d345e9b2b42057999acf911de17a01c78489d71bc81e12e8e86f2d",
  "@type": "Page",
  "vc:slug": "user-context-awareness",
  "title": "User Context Awareness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:context-aware-computing",
      "vc:label": "Context-Aware Computing"
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
      "vc:value": "MV-10096"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "User Context Awareness"
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
  "@id": "urn:ngm:class:user-context-awareness",
  "@type": "Class",
  "label": "User Context Awareness",
  "definition": "User Context Awareness is the capability of digital systems to sense, model, and respond to a user's current situation—encompassing location, activity, device state, social context, and environmental factors—in order to deliver personalised, timely, and relevant experiences. It underpins adaptive XR interfaces, smart environment switching, and context-driven content recommendation in spatial computing.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    },
    {
      "@id": "urn:ngm:class:context-aware-computing",
      "label": "Context Aware Computing"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:context-awareness", "label": "Context Awareness"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:personalized-virtual-experiences", "label": "Personalized Virtual Experiences"},
      {"@id": "urn:ngm:class:predictive-personalization", "label": "Predictive Personalization"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:preference-learning", "label": "Preference Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:user-context-awareness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0e86cfc449d345e9b2b42057999acf911de17a01c78489d71bc81e12e8e86f2d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Context-Aware Computing]]",
      "resolved": "urn:visionflow:owl:class:context-aware-computing",
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
  - The capability of digital systems to understand and adapt to a user's current situation, including their location, activity, preferences, device capabilities, and environmental factors to provide personalized and relevant experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:UserContextAwareness
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Context-Aware Computing]]
  - **requires**: Context Awareness, Sensor Fusion
  - **enables**: Personalized Virtual Experiences, Predictive Personalization
  - **uses**: Preference Learning
  - **relatedTo**: User Experience

- ### Content

  - ## Overview
  - User context awareness enables systems to adapt experiences based on understanding the user's current situation. In metaverse contexts, this includes physical environment awareness, social context, device capabilities, and user state detection.
  - ## Technical Details
  - ### Context Types
		- **Physical Context**: Location, movement, posture, gestures
		- **Social Context**: Nearby users, relationships, group activities
		- **Device Context**: Hardware capabilities, battery, connectivity
		- **Temporal Context**: Time of day, session duration, history
		- **Environmental Context**: Lighting, noise, physical space
  - ### Detection Methods
		- Sensor fusion (IMU, cameras, depth sensors)
		- Machine learning inference
		- User preference learning
		- Behavioral pattern recognition
  - ### Privacy Considerations
		- Consent for context collection
		- On-device vs cloud processing
		- Data minimization principles
		- User control over adaptation
  - ## Applications
  - Adaptive VR/AR interfaces
  - Smart environment switching
  - Personalized content recommendations
  - Accessibility adaptations
  - Social presence optimization

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
