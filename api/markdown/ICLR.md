public:: true

# ICLR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:iclr",
  "@type": "Page",
  "vc:slug": "iclr",
  "title": "ICLR",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iclr",
  "@type": "Class",
  "label": "ICLR",
  "definition": "The International Conference on Learning Representations (ICLR) is a premier academic venue focused on deep learning and representation learning research, established in 2013 by Yoshua Bengio and Yann LeCun. It is distinctive for its fully open, internet-based peer-review process on the OpenReview platform, where submitted papers, reviews, and author rebuttals are visible to the public. ICLR has become one of the most competitive and influential conferences in the AI research community, publishing foundational work on neural network architectures, training methods, and generalisation theory.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:icml", "label": "ICML"},
      {"@id": "urn:ngm:class:cvpr", "label": "CVPR"},
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ICLR (International Conference on Learning Representations) is a top-tier machine learning conference noted for its open peer-review system and its focus on foundational research in deep learning, representation learning, and related theoretical topics.

- ### Relationships
  - ICLR sits within the [[Machine Learning]] research landscape alongside [[ICML]] and [[CVPR]] as one of the three most selective AI venues. Papers accepted at ICLR have introduced landmark [[Transformer]] architectures, [[Attention Mechanism]] variants, [[Transfer Learning]] methods, and [[Generative Model]] frameworks. The conference's open-review format on OpenReview.net has been influential in promoting [[Open-Source AI]] norms. [[Deep Learning]], [[Reinforcement Learning]], and [[Neural Network]] architecture research all feature prominently in the programme. [[AI Safety Research]] has grown as a track since the late 2010s.

- ### Content
  - ICLR was founded in 2013 by Yoshua Bengio and Yann LeCun with the explicit goal of creating a dedicated venue for representation learning — the study of how machines can automatically discover useful internal representations of raw data. Prior to ICLR, deep learning papers were scattered across NIPS (now NeurIPS), ICML, and domain-specific venues without a single focused home.

  - The conference's most distinctive structural feature is its fully open, double-open peer review on OpenReview.net. Unlike most academic conferences, both paper submissions and reviewer comments are publicly visible during the review period, enabling community feedback alongside official reviews. This transparency has been controversial — it risks public shaming of weak papers — but proponents argue it reduces inconsistency and corruption in reviewing, and it has been widely studied as a governance model for scientific peer review.

  - ICLR's acceptance rates have declined sharply as the field has grown. In its early years nearly half of submitted papers were accepted; by the 2020s acceptance rates fell below 30% and then below 25%, reflecting the explosion of submissions from both academia and industry. The programme committee expanded correspondingly, with thousands of reviewers drawn from top research groups worldwide.

  - Seminal papers first published at ICLR include the attention-based neural machine translation work by Bahdanau et al. (2015), the Adam optimiser, generative adversarial network training analyses, and early work on large language model scaling laws. The conference has a strong tradition of also accepting negative and replication results, making it a venue where the community genuinely debates whether claimed advances hold under scrutiny.

  - ICLR alternates between North American, European, and Asian host cities and is typically held in late April or May. Its workshop programme, held on the first and last days, provides space for emerging topics and interdisciplinary work that bridges AI with physics, neuroscience, climate science, and policy — reflecting the broadening scope of what representation learning encompasses as the field matures.
