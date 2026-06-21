- ### Definition
  - Adaptive behaviour describes the dynamic capacity of an [[Agent]] or computational system to alter its responses, strategies, or internal parameters in reaction to environmental feedback, new information, or performance outcomes in order to maintain goal-directed functioning under changing conditions. Rooted simultaneously in [[Cybernetics]] (Wiener, 1948), ethology, and [[Control Theory]], the concept is operationalised in computational systems through [[Reinforcement Learning]] and [[Policy Optimisation]] mechanisms that update decision policies based on [[Reward Signal]]s flowing from the environment. In the formal [[Markov Decision Process]] (MDP) framework, an agent at state s∈S selects action a∈[[Action Space]] A, transitions to state s'∼T(s'|s,a), and receives scalar reward r=R(s,a,s'), iteratively adjusting its policy π(a|s) to maximise discounted cumulative return G_t = Σ_{k=0}^{∞} γ^k r_{t+k}. Modern implementations exploit [[Deep Reinforcement Learning]] architectures — [[Neural Network]]s that serve as universal function approximators for [[Value Function]]s and policies — enabling adaptation to high-dimensional sensory inputs including raw pixels, joint proprioception, and natural language instructions. Beyond the individual agent, adaptive behaviour emerges collectively in [[Multi-Agent Systems]], [[Swarm Intelligence]], and [[Self-Organising Systems]] where local interaction rules produce macroscopic goal-seeking patterns without centralised control. The concept extends to [[Embodied AI]] architectures operating in physical or simulated environments, where [[Sensor Fusion]] of cameras, IMUs, and tactile arrays feeds closed-loop adaptive policies. As of 2025–2026, the frontier of adaptive behaviour research addresses safe adaptation under [[Distribution Shift]], [[Test-Time Adaptation]] with foundation model priors, hierarchical skill composition through [[Hierarchical Reinforcement Learning]], and causal world modelling for robust out-of-distribution generalisation — challenges with direct implications for [[Agentic AI]], [[Autonomous Vehicle]]s, and [[Robotics]] at industrial scale.

- ### Semantic Classification
  - owl-class:: ai:AdaptiveBehaviour
  - owl-role:: Concept | ExecutableProtocol
  - owl-inferred:: ai:ReinforcementLearning, ai:CyberneticSystem, ai:AutonomousAgent, ai:SelfOrganisingSystem
  - belongs-to-domain:: [[AI-GroundedDomain]], [[MachineLearningDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent]], [[Reinforcement Learning]], [[Self-Organising Systems]], [[Cybernetics]]
  - has-part:: [[Feedback Loop]], [[Reward Signal]], [[Action Space]], [[Value Function]], [[Policy Optimisation]], [[Exploration-Exploitation Tradeoff]], [[Experience Replay]]
  - requires:: [[Markov Decision Process]], [[Simulation Environment]], [[Feedback Loop]], [[Exploration-Exploitation Tradeoff]]
  - enables:: [[Embodied AI]], [[Adaptive Control]], [[Autonomous Navigation]], [[Agentic AI]], [[Robotic Manipulation]], [[Game AI]], [[Swarm Intelligence]]
  - implements:: [[Reinforcement Learning]], [[Policy Gradient Methods]], [[Temporal Difference Learning]], [[Q-Learning]], [[Hierarchical Reinforcement Learning]], [[Model-Based Reinforcement Learning]]
  - depends-on:: [[Control Theory]], [[Deep Learning]], [[Neural Network]], [[Continual Learning]], [[Cognitive Science]]
  - uses:: [[Deep Reinforcement Learning]], [[World Model]], [[Large Language Model]], [[Foundation Models]], [[Sensor Fusion]], [[Imitation Learning]]
  - supports:: [[Autonomous Vehicle]], [[Robotics]], [[Digital Twin]], [[Natural Language Processing]], [[Reinforcement Learning from Human Feedback]]
  - contrasts-with:: [[Symbolic AI]], [[Transfer Learning]]
  - related-to:: [[Multi-Agent Systems]], [[Agent-Based Models]], [[Adaptive Learning]], [[Meta-Learning]], [[Continual Learning]], [[Sim-to-Real Transfer]], [[Cognitive Science]], [[Causal Inference]], [[Safe AI]], [[Distribution Shift]]
  - standardized-by:: [[IEEE RAS]], [[OpenAI Gym]], [[MuJoCo]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:hasPart ai:FeedbackLoop))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:hasPart ai:RewardSignal))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:hasPart ai:ActionSpace))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:hasPart ai:ValueFunction))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:hasPart ai:PolicyOptimisation))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:hasPart ai:ExplorationExploitationTradeoff))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:hasPart ai:ExperienceReplay))

  ## Dependency Relationships
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:requires ai:MarkovDecisionProcess))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:requires ai:SimulationEnvironment))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:requires ai:FeedbackLoop))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:requires ai:ExplorationExploitationTradeoff))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:dependsOn ai:ControlTheory))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:dependsOn ai:ContinualLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:dependsOn ai:CognitiveScience))

  ## Capability Relationships
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:enables ai:EmbodiedAI))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:enables ai:AdaptiveControl))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:enables ai:AutonomousNavigation))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:enables ai:AgenticAI))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:enables ai:RoboticManipulation))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:supports ai:AutonomousVehicle))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:supports ai:SwarmIntelligence))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:supports ai:GameAI))

  ## Implementation Relationships
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:implements ai:ReinforcementLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:implements ai:PolicyGradientMethods))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:implements ai:TemporalDifferenceLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:implements ai:QLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:implements ai:HierarchicalReinforcementLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:uses ai:DeepReinforcementLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:uses ai:WorldModel))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:uses ai:FoundationModels))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:uses ai:ImitationLearning))

  ## Reduction Relationships
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:reducesTo ai:FeedbackControl))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:reducesTo ai:PolicyUpdate))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:reducesTo ai:SequentialDecisionMaking))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:relatedTo ai:MultiAgentSystems))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:relatedTo ai:SwarmIntelligence))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:relatedTo ai:ContinualLearning))
      SubClassOf(ai:AdaptiveBehaviour
        ObjectSomeValuesFrom(ai:relatedTo ai:MetaLearning))

  ## About
  - **Adaptive behaviour** is the foundational concept underlying all learning systems that must operate and improve under conditions of uncertainty and environmental change. Its defining characteristic is the closed [[Feedback Loop]]: an agent observes the consequences of its actions, receives an evaluative signal (a [[Reward Signal]] in [[Reinforcement Learning]], an error signal in [[Control Theory]], a fitness score in evolutionary systems), and updates its strategy accordingly. This distinguishes adaptive behaviour from both open-loop control (which ignores consequences) and fixed-policy systems (which cannot change their behaviour at all). The study of adaptive behaviour draws on a remarkably broad intellectual heritage: Wiener's [[Cybernetics]] (1948) formalised feedback-governed self-regulation; ethology contributed comparative accounts of goal-directed animal behaviour; Sutton and Barto's formulation of [[Temporal Difference Learning]] (1988) provided the computational core that now underpins modern [[Deep Reinforcement Learning]]; and the situated cognition movement in [[Cognitive Science]] demonstrated that adaptive intelligence cannot be cleanly separated from the body and environment in which an agent is embedded.

  - Technically, adaptive behaviour in AI systems is realised through the [[Markov Decision Process]] formalism, which provides a mathematically precise account of sequential decision-making under uncertainty. A policy π: S → A maps states to actions; the objective is to find the optimal policy π* that maximises expected cumulative reward E[Σ γ^t r_t]. Value-based methods (DQN, Rainbow) estimate a [[Value Function]] Q(s,a) and derive policy greedily; [[Policy Gradient Methods]] (PPO, SAC, A3C) directly optimise the policy parameters via gradient ascent on expected return; actor-critic methods hybridise both. [[Hierarchical Reinforcement Learning]] decomposes complex long-horizon tasks into a hierarchy of sub-policies, enabling adaptive reuse of learnt primitive behaviours. [[Model-Based Reinforcement Learning]] (Dreamer, MuZero) additionally trains a [[World Model]] to predict environment dynamics, allowing the agent to plan through imagined trajectories rather than requiring direct environment interaction — dramatically improving sample efficiency for real-world deployment.

  - The adaptive behaviour ecosystem encompasses diverse application domains: [[Autonomous Vehicle]]s that re-plan routes in response to real-time traffic and unexpected obstacles; [[Game AI]] agents that model opponent strategies and discover novel tactics (AlphaZero, OpenAI Five, AlphaStar); industrial [[Robotics]] systems that recalibrate grasp policies when object properties change; and conversational [[Agentic AI]] systems that adjust communication strategy based on user feedback patterns. In multi-agent settings, adaptive behaviour at the collective level emerges from local interaction rules in [[Multi-Agent Systems]], [[Swarm Intelligence]] configurations, and [[Self-Organising Systems]]. Frameworks such as OpenAI Gymnasium, MuJoCo, and NVIDIA Isaac Sim provide standardised training environments and benchmarks for developing and evaluating adaptive agents; [[Sim-to-Real Transfer]] techniques (domain randomisation, system identification, adaptive fine-tuning with real interaction data) bridge the gap between simulated training and physical deployment.

  ## Mathematical Framework and Algorithmic Detail
  - The mathematical backbone of computational adaptive behaviour is the [[Markov Decision Process]] (MDP), a tuple (S, A, T, R, γ) where S is the state space, A is the [[Action Space]], T: S × A × S → [0,1] is the state transition kernel, R: S × A → ℝ is the reward function, and γ ∈ [0,1) is the discount factor. The Bellman optimality equation characterises the unique optimal Q-function: Q*(s,a) = R(s,a) + γ Σ_{s'} T(s'|s,a) max_{a'} Q*(s',a'). Classical tabular methods solve this exactly for small finite MDPs; [[Deep Reinforcement Learning]] uses [[Neural Network]] function approximators to scale to continuous, high-dimensional state spaces where tabular approaches are intractable.

  - **Value-based methods**: Deep Q-Networks (DQN, Mnih et al. 2015) parameterise Q(s,a;θ) with a convolutional network and train via TD targets from an [[Experience Replay]] buffer: L(θ) = E[(r + γ max_{a'} Q(s',a';θ⁻) - Q(s,a;θ))²], using a separate target network θ⁻ for stability. DQN achieved human-level performance on 49/57 Atari games. Rainbow (Hessel et al., 2018) combined six improvements — double DQN, prioritised replay, dueling architecture, multi-step returns, distributional RL, and noisy nets — achieving a median score of 231% of human performance. Distributional RL (C51, IQN, QRDQN) models the full return distribution rather than its expectation, capturing risk-sensitive adaptive policies with significantly improved sample efficiency.

  - **Policy gradient methods**: The policy gradient theorem establishes ∇_θ J(π_θ) = E[∇_θ log π_θ(a|s) · Q^π(s,a)], providing a gradient estimator for direct policy optimisation. REINFORCE (Williams, 1992) is the original Monte Carlo estimator; Proximal Policy Optimisation (PPO, Schulman et al. 2017) introduces a clipped surrogate objective L^{CLIP}(θ) = E[min(r_t(θ) Â_t, clip(r_t(θ), 1-ε, 1+ε) Â_t)] that prevents destructive large policy updates and has become the default algorithm for [[Reinforcement Learning from Human Feedback]] in [[Large Language Model]] alignment. Soft Actor-Critic (SAC, Haarnoja et al. 2018) augments the objective with an entropy bonus J(π) = Σ_t E[r_t + α H(π(·|s_t))], producing maximum-entropy policies that are more robust to [[Distribution Shift]] and better suited to continuous-action [[Robotic Manipulation]] tasks.

  - **[[Hierarchical Reinforcement Learning]]**: Options framework (Sutton et al., 1999) formalises temporal abstraction through options (ι, β, π) — initiation sets, termination conditions, and intra-option policies — enabling adaptive reuse of learnt sub-behaviours. Feudal networks (Vezhnevets et al., 2017) implement a manager-worker hierarchy where a high-level manager sets sub-goals in latent space and low-level workers execute primitive actions to achieve them. Data-Efficient Hierarchical RL (HIRO, Nachum et al. 2018) demonstrated that off-policy learning of both levels simultaneously enables adaptive navigation in mazes with sparse rewards that defeat flat RL approaches. As of 2025, hierarchical approaches are essential for long-horizon household manipulation tasks such as "clean the kitchen table" that require planning over minutes to hours.

  - **[[Meta-Learning]] and rapid adaptation**: Model-Agnostic Meta-Learning (MAML, Finn et al. 2017) learns an initialisation θ such that a small number of gradient steps on a new task produce a well-adapted policy; RL² (Duan et al., 2016) and SNAIL frame the adaptation problem as learning a recurrent policy that implicitly learns to adapt from in-context experience. In-context RL via [[Foundation Models]] — feeding past experience and task description as context to a [[Large Language Model]] or [[Transformer Architecture]] backbone — achieves few-shot behavioural adaptation without gradient updates, as demonstrated by Decision Transformer (Chen et al., 2021), Gato (Reed et al., 2022), and the RT-series (Brohan et al., 2023). This represents a fundamental shift: the adaptation loop moves from gradient descent on parameters to in-context inference over experience histories.

  ## Empirical Benchmarks and Performance
  - **Game benchmarks**: DQN (2015) reached human-level performance on Atari 2600; AlphaZero (2017) defeated Stockfish (2800+ Elo chess engine) in 100/100 games after 4 hours of self-play training from random initialisation; AlphaStar (2019) reached Grandmaster rank — above 99.8% of human players — in StarCraft II using a combination of [[Policy Gradient Methods]] and supervised learning from human replays; OpenAI Five (2019) defeated OG (back-to-back world champions) in Dota 2 after 45,000 years of self-play experience accumulated via distributed simulation
  - **Robotics benchmarks**: OpenAI Dactyl (2019) solved Rubik's Cube one-handed using domain randomisation with 13,000 distinct simulation parameter configurations; Google RT-2 (2023) achieved 62% success on novel object-manipulation tasks not seen during training, versus 32% for RT-1 without VLA pre-training; ALOHA (Chi et al., 2024) performed bimanual cloth folding and egg beating at 80%+ success rates from 50 demonstrations; Gemini Robotics 1.5 (2025) demonstrated sub-millimetre precision origami folding from natural language instruction
  - **Alignment benchmarks**: RLHF with PPO (Ziegler et al. 2019, Stiennon et al. 2020) improved summarisation quality by 84% in human preference evaluations; InstructGPT (Ouyang et al., 2022) achieved 81% human preference over GPT-3 despite using only 1.3B parameters vs. 175B; DeepSeek-R1 (2025) using GRPO achieved competitive mathematical reasoning with o1 using 6× less compute per token; Claude 3 family (Anthropic, 2024) demonstrated that constitutional AI + RLHF adaptive behaviour achieves significant improvements in harmlessness and helpfulness simultaneously
  - **Industrial adaptive optimisation**: Google DeepMind's adaptive datacenter cooling (Evans & Gao, 2016; updated 2024) reduced cooling energy by 40%, saving approximately USD 100M annually; AlphaChip (Mirhoseini et al., 2021, *Nature*) used RL to design TPU floorplans superior to human expert solutions in 24 hours versus weeks; DeepMind's AlphaSorter achieved a 70% reduction in sorting time in Google's warehouse operations (2023)

  ## Challenges and Open Problems
  - **[[Distribution Shift]]**: agents trained under one distribution of environment dynamics frequently fail when that distribution shifts at deployment — a ubiquitous problem in autonomous driving (weather change, novel road configurations), healthcare (patient population drift), and natural language understanding (new topics and domains). Addressing distribution shift requires online adaptation methods (meta-RL, continual RL, test-time adaptation), calibrated uncertainty estimation so agents know when they have left their training distribution, and causal models of environment dynamics that generalise across interventions rather than relying on spurious statistical correlations.

  - **Sample efficiency and sim-to-real transfer**: state-of-the-art [[Deep Reinforcement Learning]] typically requires millions to billions of environment interactions to achieve expert performance — orders of magnitude more than human learners. This makes direct real-world training intractable for physical systems where interactions are costly, slow, or dangerous. [[Simulation Environment]]s (MuJoCo, Isaac Gym, Habitat) partially address this but introduce [[Sim-to-Real Transfer]] gaps. Domain randomisation, system identification, privileged learning (training a teacher with ground-truth state to distil into a student using only sensor observations), and adaptive domain randomisation (AutoDR) are the main strategies; none fully closes the gap for tasks involving contact-rich manipulation or unstructured terrain.

  - **Safe adaptive behaviour and alignment**: as adaptive systems become more capable and are deployed in safety-critical domains (healthcare, autonomous driving, industrial control), ensuring that adaptive behaviour remains aligned with human intentions and within safety constraints becomes critical. Key challenges include reward hacking (optimising the specified reward in unintended ways), specification gaming (satisfying the letter of the reward function but not the spirit), and catastrophic side effects (unintended consequences of aggressive reward-maximisation). Proposed solutions include [[Reinforcement Learning from Human Feedback]] (RLHF) to align reward functions with human preferences, constrained MDPs and safe RL algorithms (CPO, RCPO) that enforce hard constraints on dangerous state visitations, and formal verification of neural policies using abstract interpretation or satisfiability-modulo-theories (SMT) methods.

  - **Catastrophic forgetting in continual adaptation**: when an adaptive agent is trained sequentially on a series of tasks, learning new tasks typically degrades performance on old tasks — a phenomenon known as catastrophic forgetting or interference. [[Continual Learning]] approaches (Elastic Weight Consolidation, Progressive Neural Networks, PackNet, experience rehearsal) partially mitigate this but do not eliminate it. The problem is particularly severe for foundation model adaptation via RL fine-tuning, where [[Reinforcement Learning from Human Feedback]] has been documented to cause forgetting of broader capabilities present in the base model.

  - **Multi-agent adaptive behaviour and non-stationarity**: when multiple adaptive agents share an environment, each agent's policy update changes the environment seen by other agents, introducing non-stationarity that breaks the MDP assumptions underpinning single-agent RL convergence guarantees. Cooperative multi-agent RL (MARL) approaches (QMIX, MADDPG, COMA) address cooperative settings; competitive settings (zero-sum games) admit Nash equilibrium solution concepts but are computationally hard to find. The interaction of many adaptive agents — as in competitive financial markets, multi-robot warehouses, or multi-player games — produces complex emergent dynamics including agent collusion, exploitation cycles, and population-level evolutionary dynamics that are difficult to predict or control.

  ## Components / Architecture
  - **Policy**: the decision function π(a|s) mapping environmental states to action distributions; updated iteratively via [[Policy Gradient Methods]] or value-backed greedy selection
  - **Value Function / Q-Function**: Q(s,a) or V(s) estimates cumulative future return, trained by [[Temporal Difference Learning]] using Bellman backup targets
  - **[[Reward Signal]]**: scalar evaluative feedback from the environment; may be dense (reward every step), sparse (only at terminal states), or shaped via intrinsic curiosity modules
  - **[[Experience Replay]]**: a buffer of past (s, a, r, s') transitions enabling off-policy learning and breaking temporal correlations during mini-batch gradient updates
  - **[[Exploration-Exploitation Tradeoff]]**: mechanisms (ε-greedy, UCB, Thompson Sampling, entropy-regularised objectives) balancing discovery of novel behaviours against exploitation of known high-reward actions
  - **[[Feedback Loop]]**: the closed-loop sensorimotor cycle — observe state, select action, receive reward and next state — that is the architectural primitive of all adaptive systems
  - **[[World Model]]**: learned predictive model of state transitions T(s'|s,a) and reward R(s,a), enabling model-based planning (Dyna-Q, Dreamer v3, MuZero)
  - **[[Hierarchical Reinforcement Learning]]**: decomposition of policy into temporally extended options or sub-goal hierarchies, allowing adaptive reuse of primitive behaviours for long-horizon tasks
  - **[[Sim-to-Real Transfer]]**: domain randomisation, privileged teacher-student distillation, and online adaptive fine-tuning to close the simulation-to-reality performance gap

  ## Use Cases / Major Families
  - **Robotics and physical AI**: locomotion, manipulation (grasping, assembly, pick-and-place), humanoid motor control; Google Gemini Robotics 1.5 (2025), RT-2, ALOHA; NVIDIA Project GR00T
  - **Game-playing and strategic reasoning**: AlphaZero (2017) achieved superhuman performance in Chess, Go, and Shogi via self-play [[Deep Reinforcement Learning]]; OpenAI Five (2019) defeated world-champion Dota 2 teams; AlphaStar (2019) achieved Grandmaster rank in StarCraft II
  - **[[Autonomous Vehicle]]s**: real-time adaptive re-planning under sensor noise, weather variation, and dynamic obstacles; Waymo, Cruise, Mobileye using RL-based contingency planning alongside classical planning stacks
  - **Language model alignment**: [[Reinforcement Learning from Human Feedback]] (RLHF) and Group Relative Policy Optimisation (GRPO) adapt [[Large Language Model]]s to follow instructions and reason correctly, as demonstrated by DeepSeek-R1, GPT-4o, and Claude systems (2024–2025)
  - **[[Agentic AI]] and tool use**: agents that adaptively select web search, code execution, API calls, and memory operations based on task context; demonstrated in multi-step reasoning benchmarks (GAIA, SWE-bench)
  - **[[Swarm Intelligence]] and multi-drone coordination**: ant-colony-inspired foraging, boid-like flocking, and LLM-driven adaptive swarm behaviours; 300+ new studies on autonomous multi-agent systems in 2024 alone
  - **Industrial optimisation**: datacenter cooling (Google 40% energy reduction), chip floorplanning (AlphaChip, Nature 2021), supply chain adaptive scheduling
  - **Healthcare**: adaptive dosing protocols, personalised treatment pathway selection, adaptive physiological signal monitoring for stress and depression (PMC, 2025)

  ## Adaptive Behaviour in Biological and Cognitive Systems
  - The concept of adaptive behaviour predates AI and reaches deep into evolutionary biology and ethology. Tinbergen's (1963) four questions about animal behaviour — causation, development, function, and evolution — provide a framework that maps directly onto computational approaches: what mechanisms produce adaptive responses (causation ≡ the [[Deep Reinforcement Learning]] algorithm and architecture), how do adaptive capabilities develop over a lifetime (development ≡ [[Continual Learning]] and [[Meta-Learning]]), what functional goals does adaptation serve (function ≡ reward specification and the choice of objective function), and why have particular adaptive strategies evolved (evolution ≡ the meta-level question of algorithm selection and inductive biases). Understanding this biological grounding clarifies why certain adaptive mechanisms recur across disparate systems: evolution has discovered solutions to the adaptive control problem that human engineers are now rediscovering computationally.

  - Cognitive science contributes several theoretical frameworks directly relevant to computational adaptive behaviour. Schema theory (Piaget) describes how cognitive structures are adapted through assimilation (incorporating new information into existing schemas) and accommodation (restructuring schemas to handle incompatible new information) — a process strikingly analogous to [[Transfer Learning]] and domain adaptation in neural networks. Vygotsky's [[Zone of Proximal Development]] identifies the cognitive zone where adaptive challenge is productive — the range of tasks achievable with guidance but not independently — which corresponds in computational terms to selecting training environments at appropriate difficulty levels relative to the current policy. Anderson's ACT-R cognitive architecture models skill acquisition as a process of compiling declarative knowledge into procedural rules, analogous to the compilation of model-based planning into model-free reactive policies via Dyna-style algorithms.

  - Neuroscientific findings on adaptive learning have directly influenced AI algorithm design. Dopaminergic neurons in the basal ganglia encode a signal strikingly similar to the temporal difference prediction error δ_t = r_t + γV(s_{t+1}) - V(s_t) in [[Temporal Difference Learning]] — a parallel discovered independently and subsequently documented experimentally by Schultz, Dayan, and Montague (1997), suggesting that biological brains implement something close to TD-learning. The hippocampal memory consolidation system, which replays recent experiences during sleep to strengthen memories, directly inspired the [[Experience Replay]] mechanism in DQN. The prefrontal cortex's role in working memory and meta-cognitive control of behaviour — maintaining task context and switching strategies when current approaches fail — has inspired gating mechanisms in LSTM and Transformer-based adaptive agents.

  ## Academic Context
  - **Cybernetics and control theory**: Wiener (1948) introduced the concept of feedback-regulated self-correcting systems; Ashby's *Design for a Brain* (1952) formalised the homeostatic principle of adaptive behaviour in biological and artificial systems
  - **Reinforcement learning foundations**: Sutton & Barto's *Reinforcement Learning: An Introduction* (2nd ed., 2018) remains the canonical text; key early papers include Watkins (1989) on Q-learning, Sutton (1988) on temporal-difference learning, and Williams (1992) on REINFORCE policy gradient
  - **Deep RL era**: Mnih et al. (2015) DQN in *Nature* demonstrated pixel-to-action RL; Silver et al. (2016, 2017) AlphaGo/AlphaZero established model-free and self-play DRL; Schulman et al. (2017) PPO became the dominant practical algorithm; Haarnoja et al. (2018) SAC introduced maximum-entropy RL
  - **Foundation model integration**: Reed et al. (2022) Gato (DeepMind); Brohan et al. RT-2 (2023); Firoozi et al. "Foundation Models in Robotics" (International Journal of Robotics Research, 2025) provides a comprehensive review of how pre-trained vision-language models are being integrated into adaptive robotic policies
  - **Agentic and test-time adaptation**: "Adaptation of Agentic AI: A Survey of Post-Training, Memory, and Skills" (arXiv 2512.16301, 2025) surveys runtime adaptation methods including test-time training, online RL, and memory-augmented adaptation; Generative AI for Self-Adaptive Systems (ACM TAAS, 2025) provides a roadmap for integrating large generative models into MAPE-K (Monitor-Analyse-Plan-Execute) feedback loops
  - **Self-organising systems**: "Self-organizing systems: what, how, and why?" (*npj Complexity*, 2025) re-examines emergence in biological and artificial self-organising systems; "Emergence of Hierarchies in Multi-Agent Self-Organizing Systems" (arXiv 2508.09541, 2025) characterises hierarchy formation under joint objectives

  ## Current Landscape (2026)
  - **Foundation model-driven adaptation**: Large-scale pre-trained models ([[Large Language Model]]s and [[Foundation Models]]) are being embedded as policy backbones and reward models, enabling rapid in-context adaptation to novel tasks without retraining from scratch. NVIDIA Isaac Lab and Gemini Robotics 1.5 (2025) exemplify foundation-model-powered physical AI
  - **Test-time adaptation as a paradigm**: The AI field has converged on runtime adaptation — inference-time compute scaling, test-time training with verifier-driven selection, and deployment-time correction — as a first-class capability rather than an afterthought, driven by o1/o3, DeepSeek-R1, and Kimi k1.5 results in mathematical reasoning
  - **Multi-agent emergent behaviour**: Over 300 new studies on MAS and swarm robotics in 2024; LLMs are being used as flexible engine for agent-level behaviour in swarms, producing context-driven adaptive responses (Frontiers in AI, 2025)
  - **Safe adaptive behaviour**: Safety concerns around adaptive systems that modify their behaviour at deployment time have moved to the forefront; the field is developing safety cases for advanced adaptive AI (Krakovna et al., 2023; DeepMind safety framework) and EU AI Act provisions for post-deployment adaptive systems enter enforcement in 2026
  - **Agentic frameworks**: LangGraph, AutoGen, and multi-agent architectures at major cloud providers (AWS Bedrock Agents, Google Vertex AI Agents, Azure AI Foundry) enable orchestrated distributed adaptive intelligence at production scale

  ## UK Context
  - **Manchester**: The University of Manchester Centre for Robotics and AI (AI@Manchester / IDSAI) is one of the UK's leading robotics centres, with specific strength in socially adaptive autonomous systems — robots that "anticipate when someone needs help, adapt their behaviours over time, or respond to situations in a more socially intelligent way" (Manchester Robotics, 2025). Key projects include adaptive care robots for dementia support (CARESPHERE), self-adaptive industrial manipulation systems, and reinforcement learning for unstructured assembly environments. Manchester's collaborations with UK manufacturers in the Greater Manchester Combined Authority area position adaptive robotics research within the industrial context of the North West's advanced manufacturing base.

  - **Leeds**: The Sensible Robots Laboratory at the University of Leeds (led by Professor Jordan Bray) explicitly frames its mission as developing "systems and algorithms to bring useful autonomous robots in everyday life, capable of long-term, rational, and adaptive behaviour" (Sensible Robots, 2025). Research includes adaptive grasping under uncertainty, social robot navigation in crowded spaces, and long-term autonomy for agricultural robotics in collaboration with Yorkshire-based precision agriculture firms. Leeds' location in West Yorkshire positions it within the region's emerging digital economy cluster, with adaptive AI applications in logistics and warehousing particularly relevant given Amazon and ASOS distribution infrastructure nearby.

  - **Sheffield**: The University of Sheffield's Centre for Machine Intelligence (CMI), directed since 2024 by Professor James Marshall (co-founder of Opteran Technologies Limited), specialises in bio-inspired adaptive systems drawing on the remarkably efficient neural architectures of insects. Opteran Technologies has commercialised these insights into low-power autonomous navigation chips that achieve robust adaptive navigation using orders of magnitude less compute than conventional [[Deep Reinforcement Learning]] approaches, with applications in agricultural robotics and drone navigation. Sheffield's Advanced Manufacturing Research Centre (AMRC) conducts applied research on adaptive manufacturing processes in collaboration with Boeing, Rolls-Royce, and McLaren Automotive — industrial partners with direct stakes in adaptive robotic assembly.

  - **Newcastle and North East England**: Newcastle University's Centre for Digital Citizens and collaboration with Durham, Lancaster, and Sheffield on the UKRI Digital Economy Programme includes projects on adaptive digital health monitoring systems for remote care. The North East's industrial base — Nissan's Sunderland plant (producing 350,000+ vehicles annually, increasingly with adaptive manufacturing processes), pharmaceutical automation in County Durham, and offshore energy adaptive inspection robotics — provides deployment contexts for adaptive systems research. Newcastle's collaboration with NHS Trusts on adaptive physiological monitoring (for stress, depression, and deterioration detection in care settings) exemplifies adaptive behaviour in healthcare AI.

  - **Oxford**: The Oxford Robotics Institute (ORI) focuses on long-term autonomy in unstructured outdoor environments, with research on adaptive localisation, mapping under seasonal change, and traversability estimation for off-road vehicles — directly relevant to adaptive behaviour in the wild. The Future of Humanity Institute (FHI) and Centre for the Governance of AI (GovAI) at Oxford study the safety implications of adaptive autonomous systems, including questions of how to ensure that self-modifying adaptive agents remain aligned with human values over time. The Oxford Internet Institute examines the societal implications of adaptive AI in media, finance, and social systems. Oxford and the Turing Institute jointly lead the UK's UKRI AI World-Leading Labs Programme evaluating frontier adaptive AI systems.

  - **Edinburgh**: Edinburgh's School of Informatics hosts one of the world's leading AI research groups, with multiple strands directly relevant to adaptive behaviour. The UKRI Centre for Doctoral Training in Robotics and Autonomous Systems (CDT-RAS) at Edinburgh and Heriot-Watt trains cohorts of PhD researchers in adaptive robotic systems, safe RL, and human-robot interaction. The Bayesian and Probabilistic Machine Learning research group develops principled approaches to uncertainty quantification under distribution shift — a foundational challenge for safe adaptive behaviour. The Edinburgh Centre for Robotics runs the RAICo-1 nuclear decommissioning adaptive robotics facility in collaboration with Jacobs and Sellafield Ltd., where adaptive manipulation in radioactive environments represents one of the highest-stakes real-world deployments of adaptive AI.

  - **Imperial College London**: the Adaptive and Intelligent Robotics Laboratory (AIRL) at Imperial conducts research on adaptive locomotion, contact-rich manipulation, and sim-to-real transfer for humanoid and legged robots. Imperial's collaborations with NHS trusts on adaptive surgical assistance and with UK MOD on autonomous systems for defence applications (under the DASA / DSTL adaptive autonomous systems programme) represent high-stakes deployment contexts for adaptive behaviour research.

  - **Policy and regulation**: The UK AI Safety Institute (AISI) at DSIT, launched in 2023, evaluates frontier AI models including those with adaptive/agentic capabilities, assessing their behaviour under distribution shift and testing for specification gaming and unsafe adaptation. The Pro-innovation Regulation of AI White Paper (2023) and subsequent AI legislation places proportionality obligations on high-risk adaptive AI in healthcare, critical infrastructure, and financial services. The UK's participation in the Seoul AI Safety Summit (2024) and Bletchley Park Safety Process produced international commitments on evaluating adaptive AI systems before deployment in safety-critical contexts. UK Research and Innovation (UKRI) has committed £117M to the National Robotics Programme (2024–2029), a significant fraction of which funds adaptive autonomous systems research across the institutions described above.

  ## Adaptive Behaviour and Foundation Models: The 2024–2026 Paradigm Shift
  - The deployment of large pre-trained [[Foundation Models]] as priors for adaptive behaviour represents the most significant paradigm shift in the field since the introduction of [[Deep Reinforcement Learning]]. Classical adaptive behaviour frameworks required training an agent from scratch in each new environment, with adaptation occurring entirely within the [[Reinforcement Learning]] training loop. Foundation model approaches invert this: a model pre-trained on vast internet-scale data (text, images, video, robot trajectories) already encodes general knowledge about the world, physics, object affordances, and common human tasks. Adaptation then occurs through fine-tuning on task-specific data (far more sample-efficient than from-scratch training) or through in-context learning (zero-shot or few-shot, with no parameter updates at all).

  - This paradigm shift manifests differently across adaptive behaviour domains. In robotic manipulation, RT-2 (Brohan et al., 2023) demonstrated that a Vision-Language-Action model fine-tuned from a [[Large Language Model]] could generalise to novel objects and instructions not seen during robot training, because the VLA inherits generalisation from web-scale pre-training on visual and linguistic data. In language model alignment, Group Relative Policy Optimisation (GRPO, used in DeepSeek-R1, 2025) enables adaptive behaviour that improves mathematical reasoning through [[Reinforcement Learning]] from self-generated verification signals, without requiring human-labelled preference data at the scale needed by classical RLHF. In autonomous agents, tool-use behaviour (selecting web search, code execution, or API calls adaptively based on task requirements) has emerged from [[Foundation Models]] through a combination of few-shot prompting and RL fine-tuning on agent trajectories.

  - The in-context adaptation paradigm — where a pre-trained [[Large Language Model]] adapts its behaviour by processing examples of the desired behaviour in its context window, without gradient updates — represents a qualitatively new form of [[Meta-Learning]]. Decision Transformer (Chen et al., 2021) first demonstrated this for sequential decision-making, reframing [[Reinforcement Learning]] as sequence modelling: a Transformer trained on (state, action, return-to-go) sequences learns to generate high-return action sequences given a target return conditioned in its context. Algorithm Distillation (Laskin et al., 2023) extended this to in-context RL: the model adapts its decision policy within a single forward pass by processing a history of prior algorithm interactions, effectively learning to learn from context alone without gradient updates. This raises fundamental questions about the distinction between in-weights learning (gradient-based policy update) and in-context learning (context-based policy adaptation) as mechanisms for adaptive behaviour.

  - The safety implications of foundation model-driven adaptive behaviour are substantially different from classical RL-based systems. Classical RL agents adapt their policies through gradient descent on a fixed reward function — the adaptation dynamics are well-understood and bounded by the learning rate and reward specification. Foundation model agents may adapt their behaviour through in-context learning in ways that are harder to predict, verify, or bound, since the adaptation mechanism is not a gradient update but a complex function of the entire context. The "Adaptation of Agentic AI" survey (arXiv:2512.16301, 2025) identifies this as a key safety concern: "adaptation mechanisms like on-policy optimisation and in-context learning introduce dynamic threat vectors characterised by autonomous risk-taking and adversarial co-evolution." EU AI Act Article 9 provisions for post-deployment monitoring of adaptive AI systems are directly motivated by these concerns, with mandatory logging and human oversight requirements for high-risk adaptive AI systems entering enforcement in 2026.

  ## Future Directions (2026–2030)
  - **Lifelong and continual adaptive agents**: agents that accumulate skills without [[Continual Learning]] catastrophic forgetting, analogous to human lifelong learning; progress expected through episodic memory, modular architectures, and neurosymbolic hybrid approaches
  - **Causal adaptive models**: integrating [[Causal Inference]] into adaptive agents so that behaviour changes are grounded in causal interventional knowledge rather than mere correlation, improving robustness to [[Distribution Shift]] and enabling transfer across environments
  - **Safe and interpretable adaptation**: methods for certifying that adaptive behaviour remains within safety boundaries after self-modification, including formal verification of neural policy updates and regulatory-grade audit trails required by EU AI Act for high-risk adaptive systems
  - **[[Meta-Learning]] and rapid task adaptation**: few-shot adaptation to entirely new tasks within a single context window, enabled by meta-RL (MAML, RL^2) and in-context RL using foundation model priors
  - **Physical AI at scale**: [[Digital Twin]] environments enabling massive parallel adaptive training for [[Robotic Manipulation]] and humanoid locomotion; NVIDIA Omniverse and Isaac Sim already support millions of parallel environment instances
  - **Adaptive multi-modal agents**: agents that adaptively integrate vision, language, speech, and haptic feedback to ground adaptive policies in rich perceptual context, extending [[Foundation Models]] to full visuomotor-linguistic agents

  ## Research & Literature
  1. Wiener, N. (1948). *Cybernetics: Or Control and Communication in the Animal and the Machine*. MIT Press.
  2. Ashby, W.R. (1952). *Design for a Brain*. Chapman & Hall.
  3. Sutton, R.S. (1988). Learning to predict by the methods of temporal differences. *Machine Learning*, 3(1), 9–44.
  4. Watkins, C.J.C.H. (1989). *Learning from Delayed Rewards* [PhD thesis]. University of Cambridge.
  5. Williams, R.J. (1992). Simple statistical gradient-following algorithms for connectionist reinforcement learning. *Machine Learning*, 8, 229–256.
  6. Sutton, R.S. & Barto, A.G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.
  7. Mnih, V. et al. (2015). Human-level control through deep reinforcement learning. *Nature*, 518, 529–533.
  8. Silver, D. et al. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature*, 529, 484–489.
  9. Silver, D. et al. (2017). Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm. *arXiv:1712.01815*.
  10. Schulman, J., Wolski, F., Dhariwal, P., Radford, A., & Klimov, O. (2017). Proximal Policy Optimization Algorithms. *arXiv:1707.06347*.
  11. Haarnoja, T., Zhou, A., Abbeel, P., & Levine, S. (2018). Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor. *ICML 2018*.
  12. Hafner, D. et al. (2023). Mastering Diverse Domains through World Models (DreamerV3). *arXiv:2301.04104*.
  13. Reed, S. et al. (2022). A Generalist Agent (Gato). *arXiv:2205.06175*.
  14. Brohan, A. et al. (2023). RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control. *arXiv:2307.15818*.
  15. Firoozi, R. et al. (2025). Foundation models in robotics: Applications, challenges, and the future. *International Journal of Robotics Research*, 44(1–2). doi:10.1177/02783649241281508.
  16. Anonymous (2025). Adaptation of Agentic AI: A Survey of Post-Training, Memory, and Skills. *arXiv:2512.16301*.
  17. Metzler-Baddeley, C. et al. (2025). Generative AI for Self-Adaptive Systems: State of the Art and Research Roadmap. *ACM Transactions on Autonomous and Adaptive Systems*. doi:10.1145/3686803.
  18. Krakovna, V. et al. (2023). Avoiding side effects in complex environments. *NeurIPS 2020 / DeepMind Technical Report*.
  19. Vinyals, O. et al. (2019). Grandmaster level in StarCraft II using multi-agent reinforcement learning (AlphaStar). *Nature*, 575, 350–354.
  20. Berner, C. et al. (2019). Dota 2 with Large Scale Deep Reinforcement Learning (OpenAI Five). *arXiv:1912.06680*.
  21. Fawzi, A. et al. (2022). Discovering faster matrix multiplication algorithms with reinforcement learning (AlphaCode/AlphaTensor). *Nature*, 610, 47–53.
  22. Anonymous (2025). AI-driven multi-agent reinforcement learning framework for real-time monitoring of physiological signals. *PMC*, 12149378.
  23. Anonymous (2025). Multi-agent systems powered by large language models: applications in swarm intelligence. *Frontiers in Artificial Intelligence*. doi:10.3389/frai.2025.1593017.
  24. Anonymous (2025). Self-organizing systems: what, how, and why? *npj Complexity*. doi:10.1038/s44260-025-00031-5.
  25. Anonymous (2025). Embodied AI in Social Spaces: Responsible and Adaptive Robots in Complex Settings (UKAIRS 2025). *arXiv:2509.00218*.
  26. University of Sheffield Centre for Machine Intelligence (2024). *2024 Research Highlights*. Sheffield: University of Sheffield.
  27. University of Manchester Centre for Robotics and AI (2025). *AI@Manchester — Centre for Robotics and AI*. Manchester: University of Manchester.

- ### Provenance
  - sources:: Wiener (1948) Cybernetics; Sutton & Barto (2018) RL Introduction; Mnih et al. (2015) Nature DQN; Silver et al. (2016) AlphaGo; Brohan et al. (2023) RT-2; arXiv:2512.16301 Adaptation of Agentic AI; ACM TAAS doi:10.1145/3686803; Frontiers frai.2025.1593017; npj Complexity s44260-025-00031-5; Sheffield CMI 2024 highlights; Manchester Robotics Centre 2025; arXiv:2509.00218 UKAIRS 2025
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm