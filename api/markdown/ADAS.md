schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#ADAS
legacy_uri:: urn:visionclaw:concept:robotics:adas
public:: true

# ADAS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3cdb5aed544443d8300ee00e1cc07da27cef70df54c460c4e74ec55513d300f9",
  "@type": "Page",
  "vc:slug": "adas",
  "title": "ADAS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-26262",
      "vc:label": "ISO 26262"
    },
    {
      "@id": "urn:visionflow:linked:sae-j3016",
      "vc:label": "SAE J3016"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-vehicle",
      "vc:label": "Autonomous Vehicle"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:perception-system",
      "vc:label": "Perception System"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "Sensor Fusion"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-4e8e79daec62"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#ADAS"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0348"
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
      "vc:value": "ADAS"
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
      "vc:value": "urn:visionclaw:concept:robotics:adas"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:adas"
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
    "@id": "urn:visionflow:page:3cdb5aed544443d8300ee00e1cc07da27cef70df54c460c4e74ec55513d300f9@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:adas",
  "@type": "Class",
  "label": "ADAS",
  "definition": "Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance.",
  "domain": "robotics",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:autonomous-vehicle",
      "label": "Autonomous Vehicle"
    }
  ],
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:adas:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3cdb5aed544443d8300ee00e1cc07da27cef70df54c460c4e74ec55513d300f9"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 26262]]",
      "resolved": "urn:visionflow:linked:iso-26262",
      "kind": "StubLink"
    },
    {
      "raw": "[[SAE J3016]]",
      "resolved": "urn:visionflow:linked:sae-j3016",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Vehicle]]",
      "resolved": "urn:visionflow:owl:class:autonomous-vehicle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Perception System]]",
      "resolved": "urn:visionflow:owl:class:perception-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:3cdb5aed544443d8300ee00e1cc07da27cef70df54c460c4e74ec55513d300f9@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance. ADAS represents SAE Level 1-2 automation, providing driver support whilst requiring continuous driver supervision and intervention capability.

- ### Semantic Classification
  - owl-class:: robotics:ADAS
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[Autonomous Robot]]

- ### Content
  - Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance. ADAS represents SAE Level 1-2 automation, providing driver support whilst requiring continuous driver supervision and intervention capability.

  ## Core Characteristics

  - **Driver Assistance**: Augments rather than replaces driver
  - **Safety Features**: Collision avoidance and mitigation
  - **Sensor-Based**: Camera, radar, ultrasonic sensor integration
  - **Incremental Automation**: Specific function automation
  - **Driver Monitoring**: Ensures driver attention and readiness

  ## Relationships

  - **Subclass**: Driver Assistance Technology
  - **Related**: Autonomous Vehicle, Self-Driving Car, Sensor Fusion
  - **Standards**: ISO 26262, Euro NCAP, NHTSA ratings

  ## Key Literature

  1. Bengler, K., et al. (2014). "Three decades of driver assistance systems: Review and future perspectives." *IEEE Intelligent Transportation Systems Magazine*, 6(4), 6-22.

  2. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems." SAE J3016.

  ## See Also

  - [[Autonomous Vehicle]]
  - [[Perception System]]
  - [[Sensor Fusion]]

  ## Core Characteristics

  - **Driver Assistance**: Augments rather than replaces driver
  - **Safety Features**: Collision avoidance and mitigation
  - **Sensor-Based**: Camera, radar, ultrasonic sensor integration
  - **Incremental Automation**: Specific function automation
  - **Driver Monitoring**: Ensures driver attention and readiness

  ## Relationships

  - **Subclass**: Driver Assistance Technology
  - **Related**: Autonomous Vehicle, Self-Driving Car, Sensor Fusion
  - **Standards**: ISO 26262, Euro NCAP, NHTSA ratings

  ## Key Literature

  1. Bengler, K., et al. (2014). "Three decades of driver assistance systems: Review and future perspectives." *IEEE Intelligent Transportation Systems Magazine*, 6(4), 6-22.

  2. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems." SAE J3016.

  ## See Also

  - [[Autonomous Vehicle]]
  - [[Perception System]]
  - [[Sensor Fusion]]

- ### Provenance
  - sources:: [[ISO 26262]], [[SAE J3016]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z
