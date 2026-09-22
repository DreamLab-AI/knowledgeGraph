public:: true

# Autoregressive Generation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:autoregressive-generation", "@type":"Page", "title":"Autoregressive Generation", "vc:slug":"autoregressive-generation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:autoregressive-generation",
  "@type":"Class",
  "label":"Autoregressive Generation",
  "definition":"Autoregressive generation is a sequence-modelling approach in which each output element is produced conditioned on all previously generated elements, factorising the joint probability of a sequence into a product of conditional next-element distributions. In language models it manifests as repeated next-token prediction, where the model samples or selects a token, appends it to the context, and repeats. This left-to-right dependency is the dominant decoding paradigm for large language models and underlies generative text, code, and other ordered outputs.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:generative-ai","label":"Generative AI"}],
  "relations":{
    "dependsOn":[{"@id":"urn:ngm:class:language-model","label":"Language Model"}],
    "uses":[{"@id":"urn:ngm:class:transformer","label":"Transformer"},{"@id":"urn:ngm:class:sampling","label":"Sampling"},{"@id":"urn:ngm:class:beam-search","label":"Beam Search"}],
    "hasPart":[{"@id":"urn:ngm:class:token","label":"Token"},{"@id":"urn:ngm:class:decoder","label":"Decoder"}],
    "supports":[{"@id":"urn:ngm:class:text-generation","label":"Text Generation"},{"@id":"urn:ngm:class:natural-language-generation","label":"Natural Language Generation"}],
    "enables":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"}],
    "requires":[{"@id":"urn:ngm:class:inference","label":"Inference"}],
    "implements":[{"@id":"urn:ngm:class:generative-ai","label":"Generative AI"}],
    "bridgesTo":[{"@id":"urn:ngm:class:attention-mechanism","label":"Attention Mechanism"}],
    "relatedTo":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},{"@id":"urn:ngm:class:inference","label":"Inference"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Autoregressive generation produces a sequence one element at a time, each conditioned on the elements before it. In [[Language Model|language models]] it is repeated next-token prediction over a [[Transformer]] [[Decoder]], yielding [[Text Generation]] and other ordered outputs.
- ### Overview
- The approach factorises the probability of a whole sequence into a chain of conditional distributions, each predicting the next element given the preceding context.
- At generation time the model emits one element, appends it to the running context, and feeds the extended context back to predict the following element, repeating until a stopping condition.
- This left-to-right dependency captures long-range structure but makes generation inherently sequential, which shapes the latency and throughput characteristics of inference.
- ### Mechanisms
- Causal masking in attention ensures each position can only attend to earlier positions, enforcing the autoregressive factorisation during both training and inference.
- Decoding strategies select the next token from the predicted distribution, ranging from greedy and beam search to stochastic sampling with temperature and nucleus controls.
- Key-value caching reuses computation across steps so that only the newest token's representation is computed at each iteration.
- The same paradigm generalises beyond text to code, audio tokens, and other discretised sequences.
- ### Applications
- Conversational assistants and instruction-following language models.
- Code completion and program synthesis.
- Long-form text, summarisation, and translation outputs.
- Any setting where outputs are ordered sequences generated step by step.
- ### Relationships
- dependsOn:: [[Language Model]]
- uses:: [[Transformer]]
- uses:: [[Sampling]]
- uses:: [[Beam Search]]
- hasPart:: [[Token]]
- hasPart:: [[Decoder]]
- supports:: [[Text Generation]]
- supports:: [[Natural Language Generation]]
- enables:: [[Large Language Model]]
- requires:: [[Inference]]
- implements:: [[Generative AI]]
- bridgesTo:: [[Attention Mechanism]]
- relatedTo:: [[Large Language Model]]
- relatedTo:: [[Inference]]
- ### Provenance
- updated:: 2026-06-15
