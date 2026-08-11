public:: true

# Single-Turn Inference
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:64216dbccee9404a01f4c234d8fe234257bd9d34d9fe327cca0488b5ed75b1ce",
  "@type": "Page",
  "vc:slug": "single-turn-inference",
  "title": "Single-Turn Inference",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inference",
      "vc:label": "Inference"
    },
    {
      "@id": "urn:visionflow:linked:agentic-workflow",
      "vc:label": "Agentic Workflow"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
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
  "@id": "urn:ngm:class:single-turn-inference",
  "@type": "Class",
  "label": "Single-Turn Inference",
  "definition": "The stateless request-response mode of using a language model: a prompt goes in, one completion comes out, and the interaction ends — with no intermediate tool execution, environmental feedback, self-correction, or persistent state; it is the cheapest and most predictable inference pattern, suited to classification, extraction, translation, and summarisation, and serves as the baseline against which iterative agentic workflows are defined and evaluated.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:inference",
    "label": "Inference"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:agentic-workflow",
        "label": "Agentic Workflow"
      },
      {
        "@id": "urn:ngm:class:autonomous-task-execution",
        "label": "Autonomous Task Execution"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain of Thought"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The stateless request-response mode of using a language model: a prompt goes in, one completion comes out, and the interaction ends — with no intermediate tool execution, environmental feedback, self-correction, or persistent state; it is the cheapest and most predictable inference pattern, suited to classification, extraction, translation, and summarisation, and serves as the baseline against which iterative agentic workflows are defined and evaluated."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SingleTurnInference
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Inference]]
  - contrasts-with:: [[Agentic Workflow]], [[Autonomous Task Execution]]
  - uses:: [[Prompt Engineering]]
  - related-to:: [[Large Language Models]], [[Chain of Thought]]

- ### Content

  ## Definition

  **Single-turn inference** is the simplest way to use a large language model: send one prompt, receive one completion, done. The model has no opportunity to observe the consequences of its output, call tools, gather missing information, or revise a mistake — everything it needs must be present in the prompt, and everything it produces must be right first time. This is the mode in which most production LLM workloads still run: classification, entity extraction, translation, summarisation, rewriting, and retrieval-augmented question answering where the retrieval happens before the model is invoked.

  The pattern's virtues are operational. Cost and latency are bounded and predictable (one forward pass over a known context), behaviour is easier to evaluate (one input maps to one output, so standard test sets and metrics apply), failure modes are contained (an error affects one response, not a cascading action sequence), and the interaction is stateless, which makes horizontal scaling and caching straightforward. [[Prompt Engineering]] — instructions, few-shot examples, and [[Chain of Thought]] elicitation — is the main lever for quality, since there is no second chance within the interaction.

  Its defining contrast in this graph is with the [[Agentic Workflow]]: iterative loops in which the model acts, observes real feedback, and corrects course. Tasks whose difficulty exceeds what one forward pass can reliably deliver — multi-file code changes, research requiring search, anything needing environment interaction — motivate [[Autonomous Task Execution]]. The boundary has blurred somewhat with reasoning models that perform long internal deliberation within a single API call: such calls remain single-turn in interface terms (no external feedback), even though substantial computation happens inside the turn.

  ## Current Landscape

  - **Where it dominates**: high-volume pipelines (moderation, tagging, extraction), latency-sensitive interfaces, and any task with a well-defined input-output contract; the majority of enterprise LLM spend remains single-turn.
  - **Scaling within the turn**: chain-of-thought prompting, self-consistency sampling, and inference-time reasoning all buy accuracy without adding interaction rounds — test-time compute inside a single turn.
  - **When to escalate**: empirically, agentic loops justify their 5-100x token cost when tasks require environmental feedback or verification; when they do not, single-turn baselines are frequently as accurate and far cheaper — a comparison every agent evaluation should include.
  - **Evaluation role**: benchmarks such as MMLU-style QA measure single-turn capability, while agentic benchmarks (e.g. SWE-bench) measure what looping adds; the delta between them quantifies the value of iteration for a task family.
  - **Test-time compute is now a scaling axis within the turn**: OpenAI's o1 (2024) and o3 report performance that "consistently improves" with more thinking time; o1 reached 74.4% pass@1 on AIME 2024 versus GPT-4o's 9.3%, entirely inside a single API call with no external feedback.
  - **Small models plus better inference can beat larger ones**: Stanford's s1 (2025) used SFT on 1,000 examples plus "budget forcing" to exceed o1-preview on competition maths by up to 27%, a clean demonstration that inference-time strategy, not just parameters, drives single-turn accuracy.
  - **Diminishing returns are real**: 2025 analyses of o1-like models (QwQ, R1, LIMO) found longer chains of thought do not monotonically improve accuracy — correct solutions are often shorter than incorrect ones — so test-time compute has task-dependent optima rather than unlimited upside.
  - **The interface distinction holds**: reasoning models remain single-turn in interface terms (hidden deliberation, one completion), which is why the single-turn/agentic boundary is still defined by the presence of external tool execution and environmental feedback, not by internal compute.

  **Sources**:
  - https://ashitaorbis.com/understanding-ai/wiki/test-time-compute/
  - https://aclanthology.org/2025.emnlp-main.1025.pdf
  - https://arxiv.org/html/2502.12215v1

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
