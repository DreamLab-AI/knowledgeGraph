- ### OntologyBlock
  id:: qlora-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0255
	- preferred-term:: QLoRA
	- status:: draft
	- public-access:: true
	- definition:: An extension of LoRA that combines 4-bit quantisation with low-rank adaptation, enabling fine-tuning of very large models (65B+ parameters) on consumer-grade GPUs. QLoRA uses NormalFloat4 quantisation, double quantisation, and paged optimisers to achieve extreme memory efficiency whilst maintaining performance.

## Academic Context

QLoRA represents a breakthrough in democratising access to large model fine-tuning, enabling 65B parameter model adaptation on a single 48GB GPU without performance degradation.

**Primary Source**: Dettmers et al., "QLoRA: Efficient Finetuning of Quantized LLMs", arXiv:2305.14314 (2023)

## Key Characteristics

- 4-bit quantisation of base model weights
- LoRA adapters trained in higher precision
- NormalFloat4 (NF4) data type
- Double quantisation for constants
- Paged optimisers for memory management
- Enables 65B model fine-tuning on 48GB GPU

## Technical Details

**Core Components**:

1. **4-bit NormalFloat (NF4)**:
   - Information-theoretically optimal for normally distributed weights
   - Better quantisation quality than standard 4-bit

2. **Double Quantisation**:
   - Quantises the quantisation constants
   - Further reduces memory footprint

3. **Paged Optimisers**:
   - Uses CPU-GPU paging for memory spikes
   - Enables larger batch sizes

**Architecture**:
```
Base Model: 4-bit NF4 quantisation (frozen)
LoRA Adapters: Full precision (trainable)
Gradients: Backprop through quantised weights
```

## Usage in AI/ML

"QLoRA reduces memory usage enough to fine-tune a 65B parameter model on a single 48GB GPU."

Applications:
- Fine-tuning very large models on consumer hardware
- Enabling research with limited resources
- Personalized LLM adaptation
- Instruction tuning at scale
- Domain-specific model creation

## Related Concepts

- **LoRA**: Foundation technique
- **Quantisation**: Core enabler
- **4-bit NormalFloat (NF4)**: Custom data type
- **Double Quantisation**: Memory optimization
- **Paged Optimisers**: Memory management
- **Parameter-Efficient Fine-Tuning (PEFT)**: Broader category

## Memory Savings Breakdown

**65B Model Example**:
- **Full FP32**: ~260GB
- **Full FP16**: ~130GB
- **4-bit Quantised**: ~33GB
- **QLoRA Total**: ~48GB (including LoRA + optimiser states)

**Enables**:
- Consumer GPU fine-tuning (RTX 3090/4090)
- Academic research with limited budgets
- Individual developer access to SOTA models

## Technical Innovations

**NF4 Quantisation**:
```
Optimal for normally distributed weights
Custom quantisation levels for better accuracy
Preserves model quality at 4-bit
```

**Double Quantisation**:
```
Quantise the quantisation constants themselves
Saves additional ~0.5 bytes per parameter
Small overhead for significant savings
```

**Paged Optimisers**:
```
CPU-GPU memory paging (like virtual memory)
Handles memory spikes during gradient updates
Enables larger effective batch sizes
```

## Training Process

1. Load model in 4-bit NF4 format
2. Freeze quantised base weights
3. Add LoRA adapters (full precision)
4. Enable paged optimiser
5. Backpropagate through frozen 4-bit weights
6. Update only LoRA adapters
7. Store adapters separately

## Performance Characteristics

**Accuracy**:
- Matches full-precision LoRA
- Minimal degradation from quantisation
- NF4 crucial for maintaining quality

**Speed**:
- Slightly slower than full precision (quantisation overhead)
- Enables training that otherwise impossible
- Throughput vs. accessibility tradeoff

**Memory**:
- ~4× reduction vs. 16-bit LoRA
- ~8× reduction vs. full 16-bit fine-tuning

## Advantages

- Extreme memory efficiency
- Democratises large model fine-tuning
- Maintains performance quality
- Enables research on consumer hardware
- Reduces fine-tuning costs dramatically

## Challenges

- Slightly slower than full precision
- Requires careful implementation
- Quantisation overhead during training
- Not all operations quantised (gradients full precision)
- Hardware support varies

## Best Practices

- Use NF4 for normally distributed weights
- Enable double quantisation for maximum savings
- Use paged optimisers for stability
- Monitor for quantisation artefacts
- Validate on held-out set

## Historical Development

- 2021: LoRA introduced
- 2023: QLoRA breakthrough (arXiv:2305.14314)
- 2023-2024: Rapid community adoption
- 2024+: Standard for large model fine-tuning
- 2025: Further quantisation innovations

## Significance

QLoRA democratised large language model fine-tuning by making it accessible on consumer-grade hardware, enabling individual researchers and developers to adapt models previously requiring enterprise-scale resources.

## OWL Functional Syntax

```clojure
(Declaration (Class :QLoRA))
(SubClassOf :QLoRA :LoRA)
(SubClassOf :QLoRA
  (ObjectSomeValuesFrom :combines :FourBitQuantization))
(SubClassOf :QLoRA
  (ObjectSomeValuesFrom :combines :LowRankAdaptation))
(SubClassOf :QLoRA
  (ObjectSomeValuesFrom :uses :NormalFloat4DataType))
(SubClassOf :QLoRA
  (ObjectSomeValuesFrom :implements :DoubleQuantization))
(SubClassOf :QLoRA
  (ObjectSomeValuesFrom :uses :PagedOptimizers))
(SubClassOf :QLoRA
  (ObjectSomeValuesFrom :enables :ConsumerGPUFineTuning))
(SubClassOf :QLoRA
  (DataPropertyAssertion :supportsModelSize "65B+ parameters on 48GB GPU"))

(AnnotationAssertion rdfs:comment :QLoRA
  "Extension of LoRA combining 4-bit quantization with low-rank adaptation for extreme memory efficiency in fine-tuning very large models"@en)
(AnnotationAssertion :hasAcademicSource :QLoRA
  "Dettmers et al., arXiv:2305.14314 (2023)")
```

## UK English Notes

- "Quantised" (not "quantized")
- "Optimisers" (not "optimizers")
- "Whilst maintaining" (British usage)

**Last Updated**: 2025-10-27
**Verification Status**: Verified against QLoRA paper (arXiv:2305.14314)
	- maturity:: draft
	- owl:class:: mv:QLoRA
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
