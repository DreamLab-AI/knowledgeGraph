public:: true

# self-consistency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a28d8437d5dcb7beca0b508c4921edc1fbbc0a4132e579a1cda00eb9a6ef9852",
  "@type": "Page",
  "vc:slug": "self-consistency",
  "title": "self-consistency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:self-consistency",
  "@type": "Class",
  "label": "Self-Consistency",
  "definition": "Self-consistency is a decoding and prompting strategy for large language models in which multiple independent reasoning chains are sampled stochastically for a given problem and the final answer is selected by majority vote across those chains. The technique exploits the observation that correct reasoning paths, although varied in surface form, converge on the same answer whilst incorrect paths remain scattered across the answer space. Originally introduced alongside chain-of-thought prompting, self-consistency substantially improves accuracy on arithmetic, commonsense, and multi-step logical reasoning tasks without requiring additional model training or fine-tuning.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:prompt-engineering",
      "label": "Prompt Engineering"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:stochastic-sampling", "label": "Stochastic Sampling"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:reliability", "label": "Reliability"},
      {"@id": "urn:ngm:class:robustness", "label": "Robustness"},
      {"@id": "urn:ngm:class:error-correction", "label": "Error Correction"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:majority-voting", "label": "Majority Voting"},
      {"@id": "urn:ngm:class:temperature-sampling", "label": "Temperature Sampling"},
      {"@id": "urn:ngm:class:ensemble-methods", "label": "Ensemble Methods"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:inference-compute", "label": "Inference Compute"},
      {"@id": "urn:ngm:class:token-generation", "label": "Token Generation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:ensemble-decoding", "label": "Ensemble Decoding"},
      {"@id": "urn:ngm:class:test-time-compute", "label": "Test-Time Compute"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:mathematical-reasoning", "label": "Mathematical Reasoning"},
      {"@id": "urn:ngm:class:commonsense-reasoning", "label": "Commonsense Reasoning"},
      {"@id": "urn:ngm:class:code-generation", "label": "Code Generation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:greedy-decoding", "label": "Greedy Decoding"},
      {"@id": "urn:ngm:class:beam-search", "label": "Beam Search"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:process-reward-models", "label": "Process Reward Models"},
      {"@id": "urn:ngm:class:tree-of-thoughts", "label": "Tree of Thoughts"},
      {"@id": "urn:ngm:class:mixture-of-agents", "label": "Mixture of Agents"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:consistency-voting", "label": "Consistency Voting"},
    {"@id": "urn:ngm:class:reasoning-ensemble", "label": "Reasoning Ensemble"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Self-consistency is a decoding and prompting strategy for [[Large Language Models]] in which multiple independent reasoning chains are sampled stochastically for a given problem and the final answer is selected by majority vote across those chains. The technique is a practical realisation of [[Ensemble Methods]] applied to [[Chain of Thought]] prompting: the model generates k diverse reasoning paths, and the most frequently occurring final answer is returned, marginalising over the intermediate steps. Because correct logical derivations tend to converge on the same conclusion whilst errors are scattered, self-consistency reduces the variance introduced by any single [[Stochastic Sampling]] draw and substantially outperforms [[Greedy Decoding]] on complex [[Reasoning]] tasks without modifying model weights.

- ### Overview
  - Self-consistency was introduced by Wang et al. (2022) as a response to the fragility of single-sample [[Chain of Thought]] prompting, where one erroneous intermediate step can propagate to a wrong final answer.
  - The core insight is statistical: if the model's conditional distribution over reasoning traces places higher probability mass on correct derivations, then sampling repeatedly and aggregating by [[Majority Voting]] acts as a low-cost, training-free mechanism to increase accuracy.
  - The technique requires no gradient updates, no labelled supervision beyond the original prompt, and no architecture changes — making it applicable to any [[Large Language Models]] accessed through an inference API.
  - Its primary cost is inference-time compute: producing k samples multiplies the token budget k-fold, which makes [[Test-Time Compute]] scaling a central design consideration.
  - Since its introduction, self-consistency has become a de-facto baseline for evaluating advanced reasoning capabilities of frontier models and has informed the broader field of [[Test-Time Compute]] scaling research.

- ### Key Mechanisms
  - **Stochastic sampling**: the model is queried k times with the same prompt at a non-zero temperature, producing k distinct [[Chain of Thought]] traces. Temperature controls the diversity-quality trade-off.
    - Too-low temperature collapses to near-[[Greedy Decoding]], eliminating diversity.
    - Too-high temperature introduces incoherent chains that introduce noise without contributing useful signal.
  - **Majority voting / marginalisation**: the final answers extracted from all k chains are aggregated; the most common answer wins. Formally this marginalises over the latent reasoning paths rather than selecting a single maximum-a-posteriori completion.
  - **Answer extraction**: requires a parser or heuristic to strip the final answer from each reasoning chain (e.g. extracting the last numeric value, or a boxed expression in mathematical tasks).
  - **Weighted voting**: extensions weight each vote by the model's log-probability for that chain, leveraging confidence as a signal alongside the count.
  - **Ensemble character**: self-consistency is a single-model ensemble in time rather than model-space, analogous in spirit to [[Ensemble Methods]] in classical [[Machine Learning]].

- ### Applications and Use Cases
  - **Mathematical reasoning**: self-consistency is the standard augmentation on arithmetic benchmarks such as GSM8K and MATH, where multi-step derivations are prone to cascading errors.
  - **Commonsense and symbolic reasoning**: tasks requiring world-knowledge inference benefit from diversity in reasoning approach, e.g. StrategyQA, ARC Challenge.
  - **Code generation and debugging**: sampling multiple candidate implementations and selecting the one that passes unit tests is a natural analogue; this interacts closely with [[Code Generation]] and execution-based verification.
  - **Logical entailment and question answering**: reading-comprehension and multi-hop reasoning (HotpotQA, MuSiQue) show consistent gains, particularly when the answer set is finite.
  - **Production AI systems**: used in pipelines that prioritise [[Reliability]] over latency, where the cost of additional [[Inference Compute]] is acceptable relative to the benefit of accuracy gains.
  - **Agentic pipelines**: multi-agent architectures sample reasoning from multiple [[Mixture of Agents]] workers and aggregate conclusions, extending self-consistency from single-model to multi-model settings.

- ### Relationships to Adjacent Techniques
  - **[[Chain of Thought]]**: self-consistency is parasitic on chain-of-thought; without intermediate reasoning traces there is no diversity of path to exploit. It is best understood as a decoding wrapper around chain-of-thought prompting.
  - **[[Tree of Thoughts]]**: tree-of-thoughts explores the reasoning space as a branching search (BFS/DFS) with explicit pruning, whereas self-consistency samples flat independent chains. They can be combined.
  - **[[Process Reward Models]]**: process-level reward models score intermediate steps rather than only terminal answers, and can be integrated with self-consistency to weight or filter chains before voting.
  - **[[Beam Search]]**: beam search is a deterministic ensemble that maintains multiple partial sequences simultaneously; self-consistency replaces this with independent stochastic samples and post-hoc aggregation.
  - **[[Greedy Decoding]]**: the baseline self-consistency improves upon; greedy decoding selects the single most probable token at each step and is fast but brittle for multi-step problems.
  - **[[Mixture of Agents]]**: extends the self-consistency aggregation idea across heterogeneous models rather than repeated calls to one model.
  - **[[Bayesian Inference]]**: the majority-vote aggregation has a Bayesian interpretation as approximate marginalisation over reasoning paths; connects to probabilistic inference under model uncertainty.
  - **[[Collective Intelligence]]**: the mechanism mirrors human consensus-finding: independent agents reason separately, and disagreement signals uncertainty whilst convergence signals correctness.
  - **[[Ensemble Decoding]]**: self-consistency is a specific instantiation of ensemble decoding applied to autoregressive language models.
  - **[[Test-Time Compute]]**: self-consistency is a prominent example of using additional compute at inference time (rather than training time) to improve output quality, a paradigm receiving significant research attention.
  - **[[Stochastic Sampling]]**: the diversity of self-consistency chains is entirely governed by the sampling temperature and the model's probability distribution; sampling strategy is therefore a first-class design variable.

- ### Relationships (Ontology)
  - requires:: [[Large Language Models]]
  - requires:: [[Chain of Thought]]
  - requires:: [[Stochastic Sampling]]
  - enables:: [[Reasoning]]
  - enables:: [[Reliability]]
  - enables:: [[Robustness]]
  - enables:: [[Error Correction]]
  - uses:: [[Majority Voting]]
  - uses:: [[Temperature Sampling]]
  - uses:: [[Ensemble Methods]]
  - dependsOn:: [[Inference Compute]]
  - dependsOn:: [[Token Generation]]
  - implements:: [[Ensemble Decoding]]
  - implements:: [[Test-Time Compute]]
  - supports:: [[Mathematical Reasoning]]
  - supports:: [[Commonsense Reasoning]]
  - supports:: [[Code Generation]]
  - contrastsWith:: [[Greedy Decoding]]
  - contrastsWith:: [[Beam Search]]
  - relatedTo:: [[Prompt Engineering]]
  - relatedTo:: [[Process Reward Models]]
  - relatedTo:: [[Tree of Thoughts]]
  - relatedTo:: [[Mixture of Agents]]
  - bridges-to:: [[Bayesian Inference]]
  - bridges-to:: [[Collective Intelligence]]

- ### Design Considerations and Limitations
  - **Inference cost**: running k samples multiplies token expenditure by k. For large models with long reasoning chains this can be prohibitive; practitioners typically choose k in the range 5–40 depending on latency and cost budgets.
  - **Answer extractability**: majority voting requires a canonical answer representation. Free-form generation (e.g. long paragraphs) cannot be aggregated easily; the technique is most straightforward when answers are short strings, numbers, or categorical labels.
  - **Diversity vs. coherence trade-off**: temperature must be tuned per task and per model. Fixed temperature schedules may be suboptimal.
  - **Failure mode — consistent errors**: if the model has a systematic bias toward a wrong answer (e.g. a mistaken world-knowledge prior), all k samples may agree on the same incorrect answer. Majority voting cannot correct systematic errors, only reduce variance.
  - **Interaction with instruction-following**: heavily RLHF-trained models may produce less diverse reasoning chains at a given temperature than base models, reducing the marginal benefit of self-consistency.
  - **Calibration**: the vote margin (fraction of chains agreeing on the winner) provides a natural uncertainty signal; low margins indicate genuinely ambiguous problems and can trigger escalation to human review.
  - **Parallel inference**: because the k calls are independent, self-consistency is embarrassingly parallel and maps naturally to batched [[Inference Compute]] infrastructure.

- ### Standards and Context
  - Self-consistency emerged from academic research on [[Prompt Engineering]] and has no formal standardisation body. Its adoption in production systems has been documented through model cards and technical reports from major AI labs.
  - The technique influenced subsequent reasoning-focused benchmarks: evaluations now routinely report self-consistency@k alongside pass@k for [[Code Generation]] tasks, with k typically reported alongside accuracy to allow fair comparison.
  - Related evaluation frameworks include [[Process Reward Models]] (MATH-Shepherd, PRM800K) and outcome-reward model (ORM) comparisons, which are used to validate whether chain selection improves on naive majority voting.
  - The broader paradigm of [[Test-Time Compute]] scaling — investing more inference-time budget for harder problems — is an active research direction in which self-consistency is a foundational reference point.
  - OpenAI, Google DeepMind, and Anthropic have all published analyses of reasoning performance that benchmark self-consistency as a standard augmentation strategy for their respective frontier models.

- ### Provenance
  - sources:: Wang et al. (2022), "Self-Consistency Improves Chain of Thought Reasoning in Language Models"; subsequent chain-of-thought and test-time compute literature
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
