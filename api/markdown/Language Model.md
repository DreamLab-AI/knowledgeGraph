public:: true

# Language Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:language-model",
  "@type": "Page",
  "vc:slug": "language-model",
  "title": "Language Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:language-model",
  "@type": "Class",
  "label": "Language Model",
  "definition": "A language model is a probabilistic model of natural language that assigns probability distributions over sequences of tokens — words, subwords, or characters — and can be used to compute the likelihood of observed text, generate new text, or predict the next token given a preceding context. Modern large language models are deep neural networks, typically based on the transformer architecture, trained on vast corpora of text through a self-supervised next-token prediction objective. They acquire implicit representations of syntax, semantics, factual knowledge, and reasoning patterns from this training signal, and can be adapted to specific tasks through fine-tuning, prompt engineering, or instruction tuning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:text-generation", "label": "Text Generation"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:language-modeling", "label": "Language Modeling"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Language Model]] is a probabilistic model that assigns likelihood scores to token sequences and generates new text by sampling from learned conditional distributions, implemented in modern systems as a deep [[Transformer Architecture]] with [[Attention Mechanism]] layers trained on large corpora to enable [[Text Generation]], [[Natural Language Processing]], and [[Natural Language Understanding]] tasks.

- ### Relationships
  - Language models are a subtype of [[Generative Model]], implemented using [[Transformer Architecture]] and relying on [[Attention Mechanism]] to capture long-range dependencies, with [[Embeddings]] to represent tokens in continuous vector space and [[Context Window]] determining the maximum usable input length. They enable [[Text Generation]], [[Natural Language Processing]], and [[Natural Language Understanding]] applications, and are the foundation of [[Large Language Models]]. Production use involves [[Inference]] pipelines, and adaptation uses [[Fine Tuning]] strategies including parameter-efficient methods.

- ### Content
  - Language modelling has a long history predating neural networks. N-gram models, which estimate the probability of a token given the preceding n-1 tokens from corpus frequency counts, were the dominant paradigm from the 1980s through the early 2010s. Neural language models — feed-forward networks applied to word embeddings — were introduced by Bengio et al. in 2003, showing that distributed representations generalised better than count-based n-grams. The recurrent neural network language model (Mikolov et al., 2010) and LSTM variants improved on this by maintaining a hidden state over arbitrary-length contexts. The transformer architecture introduced in "Attention Is All You Need" (Vaswani et al., 2017) replaced sequential recurrence with parallel self-attention, enabling efficient training on large datasets using GPU/TPU acceleration.

  - A transformer language model processes input text by first tokenising it into a sequence of integer IDs from a learned vocabulary (typically 32k–100k tokens using byte-pair encoding or similar algorithms). Each token is mapped to a dense embedding vector, positional information is added, and the sequence passes through multiple stacked attention layers where each token attends to all others (in encoder models) or all preceding tokens (in decoder/autoregressive models). The output representation at each position is projected to a probability distribution over the vocabulary; training minimises cross-entropy loss between predicted and actual next tokens. At inference, tokens are sampled from this distribution autoregressively to generate text.

  - The significance of language models lies in their unexpected emergent capabilities. Trained purely on next-token prediction with no explicit supervision for task performance, large language models acquire the ability to translate between languages, write and debug code, solve mathematical problems, answer factual questions, and perform analogical reasoning — capabilities that appear to emerge as a function of model scale. The "few-shot" and "zero-shot" learning properties of GPT-3 (2020) demonstrated that a single model could perform diverse tasks specified only through natural language instructions in the prompt, without task-specific fine-tuning, fundamentally reshaping how practitioners deploy AI systems.

  - As of 2024–2025, the language model landscape is characterised by rapid capability scaling, architectural diversification, and deployment proliferation. Frontier models (GPT-4o, Claude 3.5, Gemini 1.5 Pro) feature context windows of 128k–2M tokens, multimodal inputs (text, image, audio, video), and tool-use capabilities. Specialised models optimised for coding (StarCoder2, Codestral), mathematics (DeepSeek-Math), and scientific domains have proliferated. Open-weight models (Llama 3, Mistral, Qwen) have closed much of the capability gap with proprietary systems, democratising access to competitive language model inference. Efficiency research — quantisation, speculative decoding, mixture-of-experts architectures — has made deployment on consumer hardware increasingly feasible.

