public:: true

# Adapter Tuning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:619ee9d385912938a57c02eb8708b3056b000a5863e99d1ef95fdb713ee273c3",
  "@type": "Page",
  "vc:slug": "adapter-tuning",
  "title": "Adapter Tuning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:parameter-efficient-fine-tuning",
      "vc:label": "Parameter-Efficient Fine-Tuning"
    },
    {
      "@id": "urn:visionflow:linked:fine-tuning",
      "vc:label": "Fine Tuning"
    },
    {
      "@id": "urn:visionflow:linked:lo-ra-do-ra-etc",
      "vc:label": "LoRA DoRA etc"
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
  "@id": "urn:ngm:class:adapter-tuning",
  "@type": "Class",
  "label": "Adapter Tuning",
  "definition": "A parameter-efficient fine-tuning technique that adapts a frozen pre-trained neural network to new tasks by inserting small trainable modules — adapters — between or alongside its layers, typically bottleneck feed-forward blocks or low-rank projections, so that task-specific behaviour is learned in a fraction of a percent of the original parameter count; adapters preserve the base model's weights, allow many tasks to share one backbone through swappable modules, and underpin methods from Houlsby adapters to LoRA and ControlNet-style conditioning branches.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
    "label": "Parameter-Efficient Fine-Tuning"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cross-modal-conditioning",
        "label": "Cross-Modal Conditioning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lo-ra-do-ra-etc",
        "label": "LoRA DoRA etc"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A parameter-efficient fine-tuning technique that adapts a frozen pre-trained neural network to new tasks by inserting small trainable modules — adapters — between or alongside its layers, typically bottleneck feed-forward blocks or low-rank projections, so that task-specific behaviour is learned in a fraction of a percent of the original parameter count; adapters preserve the base model's weights, allow many tasks to share one backbone through swappable modules, and underpin methods from Houlsby adapters to LoRA and ControlNet-style conditioning branches."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AdapterTuning
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Parameter-Efficient Fine-Tuning]]
  - related-to:: [[LoRA DoRA etc]]
  - part-of:: [[Cross-Modal Conditioning]]

- ### Content

  ## Definition

  **Adapter tuning** adapts a large pre-trained model to a new task without touching its original weights. Small trainable modules — adapters — are inserted into the frozen network, and only they receive gradients during training. The canonical design, introduced for BERT by Houlsby et al. (2019), places a bottleneck feed-forward block (down-projection, non-linearity, up-projection, residual connection) after the attention and feed-forward sublayers of each transformer block. Because the bottleneck dimension is tiny relative to the hidden size, a task is captured in typically 0.5–5% of the base model's parameters while matching full [[Fine Tuning]] within a fraction of a point on standard benchmarks.

  The pattern generalises well beyond the original bottleneck design, and much of modern parameter-efficient fine-tuning is adapter tuning under other names. LoRA reparameterises the adapter as a low-rank update to frozen weight matrices, merged at inference for zero latency overhead; DoRA, IA³, and prefix/prompt-tuning variants occupy nearby design points (see [[LoRA DoRA etc]]). In generative image models the same principle appears at architectural scale: ControlNet clones encoder blocks of a frozen diffusion U-Net into a trainable conditioning branch, and lightweight T2I-Adapters inject spatial control signals — adapter tuning serving [[Cross-Modal Conditioning]] rather than task transfer.

  The practical payoff is modularity and economics. One frozen backbone can serve many tasks or tenants, with per-task adapters of a few megabytes swapped or composed at load time (AdapterFusion, adapter merging); training fits on modest hardware since optimiser state exists only for adapter parameters; and the frozen base weights guarantee that catastrophic forgetting of the pre-trained capabilities cannot occur in the backbone itself.

  ## Technical Details

  A Houlsby-style adapter computes h' = h + W_up · f(W_down · h), with W_down ∈ R^(d×r), W_up ∈ R^(r×d), r ≪ d (r is commonly 8–256 against hidden sizes of 768–8192); near-identity initialisation (W_up ≈ 0) makes the model start from exact pre-trained behaviour. Design axes include placement (after each sublayer, parallel to it as in He et al.'s unified view, or only in upper layers), sharing across layers, and whether the adapter is merged into base weights after training (possible for linear reparameterisations such as LoRA, impossible for non-linear bottleneck adapters, which add a small inference cost). Tooling has consolidated around Hugging Face PEFT and AdapterHub, which standardise adapter formats, injection points, and composition. Empirically, adapter methods dominate full fine-tuning on cost-adjusted comparisons for models above roughly a billion parameters, and multi-adapter serving (for example S-LoRA-style batched inference over thousands of adapters) has become the standard architecture for personalised and multi-tenant LLM deployment.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
