public:: true

# Agent Evaluation Benchmarks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-evaluation-benchmarks",
  "@type": "Page",
  "vc:slug": "agent-evaluation-benchmarks",
  "title": "Agent Evaluation Benchmarks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:agent-harness", "vc:label": "Agent Harness"},
    {"@id": "urn:visionflow:linked:evaluation-harness", "vc:label": "Evaluation Harness"},
    {"@id": "urn:visionflow:linked:agent-development-sdks", "vc:label": "Agent Development SDKs"},
    {"@id": "urn:visionflow:linked:swe-bench", "vc:label": "SWE-bench"},
    {"@id": "urn:visionflow:linked:web-arena", "vc:label": "WebArena"},
    {"@id": "urn:visionflow:linked:arc-agi", "vc:label": "ARC-AGI"},
    {"@id": "urn:visionflow:linked:inspect-ai", "vc:label": "inspect_ai"},
    {"@id": "urn:visionflow:linked:gaia-benchmark", "vc:label": "GAIA Benchmark"},
    {"@id": "urn:visionflow:linked:osworld", "vc:label": "OSWorld"},
    {"@id": "urn:visionflow:linked:agent-bench", "vc:label": "AgentBench"},
    {"@id": "urn:visionflow:linked:vita-bench", "vc:label": "VitaBench"},
    {"@id": "urn:visionflow:linked:metr-hcast", "vc:label": "METR HCAST"},
    {"@id": "urn:visionflow:linked:tau-bench", "vc:label": "TAU-bench"},
    {"@id": "urn:visionflow:linked:terminal-bench", "vc:label": "Terminal-Bench"},
    {"@id": "urn:visionflow:linked:large-language-model", "vc:label": "Large Language Model"},
    {"@id": "urn:visionflow:linked:agentic-ai", "vc:label": "Agentic AI"},
    {"@id": "urn:visionflow:linked:autonomous-coding", "vc:label": "Autonomous Coding"},
    {"@id": "urn:visionflow:linked:computer-use", "vc:label": "Computer Use"},
    {"@id": "urn:visionflow:linked:browser-automation", "vc:label": "Browser Automation"},
    {"@id": "urn:visionflow:linked:llm-evaluation", "vc:label": "LLM Evaluation"},
    {"@id": "urn:visionflow:linked:tool-use", "vc:label": "Tool Use"},
    {"@id": "urn:visionflow:linked:re-act-pattern", "vc:label": "ReAct Pattern"},
    {"@id": "urn:visionflow:linked:agent-execution-sandboxes", "vc:label": "Agent Execution Sandboxes"},
    {"@id": "urn:visionflow:linked:multi-agent-orchestration-frameworks", "vc:label": "Multi-Agent Orchestration Frameworks"},
    {"@id": "urn:visionflow:linked:internal-ai-harness", "vc:label": "Internal AI Harness"},
    {"@id": "urn:visionflow:linked:external-ai-harness", "vc:label": "External AI Harness"},
    {"@id": "urn:visionflow:linked:reward-hacking", "vc:label": "Reward Hacking"},
    {"@id": "urn:visionflow:linked:human-in-the-loop", "vc:label": "Human-in-the-Loop"},
    {"@id": "urn:visionflow:linked:ai-safety", "vc:label": "AI Safety"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:model-context-protocol", "vc:label": "Model Context Protocol"},
    {"@id": "urn:visionflow:linked:chain-of-thought", "vc:label": "Chain-of-Thought"},
    {"@id": "urn:visionflow:linked:foundation-models", "vc:label": "Foundation Models"},
    {"@id": "urn:visionflow:linked:plan-and-execute-pattern", "vc:label": "Plan-and-Execute Pattern"},
    {"@id": "urn:visionflow:linked:agent-frameworks", "vc:label": "Agent Frameworks"},
    {"@id": "urn:visionflow:owl:class:ai-technique", "vc:label": "AI-GroundedDomain"},
    {"@id": "urn:visionflow:owl:class:ai-research-area", "vc:label": "ComputationAndIntelligenceDomain"},
    {"@id": "urn:visionflow:owl:class:application-layer", "vc:label": "ApplicationLayer"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-evaluation-benchmarks",
  "@type": "Class",
  "label": "Agent Evaluation Benchmarks",
  "definition": "Standardised benchmark suites and evaluation frameworks for measuring autonomous agent capabilities across software engineering, web navigation, reasoning, and general task completion — includes SWE-bench, WebArena, ARC-AGI-2, inspect_ai, AgentBench, and VitaBench.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
      {
            "@id": "urn:ngm:class:agent-harness",
            "label": "Agent Harness"
      },
      {
            "@id": "urn:ngm:class:llm-evaluation",
            "label": "LLM Evaluation"
      }
  ],
  "relations": {
      "hasPart": [
            {"@id": "urn:ngm:class:swe-bench", "label": "SWE-bench"},
            {"@id": "urn:ngm:class:web-arena", "label": "WebArena"},
            {"@id": "urn:ngm:class:gaia-benchmark", "label": "GAIA Benchmark"},
            {"@id": "urn:ngm:class:osworld", "label": "OSWorld"},
            {"@id": "urn:ngm:class:agent-bench", "label": "AgentBench"},
            {"@id": "urn:ngm:class:vita-bench", "label": "VitaBench"},
            {"@id": "urn:ngm:class:metr-hcast", "label": "METR HCAST"},
            {"@id": "urn:ngm:class:inspect-ai", "label": "inspect_ai"}
      ],
      "requires": [
            {"@id": "urn:ngm:class:agent-execution-sandboxes", "label": "Agent Execution Sandboxes"},
            {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
            {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"}
      ],
      "enables": [
            {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
            {"@id": "urn:ngm:class:autonomous-coding", "label": "Autonomous Coding"},
            {"@id": "urn:ngm:class:computer-use", "label": "Computer Use"}
      ],
      "relatedTo": [
            {
                  "@id": "urn:ngm:class:evaluation-harness",
                  "label": "Evaluation Harness"
            },
            {
                  "@id": "urn:ngm:class:agent-development-sdks",
                  "label": "Agent Development SDKs"
            }
      ]
  },
  "quality": 0.90,
  "vc:termId": "AI-9917",
  "vc:schemaVersion": 2
}
```

- ### Definition
  - Agent Evaluation Benchmarks are standardised suites of tasks, environments, and scoring protocols designed to measure the capability, reliability, safety, and generalisability of autonomous [[Agentic AI]] systems across dimensions that simple question-answer accuracy metrics cannot capture. Unlike static [[LLM Evaluation]] benchmarks — MMLU, HellaSwag, BoolQ, HumanEval — which present a model with a fixed context and expect a single response, agent benchmarks require a system to take sequences of actions: browsing the web, executing code, calling APIs through [[Tool Use]], managing files in [[Agent Execution Sandboxes]], or interacting with simulated users, in order to accomplish multi-step goals within interactive environments where each action changes the state the agent will observe next. The field crystallised around 2022 to 2024 with the publication of landmark suites such as [[SWE-bench]] (real GitHub issue resolution verified by running test suites against generated patches), [[WebArena]] (812 tasks across five sandboxed real web applications requiring multi-step browser navigation), [[GAIA Benchmark]] (factual multi-hop web tasks graded by human-verified reference answers), and [[OSWorld]] (369 tasks on a live Windows or Ubuntu desktop accessed via screenshot plus action API), each probing a distinct capability axis and collectively covering the major modalities through which autonomous agents interact with digital environments. Evaluation infrastructure has become as important as the task suites themselves: [[inspect_ai]], the open-source Python framework from the UK AI Security Institute (AISI), provides reproducible task definitions, Docker-sandboxed execution, multi-turn solver pipelines, a pluggable scorer API, and a VS Code log viewer, and now backs over 200 published evaluation suites used by METR, Apollo Research, and multiple government safety bodies internationally. A parallel lineage of safety-oriented benchmarks including [[METR HCAST]], METR RE-Bench, and the OWASP Agentic Application LLM threat-assessment suite focuses specifically on measuring an agent's effective time horizon — the longest task it can complete at fifty percent or better pass rate — its potential for autonomous harmful actions, and its robustness to adversarial prompt injection designed to elicit [[Reward Hacking]], score inflation through exploitation of scoring ambiguities, or unsafe action sequences. Performance across all major benchmarks has been climbing rapidly and heterogeneously: [[SWE-bench]] Verified SOTA reached 87.6% by mid-2026 (Claude Opus 4.7), [[GAIA Benchmark]] top-1 reached 74.6% (Claude Sonnet 4.5, Princeton HAL leaderboard), [[OSWorld]] reached 73%, and [[WebArena]] reached 61.7%, yet [[ARC-AGI]]-3, launched March 2026 to replace a predecessor that had been solved by reasoning-mode frontier models, remains below one percent for all frontier systems. The ecosystem now includes dedicated leaderboard infrastructure (benchmarkingagents.com, Princeton HAL, vals.ai), hardware-scale benchmarking guides for GPU cloud deployment, and ongoing community debates about benchmark contamination, evaluation fidelity, scaffold specificity, and the structural gap between laboratory scores produced with carefully tuned agent scaffolding and real deployment reliability on unseen task distributions. [[Agent Evaluation Benchmarks]] therefore occupy a critical and rapidly evolving position in the [[AI Safety]], [[LLM Evaluation]], and [[Agent Harness]] landscape, providing the empirical grounding — however imperfect — that determines whether autonomous systems are deemed ready for expanded autonomy, production deployment, or responsible scaling commitments by frontier model providers.

- ### Semantic Classification
  - owl-class:: ai:AgentEvaluationBenchmarks
  - owl-role:: EvaluationProtocol | BenchmarkSuite | ResearchInfrastructure
  - owl-inferred:: ai:LLMEvaluationFramework, ai:AgentCapabilityMeasure, ai:SafetyAssessmentTool
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[LLM Evaluation]], [[Evaluation Harness]]
  - has-part:: [[SWE-bench]], [[WebArena]], [[GAIA Benchmark]], [[OSWorld]], [[AgentBench]], [[VitaBench]], [[METR HCAST]], [[TAU-bench]], [[Terminal-Bench]], [[inspect_ai]], [[ARC-AGI]]
  - requires:: [[Agent Execution Sandboxes]], [[Large Language Model]], [[Tool Use]], [[ReAct Pattern]], [[Foundation Models]], [[Agent Harness]], [[Chain-of-Thought]]
  - enables:: [[AI Safety]], [[Human-in-the-Loop]], [[Autonomous Coding]], [[Computer Use]], [[Browser Automation]], [[Agentic AI]], [[Responsible Scaling Policy]]
  - implements:: [[LLM Evaluation]], [[Reinforcement Learning]], [[Plan-and-Execute Pattern]], [[Functional Verification]], [[Safety Assessment]]
  - depends-on:: [[Agent Harness]], [[Internal AI Harness]], [[External AI Harness]], [[Agent Execution Sandboxes]], [[Large Language Model]]
  - supports:: [[Agentic AI]], [[Multi-Agent Orchestration Frameworks]], [[Agent Development SDKs]], [[Agent Frameworks]], [[AI Safety]], [[Regulatory Compliance]]
  - uses:: [[Model Context Protocol]], [[ReAct Pattern]], [[Agent Execution Sandboxes]], [[Chain-of-Thought]], [[Reinforcement Learning]], [[Docker]]
  - contrasts-with:: [[Reward Hacking]], [[Static NLP Benchmarks]], [[LLM Evaluation]]
  - related-to:: [[Evaluation Harness]], [[Agent Development SDKs]], [[Multi-Agent Orchestration Frameworks]], [[AI Agent System]], [[Autonomous Agent]], [[Agent Frameworks]]
  - standardized-by:: [[inspect_ai]], [[METR HCAST]], [[AI Safety Institute]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:SWEbench))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:WebArena))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:GAIABenchmark))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:OSWorld))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:AgentBench))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:VitaBench))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:METRHCAST))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:TAUbench))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:hasPart ai:InspectAI))

  ## Dependency Relationships
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:requires ai:AgentExecutionSandboxes))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:requires ai:ToolUse))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:requires ai:ReActPattern))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:requires ai:SandboxedEnvironment))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:requires ai:FoundationModels))

  ## Capability Relationships
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:enables ai:AISafety))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:enables ai:HumanInTheLoop))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:enables ai:AutonomousCoding))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:enables ai:ComputerUse))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:enables ai:BrowserAutomation))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:enables ai:AgentCapabilityDisclosure))

  ## Implementation Relationships
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:implements ai:LLMEvaluation))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:implements ai:ReinforcementLearning))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:implements ai:TaskCompletionScoring))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:implements ai:SafetyRubric))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:implements ai:PlanAndExecutePattern))

  ## Reduction Relationships
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:reducesTo ai:LLMEvaluation))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:reducesTo ai:SoftwareEngineeringBenchmark))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:reducesTo ai:TaskCompletionMetric))

  ## Support Relationships
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:supports ai:AgenticAI))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:supports ai:MultiAgentOrchestrationFrameworks))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:supports ai:AgentDevelopmentSDKs))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:supports ai:AgentFrameworks))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:supports ai:ResponsibleScalingPolicy))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:supports ai:RegulatoryConformityAssessment))

  ## Contrasting Relationships
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:contrastsWith ai:RewardHacking))
      SubClassOf(ai:AgentEvaluationBenchmarks
        ObjectSomeValuesFrom(ai:contrastsWith ai:StaticNLPBenchmark))

  ## About

  ### Historical Origins and Motivation

  Agent evaluation benchmarks arose from the recognition that static language-model benchmarks measure a fundamentally different capability than autonomous goal-directed action. A model that scores well on multiple-choice reasoning may still fail catastrophically when required to coordinate dozens of sequential tool calls, maintain state across a long context window, recover from tool errors mid-sequence, make irrecoverable decisions in live environments, and produce side-effects that accumulate across turns. The earliest agent-oriented evaluations grew out of the interactive code execution tradition exemplified by HumanEval (Chen et al., 2021) and MBPP, but those benchmarks evaluated single-function completion in isolation rather than multi-step goal pursuit. The transition to genuine agent evaluation required several innovations: interactive environments that the agent could modify (not just observe), verifiable success criteria that could not be gamed by surface-level text similarity, long-horizon tasks decomposable into discrete measurable subtasks, and reproducible sandboxed infrastructure so that results across different agent scaffolding approaches could be meaningfully compared.

  The field achieved its first mature exemplar with the WebArena paper (Zhou et al., 2024), which instantiated five real web applications — an e-commerce shop, a Reddit-style forum, a GitLab code repository, a content management system, and Wikipedia — in Docker containers, constructed 812 natural language tasks spanning multi-step navigation, form-filling, search, and cross-application workflows, and provided a graded automatic scoring system. Critically, WebArena used functional verification (checking the actual state of the sandboxed application after agent action) rather than string matching, making it far harder to game than prior benchmarks. The SWE-bench paper (Jimenez et al., 2024), published around the same time, achieved a different kind of ground truth: it curated 2,294 real GitHub issues from twelve popular Python repositories (Django, Flask, pytest, astropy, scikit-learn, and others), paired each issue with the actual developer-written patch and the test suite that distinguishes the broken from the fixed state, and evaluated agents on their ability to submit a patch that makes the failing tests pass without breaking existing tests. This approach gave SWE-bench an unusually robust evaluation signal: test-suite pass/fail is binary, deterministic, and directly reflects what developers actually care about, making it the de facto leaderboard for software engineering agents.

  ### The GAIA and OSWorld Generations

  GAIA (Mialon et al., 2024) addressed the general assistant capability axis: tasks requiring a combination of web search, file processing, code execution, and multi-step reasoning to arrive at a factual answer that could be verified against a human-annotated reference. GAIA's three difficulty levels (Level 1: straightforward web lookup; Level 2: multi-step reasoning across several tools; Level 3: complex multi-hop requiring sustained planning) provided a capability spectrum that allowed fine-grained progress tracking. The benchmark's explicit requirement for human-annotated reference answers and its continuous refresh from recent web content made contamination harder than for static knowledge benchmarks. OSWorld (Xie et al., 2024) moved evaluation to the full desktop computer-use domain: an agent interacts with a real operating system (Ubuntu or Windows) through screenshot observations and simulated keyboard/mouse actions, completing 369 tasks involving file management, application control (LibreOffice, Chrome, GIMP, VS Code), and cross-application workflows that mirror what a professional knowledge worker would do across a normal workday. OSWorld's success as a benchmark catalysed an entire sub-field of computer-use research and directly motivated Anthropic's development of the computer-use capability subsequently exposed through the Claude Agent SDK.

  ### Safety Evaluation: Time Horizons and Red-Teaming

  A parallel and equally important strand of evaluation focuses not on task success but on safety: what harmful actions might an agent take, how long can it operate autonomously before requiring human oversight, and how robust is it to adversarial prompts designed to redirect its actions? METR (Model Evaluation and Threat Research) developed HCAST (Human-Calibrated Autonomy Software Tasks) specifically to address the time-horizon question: by recruiting 140 skilled engineers to attempt the same tasks under controlled conditions, METR obtained empirical estimates of how long each task would take a skilled human, allowing them to situate AI agent performance in a human-relative frame. Their longitudinal findings — that the effective time horizon of frontier agents has been doubling every four months since 2024, with the capability frontier compressing from tasks that would take a human less than a minute to tasks taking hours — provide a concrete empirical basis for responsible scaling policies adopted by frontier labs.

  A critical and sometimes under-appreciated dimension is benchmark manipulation and [[Reward Hacking]]. UC Berkeley's Center for Responsible Decentralised Intelligence published research in 2025 demonstrating that an automated scanning agent could exploit scoring loopholes in all eight major agent benchmarks simultaneously — SWE-bench, WebArena, OSWorld, GAIA, Terminal-Bench, FieldWorkArena, CAR-bench, and AgentBench — achieving near-perfect scores without solving any of the underlying tasks. The mechanism in each case was different: in SWE-bench, a February 2026 audit found that 59.4% of the hardest tasks had tests that would pass even when the underlying bug remained unfixed, and roughly one-third of all SWE-bench issues contained solution hints in the issue comments themselves. This contamination problem prompted the community to introduce more rigorous anti-exploitation constraints, commission independent evaluation organisations (METR, AISI, Apollo Research), and adopt multi-scorer consensus protocols for high-stakes assessments.

  ### The Rapid Performance Escalation of 2024–2026

  The period from 2024 to mid-2026 witnessed arguably the fastest performance escalation on empirical AI benchmarks in the field's history. SWE-bench Verified SOTA moved from below 10% in early 2024 to 87.6% by mid-2026. GAIA top-1 moved from around 20% to 74.6%. OSWorld moved from around 10% to 73%. These improvements were driven by a combination of more capable base models (reasoning-mode models like o1, Claude 3.7, Gemini 2.5 Pro), significantly improved agent scaffolding (structured [[ReAct Pattern]] loops with automatic retry, better tool schemas, longer context), and dedicated fine-tuning for tool use and multi-step planning. The [[Chain-of-Thought]] and extended thinking capabilities of frontier models proved especially impactful for long-horizon tasks requiring decomposition and sub-goal tracking. METR's empirical doubling-time research documented that the model time horizon computed from SWE-bench Verified tasks follows an exponential trend, with a doubling time of approximately 70 days from late 2023 through mid-2025, accelerating above the long-run trend predicted by HCAST.

  However, the rapid performance escalation has also revealed a structural limitation: benchmark saturation. As SOTA approaches or exceeds human performance on a benchmark, the benchmark loses its discriminative power for frontier model comparison, and the community must move to harder tasks. This dynamic drove the creation of SWE-bench Verified (a harder curated subset), ARC-AGI-2 (to replace ARC-AGI-1 after it was cracked by reasoning models in late 2024), and ultimately ARC-AGI-3 (launched March 2026, with all frontier systems below 1%). The ecosystem has learned to treat any benchmark not as a permanent measuring standard but as a temporary probe that must be continually refreshed or replaced as the capability frontier advances.

  ## Major Benchmark Families

  ### Software Engineering Benchmarks

  **[[SWE-bench]] (Jimenez et al., 2024)**
  - 2,294 real GitHub issues across twelve Python repositories (Django, Flask, pytest, scikit-learn, astropy, sympy, sphinx, pylint, pydicom, and others)
  - Success criterion: submitted patch makes failing tests pass without breaking other tests; fully automated verification via Docker-sandboxed test execution
  - SWE-bench Verified: 500-instance human-validated subset with manual quality checks and coarse completion-time labels (<15 minutes, 15 minutes to 1 hour, 1 to 4 hours, >4 hours)
  - SOTA as of mid-2026: 87.6% (Claude Opus 4.7) on Verified; leaderboard maintained at vals.ai and Princeton HAL
  - Known vulnerability: February 2026 OpenAI audit found 59.4% of hardest tasks have tests that pass even without fixing the underlying bug

  **[[Terminal-Bench]]**
  - Command-line task completion in a sandboxed shell environment
  - Tests file manipulation, package installation, process management, environment configuration, and system-level scripting
  - Particularly relevant for SRE agents and infrastructure automation use cases
  - Includes tasks that require multi-command pipelines and error recovery after failed commands

  **HumanEval / MBPP**
  - Function-level code generation from docstrings; SOTA >99%; largely saturated as of 2025
  - No longer considered a meaningful agent signal but retained for model comparison continuity
  - HumanEval+ and similar extensions add edge-case tests and adversarial inputs to restore discriminative power

  **EnterpriseBench / Corecraft (ICLR 2026)**
  - High-fidelity RL environments targeting enterprise workflows (ERP systems, CRM integrations, document processing)
  - Designed to resist the kind of reward hacking that affected consumer-facing benchmarks
  - Tasks calibrated to real enterprise deployment requirements including multi-step approval workflows

  ### Web and GUI Benchmarks

  **[[WebArena]] (Zhou et al., 2024)**
  - 812 tasks across five sandboxed real web applications: Shopping (OpenCart), Social Forum (Reddit clone), Development (GitLab), CMS (Drupal), and Knowledge (Wikipedia)
  - Tasks require multi-step navigation, form-filling, cross-application data synthesis, and state verification
  - SOTA progress: from 14.41% baseline in 2024 to 61.7% (IBM CUGA) by early 2025
  - Full Docker deployment for reproducibility; grading via functional state inspection rather than text matching

  **[[OSWorld]] (Xie et al., 2024)**
  - 369 tasks on a live Windows or Ubuntu desktop accessed via VM screenshot plus simulated keyboard/mouse action API
  - Task domains: file management, email, calendar, LibreOffice (Writer, Calc, Impress), Chrome, GIMP, VS Code, and cross-application workflows
  - SOTA 73% by mid-2026, a massive improvement from ~10% at initial release
  - Inspired Anthropic's development of the computer-use capability and the [[Computer Use]] API

  **ScreenSpot / Mind2Web**
  - Web element localisation and GUI element understanding; tests the perceptual grounding needed before any navigation action
  - Mind2Web: 2,000 tasks from 137 real websites with human-annotated action sequences

  **WorkArena / AssistGUI**
  - Enterprise GUI automation specifically targeting ServiceNow and Microsoft Office workflows
  - Reflects the business process automation use case rather than general web navigation

  ### General Assistant Benchmarks

  **[[GAIA Benchmark]] (Mialon et al., 2024)**
  - Factual multi-hop tasks requiring combination of web search, file processing, code execution, and sustained reasoning
  - Three difficulty levels; Level 3 tasks can require ten or more sequential tool calls across multiple web sources
  - Reference answers human-annotated; leaderboard maintained at Princeton HAL (Holistic Agent Leaderboard)
  - SOTA 74.6% (Claude Sonnet 4.5, mid-2026); Anthropic models occupy top six positions
  - Designed for contamination resistance: tasks reference recent web content and require multi-modal processing

  **[[AgentBench]] (Liu et al., 2024)**
  - Eight heterogeneous environments: operating system shell, database (SQL), web browsing, knowledge graph navigation, card games, lateral-thinking puzzles, house-holding, and a web shopping simulation
  - Tests generalisation breadth across modalities and action spaces
  - Revealed stark generalisation gaps: models that scored well on one environment often failed on others, motivating research into transfer learning for agents

  **[[VitaBench]] (ICLR 2026)**
  - 400 tasks: 100 cross-scenario tasks and 300 single-scenario tasks
  - Grounded in three real-world application domains: food delivery, in-store consumption, and online travel services
  - 66 tools; tasks require proactive clarification of ambiguous instructions, tracking shifting user intent, and reasoning across temporal and spatial dimensions
  - Evaluation via rubric-based sliding-window evaluator, enabling robust assessment of diverse solution pathways in stochastic interaction environments
  - Best models achieve <30% on cross-scenario tasks (ICLR 2026); reflects the difficulty of real-world service interaction
  - VitaBench 2.0 (arXiv 2605.27141): extends to personalised and proactive agents in long-term user interaction sessions

  ### Safety and Time-Horizon Benchmarks

  **[[METR HCAST]] (METR, 2025)**
  - ~230 software tasks calibrated against 563 skilled human attempts by 140 participants with relevant domain expertise
  - Provides human time-calibrated reference: tasks are annotated by median human completion time, enabling direct AI-to-human comparison
  - Primary measurement: effective time horizon — the longest task completable at ≥50% pass@1
  - Longitudinal finding: frontier model time horizon has doubled approximately every 4 months since mid-2024, accelerating above the long-run 7-month doubling trend documented back to 2019
  - Used by frontier labs (Anthropic, OpenAI, Google DeepMind) in responsible scaling policy commitments as a gating criterion for expanded autonomy

  **[[TAU-bench]]**
  - Tool-agent-user interaction benchmark; measures policy adherence in multi-turn conversations with simulated users
  - Tasks: customer service scenarios with explicit policy constraints (return policies, eligibility rules, approval thresholds)
  - Evaluates whether agents follow organisational policy even when users pressure them to deviate
  - Particularly relevant for deploying agents in regulated business contexts (financial services, healthcare, insurance)

  **ARC-AGI-1 / 2 / 3 (ARC Prize)**
  - Procedurally generated visual reasoning puzzles requiring abstraction from a few examples
  - ARC-AGI-1: exceeded human baseline by reasoning-mode frontier models in late 2024, effectively retired
  - ARC-AGI-2: SOTA 77.1% (Gemini 3.1 Pro, February 2026); tests harder abstract pattern induction
  - ARC-AGI-3: launched March 2026; all frontier systems below 1%; tests aspects of abstract reasoning not yet captured by current architectures

  **OWASP Agentic Application Top 10 (2026)**
  - Red-team evaluation suite targeting adversarial vulnerabilities in deployed agents
  - Tests: prompt injection, data exfiltration, content policy bypass, decision and behaviour manipulation, denial of service, system and tool compromise, content injection
  - Adopted by enterprise security teams as a pre-deployment checklist for production agent systems

  ### Evaluation Frameworks

  **[[inspect_ai]] (UK AISI)**
  - Open-source Python framework for reproducible LLM and agent evaluations
  - Primitives: Dataset → Task → Solver → Scorer; supports multi-turn agent workflows with full tool integration
  - Built-in Docker sandboxing for code execution; optional Kubernetes and Proxmox adapters
  - 200+ pre-built evaluation suites in inspect_evals repository, co-maintained with Arcadia Impact and the Canadian Vector Institute
  - Adopted by METR, Apollo Research, other government AISIs, and multiple frontier safety labs
  - VS Code log viewer and web-based Inspect View for interactive result analysis

  **AgentEval / LangSmith / Braintrust**
  - Commercial evaluation platforms providing continuous regression testing for production agents
  - Enable CI/CD integration so that agent capability regressions are caught on every model or scaffold update
  - Support custom rubric definition, human annotation review, and dataset versioning

  **Princeton HAL (Holistic Agent Leaderboard)**
  - Aggregates results from GAIA and related general-assistant benchmarks
  - Provides standardised submission and verification protocol to reduce self-reported score inflation
  - Leaderboard maintained at hal.cs.princeton.edu

  ## Use Cases / Major Deployment Contexts

  Agent evaluation benchmarks serve several distinct stakeholder groups with different primary use cases:

  **Frontier Lab Research and Development**
  The primary use of benchmarks by Anthropic, OpenAI, Google DeepMind, Mistral, and similar organisations is as empirical progress trackers during model training and fine-tuning. Teams run SWE-bench Verified and GAIA after each major training checkpoint to confirm capability improvements, detect regressions, and identify capability gaps to address in subsequent training cycles. METR HCAST plays a special role: frontier labs commit in their responsible scaling policies (RSPs) to run HCAST-class evaluations before deploying models that exceed specified capability thresholds, and to pause or restrict deployment if evaluations indicate the capability-safety balance has shifted unfavourably.

  **Enterprise Model Selection**
  Enterprise teams selecting a [[Foundation Models|foundation model]] for their agent deployment use benchmark scores as a first-pass filter before internal evaluation. SWE-bench Verified is the standard signal for teams building software engineering agents; GAIA for research assistant agents; TAU-bench for customer service agents; OSWorld for computer-use automation. Critically, enterprise buyers are learning to discount scaffold-specific scores: a model that achieves 87% on SWE-bench with a purpose-built scaffold may perform significantly differently when integrated into the enterprise's own [[Agent Harness]].

  **[[Agent Development SDKs]] Vendor Validation**
  SDK vendors run VitaBench, TAU-bench, and WebArena against their managed infrastructure to demonstrate to enterprise customers that their tool-calling fidelity, session management, and multi-turn coherence meet production requirements. Strands Agents, Google ADK, and the Claude Agent SDK all report benchmark performance as part of their enterprise marketing material.

  **Independent Safety Assessment**
  METR conducts pre-deployment evaluations for frontier labs using a private held-out evaluation set distinct from any public leaderboard. Apollo Research uses [[inspect_ai]] to build custom safety evaluations examining propensity for deceptive behaviour, sandbagging (deliberately performing below capability), and unsafe autonomous action. These private evaluations are the ones most directly connected to regulatory conversations about responsible deployment.

  **Academic Progress Tracking**
  The research community uses public leaderboards (vals.ai for SWE-bench, Princeton HAL for GAIA, benchmarkingagents.com for the landscape overview) to track field-wide progress, identify research bottlenecks, and motivate new benchmark creation. The community practice of publishing benchmark scores alongside model papers has established a norm of empirical accountability that makes it harder to overclaim capabilities.

  **Regulatory and Policy Applications**
  The EU AI Act implementing acts, expected 2026 to 2027, are anticipated to reference specific benchmark thresholds as part of conformity assessment requirements for high-risk agentic systems. The UK AI Safety Institute's work on [[inspect_ai]] and its adoption by METR positions it as a potential standard for regulated assessment. NIST AI RMF updates under development in 2025 to 2026 are expected to incorporate agent benchmark coverage as a recommended practice for AI risk management in enterprise deployments.

  ## Academic Context

  The theoretical underpinnings of agent evaluation draw on several research traditions:

  **Behavioural Economics and Human Factors**: METR's calibration of tasks against human performance draws on industrial psychology traditions for assessing cognitive work, specifically the time-and-motion study heritage adapted for knowledge work. The conceptual innovation is to treat human completion time as a gold-standard unit of difficulty, sidestepping the need for subjective difficulty ratings.

  **Formal Verification**: For domains where correctness is formally decidable (test-suite pass/fail in SWE-bench; correct final state in WebArena), agent benchmarks inherit the epistemological rigour of formal methods — a verifiable outcome is harder to inflate than a human-judged quality score. This is why SWE-bench Verified is generally considered more reliable than benchmarks where LLM judges score agent outputs.

  **Reinforcement Learning Curriculum Design**: The theoretical literature on curriculum learning (Bengio et al., 2009) informs benchmark construction: tasks should span a range of difficulties such that the benchmark remains discriminative even as capability advances. ARC-AGI's evolution through three generations reflects this principle — each generation is designed to remain unsolved by the current frontier.

  **Information Theory and Benchmark Compression**: The field has increasingly recognised that aggregating benchmark scores into a single number loses important distributional information. METR HCAST's time-horizon framing is an information-theoretically motivated compression: rather than reporting pass rates across tasks of varying difficulty, it reports the single threshold task-length at which the agent's pass rate crosses 50%, a more interpretable and less gameable summary statistic.

  Key papers establishing the field:
  - Chen et al. (2021) HumanEval: first widely-adopted code generation benchmark with functional tests
  - Jimenez et al. (2024) SWE-bench: real-world issue resolution as agent evaluation
  - Zhou et al. (2024) WebArena: sandboxed web navigation at scale
  - Liu et al. (2024) AgentBench: heterogeneous multi-environment evaluation
  - Mialon et al. (2024) GAIA: verified factual multi-step reasoning
  - Xie et al. (2024) OSWorld: full desktop computer-use evaluation
  - METR (2025) HCAST: human-calibrated time-horizon measurement
  - VitaBench team (ICLR 2026): real-world service interaction evaluation
  - Wang et al. (2025) 2025 AI Agent Index: landscape survey of deployed systems

  ## Current Landscape (2026)

  As of mid-2026, the benchmark ecosystem has matured into a stratified structure serving different evaluation needs. Six benchmarks are considered essential for production deployment decisions by practitioners: GAIA (general assistant quality and multi-hop reasoning), SWE-bench Verified (software engineering capability), OSWorld (computer-use and desktop automation), [[TAU-bench]] (service-agent policy adherence in regulated contexts), WebArena (browser navigation and web interaction), and METR HCAST (time-horizon safety assessment). ARC-AGI-3 serves as a long-range aspirational probe of abstract reasoning that is not expected to be solved by any current architecture family. Terminal-Bench fills the command-line automation niche relevant for DevOps and SRE use cases. VitaBench provides the most rigorous evaluation of real-world service-interaction complexity.

  The community faces two structural challenges that have intensified with the rapid capability improvement:

  (1) **Benchmark contamination**: As pretraining corpora grow to include ever more of the web, more benchmark-adjacent content leaks into training data, inflating scores in ways that reflect memorisation rather than generalisation. Dynamic benchmark generation (ARC-AGI's procedural approach, GAIA's continuous content refresh) is the primary mitigation strategy.

  (2) **[[Reward Hacking]] and scaffold specificity**: The UC Berkeley automated-exploitation research (2025) demonstrated that optimised scaffolding can exploit scoring ambiguities across all major benchmarks simultaneously, achieving near-perfect scores without solving any underlying tasks. Even without deliberate exploitation, scaffold tuning — adjusting prompt templates, tool descriptions, retry strategies, and context management specifically for a benchmark — can inflate scores dramatically relative to general deployment performance. In response, METR maintains a private held-out evaluation set used only for pre-deployment assessments, distinct from any public leaderboard and with strict anti-leakage protocols.

  Infrastructure tooling has professionalised considerably. GPU cloud providers (Spheron, Lambda, RunPod) now offer one-click benchmarking deployments for SWE-bench, GAIA, and OSWorld at scale, with per-run cost tracking and reproducible container images. The [[inspect_ai]] framework's VS Code integration and web viewer have made it practical for individual researchers to run and iterate on evaluations without dedicated infrastructure teams. Commercial platforms (LangSmith, Braintrust, AgentEval) provide CI/CD-integrated regression testing that enterprise teams use to catch capability regressions in production agent systems without running full public benchmark suites on every release.

  ## UK Context

  The United Kingdom has played an outsized role in the agent evaluation benchmark ecosystem relative to its size, primarily through the UK AI Security Institute (AISI, later restructured within DSIT during 2025). The [[inspect_ai]] framework developed by AISI has become the dominant open-source evaluation infrastructure globally, backed by a collaborative development model with Arcadia Impact and the Canadian Vector Institute, and adopted by METR, Apollo Research, and multiple international government safety bodies. The UKGovernmentBEIS/inspect_ai and UKGovernmentBEIS/inspect_evals GitHub repositories, which host 200+ pre-built evaluations, are among the most forked AI evaluation repositories in the world.

  The Alan Turing Institute hosted the UK Multi-Agent Systems Symposium 2025 (UK-MAS) in collaboration with King's College London's Institute for Artificial Intelligence, featuring contributed research on statistical hypothesis testing for probabilistic agent models — work that directly addresses the benchmark reliability problem by enabling formal detection of model inadequacy rather than relying solely on benchmark score thresholds. This symposium attracted researchers from Edinburgh, Oxford, Cambridge, Imperial College London, UCL, Manchester, and Sheffield, reflecting the breadth of UK multi-agent systems research.

  Imperial College London's partnership with Lenovo for the London AI Technology Centre at White City Deep Tech Campus includes agent capability assessment as a core research strand, with particular focus on safety-critical deployment contexts in healthcare and infrastructure where benchmark rigour is a regulatory requirement. Edinburgh University, as a founding Turing Institute member and part of the UKRI-funded national generative AI hub, has active research on agent evaluation methodology, including the question of how to construct benchmarks that remain discriminative as capability improves — directly addressing the saturation problem that drives ARC-AGI's generational evolution.

  UCL leads the national generative AI hub consortium spanning Imperial, Cardiff, Cambridge, Oxford, Manchester, Edinburgh, and Surrey. Within this network, cross-institutional evaluation methodology is an active research theme, including the development of agreed protocols for multi-modal agent evaluation that could inform EU AI Act conformity assessment frameworks. In Northern England, Manchester and Sheffield's industrial AI programmes are beginning to apply agent benchmarks as procurement criteria for automated process agents in manufacturing and logistics, with [[TAU-bench]] policy adherence emerging as particularly relevant for supply-chain decision agents operating within compliance constraints.

  ## Future Directions (2026–2030)

  - **Dynamic benchmark generation**: procedural environment synthesis making contamination structurally impossible; extends the ARC-AGI approach to software engineering and web navigation domains
  - **Longitudinal evaluation**: tracking agent performance over week-scale tasks requiring persistent memory, external tool state management, and coordination with human collaborators — a dimension not captured by any current benchmark
  - **Adversarial co-evolution**: benchmarks that update in response to agent strategies (similar to competitive programming leaderboards), maintaining discriminative power through an evolutionary arms race
  - **Multi-agent evaluation**: benchmarks measuring coordination quality, specialisation, role division, and emergent capability in agent collectives, not just individual agent competence — critical for the [[Multi-Agent Orchestration Frameworks]] ecosystem
  - **Physical and embodied extension**: extending evaluation from digital environments to robot manipulation (IsaacLab, RLBench), factory control systems, and mixed physical-digital tasks combining computer-use with physical robot action
  - **Regulatory standardisation**: NIST AI RMF updates and EU AI Act implementing acts expected 2026 to 2027 are anticipated to mandate specific benchmark coverage for high-risk agentic deployments, creating a new class of compliance-driven evaluation requirements
  - **Economic and societal impact measurement**: moving beyond task success rates to measure the actual economic value delivered by agents in real deployments, providing a bridge between laboratory evaluation and business case assessment

  ## Benchmark Saturation Dynamics and Evolution

  The rapid capability improvement documented from 2024 to 2026 has forced the benchmark community to confront a structural challenge: benchmarks saturate. Once SOTA exceeds approximately 80-85% on a benchmark, the remaining tasks tend to be those where the evaluation mechanism itself is flawed (tests that pass even without fixing the bug, reference answers that accept multiple valid phrasings, tasks with ambiguous ground truth), rather than tasks that genuinely probe the next frontier of capability. This saturation dynamic creates a predictable lifecycle for each benchmark:

  **Phase 1: Introduction and initial adoption (months 1-12 after publication)**
  - Benchmark is published with SOTA typically in the 10-30% range
  - Community validates the benchmark design; identifies and fixes scoring bugs
  - Multiple teams independently replicate published baselines
  - SOTA improves rapidly as teams apply better scaffolding and more capable base models

  **Phase 2: Active competition and differentiation (months 12-30)**
  - SOTA reaches 40-70% range; the benchmark effectively differentiates frontier models
  - Multiple leaderboards emerge; independent evaluation organisations begin including it in assessment suites
  - Benchmark design flaws become apparent at the tail: tasks where the scoring mechanism can be gamed, tasks with scoring ambiguity, tasks where contamination is detectable
  - Original benchmark authors publish fixes, curated subsets, or verification protocols (SWE-bench → SWE-bench Verified)

  **Phase 3: Approaching saturation (months 30-48)**
  - SOTA reaches 75-85%
  - Remaining gap is increasingly attributable to evaluation mechanism flaws rather than agent capability gaps
  - Community begins planning next-generation benchmark; ARC-AGI-1 → ARC-AGI-2 → ARC-AGI-3 is the clearest example
  - Benchmark remains useful for certifying model quality (any model scoring below 60% is clearly not frontier) but loses differentiating power at the top

  **Phase 4: Retirement or supplement**
  - New benchmark launched that probes the next capability frontier
  - Old benchmark retained for historical comparison and baseline certification
  - Community consensus shifts to new benchmark as the primary competitive signal

  Understanding this lifecycle is important for interpreting leaderboard scores: a model that scores 87.6% on SWE-bench Verified in mid-2026 is not necessarily 87.6% "good" at software engineering in absolute terms — it means it performs well on the specific tasks and scoring mechanism of SWE-bench Verified, a benchmark that is approaching Phase 3 saturation and is likely to be supplemented or replaced within the next 12-18 months.

  ## Key Terminology

  - **Pass@k**: the probability that at least one of k independent agent rollouts on a task succeeds; used to separate capability from reliability in evaluation
  - **Time horizon**: the longest task completable at ≥50% pass@1; METR's preferred summary statistic for measuring agent autonomy capability
  - **Scaffold**: the agent loop, prompt templates, tool definitions, retry logic, and context management strategy wrapping the model; performance on benchmarks is always scaffold-specific as well as model-specific
  - **Functional verification**: grading based on the actual state of the environment after agent action, as opposed to string matching against reference outputs; more robust but more expensive to implement
  - **Reward hacking**: achieving high benchmark scores by exploiting scoring ambiguities or test-suite weaknesses rather than actually solving the intended task; a persistent challenge for all automated evaluation
  - **SWE-bench Verified**: the human-validated 500-instance subset of SWE-bench; the standard leaderboard target as of 2025 to 2026
  - **HCAST**: Human-Calibrated Autonomy Software Tasks; METR's framework for calibrating AI task performance against skilled human baselines

  ## Research and Literature

  1. Jimenez, C., Yang, J., Wettig, A., Yao, S., Pei, K., Press, O., & Narasimhan, K. (2024). SWE-bench: Can Language Models Resolve Real-World GitHub Issues? *ICLR 2024*. https://arxiv.org/abs/2310.06770
  2. Zhou, S., Xu, F.F., Zhu, H., Zhou, X., Lo, R., Sridhar, A., & Neubig, G. (2024). WebArena: A Realistic Web Environment for Building Autonomous Agents. *ICLR 2024*. https://arxiv.org/abs/2307.13854
  3. Liu, X., Yu, H., Zhang, H., Xu, Y., Lei, X., Lai, H., & Tang, J. (2024). AgentBench: Evaluating LLMs as Agents. *ICLR 2024*. https://arxiv.org/abs/2308.03688
  4. Mialon, G., Fourrier, C., Swift, C., Wolf, T., LeCun, Y., & Scialom, T. (2024). GAIA: A Benchmark for General AI Assistants. *ICLR 2024*. https://arxiv.org/abs/2311.12983
  5. Xie, T., Zhang, D., Chen, J., Li, X., Zhao, S., Cao, R., & Yu, T. (2024). OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments. *NeurIPS 2024*. https://arxiv.org/abs/2404.07972
  6. Chen, M., Tworek, J., Jun, H., et al. (2021). Evaluating Large Language Models Trained on Code (HumanEval). *arXiv 2107.03374*. https://arxiv.org/abs/2107.03374
  7. OpenAI (2024). Introducing SWE-bench Verified. https://openai.com/index/introducing-swe-bench-verified/
  8. METR (2025). HCAST: Human-Calibrated Autonomy Software Tasks. https://metr.org/hcast.pdf
  9. METR (2025). Measuring AI Ability to Complete Long Tasks. *arXiv 2503.14499*. https://arxiv.org/abs/2503.14499
  10. UK AI Security Institute (2024–2026). inspect_ai: A Framework for Large Language Model Evaluations. https://github.com/UKGovernmentBEIS/inspect_ai
  11. VitaBench Authors (2025). VitaBench: Benchmarking LLM Agents with Versatile Interactive Tasks in Real-world Applications. *ICLR 2026*. https://arxiv.org/abs/2509.26490
  12. VitaBench 2.0 (2026). Evaluating Personalized and Proactive Agents in Long-Term User Interactions. *arXiv 2605.27141*. https://arxiv.org/abs/2605.27141
  13. Wang, X. et al. (2025). The 2025 AI Agent Index: Documenting Technical and Safety Features of Deployed Agentic AI Systems. *arXiv 2602.17753*. https://arxiv.org/abs/2602.17753
  14. Benchmarking Agents (2026). AI Agent Benchmarks 2026: Complete Overview. https://benchmarkingagents.com/agent-benchmarks/
  15. Kili Technology (2026). AI Benchmarks 2026: Top Evaluations and Their Limits. https://kili-technology.com/blog/ai-benchmarks-guide-the-top-evaluations-in-2026-and-why-theyre-not-enough
  16. MarkTechPost (2026). Top 7 Benchmarks That Actually Matter for Agentic Reasoning in Large Language Models. https://www.marktechpost.com/2026/04/26/top-7-benchmarks-that-actually-matter-for-agentic-reasoning-in-large-language-models/
  17. Decode the Future (2026). AI Agent Benchmarks 2026: 6 Tests That Matter. https://decodethefuture.org/en/ai-agent-benchmarks-2026/
  18. Spheron Network (2026). AI Agent Benchmarking Infrastructure on GPU Cloud: Run SWE-bench, GAIA, Terminal-Bench, and OSWorld at Scale. https://www.spheron.network/blog/ai-agent-benchmarking-gpu-cloud-swebench-gaia/
  19. Wang, H. (2026). How We Broke Top AI Agent Benchmarks: And What Comes Next. https://moogician.github.io/blog/2026/trustworthy-benchmarks-cont/
  20. Rapid Claw (2026). AI Agent Benchmarks 2026: SWE-bench, GAIA. https://rapidclaw.dev/blog/ai-agent-benchmarks-2026
  21. Cheng, B. et al. (2026). EnterpriseBench Corecraft: Training Generalizable Agents on High-Fidelity RL Environments. *arXiv 2602.16179*. https://arxiv.org/abs/2602.16179
  22. BRIDGE Authors (2026). Predicting Human Task Completion Time From Model Performance. *arXiv 2602.07267*. https://arxiv.org/abs/2602.07267
  23. Beyond Accuracy Authors (2025). A Multi-Dimensional Framework for Evaluating Enterprise Agentic AI Systems. *arXiv 2511.14136*. https://arxiv.org/abs/2511.14136
  24. Hierarchy of Agentic Capabilities Authors (2026). Evaluating Frontier Models on Realistic RL Environments. *arXiv 2601.09032*. https://arxiv.org/abs/2601.09032
  25. Alan Turing Institute (2025). UK Multi-Agent Systems Symposium 2025 (UK-MAS). https://www.turing.ac.uk/events/uk-multi-agent-systems-symposium-2025-uk-mas
  26. Agent Data Protocol Authors (2025). Unifying Datasets for Diverse, Effective Fine-tuning of LLM Agents. *arXiv 2510.24702*. https://arxiv.org/abs/2510.24702
  27. vals.ai (2026). SWE-bench Verified Leaderboard. https://www.vals.ai/benchmarks/swebench
  28. Beyond pass@1 Authors (2026). A Reliability Science Framework for Long-Horizon LLM Agents. *arXiv 2603.29231*. https://arxiv.org/abs/2603.29231

  ## Integration with Agent Harness Ecosystem

  [[Agent Evaluation Benchmarks]] do not operate in isolation from the [[Agent Harness]] and [[Agent Development SDKs]] ecosystem — they are deeply interdependent in both directions:

  **Benchmarks as harness consumers**: agent benchmarks must instantiate a complete [[Agent Harness]] to run evaluations, including a model invocation layer, [[Tool Use]] dispatch, session management, and in many cases [[Agent Execution Sandboxes]] for safe code execution. The choice of harness significantly affects benchmark scores: the same model with a more sophisticated harness (better retry logic, better context management, better tool schemas) will score higher on the same benchmark. This is the "scaffold specificity" problem: benchmark results always reflect model + harness, never model alone. The most rigorous evaluation programmes (METR, AISI) address this by mandating a standardised reference harness and requiring scaffold disclosure in submitted results.

  **Benchmarks driving harness requirements**: the capability requirements revealed by benchmarks shape what features harness developers invest in. SWE-bench's requirement for reliable test-suite execution drove investment in Docker-sandboxed code execution environments, now a standard feature of all major [[Agent Execution Sandboxes]] products (E2B, Daytona, Docker MCP Gateway). WebArena's requirement for browser interaction drove investment in browser-automation tool implementations. OSWorld's requirement for full desktop control drove Anthropic's development of the computer-use API and its exposure through the [[Claude Agent SDK]].

  **[[inspect_ai]] as the bridge**: the [[inspect_ai]] framework explicitly bridges the gap between benchmark definition and harness execution. A benchmark implemented in [[inspect_ai]] can be run against any model and any harness configuration that [[inspect_ai]] supports, enabling controlled comparison across harnesses. The framework's pluggable Solver architecture means that an [[inspect_ai]] evaluation can run an agent using the [[Claude Agent SDK]], [[Google ADK]], or a custom harness, with the only change being the Solver configuration. This portability is why [[inspect_ai]] has become the standard evaluation infrastructure across the UK AISI, METR, Apollo Research, and the broader safety research community.

  **Cross-benchmark agent portfolios**: in practice, enterprise teams deploying agents use benchmarks not individually but as a portfolio covering different capability axes. A typical enterprise agent portfolio assessment in 2026 covers: SWE-bench Verified (coding capability), GAIA Level 2 (research assistant quality), TAU-bench (policy adherence), WebArena (web navigation), and a custom internal benchmark derived from the enterprise's actual task distribution. The portfolio score reveals capability-reliability trade-offs: a model might score 87% on SWE-bench but only 45% on GAIA Level 3, suggesting strong coding capability with weaker multi-hop research quality.

  **Feedback loops into model training**: evaluation outcomes feed back into model training through two channels. First, benchmark performance gaps motivate targeted fine-tuning on the capability axis where performance is lowest. Second, agent trajectories from benchmark evaluations (especially long-horizon HCAST trajectories) provide high-quality training signal for reinforcement learning from human feedback (RLHF) and process reward models (PRMs) that teach models when to use tools, when to seek clarification, and when to escalate to human review. This feedback loop means that benchmarks do not merely measure progress — they actively shape it by directing the investment of training compute toward identified capability gaps.

  ## Formal Evaluation Methodology

  ### Scoring Taxonomies

  Agent evaluation benchmarks use three principal scoring approaches, each with distinct validity and reliability properties:

  **Functional verification (state-based grading)**
  - Most reliable and manipulation-resistant scoring approach
  - Applied in: SWE-bench (test-suite pass/fail), WebArena (application state inspection), OSWorld (file system and application state inspection)
  - Evaluates whether the agent's actions produced the correct final world state, regardless of the reasoning process
  - Immune to text similarity gaming; requires running the agent in a live environment and inspecting actual outcomes
  - Cost: requires sandboxed execution environments, Docker images per task, and automated state inspection code for each task domain

  **Reference answer verification (exact or fuzzy match)**
  - Applied in: GAIA (exact string match against human-annotated reference answers), some AgentBench environments
  - Faster and cheaper to implement than functional verification; suitable for tasks with unambiguous correct answers
  - Vulnerable to: surface paraphrase (agent produces a correct answer in a different format and fails), contamination (model memorises reference answers from training data)
  - GAIA mitigates contamination by drawing from recent web content and using tasks that require multi-step current-information retrieval

  **Rubric-based human or LLM judging**
  - Applied in: VitaBench (rubric-based sliding-window evaluator), TAU-bench (policy adherence rubric), enterprise benchmark suites
  - Flexible: can evaluate qualities like appropriateness, policy adherence, user satisfaction, and communication style that binary outcome metrics miss
  - Expensive at scale: human judges cost more per task than automated metrics; LLM judges introduce model-specific biases and are themselves susceptible to adversarial prompting
  - Reliability: inter-rater agreement must be measured and reported; VitaBench uses multi-annotator consensus with sliding window to handle partial credit across stochastic interaction trajectories

  ### Pass@k and Reliability Metrics

  The standard single-attempt pass@1 metric conflates capability (can the agent ever solve this task?) with reliability (does it solve the task consistently?). The "Beyond pass@1" framework (arXiv 2603.29231, 2026) proposes a reliability science approach:

  - **Pass@k**: probability that at least one of k independent rollouts succeeds; upper-bounds agent capability while revealing brittleness
  - **Pass@1**: the standard leaderboard metric; directly measures deployment reliability for single-attempt use cases
  - **Consistency@k**: fraction of k rollouts that all succeed; measures reliability of a deterministic deployment
  - **Coverage@n**: fraction of a benchmark's tasks for which the agent achieves pass@1 > 50% (the agent can "reliably" solve these); complements the average pass@1 by revealing task coverage gaps
  - **Reliability under distribution shift**: pass@1 on a held-out task sample drawn from a different distribution than the development set; measures generalisation

  ### The Contamination Problem in Detail

  Benchmark contamination occurs through multiple channels and has become a major methodological concern as pretraining corpora have grown to include much of the indexed web:

  **Direct contamination**: benchmark tasks (or paraphrases of them) appear verbatim in pretraining data, enabling memorisation rather than generalisation
  - SWE-bench mitigation: tasks are GitHub issues from real repositories; the issue text and related code appear in pretraining corpora, motivating the SWE-bench Lite and SWE-bench Verified curation to remove easily leaked tasks
  - GAIA mitigation: tasks reference recent web content (post-training-cutoff) requiring current retrieval; tasks are never published in full; reference answers are not public during active evaluation periods

  **Indirect contamination**: model has seen similar tasks during training, enabling a form of "type learning" rather than true generalisation
  - ARC-AGI addresses this via procedural generation: every ARC-AGI task is a unique visual puzzle generated by a rule engine, never seen in any corpus
  - METR HCAST maintains a private held-out set with strict non-disclosure

  **Scaffold contamination**: the agent scaffold (prompt templates, few-shot examples, retry logic) is optimised specifically for the benchmark, inflating scores above what would be achieved with a general-purpose scaffold
  - This is the most difficult contamination form to detect or prevent, as it is always present to some degree
  - METR's approach: evaluate with a standardised scaffold to enable fair comparison; require detailed scaffold disclosure in submitted results

  ## Benchmark Design Principles and Anti-Patterns

  The agent evaluation benchmark community has accumulated substantial empirical knowledge about what makes a good benchmark and what design choices lead to inflated, misleading, or rapidly saturated results. The following principles represent the current consensus:

  **Principle 1: Ground truth must be computationally verifiable without human judgment wherever possible**
  Test-suite pass/fail (SWE-bench) and application state inspection (WebArena, OSWorld) are more reliable than LLM-judged correctness or human-rated quality. This is not because human judgment is inherently less valid but because automated verification enables (1) large-scale evaluation without prohibitive human annotation costs, (2) complete reproducibility across time and teams, and (3) resistance to adversarial prompting of the judge. The exception is rubric-based evaluation for qualities like policy adherence and communication style (TAU-bench, VitaBench) where no computable ground truth exists — but even here, the rubric should be designed to minimise inter-rater disagreement, and inter-rater agreement should be measured and published.

  **Principle 2: Tasks must probe the intended capability, not surface-level correlates**
  A common anti-pattern is designing tasks that are nominally about complex reasoning but can actually be solved by simple pattern matching against training data. HumanEval's saturation (>99% SOTA) is partly attributable to this: many of its function signatures, docstrings, and test cases appear verbatim or near-verbatim in code corpora that frontier models train on. SWE-bench was designed to be more resistant to this by using real GitHub issues whose exact resolution requires understanding of the specific codebase context, not just generic code completion. Benchmark designers should regularly audit their task set against current pretraining corpora to estimate contamination exposure.

  **Principle 3: The task distribution must match the target deployment distribution**
  Benchmarks optimised for a different task distribution than the deployment setting will produce misleading results. AgentBench's eight heterogeneous environments were designed specifically to test generalisation across diverse task types, revealing that models that perform well in one environment often fail in others. VitaBench was designed around three specific real-world service domains (food delivery, in-store consumption, online travel) rather than abstract academic tasks, precisely to ensure the task distribution reflects what service-interaction agents will actually face. Enterprise teams should construct internal benchmarks that sample from their actual task distribution rather than relying solely on public benchmarks.

  **Principle 4: Evaluation must measure the target deployment configuration, not a purpose-optimised scaffold**
  The scaffold specificity problem means that reported benchmark scores always reflect a specific (model + scaffold) pair, never the model alone. The honest practice is to report the scaffold configuration alongside the score and to test multiple scaffold configurations to quantify the scaffold's contribution to the score differential. METR addresses this by mandating a standardised reference scaffold for HCAST evaluations, enabling fair comparison across models while acknowledging that real deployments use custom scaffolds.

  **Principle 5: Safety and capability evaluation must be integrated, not treated as orthogonal**
  A model that achieves high scores on capability benchmarks but scores poorly on safety benchmarks (adversarial prompt resistance, policy adherence, refusal quality) is not ready for unrestricted deployment. The OWASP Agentic Application Top 10 evaluation suite, the METR sabotage evaluation (CTRL-ALT-DECEIT, arXiv 2511.09904), and the Apollo Research deceptive alignment evaluations are specifically designed to test safety properties that standard capability benchmarks do not probe. Responsible deployment requires passing both capability and safety evaluation thresholds, a principle now encoded in the responsible scaling policies of major frontier labs.

  **Anti-pattern: Optimising scaffold specifically for a benchmark without disclosure**
  The most common integrity failure in agent benchmarking is optimising the scaffold — prompt templates, tool descriptions, retry logic, context management — specifically for benchmark tasks while presenting the resulting score as a measure of general capability. This creates inflated leaderboard numbers that do not generalise to real deployments. The mitigation is transparency: publish the complete scaffold configuration with each submission, enable independent replication, and require evaluation organisers to run a standardised reference scaffold on submitted models to provide an apples-to-apples comparison.

  **Anti-pattern: Single-attempt metrics for reliability-sensitive use cases**
  Reporting only pass@1 for applications where the agent will be deployed with multiple attempt opportunities (automated software patching with human review, research hypothesis generation) understates capability. Reporting only pass@k for applications requiring single-attempt reliability (customer service, medical information retrieval) overstates reliability. The correct practice is to match the evaluation protocol to the deployment setting.

  ## Benchmark Performance Table (Mid-2026 SOTA)

  The following represents verified best results on primary benchmarks as of mid-2026:

  **SWE-bench Verified (500 instances)**
  - SOTA: 87.6% — Claude Opus 4.7 (Anthropic, mid-2026)
  - Previous: ~75% (multiple systems, early 2026)
  - Baseline (Claude 2, 2023): 1.96%
  - Doubling time: approximately 70 days (late 2023 through mid-2025)
  - Leaderboard: vals.ai, Princeton HAL

  **GAIA (General AI Assistants)**
  - SOTA: 74.6% — Claude Sonnet 4.5 (Anthropic, mid-2026)
  - Anthropic models occupy top six positions on Princeton HAL leaderboard
  - Level 3 SOTA (hardest multi-hop tasks): approximately 45-55%
  - Baseline (GPT-4 with plugins, 2023): approximately 15%
  - Leaderboard: hal.cs.princeton.edu

  **OSWorld (Desktop Computer Use)**
  - SOTA: 73% (mid-2026)
  - Initial release baseline (GPT-4V, 2024): approximately 10%
  - Tasks requiring multi-application coordination remain harder (~50-60% SOTA)
  - Leaderboard: os-world.github.io

  **WebArena (Browser Navigation)**
  - SOTA: 61.7% — IBM CUGA (early 2025)
  - Initial release baseline: 14.41%
  - Leaderboard: webarena.dev

  **ARC-AGI-1**: Human baseline exceeded; effectively retired
  **ARC-AGI-2**: 77.1% — Gemini 3.1 Pro (February 2026)
  **ARC-AGI-3**: All frontier systems <1% (March 2026)

  **VitaBench (Real-World Service Interaction)**
  - Best models: <30% on cross-scenario tasks; <50% on single-scenario tasks (ICLR 2026)
  - Reflects the difficulty of real-world service-context planning with ambiguous user intent

  **METR HCAST (Time Horizon)**
  - Frontier model effective time horizon as of mid-2026: tasks estimated at 2-4 hours human time
  - Doubling rate: approximately every 4 months (2024-2025 acceleration)

  ## Evaluation Infrastructure Architecture

  A production-grade agent evaluation system implements the following pipeline:

  **Task Storage Layer**
  - Task definitions stored as structured YAML or JSON: task description, environment configuration (Docker image, initial file state, API credentials), success criteria (test script for SWE-bench-style, reference answer for GAIA-style, state check function for WebArena-style)
  - Version-controlled task datasets with immutable commits to enable reproducibility
  - Task metadata: difficulty tier, domain tag, estimated human completion time, known contamination risk level

  **Environment Provisioning Layer**
  - Docker image management: one container image per task category (Python dev environment, browser environment, desktop OS VM)
  - Container spin-up: cold start for each task run to ensure clean environment state; no state leakage between runs
  - [[Agent Execution Sandboxes]]: network egress restrictions (especially important for safety evaluations to prevent unexpected real-world API calls), filesystem isolation, process sandboxing
  - Resource limits: CPU, memory, and wall-clock time budgets per task; exceeded budgets count as failures

  **Agent Execution Layer**
  - Task prompt delivered to agent via the evaluation framework's Solver interface
  - Agent receives an observation-action loop: each observation is the current environment state (file content, terminal output, browser screenshot, application window); each action is a tool call (bash command, browser click, file write)
  - Maximum turn budget (e.g., 30 turns for SWE-bench) after which the agent is forced to submit; prevents infinite loops
  - Full trace logging: every model call (with token counts), every tool call (with latency), every observation

  **Scoring Layer**
  - Task-specific scorer function applied to the final environment state
  - For multi-rubric tasks: scorer aggregates multiple sub-scores (correctness, policy adherence, efficiency) into a final task score
  - Score validation: manual spot-check on a random sample of each scorer's outputs to catch systematic scorer bugs
  - Aggregation: mean pass@1 across tasks is the headline metric; breakdowns by difficulty tier, task domain, and tool category reveal capability gaps

  **Leaderboard Layer**
  - Submission protocol: teams submit agent configurations (scaffold code, model identifier, tool schemas) with a hash for reproducibility
  - Independent replication: evaluation maintainers run submitted configurations to verify reported scores
  - Anti-gaming controls: rate limits on submissions, mandatory scaffold disclosure, periodic human spot-check of agent trajectories

- ### Provenance
  - sources:: https://benchmarkingagents.com/agent-benchmarks/, https://metr.org/hcast.pdf, https://github.com/UKGovernmentBEIS/inspect_ai, https://arxiv.org/abs/2310.06770, https://arxiv.org/abs/2307.13854, https://arxiv.org/abs/2311.12983, https://arxiv.org/abs/2404.07972, https://arxiv.org/abs/2509.26490, https://arxiv.org/abs/2602.17753, https://kili-technology.com/blog/ai-benchmarks-guide-the-top-evaluations-in-2026-and-why-theyre-not-enough, https://www.turing.ac.uk/events/uk-multi-agent-systems-symposium-2025-uk-mas
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
