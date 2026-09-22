public:: true

# AI Research
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:06f563853591cd2a7f0739d7a2eaeb247d929c93ffab72c7ea31e896fcc4fd88",
  "@type": "Page",
  "vc:slug": "ai-research",
  "title": "AI Research",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:ai-ecosystem",
      "vc:label": "AI Ecosystem"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:neurips",
      "vc:label": "NeurIPS"
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
  "@id": "urn:ngm:class:ai-research",
  "@type": "Class",
  "label": "AI Research",
  "definition": "AI research is the systematic scientific investigation of methods for creating and understanding machine intelligence, spanning theoretical foundations, algorithm and architecture development, empirical benchmarking, and the study of capabilities, limitations, safety, and societal impact. It is conducted across universities, corporate laboratories, and independent institutes, and disseminated through peer-reviewed venues such as NeurIPS, ICML, and AAAI, as well as preprint servers and open-source releases.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:artificial-intelligence",
    "label": "Artificial Intelligence"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-ecosystem",
        "label": "AI Ecosystem"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence-research",
        "label": "Artificial Intelligence Research"
      }
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
  - "AI research is the systematic scientific investigation of methods for creating and understanding machine intelligence, spanning theoretical foundations, algorithm and architecture development, empirical benchmarking, and the study of capabilities, limitations, safety, and societal impact. It is conducted across universities, corporate laboratories, and independent institutes, and disseminated through peer-reviewed venues such as NeurIPS, ICML, and AAAI, as well as preprint servers and open-source releases."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIResearch
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - part-of:: [[AI Ecosystem]]
  - uses:: [[Machine Learning]]
  - related-to:: [[Artificial Intelligence Research]]

- ### Content

  ## Definition

  **AI research** is the collective scientific enterprise of advancing machine intelligence. It spans a broad methodological spectrum: mathematical theory (learning theory, optimisation, information theory), empirical work (training and benchmarking models), systems research (efficient training and inference infrastructure), and increasingly the study of the behaviour, safety, and societal consequences of deployed systems. The field's outputs circulate through peer-reviewed conferences such as [[NeurIPS]], ICML, ICLR, and [[AAAI]], through preprint servers — arXiv now receives thousands of AI submissions per month — and through open-source model and code releases that have become primary research artefacts in their own right.

  The institutional landscape of AI research has shifted markedly since the 2010s. Historically centred in university departments, the frontier of large-scale empirical research has migrated towards well-capitalised corporate laboratories that control the compute and data required to train state-of-the-art models. Universities, including UK institutions such as [[University College London]], Oxford, Cambridge, and Edinburgh, remain central to theory, novel methods, interdisciplinary work, and training the researchers the wider [[AI Ecosystem]] depends on.

  This compute divide has become a defining structural feature of the field: academic groups increasingly focus on analysis, evaluation, efficiency, and post-hoc science of large models, while frontier training runs concentrate in a handful of industrial labs. National responses — sovereign compute programmes, public research clouds, and dedicated institutes — aim to rebalance access.

  ## Current Landscape

  - **Venues**: NeurIPS, ICML, ICLR dominate machine learning; AAAI and IJCAI represent the broader AI tradition, including symbolic reasoning, planning, and multi-agent systems. NeurIPS 2025 (2–7 December, dual-sited in San Diego and Mexico City) received 21,575 main-track submissions and accepted 5,290 papers (24.5%) — more than double the 2020 submission volume — and added a Position Paper Track alongside its Datasets & Benchmarks Track (1,995 submissions).
  - **Publication scale**: arXiv submissions across cs.AI, cs.CL, and cs.LG grew from about 17,600 in 2018 to roughly 115,000 in 2025 — around a 30% compound annual growth rate, with cs.AI alone up more than thirteenfold.
  - **Publication culture**: rapid preprint-first dissemination, open review experiments, and artefact evaluation; reproducibility checklists are now standard at major venues, and the NeurIPS datasets track mandates persistent hosting with Croissant metadata.
  - **Research directions (2025–26)**: test-time/inference scaling and reasoning models, agentic systems (agentic-workflow papers more than doubled between half-year windows into 2026), multimodal vision-language models, alignment and interpretability, data curation, and efficient inference.
  - **UK context**: the Alan Turing Institute, AI Security Institute (renamed from AI Safety Institute in February 2025), and university labs anchor a strong national research base; UK-based groups are particularly prominent in reinforcement learning, machine learning theory, and AI safety.

  **Sources**:
  - https://intuitionlabs.ai/articles/neurips-2025-conference-summary-trends
  - https://blog.neurips.cc/2025/12/05/neurips-datasets-benchmarks-track-from-art-to-science-in-ai-evaluations/
  - https://moclaw.ai/blog/arxiv-ai-paper-explosion-2026
  - https://paperscode.org/articles/ai-research-trends-h1-2026/
