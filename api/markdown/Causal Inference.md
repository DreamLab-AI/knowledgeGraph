public:: true

# Causal Inference
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:causal-inference",
  "@type": "Page",
  "vc:slug": "causal-inference",
  "title": "Causal Inference",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:causal-inference",
  "@type": "Class",
  "label": "Causal Inference",
  "definition": "Causal inference is the scientific and statistical discipline concerned with drawing conclusions about cause-and-effect relationships from data, distinguishing genuine causal mechanisms from mere statistical association. It employs frameworks such as potential outcomes (Rubin causal model), structural causal models (Pearl's do-calculus), and graphical models (directed acyclic graphs) to formalise interventions and reason about counterfactuals. Applications span medicine, economics, social science, and AI alignment, wherever understanding the effect of an action — not merely its correlation with outcomes — is required.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:bayesian-inference",
    "label": "Bayesian Inference"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:bayesian-optimisation",
        "label": "Bayesian Optimisation"
      },
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      },
      {
        "@id": "urn:ngm:class:directed-acyclic-graph",
        "label": "Directed Acyclic Graph"
      },
      {
        "@id": "urn:ngm:class:instrumental-variables",
        "label": "Instrumental Variables"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:causal-language-modelling",
        "label": "Causal Language Modelling"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought-reasoning",
        "label": "Chain-of-Thought Reasoning"
      },
      {
        "@id": "urn:ngm:class:counterfactual-reasoning",
        "label": "Counterfactual Reasoning"
      },
      {
        "@id": "urn:ngm:class:algorithmic-fairness",
        "label": "Algorithmic Fairness"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:observational-data",
        "label": "Observational Data"
      },
      {
        "@id": "urn:ngm:class:confounding-variable",
        "label": "Confounding Variable"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:correlation-analysis",
        "label": "Correlation Analysis"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mathematical-reasoning",
        "label": "Mathematical Reasoning"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:randomised-controlled-trial",
        "label": "Randomised Controlled Trial"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:epidemiology",
        "label": "Epidemiology"
      },
      {
        "@id": "urn:ngm:class:econometrics",
        "label": "Econometrics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:causal-analysis",
      "label": "Causal Analysis"
    },
    {
      "@id": "urn:ngm:class:causal-modelling",
      "label": "Causal Modelling"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Causal inference is the body of statistical theory, mathematical formalism, and applied methodology dedicated to estimating cause-and-effect relationships from both experimental and observational data — answering not merely "what is associated with what?" but "what would happen if we intervened?" The field unifies two historically separate frameworks: the Rubin Causal Model (potential outcomes framework), which defines the average treatment effect (ATE) as the expected difference between potential outcomes under treatment and control for the same unit, and Judea Pearl's Structural Causal Model (SCM) with its do-calculus, which encodes causal structure in [[Directed Acyclic Graph]] (DAG) representations and provides an algebra for computing interventional distributions P(Y|do(X)) from observational data. Both frameworks converge on the core challenge of confounding: the distortion of naive associations by common causes of treatment and outcome that, if unaddressed, lead researchers to mistake correlation for causation. Identification strategies — randomised controlled trials, instrumental variables, regression discontinuity, difference-in-differences, propensity score matching, front-door and back-door adjustment — are the tools causal inference deploys to block confounding pathways and recover unbiased treatment effect estimates. The field is foundational to empirical science and policy evaluation in medicine, economics, epidemiology, political science, and sociology. Since 2020, it has become increasingly central to [[Automated Reasoning]] and [[Reinforcement Learning]] systems, where the ability to distinguish causal signal from spurious correlation is critical for out-of-distribution generalisation and robust decision-making. [[Bayesian Inference]] provides the probabilistic substrate for uncertainty quantification in causal estimation, while [[Algorithmic Fairness]] research relies on causal frameworks to distinguish legitimate from impermissible causal pathways in algorithmic decisions. Causal representation learning — the project of learning data representations that respect causal structure — and the integration of causal methods with [[Large Language Models]] represent the frontier of the field in 2025–2026, as researchers seek AI systems capable of genuine [[Counterfactual Reasoning]] rather than sophisticated pattern matching. The 2021 Nobel Prize in Economic Sciences, awarded to Joshua Angrist, David Card, and Guido Imbens for their work on natural experiments and causal identification, cemented causal inference's status as a mainstream paradigm in empirical economics and signals its growing influence across the quantitative sciences.

- ### Semantic Classification
  - owl-class:: ai:CausalInference
  - owl-role:: StatisticalMethodology | ReasoningParadigm | EvidenceSynthesisFramework
  - owl-inferred:: ai:CausalReasoningSystem, ai:EvidenceBasedPolicy, ai:CounterfactualReasoner
  - belongs-to-domain:: [[Bayesian Inference]]
  - implemented-in-layer:: [[Mathematical Reasoning]]

- ### Relationships
  - is-subclass-of:: [[Bayesian Inference]], [[Statistical Learning]], [[Mathematical Reasoning]], [[Inference]]
  - has-part:: [[Directed Acyclic Graph]], [[Instrumental Variables]], [[Potential Outcomes Framework]], [[Structural Causal Model]], [[Do-Calculus]], [[Propensity Score Matching]], [[Difference-in-Differences]], [[Causal Forest]], [[Counterfactual Reasoning]]
  - requires:: [[Observational Data]], [[Confounding Variable]], [[Probability Theory]], [[Graph Theory]], [[Randomised Controlled Trial]]
  - enables:: [[Causal Language Modelling]], [[Chain-of-Thought Reasoning]], [[Counterfactual Reasoning]], [[Algorithmic Fairness]], [[Policy Evaluation]], [[Reinforcement Learning]], [[Causal Representation Learning]]
  - implements:: [[Bayesian Inference]], [[Automated Reasoning]], [[Mathematical Reasoning]], [[Inference Algorithm]]
  - depends-on:: [[Directed Acyclic Graph]], [[Bayesian Optimisation]], [[Statistical Learning]], [[Probability Theory]]
  - supports:: [[Algorithmic Fairness]], [[AI Safety]], [[Reinforcement Learning from Human Feedback]], [[Causal Language Modelling]], [[Deep Reinforcement Learning]]
  - uses:: [[Directed Acyclic Graph]], [[Instrumental Variables]], [[Bayesian Optimisation]], [[Automated Reasoning]], [[Mathematical Reasoning]]
  - contrasts-with:: [[Correlation Analysis]], [[Associative Learning]], [[Pattern Recognition]]
  - related-to:: [[Randomised Controlled Trial]], [[Reinforcement Learning]], [[Inference]], [[Bayesian Decision Theory]], [[Bayesian Deep Learning]], [[Bayesian Knowledge Tracing]], [[Epidemiology]], [[Econometrics]]
  - standardized-by:: [[Mathematical Reasoning]], [[Probability Theory]], [[Statistical Learning]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:DirectedAcyclicGraph))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:InstrumentalVariables))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:PotentialOutcomesFramework))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:StructuralCausalModel))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:DoCalculus))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:PropensityScoreMatching))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:DifferenceInDifferences))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:CausalForest))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:CounterfactualReasoning))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:hasPart ai:RegressionDiscontinuity))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:requires ai:ObservationalData))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:requires ai:ConfoundingVariable))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:requires ai:ProbabilityTheory))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:requires ai:GraphTheory))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:requires ai:StatisticalModel))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:requires ai:IdentificationAssumption))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:requires ai:IgnorabilityCondition))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:CausalLanguageModelling))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:CounterfactualReasoning))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:AlgorithmicFairness))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:PolicyEvaluation))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:HeterogeneousTreatmentEffect))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:ChainOfThoughtReasoning))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:CausalReinforcementLearning))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:enables ai:CausalRepresentationLearning))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:implements ai:BayesianInference))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:implements ai:AutomatedReasoning))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:implements ai:MathematicalReasoning))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:implements ai:InferenceAlgorithm))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:implements ai:StatisticalIdentification))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:implements ai:EvidenceSynthesis))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:reducesTo ai:AssociationAnalysis))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:reducesTo ai:ProbabilisticInference))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:reducesTo ai:StatisticalEstimation))
    SubClassOf(ai:CausalInference
      ObjectSomeValuesFrom(ai:reducesTo ai:CounterfactualQuery))
    ```

  - ## About

    Causal inference addresses one of the most fundamental challenges in empirical science: how to move from observing patterns in data to understanding the mechanisms that produced them. The field rests on a simple but profound distinction — the difference between asking "what is associated with what?" (a statistical question answerable by correlation) and "what would happen if we intervened?" (a causal question that requires additional assumptions about mechanism). This distinction, formalised mathematically in the late twentieth century, revealed that conventional statistical methods were systematically ill-equipped to answer causal questions from observational data without additional structure.

    The intellectual lineage of causal inference spans over a century. Sewall Wright's path analysis (1918–1920) introduced graphical representations of causal structure in genetics, allowing researchers to distinguish direct and indirect effects in systems of interrelated variables. In economics, structural equation modelling (Haavelmo, 1944; Cowles Commission) represented causal mechanisms as algebraic equations, though the causal interpretation of these equations remained philosophically contested for decades. The field's modern foundations were laid in two partially independent traditions: Jerzy Neyman's (1923) and Donald Rubin's (1974, 1978) potential outcomes framework, which defines causal effects as contrasts between counterfactual outcomes under different treatment assignments, and Judea Pearl's graphical causal modelling programme (1988–2000), which provided a formal language — directed acyclic graphs, the do-operator, and do-calculus — for representing and reasoning about causal structure.

    Pearl's *Causality* (2000, second edition 2009) unified the graphical and potential-outcomes traditions and established the do-calculus as a complete algorithm for determining whether a causal quantity is identifiable from observational data given a causal graph. Pearl's hierarchy of causal reasoning — association (seeing), intervention (doing), and counterfactual (imagining) — provides a principled taxonomy of the questions that data analysis can and cannot answer without additional causal assumptions. This hierarchy has proved influential in AI alignment and evaluation research, where distinguishing associative pattern matching from genuine causal understanding is a central concern in assessing the reliability of large language models.

    The methodological history of causal inference in the second half of the twentieth century was characterised by disciplinary divergence: epidemiologists developed confounding adjustment methods for observational cohort studies; economists developed instrumental variable and natural experiment approaches; social scientists applied path analysis and structural equation modelling; biostatisticians developed survival analysis with time-varying confounders; and machine learning researchers largely ignored causation in favour of prediction. Pearl's structural causal model framework (1988–2009) provided for the first time a unified mathematical language that subsumed all these approaches, proved their theoretical equivalence in key cases, and identified precisely when and why each is applicable. The subsequent convergence of the field around DAGs, do-calculus, potential outcomes, and identification theory is the most significant methodological development in applied statistics since the development of maximum likelihood estimation.

    The 2021 Nobel Prize in Economic Sciences crystallised causal inference's status as a mainstream scientific paradigm. The Nobel Committee's citation for Joshua Angrist, David Card, and Guido Imbens described the "natural experiments" methodology as a genuinely new tool for answering causal questions in settings where randomised experiments are infeasible — applicable equally to labour economics, health economics, development economics, and public policy evaluation. The prize attracted attention from researchers across the quantitative sciences to causal identification as a distinct methodological challenge, accelerating adoption of causal methods in fields ranging from medicine to computer science.

  - ## Components and Architecture

    Causal inference consists of several interacting methodological components:

    **Frameworks:**
    - *Rubin Causal Model (Potential Outcomes):* Defines the individual treatment effect as ITE = Y(1) - Y(0) for each unit, where Y(1) and Y(0) are potential outcomes under treatment and control. The fundamental problem of causal inference — only one potential outcome is observable — means that individual effects are never directly observed. Population-level estimands (ATE, ATT, ATU) are defined as expectations over these contrasts and are identifiable under assumptions of ignorability (unconfoundedness) and positivity (overlap).
    - *Pearl's Structural Causal Model:* Represents causal structure as a DAG with nodes (variables) and directed edges (direct causal effects), plus structural equations specifying how each variable is determined by its parents and exogenous noise. The do-operator formalises intervention: do(X=x) removes all incoming edges to X and sets X to x, modelling a surgical external intervention. Three rules of do-calculus suffice to derive all identifiable interventional and counterfactual distributions from observational data under the graph.

    **Identification Strategies:**
    - *Randomised Controlled Trials (RCTs):* Random assignment ensures treatment is independent of potential outcomes, making naive difference in means a valid estimator of ATE. The gold standard but often ethically or practically infeasible.
    - *Instrumental Variables (IV):* Uses variables that affect treatment but affect outcomes only through treatment (exclusion restriction) to identify causal effects in the presence of unmeasured confounding. Local Average Treatment Effect (LATE) theorem (Imbens & Angrist, 1994) provides the interpretable estimand for heterogeneous-treatment-effect settings.
    - *Regression Discontinuity Design:* Exploits discontinuities in treatment assignment rules (e.g. policy thresholds) to identify causal effects for units near the threshold.
    - *Difference-in-Differences (DiD):* Compares pre-post changes in treated and control groups, removing time-invariant confounders under the parallel trends assumption.
    - *Back-door and Front-door Adjustment:* Graphical criteria specifying which sets of observed variables suffice to adjust for confounding, enabling observational identification without instruments.

    **Estimation Methods:**
    - *Propensity Score Methods:* Model the probability of treatment given observed covariates; matching, inverse probability weighting (IPW), and doubly robust estimators use this to adjust for observed confounding.
    - *Meta-learners:* T-learner, S-learner, X-learner, DR-learner — modular approaches that combine off-the-shelf machine learning predictions to estimate heterogeneous treatment effects (HTEs).
    - *Causal Forests:* Non-parametric, tree-based estimators (Wager & Athey, 2018) that estimate HTEs adaptively, building on generalised random forests (grf) with honest sample splitting, asymptotic normality guarantees, and double machine learning nuisance model removal.
    - *Double Machine Learning (DML):* Uses cross-fitting and Neyman orthogonality to debias causal estimates when high-dimensional nuisance models (outcome prediction, propensity score) are estimated with machine learning methods (Chernozhukov et al., 2018).

    **Sensitivity Analysis:**
    - E-values (VanderWeele & Ding, 2017) quantify the minimum confounding strength required to explain away an observed causal estimate, enabling calibrated robustness claims without measuring unmeasured confounders directly.
    - Rosenbaum bounds for matched observational studies.
    - Simulation-based sensitivity analysis using partial identification bounds.

  - ## Use Cases and Major Application Families

    **Clinical Medicine and Pharmacoepidemiology:**
    Randomised trials establish efficacy; causal inference extends this to effectiveness in real-world populations using electronic health record data. Target trial emulation (Hernán & Robins, 2016) provides a principled framework for designing observational studies that mimic the structure of hypothetical RCTs. UK Biobank studies (involving hundreds of thousands of participants) routinely apply Mendelian randomisation — a form of IV analysis using genetic variants as instruments — to estimate causal effects of exposures such as BMI and smoking on disease incidence across the landscape of conditions. Applications include estimating drug efficacy in subgroups, rare adverse event detection, and personalised medicine through HTE estimation.

    **Economics and Labour Market Policy:**
    The Nobel Prize-winning work of Angrist, Card, and Imbens (2021) established natural experiments as the dominant design for empirical labour economics. Card's analysis of the 1980 Mariel boatlift (using Miami as treated, comparison cities as control) estimated the labour market impact of immigration; Angrist and Krueger's (1991) quarter-of-birth instrument identified the returns to education; Imbens and Angrist's (1994) LATE theorem provided the formal framework for interpreting IV estimates in heterogeneous populations. These methods now underpin policy evaluation across minimum wage, welfare reform, education interventions, and active labour market programmes worldwide.

    **Technology Industry and Online Experimentation:**
    Large technology platforms (Alphabet, Meta, Amazon, Netflix) run millions of randomised A/B experiments annually, but increasingly complement these with observational causal methods for settings where experimentation is infeasible or expensive. Causal forests and meta-learners are used for HTE estimation to personalise product interventions. Interrupted time-series and synthetic control methods (Abadie et al.) estimate platform-wide policy impacts. Causal recommender systems model the causal effect of recommendations on long-term engagement rather than naively optimising predicted click rates.

    **Algorithmic Fairness:**
    Causal inference provides the theoretical foundations for distinguishing permissible from impermissible algorithmic discrimination. Counterfactual fairness (Kusner et al., 2017) defines a decision as fair if it would be the same in a counterfactual world where the protected attribute were different but all causally downstream variables were unchanged. Mediation analysis decomposes observed disparities into direct and indirect causal pathways, enabling targeted remediation. Causal RL fairness research (2025) extends these ideas to sequential decision-making, where fairness constraints must account for dynamic feedback between algorithmic decisions and population outcomes.

    **AI Safety and Alignment:**
    Causal methods are being applied to evaluate whether large language model outputs reflect genuine causal understanding or spurious statistical regularities. Causal language model evaluation benchmarks (EconCausal, CausalVLBench, 2025) test models on counterfactual and interventional reasoning tasks. Structural causal models are used to audit whether RLHF-trained models have learned causally appropriate reward responses or are susceptible to reward hacking via spurious correlates. Causal representation learning aims to produce model internals that respect causal structure, improving robustness to distributional shift — directly relevant to [[AI Safety]] and [[Catastrophic Risk Reduction]].

    **Causal Reinforcement Learning:**
    Causal RL embeds causal knowledge into [[Reinforcement Learning]] to address four challenges: spurious correlations in reward attribution, sample inefficiency, poor generalisation across environments, and fairness. By modelling the causal structure of the environment, causal RL agents learn policies that are robust to distributional shifts and can transfer knowledge across tasks more efficiently than purely associative agents. A 2025 IEEE TNNLS survey on causal RL documents rapid growth in this application area.

  - ## Academic Context

    The modern field was shaped by the convergence of several intellectual traditions:

    - **Foundational Theoretical Contributions:**
      - Jerzy Neyman (1923): potential outcomes notation; counterfactual comparison as formal language for treatment effects.
      - Ronald Fisher (1935): randomisation theory; hypothesis testing in designed experiments; exact tests for treatment effects.
      - Sewall Wright (1918–1921): path coefficients and path analysis; graphical representation of causal structure in genetics.
      - Trygve Haavelmo (1944): structural econometrics; simultaneous equation models with probabilistic causal interpretation; Cowles Commission methodology.
      - Donald Rubin (1974, 1978): Rubin Causal Model; formal potential outcomes framework for observational studies; propensity score introduction.
      - Paul Holland (1986): "Statistics and Causal Inference" — classic exposition of potential outcomes framework in statistics literature.
      - Judea Pearl (1988–2009): graphical causal models, do-calculus, structural causal models; unification of all major causal frameworks; *Causality* (2000, 2009).

    - **Applied Methodology Milestones:**
      - Paul Rosenbaum & Donald Rubin (1983): propensity score theorem; balancing score for observational study covariate adjustment.
      - James Heckman (1979): selection model; two-stage least squares; Heckman correction for sample selection bias. Nobel Prize 2000.
      - Joshua Angrist & Alan Krueger (1991): quarter-of-birth instrumental variable; returns to education; popularised IV in labour economics.
      - Guido Imbens & Joshua Angrist (1994): LATE theorem; interpreted IV estimand as average treatment effect for compliers.
      - Miguel Hernán & James Robins (2000–2020): marginal structural models; g-computation; target trial emulation; *Causal Inference: What If* (2020).
      - Susan Athey & Stefan Wager (2018): causal forests; honest splitting; asymptotic theory for non-parametric HTEs.
      - Victor Chernozhukov et al. (2018): double machine learning; Neyman orthogonality; debiased ML-based causal estimates.

    - **Institutional and Research Group Landscape:**
      - Judea Pearl's group (UCLA): do-calculus, counterfactual theory, causal hierarchy, causal representation learning.
      - Guido Imbens and Susan Athey (Stanford): causal machine learning, causal forests, grf package, policy tree.
      - James Robins (Harvard): semiparametric efficiency theory, marginal structural models, targeted learning.
      - Miguel Hernán (Harvard): target trial emulation, pharmaco-epidemiology, causal inference in biomedical research.
      - Victor Chernozhukov (MIT): double machine learning, high-dimensional econometrics, quantile treatment effects.
      - London School of Hygiene and Tropical Medicine (LSHTM): Mendelian randomisation methodology, mediation analysis, time-varying confounders.
      - MRC Integrative Epidemiology Unit (Bristol): world leader in Mendelian randomisation applied to biobank data; George Davey Smith, Kate Tilling.
      - Edinburgh Causal AI Lab: causal discovery algorithms, causal representation learning, LLM causal reasoning evaluation.

    - **Nobel Prize Recognition (2021):**
      - The 2021 Nobel Memorial Prize in Economic Sciences awarded to David Card (UC Berkeley), Joshua Angrist (MIT), and Guido Imbens (Stanford).
      - Card: "for his empirical contributions to labour economics" using natural experiments (Mariel boatlift, minimum wage studies).
      - Angrist and Imbens: "for their methodological contributions to the analysis of causal relationships" including the LATE theorem and IV interpretation.
      - Landmark recognition of causal inference as a central scientific paradigm in quantitative social science.
      - Prize attracted researchers across many quantitative disciplines to causal identification as a distinct methodological challenge.

    - **Key Academic Venues and Resources:**
      - NeurIPS, ICML, ICLR workshops on causal machine learning and causal representation learning.
      - American Causal Inference Conference (ACIC): primary US meeting for methodology researchers.
      - Journal of Causal Inference (De Gruyter): dedicated journal for the field since 2013.
      - Causal Inference in Statistics — A Primer (Pearl, Glymour & Jewell, 2016): accessible introduction to SCM-based causal analysis.
      - Evidence Synthesis International and Cochrane Collaboration: causal synthesis methods in systematic reviews.

  - ## Current Landscape (2026)

    By mid-2026, causal inference has achieved mainstream status across empirical science and is undergoing rapid integration with large-scale machine learning. Several developments characterise the current landscape:

    **LLM Causal Evaluation:** New benchmarks — EconCausal (2025), CausalVLBench (2025), and the Causal Methods for LLM Development framework (2025, arXiv:2605.25998) — systematically evaluate whether frontier language models exhibit genuine causal reasoning or associative mimicry. Results are mixed: LLMs show strong performance on verbal causal reasoning tasks that can be addressed through pattern completion, but poor performance on tasks requiring genuine do-calculus manipulation or counterfactual consistency. The finding that "LLMs cannot discover causality" (arXiv:2506.00844, 2025) reflects a broader concern about the limits of purely associative learning for causal tasks.

    **Causal Representation Learning:** The project of learning representations that respect causal structure — disentangling latent causal factors, identifying causal variables from raw data — is a major research frontier. Recent work (arXiv:2509.22553, 2025) on linear causal representation learning by topological ordering, pruning, and disentanglement demonstrates progress toward identifiable causal latent structure. Integration with foundation models aims to produce more robust and interpretable learned representations.

    **Causal Methods for LLM Development and Evaluation:** Researchers are applying causal inference to the engineering decisions made during LLM development — training data composition, architecture choices, fine-tuning strategies — to answer counterfactual questions about which design decisions caused observed capability differences. Methods combining large-scale LLM annotations with gold-standard human labels produce debiased estimates with formal statistical guarantees.

    **Heterogeneous Treatment Effects in Medicine:** Causal forests and double machine learning are now standard methods in clinical research for HTE estimation. A 2025 systematic review (*International Statistical Review*, Rehill et al.) found causal forests among the most widely adopted HTE methods in applied work, with the grf R package driving adoption. Applications include psychiatry (treatment effect personalisation, *PMC*, 2025), HIV care (tuberculosis preventive therapy, *Scientific Reports*, 2025), and oncology treatment selection.

    **Causal Reinforcement Learning Integration:** A 2024–2025 IEEE TNNLS survey on causal RL documents the integration of structural causal models with policy gradient, model-based RL, and offline RL algorithms. Causally-Enhanced Reinforcement Policy Optimisation (arXiv:2509.23095, 2025) demonstrates substantial sample efficiency gains over standard RL baselines by incorporating causal world model structure.

  - ## UK Context

    The United Kingdom has strong academic traditions in causal inference across multiple disciplines. The Medical Research Council (MRC) has long funded causal epidemiology, and the MRC Integrative Epidemiology Unit at the University of Bristol — led by figures including George Davey Smith and Kate Tilling — is a world-leading centre for Mendelian randomisation, a genetic instrumental variable method for estimating causal effects of biomarkers and environmental exposures on health outcomes. UK Biobank, with over 500,000 participants and linked health records, provides the infrastructure for large-scale causal epidemiology studies and has produced landmark causal attribution analyses examining the effects of smoking and BMI across the landscape of disease incidence (PMC, 2022).

    The London School of Hygiene and Tropical Medicine (LSHTM) has contributed extensively to causal inference methodology in epidemiology, particularly time-varying treatments, marginal structural models, and g-estimation. LSHTM researchers have collaborated with Harvard's Hernán group on target trial emulation frameworks, and this work now shapes randomised trial emulation across UK health data infrastructure (NHS Digital, CPRD, SAIL Databank).

    In economics, the Centre for Economic Performance at the London School of Economics and the IFS (Institute for Fiscal Studies) apply natural experiment designs to UK-specific policy questions including universal credit evaluation, early years education interventions, and NHS resource allocation. The Edinburgh Causal AI Lab has active research on causal discovery algorithms and their integration with machine learning systems.

    Northern English institutions are developing applied causal capability: the University of Leeds has computational epidemiology groups applying DiD and synthetic control methods to public health interventions; the University of Sheffield's School of Health and Related Research (ScHARR) uses causal methods for health technology assessment; and Manchester's Alliance Manchester Business School applies causal econometrics to labour market and regional economic questions.

    The Alan Turing Institute has designated causal inference as a strategic research priority, funding the Data-Centric Engineering programme and intersections with AI safety and fairness. UKRI's AI programme has explicitly included causal reasoning and out-of-distribution robustness as funded research themes, reflecting recognition that associative machine learning alone is insufficient for high-stakes AI applications.

  - ## Pearl's Causal Hierarchy and AI Implications

    Judea Pearl's ladder of causation provides a principled taxonomy for distinguishing the types of reasoning that different AI architectures can and cannot perform:

    **Rung 1 — Association (Seeing):** Queries of the form P(Y | X=x) — what is the probability of Y given that we observe X=x? Standard statistical learning, including all current deep learning, operates at this level. Large language models, trained on observational data, are intrinsically Rung 1 systems: they learn associations between tokens and concepts as they appear in training corpora. However rich and nuanced these associations, they do not without further structure support valid answers to causal or counterfactual questions.

    **Rung 2 — Intervention (Doing):** Queries of the form P(Y | do(X=x)) — what is the probability of Y if I intervene and set X to x? Answering such questions requires identifying the causal mechanism relating X to Y, not merely their co-occurrence. This level is achievable by combining Rung 1 data with a causal graph (Pearl's approach) or by running a randomised experiment. Reinforcement learning with environment interaction operates at this level, since the agent intervenes in the world and observes outcomes.

    **Rung 3 — Counterfactual (Imagining):** Queries of the form P(Y(x') | X=x, Y=y) — given that we observed X=x and Y=y, what would Y have been had X been x' instead? Answering such questions requires a full structural causal model, not just observational data plus a causal graph. Counterfactual reasoning is required for explanations ("why did Y happen?"), blame attribution ("would the harm have occurred had the action been different?"), and certain fairness analyses.

    Pearl (2025 reprint) argues that all human cognitive tasks relevant to intelligence require at minimum Rung 2 and often Rung 3 reasoning, and that current AI systems operating at Rung 1 are therefore fundamentally limited in their ability to generalise beyond training distribution, understand causation, or reason about hypothetical scenarios. This theoretical limitation motivates causal AI research: the integration of causal structure into neural architectures to enable genuine Rung 2 and 3 capabilities.

    The implication for AI safety is direct: if LLMs operate only at Rung 1, they cannot reliably reason about the consequences of interventions (Rung 2) or counterfactuals (Rung 3). This limits their ability to engage in robust safety-relevant reasoning — e.g. correctly predicting the consequences of a novel action in a high-stakes setting. Causal AI safety research aims to address this limitation.

  - ## Future Directions (2026–2030)

    Several developments will shape causal inference over the next four years:

    **Causal Foundation Models:** Integrating causal inductive biases into large pre-trained models — through architectures that explicitly represent interventional vs. observational distributions, or through causal regularisation objectives during pre-training — is an active research direction. Approaches include: incorporating causal graph structure as a relational bias in transformer attention; pre-training on synthetic datasets with known causal structure; and fine-tuning on tasks requiring do-calculus manipulation. Success would produce models capable of reliable Rung 2 and Rung 3 reasoning on novel scenarios without task-specific fine-tuning, addressing a fundamental limitation of current associative architectures.

    **Automated Causal Discovery at Scale:** Learning causal graph structure (not just causal effects given a graph) from data remains computationally hard in the general case (NP-hard for exact structure learning). Recent progress on constraint-based (PC algorithm, FCI algorithm for latent variables), score-based (GES, NOTEARS differentiable DAG learning), and functional (LiNGAM, ANM) approaches, combined with LLM-based causal graph elicitation and structure initialisation (Evidence Triangulator, 2025), may produce practical automated causal discovery for moderate-dimensional systems. Extensions to time series (Granger causality, PCMCI) and high-dimensional imaging data are active frontiers.

    **Causal AI Safety:** The intersection of causal inference and [[AI Safety]] will deepen, with causal frameworks being used to define and audit alignment properties — whether a model's reward function corresponds to the intended causal objective, whether safety-relevant behaviours have the right causal structure, and how causal reasoning about model internals can support [[Mechanistic Interpretability]]. Causal mediation analysis applied to neural network internals promises to identify which intermediate representations causally mediate safety-relevant input-output relationships, supporting more targeted interpretability and intervention.

    **Policy-Relevant Heterogeneity at National Scale:** Governments and international organisations are increasingly demanding causal evaluations of large-scale policies — climate adaptation investments, education reforms, NHS treatment protocols, labour market interventions — with subgroup-specific estimates. Methods for causal inference from administrative data at national scale (UK-APB, UKRI Data Infrastructure, NHS federated analytics) will be critical enablers. The integration of privacy-preserving methods (differentially private causal estimation, federated causal inference) with HTE estimation is an important methodological challenge.

    **Causal RL at Scale:** As reinforcement learning is applied to progressively longer-horizon, higher-stakes problems (drug discovery, autonomous systems, scientific research automation), causal world models will become essential for robust policy learning. Theoretical foundations for causal RL are being actively developed, and 2026–2030 will likely see the first large-scale deployments of causal RL in pharmaceutical discovery, precision agriculture, and energy grid management. The integration of offline causal RL — learning causal policies from observational data without environment interaction — is particularly important for safety-critical domains where online exploration is dangerous.

    **Instrumental Causal AI:** The "instrumental variables" of language — finding parts of the training data or prompt that causally influence model outputs through specific pathways without confounding — may enable new forms of model steering, alignment verification, and safety auditing. Causal inference on the data-generating process for model training can in principle identify which training examples causally drove which capabilities, enabling targeted data interventions for safety improvement.

    **Causal Fairness in Dynamic Systems:** Static causal fairness criteria (counterfactual fairness, path-specific effects) are being extended to dynamic settings where algorithmic decisions affect population outcomes, which in turn affect future data. Causal long-term fairness frameworks must reason about the feedback loops created by algorithmic interventions, integrating causal RL, population dynamics modelling, and heterogeneous treatment effect estimation into a unified policy design framework. This is particularly important for [[Algorithmic Fairness]] in domains like credit, hiring, and criminal justice where repeated decisions shape population distributions.

  - ## Formal Methods and Algorithms

    **The Do-Calculus — Formal Statement:**
    Pearl's do-calculus consists of three rules that govern when intervention distributions can be simplified by removing do-operators:
    - *Rule 1 (Insertion/deletion of observations):* P(y | do(x), z, w) = P(y | do(x), w) if (Y ⊥ Z | X, W) in G_X (the graph with all incoming edges to X deleted).
    - *Rule 2 (Action/observation exchange):* P(y | do(x), do(z), w) = P(y | do(x), z, w) if (Y ⊥ Z | X, W) in G_{X,overbar{Z}} (the graph with incoming edges to X deleted and outgoing edges from Z deleted).
    - *Rule 3 (Insertion/deletion of actions):* P(y | do(x), do(z), w) = P(y | do(x), w) if (Y ⊥ Z | X, W) in G_{X, Z(W)} where Z(W) are Z-nodes not ancestors of any W-node in G_X.

    These rules are sound and complete for identifying interventional distributions from observational data: if a query is identifiable, do-calculus can derive it; if it is not, do-calculus will fail to simplify it.

    **Back-Door Criterion:**
    A set of variables Z satisfies the back-door criterion relative to (X, Y) in a DAG G if: (i) no node in Z is a descendant of X, and (ii) Z blocks every path between X and Y that contains an arrow into X (a "back-door path"). If Z satisfies the back-door criterion, then P(Y | do(X)) = Σ_z P(Y | X, Z=z) P(Z=z). This is the most widely applied identification result in practical causal analysis.

    **Propensity Score Theorem (Rosenbaum & Rubin, 1983):**
    Under the ignorability assumption (Y(0), Y(1) ⊥ T | X), adjustment for the propensity score e(X) = P(T=1|X) suffices to remove confounding: (Y(0), Y(1)) ⊥ T | e(X). This allows covariate-dimensional reduction from many confounders X to a single scalar e(X), enabling matching and weighting on the propensity score without controlling for all individual covariates.

    **Doubly Robust Estimator:**
    The augmented inverse probability weighted (AIPW) estimator of ATE is: ATE_DR = (1/n) Σ_i [ μ_1(X_i) - μ_0(X_i) + T_i(Y_i - μ_1(X_i))/e(X_i) - (1-T_i)(Y_i - μ_0(X_i))/(1-e(X_i)) ], where μ_t(X) = E[Y|T=t, X]. The estimator is doubly robust: it is consistent if either the outcome model μ or the propensity score e is correctly specified, but not necessarily both. This property is particularly valuable in high-dimensional settings.

    **Local Average Treatment Effect (LATE) Theorem:**
    Under monotonicity (no defiers), the IV estimator with instrument Z equals LATE = E[Y(1) - Y(0) | T(1) > T(0)], the ATE for compliers — units who take treatment if and only if assigned to treatment by the instrument. This interpretational result (Imbens & Angrist, 1994) clarified what IV estimates identify in heterogeneous-treatment-effect settings, resolving decades of ambiguity.

    **Causal Forest Algorithm:**
    Wager & Athey's (2018) causal forest builds on random forests with two modifications: (i) honest splitting, where the estimation sample is split into a training half (used to determine splits) and an estimation half (used to compute leaf-level estimates), preventing overfitting; (ii) causal criterion for split quality, which optimises for heterogeneity in treatment effects rather than outcome prediction. Under regularity conditions, the resulting estimator achieves asymptotic normality and pointwise confidence intervals for the conditional average treatment effect τ(x) = E[Y(1) - Y(0) | X=x].

  - ## Benchmark Datasets and Evaluation Resources

    Causal inference methods are evaluated against a combination of semi-synthetic datasets (observational covariates from real populations, synthetic outcome-generation mechanisms with known causal truth) and natural experimental archives:

    **Jobs (LaLonde, 1986 / Dehejia-Wahba, 1999):** The canonical benchmark for propensity score methods. The National Supported Work (NSW) job training programme dataset consists of randomised trial participants augmented with observational comparison groups from the Current Population Survey and PSID. ATE on earnings at 18 months is used to compare estimators' ability to recover the RCT benchmark from the observational subsample.

    **IHDP (Hill, 2011):** The Infant Health and Development Programme dataset with semi-synthetic outcomes. Surface B covariates and 1000 synthetic realisations of outcome-generation mechanisms allow systematic comparison of heterogeneous treatment effect estimators including causal forests, Bayesian additive regression trees (BART), and meta-learners.

    **ACIC Data Challenge Benchmarks:** The American Causal Inference Conference (ACIC) has run annual benchmarks (2016, 2017, 2019, 2022) with semi-synthetic data at varying levels of confounding, treatment effect heterogeneity, and overlap violation. These provide comprehensive comparisons of competing estimators under controlled conditions.

    **401(k) Eligibility (Poterba, Venti & Wise, 1994; Chernozhukov & Hansen, 2004):** A standard IV benchmark. Eligibility for 401(k) pension plans (plausibly random conditional on income) is used as an instrument for 401(k) participation, with financial wealth as the outcome. Used to evaluate DML, TSLS, and related IV estimators.

    **Twins Dataset:** A semi-synthetic benchmark based on US twin births (1989–1991) where the binary "treatment" is birth weight category and outcomes are infant mortality. The fact that twins share the same womb environment enables within-pair comparisons that isolate treatment from genetic and environmental confounders.

    **EconCausal Benchmark (2025):** A new 2025 benchmark specifically evaluating LLMs' causal reasoning capabilities on economics-style causal questions, testing the ability to identify confounders, reason about natural experiments, and perform counterfactual analysis in structured social science settings.

    **CausalVLBench (2025):** A visual causal reasoning benchmark assessing whether large vision-language models can correctly identify causal relationships from visual scenarios, counterfactual images, and causal chain diagrams.

  - ## Key Terminology

    - **Causal Estimand:** The precise mathematical quantity a causal study aims to estimate — e.g. ATE (average treatment effect over the whole population), ATT (average treatment effect on the treated), LATE (local ATE for compliers), CATE (conditional ATE for a subgroup with characteristics x).
    - **Confounding Variable / Confounder:** A variable that causes both the treatment and the outcome, creating spurious associations between them. Uncontrolled confounders bias naive treatment effect estimates toward or away from zero.
    - **Counterfactual:** A statement about what would have happened under a different assignment — e.g. "what would this patient's outcome have been had they not received treatment?" Counterfactuals are the definitional objects in the Rubin Causal Model: individual treatment effects are defined as differences between factual and counterfactual outcomes.
    - **Directed Acyclic Graph (DAG):** A graph with directed edges (arrows) and no directed cycles, used in Pearl's framework to represent causal relationships. Nodes are variables; directed edges represent direct causal influence from parent to child. DAGs encode conditional independence restrictions via d-separation.
    - **D-Separation:** A graphical criterion for determining conditional independence in a DAG. Variables X and Y are d-separated by a set Z if every path between them is blocked by Z (either via a chain or fork with a member in Z, or via a collider not in Z and with no descendant in Z).
    - **Do-Operator:** Pearl's formal notation for an external intervention. P(Y | do(X=x)) denotes the probability distribution of Y when X is set to x by external manipulation, as opposed to P(Y | X=x) which conditions on observing X=x (potentially a selection effect).
    - **Exchangeability / Ignorability / Unconfoundedness:** The key identification assumption for observational causal inference in the potential outcomes framework: (Y(0), Y(1)) ⊥ T | X — potential outcomes are independent of treatment assignment conditional on observed covariates X. This means that conditional on X, treatment assignment is "as good as random."
    - **Heterogeneous Treatment Effect (HTE):** The variation in treatment effects across individuals or subgroups, characterised by the conditional average treatment effect CATE(x) = E[Y(1) - Y(0) | X=x]. Understanding HTE is essential for personalised medicine, targeted policy, and precision marketing.
    - **Instrumental Variable (IV):** A variable Z that (i) causes the treatment T (relevance), (ii) affects the outcome Y only through its effect on T (exclusion restriction), and (iii) is not associated with unmeasured confounders of T and Y (exogeneity). Valid instruments allow identification of causal effects even in the presence of unmeasured confounders.
    - **Mediation Analysis:** Decomposing a total causal effect into direct effects (X → Y pathways that do not pass through mediator M) and indirect effects (X → M → Y pathways), enabling understanding of causal mechanisms rather than just total effects.
    - **Natural Experiment:** A setting where treatment assignment is determined by a natural process (geographic variation, policy cutoffs, lottery allocation) that is plausibly exogenous, enabling quasi-experimental causal identification without researcher-controlled randomisation.
    - **Potential Outcomes:** The two hypothetical outcome values Y(1) and Y(0) that would occur for each unit under treatment and control respectively. Only one is observed for any given unit — the "fundamental problem of causal inference." The individual treatment effect ITE = Y(1) - Y(0) is therefore never directly observable.
    - **Structural Causal Model (SCM):** A tuple (U, V, F, P_U) where V are endogenous variables, U are exogenous noise variables, F is a set of structural equations specifying each V_i as a function of its parents and noise, and P_U is a distribution over U. SCMs encode both observational and interventional distributions.

  - ## Research and Literature

    1. Pearl, J. (2009). *Causality: Models, Reasoning, and Inference* (2nd ed.). Cambridge University Press.
    2. Pearl, J. & Mackenzie, D. (2018). *The Book of Why: The New Science of Cause and Effect*. Basic Books.
    3. Rubin, D.B. (1974). "Estimating Causal Effects of Treatments in Randomized and Nonrandomized Studies." *Journal of Educational Psychology*, 66(5), 688–701.
    4. Neyman, J. (1923). "On the Application of Probability Theory to Agricultural Experiments." *Statistical Science* (transl. 1990), 5(4), 465–472.
    5. Imbens, G.W. & Angrist, J.D. (1994). "Identification and Estimation of Local Average Treatment Effects." *Econometrica*, 62(2), 467–475.
    6. Angrist, J.D. & Krueger, A.B. (1991). "Does Compulsory School Attendance Affect Schooling and Earnings?" *Quarterly Journal of Economics*, 106(4), 979–1014.
    7. Card, D. (1990). "The Impact of the Mariel Boatlift on the Miami Labor Market." *Industrial and Labor Relations Review*, 43(2), 245–257.
    8. Wager, S. & Athey, S. (2018). "Estimation and Inference of Heterogeneous Treatment Effects Using Random Forests." *Journal of the American Statistical Association*, 113(523), 1228–1242.
    9. Chernozhukov, V. et al. (2018). "Double/Debiased Machine Learning for Treatment and Structural Parameters." *Econometrics Journal*, 21(1), C1–C68.
    10. Hernán, M.A. & Robins, J.M. (2020). *Causal Inference: What If*. Chapman & Hall/CRC.
    11. Imbens, G.W. & Rubin, D.B. (2015). *Causal Inference for Statistics, Social, and Biomedical Sciences*. Cambridge University Press.
    12. Wright, S. (1921). "Correlation and Causation." *Journal of Agricultural Research*, 20(7), 557–585.
    13. Haavelmo, T. (1944). "The Probability Approach in Econometrics." *Econometrica*, 12(Suppl.), 1–115.
    14. Holland, P.W. (1986). "Statistics and Causal Inference." *Journal of the American Statistical Association*, 81(396), 945–960.
    15. VanderWeele, T.J. & Ding, P. (2017). "Sensitivity Analysis in Observational Research: Introducing the E-Value." *Annals of Internal Medicine*, 167(4), 268–274.
    16. Kusner, M.J., Loftus, J., Russell, C., & Silva, R. (2017). "Counterfactual Fairness." *NeurIPS 2017*.
    17. Abadie, A., Diamond, A., & Hainmueller, J. (2010). "Synthetic Control Methods for Comparative Case Studies." *Journal of the American Statistical Association*, 105(490), 493–505.
    18. Davey Smith, G. & Hemani, G. (2014). "Mendelian Randomisation: Genetic Anchors for Causal Inference in Epidemiological Studies." *Human Molecular Genetics*, 23(R1), R89–R98.
    19. Huang, L. et al. (2025). "A Survey on Causal Reinforcement Learning." *IEEE Transactions on Neural Networks and Learning Systems* (TNNLS).
    20. Rehill, P.M. et al. (2025). "How Do Applied Researchers Use the Causal Forest? A Methodological Review." *International Statistical Review*, doi:10.1111/insr.12610.
    21. Imai, K. & Li, M. (2025). "Causal Representation Learning with Generative Artificial Intelligence: Application to Texts as Treatments." Harvard Faculty, imai.fas.harvard.edu.
    22. Zhou, Y. et al. (2025). "Causal Methods for LLM Development and Evaluation." *arXiv:2605.25998*.
    23. Pearl, J. (2009). "Causal Inference in Statistics: An Overview." *Statistics Surveys*, 3, 96–146. (cs.columbia.edu reprint)
    24. Nobel Committee for Economic Sciences. (2021). "Scientific Background: Natural Experiments Help Answer Important Questions for Society." The Royal Swedish Academy of Sciences.
    25. Williamson, E.J., Forbes, A., & White, I.R. (2018). "Variance Reduction in Randomised Trials by Inverse Probability Weighting Using the Propensity Score." *Statistics in Medicine*, 33(5), 721–737.
    26. Oxera. (2021). "Causality and Natural Experiments: The 2021 Nobel Prize in Economic Sciences." oxera.com.
    27. Causal AI Research Group, University of Edinburgh. (2025). "Causal Discovery with LLMs: Unified Frameworks for Evidence Triangulation." Preprint.
    28. MRC Integrative Epidemiology Unit, University of Bristol. (2022). "Causal Attribution Fractions, and the Attribution of Smoking and BMI to the Landscape of Disease Incidence in UK Biobank." *medRxiv* / *PMC9667855*.

- ### Provenance
  - sources:: https://arxiv.org/pdf/2605.25998, https://arxiv.org/html/2605.25998v1, https://onlinelibrary.wiley.com/doi/full/10.1111/insr.12610, https://imai.fas.harvard.edu/research/LLM.html, https://arxiv.org/pdf/2510.07231, https://arxiv.org/pdf/2506.00844, https://arxiv.org/pdf/2307.01452, https://arxiv.org/pdf/2509.23095, http://www.cs.columbia.edu/~blei/fogm/2025F/readings/Pearl2009a.pdf, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9667855/, https://www.nobelprize.org/prizes/economic-sciences/2021/imbens/facts/, https://www.oxera.com/insights/agenda/articles/causality-and-natural-experiments-the-2021-nobel-prize-in-economic-sciences/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
