public:: true

# Sequence Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdf532fb18386465ce3422fda1b56ccdbeb158baf97c1999801b8b05ed9287df",
  "@type": "Page",
  "vc:slug": "sequence-model",
  "title": "Sequence Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning-model",
      "vc:label": "Machine Learning Model"
    },
    {
      "@id": "urn:visionflow:linked:hidden-markov-model",
      "vc:label": "Hidden Markov Model"
    },
    {
      "@id": "urn:visionflow:linked:recurrent-neural-network",
      "vc:label": "Recurrent Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:beam-search",
      "vc:label": "Beam Search"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sequence-model",
  "@type": "Class",
  "label": "Sequence Model",
  "definition": "Any machine learning model that captures dependencies across ordered data — text, speech, video frames, genomic strings, time series — by assigning probabilities to sequences or mapping input sequences to outputs; the family spans n-gram models and hidden Markov models through recurrent networks (LSTM, GRU) to transformers and modern state space models, and underlies language modelling, speech recognition, machine translation and time-series forecasting.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:machine-learning-model",
    "label": "Machine Learning Model"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hidden-markov-model",
        "label": "Hidden Markov Model"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:state-space-model",
        "label": "State Space Model"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Any machine learning model that captures dependencies across ordered data — text, speech, video frames, genomic strings, time series — by assigning probabilities to sequences or mapping input sequences to outputs; the family spans n-gram models and hidden Markov models through recurrent networks (LSTM, GRU) to transformers and modern state space models, and underlies language modelling, speech recognition, machine translation and time-series forecasting."

- ### Semantic Classification
  - owl-class:: machine-learning:SequenceModel
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Machine Learning Model (Artefact)]]
  - uses:: [[Beam Search]]
  - related-to:: [[Hidden Markov Model]]
  - related-to:: [[Recurrent Neural Network]]

- ### Content

  ## Definition

  A **sequence model** treats its data as ordered: the probability or meaning of an element depends on what came before (and sometimes after) it. Formally, generative sequence models factorise the joint probability of a sequence autoregressively, P(x₁…xₙ) = ∏ P(xᵢ | x₁…xᵢ₋₁), and differ in how much of that history they can actually condition on. Classical n-gram models truncate the context to a fixed window; the [[Hidden Markov Model]] posits a latent state chain that emits observations, giving tractable inference via the forward-backward and Viterbi algorithms and powering a generation of speech recognisers and part-of-speech taggers.

  Neural sequence models removed the fixed-context limitation. The [[Recurrent Neural Network]] threads a hidden state through time, with LSTM and GRU gating mitigating vanishing gradients; sequence-to-sequence architectures paired an encoder with a decoder to map between sequences of different lengths, and the attention mechanism developed for them led directly to the [[Transformer]], which replaced recurrence entirely with self-attention and now dominates the field as the substrate of large language models. A newer branch revives the continuous [[State Space Model]] in selective, hardware-efficient form (S4, Mamba), offering linear-time inference over very long sequences. Across all of these, decoding structured outputs at inference time typically relies on [[Beam Search]] or sampling strategies over the model's next-token distribution.

  In this graph, sequence model is the abstract parent that acoustic models, language models and translation systems specialise: any component that consumes or emits ordered symbols instantiates it.

  ## Technical Details

  Sequence modelling tasks come in canonical shapes: sequence classification (sentiment), sequence labelling (named-entity recognition, one output per input step), sequence transduction (translation, speech-to-text) and unconditional or conditional generation (language modelling). Training objectives are usually next-step prediction under teacher forcing or, for alignment-free transduction such as speech recognition, connectionist temporal classification (CTC). The trade-offs between families are concrete: HMMs offer interpretable latent structure but weak expressiveness; RNNs process tokens serially, limiting training parallelism; transformers train in parallel but pay quadratic attention cost in sequence length, motivating long-context research and the linear-time state-space alternatives. Evaluation is task-specific — perplexity for language models, word error rate for speech, BLEU and its successors for translation.
