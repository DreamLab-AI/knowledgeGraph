public:: true

# ARC-AGI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:arc-agi",
  "@type": "Page",
  "vc:slug": "arc-agi",
  "title": "ARC-AGI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arc-agi",
  "@type": "Class",
  "label": "ARC-AGI",
  "definition": "ARC-AGI (Abstraction and Reasoning Corpus for Artificial General Intelligence) is a benchmark designed by François Chollet and published in 2019 to measure general fluid intelligence in AI systems through abstract visual pattern completion tasks that require novel rule induction rather than pattern recall from training data. Each task presents a small number of input-output grid transformation examples from which the solver must infer the underlying rule and apply it to a new input, using only core knowledge priors available to young children. The benchmark explicitly resists solution by memorisation, making it a proxy test for human-like generalisation ability.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:benchmarks", "label": "Benchmarks"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:pattern-recognition", "label": "Pattern Recognition"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:artificial-general-intelligence", "label": "Artificial General Intelligence"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[ARC-AGI]] is a benchmark for measuring fluid reasoning and generalisation in AI systems, consisting of grid-based visual transformation tasks that cannot be solved by statistical pattern matching over a large training corpus. Each task provides a handful of input-output pairs demonstrating a rule, then requires the solver to apply that rule to a held-out input, demanding the kind of core knowledge [[Reasoning]] available to young children—object persistence, basic geometry, counting—but not memorised solutions. The benchmark explicitly tests [[Pattern Recognition]] through novel rule induction, serving as a proxy for [[Artificial General Intelligence]] capability.

- ### Relationships
  - ARC-AGI enables research into [[Reasoning]] and [[Pattern Recognition]] by providing a reproducible measurement of generalisation. It draws on [[Cognitive Science]] theories of core knowledge and human learning to design tasks resistant to [[Machine Learning]] memorisation. It is closely related to debates about [[Artificial General Intelligence]] measurement and serves as a reference [[Benchmark Standard]] in AI capability evaluation. Progress on ARC-AGI informs the [[AI Safety Research]] community's understanding of generalisation versus memorisation in large models.

- ### Content
  - François Chollet introduced ARC in a 2019 paper titled "On the Measure of Intelligence," arguing that existing AI benchmarks conflated task-specific skill with general intelligence by allowing models to exploit statistical regularities in large training sets. The Abstraction and Reasoning Corpus consisted of 400 training tasks and 400 evaluation tasks, each a small set of coloured grid transformations. Chollet accompanied the benchmark with a $1 million Kaggle competition (ARC Prize), extended in subsequent years, to incentivise novel solution approaches.

  - The tasks require solvers to identify geometric transformations, colour mappings, object counting rules, symmetry operations, and other abstract relationships from as few as two or three examples, then extrapolate to a novel input. This few-shot regime means large language models trained on vast text corpora perform poorly compared to human novices, since the requisite generalisation cannot emerge from memorising training distribution statistics. Programme synthesis and neurosymbolic approaches have historically outperformed pure deep learning on ARC tasks.

  - In 2024, OpenAI's o3 model achieved approximately 87.5% on the ARC-AGI public evaluation set (with high compute budget) and 75.7% in a low-compute setting, compared to approximately 85% human baseline performance. This represented a substantial leap from the previous frontier, which hovered around 30–40%, and generated significant discussion about whether the benchmark had been "solved" or whether o3's approach relied on a form of sophisticated pattern matching enabled by very large pretraining corpora and extended test-time compute.

  - The ARC-AGI-2 benchmark, released in 2025, introduced harder tasks specifically designed to resist solutions that could have exploited distributional properties of the original corpus. The ongoing evolution of the benchmark reflects a broader tension in AI evaluation: as models improve, benchmarks must be updated to remain informative, raising questions about what it means to demonstrate genuine generalisation. ARC-AGI remains the most influential publicly available benchmark for measuring reasoning capability in the absence of domain-specific training data.