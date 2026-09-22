public:: true

elevatedFrom:: [[Spatial AI Associate]]
# Spatial AI Assistant Agent
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:83175b8c4f59a8f1fa08e660c9642916b2dd9b3921cad7878449adb6744e3ad5",
  "@type": "Page",
  "vc:slug": "spatial-ai-assistant-agent",
  "title": "Spatial AI Assistant Agent",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial AI Associate"
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
  "@id": "urn:ngm:class:spatial-ai-assistant-agent",
  "@type": "Class",
  "label": "Spatial AI Assistant Agent",
  "definition": "A Spatial AI Associate is an AI-powered assistant role or software agent embedded within spatial computing and extended reality environments, responsible for contextual scene understanding, user intent interpretation, and proactive spatial guidance. It combines computer vision, SLAM-derived spatial maps, and large language model reasoning to deliver situated, location-aware assistance within physical or mixed-reality spaces.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:spatial-ai", "label": "Spatial AI"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:sensor-technology", "label": "Sensor Technology"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:scene-management", "label": "Scene Management"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-ai-associate:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:83175b8c4f59a8f1fa08e660c9642916b2dd9b3921cad7878449adb6744e3ad5"
  },
  "vc:resolutions": [],
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
  - A Spatial AI Associate is an AI-powered assistant role or software agent embedded within spatial computing and extended reality environments, responsible for contextual scene understanding, user intent interpretation, and proactive spatial guidance. It combines computer vision, SLAM-derived spatial maps, and large language model reasoning to deliver situated, location-aware assistance within physical or mixed-reality spaces.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SpatialAIAssociate
  - owl-role:: Concept

- ### Relationships
  - **uses**: Spatial AI — the core intelligence layer; SLAM — the spatial mapping and localisation system that provides the associate with a model of its environment; Sensor Technology — cameras, depth sensors, and IMUs feed the spatial understanding pipeline.
  - **enables**: Extended Reality — the spatial AI associate is a key enabler of intelligent, context-aware XR experiences; Augmented Reality — AR assistants are the most immediate realisation of the spatial AI associate concept.
  - **partOf**: Spatial Computing — the spatial AI associate is a software agent operating within the spatial computing paradigm.
  - **relatedTo**: Scene Management — the associate must query and respond to the scene graph maintained by scene management systems.

- ### Content
  A Spatial AI Associate is an AI-powered assistant embedded within spatial computing and XR environments, combining scene understanding, SLAM localisation, and LLM reasoning to deliver situated, location-aware guidance.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
