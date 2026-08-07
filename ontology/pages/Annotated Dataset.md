public:: true

# Annotated Dataset
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:caa8b680d1fadc3a8d7aa04cc4e719be5ae51feadffff5c3421bd6253309585d",
  "@type": "Page",
  "vc:slug": "annotated-dataset",
  "title": "Annotated Dataset",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:dataset", "vc:label": "Dataset"},
    {"@id": "urn:visionflow:linked:data-annotation", "vc:label": "Data Annotation"},
    {"@id": "urn:visionflow:linked:supervised-learning", "vc:label": "Supervised Learning"},
    {"@id": "urn:visionflow:linked:active-learning", "vc:label": "Active Learning"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:annotated-dataset",
  "@type": "Class",
  "label": "Annotated Dataset",
  "definition": "A dataset in which each example carries human- or machine-assigned labels — class names, bounding boxes, segmentation masks, transcripts, action-unit codes, or relevance judgements — produced under a documented annotation scheme with quality controls such as inter-annotator agreement; annotated datasets are the primary fuel of supervised learning, and their coverage, label accuracy, and demographic balance bound the accuracy and fairness of every model trained on them.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:dataset",
    "label": "Dataset"
  },
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:data-annotation", "label": "Data Annotation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:face-recognition", "label": "Face Recognition"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:active-learning", "label": "Active Learning"},
      {"@id": "urn:ngm:class:synthetic-data-generation", "label": "Synthetic Data Generation"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A dataset in which each example carries human- or machine-assigned labels — class names, bounding boxes, segmentation masks, transcripts, action-unit codes, or relevance judgements — produced under a documented annotation scheme with quality controls such as inter-annotator agreement; annotated datasets are the primary fuel of supervised learning, and their coverage, label accuracy, and demographic balance bound the accuracy and fairness of every model trained on them."

- ### Semantic Classification
  - owl-class:: machine-learning:AnnotatedDataset
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Dataset]]
  - requires:: [[Data Annotation]]
  - enables:: [[Supervised Learning]], [[Face Recognition]]
  - related-to:: [[Active Learning]]

- ### Content

  ## Definition

  An **annotated dataset** is a [[Dataset]] whose raw examples — images, audio, video, text, sensor streams — have been enriched with ground-truth labels according to a defined annotation scheme. The labels can be as simple as one class name per image or as elaborate as per-pixel segmentation masks, temporal event boundaries, syntactic parse trees, or the Facial Action Coding System's action-unit intensities, which require certified coders and minutes of expert time per second of video.

  Annotated data is the binding constraint of [[Supervised Learning]]: model capacity and compute have grown far faster than the supply of high-quality labels. Landmark corpora — ImageNet for object recognition, COCO for detection and segmentation, LibriSpeech for speech, SQuAD for reading comprehension — each catalysed years of progress precisely because they paired scale with consistent annotation. In this graph, systems such as [[Face Recognition]] and the Facial Action Coding System depend on annotated corpora both for training and for benchmarking claimed accuracy.

  Quality is a first-class property, not an afterthought. Annotation guidelines, annotator training, overlapping assignments measured by inter-annotator agreement (Cohen's or Krippendorff's coefficients), adjudication of disagreements, and audits for demographic balance together determine whether a dataset teaches a model the intended concept or an artefact of the labelling process. Label noise silently caps achievable accuracy, and skewed coverage propagates directly into biased model behaviour.

  ## Current Landscape

  - **Industrialised labelling**: commercial platforms (Scale AI, Labelbox, Appen) and open tooling (Label Studio, CVAT) manage workforces, task routing, and quality metrics; RLHF preference labelling has become a major annotation category for large language models.
  - **Label-efficient learning**: [[Active Learning]] selects the most informative examples for human labelling; weak supervision (e.g. Snorkel) compiles noisy heuristic labelling functions into probabilistic labels; self-supervised pre-training shrinks the labelled data needed downstream.
  - **Model-assisted annotation**: pre-labelling by an existing model with human correction routinely cuts annotation cost several-fold, at the risk of anchoring annotators to model errors.
  - **Synthetic augmentation**: [[Synthetic Data Generation]] supplies perfectly labelled artificial examples for rare classes and privacy-constrained domains, complementing rather than replacing human-annotated evaluation sets.
  - **Documentation norms**: datasheets for datasets and data statements are increasingly expected, recording provenance, annotation protocol, agreement scores, and known gaps.
  - **Market and strategic value (2025–2026)**: the data-labelling / annotation market is estimated at roughly £2.0–2.6bn (US$2.3–2.8bn) in 2025–2026, growing ~22–33% annually toward US$7–28bn by the early 2030s. In June 2025 Meta invested US$14.3bn for a ~49% non-voting stake in Scale AI (implying a ~US$29bn valuation), installing founder Alexandr Wang as Meta's chief AI officer; the deal pushed OpenAI, Google and Anthropic to diversify vendors.
  - **RLHF-led workload shift**: bootstrapped rival Surge AI passed US$1bn ARR as Anthropic's named reference RLHF partner for Claude, while Mercor reached ~US$20bn in 2026 talks. The annotation mix has inverted from bounding-boxes-and-entity-tags to domain-expert response-quality rating, pairwise-completion comparison, hallucination flagging and LLM-judge calibration.

  **Sources**:
  - https://www.reuters.com/business/scale-ais-bigger-rival-surge-ai-seeks-up-1-billion-capital-raise-sources-say-2025-07-01/
  - https://www.mordorintelligence.com/industry-reports/data-labeling-market
  - https://valueaddvc.com/blog/how-does-scale-ai-make-money-data-labeling-rlhf-and-the-meta-14-3b-stake
  - https://market.us/report/ai-annotation-market/
