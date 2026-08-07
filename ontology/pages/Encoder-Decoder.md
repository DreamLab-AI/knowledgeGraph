public:: true

# Encoder-Decoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:70bd17f03c822536cb45225cae07a52a9835d57e1d663731c6a433710f85dcaa",
  "@type": "Page",
  "vc:slug": "encoder-decoder",
  "title": "Encoder-Decoder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:attention-mechanism",
      "vc:label": "Attention Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:machine-translation",
      "vc:label": "Machine Translation"
    },
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:sequence-to-sequence-learning",
      "vc:label": "Sequence To Sequence Learning"
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
  "@id": "urn:ngm:class:encoder-decoder",
  "@type": "Class",
  "label": "Encoder-Decoder",
  "definition": "The encoder-decoder is a neural network architecture pattern in which an encoder maps a variable-length input into an intermediate representation and a decoder generates a variable-length output conditioned on that representation. It underpins sequence-to-sequence learning for machine translation, speech recognition, and speech synthesis, and appears in both recurrent and transformer instantiations, usually augmented with an attention mechanism so the decoder can consult the full encoded input at every generation step rather than a single fixed-size vector.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:neural-network",
    "label": "Neural Network"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:acoustic-model",
        "label": "Acoustic Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:machine-translation",
        "label": "Machine Translation"
      },
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
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
  - "The encoder-decoder is a neural network architecture pattern in which an encoder maps a variable-length input into an intermediate representation and a decoder generates a variable-length output conditioned on that representation. It underpins sequence-to-sequence learning for machine translation, speech recognition, and speech synthesis, and appears in both recurrent and transformer instantiations, usually augmented with an attention mechanism so the decoder can consult the full encoded input at every generation step rather than a single fixed-size vector."

- ### Semantic Classification
  - owl-class:: machine-learning:EncoderDecoder
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Neural Network]]
  - uses:: [[Attention Mechanism]]
  - enables:: [[Machine Translation]]
  - related-to:: [[Transformer]]

- ### Content

  ## Definition

  The **encoder-decoder** architecture solves a structural mismatch: many tasks map an input of one length and modality to an output of a different length and modality — an English sentence to a French one, an audio waveform to a character sequence, a text prompt to a spectrogram. The pattern splits the network into two halves. The *encoder* consumes the entire input and produces a representation of it; the *decoder* then generates the output step by step, each step conditioned on the encoded input and on what it has generated so far (autoregressive decoding, trained with teacher forcing).

  The original formulation (Sutskever et al. and Cho et al., 2014) used recurrent networks and compressed the whole input into a single fixed-size context vector — a bottleneck that degraded quality on long inputs. Bahdanau et al. (2015) removed the bottleneck with the [[Attention Mechanism]], letting the decoder compute a weighted view over all encoder states at every output step. The [[Transformer]] (2017) made attention the entire mechanism, and its encoder-decoder form remains the standard for [[Machine Translation]] (and models such as T5 and Whisper), while encoder-only (BERT) and decoder-only (GPT) variants specialise the pattern for understanding and open-ended generation respectively.

  Beyond text, the pattern is ubiquitous: [[Sequence To Sequence Learning]] in speech recognition (audio encoder, text decoder), text-to-speech acoustic models such as Tacotron 2 (text encoder, spectrogram decoder), image captioning (vision encoder, language decoder), and U-Net-style segmentation networks, which are encoder-decoders over spatial resolution rather than sequence length.

  ## Technical Details

  - **Information flow**: decoder attends to encoder outputs via cross-attention; in recurrent variants the encoder's final hidden state (or attention-weighted mixture) initialises or conditions the decoder.
  - **Training**: maximum-likelihood next-token prediction with teacher forcing; the discrepancy between training (ground-truth history) and inference (own predictions) is exposure bias, mitigated by scheduled sampling or sequence-level objectives.
  - **Decoding strategies**: greedy search, beam search for quality-critical tasks such as translation, and sampling with temperature/nucleus truncation for diverse generation.
  - **Architectural trade-off**: encoder-decoder models process input bidirectionally and are efficient when input and output are distinct; decoder-only models unify both in one causal stream, which scales more simply and dominates modern large language models.
