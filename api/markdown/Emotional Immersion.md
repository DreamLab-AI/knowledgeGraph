public:: true

# Emotional Immersion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a0623ea82e575766323c07d268eaccbb70d3c8dad28e36f0acc96ad0c6a7ddb0",
  "@type": "Page",
  "vc:slug": "emotional-immersion",
  "title": "Emotional Immersion",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:acm",
      "vc:label": "ACM"
    },
    {
      "@id": "urn:visionflow:linked:affective-design",
      "vc:label": "Affective Design"
    },
    {
      "@id": "urn:visionflow:linked:audio-design",
      "vc:label": "Audio Design"
    },
    {
      "@id": "urn:visionflow:linked:emotional-resonance",
      "vc:label": "Emotional Resonance"
    },
    {
      "@id": "urn:visionflow:linked:empathetic-connection",
      "vc:label": "Empathetic Connection"
    },
    {
      "@id": "urn:visionflow:linked:interaction-design",
      "vc:label": "Interaction Design"
    },
    {
      "@id": "urn:visionflow:linked:presentation-layer",
      "vc:label": "PresentationLayer"
    },
    {
      "@id": "urn:visionflow:linked:sensory-feedback",
      "vc:label": "Sensory Feedback"
    },
    {
      "@id": "urn:visionflow:linked:story-engagement",
      "vc:label": "Story Engagement"
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
      "@id": "urn:visionflow:owl:class:immersion",
      "vc:label": "Immersion"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:narrative-content",
      "vc:label": "Narrative Content"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20254"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Emotional Immersion"
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
  "@id": "urn:ngm:class:emotional-immersion",
  "@type": "Class",
  "label": "Emotional Immersion",
  "definition": "Psychological absorption and empathetic engagement experienced during virtual interaction, characterized by affective resonance with virtual content and reduced awareness of physical surroundings.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:immersion",
      "label": "Immersion"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:affective-design",
        "label": "Affective Design"
      },
      {
        "@id": "urn:ngm:class:sensory-feedback",
        "label": "Sensory Feedback"
      },
      {
        "@id": "urn:ngm:class:narrative-content",
        "label": "Narrative Content"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:emotional-resonance",
        "label": "Emotional Resonance"
      },
      {
        "@id": "urn:ngm:class:empathetic-connection",
        "label": "Empathetic Connection"
      },
      {
        "@id": "urn:ngm:class:story-engagement",
        "label": "Story Engagement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:user-engagement",
        "label": "User Engagement"
      },
      {
        "@id": "urn:ngm:class:immersion",
        "label": "Immersion"
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
  "@id": "urn:visionflow:annotation:link-resolutions:emotional-immersion:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a0623ea82e575766323c07d268eaccbb70d3c8dad28e36f0acc96ad0c6a7ddb0"
  },
  "vc:resolutions": [
    {
      "raw": "[[ACM]]",
      "resolved": "urn:visionflow:linked:acm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Affective Design]]",
      "resolved": "urn:visionflow:linked:affective-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audio Design]]",
      "resolved": "urn:visionflow:linked:audio-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emotional Resonance]]",
      "resolved": "urn:visionflow:linked:emotional-resonance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Empathetic Connection]]",
      "resolved": "urn:visionflow:linked:empathetic-connection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interaction Design]]",
      "resolved": "urn:visionflow:linked:interaction-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[PresentationLayer]]",
      "resolved": "urn:visionflow:linked:presentation-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensory Feedback]]",
      "resolved": "urn:visionflow:linked:sensory-feedback",
      "kind": "StubLink"
    },
    {
      "raw": "[[Story Engagement]]",
      "resolved": "urn:visionflow:linked:story-engagement",
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
      "raw": "[[Immersion]]",
      "resolved": "urn:visionflow:owl:class:immersion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Narrative Content]]",
      "resolved": "urn:visionflow:owl:class:narrative-content",
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
  - Psychological absorption and empathetic engagement experienced during virtual interaction, characterized by affective resonance with virtual content and reduced awareness of physical surroundings.

- ### Semantic Classification
  - owl-class:: spatial-computing:EmotionalImmersion
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[ApplicationLayer]], [[PresentationLayer]]

- ### Relationships
  - is-part-of:: [[Immersion]], [[User Engagement]]
  - requires:: [[Narrative Content]], [[Affective Design]], [[Sensory Feedback]]
  - enables:: [[Empathetic Connection]], [[Emotional Resonance]], [[Story Engagement]]
  - depends-on:: [[Visual Fidelity]], [[Audio Design]], [[Interaction Design]]

- ### Content
  Emotional Immersion — content pending enrichment.

- ### Provenance
  - sources:: [[ACM]]
  - migration-date:: 2026-04-26T00:00:00Z
