public:: true
alias:: AIGroundedDomain

# AI Grounded Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7023fbb7d59565edac0580ea1b0eb6167b3ebde504403a422f81ac190ba452f4",
  "@type": "Page",
  "vc:slug": "ai-grounded-domain",
  "title": "AI Grounded Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:symbol-grounding",
      "vc:label": "Symbol Grounding"
    },
    {
      "@id": "urn:visionflow:linked:multimodal-grounding",
      "vc:label": "Multimodal Grounding"
    },
    {
      "@id": "urn:visionflow:linked:provenance-tracking",
      "vc:label": "Provenance Tracking"
    },
    {
      "@id": "urn:visionflow:linked:source-attribution",
      "vc:label": "Source Attribution"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation-domain",
      "vc:label": "Knowledge Representation Domain"
    },
    {
      "@id": "urn:visionflow:linked:information-retrieval-domain",
      "vc:label": "Information Retrieval Domain"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision-domain",
      "vc:label": "Computer Vision Domain"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-generation",
      "vc:label": "Verifiable Generation"
    },
    {
      "@id": "urn:visionflow:linked:hallucination-reduction",
      "vc:label": "Hallucination Reduction"
    },
    {
      "@id": "urn:visionflow:linked:context-aware-reasoning",
      "vc:label": "Context-Aware Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety-domain",
      "vc:label": "AI Safety Domain"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai-domain",
      "vc:label": "Generative AI Domain"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Grounded Domain"
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
  "@id": "urn:ngm:class:ai-grounded-domain",
  "@type": "Class",
  "label": "AI Grounded Domain",
  "definition": "The AI Grounded Domain covers the connection of model representations and outputs to verifiable external referents such as sensor data, documents and physical context. Its scope includes grounding language in perception, citation and provenance, and the alignment of generated claims with sources of truth. It is a sub-area of the Artificial Intelligence Domain concerned with factual and perceptual grounding. The boundary excludes ungrounded generative behaviour, which is treated under the Generative AI Domain.",
  "domain": "ai-grounded",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence-domain",
      "label": "Artificial Intelligence Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:symbol-grounding",
        "label": "Symbol Grounding"
      },
      {
        "@id": "urn:ngm:class:multimodal-ai-architecture-grounding",
        "label": "Multimodal Grounding"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      },
      {
        "@id": "urn:ngm:class:source-attribution",
        "label": "Source Attribution"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation-domain",
        "label": "Knowledge Representation Domain"
      },
      {
        "@id": "urn:ngm:class:information-retrieval-domain",
        "label": "Information Retrieval Domain"
      },
      {
        "@id": "urn:ngm:class:computer-vision-domain",
        "label": "Computer Vision Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-generation",
        "label": "Verifiable Generation"
      },
      {
        "@id": "urn:ngm:class:hallucination-reduction",
        "label": "Hallucination Reduction"
      },
      {
        "@id": "urn:ngm:class:context-aware-reasoning",
        "label": "Context-Aware Reasoning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-grounded-domain:57bdcf1e6485",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7023fbb7d59565edac0580ea1b0eb6167b3ebde504403a422f81ac190ba452f4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Symbol Grounding]]",
      "resolved": "urn:visionflow:linked:symbol-grounding",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multimodal Grounding]]",
      "resolved": "urn:visionflow:linked:multimodal-grounding",
      "kind": "StubLink"
    },
    {
      "raw": "[[Provenance Tracking]]",
      "resolved": "urn:visionflow:linked:provenance-tracking",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Source Attribution]]",
      "resolved": "urn:visionflow:linked:source-attribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation Domain]]",
      "resolved": "urn:visionflow:linked:knowledge-representation-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Retrieval Domain]]",
      "resolved": "urn:visionflow:linked:information-retrieval-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision Domain]]",
      "resolved": "urn:visionflow:linked:computer-vision-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Generation]]",
      "resolved": "urn:visionflow:linked:verifiable-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hallucination Reduction]]",
      "resolved": "urn:visionflow:linked:hallucination-reduction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Context-Aware Reasoning]]",
      "resolved": "urn:visionflow:linked:context-aware-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Safety Domain]]",
      "resolved": "urn:visionflow:linked:ai-safety-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Generative AI Domain]]",
      "resolved": "urn:visionflow:linked:generative-ai-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
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
  - The AI Grounded Domain covers the connection of model representations and outputs to verifiable external referents such as sensor data, documents and physical context. Its scope includes grounding language in perception, citation and provenance, and the alignment of generated claims with sources of truth. It is a sub-area of the Artificial Intelligence Domain concerned with factual and perceptual grounding. The boundary excludes ungrounded generative behaviour, which is treated under the Generative AI Domain.

- ### Semantic Classification
  - owl-class:: aigrd:AIGroundedDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[AI Safety Domain]], [[Generative AI Domain]], [[Knowledge Representation Domain]]
  - has-part:: [[Symbol Grounding]], [[Multimodal Grounding]], [[Provenance Tracking]], [[Source Attribution]], [[Sensor Fusion]]
  - requires:: [[Knowledge Representation Domain]], [[Information Retrieval Domain]], [[Computer Vision Domain]]
  - enables:: [[Verifiable Generation]], [[Hallucination Reduction]], [[Context-Aware Reasoning]]

- ### Content
  - The AI Grounded Domain concerns the linkage between a system's internal representations and the external world they purport to describe. Its scope includes symbol grounding that ties tokens to referents, multimodal grounding that aligns language with perception, and provenance mechanisms that trace outputs back to sources. The boundary separates grounded behaviour from free generation, so a model that cites and verifies belongs here while one that generates without reference does not.
  - Member concepts include Symbol Grounding, Multimodal Grounding, Provenance Tracking, Source Attribution and Sensor Fusion. These rely on the Knowledge Representation Domain for structured referents, the Information Retrieval Domain for source access and the Computer Vision Domain for perceptual anchors.
  - The domain bridges to the AI Safety Domain, since grounding reduces fabricated claims, to the Generative AI Domain where retrieval augmentation supplies evidence, and to knowledge representation for the symbolic targets of grounding. It enables verifiable generation, reduction of hallucination and reasoning that respects context.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
