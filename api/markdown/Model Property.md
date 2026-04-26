iri:: http://narrativegoldmine.com/artificial-intelligence#ModelProperty
uri:: urn:visionclaw:concept:artificial-intelligence:model-property
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:model-property
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Model Property
content-hash:: sha256-12-d38eb844dc1a
legacy-term-id:: AI-7011
status:: active
maturity:: stable
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A meta-classification for properties, characteristics, and measurable attributes of machine learning models including performance metrics (accuracy, latency, throughput), architectural properties (parameters, layers, context length), and operational characteristics (memory footprint, inference cost, training requirements).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelProperty
  - owl-role:: PropertyClass
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[AI Concept]]
  - enables:: [[Model Comparison]]

- ### Content

  - #### Property Types (Inferred by Reasoner)
		    - Accuracy is-a ModelProperty
		    - Latency is-a ModelProperty
		    - Throughput is-a ModelProperty
		    - Parameter Count is-a ModelProperty
		    - Context Length is-a ModelProperty
		    - Memory Footprint is-a ModelProperty
		    - Inference Cost is-a ModelProperty
		    - Training Compute is-a ModelProperty
		- characterises:: [[Machine Learning Model]]
		- measurable-by:: [[Benchmark]]
		- enables:: [[Model Comparison]]

  ## Definition

  **ModelProperty** serves as the meta-class for all measurable and descriptive properties of machine learning models. This classification enables structured representation of model characteristics for comparison, selection, and governance purposes.

  ## Property Categories

  ### Performance Properties
  | Property | Type | Unit | Description |
  |----------|------|------|-------------|
  | Accuracy | Metric | % | Correct predictions ratio |
  | Precision | Metric | % | True positive ratio |
  | Recall | Metric | % | Sensitivity/TPR |
  | F1 Score | Metric | 0-1 | Harmonic mean of precision/recall |
  | Perplexity | Metric | scalar | Language model uncertainty |

  ### Latency Properties
  | Property | Type | Unit | Description |
  |----------|------|------|-------------|
  | Inference Latency | Metric | ms | Time per prediction |
  | Time to First Token | Metric | ms | Streaming response start |
  | Tokens per Second | Metric | tok/s | Generation throughput |
  | Batch Throughput | Metric | req/s | Concurrent request handling |

  ### Architectural Properties
  | Property | Type | Unit | Description |
  |----------|------|------|-------------|
  | Parameter Count | Size | B | Total trainable parameters |
  | Layer Count | Structure | int | Network depth |
  | Context Length | Capacity | tokens | Maximum input sequence |
  | Hidden Dimension | Structure | int | Internal representation size |
  | Attention Heads | Structure | int | Multi-head attention count |

  ### Operational Properties
  | Property | Type | Unit | Description |
  |----------|------|------|-------------|
  | Memory Footprint | Resource | GB | VRAM/RAM required |
  | Inference Cost | Economic | $/1M tokens | API pricing |
  | Training Compute | Resource | FLOP | Total training compute |
  | Energy Consumption | Resource | kWh | Power requirements |

  ## Usage in Ontology


  ## Property Governance

  Model properties support:
  - **Model Cards**: Standardised documentation
  - **Benchmarking**: Performance comparison
  - **Procurement**: Selection criteria
  - **Regulation**: Compliance verification
  - **Risk Assessment**: Capability evaluation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
