schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#VirtualPresence
legacy_uri:: urn:visionclaw:concept:spatial-computing:virtual-presence
public:: true

# Virtual Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c8b0a9d349becd1d6bb23e28bdeb6ef4827518a9fb34436618ddb07ac481bfd0",
  "@type": "Page",
  "vc:slug": "virtual-presence",
  "title": "Virtual Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:telepresence",
      "vc:label": "Telepresence"
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
      "vc:value": "sha256-12-ff40214a0306"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#VirtualPresence"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10137"
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
      "vc:value": "Virtual Presence"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:virtual-presence"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:virtual-presence"
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
    "@id": "urn:visionflow:page:c8b0a9d349becd1d6bb23e28bdeb6ef4827518a9fb34436618ddb07ac481bfd0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:virtual-presence",
  "@type": "Class",
  "label": "Virtual Presence",
  "definition": "The psychological experience of being there within a virtual place or situation, encompassing spatial presence (sense of location), social presence (connection with others), and self-presence (embodiment in virtual form), achieved through telepresence technologies and immersive environments.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c8b0a9d349becd1d6bb23e28bdeb6ef4827518a9fb34436618ddb07ac481bfd0"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telepresence]]",
      "resolved": "urn:visionflow:owl:class:telepresence",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:c8b0a9d349becd1d6bb23e28bdeb6ef4827518a9fb34436618ddb07ac481bfd0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The psychological experience of being there within a virtual place or situation, encompassing spatial presence (sense of location), social presence (connection with others), and self-presence (embodiment in virtual form), achieved through telepresence technologies and immersive environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualPresence
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Telepresence]]

- ### Content

  - ## Overview
  - Virtual presence is the sensation of being within a place or situation, representing the psychological counterpart of technological immersion. The metaverse is defined as a convergence of three major technological trends: telepresence, digital twins, and blockchain. In 2024, 14.3 million VR headsets were sold, nearly tripling 2019 figures, demonstrating growing demand for immersive presence experiences.
  - ## Technical Details
  - ### Presence Dimensions
		- **Spatial Presence**: Sense of being in the virtual location
		- **Social Presence**: Feeling connected to others in the space
		- **Self-Presence**: Embodiment and identification with virtual avatar
  - ### Enabling Technologies
		- VR headsets for full immersion
		- AR glasses for enhanced reality
		- Haptic devices for tactile feedback
		- Spatial audio for directional sound
  - ### Telepresence Methods
		- Real-time video conferencing
		- Avatar-mediated interaction
		- Telerobotics and remote operation
		- Digital twin environments
  - ## Applications
  - Remote work and virtual office presence
  - Telemedicine and healthcare consultations
  - Immersive training and simulation
  - Virtual shopping and retail experiences
  - Social gatherings and virtual events

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
