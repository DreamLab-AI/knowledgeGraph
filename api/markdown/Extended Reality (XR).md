public:: true
alias:: Extended Reality Xr, ExtendedRealityXR

# Extended Reality (XR)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:08ae9efbfe769ccabbe07d6d96955d9b8dd6a607b3e1f947921d5e6f02f6c42a",
  "@type": "Page",
  "vc:slug": "extended-reality-xr",
  "title": "Extended Reality (XR)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:acm-glossary",
      "vc:label": "ACM Glossary"
    },
    {
      "@id": "urn:visionflow:linked:cross-reality-transitions",
      "vc:label": "Cross-Reality Transitions"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing",
      "vc:label": "Graphics Processing"
    },
    {
      "@id": "urn:visionflow:linked:head-mounted-display",
      "vc:label": "Head-Mounted Display"
    },
    {
      "@id": "urn:visionflow:linked:input-device",
      "vc:label": "Input Device"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-940",
      "vc:label": "ISO 9241-940"
    },
    {
      "@id": "urn:visionflow:owl:class:augmented-reality-ar",
      "vc:label": "Augmented Reality (AR)"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:human-computer-interaction",
      "vc:label": "Human-Computer Interaction"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-experiences",
      "vc:label": "Immersive Experiences"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-technology",
      "vc:label": "Immersive Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:mixed-reality-mr",
      "vc:label": "Mixed Reality (MR)"
    },
    {
      "@id": "urn:visionflow:owl:class:network-layer",
      "vc:label": "NetworkLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:presence",
      "vc:label": "Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:reality-virtuality-continuum",
      "vc:label": "Reality-Virtuality Continuum"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-interaction",
      "vc:label": "Spatial Interaction"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-tracking",
      "vc:label": "Spatial Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-reality-vr",
      "vc:label": "Virtual Reality (VR)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20245"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Extended Reality (XR)"
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
  "@id": "urn:ngm:class:extended-reality-xr",
  "@type": "Class",
  "label": "Extended Reality (XR)",
  "definition": "Umbrella term encompassing all immersive technologies including Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR), representing the full spectrum from entirely physical to entirely virtual environments and all hybrid states between.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:immersive-technology",
      "label": "Immersive Technology"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:augmented-reality-ar",
        "label": "Augmented Reality (AR)"
      },
      {
        "@id": "urn:ngm:class:mixed-reality-mr",
        "label": "Mixed Reality (MR)"
      },
      {
        "@id": "urn:ngm:class:reality-virtuality-continuum",
        "label": "Reality Virtuality Continuum"
      },
      {
        "@id": "urn:ngm:class:virtual-reality-vr",
        "label": "Virtual Reality (VR)"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      },
      {
        "@id": "urn:ngm:class:input-device",
        "label": "Input Device"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:spatial-tracking",
        "label": "Spatial Tracking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-reality-transitions",
        "label": "Cross-Reality Transitions"
      },
      {
        "@id": "urn:ngm:class:immersive-experiences",
        "label": "Immersive Experiences"
      },
      {
        "@id": "urn:ngm:class:presence",
        "label": "Presence"
      },
      {
        "@id": "urn:ngm:class:spatial-interaction",
        "label": "Spatial Interaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:immersive-technology",
        "label": "Immersive Technology"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:extended-reality-xr:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:08ae9efbfe769ccabbe07d6d96955d9b8dd6a607b3e1f947921d5e6f02f6c42a"
  },
  "vc:resolutions": [
    {
      "raw": "[[ACM Glossary]]",
      "resolved": "urn:visionflow:linked:acm-glossary",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Reality Transitions]]",
      "resolved": "urn:visionflow:linked:cross-reality-transitions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Processing]]",
      "resolved": "urn:visionflow:linked:graphics-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Head-Mounted Display]]",
      "resolved": "urn:visionflow:linked:head-mounted-display",
      "kind": "StubLink"
    },
    {
      "raw": "[[Input Device]]",
      "resolved": "urn:visionflow:linked:input-device",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 9241-940]]",
      "resolved": "urn:visionflow:linked:iso-9241-940",
      "kind": "StubLink"
    },
    {
      "raw": "[[Augmented Reality (AR)]]",
      "resolved": "urn:visionflow:owl:class:augmented-reality-ar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Human-Computer Interaction]]",
      "resolved": "urn:visionflow:owl:class:human-computer-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Experiences]]",
      "resolved": "urn:visionflow:owl:class:immersive-experiences",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Technology]]",
      "resolved": "urn:visionflow:owl:class:immersive-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality (MR)]]",
      "resolved": "urn:visionflow:owl:class:mixed-reality-mr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkLayer]]",
      "resolved": "urn:visionflow:owl:class:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Presence]]",
      "resolved": "urn:visionflow:owl:class:presence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:owl:class:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reality-Virtuality Continuum]]",
      "resolved": "urn:visionflow:owl:class:reality-virtuality-continuum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Interaction]]",
      "resolved": "urn:visionflow:owl:class:spatial-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Tracking]]",
      "resolved": "urn:visionflow:owl:class:spatial-tracking",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Reality (VR)]]",
      "resolved": "urn:visionflow:owl:class:virtual-reality-vr",
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
  - Umbrella term encompassing all immersive technologies including Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR), representing the full spectrum from entirely physical to entirely virtual environments and all hybrid states between.

- ### Semantic Classification
  - owl-class:: spatial-computing:ExtendedReality
  - owl-role:: Object
  - owl-inferred:: spatial-computing:HybridObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[NetworkLayer]], [[ComputeLayer]]

- ### Relationships
  - has-part:: [[Virtual Reality (VR)]], [[Augmented Reality (AR)]], [[Mixed Reality (MR)]], [[Reality-Virtuality Continuum]]
  - is-part-of:: [[Spatial Computing Paradigm]], [[Immersive Technology]]
  - requires:: [[Head-Mounted Display]], [[Spatial Tracking]], [[Real-Time Rendering]], [[Input Device]]
  - enables:: [[Immersive Experiences]], [[Spatial Interaction]], [[Presence]], [[Cross-Reality Transitions]]
  - depends-on:: [[Computer Vision]], [[Graphics Processing]], [[Sensor Fusion]], [[Human-Computer Interaction]]

- ### Content
  Extended Reality (XR) — content pending enrichment.

- ### Provenance
  - sources:: [[ACM Glossary]], [[ISO 9241-940]]
  - migration-date:: 2026-04-26T00:00:00Z
