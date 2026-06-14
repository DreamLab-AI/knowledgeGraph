public:: true
alias:: CreativeAIDomain

# Creative AI Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c772c520703cdbaa63977484afb4df3142e83f23a871fbd16786921d18ac3bbd",
  "@type": "Page",
  "vc:slug": "creative-ai-domain",
  "title": "Creative AI Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computational-creativity",
      "vc:label": "Computational Creativity"
    },
    {
      "@id": "urn:visionflow:linked:style-transfer",
      "vc:label": "Style Transfer"
    },
    {
      "@id": "urn:visionflow:linked:generative-art",
      "vc:label": "Generative Art"
    },
    {
      "@id": "urn:visionflow:linked:music-generation",
      "vc:label": "Music Generation"
    },
    {
      "@id": "urn:visionflow:linked:co-creative-tools",
      "vc:label": "Co-Creative Tools"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai-domain",
      "vc:label": "Generative AI Domain"
    },
    {
      "@id": "urn:visionflow:linked:generative-modelling-domain",
      "vc:label": "Generative Modelling Domain"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics-domain",
      "vc:label": "Computer Graphics Domain"
    },
    {
      "@id": "urn:visionflow:linked:assisted-design",
      "vc:label": "Assisted Design"
    },
    {
      "@id": "urn:visionflow:linked:content-creation",
      "vc:label": "Content Creation"
    },
    {
      "@id": "urn:visionflow:linked:interactive-media",
      "vc:label": "Interactive Media"
    },
    {
      "@id": "urn:visionflow:linked:creative-media-domain",
      "vc:label": "Creative Media Domain"
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
      "vc:value": "Creative AI Domain"
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
  "@id": "urn:ngm:class:creative-ai-domain",
  "@type": "Class",
  "label": "Creative AI Domain",
  "definition": "The Creative AI Domain covers the application of artificial intelligence to artistic and design tasks across image, music, writing and interactive media. Its scope includes computational creativity, style transfer, generative art and human-machine co-creation. It is an applied sub-area of the Artificial Intelligence Domain that builds on generative methods. The boundary excludes the underlying model training, which belongs to the Generative Modelling Domain.",
  "domain": "ai",
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
        "@id": "urn:ngm:class:computational-creativity",
        "label": "Computational Creativity"
      },
      {
        "@id": "urn:ngm:class:style-transfer",
        "label": "Style Transfer"
      },
      {
        "@id": "urn:ngm:class:generative-art",
        "label": "Generative Art"
      },
      {
        "@id": "urn:ngm:class:music-generation",
        "label": "Music Generation"
      },
      {
        "@id": "urn:ngm:class:co-creative-tools",
        "label": "Co-Creative Tools"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:generative-ai-domain",
        "label": "Generative AI Domain"
      },
      {
        "@id": "urn:ngm:class:generative-modelling-domain",
        "label": "Generative Modelling Domain"
      },
      {
        "@id": "urn:ngm:class:computer-graphics-domain",
        "label": "Computer Graphics Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:assisted-design",
        "label": "Assisted Design"
      },
      {
        "@id": "urn:ngm:class:content-creation",
        "label": "Content Creation"
      },
      {
        "@id": "urn:ngm:class:interactive-media",
        "label": "Interactive Media"
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
  "@id": "urn:visionflow:annotation:link-resolutions:creative-ai-domain:f2de3c5e2f18",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c772c520703cdbaa63977484afb4df3142e83f23a871fbd16786921d18ac3bbd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computational Creativity]]",
      "resolved": "urn:visionflow:linked:computational-creativity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Style Transfer]]",
      "resolved": "urn:visionflow:linked:style-transfer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Art]]",
      "resolved": "urn:visionflow:linked:generative-art",
      "kind": "StubLink"
    },
    {
      "raw": "[[Music Generation]]",
      "resolved": "urn:visionflow:linked:music-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Co-Creative Tools]]",
      "resolved": "urn:visionflow:linked:co-creative-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Generative AI Domain]]",
      "resolved": "urn:visionflow:linked:generative-ai-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Modelling Domain]]",
      "resolved": "urn:visionflow:linked:generative-modelling-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics Domain]]",
      "resolved": "urn:visionflow:linked:computer-graphics-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Assisted Design]]",
      "resolved": "urn:visionflow:linked:assisted-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Creation]]",
      "resolved": "urn:visionflow:linked:content-creation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interactive Media]]",
      "resolved": "urn:visionflow:linked:interactive-media",
      "kind": "StubLink"
    },
    {
      "raw": "[[Creative Media Domain]]",
      "resolved": "urn:visionflow:linked:creative-media-domain",
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
  - The Creative AI Domain covers the application of artificial intelligence to artistic and design tasks across image, music, writing and interactive media. Its scope includes computational creativity, style transfer, generative art and human-machine co-creation. It is an applied sub-area of the Artificial Intelligence Domain that builds on generative methods. The boundary excludes the underlying model training, which belongs to the Generative Modelling Domain.

- ### Semantic Classification
  - owl-class:: crai:CreativeAIDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Creative Media Domain]], [[Generative AI Domain]], [[Computer Graphics Domain]]
  - has-part:: [[Computational Creativity]], [[Style Transfer]], [[Generative Art]], [[Music Generation]], [[Co-Creative Tools]]
  - requires:: [[Generative AI Domain]], [[Generative Modelling Domain]], [[Computer Graphics Domain]]
  - enables:: [[Assisted Design]], [[Content Creation]], [[Interactive Media]]

- ### Content
  - The Creative AI Domain concerns the use of artificial intelligence as a participant in creative production, supporting or co-authoring artistic and design artefacts. Its scope spans computational creativity as a field of study, applied techniques such as style transfer and generative art, and tools that place a human and a model in a shared authoring loop. The boundary is the creative application; training the generators that power these tools remains in the Generative Modelling Domain.
  - Member concepts include Computational Creativity, Style Transfer, Generative Art, Music Generation and Co-Creative Tools. These require the applied methods of the Generative AI Domain, the foundations of the Generative Modelling Domain and the rendering capabilities of the Computer Graphics Domain.
  - The domain bridges to the Creative Media Domain, with which it shares production workflows, to the Generative AI Domain for its model capabilities, and to the Computer Graphics Domain for visual output. It enables assisted design, content creation and interactive media experiences.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
