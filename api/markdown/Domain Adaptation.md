public:: true

# domain adaptation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8c1cc0d1756f25f39bb36dcd6544afacbd245dc0d8342017e46ccfd5d3e40f0c",
  "@type": "Page",
  "vc:slug": "domain-adaptation",
  "title": "domain adaptation",
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
  "@id": "urn:ngm:class:domain-adaptation",
  "@type": "Class",
  "label": "Domain Adaptation",
  "definition": "Domain adaptation is a sub-field of transfer learning concerned with reducing the performance degradation that occurs when a model trained on a labelled source domain is applied to a target domain whose data distribution differs. Adaptation methods range from feature alignment (learning domain-invariant representations via adversarial training or maximum mean discrepancy minimisation) to instance re-weighting and self-training on unlabelled target data. It is applied extensively in NLP, computer vision, and speech recognition when labelled target data is scarce or costly to acquire.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:transfer-learning",
      "label": "Transfer Learning"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:pre-training", "label": "Pre Training"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-distillation", "label": "Knowledge Distillation"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Domain adaptation is a sub-field of transfer learning concerned with reducing the performance degradation that occurs when a model trained on a labelled source domain is applied to a target domain whose data distribution differs. Adaptation methods range from feature alignment (learning domain-invariant representations via adversarial training or maximum mean discrepancy minimisation) to instance re-weighting and self-training on unlabelled target data. It is applied extensively in NLP, computer vision, and speech recognition when labelled target data is scarce or costly to acquire.

- ### Semantic Classification
  - owl-class:: domain-adaptation:Domain Adaptation
  - owl-role:: Concept

- ### Relationships
  - requires [[Pre Training]]
  - requires [[Training Data]]
  - enables [[Fine Tuning]]
  - relatedTo [[Knowledge Distillation]]
  - relatedTo [[Machine Learning Discipline]]

- ### Content
  - Domain adaptation addresses the domain shift problem: a model trained on abundant, labelled data from a source distribution (e.g., newswire text) degrades when evaluated on a target distribution (e.g., social media text) because the statistical properties of the input space differ. The severity of shift may be in feature marginals (covariate shift), label conditionals (concept drift), or both.
  - The field broadly divides into unsupervised domain adaptation (UDA), where no labelled target data is available, and semi-supervised domain adaptation, where a small labelled target set exists alongside a larger unlabelled one. UDA methods include domain-adversarial neural networks (DANN), which learn a feature extractor that fools a domain discriminator into treating source and target representations as indistinguishable. Optimal transport-based methods such as DeepJDOT align source and target feature distributions in a geometrically principled manner.
  - In large language models, domain adaptation is commonly achieved through continued pre-training on domain-specific corpora (e.g., biomedical or legal text), followed by supervised fine-tuning or LoRA-based parameter-efficient adaptation. Techniques such as instruction tuning and RLHF further steer model behaviour toward target-domain requirements. Domain adaptation is closely related to knowledge distillation when a large source-domain teacher is used to transfer representations to a smaller target-domain student model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
