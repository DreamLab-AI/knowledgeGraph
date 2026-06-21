public:: true

# Medical Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ebfb7a2fb5ff2ca47269c1712779e029a95864fa2185fbb040584a5009a43119",
  "@type": "Page",
  "vc:slug": "medical-robot",
  "title": "Medical Robot",
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
      "vc:value": "RB-0016"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Medical Robot"
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
  "@id": "urn:ngm:class:medical-robot",
  "@type": "Class",
  "label": "Medical Robot",
  "definition": "A Medical Robot is a robotic system designed for use in clinical and healthcare settings, encompassing surgical assistants, rehabilitation exoskeletons, and diagnostic platforms. Medical robots operate under strict safety standards (ISO 13482) and integrate sensing, actuation, and AI to augment human clinical capability.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:service-robot",
      "label": "Service Robot"
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
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:medical-imaging",
        "label": "Medical Imaging"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:computer-vision-system",
        "label": "Computer Vision System"
      },
      {
        "@id": "urn:ngm:class:medical-ai",
        "label": "Medical AI"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:medical-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ebfb7a2fb5ff2ca47269c1712779e029a95864fa2185fbb040584a5009a43119"
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
  - A Medical Robot is a robotic system designed for use in clinical and healthcare settings, encompassing surgical assistants, rehabilitation exoskeletons, and diagnostic platforms. Medical robots operate under strict safety standards (ISO 13482) and integrate sensing, actuation, and AI to augment human clinical capability.

- ### Semantic Classification
  - owl-class:: robotics:rb0016medicalrobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Uses [[Haptic Feedback]]
  - Uses [[Computer Vision System]]
  - Uses [[Medical AI]]
  - Requires [[Functional Safety]]
  - Requires [[Human Robot Interaction]]
  - Enables [[Medical Imaging]]

- ### Content

  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
