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
  "definition": "The International Conference on Learning Representations (ICLR) is a premier academic venue dedicated to research in deep learning and representation learning, co-founded in 2013 by Yoshua Bengio and Yann LeCun to provide a focused home for the emerging field. ICLR is distinguished by its fully open, internet-based double-open peer review conducted on the OpenReview platform, making submitted manuscripts, reviewer critiques, and author rebuttals publicly visible throughout the review cycle. The conference covers neural network architectures, optimisation methods, generalisation theory, self-supervised learning, reinforcement learning, and the intersection of deep learning with natural language processing, computer vision, and scientific domains. ICLR ranks among the three most competitive machine-learning venues globally and has been the publication forum for many landmark advances including attention-based sequence models, large-language-model scaling investigations, and representation-learning theory.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-conference", "label": "Machine Learning Conference"}],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:academic-conference-series", "label": "Academic Conference Series"},
      {"@id": "urn:ngm:class:ai-research-community", "label": "AI Research Community"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:icml", "label": "ICML"},
      {"@id": "urn:ngm:class:neurips", "label": "NeurIPS"},
      {"@id": "urn:ngm:class:cvpr", "label": "CVPR"},
      {"@id": "urn:ngm:class:aaai", "label": "AAAI"},
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"},
      {"@id": "urn:ngm:class:openreview", "label": "OpenReview"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"},
      {"@id": "urn:ngm:class:self-supervised-learning", "label": "Self-Supervised Learning"},
      {"@id": "urn:ngm:class:open-peer-review", "label": "Open Peer Review"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:representation-learning", "label": "Representation Learning"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:scientific-machine-learning", "label": "Scientific Machine Learning"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:closed-peer-review", "label": "Closed Peer Review"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:neuroscience", "label": "Neuroscience"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:international-conference-on-learning-representations", "label": "International Conference on Learning Representations"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - ICLR (International Conference on Learning Representations) is a top-tier [[Machine Learning]] conference co-founded in 2013 by [[Yoshua Bengio]] and [[Yann LeCun]], dedicated to the theoretical and applied study of how computational systems can learn useful internal representations from raw data. It operates via a fully open [[Peer Review]] process on the [[OpenReview]] platform, making it structurally distinct from most academic venues in [[Artificial Intelligence]]. ICLR has become a primary publication forum for advances in [[Deep Learning]], [[Representation Learning]], [[Reinforcement Learning]], and the application of neural methods to [[Natural Language Processing]] and [[Computer Vision]].

- ### Overview
  - ICLR was established to give the nascent deep learning community a dedicated home at a time when related work was fragmented across [[NeurIPS]], [[ICML]], and domain-specific venues such as [[ACL]] and [[CVPR]].
  - The conference centres on the belief that learning good representations of data is the key bottleneck in building intelligent systems — a position sometimes called the "representation learning hypothesis".
  - Papers are submitted in late September or early October, undergo double-blind open review from November through January, and the programme is announced in late January for a conference held in late April or early May.
  - The open-review model means that anyone can read submitted manuscripts, post public comments, and observe the exchange between authors and reviewers — a significant departure from the closed norms of most scientific publishing.
  - ICLR is operated as a non-profit organisation and has grown from a few hundred submissions in its early years to more than ten thousand per year by the mid-2020s, reflecting the global explosion of interest in [[Machine Learning]] research.
  - Acceptance rates fell from roughly 40–50% in early editions to below 25% by the early 2020s, making ICLR acceptance highly competitive and a meaningful signal of research quality in the field.

- ### Key Components
  - **OpenReview Platform** — the technical backbone of ICLR's peer-review process. All manuscripts are uploaded to [[OpenReview]], where they receive official reviewer scores and public "meta-reviews" from area chairs. Community members may post open questions and commentary, creating a layered discourse absent from traditional venues.
  - **Programme Committee** — organised into area chairs and reviewers drawn from industry research labs (Google DeepMind, Meta FAIR, OpenAI, DeepSeek) and top academic departments. The size of this committee has scaled to several thousand members to handle submission volume.
  - **Spotlight and Oral Presentations** — a tiered presentation system where a small fraction of accepted papers (typically 1–5%) receive oral slots and a further 10–15% receive spotlight presentations. The majority of acceptances are presented as posters. This hierarchy influences perceived prestige within the community.
  - **Workshop Programme** — held on the first and final days of the conference, workshops provide space for emerging topics such as [[Responsible AI]], [[Scientific Machine Learning]], [[Graph Neural Networks]], and the intersection of [[Deep Learning]] with [[Neuroscience]], physics, and climate modelling.
  - **Reproducibility Initiative** — ICLR has encouraged submission of code alongside papers and has hosted reproducibility challenges, reinforcing [[Open-Source AI]] norms and making it easier for the community to build on published results.
  - **Blogpost Track** — a novel track introduced in the 2020s that peer-reviews long-form explanatory blog posts about existing work, extending ICLR's reach into science communication and fostering [[Knowledge Dissemination]] across skill levels.

- ### Mechanisms
  - **Double-Open Review** — unlike double-blind review (where author and reviewer identities are hidden from each other but not from editors), ICLR uses a system in which the manuscript is public but reviewer identities are withheld from authors. This asymmetry is debated: it enables community commentary but has been criticised for potential social dynamics that disadvantage unknown authors.
  - **Author Rebuttal Period** — after receiving initial reviews, authors may submit structured rebuttals addressing reviewer concerns. Reviewers can then update scores. This iterative dialogue is uncommon in computer science publishing and has been studied as a model for improving [[Peer Review]] quality.
  - **Area Chair Meta-Review** — area chairs synthesise reviewer opinions and author rebuttals into a final recommendation, providing an additional quality-control layer that corrects for reviewer inconsistency.
  - **Reject-and-Resubmit Norm** — because ICLR submissions are public on arXiv from the moment they are posted, a rejected ICLR paper can be immediately revised and submitted elsewhere without stigma. This "open arXiv norm" has been widely adopted by the [[NLP]] and [[Computer Vision]] communities.

- ### Applications / Use Cases
  - **Foundational Architecture Research** — ICLR has been the primary venue for papers introducing or analysing core neural network components: attention mechanisms (Bahdanau et al., 2015), the Adam optimiser (Kingma and Ba, 2015), residual connections analysis, and [[Transformer]] scaling behaviour.
  - **Large-Scale Language Modelling** — key papers studying the emergence of capabilities in [[Large Language Models]], scaling laws, and in-context learning have been published at or presented at ICLR, establishing it as a venue for the science underlying systems like GPT and Gemini.
  - **Self-Supervised and Contrastive Learning** — research on methods such as SimCLR, BYOL, and DINO, which enable learning from unlabelled data (a pillar of modern [[Foundation Model]] development), has featured prominently at ICLR.
  - **Reinforcement Learning Theory and Practice** — from model-based RL to offline RL to safe RL, ICLR serves as a key venue alongside [[NeurIPS]] for theoretical and empirical RL contributions, bridging to robotics and [[AI Safety Research]].
  - **Scientific Applications of ML** — the conference has become increasingly important for [[Scientific Machine Learning]], including neural differential equations, physics-informed networks, protein structure prediction methodology, and climate emulation using neural surrogates.
  - **Fairness, Accountability, and Transparency** — research on bias in machine learning models, interpretability, and the societal implications of AI has grown as a track, connecting ICLR to the broader [[Responsible AI]] discourse.
  - **Peer-Review Research** — because ICLR's full review data are publicly available on [[OpenReview]], the conference has itself become a laboratory for empirical research on reviewer behaviour, scoring consistency, and the influence of author prestige on acceptance rates.

- ### Relationships
  - partOf:: [[Academic Conference Series]]
  - partOf:: [[AI Research Community]]
  - relatedTo:: [[ICML]]
  - relatedTo:: [[NeurIPS]]
  - relatedTo:: [[CVPR]]
  - relatedTo:: [[AAAI]]
  - relatedTo:: [[AI Safety Research]]
  - relatedTo:: [[Open-Source AI]]
  - relatedTo:: [[OpenReview]]
  - enables:: [[Deep Learning]]
  - enables:: [[Transfer Learning]]
  - enables:: [[Generative Model]]
  - enables:: [[Self-Supervised Learning]]
  - enables:: [[Open Peer Review]]
  - uses:: [[Transformer]]
  - uses:: [[Attention Mechanism]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Representation Learning]]
  - supports:: [[Neural Network]]
  - supports:: [[Large Language Model]]
  - supports:: [[Scientific Machine Learning]]
  - contrastsWith:: [[Closed Peer Review]]
  - bridges-to:: [[Neuroscience]]
  - bridges-to:: [[Natural Language Processing]]
  - bridges-to:: [[Computer Vision]]

- ### Standards & Context
  - ICLR does not formally produce technical standards but has exercised considerable normative influence on research practice in machine learning.
  - The adoption of [[OpenReview]] as the standard platform for AI conference submissions has spread from ICLR to portions of [[NeurIPS]], [[ICML]], [[EMNLP]], and [[ICCV]], making ICLR's open-review model a de facto norm for the top tier of the field.
  - ICLR's code-submission requirement has influenced expectations across the field: journals such as the Journal of Machine Learning Research and many [[NeurIPS]] tracks now encourage or require code release, reinforcing [[Reproducible Research]] norms.
  - The conference is affiliated with the broader ecosystem of academic machine learning governance discussed in organisations such as the [[Partnership on AI]] and contributes to community norms around [[Research Ethics]] in AI.
  - ICLR operates under a Code of Conduct requiring respectful scientific discourse, and its open review system has prompted community discussions about how to handle harassment or bad-faith reviews — a live governance challenge for the field.
  - Proceedings are published under open access terms, consistent with the community norm that peer-reviewed machine learning research should be freely accessible, in contrast to paywalled publication models in some adjacent disciplines.

- ### Historical Milestones
  - **2013** — First edition held in Scottsdale, Arizona; co-founded by [[Yoshua Bengio]] and [[Yann LeCun]] with explicit focus on representation learning.
  - **2015** — Bahdanau et al. attention paper and Adam optimiser paper establish ICLR as a primary venue for sequence modelling and optimisation research, both becoming among the most-cited papers in the history of machine learning.
  - **2018–2019** — Rapid growth in submissions from industry labs; acceptance rate drops below 30%; workshop programme expands to cover fairness, climate, and neuroscience.
  - **2020** — First fully virtual edition due to COVID-19 pandemic; pioneered hybrid virtual conference formats later adopted by [[NeurIPS]] and [[ICML]].
  - **2022–2023** — Introduction of the Blogpost Track; reproducibility standards strengthened; emergence of [[Large Language Model]] research as dominant thematic thread.
  - **2024–2025** — Submission volumes exceed ten thousand; ICLR implements desk-reject filters and area-chair triage to manage scale while maintaining review quality; Vienna and Singapore editions reflect continued global rotation.

- ### Provenance
  - sources:: Established knowledge of ICLR history, OpenReview platform, and machine learning research community norms.
  - updated:: 2026-06-13
