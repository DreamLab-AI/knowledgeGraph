- ### Definition
  - Cognitive psychology is the scientific discipline that investigates the internal [[Mental Processes]] underlying intelligent behaviour — encompassing [[Perception]], [[Attention Mechanism]], [[Working Memory]], long-term memory, [[Language Processing]], [[Problem Solving]], [[Reasoning]], and [[Decision Making]] — by treating the mind as an information-processing system analogous to a digital computer, and using controlled laboratory experiments, [[Reaction Time Methods]], computational models, and [[Neuroimaging]] to infer the representations, operations, and architectures that support human cognition. The discipline crystallised as a distinct field in the mid-twentieth century, catalysed by dissatisfaction with the theoretical poverty of behaviourism — which refused to posit internal mental states — and energised by the conceptual language provided by information theory, [[Cybernetics]], and the first digital computers. Ulric Neisser's 1967 monograph *Cognitive Psychology* is conventionally taken as the founding text, synthesising research on visual scanning, pattern recognition, selective [[Attention Mechanism]], and memory into a coherent information-processing framework. Neisser defined cognition as "all processes by which sensory input is transformed, reduced, elaborated, stored, recovered, and used," a definition that remains accurate today. The field draws methodological rigour from experimental psychology — reaction-time chronometry, signal-detection theory, dual-task interference paradigms — while its theoretical ambitions connect it to [[Cognitive Science]], [[Neuroscience]], [[Philosophy of Mind]], and [[Artificial Intelligence]]. George Miller's 1956 paper on the magical number seven established that human short-term memory capacity is severely limited to roughly seven plus or minus two chunks, grounding the field's empirical programme in quantitative measurement. Alan Baddeley and Graham Hitch's 1974 multicomponent model of [[Working Memory]] — comprising a phonological loop, visuo-spatial sketchpad, central executive, and later an episodic buffer — remains the dominant framework for understanding how humans temporarily hold and manipulate information. The dual-process framework, systematised by Daniel Kahneman as System 1 (fast, automatic, associative) and System 2 (slow, deliberate, effortful), has proved particularly influential in connecting cognitive psychology to [[Behavioural Economics]], [[Explainable AI]], and [[Reinforcement Learning]], providing a psychologically grounded account of when and why humans deviate from normative rationality. Cognitive psychology's experimental and computational findings directly inform the design of [[Artificial Intelligence]] systems, [[Human Computer Interaction]] frameworks, [[Intelligent Tutoring Systems]], clinical assessment tools for dementia, and the emerging field of [[Cognitive Architecture]]-based AI agents.

- ### Semantic Classification
  - owl-class:: psychology:CognitivePsychology
  - owl-role:: Discipline | ResearchDomain | CognitiveScience
  - owl-inferred:: psychology:ExperimentalPsychology, ai:InformationProcessingScience, psychology:CognitiveNeuroscience
  - belongs-to-domain:: [[Cognitive Science]], [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]], [[ArchitectureLayer]]

- ### Relationships
  - is-subclass-of:: [[Cognitive Science]], [[Psychology]], [[Behavioural Science]]
  - has-part:: [[Working Memory]], [[Attention Mechanism]], [[Long-Term Memory]], [[Perception]], [[Executive Function]], [[Language Processing]], [[Episodic Memory]], [[Semantic Memory]], [[Procedural Memory]]
  - implements:: [[Information Processing]], [[Experimental Methods]], [[Computational Modelling]]
  - uses:: [[Neuroimaging]], [[Psychophysics]], [[Reaction Time Methods]], [[Signal Detection Theory]], [[Eye Tracking]], [[Dual Task Paradigm]]
  - enables:: [[Human Computer Interaction]], [[Explainable AI]], [[Intelligent Tutoring Systems]], [[Behavioural Economics]], [[User Experience Design]], [[Cognitive Rehabilitation]], [[Clinical Assessment]]
  - supports:: [[Artificial Intelligence]], [[Natural Language Processing]], [[Reinforcement Learning]], [[Cognitive Architecture]], [[Machine Learning]], [[Affective Computing]]
  - requires:: [[Neuroscience]], [[Experimental Methods]], [[Computational Modelling]], [[Statistics]]
  - depends-on:: [[Neuroscience]], [[Philosophy of Mind]], [[Linguistics]], [[Computer Science]]
  - contrasts-with:: [[Behaviourism]], [[Psychoanalysis]], [[Connectionism]], [[Situated Cognition]]
  - related-to:: [[Philosophy of Mind]], [[Embodied Cognition]], [[Cognitive Architecture]], [[Knowledge Representation]], [[Decision Making]], [[Behavioural Economics]], [[Computational Linguistics]]
  - standardized-by:: [[American Psychological Association]], [[British Psychological Society]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:hasPart psychology:WorkingMemory))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:hasPart psychology:AttentionMechanism))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:hasPart psychology:LongTermMemory))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:hasPart psychology:Perception))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:hasPart psychology:ExecutiveFunction))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:hasPart psychology:LanguageProcessing))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:hasPart psychology:EpisodicMemory))

  ## Dependency Relationships
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:requires psychology:Neuroscience))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:requires psychology:ExperimentalMethods))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:requires psychology:ComputationalModelling))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:dependsOn psychology:PhilosophyOfMind))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:dependsOn psychology:Linguistics))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:dependsOn psychology:InformationTheory))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:dependsOn psychology:Statistics))

  ## Capability Relationships
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:enables psychology:HumanComputerInteraction))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:enables psychology:ExplainableAI))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:enables psychology:IntelligentTutoringSystems))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:enables psychology:BehaviouralEconomics))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:enables psychology:UserExperienceDesign))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:supports psychology:ArtificialIntelligence))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:supports psychology:NaturalLanguageProcessing))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:supports psychology:ReinforcementLearning))

  ## Implementation Relationships
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:implements psychology:InformationProcessing))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:implements psychology:ExperimentalMethods))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:uses psychology:Neuroimaging))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:uses psychology:ReactionTimeMethods))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:uses psychology:SignalDetectionTheory))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:uses psychology:EyeTracking))

  ## Reduction Relationships
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:reducesTo psychology:ExperimentalPsychology))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:reducesTo psychology:InformationProcessingModel))
      SubClassOf(psychology:CognitivePsychology
        ObjectSomeValuesFrom(psychology:reducesTo psychology:CognitiveNeuroscience))

  ## About

  **Cognitive Psychology** is the experimental science of the mind's internal operations — the hidden computational machinery that transforms sensation into action, encodes experience into memory, and marshals the resources of [[Attention Mechanism]] to serve ongoing goals. The discipline emerged in the late 1950s and early 1960s as a direct response to the theoretical impoverishment of behaviourism. Behaviourists — following John Watson and B.F. Skinner — had insisted that science must restrict itself to the observation and prediction of observable stimulus-response pairs, banishing mentalistic vocabulary such as "memory," "image," or "intention" from scientific discourse. This restriction proved untenable once information theory (Shannon, 1948), early computing (Turing, 1950), and the first cognitive models (Miller, 1956; Broadbent, 1958) demonstrated that it was both possible and productive to posit internal information-processing stages interposed between stimulus and response, and to make quantitative, testable predictions about them.

  The **information-processing metaphor** that became cognitive psychology's foundational commitment treated cognition as analogous to computation: stimuli serve as input, mental representations encode the input in various formats, transformation processes operate on representations, and responses constitute output. This metaphor was never claimed as a literal identity — the brain is not a von Neumann machine — but its heuristic value proved enormous, generating decades of productive research. The experimental method of **cognitive chronometry** — measuring reaction times to infer the number and duration of processing stages — was pioneered by Franciscus Donders in the nineteenth century but achieved full rigour in the hands of Sternberg (1966), Posner (1978), and their successors, linking millisecond differences in response times to theoretically grounded differences in processing architecture.

  Modern cognitive psychology has been transformed by three developments: the rise of cognitive neuroscience (giving direct neural correlates of cognitive constructs via [[Neuroimaging]] techniques such as fMRI, EEG, and MEG), the spread of computational modelling (allowing explicit formalisation of theories as running code in [[Cognitive Architecture]] frameworks such as ACT-R and SOAR), and the growing entanglement with [[Artificial Intelligence]] (both as a source of computational metaphors and as a consumer of cognitive findings). The 2025 O'Toole and Ludvig paper in the *British Journal of Psychology* documents this convergence from an historical standpoint, noting that AI systems are now routinely evaluated against cognitive benchmarks — working memory tasks, logical reasoning tests, social reasoning challenges — originally designed to probe human mental architecture. This bidirectional exchange has reinvigorated theoretical debates about whether [[Large Language Models]] process language in ways that are cognitively plausible, and whether their emergent reasoning abilities reflect genuine inference or statistical pattern completion.

  ## Components and Cognitive Architecture

  **Attention**
  Attention is the cognitive mechanism that selects among competing inputs and internal representations, allocating processing resources to task-relevant information. Early selection theories (Broadbent, 1958) located filtering before perceptual analysis; late selection theories (Deutsch and Deutsch, 1963) placed it after full semantic processing. The spotlight and zoom-lens metaphors capture the spatial properties of visual attention. Feature Integration Theory (Treisman and Gelade, 1980) distinguished preattentive pop-out (detecting a coloured target among distractors in parallel) from serial conjunction search (finding an object defined by a combination of features). Modern accounts emphasise the role of top-down goals and bottom-up salience in controlling attentional orienting. [[Attention Mechanism]] in deep learning (Vaswani et al., 2017) draws a loose but influential analogy to cognitive attention, enabling transformer models to selectively weight input tokens.

  **Memory Systems**
  Cognitive psychology distinguishes multiple dissociable memory systems. **Sensory memory** (iconic and echoic stores) retains precise but rapidly decaying copies of sensory input for fractions of a second. **[[Working Memory]]** — the Baddeley-Hitch (1974) multicomponent system comprising a phonological loop, visuo-spatial sketchpad, central executive, and episodic buffer — temporarily holds and manipulates information for ongoing cognitive tasks. Its capacity limitation (roughly four chunks; Cowan, 2001) is a fundamental architectural constraint with profound consequences for instruction design, interface layout, and the prompting strategies used with [[Large Language Models]]. **Long-term memory** divides into declarative memory (episodic — autobiographical events — and semantic — general world knowledge) and non-declarative memory (procedural skills, priming, conditioning). The distinction between episodic and semantic memory (Tulving, 1972) has been highly productive, mapping onto distinct neural substrates (hippocampus for episodic, neocortex for semantic) and informing [[Knowledge Representation]] architectures in AI.

  **Perception and Pattern Recognition**
  Cognitive theories of perception address how raw sensory signals are parsed into meaningful objects and events. Template matching, prototype abstraction, and feature analysis are the three classical computational strategies. Bayesian theories of perception (Knill and Pouget, 2004) formalise perception as probabilistic inference over generative models, a framework that connects directly to [[Neuroscience]]-grounded predictive coding accounts (Friston, 2005) and to modern generative models in [[Machine Learning]].

  **Language Processing**
  Psycholinguistics examines how sentences are parsed, words recognised, and discourse understood. Sentence processing is incremental and predictive — readers and listeners immediately construct syntactic and semantic interpretations as words arrive, using contextual expectations to constrain parsing. The garden-path effect (Bever, 1970) — temporary misanalysis of structurally ambiguous sentences — demonstrates both the predictive nature of parsing and its fallibility. These findings ground theories of [[Natural Language Processing]] and motivate prediction-based architectures in transformer language models.

  **Reasoning and Decision Making**
  Cognitive psychology distinguishes deductive (logical), inductive (pattern-generalising), and abductive (inference-to-best-explanation) reasoning. The Wason Selection Task (1968) revealed systematic errors in conditional reasoning, showing that humans apply pragmatic rather than logical strategies. The heuristics-and-biases programme of Tversky and Kahneman (1974) documented the systematic departures from probability theory that characterise intuitive judgement — availability, representativeness, anchoring — providing the empirical base for [[Behavioural Economics]]. Dual-process theory (Kahneman, 2011) synthesises these findings into a framework contrasting fast, automatic System 1 processing with slow, deliberate System 2 reasoning, a distinction exploited by [[Explainable AI]] researchers designing interfaces that support reflective human oversight of AI decisions.

  **Executive Function**
  Executive functions are the higher-order control processes that regulate and coordinate other cognitive operations: working memory updating, cognitive flexibility (task-switching), and inhibition of prepotent responses. The prefrontal cortex is the primary neural substrate; developmental gains in executive function across childhood parallel improvements in problem-solving and academic learning. [[Cognitive Architecture]] systems such as ACT-R model executive function through a centralised production system that selects among competing procedures based on utility and activation.

  ## Use Cases and Major Applications

  **Human-Computer Interaction Design**
  Cognitive psychology provides the scientific foundation for HCI design. Fitts' Law (1954) predicts pointing time as a function of target distance and width, informing button sizing across all digital interfaces. Hick's Law (1952) relates choice reaction time to the logarithm of the number of alternatives, grounding menu design and information architecture decisions. Working memory capacity limits inform the four-item limit in navigation breadcrumbs and the chunking of phone numbers. Cognitive load theory (Sweller, 1988) distinguishes intrinsic, extraneous, and germane load, providing a principled basis for instructional material design and tutorial [[Human Computer Interaction]] in intelligent systems. As AI-assisted interfaces proliferate in 2025-2026, cognitive psychology research on automation bias — the tendency to over-trust automated recommendations — is informing design guidelines for [[Explainable AI]] systems deployed in clinical, legal, and financial contexts.

  **Intelligent Tutoring Systems and Education Technology**
  Findings from cognitive psychology directly underpin effective instructional design. Spacing effects (Ebbinghaus, 1885; Cepeda et al., 2006) show that distributing practice across time dramatically improves long-term retention compared to massed study. Interleaving different problem types during practice (Rohrer and Taylor, 2007) improves transfer despite initial slower learning. The testing effect (Roediger and Karpicke, 2006) demonstrates that retrieval practice substantially outperforms re-reading for long-term retention. These findings are encoded in spaced repetition algorithms (Anki, SuperMemo) and inform the personalised pacing engines of modern adaptive learning platforms, which are increasingly integrated with [[Reinforcement Learning]] optimisers.

  **Clinical Neuropsychology and Assessment**
  Cognitive psychology's task taxonomy — standardised tests of attention, working memory, processing speed, language, and executive function — provides validated tools for clinical assessment of dementia, traumatic brain injury, ADHD, and stroke. The Cambridge Neuropsychological Test Automated Battery (CANTAB) is used globally for clinical trials and diagnosis. Cognitive rehabilitation programmes drawing on errorless learning principles (from the cognitive neuropsychology literature) help patients with acquired memory disorders relearn functional skills. Brain-computer interfaces for motor-disabled patients depend on understanding cognitive load and attention allocation.

  **AI Value Alignment and Safety**
  Cognitive psychology's account of human reasoning biases and dual-process theory is increasingly central to AI alignment research. Understanding when humans deploy heuristics rather than deliberate reasoning informs the design of AI oversight mechanisms. Metacognition — the ability to monitor and regulate one's own cognitive processes — is a target cognitive property for [[Explainable AI]] systems intended to support reflective human oversight. Research in 2025 at institutions including Beijing Normal University explicitly links psychological theories of value formation to AI alignment frameworks, treating cognitive psychology as a foundational science for ensuring AI behaviour coheres with human values.

  **Natural Language Processing Evaluation**
  Cognitive psychology supplies benchmark tasks for evaluating [[Natural Language Processing]] and [[Large Language Models]]. The Winograd Schema Challenge tests pronoun disambiguation requiring common-sense world knowledge. Garden-path sentences test incremental syntactic prediction. Psycholinguistic norms (word frequency, concreteness, imageability, age of acquisition) predict human reading times and serve as baselines for assessing whether language model processing correlates with human processing. The BIG-Bench benchmark (Srivastava et al., 2022) drew explicitly on cognitive psychology to design tasks probing linguistic and reasoning abilities analogous to those used in human assessment.

  **Affective and Social Computing**
  Cognitive models of emotion (appraisal theories: Scherer, Frijda, Lazarus) conceptualise emotional responses as arising from cognitive evaluations of events with respect to goals and agency. These models inform emotion recognition systems and affective feedback loops in human-robot interaction. Social cognition research — Theory of Mind, perspective-taking, pragmatic inference — is a target capability for dialogue systems and social robots.

  ## Academic Context

  Cognitive psychology was launched in the 1950s by a convergence of intellectual forces: Shannon's information theory (1948), Turing's computational theory of mind (1950), Miller's magical number seven (1956), Broadbent's filter theory of attention (1958), and Chomsky's review of Skinner's *Verbal Behavior* (1959) — which dismantled the behaviourist account of language acquisition and cleared the way for mentalist linguistics. The **cognitive revolution** is often dated to the September 1956 Symposium on Information Theory at MIT, where Miller, Chomsky, and Newell and Simon all presented work treating the mind as a computational system.

  The 1960s and 1970s saw rapid institutionalisation: journals (*Cognitive Psychology*, founded 1970; *Cognition*, founded 1972), graduate programmes, and the establishment of major research programmes in memory (Craik and Lockhart's levels-of-processing framework, 1972), language (Levelt's SPEAKING model, 1989), attention (Treisman's feature integration theory, 1980), and problem-solving (Newell and Simon's General Problem Solver, 1972). Developmental cognitive psychology (Piaget's constructivism; Vygotsky's zone of proximal development) added ontogenetic questions about how cognitive structures emerge.

  Connectionism — the parallel distributed processing (PDP) movement of Rumelhart, McClelland and colleagues (1986) — posed a fundamental challenge to classical symbolic cognitive psychology by demonstrating that network models could acquire grammar-like regularities through exposure to language without explicit rule encoding, reviving the nature-nurture debate about language acquisition. The PDP-versus-symbolic debate has never been fully resolved and resurfaces in contemporary discussions of whether [[Large Language Models]] constitute cognitive science theories.

  ## Current Landscape (2026)

  The dominant live debate in cognitive psychology in 2025-2026 concerns the extent to which large language models serve as cognitive science theories. A 2025 arXiv preprint ("The potential — and the pitfalls — of using pre-trained language models as cognitive science theories") outlines both the promise (LLMs show human-like priming, frequency effects, and some reasoning biases) and the pitfalls (training data contamination, lack of embodiment, no online learning). O'Toole and Ludvig's 2026 *British Journal of Psychology* survey traces the historical arc from AI to psychology and back, noting that the field now routinely subjects LLMs to memory, attention, planning, and social reasoning assessments originally developed for human participants.

  A second major trend is the study of **cognitive offloading** — the psychological consequences of habitual AI-assisted cognition. Research published in 2025 (NCBI PMC) examines memory, attention, metacognition, and cognitive autonomy under conditions of frequent AI use, raising concerns about skill atrophy and over-reliance paralleling earlier work on GPS use and spatial navigation. This work is directly relevant to AI product design and regulation.

  **Neuroimaging-based cognitive science** continues to advance through large-scale consortium datasets (UK Biobank — N=3,950 resting-state connectivity study published 2025; Human Connectome Project; Adolescent Brain Cognitive Development Study), enabling population-level mapping of cognitive individual differences onto neural architecture. The 2025 UK Biobank study (medrxiv) identified multimodal MRI markers of cognition that mediate associations between cognition and mental health outcomes, illustrating the integration of cognitive psychology, [[Neuroscience]], and clinical science.

  **Predictive processing and active inference** (Friston's free energy principle) represent the most influential current theoretical framework attempting a unified account of perception, attention, memory, learning, and action. While contested (limitations are debated, e.g., the frame problem critique published in *Philosophy and the Mind Sciences* 2024), the framework's mathematical precision and cross-level ambition have attracted wide interdisciplinary attention.

  ## UK Context

  The United Kingdom has a distinguished tradition in cognitive psychology that shaped the field's formation. Frederic Bartlett's *Remembering* (Cambridge, 1932) introduced the constructivist memory tradition and the concept of schemas, establishing that memory is reconstructive rather than reproductive. Donald Broadbent at the Medical Research Council Applied Psychology Unit in Cambridge developed the filter theory of attention (1958) and the concept of the limited-capacity channel — foundational constructs of the information-processing approach.

  Alan Baddeley, working successively at the MRC Applied Psychology Unit (Cambridge) and the University of York, produced the multicomponent [[Working Memory]] model (1974, revised 2000) that remains the field's dominant framework for short-term information holding and manipulation. Baddeley and Hitch's original paper is among the most cited in psychology globally.

  **University College London (UCL)** holds the top position in REF 2021 for research power in Psychology, Psychiatry, and Neuroscience, with over two-thirds of submitted research rated 4* (world-leading). The UCL Institute of Cognitive Neuroscience and the Gatsby Computational Neuroscience Unit are leading centres for computational approaches to cognition. UCL's MSc Cognitive and Decision Sciences programme reflects the integration of cognitive psychology, decision theory, and computational modelling.

  **University of Edinburgh** offers a BSc Cognitive Science and houses the Institute for Language, Cognition and Computation (ILCC), home to internationally recognised research in psycholinguistics and computational models of language acquisition and processing. The Edinburgh Parallel Computing Centre has supported large-scale cognitive simulation work.

  **University of Cambridge** (Cognition and Brain Sciences Unit) continues the MRC APU tradition, housing research groups in language, memory, executive function, and developmental cognitive neuroscience. **University of Manchester** and **University of Sheffield** both offer postgraduate programmes integrating cognitive psychology with AI; Sheffield's MA in Cognitive Science and Philosophy of AI (2026 intake) explicitly addresses the intersection of cognitive psychology, philosophy, and AI.

  In the northern industrial cities, applied cognitive psychology informs human factors engineering in aerospace (BAE Systems; Rolls-Royce), rail operations (Network Rail safety teams in Derby and York), and healthcare technology (NHS Digital, Leeds Teaching Hospitals). The UK's National Institute for Health and Care Research (NIHR) funds cognitive rehabilitation research with direct clinical translation.

  ## Future Directions (2026-2030)

  The interface between cognitive psychology and [[Artificial Intelligence]] will deepen substantially through 2030. Cognitive psychology will increasingly serve as an evaluation science for AI — providing validated task batteries, human behavioural norms, and theoretical benchmarks against which AI performance is assessed. Conversely, AI models (particularly large language and multimodal models) will be progressively deployed as tools for cognitive science research: generating stimuli at scale, running participant simulations, and serving as computational instantiations of cognitive theories for formal comparison.

  **Personalised cognitive assessment** using passively collected behavioural data (typing dynamics, gaze patterns, mobile interaction logs) will shift clinical cognitive assessment from snapshot laboratory tests to continuous longitudinal monitoring, enabling early detection of cognitive decline at population scale. This connects to [[Machine Learning]] pipelines for digital biomarker extraction.

  The **cognitive consequences of AI delegation** will become a major applied research area, as healthcare, legal, and creative professionals increasingly offload cognitive work to AI systems. Understanding when offloading aids versus impairs long-term skill maintenance, and how to design AI assistance that preserves human cognitive agency, will draw directly on dual-process theory, metacognition research, and the cognitive load literature.

  **Neuroethics and cognitive enhancement** — including pharmacological, non-invasive brain stimulation (tDCS, TMS), and BCI-based cognitive augmentation — will require cognitive psychology to provide the empirical grounding for regulatory frameworks governing cognitive enhancement technologies.

  The unification of cognitive psychology with the predictive processing / active inference programme, and with the embodied cognition tradition, represents the field's most ambitious theoretical challenge. Integrating subjective experience, agency, and social cognition into a single computational framework remains work-in-progress for 2030.

  ## Research and Literature

  1. Neisser, U. (1967). *Cognitive Psychology*. Appleton-Century-Crofts. [Founding text of the field]
  2. Miller, G.A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. *Psychological Review*, 63(2), 81–97.
  3. Broadbent, D.E. (1958). *Perception and Communication*. Pergamon Press.
  4. Baddeley, A.D., & Hitch, G.J. (1974). Working memory. In G.H. Bower (Ed.), *The Psychology of Learning and Motivation*, 8, 47–89. Academic Press.
  5. Baddeley, A. (2000). The episodic buffer: A new component of working memory? *Trends in Cognitive Sciences*, 4(11), 417–423.
  6. Tulving, E. (1972). Episodic and semantic memory. In E. Tulving & W. Donaldson (Eds.), *Organisation of Memory*, 381–403. Academic Press.
  7. Treisman, A.M., & Gelade, G. (1980). A feature-integration theory of attention. *Cognitive Psychology*, 12(1), 97–136.
  8. Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
  9. Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. *Science*, 185(4157), 1124–1131.
  10. Wason, P.C. (1968). Reasoning about a rule. *Quarterly Journal of Experimental Psychology*, 20(3), 273–281.
  11. Bartlett, F.C. (1932). *Remembering: A Study in Experimental and Social Psychology*. Cambridge University Press.
  12. Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285.
  13. Craik, F.I.M., & Lockhart, R.S. (1972). Levels of processing: A framework for memory research. *Journal of Verbal Learning and Verbal Behaviour*, 11(6), 671–684.
  14. Rumelhart, D.E., & McClelland, J.L. (1986). *Parallel Distributed Processing: Explorations in the Microstructure of Cognition* (2 vols). MIT Press.
  15. Posner, M.I. (1978). *Chronometric Explorations of Mind*. Erlbaum.
  16. Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. *Behavioural and Brain Sciences*, 24(1), 87–114.
  17. Roediger, H.L., & Karpicke, J.D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science*, 17(3), 249–255.
  18. Cepeda, N.J., Pashler, H., Vul, E., Wixted, J.T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin*, 132(3), 354–380.
  19. Friston, K. (2005). A theory of cortical responses. *Philosophical Transactions of the Royal Society B*, 360(1456), 815–836.
  20. Knill, D.C., & Pouget, A. (2004). The Bayesian brain: The role of uncertainty in neural coding and computation. *Trends in Neurosciences*, 27(12), 712–719.
  21. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
  22. Srivastava, A., et al. (2022). Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models. *arXiv:2206.04615*.
  23. O'Toole, S., & Ludvig, E.A. (2026). The use of AI in psychology: A historical perspective. *British Journal of Psychology*. DOI: 10.1111/bjop.70061.
  24. Kotler, S., Parvizi-Wayne, D., Mannino, J., & Friston, K.J. (2025). Flow and intuition: A systems neuroscience comparison. *Neuroscience of Consciousness*.
  25. Linson, A., Clark, A., Ramamoorthy, S., & Friston, K. (2018). The active inference approach to ecological perception. *Frontiers in Robotics and AI*, 5.
  26. Frontiers in Psychology (2025). The dual process model: The effect of cognitive load on the ascription of intentionality. DOI: 10.3389/fpsyg.2025.1451590.
  27. UK Biobank MRI Cognition Study (2025). Multimodal MRI marker of cognition explains the association between cognition and mental health in UK Biobank. *medRxiv* 2025.03.18.25324202.

  ## Key Terminology

  - **Schema**: An organised knowledge structure representing a class of objects, events, or situations, which guides encoding, inference, and retrieval of new information (Bartlett, 1932).
  - **Chunking**: The process of grouping individual items into meaningful units, allowing more items to be held in [[Working Memory]] simultaneously (Miller, 1956).
  - **Priming**: The facilitation of processing a target stimulus as a result of prior exposure to a related stimulus, revealing the structure of long-term memory associations.
  - **Metacognition**: The capacity to monitor and regulate one's own cognitive processes — knowing what you know, and knowing how to learn effectively.
  - **Cognitive Load**: The amount of mental effort imposed on [[Working Memory]] by a task; divided into intrinsic (task complexity), extraneous (poor instruction design), and germane (schema formation) components (Sweller, 1988).
  - **Dual-Process Theory**: The framework distinguishing fast, automatic, associative (System 1) from slow, deliberate, rule-governed (System 2) cognitive processing (Kahneman, 2011).
  - **Transfer-Appropriate Processing**: The principle that memory performance depends on the match between processing at encoding and retrieval (Tulving & Thomson, 1973).

- ### Provenance
  - sources:: Neisser (1967) Cognitive Psychology; Miller (1956) Psychological Review; Baddeley & Hitch (1974) Working Memory; Kahneman (2011) Thinking Fast and Slow; Bartlett (1932) Remembering; O'Toole & Ludvig (2026) British Journal of Psychology https://bpspsychub.onlinelibrary.wiley.com/doi/10.1111/bjop.70061; UCL Faculty of Brain Sciences https://www.ucl.ac.uk/icn/research/research-groups; UK Biobank MRI study https://www.medrxiv.org/content/10.1101/2025.03.18.25324202; Frontiers Dual Process 2025 https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1451590/full; Sheffield CogSci MA 2026 https://sheffield.ac.uk/postgraduate/taught/courses/2026/cognitive-science-and-philosophy-ai-ma; Cognitive offloading PMC https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12714973/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm