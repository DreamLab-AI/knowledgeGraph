schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#UserContextAwareness
legacy_uri:: urn:visionclaw:concept:spatial-computing:user-context-awareness
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
      "vc:value": "sha256-12-4815a2f23af0"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#UserContextAwareness"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10096"
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
      "vc:value": "User Context Awareness"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:user-context-awareness"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:user-context-awareness"
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
    "@id": "urn:visionflow:page:0e86cfc449d345e9b2b42057999acf911de17a01c78489d71bc81e12e8e86f2d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:user-context-awareness",
  "@type": "OntologyClass",
  "label": "User Context Awareness",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:context-aware-computing",
      "vc:label": "Context-Aware Computing"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:0e86cfc449d345e9b2b42057999acf911de17a01c78489d71bc81e12e8e86f2d"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0e86cfc449d345e9b2b42057999acf911de17a01c78489d71bc81e12e8e86f2d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "The capability of digital systems to understand and adapt to a user's current situation, including their location, activity, preferences, device capabilities, and environmental factors to provide personalized and relevant experiences.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0e86cfc449d345e9b2b42057999acf911de17a01c78489d71bc81e12e8e86f2d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
