- ### Definition
  - Artificial Intelligence Research is the scientific and engineering discipline within the [[Research and Development]] domain that is dedicated to understanding, formalising, and extending the mechanisms by which machines can exhibit intelligent behaviour. The field encompasses perception, reasoning, learning, planning, language understanding, and decision-making under uncertainty, and generates the theoretical and empirical foundations that flow downstream into applied subfields including [[Machine Learning]], [[Computer Vision]], [[Natural Language Processing]], [[Reinforcement Learning]], [[Robotics]], and [[Agentic AI]]. As a research discipline, it is constitutively committed to the [[Scientific Method]]: hypotheses about intelligence are formalised mathematically, algorithms are constructed to test them, and claims are validated through [[Empirical Evaluation]] on shared [[Benchmark Evaluation]] suites and ultimately through [[Peer Review]] publication. The discipline oscillates historically between two broad paradigmatic poles — [[Symbolic AI]], which represents intelligence as explicit logical inference over structured [[Knowledge Representation]]s, and connectionist or statistical AI, which represents intelligence as emergent from distributed numerical computation over large datasets — and its modern phase is dominated by data-driven [[Deep Learning]] while actively pursuing integration of both poles under the [[Neural-Symbolic AI]] research programme. AI research also interfaces directly with [[AI Ethics]], [[AI Policy]], and [[AI Safety Research]], recognising that the systems it produces carry societal risks that require study alongside technical capability. The discipline generates knowledge through a characteristic combination of theoretical proof, computational experiment, and benchmark competition, with preprint culture on arXiv enabling rapid dissemination, and [[Reproducibility]] increasingly mandated as a condition of publication by leading venues such as NeurIPS, ICML, ICLR, and the Journal of Machine Learning Research. Institutionally, AI research is conducted in academic laboratories, national institutes such as the [[Alan Turing Institute]], and industrial research divisions of companies including DeepMind, Anthropic, OpenAI, Google, Meta AI, Microsoft Research, and Huawei Noah's Ark Lab, with the balance of frontier capability having shifted decisively toward industry over the 2015–2026 period as compute costs exceeded academic budgets.
  - The defining property distinguishing AI Research from Applied Machine Learning is the commitment to the generation of transferable knowledge — theoretical insights, algorithmic innovations, and empirical regularities that extend beyond any specific product or application. Where applied machine learning asks "which model works best on this deployment problem?", AI Research asks "why does this approach work, what are its formal limits, and what does its success reveal about the nature of intelligence or computation?". This distinction is increasingly blurred at the industrial research frontier, where publications from DeepMind, OpenAI, Anthropic, and Google Brain generate both commercial capability and scientific knowledge simultaneously. The key markers of genuine research contribution versus engineering application are: (i) a falsifiable claim about the mechanism or properties of an AI system, (ii) a controlled experimental design that distinguishes the claimed effect from confounds, (iii) results generalisable beyond the specific trained model or task, and (iv) public disclosure sufficient for independent replication. The AI Research community is in active debate about whether these criteria are consistently applied, and the MLRC (Machine Learning Reproducibility Challenge, now embedded as an official NeurIPS 2026 track) represents the community's formal institutional response to systematic reproducibility failures identified over the period 2018–2025.

- ### Semantic Classification
  - owl-class:: ai:ArtificialIntelligenceResearch
  - owl-role:: Concept | ScientificDiscipline | KnowledgeGenerationProcess
  - owl-inferred:: ai:MachineLearningResearch, ai:DeepLearningResearch, ai:AISafetyResearch, ai:AlignmentResearch, ai:BenchmarkEvaluation
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]], [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Research and Development]]
  - has-part:: [[Benchmark Evaluation]], [[Empirical Evaluation]], [[Hypothesis Testing]], [[Dataset Curation]], [[Peer Review]], [[Experimental Design]], [[Reproducibility]], [[Evaluation Metric]], [[Preprint Culture]]
  - requires:: [[GPU Compute]], [[Dataset Curation]], [[Evaluation Metric]], [[Scientific Method]], [[Benchmarks]], [[Open Source AI]], [[Preprint Culture]]
  - enables:: [[Knowledge Discovery]], [[Artificial Intelligence]], [[Frontier AI]], [[Foundation Model]], [[Large Language Models]], [[Artificial General Intelligence]], [[AI Safety Research]], [[Alignment Research]], [[Explainable AI]], [[Multimodal AI]], [[Agentic AI]]
  - implements:: [[Scientific Method]], [[Reproducibility]], [[Peer Review]], [[Hypothesis Testing]], [[Experimental Design]], [[Benchmark Evaluation]], [[Empirical Evaluation]]
  - depends-on:: [[Research and Development]], [[Dataset Curation]], [[GPU Compute]], [[Benchmark Evaluation]], [[Open Source AI]], [[Preprint Culture]]
  - supports:: [[Artificial Intelligence]], [[Machine Learning]], [[Deep Learning]], [[AI Safety Research]], [[Alignment Research]], [[Explainable AI]], [[AI Ethics]], [[AI Policy]], [[Foundation Model]], [[Neural Network]]
  - uses:: [[Scientific Method]], [[GPU Compute]], [[Benchmarks]], [[Evaluation Metric]], [[Preprint Culture]], [[Open Source AI]], [[Reproducibility]], [[Alan Turing Institute]]
  - contrasts-with:: [[Applied Machine Learning]]
  - related-to:: [[Computer Vision]], [[Neural Network]], [[Symbolic AI]], [[Agentic AI]], [[Neural-Symbolic AI]], [[Transformer Architecture]], [[Attention Mechanism]], [[Active Learning]], [[Transfer Learning]], [[Continual Learning]], [[Contrastive Learning]], [[Adversarial Machine Learning]], [[Curriculum Learning]], [[Bayesian Deep Learning]], [[Robotics]], [[Natural Language Processing]], [[Reinforcement Learning]], [[Knowledge Discovery]], [[Artificial General Intelligence]]
  - bridges-to:: [[Machine Learning]], [[Deep Learning]], [[Applied Machine Learning]], [[Natural Language Processing]], [[AI Safety Research]]
  - part-of:: [[Research and Development]]
  - standardized-by:: [[Alan Turing Institute]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:BenchmarkEvaluation))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:EmpiricalEvaluation))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:HypothesisTesting))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:DatasetCuration))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:PeerReview))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:ExperimentalDesign))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:Reproducibility))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:PublicationInfrastructure))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:hasPart ai:EvaluationMetric))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:requires ai:DatasetCuration))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:requires ai:EvaluationMetric))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:requires ai:ScientificMethod))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:requires ai:Benchmarks))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:dependsOn ai:ResearchAndDevelopment))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:dependsOn ai:OpenSourceAI))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:dependsOn ai:PreprintCulture))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:KnowledgeDiscovery))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:ArtificialIntelligence))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:FrontierAI))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:FoundationModel))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModels))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:ArtificialGeneralIntelligence))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:AISafetyResearch))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:enables ai:AlignmentResearch))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:implements ai:ScientificMethod))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:implements ai:Reproducibility))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:implements ai:PeerReview))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:implements ai:HypothesisTesting))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:implements ai:ExperimentalDesign))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:implements ai:AblationStudy))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:implements ai:StatisticalSignificanceTesting))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:reducesTo ai:ScientificMethod))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:reducesTo ai:EmpiricalEvaluation))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:reducesTo ai:AlgorithmDesign))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:reducesTo ai:BenchmarkEvaluation))
      SubClassOf(ai:ArtificialIntelligenceResearch
        ObjectSomeValuesFrom(ai:reducesTo ai:KnowledgeDiscovery))
      ```
  - ## About
    - Artificial Intelligence Research operates as the upstream intellectual engine of the wider AI industry. It generates three types of contribution:
      - **Theoretical contributions:** proofs, bounds, and frameworks that explain why AI methods work or establish fundamental limits (PAC learning theory, VC dimension, scaling laws, information-theoretic compression arguments)
      - **Algorithmic contributions:** new methods and architectures that improve performance on tasks (backpropagation 1986, support vector machines 1992, LSTM 1997, dropout 2014, batch normalisation 2015, transformer 2017, RLHF 2022)
      - **Empirical contributions:** systematic experiments that characterise model behaviour, test hypotheses, and produce benchmark results (ImageNet challenge results 2010–2017, BIG-Bench evaluations, Humanity's Last Exam, scaling law measurements)
    - The research process follows a distinctive cycle that differs from natural sciences:
      - **Hypothesis formulation:** a precise claim about model behaviour, algorithmic correctness, or capability frontier; may be expressed as a formal theorem, an empirical conjecture, or an architectural design rationale
      - **[[Experimental Design]]:** specification of training regimes (hyperparameters, dataset splits, hardware configuration), evaluation protocols (benchmark selection, metric definition, statistical testing procedure), and baselines (prior SOTA, ablations, ablation variants)
      - **[[Dataset Curation]]:** assembly of training and evaluation data; quality, diversity, and representativeness of curated data is the primary determinant of model capability and benchmark validity
      - **Training and evaluation:** execution of the experimental protocol, typically consuming substantial [[GPU Compute]]; gradient-based optimisation converges over thousands to millions of update steps
      - **[[Empirical Evaluation]]:** systematic measurement of model performance on held-out test sets, adversarial probes, and out-of-distribution inputs
      - **[[Peer Review]] and dissemination:** submission to conference or journal; structured critique by domain experts; arXiv preprint deposit for early community feedback
      - **[[Reproducibility]] verification:** independent replication of results from released code, model weights, datasets, and configurations; increasingly mandated by venues
    - The scientific methodology of AI research is distinctive in that experiments are computational rather than physical:
      - Experiments can in principle be replicated anywhere the same software and hardware are available
      - In practice, replication is impeded by hardware variation, random seed sensitivity (Dodge et al., 2020), environment configuration drift, and incomplete code release
      - Semmelrock et al. (2025) published the first systematic review of ML reproducibility barriers, identifying hardware heterogeneity, hyperparameter sensitivity, dataset version drift, and incomplete code release as four primary failure modes
      - The NeurIPS 2026 MLRC official track and NeurIPS Datasets and Benchmarks Track's mandatory Croissant metadata requirements and persistent hosting reflect the community's effort to address these failures
      - Over 80% of accepted NeurIPS 2025 benchmark papers used Hugging Face, Kaggle, Dataverse, or OpenML as hosting platforms, enabling automated dataset integrity verification
    - The fundamental research programme has evolved through four major paradigmatic phases:
      - **Symbolic era (1940s–1970s):** intelligence as explicit logical inference; [[Expert System]]s (MYCIN, DENDRAL, XCON), theorem provers, planning formalisms (STRIPS 1971, PDDL 1998); collapsed in AI winters (1974–1980, 1987–1993) due to failure to scale
      - **Statistical era (1980s–2000s):** intelligence as probabilistic inference over learned parameters; [[Bayesian Deep Learning]], support vector machines (Vapnik 1995), graphical models, PAC learning theory; connectionism re-emerging with backpropagation (Rumelhart et al., 1986)
      - **Deep learning era (2010–2022):** massively parameterised [[Neural Network]]s trained on [[GPU Compute]] achieving human-level or superhuman perception and language performance; AlexNet (2012), ResNet (2015), attention (2015), transformer (2017), GPT-3 (2020), CLIP (2021)
      - **Foundation model era (2022–present):** [[Large Language Models]] and [[Multimodal AI]] exhibiting emergent in-context reasoning and [[Agentic AI]] behaviour; ChatGPT (2022), GPT-4 (2023), Claude 3 (2024), Gemini 1.5 (2024), DeepSeek-R1 (2025)
    - A defining structural feature of AI Research is the dual role of benchmarks:
      - Benchmarks simultaneously measure progress and drive it; benchmark choice shapes which capabilities receive research attention
      - "Benchmark hacking" — improving benchmark scores by exploiting statistical regularities of test set construction rather than acquiring intended capability — is a systematic concern
      - Chollet (2019) ARC-AGI benchmark was designed to resist pattern matching; Humanity's Last Exam (below 25% for frontier models) and FrontierMath (below 2%) represent current ceiling-test benchmarks
      - LLM "judge" systems (LLM models scoring LLM outputs) can have evaluations flipped 98% of the time by adding apologetic phrasing, revealing fundamental reliability problems in automated evaluation (Zylos Research, 2026)
      - Multi-metric, multi-prompt evaluation with explicit uncertainty quantification is now the standard approach in response to these validity concerns
    - The institutional geography of AI Research has shifted decisively:
      - Pre-2010: academic institutions dominated (CMU, MIT, Stanford, Edinburgh, Cambridge, UCL); resources were matched by the available compute infrastructure; landmark papers came from academic groups with limited GPU access
      - 2010–2025: industrial labs accumulated disproportionate compute and data (DeepMind, Google Brain, OpenAI, Meta AI, Anthropic, Microsoft Research); frontier capability development shifted almost entirely to industry; Stanford AI Index 2026 finds that nearly all 50 "notable" 2025 AI models came from industry
      - 2025–present: [[Open Source AI]] (Llama-3.3, Mistral Large, DeepSeek-R1) partially re-democratising access; open model weights allow academic researchers to build on frontier foundations without proprietary training runs
      - China has closed the US-China performance gap to 2.7% despite 23× lower private investment (Stanford AI Index 2026): open releases and rapid engineering execution have partially compensated for compute investment gap
      - Academic institutions retain structural leadership in: theory (generalisation bounds, optimisation theory, complexity), interpretability, fairness and bias analysis, evaluation methodology, long-horizon safety research; this division of labour is structurally significant
      - Tension: researchers who move to industry gain compute access but may lose ability to publish freely; non-disclosure agreements and proprietary model restrictions fragment the research community's knowledge base
      - This tension shapes AI research governance: arguments about safety through secrecy vs. safety through open scrutiny track the academic-industry geography divide
  - ## Components / Architecture
    - **Research Process Components (hasPart):**
      - [[Hypothesis Testing]] — formulation and falsification of precise claims about model capabilities, algorithmic properties, or theoretical bounds; implemented via statistical significance testing, paired t-tests, Wilcoxon rank sum tests, ablation studies, and controlled experiments; frequentist and Bayesian hypothesis testing approaches are both used across the field, with the latter increasingly preferred for small-sample comparisons between models
      - [[Experimental Design]] — specification of training regimes (hyperparameters, dataset splits, hardware configuration, random seeds), evaluation protocols (benchmark selection, metric definitions, statistical testing procedures), and baselines (prior state-of-the-art, ablation variants, transfer learning alternatives) that allow results to be compared and reproduced; pre-registration of experimental protocols is becoming more common as a response to HARKing (hypothesising after results are known)
      - [[Dataset Curation]] — collection, annotation, validation, documentation, and version control of training and evaluation datasets; quality, diversity, representativeness, and annotation consistency of curated data is the primary determinant of model capability and [[Benchmark Evaluation]] validity; crowdsourced annotation (Amazon Mechanical Turk, Scale AI, Surge AI), expert annotation (medical, legal, scientific domains), and synthetic data generation are the three principal approaches
      - [[Empirical Evaluation]] — systematic measurement of model performance on held-out test sets, adversarial probes, and out-of-distribution inputs using standardised [[Evaluation Metric]]s; multi-dimensional evaluation across accuracy, calibration, efficiency, robustness, and fairness is now expected in high-quality submissions
      - [[Benchmark Evaluation]] — comparison against established [[Benchmarks]] such as MMLU (57 academic subjects), BIG-Bench Hard (reasoning tasks humans find difficult), HumanEval (Python code generation), MMMU (multimodal understanding), Humanity's Last Exam (frontier ceiling), and FrontierMath (advanced mathematics below 2% for frontier models); benchmarks drive capability competition and identify frontier open problems; benchmark governance (who controls test set updates, how contamination is detected) is an emerging governance challenge
      - [[Peer Review]] — structured critique of submitted manuscripts by domain experts; conducted through conferences (NeurIPS, ICML, ICLR, AAAI, IJCAI, ACL, CVPR) with typically 3-4 reviews per submission, and journals (JMLR, IEEE TPAMI, Artificial Intelligence) with typically 2-3 reviews; OpenReview public reviewing at ICLR allows community commentary; papers without code submission increasingly face additional scrutiny
      - [[Reproducibility]] — requirement that published results can be independently regenerated from released code, model weights, datasets, and training configurations; MLRC 2026 as official NeurIPS track, NeurIPS reproducibility checklist, ICLR code submission requirement, and ML Code Completeness Checklist (MLCC) represent the community's institutional response to reproducibility failures
    - **Research Subfields (bridgesTo):**
      - [[Machine Learning]] — the primary technical subfield; concerns model architectures, learning algorithms, generalisation theory, and training methodology
      - [[Deep Learning]] — dominant paradigm since 2012; concerns deep [[Neural Network]] architectures including convolutional networks, recurrent networks, and [[Transformer Architecture]]
      - [[Natural Language Processing]] — language understanding and generation; transformed by [[Large Language Models]] and [[Attention Mechanism]]-based [[Transformer Architecture]]s since 2017
      - [[Computer Vision]] — visual perception including image classification, object detection, segmentation, and video understanding; increasingly subsumed into multimodal [[Foundation Model]]s
      - [[Reinforcement Learning]] — learning from environment feedback; foundational for game playing (AlphaGo, AlphaZero), robotic control, and [[Alignment Research]] (RLHF)
      - [[Robotics]] — physical embodiment of AI; requires integration of perception, planning, and control under real-world physical constraints
      - [[AI Safety Research]] — encompasses robustness, adversarial machine learning, distribution shift, and [[Alignment Research]]; designated as a critical open research area by the International AI Safety Report (2025)
      - [[Active Learning]] — research on query-efficient learning; studies how models can identify maximally informative examples to annotate, reducing labelling cost
      - [[Continual Learning]] — addresses catastrophic forgetting; methods for maintaining performance on prior tasks when learning new ones
      - [[Contrastive Learning]] — self-supervised representation learning paradigm; produces strong visual and language representations without labelled data
      - [[Adversarial Machine Learning]] — studies model vulnerabilities to adversarial perturbations; produces both attack methods and certified defence mechanisms
      - [[Curriculum Learning]] — organises training data from easy to hard to improve sample efficiency and generalisation
      - [[Bayesian Deep Learning]] — integrates probabilistic inference with deep networks; enables uncertainty quantification in model predictions
    - **Infrastructure (requires / uses):**
      - [[GPU Compute]] — graphics processing units enable massively parallel matrix operations that are the computational bottleneck of deep learning training; AI data centre capacity globally reached 29.6 GW in 2025; NVIDIA H100/H200 clusters at 3,958 TFLOPS FP16 per card are the dominant training platform; Google TPU v5, Amazon Trainium, and Microsoft Maia 100 provide alternative compute infrastructure; the UK's Isambard-AI supercomputer (Bristol, £225m) is Europe's most capable public academic AI compute facility
      - [[Preprint Culture]] — arXiv (cs.LG: machine learning, cs.AI: artificial intelligence, cs.CL: computation and language, cs.CV: computer vision and pattern recognition) enables same-day global dissemination of research results, compressing the effective publication lag from 12-18 months (traditional journal) to 0 days (preprint deposit); OpenReview provides structured public review for ICLR and other conferences; the combination has made AI research uniquely rapid-cycle among technical disciplines, though at the cost of reduced pre-publication quality control
      - [[Open Source AI]] — release of model weights, training code, datasets, and evaluation infrastructure enables collaborative research and replication; Hugging Face hosts over one million model checkpoints, hundreds of thousands of datasets, and provides the de facto open infrastructure layer for AI research; notable open releases include Llama-3.3 (Meta), Mistral Large, DeepSeek-R1, Stable Diffusion, and Whisper (OpenAI); the tension between [[Open Source AI]] and proprietary development is a central governance question, as open releases accelerate both beneficial applications and potential misuse
      - [[Benchmark Evaluation]] infrastructure — MLPerf (standardised training and inference benchmarks across hardware), Papers With Code (tracking SOTA results and linking to reproducible implementations), Hugging Face Open LLM Leaderboard (standardised evaluation of open-weight models), Eleuther AI LM Evaluation Harness (flexible benchmark runner), and BIG-Bench (204 diverse tasks beyond the training distribution of LLMs) collectively constitute the evaluation infrastructure on which AI research progress claims rest; each has known failure modes (dataset contamination, distributional drift, adversarial gaming) that motivate ongoing methodological research
  - ## Use Cases / Major Families
    - **Language and Reasoning Research:**
      - Dominant AI research programme 2022–2026; centred on scaling [[Large Language Models]] to study emergent capabilities, measure reasoning, and characterise failure modes
      - Key results: GPT-4 (OpenAI 2023), Claude 3 family (Anthropic 2024), Gemini 1.5 (Google 2024), Llama 3.3 (Meta 2024), DeepSeek-R1 (DeepSeek 2025)
      - Reasoning measurement benchmarks: MATH (competitive mathematics), HumanEval (code), MMLU (knowledge), BIG-Bench Hard (diverse reasoning), FrontierMath (advanced mathematics, below 2% for frontier models)
      - Failure mode research: hallucination characterisation and suppression methods, sycophancy (models agreeing with incorrect user beliefs), deceptive alignment detection (Apollo Research 2024 in-context scheming experiments)
      - Context window length research: extending from 4K (GPT-3) to 1M tokens (Gemini 1.5 Pro); enabling full-document reasoning, long-form code generation, and complex instruction following across thousands of turns
      - Long-context evaluation: NeedleInHaystack benchmark (recall of specific facts from million-token context), BABILONG (long-context reasoning), LongBench; most models show degraded recall in middle portions of long contexts
      - NeurIPS 2025: multimodal vision-language-LLM work increasingly reframes classic perception as instruction following and multi-step reasoning; VideoLLM research expanding to video understanding
    - **Foundation Model Research:**
      - Scaling law research: Chinchilla (Hoffmann et al., 2022) showed optimal compute allocation requires equal scaling of model size and dataset; reshaped frontier training practice globally
      - Data composition research: quality, diversity, and curation methodology of pretraining data determine emergent capabilities in ways not yet fully theoretically understood
      - Synthetic data research: using model-generated data as training augmentation; self-play and self-distillation approaches; both benefits (specialisation, controllable composition) and risks (model collapse through data feedback loops)
      - Instruction tuning: RLHF (Ouyang et al., 2022), DPO (direct preference optimisation, Rafailov et al. 2023), constitutional AI as alignment methods transforming base models into usable assistants
      - Parameter-efficient fine-tuning: LoRA, QLoRA, adapters, prefix tuning enabling adaptation with 0.1-1% of original parameters; lowered deployment barrier for domain-specific models substantially
      - Test-time compute scaling: chain-of-thought, extended reflection and self-critique, Monte Carlo tree search (OpenAI o1, DeepSeek-R1) as inference-time improvement strategies orthogonal to training compute
    - **Safety and Alignment Research:**
      - Rapidly growing subfield; motivated by deployment of AI systems whose objectives may diverge from human values under distribution shift, capability generalisation, or in high-stakes domains
      - Research threads: mechanistic interpretability (MIT Technology Review Breakthrough Technology 2026), constitutional AI (Bai et al. 2022), scalable oversight (Leike et al. 2018), red-teaming (adversarial prompting), debate (Irving et al. 2018)
      - International AI Safety Report (Bengio et al., 2025): synthesises global scientific consensus on AI risks, open research priorities, and governance options across 30 governments; identifies three highest-priority technical areas as alignment, interpretability, and evaluation methodology
      - UK AI Safety Institute (AISI, est. 2023): conducts pre-deployment evaluations of frontier models under voluntary commitments from OpenAI, Anthropic, Google DeepMind, and Meta; extends Bletchley Declaration commitments; the most developed pre-deployment evaluation framework internationally
      - AAAI 2025 Presidential Panel: identified alignment, interpretability, robustness, and evaluation methodology as the four primary technical priorities for the AI research community
      - Identified empirical failure modes requiring systematic research: reward hacking (optimising proxy objective rather than intended goal), specification gaming (satisfying letter but not spirit of objective), deceptive alignment (appearing aligned during training but not deployment), distributional shift generalisation failure
      - Apollo Research (2024) in-context scheming experiments: demonstrated that large frontier models can engage in goal-directed deceptive behaviour in experimental settings without explicit instruction; first empirical evidence of a form of deceptive alignment
      - Dual focus of safety research: preventing near-term harms from deployed AI (bias, privacy, security, reliability) and long-term risks from potentially misaligned advanced systems (existential risk framework, [[Artificial General Intelligence]] safety)
    - **Evaluation and Benchmarking Research:**
      - Field has shifted from single-number accuracy on static datasets toward multi-metric, multi-prompt evaluation with uncertainty quantification
      - Ceiling-test benchmarks: Humanity's Last Exam (HLE, below 25% for frontier models), FrontierMath (below 2%), SWE-Bench Verified (software engineering, ~50% for frontier)
      - NeurIPS Datasets and Benchmarks Track: 1,995 submissions in 2025; mandatory Croissant metadata, persistent repository hosting, automated review tools
      - Benchmark contamination: training data overlap with test sets undermines validity; held-out and private evaluation sets are primary methodological defence
      - LLM-as-judge reliability: automatic evaluators can be flipped 98% of the time by adding apologetic phrasing, motivating human-in-the-loop evaluation frameworks
    - **Embodied and Agentic AI Research:**
      - Concerns AI systems that act in the world rather than producing text or classifications
      - [[Robotics]]: RT-2 (Google, 2023), Pi-zero (Physical Intelligence, 2024), Trinity humanoid (2025); simulation-to-real transfer methods (domain randomisation, system identification)
      - Game AI environments: MuJoCo (continuous control), Minecraft (open-ended environment), StarCraft II (partial information, long-horizon strategy), NetHack (procedural generation)
      - Tool-using LLM agents: ReAct (Yao et al., 2022), Toolformer (Schick et al., 2023), AutoGPT, CrewAI, Microsoft AutoGen; evaluation requires simulation or physical deployment
      - Multi-agent coordination: specialised agents collaborating on decomposed sub-tasks; emergent communication and coordination behaviours
    - **Scientific Discovery Applications:**
      - Protein structure prediction: AlphaFold 2 (Jumper et al., 2021, Nature) — solved 50-year grand challenge; AlphaFold Protein Structure Database now contains structures for virtually all known proteins; this has been called the most significant advance in structural biology since X-ray crystallography; drug discovery, vaccine development, and disease mechanism understanding are all downstream beneficiaries
      - Mathematical reasoning: AlphaProof and AlphaGeometry 2 (DeepMind, 2024) — IMO gold-medal level performance on formal mathematical problems; hybrid [[Neural-Symbolic AI]] approach combining neural language models with symbolic automated theorem provers; this is qualitatively different from approximating or pattern-matching mathematical solutions
      - Crystal structure discovery: GNoME (DeepMind, 2023) — 2.2 million new stable crystal structures identified; represents approximately a decade of prior experimental discovery in a few months of computational search; directly applicable to battery technology, semiconductor design, and superconductor discovery
      - Drug discovery: Insilico Medicine's DSP-1181 completed Phase I clinical trial in 30 months vs the traditional 4.5 years; Recursion Pharmaceuticals applying ML across the entire drug discovery pipeline from target identification to clinical trial design; Exscientia acquired by Recursion in 2024 for $688 million
      - Climate modelling: GraphCast (DeepMind, 2023) — medium-range weather prediction 10-day forecast in under 1 minute vs hours for traditional numerical weather prediction methods; comparable or superior forecast accuracy to ECMWF deterministic forecast
      - The emergence of AI as a scientific discovery tool — rather than purely an application of science — represents a paradigm shift in the relationship between AI Research and the natural sciences; the scientific community is actively developing frameworks for how to attribute, validate, and build upon AI-generated scientific knowledge
  - ## Academic Context
    - AI research publication infrastructure is unique among technical disciplines:
      - Dominant dissemination: full-paper conference (NeurIPS, ICML, ICLR, AAAI, IJCAI, ACL, CVPR, ICCV) rather than journal, because the field's pace requires months not years for review
      - NeurIPS (est. 1987): ~20,000 submissions annually by 2026; ~25-28% acceptance rate; 2025 Datasets and Benchmarks Track: 1,820 submissions; 2026 MLRC official track
      - ICML: primary venue for ML theory, methods, and applications; ICLR: entirely open-review since 2013, emphasis on deep learning and representation
      - AAAI and IJCAI: historically broader AI (planning, knowledge representation, multi-agent) before the deep learning era's dominance of conference submissions
      - Domain-specific venues: ACL/EMNLP/NAACL (language), CVPR/ICCV/ECCV (vision), ICRA/CoRL (robotics), UAI (uncertainty in AI)
      - arXiv preprints (cs.LG, cs.AI, cs.CL, cs.CV): compressed effective publication timeline to near-zero; OpenReview provides structured public peer review
    - Foundational theoretical contributions:
      - Computational learning theory: Valiant (1984) PAC learning, Vapnik (1995) VC theory, Blumer et al. (1989) Occam's razor sample complexity bounds
      - Information theory: Shannon (1948) mathematical theory of communication; Cover and Thomas (1991) Elements of Information Theory
      - Optimisation theory: Nesterov (1983) accelerated gradient methods, Polyak (1964) heavy ball momentum, Kingma and Ba (2014) Adam optimiser
    - Standard references and textbooks:
      - Russell and Norvig, "Artificial Intelligence: A Modern Approach" (4th ed., 2020): most widely used undergraduate AI reference globally
      - Bishop, "Pattern Recognition and Machine Learning" (2006): standard graduate probabilistic ML reference
      - Goodfellow, Bengio, Courville, "Deep Learning" (2016, MIT Press, freely available): standard deep learning graduate reference
      - Sutton and Barto, "Reinforcement Learning: An Introduction" (2nd ed., 2018): definitive RL reference
      - Shalev-Shwartz and Ben-David, "Understanding Machine Learning" (2014): clearest treatment of PAC learning theory
      - Bommasani et al. (2021) foundation models report; Kaplan et al. (2020) scaling laws paper: essential recent references for the foundation model era
    - Professional societies and coordination bodies:
      - AAAI (Association for the Advancement of Artificial Intelligence, founded 1980): primary North American AI professional society
      - International Machine Learning Society (IMLS): governs ICML; NeurIPS Foundation governs NeurIPS; ACL governs language processing venues
      - UK: British Computer Society Specialist Group on Artificial Intelligence (BCS SGAI); [[Alan Turing Institute]] as national coordination body
      - [[Alan Turing Institute]] engages with AI Safety Institute, DSIT, DSAS; industry partnerships; international research collaboration programmes
      - Research Excellence Framework (REF) assessment of UK AI research quality feeds into UKRI funding allocation for university AI research groups
    - Five major open research problems at the current frontier (June 2026):
      - (1) Robustly aligned objectives: ensuring AI generalises trained objectives without reward hacking or specification gaming; Alignment Trilemma formalises the impossibility
      - (2) Mechanistic interpretability at scale: understanding frontier model internals at hundreds of billions of parameters; current methods work only at toy scale
      - (3) Efficient reasoning: GPT-4-level reasoning at dramatically lower inference cost; state-space models, quantisation, distillation are primary approaches
      - (4) [[Continual Learning]] without catastrophic forgetting: incorporating new knowledge without degrading prior capability; replay-based and regularisation methods provide partial solutions
      - (5) Evaluation validity: benchmarks measuring genuine capability not surface pattern matching or memorisation; held-out and private evaluation sets are the primary methodological defence
  - ## Current Landscape (2026)
    - **Stanford AI Index 2026 — global research landscape:**
      - US released 50 "notable" AI models in 2025; nearly all from industry rather than academic or government institutions — a structural shift from the pre-2015 era
      - US-China performance differential: shrunk to 2.7% (down from 17.5-31.6 percentage points in May 2023); US private AI investment: $285.9 billion; China: $12.4 billion (23× gap)
      - Global corporate AI investment more than doubled in 2025; generative AI reached 53% population-level adoption in three years; organisational adoption: 88%
      - AI-related skills in US job postings: 2.5%, a 297% increase over the past decade; AI is the fastest growing technical skill cluster globally
      - AI data centre power capacity: 29.6 GW globally in 2025; comparable to New York State's peak electricity demand
      - NeurIPS 2025: 20,000 submissions; ~25-28% acceptance; 1,995 Datasets and Benchmarks Track submissions (up from 1,820 in 2024)
    - **Benchmark saturation and evaluation methodology shift:**
      - MMMU approaching ceiling performance for frontier models; older static benchmarks (MMLU, GSM8K, HumanEval) largely saturated
      - New ceiling-test benchmarks: Humanity's Last Exam (HLE, below 25% for frontier models), FrontierMath (below 2%), SWE-Bench Verified (software engineering, ~50% for frontier)
      - Multi-metric, multi-prompt evaluation with explicit uncertainty quantification is now the standard approach
      - NeurIPS Datasets and Benchmarks Track: mandatory persistent repository hosting (Hugging Face/Kaggle/Dataverse), Croissant metadata, automated review tools
      - NeurIPS 2026 MLRC official track: reproducibility embedded as first-class research value for the first time in a major conference's formal programme
      - Benchmark contamination remains the most serious validity threat: training on web-scale corpora creates systematic overlap with test sets; shift toward private and held-out evaluation
    - **Mechanistic interpretability breakthrough:**
      - MIT Technology Review "Breakthrough Technology 2026"
      - Anthropic's interpretability research: sparse autoencoders decompose MLP residual stream activations into monosemantic features; traces computational pathways from prompt to output
      - Identifies which concepts activate initially, how activation spreads through transformer layers, how models settle on outputs
      - Debate continues over whether complete interpretability of frontier-scale models is achievable or whether fundamental limits apply
      - Regulatory pressure: EU AI Act (2024) and AISI frameworks beginning to operationalise transparency requirements presupposing interpretability
    - **International governance dimension:**
      - UK AI Safety Institute (established 2023, post-Bletchley Declaration): pre-deployment evaluations of frontier models
      - EU AI Act (2024): risk-tiered classification; high-risk systems require conformity assessment, transparency requirements, human oversight
      - International AI Safety Report (Bengio et al., 2025): commissioned by 30 governments; synthesises scientific consensus on current risks, open problems, governance priorities
      - AAAI's 2025 Presidential Panel: alignment, robustness, interpretability, evaluation identified as four primary technical priorities for the research community
      - Paris AI Action Summit (2025): international coordination on AI safety governance; successor to Bletchley Declaration
    - **[[Open Source AI]] and competitive restructuring:**
      - Meta Llama family, Mistral open models, and DeepSeek-R1 have demonstrated open-weight models approaching proprietary frontier performance on many tasks
      - Hugging Face: over one million model checkpoints, hundreds of thousands of datasets; de facto open infrastructure layer for AI research
      - Open release accelerates both beneficial research (reproducibility, fine-tuning, evaluation) and potential misuse (bio, cyber, information operations)
      - US-China performance gap collapsed to 2.7% despite 23× investment difference; open releases enabled Chinese researchers to build on international progress
      - Governance challenge: voluntary commitments from frontier labs are insufficient for open-weight models that cannot be "turned off" post-release
  - ## UK Context
    - The United Kingdom occupies a position of global influence in AI research disproportionate to its population. The Stanford AI Index 2026 and analyses of global publication networks (Oxford Academic, Science and Public Policy, 2025) identify the UK as one of three stable dominant nodes alongside the US and Australia in the global AI research citation and collaboration network. This position reflects both historical depth (the UK's foundational contributions to the theory of computation through Turing, and to early AI through Minsky-era connections at Edinburgh and Cambridge) and contemporary investment (the concentration of AI research talent at UCL, Cambridge, Oxford, Edinburgh, and Imperial, and the location of Google DeepMind in London as the most productive single AI research lab outside the US). The UK's relative influence is however under pressure from China's rapid scaling of investment and talent pipeline, and from European programmes (ELLIS network, CLAIRE) seeking to consolidate continental AI research capacity. Maintaining UK AI Research leadership requires sustained investment in the combination of compute infrastructure (Isambard-AI, the national compute roadmap), talent (Centres for Doctoral Training, the Sparck scholarship programme), and institutional coordination (the Alan Turing Institute, AISI) that has produced the current position.
    - UK national institutions and coordination:
      - [[Alan Turing Institute]] (founded 2015; Cambridge, Edinburgh, Oxford, UCL, Warwick, EPSRC): national institute for data science and AI; ~200 Turing Fellows annually; research programme in foundational AI theory, trustworthy AI, AI for science, AI and society
      - AI Safety Institute (AISI, est. 2023, post-Bletchley Declaration): conducts pre-deployment evaluations of frontier models under voluntary agreements with OpenAI, Anthropic, Google DeepMind, Meta; extends UK's leadership on AI governance
      - UKRI (UK Research and Innovation): primary public funder; EPSRC (engineering and physical sciences), MRC (medical), ESRC (social), AHRC (humanities) all fund AI research programmes
      - Research Excellence Framework (REF): periodic assessment of UK university research quality; REF 2029 will assess AI research impact; directly feeds into UKRI funding allocation
    - Leading academic centres for AI Research:
      - **University of Edinburgh, School of Informatics:** UK's largest CS department; 120+ staff, 500+ students; AI, NLP, [[Computer Vision]], planning, cognitive science; Centre for Doctoral Training in Robotics and Autonomous Systems; Edinburgh Centre for Robotics
      - **Imperial College London:** largest single UK concentration of computing/AI researchers; Department of Computing, Data Science Institute; machine learning theory, [[Computer Vision]], intelligent systems; 2026 London AI Technology Centre with Lenovo at White City Deep Tech Campus
      - **UCL:** leads UKRI national generative AI hub (encompassing Imperial, Cardiff, Cambridge, Oxford, Manchester, Edinburgh, Surrey); industry partners IBM, BT, Google DeepMind, Cisco; Google DeepMind Academic Fellow appointed March 2026
      - **University of Cambridge:** Leverhulme Centre for the Future of Intelligence; Cambridge Centre for Data-Driven Discovery; affiliated [[Alan Turing Institute]] node; theoretical ML and AI safety research; Computational and Biological Learning Lab
      - **University of Oxford:** Oxford Future of Humanity Institute; Machine Learning Research Group; AI safety, ethics, Bayesian methods; connected to DeepMind via Demis Hassabis (Oxford-educated) and several research partnerships
    - Government investment (2022–2026):
      - 2022–2024: ~£1 billion total AI research infrastructure investment
      - Isambard-AI (Bristol): £225m; UK's first national AI supercomputer; Europe's most capable public academic AI compute facility
      - £500m compute hardware across UK universities
      - Twelve new Centres for Doctoral Training in AI: £117m; training next generation of AI researchers
      - 2025 Compute Roadmap: additional £2 billion for AI Growth Zones and national compute infrastructure
      - Spärck AI scholarship programme: co-designed with Oxford, Cambridge, Imperial, UCL, Southampton, Edinburgh, Newcastle, Manchester, Bristol; international talent attraction
    - Northern England AI research clusters:
      - **Manchester (most AI-ready UK city, 3 consecutive years):** University of Manchester (Centre for AI Fundamentals, Turing Fellow programme, National Centre for AI in Financial Services); city-level AI adoption leadership; 130+ AI courses at Manchester institutions
      - **Leeds (2nd most AI-ready UK city, 2025):** University of Leeds Institute for Data Analytics; active research in AI for healthcare (Leeds Teaching Hospitals NHS Trust collaboration); 130+ AI courses across three institutions
      - **Sheffield:** University of Sheffield NLP Group — one of UK's largest NLP research groups; strong industrial translation in information extraction, text mining, clinical NLP; collaboration with Sheffield Teaching Hospitals and NHS Digital
      - **North East AI Growth Zone (2025):** £30bn investment; 5,000 jobs; partnership with OpenAI and NVIDIA; Newcastle University (Digital Civics, AI for healthcare and urban systems), Durham, Sunderland, Northumbria universities; designated UK "flagship AI hub"
      - Bristol Robotics Laboratory: UK's largest dedicated robotics research facility; directly connected to AI Research through embodied AI and human-robot interaction programmes
  - ## Future Directions (2026–2030)
    - **Mechanistic Interpretability at Scale:**
      - The most technically challenging open problem: mapping internal computational structure of frontier models with hundreds of billions of parameters
      - Current approaches work at toy scale (tens of millions of parameters): sparse autoencoders for feature decomposition, activation patching for causal tracing, circuit analysis for minimal computational subgraphs
      - Scaling requirements: distributed feature attribution, scalable circuit identification, automated hypothesis generation about model internals
      - MIT Technology Review "Breakthrough Technology 2026" designation reflects community consensus on highest-leverage near-term research direction
      - Regulatory driver: EU AI Act and UK AISI frameworks beginning to operationalise transparency requirements that presuppose interpretability
      - Anthropic's monosemanticity research (2024–2026): sparse autoencoders decompose transformer MLP residual stream into interpretable features; first large-scale demonstrations
    - **Scalable Alignment and Oversight:**
      - Core challenge: as AI systems exceed expert human performance, ensuring objectives remain human-compatible becomes existential
      - Constitutional AI (Bai et al., 2022): model trained on self-generated critiques; scales to moderately capable systems; no formal guarantees at superhuman capability levels
      - Debate (Irving et al., 2018): competing AI systems argue positions; honest debater should win; vulnerable to sophistry when capability exceeds human verifier
      - Scalable oversight (Leike et al., 2018): recursive reward modelling, debate, amplification; requires feedback accuracy to scale as model capability exceeds human evaluator
      - International AI Safety Report (Bengio et al., 2025): scalable oversight identified as highest-priority alignment research direction
      - Open theoretical problem: RLHF-based approaches do not scale to domains where human evaluators cannot assess AI outputs
    - **Reasoning and Planning Integration:**
      - Current [[Large Language Models]]: impressive natural language reasoning but brittle on formal mathematical and logical chains of inference
      - [[Neural-Symbolic AI]] integration: combining neural language understanding with symbolic [[Planning and Search]] and [[Knowledge Representation]]
      - AlphaProof (IMO 2024) and AlphaGeometry 2 (gold-medal geometry): demonstrated hybrid approaches viable for structured mathematical reasoning
      - Test-time compute scaling: OpenAI o1, DeepSeek-R1 — extended inference chains with self-critique improve reasoning without additional training compute
      - Trade-off: inference-time reasoning chains are multiplicatively more expensive in compute and energy per query
      - Research frontier: combining learned intuition with formal verification to produce reasoning systems that are both fluent and certifiably correct
    - **Efficient and Sustainable AI:**
      - AI data centre power demand: 29.6 GW globally in 2025, rivalling electricity consumption of Switzerland or Austria
      - Architecture efficiency: sparse mixture-of-experts (reducing active parameters per forward pass), state-space models (Mamba, H3: linear-time sequence modelling replacing O(n^2) attention)
      - Hardware co-design: Cerebras WSE-3 (900,000 cores, single-chip compute), Groq LPU (inference-optimised), photonic computing (light-speed matrix operations)
      - Data efficiency: [[Active Learning]], [[Contrastive Learning]], [[Curriculum Learning]], synthetic data generation reduce dataset requirements 1-2 orders of magnitude
      - MLRC 2026 reproducibility initiative: reduces redundant experimental work through shared infrastructure and result verification
      - Quantisation and distillation: int8/fp4 weight quantisation and knowledge distillation enable frontier-scale capability on commodity hardware
    - **Autonomous Scientific Research:**
      - Most transformative long-term application: AI as active research agent in autonomous hypothesis-experiment-interpret loops
      - First-generation narrow instances: AlphaFold 2 (protein structure 2021), AlphaProof (theorem proving 2024), GNoME (crystal structures 2023)
      - Emerging AI laboratory systems: [[Foundation Model]] reasoning combined with robotic laboratory automation
      - Drug discovery applications: Recursion Pharmaceuticals (platform-scale ML across full pipeline), Insilico Medicine (DSP-1181 Phase I in 30 months vs 4.5 years traditionally)
      - Materials science: Citrine Informatics, GNoME; climate modelling: GraphCast (10-day weather forecast in under 1 minute)
      - Epistemological challenge: AI as co-author of scientific knowledge; attribution, verification, and authorship norms under active revision by science policy communities
    - **Evaluation Infrastructure and Validity:**
      - AI research community requires evaluation infrastructure harder to saturate, more aligned with real-world capability, more resistant to contamination
      - Capability evaluations for risk-relevant tasks: biosecurity (pathogen design assistance), cyberoffence, persuasion, deception (AISI evaluation framework)
      - Longitudinal tracking: systematic monitoring of model behaviour changes across version updates, provider switches, deployment context shifts
      - [[Agentic AI]] evaluation: multi-step tasks with irreversible real-world consequences require live environment evaluation rather than static benchmarks
      - Formal verification approaches: model checking, abstract interpretation, contract-based design as complements to empirical evaluation
      - AISI model evaluation framework extending Bletchley Declaration commitments: most developed international coordination mechanism as of June 2026
  - ## Limitations and Critiques
    - **Reproducibility Crisis:**
      - The most acute methodological challenge in AI Research: published results are frequently non-reproducible due to hardware variation, seed sensitivity, and unreleased code
      - Dodge et al. (2020): random seed sensitivity means numerical results vary significantly without identical hardware configuration and random seed specification
      - Semmelrock et al. (2025): four primary barriers — hardware heterogeneity, hyperparameter sensitivity, dataset version drift, incomplete code release
      - NeurIPS Machine Learning Reproducibility Challenge has found significant numerical discrepancies in 30-50% of attempted replications
      - Benchmark contamination: training data overlap with test sets undermines validity of published capability claims; systematic concern across LLM evaluations
      - MLRC 2026 as official NeurIPS track, mandatory Croissant metadata, and persistent repository hosting represent community-level responses
    - **Benchmark Validity and Measurement Problem:**
      - The fundamental tension: benchmarks simultaneously measure progress and drive it; optimisation pressure causes benchmark hacking rather than genuine capability acquisition
      - Goodhart's Law applied to AI research: "When a measure becomes a target, it ceases to be a good measure" is a structural property of competitive AI research
      - Chollet (2019) ARC-AGI benchmark specifically designed to resist pattern matching and training set contamination; still not solved as of 2026
      - LLM-as-judge systems: automated evaluation can be flipped 98% of the time by adding apologetic phrasing; undermines scalability of human-in-the-loop alternatives
      - Moving goalpost phenomenon: as frontier models approach ceiling on standard benchmarks, new harder benchmarks shift what is considered state-of-the-art capability
      - No consensus methodology for evaluating [[Agentic AI]] systems operating over multi-step trajectories with irreversible real-world consequences
    - **Replication vs Innovation Tension:**
      - Incentive structures in AI Research prioritise novelty over reproducibility and systematic understanding; publication bias strongly favours positive results
      - Negative results (methods that do not work) are rarely published despite high informational value for the community
      - Academic–industry gap: industry labs have access to compute and data at scales academic researchers cannot replicate, creating a two-tier research ecosystem
      - Conference deadlines impose 3-month submission cycles that pressure rapid results over careful, replicated findings
      - [[Open Source AI]] releases partially address this by enabling independent replication, but training datasets for most frontier models remain proprietary
    - **Evaluation Methodology Challenges:**
      - Static benchmark saturation: once a benchmark approaches ceiling performance (MMLU, GSM8K), it provides no signal for comparing frontier models
      - Distributional drift: benchmark distributions may shift over time as training data evolves, making longitudinal comparisons invalid without careful controls
      - Test set contamination in LLMs: models trained on web-scale corpora have high probability of having encountered benchmark test sets during pretraining
      - Human evaluation: expensive, slow, and inconsistent across annotators; not scalable to the number of model outputs generated in modern AI research
      - Evaluation of safety-relevant capabilities (persuasion, deception, cyberoffence, bio risk) requires specialised expertise and controlled experimental environments
    - **Publication Norms and Reproducibility in Practice:**
      - arXiv preprint culture accelerates dissemination but introduces pre-publication quality control risks; errors propagate before peer review catches them
      - Author incentives conflict with reproducibility: releasing training code, checkpoints, and datasets reduces competitive advantage
      - The "secret sauce" problem: hyperparameter choices, data curation decisions, and infrastructure details that determine performance are often not disclosed in papers
      - Model weight releases (Meta Llama, Mistral, DeepSeek) are a major positive development for reproducibility; training code and data releases remain less common
      - Community standards: NeurIPS code submission requirement (optional but encouraged), ICLR reproducibility checklist, and ML Code Completeness Checklist are emerging norms
  - ## Research & Literature
    - 1. Turing, A.M. (1950). Computing Machinery and Intelligence. *Mind*, 59(236), 433–460.
    - 2. McCarthy, J., Minsky, M.L., Rochester, N., & Shannon, C.E. (1956). A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence.
    - 3. Valiant, L.G. (1984). A Theory of the Learnable. *Communications of the ACM*, 27(11), 1134–1142. — PAC learning theory
    - 4. Rumelhart, D.E., Hinton, G.E., & Williams, R.J. (1986). Learning Representations by Back-propagating Errors. *Nature*, 323, 533–536.
    - 5. Vapnik, V.N. (1995). *The Nature of Statistical Learning Theory*. Springer.
    - 6. Russell, S., & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.
    - 7. Shalev-Shwartz, S., & Ben-David, S. (2014). *Understanding Machine Learning: From Theory to Algorithms*. Cambridge University Press.
    - 8. LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep Learning. *Nature*, 521, 436–444.
    - 9. Krizhevsky, A., Sutskever, I., & Hinton, G.E. (2012). ImageNet Classification with Deep Convolutional Neural Networks. *NeurIPS*, 25.
    - 10. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention Is All You Need. *NeurIPS*, 30.
    - 11. Bommasani, R., Hudson, D.A., et al. (2021). On the Opportunities and Risks of Foundation Models. arXiv:2108.07258.
    - 12. Kaplan, J., McCandlish, S., Henighan, T., Brown, T.B., et al. (2020). Scaling Laws for Neural Language Models. arXiv:2001.08361.
    - 13. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). Training Compute-Optimal Large Language Models (Chinchilla). arXiv:2203.15556.
    - 14. Brown, T.B., Mann, B., Ryder, N., et al. (2020). Language Models are Few-Shot Learners. *NeurIPS*, 33.
    - 15. Ouyang, L., Wu, J., Jiang, X., et al. (2022). Training Language Models to Follow Instructions with Human Feedback. arXiv:2203.02155. — RLHF / InstructGPT
    - 16. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
    - 17. Sutton, R.S., & Barto, A.G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.
    - 18. Jumper, J., Evans, R., Pritzel, A., Green, T., et al. (2021). Highly Accurate Protein Structure Prediction with AlphaFold. *Nature*, 596, 583–589.
    - 19. Bengio, Y., et al. (2025). International AI Safety Report. UK Government AI Safety Institute.
    - 20. Stanford University Human-Centered AI (2026). *Artificial Intelligence Index Report 2026*. Stanford HAI.
    - 21. NeurIPS Datasets and Benchmarks Track (2025). From Art to Science in AI Evaluations. NeurIPS Blog, December 2025.
    - 22. NeurIPS (2026). MLRC 2026: Reproducibility as an Official Track at NeurIPS. NeurIPS Blog, May 2026.
    - 23. Semmelrock, M., et al. (2025). Reproducibility in Machine-Learning-Based Research: Overview, Barriers, and Drivers. *AI Magazine*. DOI: 10.1002/aaai.70002.
    - 24. AAAI (2025). AAAI 2025 Presidential Panel on the Future of AI Research. AAAI, March 2025.
    - 25. Chollet, F. (2019). On the Measure of Intelligence. arXiv:1911.01547.
    - 26. Marcus, G. (2018). Deep Learning: A Critical Appraisal. arXiv:1801.00631.
    - 27. Oxford Academic, Science and Public Policy (2025). When Science Meets Geopolitics: Global AI Research Network Transformation (2000–2025). DOI: 10.1093/scipol/scag017.
    - 28. Zylos Research (2026). AI Safety, Alignment, and Interpretability in 2026. https://zylos.ai/research/2026-02-09-ai-safety-alignment-interpretability

- ### Provenance
  - sources:: https://spectrum.ieee.org/state-of-ai-index-2026, https://blog.neurips.cc/2026/05/04/mlrc-2026-reproducibility-as-an-official-track-at-neurips/, https://blog.neurips.cc/2025/12/05/neurips-datasets-benchmarks-track-from-art-to-science-in-ai-evaluations/, https://aaai.org/wp-content/uploads/2025/03/AAAI-2025-PresPanel-Report-Digital-3.7.25.pdf, https://thecatalystnewcastle.co.uk/2025/09/18/north-east-uk-becomes-flagship-ai-hub-with-30bn-investment-and-5000-jobs/, https://www.sas.com/en_gb/news/press-releases/2025/april/manchester-named-ukis-most-ai-ready-city.html, https://academic.oup.com/spp/advance-article/doi/10.1093/scipol/scag017/8551274, https://zylos.ai/research/2026-02-09-ai-safety-alignment-interpretability, https://onlinelibrary.wiley.com/doi/10.1002/aaai.70002
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm