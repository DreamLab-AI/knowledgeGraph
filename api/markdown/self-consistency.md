- ### Definition
  - Self-consistency is a prompting strategy for large language models in which multiple independent reasoning chains are sampled stochastically for a given problem and the final answer is determined by majority vote across those chains. The technique exploits the observation that correct reasoning paths, although varied in surface form, tend to converge on the same answer, whilst incorrect paths are more diverse. Self-consistency substantially improves performance on mathematical reasoning and multi-step logic tasks compared to greedy decoding, and it is commonly combined with chain-of-thought prompting.

- ### Semantic Classification
  - owl-class:: self-consistency:Self-Consistency
  - owl-role:: Concept

- ### Relationships
  - requires [[Large Language Models]]
  - requires [[Chain of Thought]]
  - enables [[Reasoning]]
  - enables [[Reliability]]
  - relatedTo [[Prompt Engineering]]

- ### Content
  Self-consistency was introduced as a decoding strategy to address the fragility of single-sample chain-of-thought prompting, where a single incorrect reasoning step can derail the final answer. The method samples k reasoning chains from the model using a non-zero temperature, producing diverse intermediate reasoning traces that may arrive at the same or different conclusions. The final answer is determined by marginalising over the intermediate reasoning steps—effectively majority-voting on the answer tokens—rather than selecting the single highest-probability completion.

  The intuition is that the model's distribution over reasoning paths concentrates around correct logical derivations; incorrect paths are more scattered across the answer space. Empirically, self-consistency with 20–40 samples substantially outperforms greedy decoding on arithmetic reasoning benchmarks (GSM8K, MATH), commonsense reasoning, and symbolic manipulation tasks. The technique is model-agnostic and requires no additional training, making it a widely adopted technique in production AI systems where reliability is prioritised over inference cost.

  Self-consistency interacts with temperature and sampling strategy: too-low temperature reduces diversity and collapses to near-greedy behaviour, whilst too-high temperature introduces incoherent chains that add noise. The method has been extended to multi-step reasoning with intermediate verification (process-level reward models), where each reasoning step is evaluated for plausibility before the chain continues, providing a tighter integration between verification and generation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z