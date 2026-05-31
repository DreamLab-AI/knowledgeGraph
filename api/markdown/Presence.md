public:: true
alias:: TELE-006-presence

# Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:78a3525a34bc522ad9b8a9a09d0b98538fbf4240ea0975dbc8cd0125d7c78984",
  "@type": "Page",
  "vc:slug": "presence",
  "title": "Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:acm",
      "vc:label": "ACM"
    },
    {
      "@id": "urn:visionflow:linked:embodiment",
      "vc:label": "Embodiment"
    },
    {
      "@id": "urn:visionflow:linked:engagement",
      "vc:label": "Engagement"
    },
    {
      "@id": "urn:visionflow:linked:field-of-view",
      "vc:label": "Field of View"
    },
    {
      "@id": "urn:visionflow:linked:frame-rate",
      "vc:label": "Frame Rate"
    },
    {
      "@id": "urn:visionflow:linked:haptic-device",
      "vc:label": "Haptic Device"
    },
    {
      "@id": "urn:visionflow:linked:sensory-feedback",
      "vc:label": "Sensory Feedback"
    },
    {
      "@id": "urn:visionflow:linked:social-connection",
      "vc:label": "Social Connection"
    },
    {
      "@id": "urn:visionflow:linked:visual-display",
      "vc:label": "Visual Display"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-experience",
      "vc:label": "Immersive Experience"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:latency",
      "vc:label": "Latency"
    },
    {
      "@id": "urn:visionflow:owl:class:self-presence",
      "vc:label": "Self Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:social-presence",
      "vc:label": "Social Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-presence",
      "vc:label": "Spatial Presence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20256"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Presence"
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
  "@id": "urn:ngm:class:presence",
  "@type": "Class",
  "label": "Presence",
  "definition": "Perceptual state in which a user feels located inside a virtual or mixed environment, experiencing spatial, social, and self presence.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:immersive-experience",
      "label": "Immersive Experience"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:self-presence",
        "label": "Self Presence"
      },
      {
        "@id": "urn:ngm:class:social-presence",
        "label": "Social Presence"
      },
      {
        "@id": "urn:ngm:class:spatial-presence",
        "label": "Spatial Presence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:haptic-device",
        "label": "Haptic Device"
      },
      {
        "@id": "urn:ngm:class:sensory-feedback",
        "label": "Sensory Feedback"
      },
      {
        "@id": "urn:ngm:class:visual-display",
        "label": "Visual Display"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:embodiment",
        "label": "Embodiment"
      },
      {
        "@id": "urn:ngm:class:engagement",
        "label": "Engagement"
      },
      {
        "@id": "urn:ngm:class:social-connection",
        "label": "Social Connection"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:78a3525a34bc522ad9b8a9a09d0b98538fbf4240ea0975dbc8cd0125d7c78984"
  },
  "vc:resolutions": [
    {
      "raw": "[[ACM]]",
      "resolved": "urn:visionflow:linked:acm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Embodiment]]",
      "resolved": "urn:visionflow:linked:embodiment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Engagement]]",
      "resolved": "urn:visionflow:linked:engagement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Field of View]]",
      "resolved": "urn:visionflow:linked:field-of-view",
      "kind": "StubLink"
    },
    {
      "raw": "[[Frame Rate]]",
      "resolved": "urn:visionflow:linked:frame-rate",
      "kind": "StubLink"
    },
    {
      "raw": "[[Haptic Device]]",
      "resolved": "urn:visionflow:linked:haptic-device",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensory Feedback]]",
      "resolved": "urn:visionflow:linked:sensory-feedback",
      "kind": "StubLink"
    },
    {
      "raw": "[[Social Connection]]",
      "resolved": "urn:visionflow:linked:social-connection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Display]]",
      "resolved": "urn:visionflow:linked:visual-display",
      "kind": "StubLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Experience]]",
      "resolved": "urn:visionflow:owl:class:immersive-experience",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:owl:class:latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self Presence]]",
      "resolved": "urn:visionflow:owl:class:self-presence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social Presence]]",
      "resolved": "urn:visionflow:owl:class:social-presence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Presence]]",
      "resolved": "urn:visionflow:owl:class:spatial-presence",
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
  - Perceptual state in which a user feels located inside a virtual or mixed environment, experiencing spatial, social, and self presence.
- ### Semantic Classification
  - owl-class:: spatial-computing:Presence
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[ComputeLayer]]
- ### Relationships
  - has-part:: [[Spatial Presence]], [[Social Presence]], [[Self Presence]]
  - is-part-of:: [[Immersive Experience]]
  - requires:: [[Sensory Feedback]], [[Haptic Device]], [[Visual Display]]
  - enables:: [[Engagement]], [[Embodiment]], [[Social Connection]]
  - depends-on:: [[Latency]], [[Frame Rate]], [[Field of View]]
- ### Content
  Presence — content pending enrichment.
- ### Provenance
  - sources:: [[ACM]]
  - migration-date:: 2026-04-26T00:00:00Z
