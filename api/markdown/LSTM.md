public:: true

# LSTM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:caf093f3e42aba22123f02e29363cae01d81d847ca2d308cff33ca53b9235955",
  "@type": "Page",
  "vc:slug": "lstm",
  "title": "LSTM",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:speech-recognition",
      "vc:label": "Speech Recognition"
    },
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:recurrent-neural-network",
      "vc:label": "Recurrent Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "LSTM"
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
  "@id": "urn:ngm:class:lstm",
  "@type": "Class",
  "label": "LSTM",
  "definition": "Long short-term memory: a recurrent neural network architecture that uses gating mechanisms and a memory cell to learn long-range dependencies and mitigate the vanishing gradient problem.",
  "domain": "deep-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:recurrent-neural-network",
      "label": "Recurrent Neural Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lstm:9247369ab1f2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:caf093f3e42aba22123f02e29363cae01d81d847ca2d308cff33ca53b9235955"
  },
  "vc:resolutions": [
    {
      "raw": "[[Backpropagation]]",
      "resolved": "urn:visionflow:linked:backpropagation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Speech Recognition]]",
      "resolved": "urn:visionflow:linked:speech-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Recurrent Neural Network]]",
      "resolved": "urn:visionflow:linked:recurrent-neural-network",
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
  - Long short-term memory: a recurrent neural network architecture that uses gating mechanisms and a memory cell to learn long-range dependencies and mitigate the vanishing gradient problem.

- ### Semantic Classification
  - owl-class:: deep-learning:LSTM
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Recurrent Neural Network]]
  - bridges-to:: [[Transformer]]
  - requires:: [[Backpropagation]]
  - enables:: [[Speech Recognition]]

- ### Content
  - An LSTM cell maintains a cell state that runs through time with minimal interference, regulated by input, forget and output gates. The gates control how much new information enters the state, how much old information is retained and how much of the state is exposed as output.
  - This design allows gradients to propagate over many time steps, which standard recurrent networks struggle to do. LSTMs were dominant for sequence tasks such as language modelling, speech recognition and machine translation before transformers became the prevailing architecture for long sequences.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
