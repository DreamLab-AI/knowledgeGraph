public:: true

# DoRA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:do-ra",
  "@type": "Page",
  "vc:slug": "do-ra",
  "title": "DoRA",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:do-ra",
  "@type": "Class",
  "label": "DoRA",
  "definition": "DoRA (Weight-Decomposed Low-Rank Adaptation) is a parameter-efficient fine-tuning method that decomposes pretrained weights into separate magnitude and direction components, applying low-rank updates only to the directional component while learning the magnitude independently. By separating these two degrees of freedom, DoRA more closely mirrors the learning dynamics of full fine-tuning than standard LoRA, improving accuracy on many tasks at comparable parameter cost and without added inference latency once merged. It is used to adapt large language and vision models efficiently.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:low-rank-adaptation", "label": "Low-Rank Adaptation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - DoRA is a parameter-efficient fine-tuning method that decomposes weights into magnitude and direction, applying low-rank updates to the direction while learning magnitude separately, narrowing the gap to full fine-tuning.

- ### Relationships
  - DoRA is a subclass of [[Parameter-Efficient Fine-Tuning]] and uses [[Low-Rank Adaptation]] as the mechanism for updating the directional component. It enables high-quality [[Fine-Tuning]] of large models at low cost, and relates to [[Deep Learning]] optimisation and the [[Transformer]] architectures it most commonly adapts.

- ### Content
  - DoRA refines the popular LoRA approach to fine-tuning. LoRA freezes a pretrained model and learns a small low-rank update added to selected weight matrices, slashing the number of trainable parameters and memory required. While remarkably effective, LoRA's learning behaviour diverges in subtle ways from full fine-tuning, leaving an accuracy gap on harder tasks that motivated a closer analysis of what full fine-tuning actually changes.

  - The key insight is to decompose each weight matrix into two parts: a magnitude, capturing the scale of the weights, and a direction, capturing their orientation. Analysing how these components move during full fine-tuning versus LoRA revealed distinct patterns, suggesting that conflating magnitude and directional updates into a single low-rank term limited LoRA's expressiveness. DoRA separates them, learning the magnitude as an independent trainable vector and applying the low-rank update only to the directional component.

  - This decomposition gives DoRA more representational flexibility for the same parameter budget, allowing it to adjust the strength and orientation of updates more independently — closer to how full fine-tuning behaves. Empirically this translates into improved accuracy across language and vision benchmarks relative to LoRA at matched cost, while preserving LoRA's practical virtues: a tiny number of trainable parameters and the ability to merge the learned update back into the base weights so that inference incurs no extra latency.

  - DoRA exemplifies the broader trajectory of parameter-efficient fine-tuning, which makes adapting enormous foundation models tractable for organisations without the resources to fully retrain them. By matching more of full fine-tuning's quality at a fraction of the compute and storage, methods like DoRA support maintaining many task- or customer-specific adapters over a single shared base model, a deployment pattern central to the economics of customising large models at scale.
