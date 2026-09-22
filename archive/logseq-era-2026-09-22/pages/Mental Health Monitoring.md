public:: true

# Mental Health Monitoring
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:24c256bc88c17467faaf4b897551f983a1c6c873f977f89e6dd23fea37a042c8",
  "@type": "Page",
  "vc:slug": "mental-health-monitoring",
  "title": "Mental Health Monitoring",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor",
      "vc:label": "Sensor"
    },
    {
      "@id": "urn:visionflow:linked:affective-computing",
      "vc:label": "Affective Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mental Health Monitoring"
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
  "@id": "urn:ngm:class:mental-health-monitoring",
  "@type": "Class",
  "label": "Mental Health Monitoring",
  "definition": "The use of sensors, applications, and data analysis to track indicators related to a person's psychological wellbeing over time. It may use self-reports, physiological signals, and behavioural data.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:affective-computing",
      "label": "Affective Computing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
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
  "@id": "urn:visionflow:annotation:link-resolutions:mental-health-monitoring:6897b844d772",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:24c256bc88c17467faaf4b897551f983a1c6c873f977f89e6dd23fea37a042c8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensor]]",
      "resolved": "urn:visionflow:linked:sensor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Affective Computing]]",
      "resolved": "urn:visionflow:linked:affective-computing",
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
  - The use of sensors, applications, and data analysis to track indicators related to a person's psychological wellbeing over time. It may use self-reports, physiological signals, and behavioural data.

- ### Semantic Classification
  - owl-class:: healthcare:MentalHealthMonitoring
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Affective Computing]]
  - bridges-to:: [[Affective Computing]]
  - requires:: [[Sensor]]

- ### Content
  - Mental health monitoring gathers signals such as mood reports, sleep patterns, activity levels, and physiological measures from wearables and phones to track changes that may relate to psychological wellbeing.
  - It is used in research and digital health tools to support early detection and ongoing care, and it raises significant questions about privacy, consent, and the accuracy of inferring mental states from indirect data.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
