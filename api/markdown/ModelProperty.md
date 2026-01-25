- ### OntologyBlock
  id:: modelproperty-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-7011
	- preferred-term:: ModelProperty
	- source-domain:: ai
	- status:: active
	- public-access:: true
	- definition:: A meta-classification for properties, characteristics, and measurable attributes of machine learning models including performance metrics (accuracy, latency, throughput), architectural properties (parameters, layers, context length), and operational characteristics (memory footprint, inference cost, training requirements).
	- maturity:: stable
	- owl:class:: ai:ModelProperty
	- owl:role:: PropertyClass
	- belongsToDomain:: [[Artificial Intelligence]]
	- #### Relationships
	  id:: modelproperty-relationships
	  collapsed:: true
		- is-subclass-of:: [[AI Concept]]
		  collapsed:: true
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

```turtle
@prefix ai: <http://narrativegoldmine.com/ai#> .

ai:GPT4 ai:hasModelProperty [
    a ai:ParameterCount ;
    rdf:value "1.76e12"^^xsd:double
] .

ai:GPT4 ai:hasModelProperty [
    a ai:ContextLength ;
    rdf:value "128000"^^xsd:integer
] .
```

## Property Governance

Model properties support:
- **Model Cards**: Standardised documentation
- **Benchmarking**: Performance comparison
- **Procurement**: Selection criteria
- **Regulation**: Compliance verification
- **Risk Assessment**: Capability evaluation

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub
- **Authority Score**: 0.85
- **References**: 10 pages reference this concept
