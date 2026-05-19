schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#ModelProperty
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:model-property
public:: true

# Model Property
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:db6018cb20c10c26d36295d526ca8c2af719cbe84daab319e9bdd515b667d807",
  "@type": "Page",
  "vc:slug": "model-property",
  "title": "Model Property",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:benchmark",
      "vc:label": "Benchmark"
    },
    {
      "@id": "urn:visionflow:linked:model-comparison",
      "vc:label": "Model Comparison"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-concept",
      "vc:label": "AI Concept"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning-model",
      "vc:label": "Machine Learning Model"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-d38eb844dc1a"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#ModelProperty"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-7011"
    },
    {
      "vc:key": "maturity",
      "vc:value": "stable"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Property"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:model-property"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:model-property"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:db6018cb20c10c26d36295d526ca8c2af719cbe84daab319e9bdd515b667d807@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:model-property",
  "@type": "OntologyClass",
  "label": "Model Property",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:ai-concept",
      "vc:label": "AI Concept"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "active",
  "vc:maturity": "stable",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:db6018cb20c10c26d36295d526ca8c2af719cbe84daab319e9bdd515b667d807"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:db6018cb20c10c26d36295d526ca8c2af719cbe84daab319e9bdd515b667d807@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A meta-classification for properties, characteristics, and measurable attributes of machine learning models including performance metrics (accuracy, latency, throughput), architectural properties (parameters, layers, context length), and operational characteristics (memory footprint, inference cost, training requirements).",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:model-comparison",
      "vc:label": "Model Comparison"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:model-property:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:db6018cb20c10c26d36295d526ca8c2af719cbe84daab319e9bdd515b667d807"
  },
  "vc:resolutions": [
    {
      "raw": "[[Benchmark]]",
      "resolved": "urn:visionflow:linked:benchmark",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Comparison]]",
      "resolved": "urn:visionflow:linked:model-comparison",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Concept]]",
      "resolved": "urn:visionflow:owl:class:ai-concept",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Model]]",
      "resolved": "urn:visionflow:owl:class:machine-learning-model",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:db6018cb20c10c26d36295d526ca8c2af719cbe84daab319e9bdd515b667d807@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


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
