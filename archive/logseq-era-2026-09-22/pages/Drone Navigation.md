public:: true

# Drone Navigation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:464fad7894c7f20ccb38c69552b82708d97297e069c66156ff54119025b879f7",
  "@type": "Page",
  "vc:slug": "drone-navigation",
  "title": "Drone Navigation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inertial-measurement-unit",
      "vc:label": "Inertial Measurement Unit"
    },
    {
      "@id": "urn:visionflow:linked:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:linked:mapping",
      "vc:label": "Mapping"
    },
    {
      "@id": "urn:visionflow:linked:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robotics",
      "vc:label": "Mobile Robotics"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-unmanned-aerial-vehicle",
      "vc:label": "https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle"
    },
    {
      "@id": "urn:visionflow:linked:https-ardupilot-org",
      "vc:label": "https://ardupilot.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Drone Navigation"
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
  "@id": "urn:ngm:class:drone-navigation",
  "@type": "Class",
  "label": "Drone Navigation",
  "definition": "Drone navigation is the set of methods by which unmanned aerial vehicles determine position, plan routes and control flight to reach objectives.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mobile-robotics",
      "label": "Mobile Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
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
  "@id": "urn:visionflow:annotation:link-resolutions:drone-navigation:8145e5b603ff",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:464fad7894c7f20ccb38c69552b82708d97297e069c66156ff54119025b879f7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Inertial Measurement Unit]]",
      "resolved": "urn:visionflow:linked:inertial-measurement-unit",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Path Planning]]",
      "resolved": "urn:visionflow:linked:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mapping]]",
      "resolved": "urn:visionflow:linked:mapping",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:linked:slam",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mobile Robotics]]",
      "resolved": "urn:visionflow:linked:mobile-robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-unmanned-aerial-vehicle",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://ardupilot.org/]]",
      "resolved": "urn:visionflow:linked:https-ardupilot-org",
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
  - Drone navigation is the set of methods by which unmanned aerial vehicles determine position, plan routes and control flight to reach objectives.

- ### Semantic Classification
  - owl-class:: robotics:DroneNavigation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Mobile Robotics]]
  - bridges-to:: [[SLAM]]
  - requires:: [[Inertial Measurement Unit]], [[Path Planning]]
  - enables:: [[Mapping]]

- ### Content
  - Drone navigation combines positioning, mapping and motion control to guide unmanned aerial vehicles. It draws on satellite positioning, inertial measurement and onboard sensors to estimate state and avoid obstacles.
  - In environments without reliable satellite signals, drones rely on visual and inertial methods, including simultaneous localisation and mapping. Path planning algorithms generate routes that respect obstacles and mission constraints.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle]], [[https://ardupilot.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
