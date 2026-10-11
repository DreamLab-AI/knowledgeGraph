Commonsense reasoning is the ability of an artificial system to make plausible inferences about everyday situations using broad background knowledge that humans take for granted. It covers naive physics, folk psychology, temporal causality, social norms, and typical cause-and-effect expectations that are rarely stated explicitly in text. It remains a long-standing challenge because such knowledge is vast, tacit, and context-dependent, requiring both large-scale knowledge resources and flexible defeasible inference mechanisms.

### Semantic Classification

### Content

## Compositional Relationships (Components)
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:NonMonotonicReasoning))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:DefaultLogic))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:FrameSemantics))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:NaivePhysicsKnowledge))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:FolkPsychologyKnowledge))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:SocialNormsKnowledge))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:TemporalCausalKnowledge))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:CausalReasoning))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:TheoryOfMind))

## Dependency Relationships
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:KnowledgeBase))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:WorldModel))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:Inference))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:SemanticNetwork))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:Grounding))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModel))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))

## Capability Relationships
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:NaturalLanguageUnderstanding))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:QuestionAnswering))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:Planning))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:ConversationalAI))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:EmbodiedAI))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:VisualQuestionAnswering))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:Robotics))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:AIAgents))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:supports ai:AISafety))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:supports ai:AIAlignment))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))

## Implementation Relationships
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModel))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:KnowledgeGraph))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:NeuralSymbolicIntegration))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:ChainOfThoughtPrompting))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:RetrievalAugmentedGeneration))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:FineTuning))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:TransferLearning))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:implements ai:Grounding))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:implements ai:DefeasibleInference))

## Reduction Relationships
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:PlausibleInference))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:DefaultRuleApplication))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:ContextSensitiveInference))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:AbductiveInference))
    SubClassOf(ai:CommonsenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:ScriptBasedInference))

## About

Commonsense reasoning sits at the intersection of [[Knowledge Representation]], [[Natural Language Processing]], [[Cognitive Architecture]] research, and [[Machine Learning]]. Its central challenge is not lack of processing power but rather the sheer tacitness of human background knowledge: the vast majority of what people know about the everyday world is never written down, making automatic acquisition from text corpora incomplete by design. A person who reads "Jane put the cake in the oven and went to answer the phone" knows without being told that the cake is still in the oven after Jane answers the phone, that the oven is hot, that an unattended oven is a fire risk, and that Jane will probably return to the kitchen. No text explicitly states these facts, yet a reader draws on naive physics, causal reasoning, temporal persistence (the "frame problem" in AI), and social expectations simultaneously to build a coherent situation model.

The difficulty is compounded by defeasibility: commonsense conclusions are not logically necessary but contextually appropriate defaults. A person who knows "birds fly" will infer that a bird in a tree can fly away, but revise this inference upon learning the bird is a penguin or has an injured wing. Encoding such default inference in a formal system requires [[Non-Monotonic Reasoning]] frameworks (Reiter's [[Default Logic]], McCarthy's circumscription, Pearl's system Z) that have proven brittle at scale and difficult to integrate with modern deep-learning pipelines.

The 1984 Cyc project (Lenat et al.) attempted to manually encode millions of commonsense axioms in first-order logic; it produced a large but narrow knowledge base that was difficult to maintain and update. The 2004 ConceptNet knowledge graph (Singh et al., MIT Media Lab) took a more crowdsourced, semi-formal approach, accumulating over 1.6 million English-language commonsense assertions. The 2019 ATOMIC knowledge base (Sap et al., Allen Institute) contributed 880 K if-then social causal tuples (PersonX does Y → PersonX feels Z) capturing folk psychology dimensions absent from ConceptNet. The 2021 ATOMIC-2020 extension (Hwang et al.) unified both resources into a single graph with 23 relation types.

The rise of [[Large Language Model]]s from GPT-2 onwards revealed that transformer-scale pretraining absorbs considerable commonsense knowledge implicitly. By 2021, fine-tuned models achieved near-human performance on benchmarks such as CommonsenseQA (Talmor et al., 2019), WinoGrande (Sakaguchi et al., 2021), PIQA (Bisk et al., 2020), HellaSwag (Zellers et al., 2019), and Social IQa (Sap et al., 2019). However, subsequent adversarial evaluations (e.g., WinoGrande adversarial, HellaSwag-Hard) demonstrated that many of these gains reflected surface-level statistical pattern matching rather than genuine [[World Model]] reasoning. A 2025 study introduced BrainBench to expose specific categories of reasoning failure; a 2025 viral evaluation found that many frontier LLMs recommended walking to a car wash rather than driving, failing to reason about the purpose of the errand — a canonical commonsense failure rooted in inadequate [[Grounding]].

## Components and Mechanisms

**Knowledge Dimensions**

- Naive physics: objects have mass, solidity, gravity acts on unsupported objects, liquids take the shape of their containers, rigid objects can break. This knowledge domain was the focus of early AI work by Hayes (1978) and the "Naive Physics Manifesto."
- Folk psychology (Theory of Mind): people have beliefs, desires, intentions, and emotions that cause their actions. Systems must attribute mental states to agents to predict and explain behaviour — a capacity evaluated by Social IQa and the ToMi benchmark.
- Temporal and causal regularity: events have preconditions and postconditions (scripts, Schank 1977); temporal ordering and persistence must be tracked (the frame problem, McCarthy and Hayes 1969).
- Social norms and pragmatics: cooperative conversational maxims (Grice 1975), politeness, culturally specific behavioural expectations.
- Encyclopaedic-taxonomic background: general world facts that support discourse — capital cities, basic biology, typical object properties — that straddle commonsense and encyclopaedic knowledge.

  **Inference Mechanisms**

- Default reasoning: draw the most typical conclusion unless defeated by evidence. Encoded in [[Default Logic]] (Reiter, 1980) and [[Non-Monotonic Reasoning]] frameworks.
- Abductive inference: given an observation, infer the most plausible explanation. Central to story understanding and diagnostic reasoning.
- Analogical reasoning: apply structural mappings from familiar situations to novel ones. Evaluated by novel physical analogy benchmarks.
- Script-based inference: sequences of prototypical event frames (scripts) allow prediction of likely next actions — "going to a restaurant" involves ordering, eating, paying.
- Neural inference: large pretrained models act as soft knowledge bases, retrieving commonsense-consistent continuations via next-token prediction.

  **Evaluation Benchmarks (Selected)**

- HellaSwag (Zellers et al., 2019): physical activity completion, 10 K / 70 K examples; frontier LLMs score >95% but adversarial hard variants expose residual brittleness.
- WinoGrande (Sakaguchi et al., 2021): 44 K Winograd-style pronoun coreference problems requiring commonsense disambiguation.
- CommonsenseQA (Talmor et al., 2019): 12 K multiple-choice questions derived from ConceptNet, requiring retrieval over conceptual relations.
- PIQA (Bisk et al., 2020): physical intuition QA; 20 K problems about everyday physical actions and their outcomes.
- Social IQa (Sap et al., 2019): 38 K questions about social interactions, motivations, and emotional reactions.
- Logical-CommonsenseQA (2026): pairs atomic answers under AND/OR/NEITHER logical operators, testing compositional integration of commonsense with logical structure.
- BrainBench (2026): systematic taxonomy of commonsense failure modes in frontier LLMs; categorises spatial, temporal, causal, and social failure patterns.

  ## Use Cases

  **Natural Language Understanding and Generation**
  Systems that must interpret indirect speech acts, resolve pronoun reference, infer implicit event participants, or detect sarcasm and irony require commonsense background knowledge. [[Conversational AI]] assistants (ChatGPT, Claude, Gemini) rely heavily on implicitly learned commonsense to produce coherent and contextually appropriate responses, though documented failures in edge cases motivate hybrid approaches. Consider the sentence "The police stopped the protesters because they became violent" — human readers immediately infer from commonsense social knowledge that "they" refers to the protesters, not the police; systems without robust commonsense may incorrectly assign the referent. Implicature — reasoning about what a speaker means beyond what they literally say (Grice, 1975) — requires both commonsense world knowledge and understanding of cooperative communication norms. Systems that fail at implicature produce responses that are technically accurate but pragmatically inappropriate, breaking the conversational contract.

  **Dialogue and Conversational AI**
  Robust [[Conversational AI]] systems must track discourse state, infer user intent from underspecified requests, and handle topic shifts gracefully — all tasks requiring background commonsense. A user who says "Can you open the window?" at a dinner party is requesting fresh air, not asking about the speaker's physical capability; systems equipped with social commonsense about pragmatic context can interpret such indirect speech acts correctly. Commonsense knowledge of typical human routines and needs enables dialogue systems to offer proactive suggestions ("You mentioned leaving at 8am — would you like me to set an alarm?") without explicit instructions. The failure mode — producing technically valid responses that miss the pragmatic intent — is among the most common user complaints with deployed [[Conversational AI]] systems.

  **Question Answering**
  Open-domain [[Question Answering]] over documents requires commonsense to resolve presuppositions, infer unstated facts bridging question and answer, and correctly resolve temporal or causal queries. A question such as "What would happen if you left ice cream in a hot car?" requires no encyclopaedic knowledge, only naive physics (heat melts ice cream) and functional knowledge about cars and temperature, yet it stymies systems without robust physical commonsense. [[Retrieval-Augmented Generation]] pipelines grounding LLM inference in a [[Knowledge Graph]] (e.g. ConceptNet-augmented RAG) improve commonsense accuracy relative to parametric-only baselines by making the relevant background knowledge explicitly retrievable and inspectable. Knowledge base question answering (KBQA) systems that query structured [[Knowledge Base]]s via SPARQL or graph traversal have been extended to commonsense KBs (ConceptNet-QA), enabling more reliable commonsense inference than parametric-only approaches.

  **AI Agents and Planning**
  Autonomous [[AI Agent]]s executing multi-step tasks in tool-use or robotic environments must reason about the physical and social plausibility of planned actions. A task-planning system asked to "bake a cake" must know that the oven must be preheated before the cake is inserted, that the recipe's wet ingredients must be combined before dry ingredients are added, and that the cake must cool before frosting — all commonsense temporal ordering facts rarely stated in recipe instructions. [[Planning]] algorithms integrated with commonsense knowledge bases (PSP planner with ATOMIC integration, LLM-based task decomposition with ConceptNet grounding) reject physically impossible action sequences and generate contextually appropriate explanations for failures. [[Embodied AI]] robotics systems increasingly couple language models with physical simulation engines (Isaac Gym, MuJoCo, PyBullet) to acquire naive-physics reasoning through interaction rather than text-only statistics, addressing a fundamental gap in text-derived commonsense.

  Commonsense reasoning is critical for plan recognition — inferring a human collaborator's goals from observed partial action sequences. A robot in a kitchen that sees a human pick up a knife and move toward the cutting board must infer that the human is about to cut food, not threaten the robot, based on social commonsense about kitchen context. This intention inference capacity, rooted in folk psychology, is indispensable for safe human-robot collaboration.

  **Hallucination Reduction and AI Safety**
  Commonsense failures manifest as physically implausible, temporally inconsistent, or socially inappropriate [[Generative AI]] outputs — a key driver of [[Hallucination]]. A medical advice system that suggests a patient "take all the pills at once" because the instruction "take three times daily" was misinterpreted, or a travel assistant that suggests driving across the Atlantic, exemplify commonsense failures with safety consequences. Integrating explicit commonsense checking (symbolic verifier querying ConceptNet or ATOMIC for plausibility, retrieval grounding against factual [[Knowledge Base]]s) into LLM pipelines is an active strategy for [[AI Safety]] improvement. The UK AI Safety Institute's pre-deployment model evaluation protocol (2024) explicitly tests for commonsense failure modes, including physical implausibility and temporal inconsistency, as part of its capability assessment framework.

  Socially inappropriate outputs — responses that are technically correct but violate social norms (e.g. congratulating someone on their divorce, or offering food to a recently bereaved person) — reflect missing folk-psychology commonsense about social contexts. Alignment techniques (Constitutional AI, RLHF) partially address these by training on human preference data that encodes social norms, but they do not provide explicit commonsense reasoning; they learn approximate social appropriateness without understanding the underlying commonsense structure.

  **Visual and Multi-Modal Reasoning**
  [[Visual Question Answering]] systems must reason about depicted scenes using background knowledge: a VQA system asked "Can the person in the image reach the top shelf?" must combine visual size estimation with naive physics about body mechanics and typical shelf heights. [[Multi-Modal Learning]] models trained on image-text pairs (CLIP, DALL-E, Flamingo, GPT-4o) acquire partial visual commonsense but remain vulnerable on novel object configurations and in-context spatial reasoning requiring careful integration of visual observation with background physical knowledge. The VisualCOMET dataset (Park et al., 2020) specifically targets commonsense inference about dynamic context visible in still images — before/during/after the depicted event — providing a benchmark that requires both visual understanding and temporal commonsense reasoning.

  **Education and Tutoring**
  Intelligent tutoring systems rely on commonsense reasoning to understand student misconceptions (a student who believes "heavier objects fall faster" holds a commonsense physics misconception correctable by conceptual change instruction), to explain concepts in everyday terms, and to generate appropriately scaffolded examples. Adaptive tutoring systems that detect student confusion from dialogue context and pivot to clarifying explanations exploit social commonsense about communicative intent.

  **Legal and Medical AI**
  Clinical decision support systems that assess patient risk must reason commonsensically about behaviour (a patient who says "I walk 10,000 steps daily" is probably reasonably fit), medication effects (combining alcohol and sedatives is dangerous), and care plan plausibility (a bed-bound patient cannot perform standing exercises). Legal reasoning systems must apply commonsense about typical human behaviour to assess the plausibility of claimed events: courts regularly appeal to what is "reasonable" — which is precisely the sphere of commonsense. Commonsense reasoning failures in these high-stakes domains carry direct safety consequences, making [[AI Safety]]-aligned commonsense integration critical.

  ## Theoretical Challenges and Open Problems

  Despite decades of research and rapid progress on benchmarks, commonsense reasoning in AI faces several deep theoretical challenges that represent the frontier of the field:

  **The Tacitness Problem**: Most commonsense knowledge is never written down, making automatic acquisition from text fundamentally incomplete. A child learns that fire burns by touching a hot stove, that ice is cold by feeling it, that heavy objects require effort to lift by physical experience. Purely text-based learning can only acquire commonsense facts that happen to be expressed in text, missing the vast tacit residue. This motivates [[Embodied AI]] approaches — systems that learn commonsense through physical interaction rather than text statistics — and [[Multi-Modal Learning]] approaches that augment text learning with visual and sensorimotor grounding.

  **The Compositionality Problem**: Humans can understand novel physical or social scenarios they have never encountered by composing known commonsense primitives. Asked about a situation where "a ball is placed in a bag, the bag is turned inside out, and then the bag is submerged in water," a person can reason through the sequence compositionally. LLMs typically fail on such novel compositions even when they know each individual fact, revealing that their commonsense is stored as holistic pattern associations rather than composable rules. This distinguishes shallow benchmark performance from genuine commonsense competence.

  **The Contextual Sensitivity Problem**: Commonsense defaults are highly context-sensitive. "Birds fly" is a valid default in ordinary contexts but fails for dead birds, baby birds, penguins in a zoo exhibit, or birds in cartoons. Representing the full context-sensitivity of commonsense defaults requires rich situational models that current AI systems do not robustly maintain. The [[World Model]] problem — maintaining a coherent, updatable internal model of the situation being reasoned about — remains open.

  **The Grounding Problem**: For commonsense reasoning to support reliable inference, symbols must be grounded in their referents — the word "heavy" must be connected to physical weight; "sharp" to cutting ability; "hot" to thermal sensation. Without [[Grounding]], a system can learn that "a knife is used for cutting" without understanding what cutting is, producing correct outputs in tested contexts but failing when the grounding assumption is violated (e.g. cutting with a laser is not the same as cutting with a knife in terms of commonsense implications about safety, precision, and applicability). Grounding approaches include embodied simulation, multimodal training, and structured [[Knowledge Base]] linking.

  **The Evaluation Problem**: As frontier LLMs saturate standard commonsense benchmarks, the question of whether they have achieved genuine commonsense reasoning or merely pattern-matched training-set artefacts becomes critical. Recent work (Zellers et al., 2018; Hellaswag; Bhagavatula et al., 2019; aNLI) has repeatedly shown that models exploit dataset artefacts — length biases, lexical overlaps, surface statistical regularities — to achieve high benchmark scores without commonsense understanding. This "validity crisis" in commonsense evaluation motivates adversarial benchmark construction (WinoGrande's adversarial filtering, HellaSwag-Hard), out-of-distribution testing, and diagnostic probing that tests specific commonsense knowledge dimensions independently.

  **Neurosymbolic Integration**: The dominant research programme seeking to overcome these challenges is [[Neural-Symbolic Integration]] — architectures that combine the pattern-recognition fluency of neural networks with the compositional, inspectable inference of symbolic systems. Proposed approaches include: (a) using LLMs to parse natural language into symbolic representations that are then reasoned over by a logic engine; (b) using commonsense [[Knowledge Graph]]s as structured context retrieved at inference time; (c) training neural networks to satisfy symbolic constraints; and (d) using [[Chain-of-Thought Prompting]] to externalise implicit reasoning steps for symbolic verification. None of these fully solves the compositionality or tacitness problems, but they represent the current state of the art for deploying commonsense reasoning in safety-critical applications.

  ## Relationships to Broader AI Paradigms

  Commonsense reasoning intersects with several other major AI research agendas in ways that make progress on any one dimension advance the others:

  **Commonsense and Foundation Models**: [[Foundation Model]]s such as GPT-4 and Claude 3 represent a qualitative shift in commonsense reasoning capability relative to pre-LLM systems. By training on hundreds of billions of tokens of text, these models implicitly absorb the commonsense regularities expressed across human written communication. The result is systems that, for the first time in AI history, can pass many commonsense benchmarks at human-level performance. Yet as BrainBench (2026) demonstrates, this achievement masks systematic gaps in commonsense competence on probes that require departing from surface text patterns. Understanding precisely what commonsense knowledge foundation models do and do not acquire, and why, is one of the most active research questions in AI interpretability and [[Explainable AI]].

  **Commonsense and AI Agents**: The move toward [[AI Agent]] systems (systems that autonomously plan and execute multi-step tasks using tools, APIs, and services) makes commonsense reasoning practically critical. An agent that can search the web, write code, and send emails will cause harm if it lacks the social commonsense to understand that sending an email to "everyone in the company" in response to a request to "tell the team" means the immediate team, not all 50,000 employees. Task decomposition, goal inference, plan validation, exception handling, and inter-agent communication all require continuous commonsense reasoning about physical and social context. This connection between commonsense reasoning and agent architectures (OpenAI's function-calling agents, Anthropic's Claude tool-use, Google's Gemini function-calling) is driving substantial research investment.

  **Commonsense and Retrieval-Augmented Generation**: [[Retrieval-Augmented Generation]] was originally developed to address factual [[Hallucination]] by grounding LLM outputs in retrieved documents. The same paradigm applies to commonsense: grounding LLM inference in retrieved ConceptNet triples, ATOMIC if-then rules, or PIQA physical procedure knowledge reduces commonsense hallucination by making the relevant background knowledge explicitly available in the context window. This is an active production strategy at Microsoft (Bing RAG), Google (Vertex AI grounding), and Anthropic (tool-use with knowledge connectors). The principal challenge for commonsense RAG relative to factual RAG is retrieval precision: commonsense queries are often implicit and vague ("what usually happens when..."), making it difficult to formulate the retrieval query that will surface the most relevant background knowledge without noise. Dense retrieval models fine-tuned on commonsense query-document pairs (SBERT fine-tuned on ConceptNet QA pairs) substantially improve over BM25 sparse retrieval on commonsense retrieval tasks, and hybrid dense-sparse retrieval is becoming the standard approach in production commonsense-augmented systems.

  **Commonsense and Formal Verification**: An emerging research direction (2025–2026) applies formal methods to commonsense reasoning validation. Given an LLM-generated statement with commonsense implications, a formal verifier translates the statement into a symbolic representation and checks it against a commonsense [[Knowledge Base]] (ConceptNet, ATOMIC) for plausibility. Violations (physically impossible events, violated temporal preconditions, contradicted social norms) are flagged for human review or automatic revision. This symbolic-verification layer addresses the evaluation problem for deployed systems — providing audit trails that explain why a given output was rejected as commonsense-implausible — and aligns with the [[Explainable AI]] and [[AI Safety]] requirements of the EU AI Act for high-risk deployments. The UK AI Safety Institute's evaluation framework (2024) explicitly calls for such verifiable commonsense sanity-checking as part of pre-deployment capability assessment for general-purpose AI systems.

  **Commonsense across Languages and Cultures**: A largely under-addressed challenge is cross-linguistic and cross-cultural commonsense. Most commonsense benchmarks (HellaSwag, CommonsenseQA, WinoGrande) are in English and reflect North American or Western European cultural contexts. Cultural commonsense varies substantially: what counts as polite, which temporal orderings are typical, what objects are used for what purposes, and how social hierarchies work differ across cultures. HellaSwagUltra (2025) and mCSQA (Sakai et al., 2024) represent early efforts to evaluate commonsense across languages and cultural contexts, revealing that cross-lingual commonsense performance is systematically lower than monolingual English performance even for frontier multilingual LLMs. This gap has significant implications for the deployment of AI systems in non-English-speaking and non-Western contexts, and represents a major research gap at the intersection of commonsense reasoning and multilingual [[Natural Language Processing]].

  **Commonsense and Cognitive Architecture**: Classical [[Cognitive Architecture]] research (ACT-R, SOAR, SIGMA) modelled human commonsense reasoning as the activation and retrieval of long-term semantic memory, combined with production rules encoding procedural knowledge. Modern neural [[Cognitive Architecture]]s attempt to combine LLM-based pattern recognition with working memory, structured long-term memory (a [[Knowledge Base]]), and planning mechanisms, recapitulating the classical modular organisation in a learned substrate. Systems such as Voyager (Wang et al., 2023) and CALYPSO (Zhu et al., 2023) demonstrate that LLM-based cognitive architectures with structured memory and commonsense grounding achieve substantially better performance on open-ended task planning than pure LLM prompting.

  ## Academic Context

  The term "commonsense reasoning" entered the AI vocabulary through McCarthy's 1959 paper "Programs with Common Sense" and the subsequent frame-axiom problem (McCarthy and Hayes, 1969). The 1980s saw competing symbolic approaches: Lenat's CYC, Minsky's frame theory (1974), and Reiter's Default Logic (1980). The neural turn began with Zellers et al. (2018) showing that BERT-scale pretraining substantially closed the HellaSwag gap.

  The Allen Institute for Artificial Intelligence (Seattle) has been the most prolific producer of commonsense AI benchmarks and knowledge resources (ATOMIC, Social IQa, WinoGrande, PIQA, CommonGen). The MIT Media Lab produced ConceptNet. Stanford, CMU, and UW maintain active research programmes on commonsense reasoning in language.

  In the UK, the Alan Turing Institute's neuro-symbolic AI interest group explicitly frames commonsense reasoning as a key application of neural-symbolic integration, noting that "language understanding, including question answering that requires commonsense reasoning, offers probably the most complete application area of neuro-symbolic AI." The University of Edinburgh's School of Informatics has contributed to non-monotonic reasoning formalisms (notably circumscription extensions) and NLP evaluation methodology. University College London's Gatsby Computational Neuroscience Unit and Computer Science department have contributed to cognitive architectures with commonsense reasoning components. Oxford's Future of Humanity Institute and Department of Computer Science have engaged with commonsense reasoning in the context of AI safety and alignment (ensuring LLMs do not produce physically or socially absurd outputs).

  ## Current Landscape (2025–2026)

  September 2025 marked a watershed moment where leading frontier LLMs achieved unprecedented scores on social commonsense benchmarks; however, BrainBench (2026) simultaneously exposed systematic categories of commonsense failure. The dominant trend is hybridisation: LLMs are being augmented with structured commonsense [[Knowledge Graph]]s (ConceptNet, ATOMIC-2020, Wikidata) via [[Retrieval-Augmented Generation]] to ground inference, replacing purely parametric commonsense recall. [[Chain-of-Thought Prompting]] has been shown to substantially improve commonsense performance by externalising implicit reasoning steps, making commonsense inference more inspectable and thus amenable to verification.

  The [[Neural-Symbolic Integration]] paradigm — combining neural LLMs with symbolic commonsense reasoners or [[Description Logic]] engines — has seen renewed interest following IJCAI 2025 work on neuro-symbolic AI approaches. The COMET-ATOMIC-2020 model (trained to generate commonsense inferences from ATOMIC) enables downstream systems to query a generative commonsense oracle rather than a static knowledge base, improving coverage of novel situations. Multimodal commonsense benchmarks (VisualCOMET, WinoGround) extend evaluation to vision-language systems, where physical commonsense reasoning about depicted scenes reveals new failure modes.

  [[Fine-Tuning]] on commonsense-specific data remains an effective if resource-intensive approach; however, the brittleness of fine-tuned models to distribution shift has driven interest in more robust [[Transfer Learning]] strategies. The Logical-CommonsenseQA benchmark (2026) targets compositional integration of commonsense with symbolic logic operators, probing a dimension largely untested by prior benchmarks.

  In industry, commonsense reasoning failures have been documented in customer-service bots, medical-advice systems, and autonomous-vehicle dialogue interfaces, driving demand for structured knowledge integration in production LLM deployments. Microsoft (Azure AI), Google DeepMind, and Anthropic have each published technical reports noting commonsense limitation as a key challenge for [[AI Safety]]-compliant deployment.

  The broader research ecosystem has responded with several novel paradigm shifts in 2025–2026. First, generative commonsense augmentation — where a COMET-style model pre-generates commonsense implications of each sentence before it is processed by the main LLM — has shown improvements in downstream QA and dialogue coherence, effectively creating a commonsense pre-processing layer. Second, symbolic-constraint satisfaction has been applied post-generation: outputs from LLMs are verified against ConceptNet-derived plausibility scores and ATOMIC causal consistency checks before being returned to users, with implausible outputs rejected or revised. Third, commonsense-aware [[Fine-Tuning]] on instruction-following datasets augmented with ConceptNet and ATOMIC triples has been shown to improve commonsense performance on held-out benchmarks relative to standard instruction-tuning, at modest additional training cost. These approaches collectively represent a shift from "hope the LLM learned commonsense implicitly" to "actively engineer commonsense competence through knowledge-augmented architecture."

  The evaluation landscape has matured correspondingly. The September 2025 AI Parivartan Research Lab benchmark report documented that leading models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro) achieve >92% on standard CommonsenseQA and >96% on HellaSwag, but that adversarial variants constructed by domain experts reveal 20–40 percentage-point performance gaps relative to human performance on out-of-distribution commonsense probes. This persistent gap motivates the next generation of commonsense evaluation: dynamic adversarial evaluation (models evaluated on commonsense probes generated by other models specifically trained to expose gaps), cross-cultural commonsense evaluation (testing whether models trained primarily on English internet text fail on commonsense scenarios specific to non-Western cultural contexts), and long-horizon causal commonsense evaluation (multi-step scenarios where correct commonsense inference at each step is required to reach the correct overall conclusion).

  ## UK Context

  The Alan Turing Institute (London) hosts a dedicated neuro-symbolic AI interest group that explicitly identifies commonsense reasoning as a primary target application, bringing together researchers from Edinburgh, Oxford, Cambridge, and Imperial College London. The group's framing — that commonsense reasoning "offers probably the most complete application area of neuro-symbolic AI" — positions UK AI research at the convergence of formal [[Knowledge Representation]] methods and neural language understanding. Edinburgh's Institute for Language, Cognition and Computation (ILCC) conducts foundational [[Natural Language Processing]] research with commonsense implications, including work on discourse coherence, implicit event understanding, and temporal reasoning in narrative. UCL's Computer Science department has contributed to cognitive architectures and embodied [[Grounding]], while the Department of Computer Science at Oxford has engaged with commonsense reasoning in the context of [[AI Safety]] and formal verification, particularly around ensuring that LLM-generated text satisfies physical and social plausibility constraints.

  In Northern England, the University of Manchester's School of Computer Science — home to the OWL 2 standard and [[Description Logic]] research (Ian Horrocks, Carole Goble, Boris Motik) — provides the foundational formal tools for expressing commonsense ontologies in machine-processable form. The Manchester OWL API and the HermiT/Pellet reasoning infrastructure underpin production deployments that require formal commonsense constraints alongside neural inference. The University of Sheffield's Natural Language Processing group, founded by Yorick Wilks (a pioneer of commonsense-driven NLP whose work on preference semantics and script-based story understanding anticipated the modern commonsense AI agenda by decades), maintains a long tradition of research on implicit meaning, presupposition, and background knowledge in language processing. The University of Leeds has contributed to qualitative spatial reasoning — a branch of commonsense reasoning about topological relationships between spatial objects that is directly applicable to [[Robotics]] and geographic information systems.

  The University of Cambridge's Computer Laboratory has engaged with commonsense aspects of machine reading comprehension and has contributed to the annotation methodology for fine-grained commonsense benchmark construction. Imperial College London's AI group has worked on commonsense reasoning for medical AI applications, particularly in clinical narrative understanding where implicit temporal and causal commonsense about disease progression, medication effects, and procedure sequences is safety-critical. The University of Birmingham's Natural Language Processing group has contributed to event representation and script learning, grounding temporal commonsense in structured event ontologies.

  UK industrial AI engages substantively with commonsense reasoning. Google DeepMind (London) has published research on commonsense grounding for its Gemini family of models, including work on physical commonsense for robotic control. Waymo UK focuses on autonomous vehicle perception and planning systems that require dense physical commonsense about traffic scenarios, pedestrian behaviour, and road physics. Arm AI Research works on edge-deployed commonsense modules for robotics applications where low-latency commonsense inference is required at the hardware level. BT Group AI has published research on commonsense reasoning for network management dialogue systems, where user intent inference from underspecified technical requests requires substantial social and procedural commonsense.

  The UKRI EPSRC has funded commonsense-related research through its AI for Science and Responsible AI priorities. The UK AI Safety Institute (AISI, established 2023 by the Department for Science, Innovation and Technology) has noted commonsense failures as a distinct class of unsafe LLM behaviour warranting evaluation protocols, distinct from factual error and harmful content. AISI's evaluation framework explicitly assesses physical plausibility, temporal consistency, and social appropriateness as commonsense-grounded dimensions of model safety. This positions commonsense reasoning not merely as an NLP research challenge but as a regulatory concern for high-stakes AI deployment in the UK context.

  ## Cross-Cultural and Multilingual Commonsense

  A largely under-addressed dimension of commonsense reasoning research is the cultural and linguistic specificity of most benchmarks and knowledge resources. ConceptNet, ATOMIC, HellaSwag, CommonsenseQA, WinoGrande, and the bulk of the commonsense evaluation literature were constructed predominantly by English-speaking researchers drawing on North American and Western European everyday contexts. The commonsense knowledge encoded in these resources — what counts as polite, which actions typically precede which outcomes, which objects are used for which purposes, what social hierarchies are typical — reflects specific cultural assumptions that do not generalise globally.

  Cross-cultural commonsense divergences are not superficial. Social IQa scenarios involving American workplace norms, restaurant tipping customs, or healthcare navigation presuppose institutional contexts absent in many other countries. Physical commonsense about food preparation assumes kitchen equipment (ovens, refrigerators, specific utensils) not universally available. Temporal commonsense about scheduling, seasons, and daily routines reflects specific cultural rhythms. Even seemingly universal naive physics scenarios can carry cultural assumptions about object norms and typical environments.

  The mCSQA dataset (Sakai et al., 2024) represents an early effort to construct multilingual commonsense question answering benchmarks across Japanese, Chinese, French, and German, revealing that frontier multilingual LLMs show markedly lower commonsense accuracy in non-English languages even when controlling for language modelling proficiency. HellaSwag-Pro (Li et al., 2025) extended commonsense sentence-completion evaluation to Chinese, finding systematic performance gaps attributable to both translation artefacts and genuinely different commonsense expectations in Chinese cultural contexts. These gaps are not merely language modelling artefacts — they reflect the cultural specificity of the commonsense knowledge encoded in pre-training data, which overwhelmingly reflects English-language internet text.

  For [[AI Safety]] and fairness, the cultural specificity of commonsense creates a deployment risk: systems calibrated to North American commonsense may produce socially inappropriate or physically implausible outputs when deployed in other cultural contexts, without any measurable degradation on English-language benchmarks. Addressing this requires both culturally diverse commonsense knowledge bases and evaluation benchmarks constructed with local cultural expertise — a resource-intensive research agenda that remains substantially underfunded relative to the scale of the deployment problem.

  ## Future Directions (2026–2030)

  The central open problem — how to give AI systems genuinely robust commonsense reasoning rather than pattern matching that mimics commonsense on benchmarks — is unlikely to be solved by scaling alone. Four research directions appear most promising:

  1. **Physical simulation as a [[World Model]]**: integrating differentiable physics engines (Isaac Gym, MuJoCo) with LLMs to provide genuine naive-physics grounding, rather than relying on text-derived statistics about physical phenomena. [[Embodied AI]] platforms that allow agents to learn physics through interaction will be key testbeds.

  2. **Structured knowledge-augmented inference**: tighter integration of curated commonsense graphs (ATOMIC-2020, ConceptNet, Wikidata) with LLM inference chains, enabling the model to explicitly retrieve and cite commonsense facts before drawing conclusions — a form of [[Retrieval-Augmented Generation]] applied to background knowledge rather than factual documents.

  3. **Neurosymbolic verification**: using [[Description Logic]] reasoners or answer-set programming systems to verify that LLM-generated commonsense inferences satisfy formal consistency constraints (no physical impossibilities, no temporal violations), flagging failures for human review or automated correction.

  4. **Compositional and causal benchmarking**: moving beyond surface multiple-choice evaluation toward tasks requiring causal intervention reasoning (do-calculus), counterfactual inference, and compositional generalisation to novel concept combinations, building on the Logical-CommonsenseQA (2026) paradigm.

  Longer-term, success in commonsense reasoning is expected to underpin substantially more reliable [[AI Agent]] autonomy, safer [[Conversational AI]], and more interpretable [[Explainable AI]] systems that can explain their inferences in terms that humans recognise as commonsense rather than statistical artefacts.

  ## Historical Development

  The intellectual genealogy of commonsense reasoning in AI stretches back further than the field itself. The Enlightenment philosophers described "common sense" as a faculty mediating between raw sensory input and rational deliberation; Thomas Reid (1764) argued that certain basic perceptions — the solidity of objects, the persistence of identity through time — are immediately known without inference, providing the foundations for everyday action. These Reidian intuitions translate directly into the AI challenge: how does a system represent the solid, persistent, causally regular everyday world without explicit axioms for every fact?

  **1950s–1960s: The Problem is Named**
  John McCarthy's 1959 paper "Programs with Common Sense" introduced the Advice Taker, a hypothetical program that would represent factual knowledge in first-order logic and derive new facts by logical deduction. McCarthy identified the fundamental challenge: the advice taker needs an enormous amount of background knowledge that humans take for granted, and encoding it all seems hopeless. The 1969 paper with Patrick Hayes formalised the frame problem — the difficulty of efficiently specifying which facts about a [[World Model]] change when an action is performed and which remain constant — a problem that remains open in its full generality.

  **1970s–1980s: Symbolic Approaches**
  Roger Schank's script theory (1977) proposed that human commonsense reasoning relies on stereotyped event-sequence knowledge structures (scripts) that allow prediction of likely next actions in routine situations. The "restaurant script" — person enters, is seated, orders, receives food, pays, leaves — exemplifies how structured background knowledge enables interpretation of indirect discourse. Marvin Minsky's frame theory (1974) generalised this to property-inheritance hierarchies where objects activate associated frames whose slots may be filled with default values, overridable by context.

  The CYC project, launched by Doug Lenat at MCC in 1984, attempted to manually encode millions of commonsense facts in a custom logic language (CycL, a variant of first-order logic with context operators). CYC accumulated approximately 25 million assertions by 2010, representing one of the largest hand-crafted commonsense [[Knowledge Base]]s ever built. It demonstrated both the value of explicit knowledge encoding and its scalability limits: curating millions of facts required decades of expert effort, and the knowledge remained fragile outside the domains encoded.

  **1990s–2000s: Crowdsourcing and Scale**
  The Open Mind Common Sense project (Singh, MIT Media Lab, 1999) pioneered crowdsourced commonsense knowledge acquisition, recruiting web volunteers to complete prompts like "a knife is used to..." and "something dangerous might be...". This produced the ConceptNet knowledge graph (Liu and Singh, 2004), which aggregated commonsense facts into a [[Semantic Network]] with relation types such as UsedFor, CapableOf, HasProperty, PartOf, and IsA. ConceptNet 5.5 (Speer et al., 2017) extended this to cover 304 languages and integrate sources including Wiktionary, WordNet, FrameNet, and OpenCyc, reaching over 35 million assertions across 8 million concepts in the most recent releases.

  The same period saw the formalisation of [[Non-Monotonic Reasoning]] as a discipline: Reiter's [[Default Logic]] (1980), McCarthy's circumscription (1980), Moore's autoepistemic logic (1985), and later Brewka's prioritised default theories provided the formal machinery for defeasible commonsense inference, though each remained computationally challenging at the scale required for broad-coverage commonsense systems.

  **2010s: The Neural Transition**
  Word embeddings (Word2Vec, Pennington et al. GloVe, 2014) showed that distributed vector representations encode substantial commonsense knowledge implicitly: the vector for "doctor" minus "man" plus "woman" approximates "nurse"; the vector for "puppy" is closer to "dog" than to "cat." These implicit encodings were not explicit propositional knowledge, but they captured the distributional regularities of the commonsense world as reflected in text. Large-scale [[Transfer Learning]] via BERT (Devlin et al., 2018) and GPT-2 (Radford et al., 2019) dramatically improved performance on commonsense benchmarks by training on web-scale corpora where commonsense facts appear in context.

  The Allen Institute for AI released the ATOMIC knowledge graph (Sap et al., 2019), PIQA (Bisk et al., 2020), Social IQa (Sap et al., 2019), WinoGrande (Sakaguchi et al., 2021), and developed the COMET commonsense transformer (Bosselut et al., 2019), establishing a vibrant benchmark ecosystem that documented rapid LLM progress alongside persistent gaps in compositional and physical commonsense.

  **2020s–2026: The Gap Between Benchmark Scores and Real Capability**
  By 2021, fine-tuned large language models achieved near-human performance on HellaSwag (>95%), CommonsenseQA (>90%), and WinoGrande (>90%), suggesting commonsense reasoning might be solved. Adversarial evaluation quickly undermined this conclusion: model performance on HellaSwag-Hard, challenge sets, and out-of-distribution probes remained substantially below human performance. The viral 2025 car-wash evaluation revealed that even frontier models failed at a straightforward physical commonsense problem (drive versus walk to a car wash). BrainBench (2026) provided systematic taxonomy of commonsense failure modes, while Logical-CommonsenseQA (2026) targeted compositional commonsense-logic integration.

  ## Mathematical Foundations

  Commonsense reasoning does not have a single mathematical framework — it is precisely characterised by the failure of standard formal logics to capture everyday inference. The principal formalisms are:

  **Default Logic (Reiter, 1980)**: A default is a rule of the form α : β₁, …, βₙ / γ, read "if α holds and it is consistent to assume β₁, …, βₙ, then conclude γ." The set of beliefs sanctioned by a set of defaults is called an extension; the existence of multiple extensions models the ambiguity inherent in commonsense reasoning. Default Logic provides a formal account of defeasibility but does not scale to the millions of commonsense facts in resources like ConceptNet.

  **Circumscription (McCarthy, 1980)**: The Abnormality minimisation approach — assume all entities are normal (satisfy default predicates) unless forced otherwise by available evidence. Formally, circumscription minimises the extension of an "abnormal" predicate subject to fixing other predicates. This captures the closed-world assumption that default reasoning requires but is second-order and computationally intractable in general.

  **Probabilistic Soft Logic (PSL) and Markov Logic Networks (MLN)**: These formalisms ground predicate logic in probability theory — each logical rule is a soft constraint with an associated weight; the probability of a configuration of truth values is given by a log-linear model. MLNs can represent commonsense rules (e.g. "persons born in country X are probably citizens of country X") with graded confidence, supporting probabilistic [[Inference]]. PSL uses continuous truth values in [0,1] and convex optimisation for inference, enabling scale-up to web-sized [[Knowledge Graph]]s.

  **Bayesian Abductive Logic Programs (BALP)**: Combine abductive reasoning (inference to the best explanation) with probabilistic weights, supporting commonsense narrative understanding where the most probable explanation of observed events must be constructed from prior world knowledge.

  **Vector-Space Commonsense**: In neural approaches, commonsense knowledge is encoded implicitly in the weight matrix of [[Large Language Model]] feedforward layers, which act as a key-value memory mapping input tokens to associated world-knowledge features. [[Retrieval-Augmented Generation]] externalises this implicit knowledge by retrieving relevant [[Knowledge Base]] triples before inference, enabling explicit inspection of the commonsense facts consulted.

  ## Standards and Context

  There are no ISO or IEEE standards specifically governing commonsense reasoning systems. However, several community-driven resources and norms have quasi-standard status:

- **ConceptNet 5.5 API**: The Commonsense Computing Group at MIT provides a public REST API returning ConceptNet assertions for any concept; it is the most widely used external commonsense knowledge resource in NLP research.
- **ATOMIC-2020 release**: Hugging Face hosts ATOMIC-2020 as a downloadable dataset; the COMET model (trained to generate ATOMIC inferences) is available as a Hugging Face model hub checkpoint, establishing a de facto standard for generative commonsense augmentation.
- **HellaSwag, WinoGrande, CommonsenseQA on SuperGLUE**: These benchmarks are included in or adjacent to the SuperGLUE benchmark suite, the dominant NLU evaluation framework for English-language models.
- **BIG-Bench (2022)**: Google's Beyond the Imitation Game Benchmark includes multiple commonsense-reasoning tasks as part of its 204-task diverse evaluation suite, influencing how frontier model providers (Anthropic, Google, OpenAI) report commonsense performance.
- **EU AI Act (2024) and UK AI Safety Institute**: Both reference benchmark robustness as a requirement for high-risk AI system evaluation; commonsense benchmarks are cited as exemplars of domain-general capability assessment. The UK AI Safety Institute's evaluation framework (2024) includes commonsense reasoning stress-testing as part of its pre-deployment model assessment protocol.
- **NIST AI RMF (2023)**: The Risk Management Framework's MEASURE function references behavioural testing across diverse everyday situations — implicitly targeting commonsense robustness — as part of AI system evaluation.

  ## Key Terminology

- **Defeasibility**: the property of commonsense conclusions that they hold by default but can be overridden by exceptional information.
- **Frame problem**: the difficulty of efficiently representing which facts in a [[World Model]] change (and which persist) when an action is performed.
- **Script**: a schematic knowledge structure (Schank 1977) encoding a prototypical sequence of events for a recurring situation type (e.g. "restaurant script").
- **Default Logic**: Reiter's (1980) formal framework for defeasible reasoning using defaults of the form "if A and not known ¬B, then conclude C."
- **ATOMIC**: the Atlas of Machine Commonsense for If-Then Reasoning (Sap et al., 2019); a large-scale commonsense knowledge graph focusing on social causal inference.
- **ConceptNet**: a crowdsourced semantic network encoding 1.6 M+ commonsense assertions across 34 relation types (Liu and Singh, 2004; Speer et al., 2017).
- **HellaSwag**: a physical-activity sentence-completion benchmark (Zellers et al., 2019) designed to defeat BERT-era models; frontier LLMs now exceed 95% accuracy.
- **WinoGrande**: a large-scale Winograd schema challenge (Sakaguchi et al., 2021) requiring commonsense disambiguation of pronouns in adversarially constructed sentences.
- **Circumscription**: McCarthy's (1980) second-order logical framework for abnormality minimisation; models the closed-world assumption underlying default reasoning.
- **Markov Logic Network (MLN)**: Richardson and Domingos (2006) probabilistic-logical framework encoding commonsense rules as weighted first-order clauses in a log-linear model.
- **Resolution limit**: in the context of commonsense benchmarks, refers to the phenomenon where improving on a benchmark does not necessarily improve real-world commonsense performance due to data leakage or shallow statistical patterns.
- **COMET**: Commonsense Transformers (Bosselut et al., 2019) — a generative [[Large Language Model]] trained to produce ATOMIC-style if-then commonsense inferences for arbitrary input events.
- **Open World Assumption (OWA)**: the epistemic stance (from [[Knowledge Representation]] and [[Description Logic]]) that absence of a fact from a knowledge base does not imply the fact is false; appropriate for commonsense reasoning where the knowledge base is necessarily incomplete.
- **Theory of Mind (ToM)**: the ability to attribute mental states — beliefs, desires, intentions, emotions — to other agents and to reason about their likely behaviour; folk psychology's core competence; evaluated by the ToMi benchmark and Social IQa.
- **Counterfactual Reasoning**: a form of commonsense reasoning about what would have happened if circumstances had been different ("If I had not left the tap on, the floor would not be wet"); evaluated by the COUNTERFACTUAL benchmark and implicitly probed by temporal causality tests in BrainBench.
- **Tacit Knowledge**: the portion of commonsense knowledge that is never explicitly stated in any text or formal document and can only be acquired through experience or interaction with the physical and social world; the primary source of difficulty in building comprehensive commonsense AI systems. The vast majority of what people know about everyday life — the resistance of objects to penetration, the social awkwardness of silence in conversation, the predictable behaviour of containers and liquids — belongs to this category. Tacit knowledge acquisition motivates [[Embodied AI]], [[Multi-Modal Learning]], and grounded simulation approaches, and explains why purely text-trained [[Large Language Model]]s retain systematic commonsense gaps despite training on internet-scale corpora where only articulable knowledge is represented.
- **Naive Physics**: the domain of commonsense knowledge governing the behaviour of everyday physical objects and substances — solidity, gravity, thermal properties, containment, rigidity, buoyancy, and motion. Naive physics is evaluated by PIQA, and constitutes the physical-world sub-component of [[Embodied AI]] reasoning requirements. It was the focus of Patrick Hayes's (1978) Naive Physics Manifesto, which argued that AI would need a formal theory of everyday physics far less mathematically demanding than Newtonian mechanics but far more comprehensive than any existing formalism.

  ## Connections to Ontology and Knowledge Engineering

  Commonsense reasoning has a complex relationship with formal [[Ontology]] and [[Knowledge Representation]] engineering. On one hand, the resources built for commonsense AI (ConceptNet, ATOMIC, Cyc) are themselves knowledge bases with ontological structure: ConceptNet's 34 relation types constitute a mini-ontology of semantic relationships; Cyc's microtheories implement a context mechanism analogous to [[Description Logic]] modules. On the other hand, the informal, open-ended, and defeasible nature of commonsense knowledge sits uneasily with the closed-world, monotonic, fully specified character of formal OWL [[Ontology|ontologies]].

  The gap between formal ontologies and commonsense knowledge bases has motivated research on commonsense ontologies — ontologies designed to capture everyday concepts with appropriately informal axioms. SUMO (Suggested Upper Merged Ontology) and OpenCyc represent attempts to build such resources, though their coverage and expressiveness remain limited compared to ConceptNet. The DOLCE (Descriptive Ontology for Linguistic and Cognitive Engineering) foundational ontology provides a philosophically grounded account of everyday entities (events, states, processes, physical objects, social objects) that aligns more closely with commonsense ontological commitments than engineering-focused upper ontologies like SUMO. Bridging commonsense [[Semantic Network]]s (ConceptNet's graph of assertions) with formal [[Description Logic]] ontologies (OWL 2 DL axiom sets) remains an active research challenge, addressed by efforts such as ConceptNet-OWL mappings and ATOMIC2OWL conversion pipelines.

  The [[Knowledge Graph]] paradigm has provided a middle ground: Wikidata's statement-and-qualifier data model allows qualified commonsense assertions ("water boils at 100°C at standard atmospheric pressure") that accommodate contextual exceptions without requiring full formal-logic expressiveness. Wikidata's size (1 billion+ statements, June 2026) and the availability of its SPARQL endpoint make it the largest queryable commonsense-adjacent [[Knowledge Base]] available for AI research, and it is increasingly used as an external commonsense grounding source in [[Retrieval-Augmented Generation]] pipelines.

  ## Research and Literature

  1. McCarthy, J. (1959). "Programs with common sense." Proceedings of the Teddington Conference on the Mechanisation of Thought Processes. HMSO, London.
  2. McCarthy, J. and Hayes, P. J. (1969). "Some philosophical problems from the standpoint of artificial intelligence." Machine Intelligence 4. Edinburgh University Press.
  3. Minsky, M. (1974). "A framework for representing knowledge." MIT AI Lab Memo 306. MIT.
  4. Reiter, R. (1980). "A logic for default reasoning." Artificial Intelligence 13(1–2): 81–132.
  5. Schank, R. C. and Abelson, R. P. (1977). Scripts, Plans, Goals, and Understanding. Lawrence Erlbaum.
  6. Lenat, D. B. (1995). "CYC: A large-scale investment in knowledge infrastructure." Communications of the ACM 38(11): 33–38.
  7. Liu, H. and Singh, P. (2004). "ConceptNet: A practical commonsense reasoning tool-kit." BT Technology Journal 22(4): 211–226.
  8. Speer, R., Chin, J., and Havasi, C. (2017). "ConceptNet 5.5: An Open Multilingual Graph of General Knowledge." AAAI 2017. https://arxiv.org/abs/1612.03975
  9. Sap, M. et al. (2019). "ATOMIC: An Atlas of Machine Commonsense for If-Then Reasoning." AAAI 2019. https://arxiv.org/abs/1811.00146
  10. Zellers, R. et al. (2019). "HellaSwag: Can a Machine Really Finish Your Sentence?" ACL 2019. https://arxiv.org/abs/1905.07830
  11. Talmor, A. et al. (2019). "CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge." NAACL 2019. https://arxiv.org/abs/1811.00937
  12. Bisk, Y. et al. (2020). "PIQA: Reasoning about Physical Intuition in Natural Language." AAAI 2020. https://arxiv.org/abs/1911.11641
  13. Sakaguchi, K. et al. (2021). "WinoGrande: An Adversarial Winograd Schema Challenge at Scale." Communications of the ACM 64(9): 99–106.
  14. Hwang, J. D. et al. (2021). "(Comet-)Atomic 2020: On Symbolic and Neural Commonsense Knowledge Graphs." AAAI 2021. https://cdn.aaai.org/ojs/16792/16792-13-20286-1-2-20210518.pdf
  15. Sap, M. et al. (2019). "Social IQa: Commonsense Reasoning about Social Interactions." EMNLP 2019. https://arxiv.org/abs/1904.09728
  16. Park, J. S. et al. (2019). "VisualCOMET: Reasoning about the Dynamic Context of a Still Image." ECCV 2020.
  17. Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. https://arxiv.org/abs/2201.11903
  18. Zellers, R. et al. (2018). "Swag: A Large-Scale Adversarial Dataset for Grounded Commonsense Inference." EMNLP 2018.
  19. Rajani, N. F. et al. (2019). "Explain Yourself! Leveraging Language Models for Commonsense Reasoning." ACL 2019.
  20. Bhargava, P. et al. (2022). "Commonsense Knowledge Base Completion with Structural and Semantic Context." AAAI 2022.
  21. Alan Turing Institute (2024). "Neuro-Symbolic AI Interest Group." https://www.turing.ac.uk/research/interest-groups/neuro-symbolic-ai
  22. Li, Y. et al. (2025). "HellaSwag-Pro: Self-bootstrapping Chinese Commonsense Evaluation." ArXiv 2025.
  23. AI Parivartan Research Lab (2025). "September 2025 LLM Commonsense and Social Benchmarks Report." Hugging Face Blog. https://huggingface.co/blog/rajkumarrawal/september-2025-aiprl-lir-commonsense-social
  24. BrainBench Authors (2026). "BrainBench: Exposing the Commonsense Reasoning Gap in Large Language Models." ArXiv 2026. https://arxiv.org/html/2603.14761
  25. Logical-CommonsenseQA Authors (2026). "Logical-CommonsenseQA: A Benchmark for Logical Commonsense Reasoning." ArXiv 2026. https://arxiv.org/html/2601.16504
  26. Hitzler, P. et al. (2022). "Neuro-Symbolic Approaches in Artificial Intelligence." National Science Review 9(6).
  27. Grice, H. P. (1975). "Logic and Conversation." In Cole, P. and Morgan, J. (Eds.), Syntax and Semantics vol. 3. Academic Press.

### Provenance

## Merged from Common Sense Reasoning (needs reconciliation)
The capacity of an AI system to draw inferences that humans consider obvious from general background knowledge about the physical world, social norms, causality, and everyday object behaviour — without explicit instruction. It encompasses naive physics, naive psychology, temporal reasoning, spatial reasoning, and social cognition grounded in embodied human experience, and is tested against benchmarks including CommonsenseQA, HellaSwag, WinoGrande, and PIQA.

### Semantic Classification

### Content

## Compositional Relationships (Components)
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:NaivePhysics))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:TheoryOfMind))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:CausalReasoning))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:TemporalReasoning))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:SpatialReasoning))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:SocialCognition))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:NonMonotonicReasoning))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:DefaultLogic))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:FrameSemantics))

## Dependency Relationships
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:Grounding))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:WorldModel))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:KnowledgeBase))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:requires ai:Inference))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:SemanticNetwork))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModel))

## Capability Relationships
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:AIAgents))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:NaturalLanguageUnderstanding))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:QuestionAnswering))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:EmbodiedAI))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:Planning))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:ConversationalAI))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:enables ai:Robotics))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:supports ai:AISafety))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))

## Implementation Relationships
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModel))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:KnowledgeGraph))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:NeuralSymbolicIntegration))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:ChainOfThoughtPrompting))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:uses ai:RetrievalAugmentedGeneration))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:implements ai:NeurosymbolicAI))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:implements ai:RLHF))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:implements ai:ConstitutionalAI))

## Reduction Relationships
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:PlausibleInference))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:DefaultRuleApplication))
    SubClassOf(ai:CommonSenseReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:ContextSensitiveInference))
## About

  Common sense reasoning occupies a peculiar position in AI research: it is simultaneously among the most natural capabilities for humans and among the most elusive for machines. The distinction between what AI systems can do and what they cannot do is perhaps nowhere sharper than here: a system that can win at chess against world champions or generate professional-quality text may simultaneously fail to recognise that you cannot dry yourself with a wet towel, that pulling a tablecloth out from under plates is likely to cause them to fall, or that a person who says "could you pass the salt?" is making a request rather than enquiring about your capability. These failures are not peripheral edge cases — they reflect a fundamental gap between statistical language competence and the embodied, causal, and social knowledge that underlies human intelligence. This gap has consequences for every AI application that involves real-world interaction: medical AI that cannot infer contraindications from clinical context; robotic systems that cannot plan around physical constraints; legal AI that cannot infer the spirit of instructions from their letter; autonomous vehicles that cannot predict jaywalking behaviour from social context. Common sense reasoning is therefore not a research curiosity but a prerequisite for safe and beneficial general AI.

  The challenge was articulated as early as 1958 by John McCarthy, who described the need for programs with "common sense" that could derive conclusions from large bodies of background knowledge without explicit programming. McCarthy's 1959 paper "Programs with Common Sense" — presented at the Teddington Conference on the Mechanisation of Thought Processes and notable as one of the first papers to use the term "common sense" in relation to machine intelligence — proposed the Advice Taker, a hypothetical system that could accept new axioms from a user and derive new conclusions from them, including common-sense facts about the world. McCarthy and Hayes (1969) subsequently formalised the frame problem — the challenge of representing, in a formal system, which facts remain unchanged when an action is performed — which has remained a central theoretical obstacle for knowledge-based common-sense systems for over fifty years.

  The Cyc project (Douglas Lenat, 1984–2023) operationalised the common-sense challenge as the systematic hand-coding of millions of commonsense facts and inference rules into a formal ontology in first-order predicate logic. Beginning at MCC (Microelectronics and Computer Technology Corporation) in July 1984 and subsequently spun out as Cycorp in 1995, Cyc accumulated over 600,000 concepts and several million assertions over four decades of effort. By the time of Lenat's death in August 2023, Cyc had grown to 25 million rules, 1.5 million concepts, and over a thousand specialised inference engines. OpenCyc, released in 2002, offered a lightweight public subset. The project demonstrated both the feasibility of large-scale common-sense knowledge engineering and its staggering labour cost, and was criticised by machine-learning researchers including Pedro Domingos as a "catastrophic failure" due to its inability to evolve autonomously from new data. Lenat himself, in his final paper, argued that Cyc and large language models should be viewed as complementary rather than competing: LLMs are fluent and broad but often inconsistent, while Cyc's conclusions are always supported by auditable reasoning chains.

  The parallel crowdsourced approach yielded [[ConceptNet]] (originating at MIT Media Lab's Open Mind Common Sense project, circa 2000, published formally by Liu and Singh 2004) and the ATOMIC [[Knowledge Graph]] (Sap et al., 2019), which encode commonsense relationships in graph form accessible to neural systems. ConceptNet v5 (Speer et al., 2017) combines expert-curated and crowd-sourced knowledge from multiple sources — Wiktionary, DBPedia, Open Mind Common Sense, and others — totalling over 1.6 million commonsense relationship triples across concepts in more than 100 languages, using 36 relation types including IsA, UsedFor, HasProperty, PartOf, Causes, and MotivatedByGoal. ATOMIC (Sap et al., 2019) organises 880,000 if-then knowledge tuples across nine social and causal relation types covering causes, effects, and mental state inferences about everyday events; its neural extension COMET-ATOMIC20 (Hwang et al., 2021) uses a pre-trained [[Transformer Architecture]] to generate commonsense inferences on demand, making it possible to augment [[Large Language Model]] with structured commonsense knowledge retrieval at inference time through [[Retrieval-Augmented Generation]] pipelines. ATOMIC-2020 unified ATOMIC with ConceptNet into a single graph with 23 relation types and over 1.33 million common-sense tuples.

  The paradigm shift from symbolic knowledge engineering to neural pre-training occurred with the [[Deep Learning]] era. Models trained on internet-scale text — initially word2vec (Mikolov et al., 2013), then ELMo (Peters et al., 2018), then BERT (Devlin et al., 2019), then GPT-style [[Foundation Model]] — absorbed implicit commonsense knowledge through statistical regularities in language, achieving high scores on early commonsense benchmarks almost as a by-product of scale. This prompted the development of harder benchmarks specifically designed to probe commonsense understanding beyond surface pattern matching: [[HellaSwag]] (Zellers et al., 2019) measures activity-completion prediction with adversarially generated distractors that are grammatically plausible but physically implausible, designed explicitly to defeat BERT-era models; [[WinoGrande]] (Sakaguchi et al., 2021) scales Winograd schema pronoun-resolution to 44,000 adversarially curated examples; [[CommonsenseQA]] (Talmor et al., 2019) tests multi-hop commonsense inference using [[ConceptNet]] as the knowledge source for question generation; Physical Intuition QA (PIQA, Bisk et al., 2020) focuses specifically on [[Naive Physics]] by asking models to select the correct procedure for physical goals; and Social IQa (Sap et al., 2019) evaluates folk psychology reasoning about agents' motivations, reactions, and mental states across 38,000 multiple-choice questions.

  A pivotal theoretical challenge exposed by the LLM era is the gap between benchmark performance and genuine commonsense understanding. Bender et al. (2021) argued that large language models perform sophisticated statistical interpolation — "stochastic parrots" — rather than genuine reasoning, and subsequent adversarial evaluation confirmed that many benchmark gains reflect distribution-specific pattern learning rather than generalised background knowledge. Studies from 2024 and 2025 showed that frontier LLMs continue to fail on adversarial probes that require compositional generalisation, novel physical scenarios, and multi-step causal inference chains, even when achieving near-human scores on standard benchmark splits.

  The 2024–2026 research consensus is that monolithic LLMs fail systematically on reasoning tasks requiring deterministic logical chains or combinatorial search, and that neuro-symbolic models consistently outperform monolithic LLMs of comparable size on complex multi-step reasoning chains. The REASON framework (2025) accelerates probabilistic logical reasoning for scalable [[Neurosymbolic AI]] by combining neural approximate inference with symbolic constraint satisfaction. The Cosmos-Reason1 models (NVIDIA, 2025) apply multimodal pre-training specifically to physical common sense and embodied reasoning through long chain-of-thought reasoning sequences, representing a shift toward grounding commonsense in physical simulation rather than text alone. Amazon reported in 2025 that applying neurosymbolic techniques to its Vulcan warehouse robots and Rufus shopping assistant demonstrably improved accuracy and decision-making in commonsense-demanding tasks, representing one of the first large-scale industrial deployments of neurosymbolic common-sense integration.

## Components / Architecture

  Common Sense Reasoning systems decompose into several recognisable architectural patterns that can be deployed separately or in combination:

  **Naive Physics Module**: Represents constraints on physical object behaviour — solidity, continuity, gravity, rigidity, liquidity, thermal properties — either as symbolic rules (as in Cyc's naive physics microtheory) or implicitly in neural embeddings trained on text and simulation data. The naive physics manifesto (Hayes, 1978) provided the original formal programme; modern approaches use differentiable physics simulators (MuJoCo, Isaac Gym) to supply training signal. PIQA evaluates naive physics reasoning, and [[Embodied AI]] robotic systems increasingly rely on learned physics representations to plan physical manipulation tasks.

  **Theory of Mind Module**: Represents beliefs, desires, goals, intentions, and epistemic states of agents, enabling prediction of behaviour and attribution of mental states to others. Evaluated by false-belief tasks (Sally-Anne type), the ToMi benchmark (Le et al., 2019), and Social IQa (Sap et al., 2019). [[Large Language Model]] display partial Theory of Mind capability that degrades on more complex multi-agent, multi-step false-belief scenarios. The relationship between Theory of Mind and [[AI Alignment]] is direct: systems that cannot model human beliefs and intentions cannot reliably act in accordance with them.

  **Causal Reasoning Component**: Encodes directional causal relationships between events and actions, enabling forward simulation (what happens next?), backward counterfactual inference (what if X had not happened?), and abductive inference (what is the most plausible explanation?). ATOMIC's cause-and-effect relations support causal inference; the do-calculus (Pearl, 2000) provides the formal framework; and causal commonsense benchmarks test whether systems can distinguish correlation from causation in everyday scenarios. [[Retrieval-Augmented Generation]] over causal knowledge graphs improves causal commonsense performance in [[Question Answering]] systems.

  **Temporal Reasoning Component**: Manages event ordering, duration, simultaneity, temporal reference resolution, and persistence (the frame problem). Evaluated by TimeQA and temporal commonsense benchmarks. Script-based knowledge (Schank and Abelson, 1977) organises stereotyped event sequences — the "restaurant script" encodes the canonical ordering of arrival, ordering, eating, and payment — providing a structured representation of temporal commonsense expectations. [[Transformer Architecture]]-based models with large context windows handle some temporal reasoning through attention over long token sequences, but struggle with precise duration estimation and event persistence tracking.

  **Spatial Reasoning Component**: Encodes topological and metric spatial relations between objects and locations, essential for [[Robotics]] and [[Embodied AI]] task planning. Qualitative spatial reasoning formalisms (RCC8 region connection calculus) provide symbolic representations; neural approaches learn spatial relations from vision-language training data. Spatial commonsense is evaluated by benchmarks including SpartQA (spatial question answering) and by robotic manipulation tasks requiring precise spatial planning.

  **Knowledge Graph Augmentation**: Runtime retrieval from [[ConceptNet]], ATOMIC, or Wikidata to supply structured commonsense facts as context to a base [[Large Language Model]] during inference, implemented via [[Retrieval-Augmented Generation]]. Neurosymbolic visual reasoning surveys (Khan et al., 2025) document that infusing common-sense knowledge through heterogeneous knowledge graphs improves accuracy, expressiveness, and intuitive downstream reasoning across vision-language tasks. ConceptNet-augmented RAG pipelines demonstrably improve performance on [[CommonsenseQA]] relative to parametric-only LLM baselines.

  **[[Chain-of-Thought Prompting]]**: Eliciting step-by-step reasoning traces from [[Large Language Model]] to surface implicit commonsense inference chains and improve reliability on multi-step problems. Wei et al. (2022) demonstrated substantial commonsense reasoning improvements from chain-of-thought prompting across multiple benchmarks; the mechanism is believed to work by externalising intermediate reasoning steps that would otherwise be compressed into a single forward pass. Tree-of-thought and graph-of-thought extensions further structure the reasoning process. [[Fine-Tuning]] on chain-of-thought reasoning traces from stronger models improves commonsense performance on weaker models through [[Transfer Learning]].

  **Neuro-Symbolic Hybrid Layer**: A symbolic reasoning engine (theorem prover, constraint solver, Datalog engine, or answer-set programming system) operating over neural-encoded propositions, as in the REASON framework (2025) or NeuroSymbolic Concept Learner. Integrative approaches embed symbolic reasoning within the neural network; hybrid approaches maintain a separate symbolic solver alongside the neural component. The REASON framework specifically combines neural approximate inference with probabilistic logic programming for scalable common-sense inference chains. The 2025 neuro-symbolic AI survey (PMC/NIH) explicitly frames neurosymbolic integration as an antithesis to pure scaling laws, arguing that architectural hybridisation rather than data and parameter scaling is the correct path to robust common sense.

  **[[Reinforcement Learning from Human Feedback]] and Alignment Signal**: Reinforcement learning from human feedback provides a training signal grounded in human common-sense judgements about helpfulness, harmlessness, and honesty. Since human evaluators naturally apply commonsense norms when rating AI outputs, RLHF implicitly penalises physically implausible, temporally inconsistent, or socially incoherent generations, acting as a weak but broad common-sense alignment mechanism. [[Constitutional AI]] (Anthropic, 2022) extends this by encoding common-sense-grounded principles as explicit constraints that the model applies to its own outputs through self-critique.

## Evaluation Benchmarks (Selected)

  Commonsense reasoning evaluation is particularly challenging because commonsense knowledge is so vast and contextually variable that no single benchmark can comprehensively measure it. The field has converged on a family of targeted benchmarks, each probing a distinct knowledge dimension:

- **HellaSwag** (Zellers et al., 2019): Activity-completion prediction over 70,000 examples derived from ActivityNet Captions and WikiHow. Distractors are generated adversarially to be grammatically plausible but physically implausible, so that models scoring well cannot rely on surface-level language statistics. Frontier LLMs now exceed 95% accuracy on the standard split; adversarial hard variants remain challenging and are used in ongoing evaluation.
- **WinoGrande** (Sakaguchi et al., 2021): 44,000 Winograd-style pronoun coreference problems requiring commonsense disambiguation. The correct antecedent of a pronoun can only be determined by applying commonsense knowledge about typical agent goals, physical capabilities, or social roles — not by syntactic or distributional cues. The dataset was constructed using adversarial filtering to remove items solvable by statistical shortcuts.
- **CommonsenseQA** (Talmor et al., 2019): 12,247 multiple-choice questions derived from [[ConceptNet]] relationships, requiring multi-hop commonsense inference. Questions are generated by crowdworkers who are shown a concept and three related concepts, then asked to write a question whose answer is one of the three but not the others — requiring commonsense knowledge of the concept graph structure.
- **PIQA** (Bisk et al., 2020): 20,000 multiple-choice physical-intuition questions about everyday physical actions and their correct procedures, testing whether models understand material properties, forces, and object affordances. Example: "How do you make a bed? (a) Pull sheets over mattress and tuck in corners vs. (b) Pull sheets under mattress and leave edges loose."
- **Social IQa** (Sap et al., 2019): 37,588 multiple-choice questions about social interactions, motivations, and emotional reactions, targeting the folk psychology dimension of commonsense. Questions ask about the emotional reactions, motivations, or likely post-event actions of characters in described social situations.
- **VisualCOMET** (Park et al., 2020): Visual commonsense inference benchmark requiring systems to reason about the dynamic context of still images — what happened before the depicted moment, what will happen after, and what the depicted characters are intending. Extends ATOMIC-style temporal and intentional inference to the visual domain.
- **Logical-CommonsenseQA** (2026): Combines atomic commonsense answers under AND/OR/NEITHER logical operators, testing whether models can compositionally integrate commonsense knowledge with propositional logical structure. Represents the current frontier of benchmark difficulty, targeting a capability gap not addressed by prior multiple-choice benchmarks.
- **BrainBench** (2026): A systematic taxonomy of commonsense failure modes in frontier LLMs, categorising spatial, temporal, causal, and social failure patterns and providing a structured evaluation framework for identifying specific knowledge dimensions where models fall short. Published as arXiv:2603.14761.

  ## Use Cases / Major Families

  **Dialogue Systems and [[Conversational AI]]**: Chatbots and virtual assistants require commonsense to interpret indirect speech acts, resolve ambiguous references across conversation turns, understand implied goals from partial information, and generate contextually appropriate responses that satisfy conversational maxims (Grice, 1975). Without commonsense, systems produce literally correct but pragmatically absurd responses — for instance, misinterpreting "can you open the window?" as a question about physical capability rather than a request. [[Conversational AI]] systems including ChatGPT, Claude, and Gemini rely heavily on implicitly learned commonsense for response coherence, while their documented failure modes on adversarial commonsense probes motivate hybrid knowledge-graph-augmented approaches in high-stakes deployments.

  **Reading Comprehension and [[Question Answering]]**: Open-domain [[Question Answering]] over documents requires inferring unstated world-knowledge connections between question and answer passage, going beyond text-surface retrieval to genuine [[Natural Language Understanding]]. Questions like "What would happen if you put a glass of water in a freezer for an hour?" require [[Naive Physics]] knowledge about phase transitions that may not be stated in any retrieved document. [[Retrieval-Augmented Generation]] pipelines grounding LLM inference in a structured [[Knowledge Graph]] (ConceptNet-augmented RAG) improve commonsense [[Question Answering]] accuracy relative to parametric-only baselines.

  **Robot Task Planning and [[Embodied AI]]**: [[Embodied AI]] systems operating in physical environments must reason about the current state of the world, predict the effects of actions, detect physical and spatial constraints, and replan when unexpected events occur. This requires [[Naive Physics]], [[Spatial Reasoning]], and [[Causal Reasoning]] operating jointly across perception and action. [[Embodied AI]] platforms such as AI2-THOR, Habitat, and RoboAgent provide simulation environments for acquiring physical commonsense through interaction. Mobile service robots must interpret commands in human-centred environments, addressing the lack of embodied commonsense and awareness of physical constraints as a core design challenge (MDPI Robotics, 2025).

  **Medical and Clinical NLP**: Clinical NLP systems must infer unstated but medically commonsense implications — a patient who is unconscious cannot consent; a drug contraindicated for kidney disease should not be prescribed to a patient with documented renal failure; a symptom onset before treatment rules out treatment as a cause. These inferences require [[Causal Reasoning]], temporal ordering, and domain-specific commonsense that may not be explicitly stated in clinical notes. Commonsense failures in medical AI contribute to [[Hallucination]] in clinical decision support, with documented safety implications in medical literature triage and EHR-based recommendation systems.

  **Autonomous Driving**: Safe navigation requires predicting the behaviour of pedestrians, cyclists, and other drivers based on social norms, traffic conventions, and environmental context. Commonsense rules — "pedestrians crossing a road have right of way," "a ball rolling into the road often precedes a child following it," "at a roundabout, traffic already on the roundabout has priority" — govern safe behaviour in ambiguous situations not fully specified by formal traffic law. [[Embodied AI]] approaches such as those pursued by Wayve (London) model road scene commonsense through end-to-end learning from human driving demonstrations, implicitly acquiring social and physical commonsense from observed behaviour.

  **[[AI Safety]] and [[AI Alignment]]**: Systems lacking common sense may comply with the letter of a request while violating its spirit, producing unsafe outcomes obvious to any reasonable human observer. A system asked to "maximise paperclip production" that lacks commonsense about the value of human life exemplifies the alignment problem in its most dramatic form. More practically, LLMs that generate physically impossible medical dosage instructions, recommend walking to a car wash rather than driving, or fail to recognise that an unconscious patient cannot provide consent are commonsense-deficient in ways that create liability and safety risk. [[Constitutional AI]] principles (Anthropic, 2022) implicitly encode commonsense norms about harmlessness and honesty; the UK AI Safety Institute has identified commonsense reasoning failures as a distinct category of unsafe frontier model behaviour requiring evaluation protocols.

  **[[Visual Question Answering]] and Multimodal Reasoning**: VQA systems asked "Can the person in the image reach the top shelf?" must combine visual size estimation with [[Naive Physics]] about body mechanics and common-sense knowledge about typical household environments. [[Multi-Modal Learning]] models trained on image-text pairs acquire partial visual commonsense, but remain vulnerable on novel object configurations, unusual spatial arrangements, and questions requiring multi-step physical reasoning about depicted scenes. Multimodal commonsense benchmarks (VisualCOMET, WinoGround) probe these failure modes.

  ## Academic Context

  The intellectual lineage of common sense reasoning begins with McCarthy's 1959 paper "Programs with Common Sense" and the subsequent frame problem (McCarthy and Hayes, 1969). Minsky's frame theory (1974) proposed structured representations of typical scenarios called frames — organised sets of slots representing attributes of prototypical objects or situations, with default values that apply unless contradicted by specific knowledge. Scripts (Schank and Abelson, 1977) encoded stereotyped event sequences — the restaurant script, the birthday party script, the job interview script — as structured representations of what typically happens in standard situations, enabling commonsense inference about what is likely to occur next and what has implicitly already occurred. Hayes's naive physics manifesto (1978) launched a systematic programme for formally encoding physical commonsense knowledge, decomposing the problem into sub-domains including the shape of objects, histories, states of matter, measurement, and space. Reiter (1980) provided the formal basis for [[Default Logic]] as a framework for reasoning with defaults that can be overridden by exceptions — the formal counterpart of human common-sense reasoning's defeasible character. Lenat's Cyc project (1984) pursued exhaustive symbolic knowledge engineering at scale for four decades, ultimately accumulating 25 million rules and 1.5 million concepts by the time of Lenat's death in August 2023.

  The first generation of connectionist approaches (1980s–1990s) largely ignored commonsense in favour of perceptual tasks including handwritten digit recognition, speech recognition, and image classification, leaving the symbolic-neural integration problem unresolved. Rumelhart and McClelland's parallel distributed processing (PDP) framework implicitly encoded some semantic relations through pattern activation, but lacked the structured representation needed for explicit commonsense inference. The distributional semantics revolution (word2vec, Mikolov et al., 2013; GloVe, Pennington et al., 2014) showed that word embeddings implicitly encode some semantic and analogical relations (king − man + woman ≈ queen), but not causal or temporal commonsense beyond simple association. The [[Transformer Architecture]] era — beginning with Vaswani et al. (2017) and accelerating with BERT (Devlin et al., 2019) and GPT-2/3 (Radford et al., 2019; Brown et al., 2020) — produced systems scoring above 80% on early commonsense benchmarks through large-scale pattern learning over Common Crawl and WebText. This prompted the adversarial benchmark development cycle: HellaSwag (2019), WinoGrande (2021), Social IQa (2019), PIQA (2020), CommonsenseQA (2019), all designed to resist surface-pattern exploitation through adversarial filtering, leaving a performance gap that requires genuine commonsense reasoning.

  The neurosymbolic reconciliation phase (2020–present) has produced several distinct research lines. The knowledge-augmented LLM line — exemplified by COMET (Bosselut et al., 2019), COMET-ATOMIC20 (Hwang et al., 2021), and GPT-3 with ATOMIC-augmented prompts — augments neural language models with structured commonsense knowledge retrieved at inference time. The multi-task commonsense learning line — exemplified by UnifiedQA, UNICORN on RAINBOW (Lourie et al., 2021), and T5-based multi-task models — trains a single model across multiple commonsense benchmarks to learn a shared commonsense representation. The grounding-through-simulation line — exemplified by [[Embodied AI]] work at MIT (Thor simulator, iGibson), CMU (Habitat, PyBullet manipulation), Stanford (RoboSuite, VirtualHome), and Google DeepMind (SpatioTemporal Graphs, Waypoint Navigation) — attempts to acquire physical commonsense through virtual or real physical interaction rather than text statistics. The neurosymbolic inference line — exemplified by the REASON framework (2025), NeuroSymbolic Concept Learner, and Scallop (a probabilistic Datalog engine with neural perception) — integrates symbolic reasoning engines with neural representations to produce traceable commonsense inference chains. The adversarial evaluation methodology line — exemplified by Bender et al. (2021), Marcus and Davis (2022), and Talmor et al. (2025) "Towards a Litmus Test for Common Sense" — pushes toward evaluation protocols that can reliably distinguish genuine commonsense acquisition from benchmark-specific memorisation, using compositional generalisation tests, counterfactual probes, and systematic surface-form variation as discriminating tools.

  The Allen Institute for Artificial Intelligence (AI2, Seattle) has been the most prolific producer of commonsense benchmarks and knowledge resources, including ATOMIC, ATOMIC-2020, Social IQa, WinoGrande, PIQA, CommonGen (commonsense story generation), VisualCOMET (visual commonsense inference), and the RAINBOW benchmark suite. AI2's Mosaic project specifically focuses on large-scale commonsense understanding. MIT Media Lab and the MIT Computational Psycholinguistics Lab produced [[ConceptNet]] and continue to maintain it as an open community resource. Stanford's Human-Centered AI Institute (HAI), CMU's Language Technologies Institute (LTI), the University of Washington's NLP group, and NYU's Centre for Data Science maintain major research programmes on commonsense in language and embodied settings. A US–UK Multidisciplinary University Research Initiative (MURI) collaboration on visual commonsense reasoning includes teams from the Universities of Birmingham, Glasgow, Leeds, and Oxford, demonstrating the international collaborative nature of the research frontier and the UK's substantive participation in it. The 2025 neurosymbolic AI survey published in PMC/NIH (framing neurosymbolic AI as an antithesis to scaling laws) represents the most comprehensive recent synthesis of the field, identifying the integrative and hybrid architectural patterns as the two dominant neurosymbolic paradigms and documenting their consistent outperformance of monolithic LLMs on complex reasoning chains.

  ## Current Landscape (2026)

  By mid-2026, the major frontier [[Large Language Model]] — GPT-4 successors, Gemini Ultra successors, Claude 3 successors, and open models including Qwen3 — achieve near-human performance on established commonsense benchmarks including [[HellaSwag]], [[CommonsenseQA]], and [[WinoGrande]] under standard evaluation conditions, but continue to fail systematically on adversarial probes and novel physical scenarios not well represented in training distributions. The 2025 AI benchmark landscape shows multiple commonsense tests in active use as part of standard LLM evaluation suites, alongside harder reasoning benchmarks (GPQA, AIME) that reflect the field's shift toward more demanding evaluation.

  The dominant research trend is hybridisation: LLMs are increasingly augmented with structured commonsense [[Knowledge Graph]]s (ConceptNet, ATOMIC-2020, Wikidata) via [[Retrieval-Augmented Generation]] to ground inference in explicit knowledge rather than purely parametric recall. [[Chain-of-Thought Prompting]] substantially improves commonsense performance by externalising implicit reasoning steps, with tree-of-thought and graph-of-thought extensions further structuring the reasoning process. [[Neurosymbolic AI]] approaches — combining neural LLMs with symbolic commonsense reasoners or [[Description Logic]] engines — have seen renewed interest, with the 2025 PMC/NIH survey explicitly framing neurosymbolic AI as an antithesis to scaling laws.

  [[Embodied AI]] has emerged as the most promising pathway to robust commonsense acquisition, with NVIDIA's Cosmos-Reason1 (2025) representing the leading multimodal embodied commonsense pre-training effort. Amazon's deployment of neurosymbolic techniques in its Vulcan warehouse robots and Rufus shopping assistant (2025) represents one of the first large-scale industrial applications of neurosymbolic common-sense integration, demonstrating commercial viability beyond research settings.

  The [[AI Alignment]] connection has sharpened: frontier AI safety researchers now treat commonsense as a prerequisite for value alignment. [[Constitutional AI]] approaches rely on commonsense norms encoded as principles; [[Reinforcement Learning from Human Feedback]] training signal reflects human judgements grounded in commonsense expectations. Legal and regulatory scrutiny of AI-generated [[Hallucination]] — driven by liability cases in medical AI, legal AI, and automated customer service — has increased the practical stakes of commonsense failures. LLM hallucination rates as high as 10–20% on commonsense-demanding tasks (Lakera, 2026) are cited as a key blocker for regulated-sector deployment.

  ## UK Context

  UK academic institutions have been significant contributors to common sense reasoning research across both the symbolic and neural traditions. The University of Edinburgh's Institute for Language, Cognition and Computation (ILCC), through researchers including Vaishak Belle, has contributed to statistical relational learning and neuro-symbolic approaches that address commonsense inference under uncertainty. Edinburgh's participation in the US–UK MURI on visual commonsense reasoning directly links Scottish academic expertise to frontier multimodal commonsense research.

  Tony Cohn and Brandon Bennett at the University of Leeds have contributed foundational work on qualitative spatial reasoning (QSR) and the Region Connection Calculus (RCC8), providing formal tools for encoding spatial commonsense that are used in [[Robotics]] and geographical information systems. Antonis Bikakis at University College London (UCL) has worked on commonsense reasoning in multi-agent systems and incomplete information contexts. Oxford's Future of Humanity Institute (now the Existential Risk Initiative) and the affiliated Centre for the Governance of AI have framed commonsense understanding as a component of [[AI Safety]], arguing that systems lacking common sense pose systematic misalignment risks in autonomous operation.

  The University of Sheffield's Natural Language Processing group, founded by Yorick Wilks — a pioneer of commonsense-driven NLP and preference semantics — maintains a long tradition of work on implicit meaning, presupposition, and background knowledge in language, directly relevant to commonsense reasoning in [[Natural Language Understanding]]. The University of Manchester's School of Computer Science hosts Description Logic and OWL ontology research (Ian Horrocks, Carole Goble) that provides foundational tools for formalising commonsense knowledge in [[Ontology|ontologies]], with applications in biomedical NLP where implicit medical commonsense is operationally critical.

  Industrial AI research in the UK relevant to commonsense includes DeepMind (London), whose work on agent environments (DMLab, XLand, AlphaCode) has produced insights into commonsense acquisition through environmental interaction. Wayve (London) addresses the commonsense challenge specifically in autonomous driving — predicting road scene behaviour based on social norms and physical commonsense without exhaustive rule encoding. Arm AI Research (Cambridge) contributes to edge-AI commonsense capabilities for embedded systems. The UK AI Safety Institute (AISI, established 2023) has included commonsense understanding in its frontier model evaluation framework, recognising that failures of commonsense reasoning constitute a class of safety-relevant failure modes distinct from capability elicitation failures.

  Northern English universities — Leeds, Sheffield, Manchester, Newcastle — contribute through computational linguistics, cognitive science, and digital humanities research. The University of Manchester's Turing Building hosts researchers working on ontological [[Knowledge Representation]] of commonsense knowledge applied to biomedical and scientific NLP. The UKRI EPSRC has funded commonsense-related research through its Trustworthy Autonomous Systems and Responsible AI priorities, with several grants addressing the safe deployment of NLP systems in healthcare and public services that depend on commonsense reasoning robustness.

  ## Formal Foundations and Inference Mechanisms

  Commonsense reasoning employs a distinctive set of inference mechanisms that differ fundamentally from classical deductive reasoning. Understanding these mechanisms is essential for designing AI systems that can approximate human commonsense performance:

  **Default Reasoning**: The most characteristic commonsense inference pattern. Defaults take the form "Normally, X; unless there is evidence to the contrary." Formal frameworks include [[Default Logic]] (Reiter, 1980), circumscription (McCarthy, 1980), and answer-set programming. All three frameworks handle defeasibility formally but struggle with scalability to large knowledge bases — a key motivation for neural approximation approaches. The REASON framework (2025) addresses scalability through probabilistic logic programming with neural scoring of hypothesis plausibility.

  **Abductive Inference**: Given an observation, infer the most plausible explanation among competing hypotheses. Abduction is central to story understanding (why did Jane go to the kitchen?), diagnostic reasoning (what caused this symptom?), and discourse interpretation (what implicit event connects these two sentences?). Abduction is implemented using probabilistic inference over explanation hypotheses, sometimes combined with neural scoring of explanatory coherence from pretrained [[Large Language Model]].

  **Analogical Reasoning**: Apply structural mappings from familiar situations to novel ones, transferring commonsense expectations from known scenarios to structurally similar new ones. Structure-mapping theory (Gentner, 1983) provides the cognitive science basis. Neural architectures that learn relational graph patterns — rather than surface features — are better positioned for analogical commonsense reasoning than purely distributional models.

  **Script-Based Inference**: Sequences of prototypical event frames (scripts, Schank 1977) allow prediction of likely next actions and inference about implicit preconditions and postconditions. Going to a restaurant involves: entering, being seated, consulting a menu, ordering, eating, paying, leaving — each step with its own preconditions, participants, and typical objects. Schema-based systems automatically infer that a diner at a restaurant probably has a menu, ordered food, and will receive a bill, without these facts being stated. The ATOMIC knowledge graph encodes script-like if-then knowledge across nine social and causal relation types.

  **Causal Inference**: Directional reasoning about causes and effects in everyday scenarios, including forward prediction, backward counterfactual inference, and interventional reasoning. Pearl's do-calculus (2000) provides the formal framework; [[Causal Reasoning]] is distinct from pure correlation detection and is evaluated by benchmarks designed to distinguish causal from associative commonsense claims. [[Retrieval-Augmented Generation]] over causal knowledge graphs (ATOMIC's xReason, xEffect, xWant relations) improves causal commonsense performance in [[Question Answering]] systems relative to purely parametric LLM baselines.

  **Probabilistic Pragmatic Inference**: Drawing inferences from what a speaker chose to say based on Gricean cooperative conversational maxims — quantity (say enough but not too much), quality (be truthful), relation (be relevant), and manner (be clear). A sentence like "Some students passed the exam" pragmatically implicates that not all students passed, even though it is semantically consistent with all students passing. Pragmatic inference requires both semantic knowledge and commonsense knowledge about social communication context, and is evaluated by tasks involving scalar implicatures, presupposition accommodation, and indirect speech act interpretation.

  ## Future Directions (2026–2030)

  The central open problem — how to give AI systems genuinely robust common sense reasoning rather than pattern matching that mimics commonsense on benchmarks — is unlikely to be solved by scaling alone. Six research directions appear most promising:

  1. **Embodied commonsense pre-training**: Training on video of human physical activity combined with physics simulation will supply the causal ground truth absent from text, moving toward models that genuinely understand why objects behave as they do. NVIDIA's Cosmos-Reason1 (2025) and the broader VLA (vision-language-action) model research direction represent the leading edge. Integration of differentiable physics engines with language models — allowing the language model to query a physics simulator rather than rely on textual descriptions of physics — is likely to become standard practice for naive physics tasks. The [[Embodied AI]] platform ecosystem (AI2-THOR, Habitat 3.0, Isaac Sim) provides the simulation infrastructure for scaling embodied commonsense training.

  2. **Compositional neurosymbolic architectures**: Tighter integration of neural perception and representation with symbolic reasoning engines (SAT solvers, Prolog, probabilistic graphical models, answer-set programming) will enable commonsense inference chains that are transparent, auditable, and formally verified — critical for [[AI Safety]] applications. The REASON framework (2025) and the broader [[Neurosymbolic AI]] research programme represent the current frontier. [[Description Logic]] reasoners applied to commonsense ontologies will provide formal consistency guarantees, enabling detection of physically impossible or temporally inconsistent claims before they are presented to users.

  3. **Social commonsense and cultural variation**: Current benchmarks are predominantly English-language and culturally Western. Future work will address cross-cultural commonsense variation — different social norms, causal expectations, and naïve theories of the physical world across cultures — requiring multilingual, multicultural commonsense [[Knowledge Graph]]s and evaluation benchmarks. The ConceptNet multilingual extension (over 100 languages) is a starting point, but cultural commonsense beyond language is largely un-formalised; ethnographic and cross-cultural cognitive science data will need integration into next-generation knowledge resources.

  4. **Commonsense-grounded alignment**: [[Reinforcement Learning from Human Feedback]] and [[Constitutional AI]] will increasingly incorporate explicit commonsense knowledge graphs as structural priors, enabling alignment training to directly target specific commonsense sub-faculties (naive physics, [[Theory of Mind]], social norm compliance) that generate safety-relevant failure modes, rather than relying on implicit commonsense signal from human raters who may have blind spots in specific knowledge dimensions.

  5. **Dynamic, executable [[World Model]]s**: [[Large Language Model]] augmented with continuously updated, executable world models — queryable simulators of physical and social dynamics — will enable real-time commonsense validation of generated claims against physical and social constraints, reducing [[Hallucination]] rates in knowledge-intensive applications. The connection between world models and commonsense is central to Yann LeCun's energy-based world model architecture proposal, which argues that world models are the missing component for human-level AI.

  6. **Adversarial commonsense evaluation maturation**: As standard benchmarks approach saturation, evaluation will shift toward adversarially generated probes that systematically vary surface form while preserving commonsense structure, requiring genuine generalisation rather than surface-pattern interpolation. The Logical-CommonsenseQA (2026) benchmark — pairing atomic answers under AND/OR/NEITHER logical operators to test compositional integration of commonsense with logical structure — represents this direction. Automated benchmark generation pipelines using LLMs to generate novel commonsense scenarios with human validation will accelerate the adversarial evaluation cycle.

  ## Key Terminology

- **Naive Physics**: The implicit, pre-theoretical knowledge about the physical world that humans acquire through everyday embodied experience — solidity, gravity, rigidity, fluid dynamics — without formal instruction. Contrasts with Newtonian or quantum physics. Formalised in Hayes's 1978 naive physics manifesto as a target for AI knowledge engineering.
- **Theory of Mind**: The capacity to attribute mental states (beliefs, desires, intentions, knowledge, emotions) to other agents and to recognise that their mental states may differ from one's own and from reality. Essential for social cognition and pragmatic [[Natural Language Understanding]]. Evaluated by false-belief tasks and the Social IQa benchmark.
- **Frame Problem**: The challenge in formal AI of representing what remains unchanged when an action is performed, without enumerating every possible unchanged fact. First formalised by McCarthy and Hayes (1969). A core difficulty in knowledge-based commonsense systems and the motivation for non-monotonic reasoning frameworks.
- **[[Default Logic]]**: Reiter's (1980) formal framework for defeasible reasoning, using defaults of the form "if A and not known not-B, then conclude C." Provides the formal basis for reasoning from commonsense defaults that can be overridden by exceptional information.
- **[[Non-Monotonic Reasoning]]**: A class of formal reasoning frameworks in which conclusions may be retracted as new information is added, in contrast to classical monotonic logic where adding axioms can only increase the set of consequences. Circumscription (McCarthy, 1980) and default logic are the main frameworks.
- **Winograd Schema Challenge**: A test of commonsense pronoun resolution in which the correct antecedent of a pronoun requires commonsense knowledge about typical object behaviour or agent goals to determine, resisting purely syntactic resolution. [[WinoGrande]] scales this to 44,000 adversarially curated instances.
- **[[HellaSwag]]**: A benchmark for activity-completion prediction (Zellers et al., 2019) using adversarially generated implausible continuations, designed so that plausible-sounding distractors are ruled out only by commonsense physical reasoning. Frontier LLMs now exceed 95% accuracy; adversarial variants remain challenging.
- **ATOMIC**: The Atlas of Machine Commonsense for If-Then Reasoning (Sap et al., 2019); a large-scale commonsense knowledge graph of 880,000 if-then social causal tuples across nine relation types, from the Allen Institute for AI. Extended by ATOMIC-2020 (Hwang et al., 2021).
- **[[ConceptNet]]**: A large multilingual commonsense [[Knowledge Graph]] linking concepts via typed semantic relations (IsA, UsedFor, HasProperty, PartOf, Causes, etc.), originating at MIT Media Lab and maintained as an open resource (Speer et al., 2017). Over 1.6 million assertions in more than 100 languages.
- **[[Neurosymbolic AI]]**: An approach combining neural networks (for perception, representation, and approximate inference) with symbolic systems (for structured reasoning, constraint satisfaction, and [[Knowledge Representation]]) to overcome the limitations of each paradigm alone, particularly for commonsense and logical reasoning tasks.
- **[[Grounding]]**: The process of connecting symbolic or linguistic representations to physical world referents — objects, actions, spatial relations, causal events — through perception, simulation, or direct interaction. Considered essential for robust commonsense acquisition that generalises beyond training distribution.
- **[[World Model]]**: An internal representation of the environment's state, dynamics, and causal structure that an agent uses to plan, predict, and reason counterfactually. Proposed by Yann LeCun as the central architectural component needed for human-level commonsense in AI agents.
- **[[Chain-of-Thought Prompting]]**: A prompting technique in which [[Large Language Model]] are guided to generate explicit intermediate reasoning steps before producing a final answer, substantially improving performance on multi-step commonsense reasoning tasks (Wei et al., 2022).
- **[[Hallucination]]**: The generation by an AI system of factually incorrect, physically impossible, or socially incoherent statements produced with apparent confidence, often resulting from commonsense reasoning failures. Studies in 2026 report hallucination rates of 10–20% on commonsense-demanding tasks for leading LLMs.
- **PIQA (Physical Intuition QA)**: A commonsense benchmark (Bisk et al., 2020) focused on [[Naive Physics]], testing ability to select the physically correct procedure for achieving a goal, requiring understanding of material properties, forces, and object affordances.
- **[[Reinforcement Learning from Human Feedback]]**: Reinforcement Learning from Human Feedback; a training paradigm in which a language model is fine-tuned using rewards from human preference judgements. Implicitly grounds commonsense norms in the model through human evaluator common-sense expectations about helpful and harmless outputs.
- **[[CommonsenseQA]]**: A multiple-choice question-answering benchmark (Talmor et al., 2019) with 12,247 questions derived from ConceptNet that require multi-hop commonsense inference over conceptual relationships, testing whether models can combine multiple background knowledge facts to answer correctly.
- **[[WinoGrande]]**: A large-scale adversarial Winograd Schema Challenge with 44,000 pronoun disambiguation problems (Sakaguchi et al., 2021). The correct referent of a pronoun can only be determined using commonsense knowledge about agent goals, physical capabilities, or social roles, resisting purely syntactic or distributional resolution.
- **[[Semantic Network]]**: A graph-based knowledge representation formalism in which concepts are represented as nodes and semantic relationships (such as IsA, HasProperty, PartOf) as typed edges. ConceptNet is the most widely used commonsense semantic network; WordNet is the most widely used lexical semantic network.
- **Script (AI)**: A schematic knowledge structure (Schank and Abelson, 1977) encoding a prototypical sequence of events for a recurring situation type — such as the restaurant script, medical appointment script, or job interview script. Scripts enable commonsense inference about typical event progressions, default participants, and likely next actions in stereotyped scenarios.
- **[[Transfer Learning]]**: The paradigm of pre-training a neural model on large general-purpose data and then fine-tuning on a specific downstream task. Central to modern commonsense reasoning systems: large language model pre-training provides implicit commonsense, and task-specific fine-tuning on commonsense benchmarks or knowledge-graph data adapts it to particular inference dimensions.
- **[[Frame Semantics]]**: A linguistic and cognitive theory (Fillmore, 1976) that describes lexical meaning in terms of conceptual frames — organised structures of background knowledge that are evoked when language is used. In AI, frames provide a structured representation of commonsense background knowledge about typical situations, their participants, and their properties.

  ## Failure Modes and Open Problems
  Despite substantial benchmark progress, common sense reasoning in AI systems exhibits characteristic failure modes that expose the gap between statistical language competence and genuine world knowledge. Documenting these failure modes is essential for building systems robust enough for real-world deployment in safety-critical and regulated domains.

  **Adversarial rephrasing brittleness**: LLMs achieving near-human scores on standard commonsense benchmarks often fail dramatically when the same logical scenario is rephrased using different surface vocabulary, negation, or syntactic structure. This brittleness to adversarial rephrasing — documented extensively in the WinoGrande adversarial filtering methodology — is a diagnostic signature of statistical commonsense approximation rather than genuine physical understanding. A model that correctly identifies that a heavy suitcase needs two hands to lift may fail the logically equivalent reformulation "what property of the suitcase makes it difficult to carry with one hand?" if the reformulation departs from training-text patterns.

  **Compositional generalisation failure**: Current LLMs struggle to compose multiple commonsense facts into novel inference chains not represented in training data. The combinatorial explosion of possible commonsense compositions means training data cannot cover all relevant chains, requiring genuine compositional generalisation. ProntoQA, ProofWriter, and FOLIO benchmarks specifically test compositional deductive reasoning and reveal that LLMs frequently fail on chains of three or more steps even when they correctly handle each step individually.

  **Counterfactual reasoning failures**: Commonsense reasoning requires reasoning about hypothetical and counterfactual scenarios, not just predicting what typically happens. LLMs frequently default to factual world descriptions rather than correctly engaging with counterfactual premises, producing internally inconsistent responses that mix factual and hypothetical knowledge. Counterfactual commonsense benchmarks (CLiC, counterfactual NLI) document this systematically.

  **Inverse scaling**: Some commonsense sub-tasks show inverse scaling — larger LLMs perform worse than smaller ones on adversarially constructed benchmarks — because larger models become better at exploiting spurious statistical associations present in the benchmark that correlate with incorrect answers. Documented in BIG-Bench and cited as evidence that raw scale is insufficient for robust commonsense.

  **Hallucinated physical plausibility**: LLMs trained primarily on text develop fluent-sounding descriptions of physical processes that may be physically impossible, because the statistical regularities of physical descriptions in text are driven by topic associations rather than physical law. Systems that cannot ground language in physical simulation cannot reliably distinguish physically possible from plausible-sounding but impossible descriptions.

  **Cultural and demographic boundary failures**: Commonsense knowledge is culturally situated: social norms, causal expectations, typical object behaviour, and appropriate responses to situations vary systematically across cultures, languages, and demographic groups. LLMs trained predominantly on English web text encode dominant-culture commonsense as if it were universal, producing systematic failures on minority culture norms, non-Western social conventions, and contexts where commonsense rules differ from majority-culture expectations over-represented in training data. This is both an accuracy failure and an equity concern requiring explicit multicultural commonsense knowledge engineering and evaluation methodology to address systematically.

  **Temporal and persistent state tracking failures**: The frame problem — representing which facts persist unchanged through actions — remains unsolved at scale. LLMs frequently lose track of changes to world state across a multi-step narrative, asserting facts that were changed by an earlier described action as if they still held. This failure mode is particularly consequential for [[Planning]] systems and for clinical NLP where the temporal ordering of medical events determines their causal interpretation.

  ## Research & Literature

  1. McCarthy, J. (1958). Programs with Common Sense. Proceedings of the Teddington Conference on the Mechanisation of Thought Processes.
  2. McCarthy, J. and Hayes, P. J. (1969). Some Philosophical Problems from the Standpoint of Artificial Intelligence. Machine Intelligence 4. Edinburgh University Press.
  3. Minsky, M. (1974). A Framework for Representing Knowledge. MIT AI Lab Memo 306.
  4. Hayes, P. J. (1978). The Naive Physics Manifesto. In D. Michie (Ed.), Expert Systems in the Micro-Electronic Age. Edinburgh University Press.
  5. Reiter, R. (1980). A Logic for Default Reasoning. Artificial Intelligence 13(1–2):81–132.
  6. Schank, R. and Abelson, R. (1977). Scripts, Plans, Goals and Understanding. Lawrence Erlbaum.
  7. Lenat, D. (1984). CYC: Using Common Sense Knowledge to Overcome Brittleness and Knowledge Acquisition Bottlenecks. AI Magazine 6(4).
  8. Lenat, D. and Guha, R.V. (1990). Building Large Knowledge-Based Systems: Representation and Inference in the CYC Project. Addison-Wesley.
  9. Miller, G.A. (1995). WordNet: A Lexical Database for English. Communications of the ACM 38(11):39–41.
  10. Liu, H. and Singh, P. (2004). ConceptNet: A Practical Commonsense Reasoning Toolkit. BT Technology Journal 22(4):211–226.
  11. Speer, R. et al. (2017). ConceptNet 5.5: An Open Multilingual Graph of General Knowledge. AAAI 2017.
  12. Vaswani, A. et al. (2017). Attention is All You Need. NeurIPS 2017. https://arxiv.org/abs/1706.03762
  13. Devlin, J. et al. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. NAACL 2019. https://arxiv.org/abs/1810.04805
  14. Bosselut, A. et al. (2019). COMET: Commonsense Transformers for Automatic Knowledge Graph Construction. ACL 2019. https://arxiv.org/abs/1906.05317
  15. Sap, M. et al. (2019). ATOMIC: An Atlas of Machine Commonsense for If-Then Reasoning. AAAI 2019. https://arxiv.org/abs/1811.00146
  16. Talmor, A. et al. (2019). CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge. NAACL 2019. https://arxiv.org/abs/1811.00937
  17. Zellers, R. et al. (2019). HellaSwag: Can a Machine Really Finish Your Sentence? ACL 2019. https://arxiv.org/abs/1905.07830
  18. Bisk, Y. et al. (2020). PIQA: Reasoning about Physical Commonsense in Natural Language. AAAI 2020. https://arxiv.org/abs/1911.11641
  19. Brown, T. et al. (2020). Language Models are Few-Shot Learners (GPT-3). NeurIPS 2020. https://arxiv.org/abs/2005.14165
  20. Sakaguchi, K. et al. (2021). WinoGrande: An Adversarial Winograd Schema Challenge at Scale. Communications of the ACM 64(9):99–106. https://arxiv.org/abs/1907.10641
  21. Hwang, J. D. et al. (2021). COMET-ATOMIC20: On Symbolic and Neural Commonsense Knowledge Graphs. AAAI 2021. https://arxiv.org/abs/2010.05953
  22. Lourie, N. et al. (2021). UNICORN on RAINBOW: A Universal Commonsense Reasoning Model on a New Multitask Benchmark. AAAI 2021. https://arxiv.org/abs/2103.13009
  23. Bender, E. et al. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? FAccT 2021.
  24. Wei, J. et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. NeurIPS 2022. https://arxiv.org/abs/2201.11903
  25. Bai, Y. et al. (2022). Constitutional AI: Harmlessness from AI Feedback. Anthropic. https://arxiv.org/abs/2212.08073
  26. Khan, M. J. et al. (2025). A Survey of Neurosymbolic Visual Reasoning with Scene Graphs and Common Sense Knowledge. AI and Neuroscience 2025. https://journals.sagepub.com/doi/10.3233/NAI-240719
  27. NVIDIA (2025). Cosmos-Reason1: From Physical Common Sense to Embodied Reasoning. arXiv:2503.15558. https://arxiv.org/abs/2503.15558
  28. PMC / NIH (2025). Neurosymbolic AI as an Antithesis to Scaling Laws. https://pmc.ncbi.nlm.nih.gov/articles/PMC12084822/
  29. Talmor, A. et al. (2025). Towards a Litmus Test for Common Sense. arXiv:2501.09913.
  30. arXiv (2025). REASON: Accelerating Probabilistic Logical Reasoning for Scalable Neuro-Symbolic Intelligence. arXiv:2601.20784.
  31. Lakera (2026). LLM Hallucinations in 2026: How to Understand and Tackle AI's Most Persistent Quirk. https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models

### Provenance

