public:: true

# WaveNet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3b9f47699743c29fbce0ef27a83b430c4c2dadce6dc8e1fa8d4b4afe24c66ce3",
  "@type": "Page",
  "vc:slug": "wave-net",
  "title": "WaveNet",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:convolution",
      "vc:label": "Convolution"
    },
    {
      "@id": "urn:visionflow:linked:autoregressive-model",
      "vc:label": "Autoregressive Model"
    },
    {
      "@id": "urn:visionflow:linked:text-to-speech",
      "vc:label": "Text-to-Speech"
    },
    {
      "@id": "urn:visionflow:linked:speech-recognition",
      "vc:label": "Speech Recognition"
    },
    {
      "@id": "urn:visionflow:linked:convolutional-neural-network",
      "vc:label": "Convolutional Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "WaveNet"
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
  "@id": "urn:ngm:class:wave-net",
  "@type": "Class",
  "label": "WaveNet",
  "definition": "A deep autoregressive neural network for generating raw audio waveforms one sample at a time, using stacks of dilated causal convolutions.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:convolutional-neural-network",
      "label": "Convolutional Neural Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:convolution",
        "label": "Convolution"
      },
      {
        "@id": "urn:ngm:class:autoregressive-model",
        "label": "Autoregressive Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:text-to-speech",
        "label": "Text-to-Speech"
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
  "@id": "urn:visionflow:annotation:link-resolutions:wave-net:5cbb49c4f9ce",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3b9f47699743c29fbce0ef27a83b430c4c2dadce6dc8e1fa8d4b4afe24c66ce3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Convolution]]",
      "resolved": "urn:visionflow:linked:convolution",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autoregressive Model]]",
      "resolved": "urn:visionflow:linked:autoregressive-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Text-to-Speech]]",
      "resolved": "urn:visionflow:linked:text-to-speech",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Speech Recognition]]",
      "resolved": "urn:visionflow:linked:speech-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Convolutional Neural Network]]",
      "resolved": "urn:visionflow:linked:convolutional-neural-network",
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
  - A deep autoregressive neural network for generating raw audio waveforms one sample at a time, using stacks of dilated causal convolutions.

- ### Semantic Classification
  - owl-class:: deep-learning:WaveNet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Convolutional Neural Network]]
  - bridges-to:: [[Speech Recognition]]
  - requires:: [[Convolution]], [[Autoregressive Model]]
  - enables:: [[Text-to-Speech]]

- ### Content
  - WaveNet models the conditional distribution of each audio sample given previous samples. It uses dilated causal convolutions so that the receptive field grows exponentially with depth, capturing long temporal structure while keeping the model trainable.
  - Introduced by DeepMind in 2016, WaveNet produced markedly more natural speech synthesis than earlier concatenative and parametric methods. Its original sample-by-sample generation was slow, which prompted later distilled and parallel variants for real-time text-to-speech.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
