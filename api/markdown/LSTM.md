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
  "definition": "Long Short-Term Memory (LSTM) is a specialised recurrent neural network architecture introduced by Hochreiter and Schmidhuber in 1997, designed to learn long-range temporal dependencies in sequential data. It employs a gated cell state mechanism—comprising input, forget, and output gates—that allows gradients to flow across many time steps without vanishing or exploding, overcoming the principal failure mode of vanilla recurrent neural networks. LSTMs encode contextual information in a learnable cell state that persists across sequence steps, making them highly effective for variable-length sequence modelling tasks such as language modelling, machine translation, and time-series forecasting. Although largely superseded by Transformer-based architectures for many NLP tasks, LSTMs remain widely deployed in low-latency, resource-constrained, and streaming scenarios.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:recurrent-neural-network",
      "label": "Recurrent Neural Network"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:forget-gate",
        "label": "Forget Gate"
      },
      {
        "@id": "urn:ngm:class:input-gate",
        "label": "Input Gate"
      },
      {
        "@id": "urn:ngm:class:output-gate",
        "label": "Output Gate"
      },
      {
        "@id": "urn:ngm:class:cell-state",
        "label": "Cell State"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:sequence-modelling",
        "label": "Sequence Modelling"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:backpropagation-through-time",
        "label": "Backpropagation Through Time"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:machine-translation",
        "label": "Machine Translation"
      },
      {
        "@id": "urn:ngm:class:language-modelling",
        "label": "Language Modelling"
      },
      {
        "@id": "urn:ngm:class:time-series-forecasting",
        "label": "Time-Series Forecasting"
      },
      {
        "@id": "urn:ngm:class:handwriting-recognition",
        "label": "Handwriting Recognition"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sigmoid-activation",
        "label": "Sigmoid Activation"
      },
      {
        "@id": "urn:ngm:class:tanh-activation",
        "label": "Tanh Activation"
      },
      {
        "@id": "urn:ngm:class:dropout-regularisation",
        "label": "Dropout Regularisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:gated-recurrent-unit",
        "label": "Gated Recurrent Unit"
      },
      {
        "@id": "urn:ngm:class:vanilla-rnn",
        "label": "Vanilla RNN"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:encoder-decoder",
        "label": "Encoder-Decoder"
      },
      {
        "@id": "urn:ngm:class:vanishing-gradient-problem",
        "label": "Vanishing Gradient Problem"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge Inference"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:long-short-term-memory",
      "label": "Long Short-Term Memory"
    }
  ],
  "quality": 0.75,
  "qualityScore": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
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
  - Long Short-Term Memory (LSTM) is a gated [[Recurrent Neural Network]] architecture designed to learn and retain long-range dependencies in sequential data. Introduced by Hochreiter and Schmidhuber in 1997, it addresses the [[Vanishing Gradient Problem]] that prevents standard RNNs from propagating useful gradients across many time steps. LSTM cells maintain a persistent [[Cell State]] regulated by three learned gates—forget, input, and output—enabling selective retention and exposure of information across arbitrarily long sequences. The architecture became the dominant approach for [[Sequence Modelling]] tasks throughout the 2010s and remains widely used in production systems requiring low-latency or streaming inference.

- ### Overview
  - **What it is**: An LSTM is a type of [[Recurrent Neural Network]] cell augmented with explicit gating logic and a dedicated memory pathway (the cell state) that flows through time with controlled interference.
  - **Why it matters**: Before LSTMs, training RNNs on long sequences was impractical because gradients either vanished (network failed to learn) or exploded (training diverged). LSTMs enabled practical [[Deep Learning]] on variable-length sequences, unlocking breakthroughs in [[Speech Recognition]], [[Machine Translation]], and [[Language Modelling]].
  - **How it works**: At each time step the cell receives the current input and the previous hidden state. The three gates—implemented as sigmoid-activated linear transformations—compute scalars that modulate: (1) how much of the old cell state to forget, (2) how much new candidate information to write, and (3) how much of the updated cell state to expose as the hidden state output. The cell state update uses additive composition rather than multiplicative stacking, preserving gradient signal.
  - **Historical context**: LSTMs dominated [[Natural Language Processing]] benchmarks from roughly 2013–2017. The introduction of the [[Attention Mechanism]] and subsequently the [[Transformer]] architecture shifted the field for tasks with abundant compute, but LSTMs retained advantages in on-device, streaming, and real-time applications.

- ### Key Components
  - **Forget Gate**
    - Reads concatenated previous hidden state and current input through a sigmoid layer.
    - Outputs values in (0,1) that multiplicatively gate the previous [[Cell State]]—values near zero discard information, values near one retain it.
  - **Input Gate**
    - A sigmoid layer decides which cell state positions to update.
    - A [[Tanh Activation]] layer produces candidate values in (-1,1) to potentially write.
    - The two are multiplied element-wise and added to the gated old state.
  - **Cell State**
    - The key innovation: a vector that flows through time steps with only additive updates, keeping gradients alive across hundreds of steps.
    - Distinct from the hidden state; acts as long-term working memory.
  - **Output Gate**
    - A sigmoid layer determines what portion of the updated cell state to expose.
    - The cell state is squashed through [[Tanh Activation]] and multiplied by the output gate to produce the new hidden state.
  - **Hidden State**
    - The short-term output of the cell, passed to the next time step and used as the prediction signal at each position.
  - **Peephole Connections** (optional variant)
    - Allow gates to observe the cell state directly, not just the hidden state, improving timing precision for tasks like speech.
  - **Bidirectional LSTM**
    - Two LSTM layers process the sequence in forward and reverse order; their hidden states are concatenated, providing full-context representations for classification and tagging tasks.
  - **Stacked (Deep) LSTM**
    - Multiple LSTM layers where the hidden state of layer n feeds the input of layer n+1, building hierarchical representations.

- ### Mechanisms
  - **Backpropagation Through Time (BPTT)**
    - [[Backpropagation Through Time]] unfolds the recurrent computation graph across time steps and computes gradients via the standard chain rule.
    - The additive cell state update in LSTMs creates a near-constant error carousel, substantially reducing gradient attenuation compared to standard RNNs.
  - **Gradient Clipping**
    - Because BPTT can still produce gradient explosions on very deep unrolled graphs, [[Gradient Descent]] optimisers clip gradient norms to a threshold at training time.
  - **Dropout Regularisation**
    - [[Dropout Regularisation]] applied to non-recurrent connections (Gal and Ghahramani variational dropout) is the standard regularisation strategy; naive dropout on recurrent connections disrupts memory.
  - **Weight Initialisation**
    - Forget gate biases initialised to 1 (rather than 0) ensure the model starts by retaining most past information, improving early convergence on long sequences.
  - **Truncated BPTT**
    - For very long sequences, gradients are computed only over a fixed window of steps at a time, reducing memory cost while retaining most learning signal.

- ### Applications / Use Cases
  - **Speech Recognition**
    - [[Speech Recognition]] systems such as early Google Voice Search, Apple Siri, and Amazon Alexa used deep bidirectional LSTMs to map audio feature frames to phoneme or word sequences.
  - **Machine Translation**
    - Early neural machine translation systems (2014–2016) paired LSTM [[Encoder-Decoder]] stacks with [[Attention Mechanism]] to produce competitive translations before Transformers took over.
  - **Language Modelling**
    - [[Language Modelling]] for input prediction, spell checking, and early chat systems relied on character- or word-level LSTMs trained on large corpora.
  - **Time-Series Forecasting**
    - [[Time-Series Forecasting]] in financial modelling, energy load prediction, and IoT sensor streams frequently uses LSTMs due to their explicit recurrence and compact parameter counts.
  - **Handwriting Recognition**
    - [[Handwriting Recognition]] via Connectionist Temporal Classification (CTC) loss combined with bidirectional LSTMs was a landmark result, enabling end-to-end text reading from pen strokes.
  - **Music Generation**
    - Generative music systems trained LSTMs on MIDI sequences to produce stylistically consistent melodies.
  - **Anomaly Detection**
    - [[Anomaly Detection]] in network traffic, manufacturing sensor data, and medical monitoring encodes normal sequence patterns in an LSTM and flags deviations via reconstruction error.
  - **Edge Inference**
    - [[Edge Inference]] on microcontrollers and embedded DSPs uses quantised LSTM cells for keyword spotting (e.g., wake-word detection) where Transformer memory footprint is prohibitive.
  - **Video Captioning and Activity Recognition**
    - LSTMs consumed frame-level CNN features to generate captions or classify activities, forming the temporal modelling backbone before attention-augmented and purely convolutional approaches matured.

- ### Relationships
  - subClassOf:: [[Recurrent Neural Network]]
  - hasPart:: [[Forget Gate]]
  - hasPart:: [[Input Gate]]
  - hasPart:: [[Output Gate]]
  - hasPart:: [[Cell State]]
  - partOf:: [[Deep Learning]]
  - partOf:: [[Sequence Modelling]]
  - requires:: [[Backpropagation]]
  - requires:: [[Backpropagation Through Time]]
  - requires:: [[Gradient Descent]]
  - enables:: [[Speech Recognition]]
  - enables:: [[Machine Translation]]
  - enables:: [[Language Modelling]]
  - enables:: [[Time-Series Forecasting]]
  - enables:: [[Handwriting Recognition]]
  - uses:: [[Sigmoid Activation]]
  - uses:: [[Tanh Activation]]
  - uses:: [[Dropout Regularisation]]
  - contrastsWith:: [[Transformer]]
  - contrastsWith:: [[Gated Recurrent Unit]]
  - contrastsWith:: [[Vanilla RNN]]
  - relatedTo:: [[Attention Mechanism]]
  - relatedTo:: [[Encoder-Decoder]]
  - relatedTo:: [[Vanishing Gradient Problem]]
  - relatedTo:: [[Natural Language Processing]]
  - bridges-to:: [[Anomaly Detection]]
  - bridges-to:: [[Edge Inference]]

- ### Standards & Context
  - **Original Publication**: Hochreiter, S. and Schmidhuber, J. (1997). "Long short-term memory." *Neural Computation* 9(8): 1735–1780. This remains one of the most-cited papers in [[Deep Learning]] research.
  - **Peephole Connections**: Gers and Schmidhuber (2000) extended the standard LSTM with peephole connections and proposed the forget gate (the original 1997 paper did not include one).
  - **Dropout for RNNs**: Variational dropout applied consistently across time steps (Gal and Ghahramani, 2016) became the standard regularisation practice for production LSTM systems.
  - **CTC Loss**: The Connectionist Temporal Classification objective enables LSTM-based models to handle unsegmented sequence-to-sequence tasks without requiring explicit alignment, widely used in [[Speech Recognition]] and [[Handwriting Recognition]].
  - **Framework Support**: All major [[Deep Learning]] frameworks—TensorFlow, PyTorch, JAX/Flax, and ONNX—provide optimised LSTM primitives with cuDNN acceleration on GPU, ensuring broad deployment compatibility.
  - **Quantisation Standards**: TensorFlow Lite and ONNX Runtime support 8-bit integer quantisation of LSTM weights and activations for [[Edge Inference]], governed by the respective framework quantisation specifications.
  - **Relationship to GRU**: The [[Gated Recurrent Unit]] (Cho et al., 2014) is a simplified LSTM variant merging the cell and hidden states and combining the forget and input gates, offering comparable performance with fewer parameters on many tasks.
  - **Successor Architectures**: The [[Transformer]] (Vaswani et al., 2017) and derivative architectures (BERT, GPT series) largely displaced LSTMs for offline NLP tasks by enabling parallelised training over long contexts via [[Attention Mechanism]]. Hybrid models (e.g., xLSTM) revisit LSTM principles at scale.

- ### Provenance
  - sources:: Hochreiter & Schmidhuber 1997; Gers & Schmidhuber 2000; Cho et al. 2014 (GRU); Graves et al. 2013 (speech CTC); Gal & Ghahramani 2016 (variational dropout)
  - updated:: 2026-06-13
