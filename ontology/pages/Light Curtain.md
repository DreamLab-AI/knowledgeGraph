public:: true

# Light Curtain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:73a5f28ab90f4f2ad6cb8361a0d7ec6a2a168698382854e187646b8983d1658b",
  "@type": "Page",
  "vc:slug": "light-curtain",
  "title": "Light Curtain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0097"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Light Curtain"
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
  "@id": "urn:ngm:class:light-curtain",
  "@type": "Class",
  "label": "Light Curtain",
  "definition": "A Light Curtain is an optoelectronic safety device that creates an invisible infrared detection zone around hazardous machinery or robot work cells. When an object or person interrupts the beam matrix, the curtain triggers an emergency stop, enforcing compliance with ISO 8373 and IEC 61496 safety standards.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:functional-safety",
        "label": "Functional Safety"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-robot",
        "label": "Collaborative Robot"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cobot-safety-levels",
        "label": "Cobot Safety Levels"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-10218",
        "label": "ISO 10218"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:light-curtain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:73a5f28ab90f4f2ad6cb8361a0d7ec6a2a168698382854e187646b8983d1658b"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - A Light Curtain is an optoelectronic safety device that creates an invisible infrared detection zone around hazardous machinery or robot work cells. When an object or person interrupts the beam matrix, the curtain triggers an emergency stop, enforcing compliance with ISO 8373 and IEC 61496 safety standards.

- ### Semantic Classification
  - owl-class:: robotics:LightCurtain
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires [[Functional Safety]]
  - Enables [[Collaborative Robot]]
  - Supports [[Human Robot Interaction]]
  - Standardized By [[ISO 10218]]
  - Related To [[Cobot Safety Levels]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
