public:: true

# Machine Unlearning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8050a4c24b5d079d6198fde61843ed4b28d5b422ccea0373e380952ee8c600d0",
  "@type": "Page",
  "vc:slug": "machine-unlearning",
  "title": "Machine Unlearning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:continual-learning",
      "vc:label": "Continual Learning"
    },
    {
      "@id": "urn:visionflow:linked:data-privacy",
      "vc:label": "Data Privacy"
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
  "@id": "urn:ngm:class:machine-unlearning",
  "@type": "Class",
  "label": "Machine Unlearning",
  "definition": "A family of techniques for removing the influence of specific training examples from an already-trained machine learning model without retraining it from scratch, so that the resulting model behaves as if the deleted data had never been seen; motivated by privacy law (the right to erasure), copyright disputes, data poisoning remediation, and the removal of hazardous capabilities from foundation models.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:machine-learning",
    "label": "Machine Learning"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:right-to-erasure",
        "label": "Right to Erasure"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:continual-learning",
        "label": "Continual Learning"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
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
  - "A family of techniques for removing the influence of specific training examples from an already-trained machine learning model without retraining it from scratch, so that the resulting model behaves as if the deleted data had never been seen; motivated by privacy law (the right to erasure), copyright disputes, data poisoning remediation, and the removal of hazardous capabilities from foundation models."

- ### Semantic Classification
  - owl-class:: machine-learning:MachineUnlearning
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Machine Learning]]
  - enables:: [[Data Privacy]]
  - related-to:: [[Continual Learning]]

- ### Content

  ## Definition

  **Machine unlearning** inverts the usual direction of training: instead of adding knowledge to a model, it removes the statistical influence of chosen training examples. The gold standard — exact unlearning — is retraining from scratch on the dataset minus the deleted records, but for large models this is prohibitively expensive. Practical research therefore centres on approximate unlearning: gradient-ascent "forgetting" steps, influence-function corrections, sharded and sliced training (SISA) that confines each example's influence to a retrainable shard, and certified unlearning methods that bound the divergence between the unlearned model and a genuine retrain.

  The motivations are legal as much as technical. Data protection regimes such as the UK GDPR grant individuals a right to erasure, and regulators have signalled that a model trained on unlawfully processed data may itself be tainted — the US FTC has ordered "algorithmic disgorgement", the deletion of models built on improperly obtained data. Legislative proposals on frontier AI, including California's AI bills, have raised expectations that developers can excise specific data or capabilities on demand. Unlearning also serves safety engineering: removing memorised personal data, copyrighted passages, or dual-use knowledge (for example biosecurity-relevant content) from foundation models.

  Machine unlearning is conceptually paired with [[Continual Learning]]: continual learning fights unwanted catastrophic forgetting, while unlearning induces targeted, verifiable forgetting on demand. The two share machinery — both must reason about how individual experiences shape weights — and mature deployment pipelines increasingly need both.

  ## Current Landscape

  Benchmarks such as TOFU, WMDP, and MUSE now anchor evaluation of unlearning in large language models, measuring whether forget-set knowledge is gone, whether retained capability survives, and whether "relearning" attacks can resurrect the removed content. Results are sobering: many published methods suppress rather than remove knowledge, and fine-tuning on a few related examples often restores it. Verification remains the open problem — proving a model has forgotten is harder than making it appear to forget.

  Research directions include unlearning in federated settings (where the data holder never shared raw records), certified deletion with differential-privacy-style guarantees, and capability-level unlearning for frontier model safety cases. The field is young but moving quickly, pulled by the widening gap between what privacy and AI regulation assumes is possible and what current techniques reliably deliver.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
