public:: true

# Constrained Decoding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f647becefd54a98e87cca6b8dc025d36ef62c8411bdcc03198e227b9f0abd6c2",
  "@type": "Page",
  "vc:slug": "constrained-decoding",
  "title": "Constrained Decoding",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:text-generation",
      "vc:label": "Text Generation"
    },
    {
      "@id": "urn:visionflow:linked:structured-output",
      "vc:label": "Structured Output"
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
  "@id": "urn:ngm:class:constrained-decoding",
  "@type": "Class",
  "label": "Constrained Decoding",
  "definition": "A family of inference-time techniques that restrict the token choices of a language model during generation so that output is guaranteed to satisfy formal constraints — a JSON schema, a context-free grammar, a regular expression, or required lexical content. At each decoding step the sampler masks tokens that would violate the constraint, typically by intersecting the model's next-token distribution with the valid transitions of a compiled automaton, yielding syntactically valid structured output without retraining the model.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:text-generation",
    "label": "Text Generation"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:structured-output",
        "label": "Structured Output"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:finite-state-machine",
        "label": "Finite State Machine"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
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
  - "A family of inference-time techniques that restrict the token choices of a language model during generation so that output is guaranteed to satisfy formal constraints — a JSON schema, a context-free grammar, a regular expression, or required lexical content. At each decoding step the sampler masks tokens that would violate the constraint, typically by intersecting the model's next-token distribution with the valid transitions of a compiled automaton, yielding syntactically valid structured output without retraining the model."

- ### Semantic Classification
  - owl-class:: machine-learning:ConstrainedDecoding
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Text Generation]]
  - enables:: [[Structured Output]]
  - uses:: [[Finite State Machine]]
  - related-to:: [[Beam Search]]

- ### Content

  ## Definition

  **Constrained decoding** modifies the token-by-token sampling loop of a language model so that every emitted sequence is, by construction, a member of a formally specified language. Instead of hoping a prompt persuades the model to produce valid JSON or SQL, the decoder compiles the constraint — a regular expression, JSON Schema, or context-free grammar — into an automaton, tracks the automaton state as tokens are emitted, and sets the logits of all invalid next tokens to negative infinity before [[Sampling]]. The model's probability mass is thereby renormalised over only the legal continuations.

  The approach has two main lineages. **Lexically constrained decoding** originated in machine translation, where variants of [[Beam Search]] (grid beam search, dynamic beam allocation) force required words or phrases to appear in the output. **Grammar-constrained decoding** is the modern LLM incarnation: libraries such as Outlines, XGrammar, llguidance, and llama.cpp's GBNF grammars compile schemas to token-level finite-state or pushdown automata, and inference engines like vLLM, TensorRT-LLM, and SGLang integrate them so masking adds negligible per-token latency. OpenAI's structured outputs mode and similar vendor features are productised grammar-constrained decoding.

  The key subtlety is the mismatch between characters and tokens: a byte-level constraint must be lifted to the model's subword vocabulary, since a single token may span a structural boundary (for example `",` closing a string and starting the next key). Efficient implementations precompute, for each automaton state, the exact set of vocabulary tokens that keep the sequence valid. A known limitation is distributional distortion — greedy masking guarantees validity but can push the model off its preferred phrasing, occasionally degrading semantic quality even as syntactic accuracy reaches 100%.

  ## Current Landscape

  - **Guaranteed-valid JSON** is now table stakes for LLM tool calling and agent frameworks; constrained decoding is what makes [[Structured Output]] reliable enough for machine-to-machine pipelines.
  - **Open-source stack**: Outlines (FSM-based regex/JSON), XGrammar (optimised CFG masking), llguidance, GBNF in llama.cpp; all major serving engines expose a grammar or schema parameter.
  - **Research directions**: minimising distribution shift (e.g. adaptive or approximate constraining), constrained decoding for code with type systems and static analysis in the loop, and combining constraints with speculative decoding without breaking draft-model acceptance.
  - **Trade-off in practice**: constraint compilation cost is paid once per schema; per-token overhead is microseconds, so the technique is effectively free at serving time compared with retry-and-repair approaches.
