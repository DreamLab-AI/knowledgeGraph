public:: true

# Wayve
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dd353311f7c953478aeedb9a0214524e442bc1c7ac694d797440f0790846f293",
  "@type": "Page",
  "vc:slug": "wayve",
  "title": "Wayve",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-vehicle",
      "vc:label": "Autonomous Vehicle"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-driving",
      "vc:label": "Autonomous Driving"
    },
    {
      "@id": "urn:visionflow:linked:https-wayve-ai",
      "vc:label": "https://wayve.ai"
    },
    {
      "@id": "urn:visionflow:linked:https-wayve-ai-technology",
      "vc:label": "https://wayve.ai/technology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Wayve"
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
  "@id": "urn:ngm:class:wayve",
  "@type": "Class",
  "label": "Wayve",
  "definition": "Wayve is a British company developing self-driving technology based on end-to-end machine learning rather than hand-coded rules. It is headquartered in London.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:autonomous-driving",
      "label": "Autonomous Driving"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
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
  "@id": "urn:visionflow:annotation:link-resolutions:wayve:1adc12a65fe6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dd353311f7c953478aeedb9a0214524e442bc1c7ac694d797440f0790846f293"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Vehicle]]",
      "resolved": "urn:visionflow:linked:autonomous-vehicle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Driving]]",
      "resolved": "urn:visionflow:linked:autonomous-driving",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://wayve.ai]]",
      "resolved": "urn:visionflow:linked:https-wayve-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://wayve.ai/technology]]",
      "resolved": "urn:visionflow:linked:https-wayve-ai-technology",
      "kind": "StubLink"
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
  - Wayve is a British company developing self-driving technology based on end-to-end machine learning rather than hand-coded rules. It is headquartered in London.

- ### Semantic Classification
  - owl-class:: robotics:Wayve
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Autonomous Driving]]
  - bridges-to:: [[Deep Learning]]
  - requires:: [[Machine Learning]], [[Computer Vision]]
  - enables:: [[Autonomous Vehicle]]

- ### Content
  - Wayve develops driving systems that learn behaviour from data rather than relying on detailed maps and explicit rule sets. Its approach trains models to map sensor inputs directly to driving actions.
  - The company has tested its technology on public roads and works with vehicle manufacturers and fleet operators. It positions learned driving as a route to systems that can adapt to new environments without bespoke engineering for each location.

- ### Provenance
  - sources:: [[https://wayve.ai]], [[https://wayve.ai/technology]]
  - migration-date:: 2026-05-29T00:00:00Z
