public:: true

# Immersion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9eaa0f8f2c16e6f69bc70e5f2e42a5758735b3e1ab1afc26c98bfa3b75d07552",
  "@type": "Page",
  "vc:slug": "immersion",
  "title": "Immersion",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:acm",
      "vc:label": "ACM"
    },
    {
      "@id": "urn:visionflow:linked:cognitive-immersion",
      "vc:label": "Cognitive Immersion"
    },
    {
      "@id": "urn:visionflow:linked:content-quality",
      "vc:label": "Content Quality"
    },
    {
      "@id": "urn:visionflow:linked:display-technology",
      "vc:label": "Display Technology"
    },
    {
      "@id": "urn:visionflow:linked:flow-state",
      "vc:label": "Flow State"
    },
    {
      "@id": "urn:visionflow:linked:interaction-mechanism",
      "vc:label": "Interaction Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:presentation-layer",
      "vc:label": "PresentationLayer"
    },
    {
      "@id": "urn:visionflow:linked:sensory-immersion",
      "vc:label": "Sensory Immersion"
    },
    {
      "@id": "urn:visionflow:linked:user-engagement",
      "vc:label": "User Engagement"
    },
    {
      "@id": "urn:visionflow:linked:visual-fidelity",
      "vc:label": "Visual Fidelity"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:audio-spatialization",
      "vc:label": "Audio Spatialization"
    },
    {
      "@id": "urn:visionflow:owl:class:emotional-immersion",
      "vc:label": "Emotional Immersion"
    },
    {
      "@id": "urn:visionflow:owl:class:haptic-feedback",
      "vc:label": "Haptic Feedback"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:presence",
      "vc:label": "Presence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20255"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Immersion"
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
  "@id": "urn:ngm:class:immersion",
  "@type": "Class",
  "label": "Immersion",
  "definition": "Subjective experience of psychological engagement and sense of presence within a virtual environment, characterized by reduced awareness of physical surroundings and absorption in virtual context.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:cognitive-immersion",
        "label": "Cognitive Immersion"
      },
      {
        "@id": "urn:ngm:class:sensory-immersion",
        "label": "Sensory Immersion"
      },
      {
        "@id": "urn:ngm:class:emotional-immersion",
        "label": "Emotional Immersion"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:content-quality",
        "label": "Content Quality"
      },
      {
        "@id": "urn:ngm:class:display-technology",
        "label": "Display Technology"
      },
      {
        "@id": "urn:ngm:class:interaction-mechanism",
        "label": "Interaction Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:flow-state",
        "label": "Flow State"
      },
      {
        "@id": "urn:ngm:class:user-engagement",
        "label": "User Engagement"
      },
      {
        "@id": "urn:ngm:class:presence",
        "label": "Presence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:immersion:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9eaa0f8f2c16e6f69bc70e5f2e42a5758735b3e1ab1afc26c98bfa3b75d07552"
  },
  "vc:resolutions": [
    {
      "raw": "[[ACM]]",
      "resolved": "urn:visionflow:linked:acm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cognitive Immersion]]",
      "resolved": "urn:visionflow:linked:cognitive-immersion",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Quality]]",
      "resolved": "urn:visionflow:linked:content-quality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Display Technology]]",
      "resolved": "urn:visionflow:linked:display-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Flow State]]",
      "resolved": "urn:visionflow:linked:flow-state",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interaction Mechanism]]",
      "resolved": "urn:visionflow:linked:interaction-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[PresentationLayer]]",
      "resolved": "urn:visionflow:linked:presentation-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensory Immersion]]",
      "resolved": "urn:visionflow:linked:sensory-immersion",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Engagement]]",
      "resolved": "urn:visionflow:linked:user-engagement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Fidelity]]",
      "resolved": "urn:visionflow:linked:visual-fidelity",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audio Spatialization]]",
      "resolved": "urn:visionflow:owl:class:audio-spatialization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Emotional Immersion]]",
      "resolved": "urn:visionflow:owl:class:emotional-immersion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Haptic Feedback]]",
      "resolved": "urn:visionflow:owl:class:haptic-feedback",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Presence]]",
      "resolved": "urn:visionflow:owl:class:presence",
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
  - Subjective experience of psychological engagement and sense of presence within a virtual environment, characterized by reduced awareness of physical surroundings and absorption in virtual context.
- ### Semantic Classification
  - owl-class:: spatial-computing:Immersion
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[ApplicationLayer]], [[PresentationLayer]]
- ### Relationships
  - has-part:: [[Sensory Immersion]], [[Emotional Immersion]], [[Cognitive Immersion]]
  - requires:: [[Display Technology]], [[Interaction Mechanism]], [[Content Quality]]
  - enables:: [[Presence]], [[Flow State]], [[User Engagement]]
  - depends-on:: [[Visual Fidelity]], [[Audio Spatialization]], [[Haptic Feedback]]
- ### Content
  Immersion — content pending enrichment.
- ### Provenance
  - sources:: [[ACM]]
  - migration-date:: 2026-04-26T00:00:00Z
