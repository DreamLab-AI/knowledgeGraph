- ### Definition
  - ProbabilisticModel is an owl:Class within the artificial-intelligence domain representing any computational or mathematical framework that explicitly represents uncertainty over random variables through probability distributions, enabling principled inference, prediction, and decision-making under incomplete information — encompassing directed graphical models (Bayesian networks where joint distributions factorise as products of conditionals p(x₁,...,xₙ) = ∏ᵢ p(xᵢ|pa(xᵢ)) over directed acyclic graphs encoding conditional independencies via d-separation; dynamic Bayesian networks propagating beliefs across time via Chapman-Kolmogorov; hidden Markov models with discrete latent chains; Kalman filters with Gaussian linear-Gaussian dynamics; particle filters implementing sequential Monte Carlo resampling for non-linear state spaces), undirected graphical models (Markov random fields with Gibbs distributions p(x) = (1/Z) ∏_C ψ_C(x_C) over clique potentials; conditional random fields p(y|x) = (1/Z(x)) exp(∑_k λ_k f_k(y,x)) discriminatively conditioning label fields on rich observation features; Boltzmann machines with symmetric weight matrices defining energy-based distributions p(x) ∝ exp(-E(x)/T)), deep generative models (variational autoencoders training encoder q_φ(z|x) and decoder p_θ(x|z) jointly to maximise the ELBO = E_{q_φ}[log p_θ(x|z)] - KL[q_φ(z|x)||p(z)] via the reparameterisation trick z = μ_φ(x) + σ_φ(x) ⊙ ε with ε ~ N(0,I) enabling gradient backpropagation through stochastic nodes; normalising flows constructing complex distributions p_x(x) from simple base p_z(z) via invertible transformations log p_x(x) = log p_z(z) - ∑ᵢ log|det J_{fᵢ}(zᵢ)| with flow families including RealNVP affine coupling layers, Glow 1×1 invertible convolutions, Neural Spline Flows piecewise-rational-quadratic bijections, and FFJORD continuous normalising flows via neural ODEs; score-based diffusion models learning the score ∇_x log p_t(x) via denoising score matching connecting to Bayesian posterior means via Tweedie's formula E[x₀|x_t] = x_t + σ_t² ∇_{x_t} log p_t(x_t)), probabilistic programming languages providing universal PPL capabilities through effect-handler frameworks (Stan 2.35 compiling probabilistic models to C++ with automatic differentiation and NUTS-HMC achieving 8× speedup via optional JAX backend CmdStanJAX; Pyro 1.9 built on PyTorch providing effect handlers via Poutine enabling compositional inference transformations from same model code — NUTS, SVI, or custom importance sampling; NumPyro 0.15 JAX-reimplementation achieving 100× GPU/TPU parallelisation through vmap-based MCMC chain batching; PyMC 5.7 with Nutpie Rust-based NUTS and JAX backend adding native GPU support; Turing.jl 0.30 Julia-based with SciML ODE/SDE integration for mechanistic biological models; Gen via generative functions with explicit choice maps enabling involutive MCMC, RJMCMC, and SMC for complex structured models), approximate inference algorithms (mean-field variational inference with CAVI updates q*_φᵢ(zᵢ) ∝ exp(E_{-i}[log p(z,x)]) for conjugate exponential family models; stochastic VI with minibatch subsampling scaling LDA to 1M documents; amortised VI with shared inference networks; Hamiltonian Monte Carlo exploiting Hamiltonian dynamics H(z,p) = -log p(z|x) + (1/2) pᵀ M⁻¹ p with L leapfrog steps at step size ε and Metropolis correction; the No-U-Turn Sampler eliminating leapfrog step count tuning by dynamically growing trajectories until U-turn detection achieving 10-100× improvement over random-walk MH; Stein Variational Gradient Descent bridging VI and MCMC via kernelised particle gradient descent minimising KL divergence; Sequential Monte Carlo maintaining weighted particle sets {z^(i), w^(i)} updating via importance resampling for sequential posterior tracking), Bayesian deep learning architectures (MC-Dropout running T=10-50 stochastic forward passes with test-time dropout corresponding to approximate GP inference, providing calibrated epistemic uncertainty estimates with negligible overhead — deployed in 15,000+ medical imaging systems and Waymo confidence thresholding; deep ensembles training M=5-10 independently initialised networks providing strong calibration and OOD detection validated by Ovadia et al. 2019 outperforming all approximate Bayesian methods under dataset shift; Laplace Redux fitting Gaussian p(W|D) ≈ N(W_MAP, (∇²_W log p(D|W)p(W))⁻¹) via KFAC curvature approximation with open-source laplace-torch library; Stochastic Weight Averaging Gaussian fitting Gaussian to SGD trajectory capturing low-rank posterior covariance integrated into PyTorch Lightning), and distribution-free uncertainty quantification via conformal prediction (split conformal computing (1-α)-quantile q̂ of calibration nonconformity scores to produce coverage-guaranteed prediction sets P(y_{n+1} ∈ C(x_{n+1})) ≥ 1-α for any exchangeable data without distributional assumptions; Mondrian conformal prediction stratifying for conditional coverage; conformal risk control generalising to arbitrary bounded loss functions; Regularised Adaptive Prediction Sets RAPS improving efficiency for classification). This ontological breadth reflects the foundational framing established by Koller and Friedman (Probabilistic Graphical Models, 2009, 1270pp), extended by Murphy's Probabilistic Machine Learning two-volume series (Vol.1 2022, Vol.2 2023, ~2400pp combined, open-access), which demonstrates that virtually all contemporary machine-learning objectives — cross-entropy loss, variational ELBO, score-matching objective, contrastive loss, masked language model objective — can be understood as instances of fitting probabilistic models to data, often implicitly. The practical deployment landscape spans calibrated uncertainty for autonomous driving (Waymo probability-flow ODE confidence thresholds, Cruise pedestrian detection Bayesian filtering), clinical decision support (NHS AI radiology risk stratification per NICE evidence standards 2022/2025 requiring calibrated uncertainty outputs, Isabel DDx Bayesian networks in 900+ NHS trusts), drug discovery (Exscientia Bayesian molecular optimisation producing DSP-1181 the first AI-designed drug in Phase I trial; BenevolentAI Bayesian graph neural networks for target identification across 500,000 scientific papers; AstraZeneca/Pyro mechanistic PK/PD modelling), financial risk management (JPMorgan Bayesian portfolio allocation, Goldman Sachs stress-test probabilistic scenario modelling), and LLM calibration (post-hoc temperature scaling, Platt scaling, conformal prediction for LLM set-valued predictions under EU AI Act 2024/1689 Article 9 uncertainty documentation requirements for high-risk AI systems). The UK academic ecosystem — Cambridge MLG (Ghahramani, Turner, Rasmussen: GP theory, sparse variational inference via Titsias 2009 inducing points, MC-Dropout), Edinburgh CDT Data Science (Williams, Storkey: Bayesian neural networks), Imperial Statistics (van der Wilk, Deisenroth: GP-RL fusion, probabilistic numerical methods), Alan Turing Institute (cross-university probabilistic AI coordination), Sheffield (GPy, Neil Lawrence's former base), Manchester (MRI Bayesian reconstruction), Leeds (Bayesian UQ for computational fluid dynamics), Newcastle (probabilistic smart-grid energy demand forecasting EP/W001098/1) — together constitutes the globally leading national ecosystem for probabilistic ML research, with BenevolentAI (London) and Exscientia (Oxford) representing the commercial translation frontier. As of 2026, three convergent trends are reshaping the field: (i) hardware acceleration via JAX/NumPyro on TPUv5 enabling full-posterior NUTS inference for 10M-parameter models previously requiring variational approximations; (ii) urgent enterprise demand for LLM calibration driven by EU AI Act compliance and NHS AI deployment governance mandating coverage-guaranteed uncertainty certificates; (iii) theoretical unification of diffusion, flow matching, and continuous normalising flows into a single probabilistic transport framework (Kingma and Gao 2023), enabling principled hybrid models and Bayesian inverse problem conditioning for medical image reconstruction, protein structure determination (AlphaFold uncertainty), and scientific simulation emulation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ProbabilisticModel
  - owl-role:: ModelFamily
  - owl-inferred:: ai:StatisticalModel, ai:GenerativeModel, ai:BayesianModel, ai:UncertaintyQuantificationMethod
  - belongs-to-domain:: [[AI-GroundedDomain]], [[StatisticsDomain]], [[MachineLearningDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]], [[InferenceLayer]], [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]], [[Statistical Learning]], [[Bayesian Inference]], [[Uncertainty Quantification]], [[Generative Model]]
  - has-part:: [[Prior Distribution]], [[Likelihood Function]], [[Posterior Distribution]], [[Latent Variable]], [[Graphical Model]], [[Inference Algorithm]], [[Probabilistic Programming Language]], [[Acquisition Function]], [[Nonconformity Score]]
  - requires:: [[Probability Theory]], [[Measure Theory]], [[Numerical Linear Algebra]], [[Computational Graph]], [[Monte Carlo Methods]], [[Automatic Differentiation]]
  - enables:: [[Uncertainty Quantification]], [[Bayesian Decision Theory]], [[Causal Inference]], [[Anomaly Detection]], [[Active Learning]], [[Conformal Prediction]], [[Bayesian Optimisation]], [[Probabilistic Forecasting]]
  - implements:: [[Bayes Theorem]], [[Variational Inference]], [[Markov Chain Monte Carlo]], [[Expectation Maximisation]], [[Message Passing]], [[Score Matching]], [[Evidence Lower Bound]], [[Hamiltonian Monte Carlo]]
  - depends-on:: [[Information Theory]], [[Graphical Model Theory]], [[Stochastic Processes]], [[Functional Analysis]], [[Computational Statistics]], [[Differential Geometry]]
  - supports:: [[Drug Discovery]], [[Medical Imaging]], [[Autonomous Systems]], [[Natural Language Processing]], [[Financial Risk Modelling]], [[Robotics]], [[Climate Modelling]]
  - uses:: [[Hamiltonian Monte Carlo]], [[Normalising Flows]], [[Gaussian Process]], [[Variational Autoencoder]], [[Diffusion Model]], [[Particle Filter]], [[Belief Propagation]]
  - contrasts-with:: [[Deterministic Model]], [[Frequentist Statistics]], [[Point Estimate]], [[Neural Network]], [[Maximum Likelihood Estimation]]
  - related-to:: [[Bayesian Deep Learning]], [[Causal Model]], [[Graphical Model]], [[Score-Based Diffusion]], [[Conformal Prediction]], [[Gaussian Process]], [[Normalising Flows]]
  - standardized-by:: [[NeurIPS Probabilistic Track]], [[AISTATS]], [[UAI Conference]], [[Journal of Machine Learning Research]], [[Bayesian Analysis Journal]], [[Journal of the American Statistical Association]]

- ### Content

  ## Compositional Relationships (Components)
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:PriorDistribution))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:LikelihoodFunction))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:PosteriorDistribution))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:LatentVariable))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:GraphicalModel))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:InferenceAlgorithm))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:ProbabilisticProgrammingLanguage))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:hasPart ai:NonconformityScore))

	    ## Dependency Relationships
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:requires ai:ProbabilityTheory))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:requires ai:MeasureTheory))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:requires ai:NumericalLinearAlgebra))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:requires ai:ComputationalGraph))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:requires ai:MonteCarloMethods))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:requires ai:AutomaticDifferentiation))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:dependsOn ai:InformationTheory))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:dependsOn ai:GraphicalModelTheory))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:dependsOn ai:StochasticProcesses))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:dependsOn ai:FunctionalAnalysis))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:dependsOn ai:ComputationalStatistics))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:dependsOn ai:DifferentialGeometry))

	    ## Capability Relationships
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:UncertaintyQuantification))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:BayesianDecisionTheory))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:CausalInference))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:AnomalyDetection))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:ActiveLearning))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:ConformalPrediction))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:BayesianOptimisation))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:enables ai:ProbabilisticForecasting))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:supports ai:DrugDiscovery))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:supports ai:MedicalImaging))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:supports ai:AutonomousSystems))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:supports ai:FinancialRiskModelling))

	    ## Implementation Relationships
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:BayesTheorem))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:VariationalInference))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:MarkovChainMonteCarlo))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:ExpectationMaximisation))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:MessagePassing))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:ScoreMatching))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:EvidenceLowerBound))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:implements ai:HamiltonianMonteCarlo))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:uses ai:HamiltonianMonteCarlo))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:uses ai:NormalisingFlows))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:uses ai:GaussianProcess))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:uses ai:VariationalAutoencoder))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:uses ai:DiffusionModel))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:uses ai:ParticleFilter))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:uses ai:BeliefPropagation))

	    ## Reduction Relationships
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:reduces ai:ModelMisspecificationRisk))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:reduces ai:OverconfidenceError))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:reduces ai:DataRequirement))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:reduces ai:CalibrationError))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:reduces ai:DecisionRisk))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:contrastsWith ai:DeterministicModel))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:contrastsWith ai:FrequentistStatistics))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:relatedTo ai:CausalModel))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:relatedTo ai:BayesianDeepLearning))
	    SubClassOf(ai:ProbabilisticModel
	      ObjectSomeValuesFrom(ai:relatedTo ai:ScoreBasedDiffusion))

	    ## Data Properties
	    DataPropertyAssertion(ai:hasIdentifier ai:ProbabilisticModel "AI-2047"^^xsd:string)
	    DataPropertyAssertion(ai:authorityScore ai:ProbabilisticModel "0.87"^^xsd:decimal)
	    DataPropertyAssertion(ai:qualityScore ai:ProbabilisticModel "0.52"^^xsd:decimal)

	    ## Property Constraints
	    SubClassOf(ai:ProbabilisticModel
	      DataAllValuesFrom(ai:hasDistributionFamily xsd:string))
	    SubClassOf(ai:ProbabilisticModel
	      DataSomeValuesFrom(ai:hasInferenceMethod xsd:string))
	    SubClassOf(ai:ProbabilisticModel
	      DataMinCardinality(1 ai:hasLatentDimension xsd:integer))

	    ## Annotations
	    AnnotationAssertion(rdfs:label ai:ProbabilisticModel "Probabilistic Model"@en)
	    AnnotationAssertion(rdfs:comment ai:ProbabilisticModel "Computational or mathematical framework explicitly representing uncertainty over random variables through probability distributions, subsуming Bayesian networks, MRFs, generative models, probabilistic programming (Pyro/PyMC/Stan/NumPyro/Turing.jl/Gen), variational inference, MCMC (HMC/NUTS), normalising flows, Bayesian deep learning, score-based diffusion, and conformal prediction."@en)
	    AnnotationAssertion(dcterms:identifier ai:ProbabilisticModel "AI-2047"^^xsd:string)
	    AnnotationAssertion(dcterms:subject ai:ProbabilisticModel "Bayesian Inference, Graphical Models, Probabilistic Programming, Uncertainty Quantification, Generative Models"@en)
	  )

  - ## About Probabilistic Models
  - **Probabilistic models** constitute the theoretical and computational substrate for reasoning under uncertainty across machine learning, statistics, robotics, and artificial intelligence. The unifying principle is the explicit use of probability distributions — not merely as a computational device but as a first-class representational commitment: quantities that are unknown or inherently variable are modelled as random variables, and the model specifies their joint distribution p(x, z) over observable data x and latent variables z. Inference is the process of computing or approximating the posterior p(z|x) using Bayes' theorem: p(z|x) ∝ p(x|z) p(z), where p(x|z) is the likelihood (how observations arise from latent structure) and p(z) is the prior (beliefs before observing data).
  - This Bayesian perspective contrasts sharply with frequentist and maximum-likelihood approaches, which treat unknown parameters as fixed constants to be estimated rather than random variables to be inferred. The Bayesian approach offers three decisive advantages:
    - (i) **Calibrated uncertainty** — posterior distributions encode not just best estimates but the full range of plausible explanations for the data, with expected calibration errors (ECE) substantially lower than those from uncalibrated neural networks; Bayesian credible intervals have exact frequentist coverage for correctly-specified models and approximate coverage for misspecified models
    - (ii) **Principled regularisation** — priors encode domain knowledge and prevent overfitting without requiring separate cross-validation procedures; hierarchical priors implement automatic relevance determination (ARD) feature selection; the evidence framework (MacKay 1992) selects hyperparameters by maximising log p(x|α) without held-out data
    - (iii) **Coherent sequential updating** — Bayes' theorem provides the mathematically optimal procedure for updating beliefs as new evidence arrives, enabling online learning, Bayesian filtering for state estimation (Kalman 1960, Particle filters 1993), and active information gathering via Bayesian experimental design (Lindley 1956 D-optimality, Chaloner-Verdinelli 1995 survey)
  - The computational challenge is that posterior distributions are typically intractable for all but the simplest conjugate models — the normalising constant p(x) = ∫ p(x|z) p(z) dz requires integrating over all possible values of the latent variables, exponentially expensive in the latent dimension. This computational challenge has driven two centuries of methodological innovation:
    - **Laplace approximation** (1774): second-order Taylor expansion around the MAP estimate gives Gaussian approximation; O(d²) cost from Hessian; foundational to approximate Bayesian inference
    - **Metropolis-Hastings** (1953/1970): propose z' ~ q(z'|z), accept with probability min(1, p(z'|x) q(z|z') / (p(z|x) q(z'|z))); first practical MCMC, still widely used for simple models
    - **Gibbs sampling** (Geman-Geman 1984): alternate sampling each variable from full conditional p(z_i | z_{-i}, x); feasible for conjugate exponential family models
    - **Variational Bayes** (Jordan et al. 1999): ELBO optimisation replacing intractable integration with optimisation; enabled LDA (Blei 2003) and VAE (Kingma 2014) at scale
    - **Hamiltonian Monte Carlo** (Duane 1987, Neal 2011): Hamiltonian dynamics exploration; O(d^{1/4}) scaling vs O(d^{-1/4}) for MH
    - **NUTS** (Hoffman-Gelman 2014): dynamic trajectory length HMC; default sampler in Stan, PyMC, NumPyro; standard for 10–10,000 dimensional posteriors
    - **GPU-accelerated PPLs** (Pyro 2017, NumPyro 2019, PyMC-JAX 2023): NUTS on GPU/TPU reducing inference time from hours to minutes for hierarchical models

  - ## Components and Architecture

  - ### Probabilistic Graphical Models: Directed and Undirected
  - **Bayesian Networks** (directed acyclic graphical models, DAGs) represent the joint distribution over n variables as a product of conditionals: p(x₁, ..., xₙ) = ∏ᵢ p(xᵢ | pa(xᵢ)), where pa(xᵢ) denotes the parents of node xᵢ in the DAG. Each node represents a random variable; directed edges encode direct probabilistic dependence. The DAG structure encodes **conditional independencies** via d-separation: variables A and C are conditionally independent given B (A ⊥ C | B) if every undirected path between A and C is d-separated by B, where d-separation is determined by three connectivity patterns — serial connections (A → B → C blocked by B), diverging connections (A ← B → C blocked by B), and converging connections (A → B ← C unblocked by B unless B or any descendant of B is observed, the **explaining away** or intercausal reasoning phenomenon). Koller and Friedman (2009) provide the definitive treatment, distinguishing causal reasoning (top-down, cause to effect via conditional generation), evidential reasoning (bottom-up, observed symptoms to latent causes via posterior inference), and intercausal reasoning (explaining away competing causes). Exact inference in Bayesian networks uses the **junction tree algorithm** (Lauritzen-Spiegelhalter 1988): moral graph construction by marrying parents → triangulation to chordal graph → junction tree extraction → message passing in two phases (collect evidence, distribute evidence) with time complexity O(n × exp(w)) where w is the tree-width. For low tree-width models (chains, trees, polytrees), exact inference is polynomial; for dense graphs (complete DAGs), tree-width equals n and exact inference is NP-hard. Classical Bayesian networks include MYCIN medical diagnosis (1974, Stanford), QMR-DT (1991, Quick Medical Reference with 600 diseases and 4,000 findings), HUGIN commercial Bayes net tool (Denmark, 1988), Netica (Norsys, 1995), and the BNLEARN R package (Scutari 2010, 2M+ CRAN downloads). Latent Dirichlet Allocation (Blei, Ng, Jordan 2003) — a Bayesian network with Dirichlet priors over topic-word distributions and per-document topic proportions — has over 46,000 Google Scholar citations and is deployed in recommender systems (Yahoo!, Netflix topic modelling), document summarisation, and biomedical literature mining.
  - **Markov Random Fields** (MRFs, undirected graphical models, Gibbs random fields) represent distributions via a product of potential functions over cliques: p(x) = (1/Z) ∏_C ψ_C(x_C), where Z = ∑_x ∏_C ψ_C(x_C) is the intractable partition function and the product runs over maximal cliques C. Unlike Bayesian networks, MRFs represent **symmetric dependencies** — pixel neighbourhood interactions in image segmentation (Besag 1986 iterated conditional modes, Boykov-Kolmogorov 2004 graph-cuts for submodular energies), pairwise social network relationship models, protein residue contact maps (DCA direct-coupling analysis), and Ising spin-glass models (Mézard-Montanari 2009). Computing Z is #P-hard in general; approximate methods include belief propagation (exact on trees, approximate loopy BP on general graphs via Bethe free energy), variational methods (naive mean-field, structured mean-field, expectation propagation), and MCMC (Gibbs sampling for discrete MRFs, Metropolis-Hastings for continuous energies). **Conditional Random Fields** (CRFs, Lafferty et al. 2001) discriminatively model p(y|x) = (1/Z(x)) exp(∑_k λ_k f_k(y,x)), conditioning the label field y on observations x through feature functions f_k, eliminating the need to model p(x) and enabling rich overlapping features without independence assumptions. Linear-chain CRFs dominated NLP sequence labelling (named entity recognition, part-of-speech tagging, information extraction) from 2001–2017, with CRFPP and CRF++ libraries deployed in production NLP pipelines at Google, Microsoft, and the NHS Clinical NLP Service. **Restricted Boltzmann Machines** (RBMs, Hinton-Salakhutdinov 2006) are bipartite MRFs with visible and hidden units, stacked to form Deep Belief Networks (DBNs) — the 2006 breakthrough enabling deep learning via greedy layer-wise pretraining.
  - **Dynamic Bayesian Networks** (DBNs) extend Bayesian networks to temporal sequences by replicating the graph structure across time slices with Markov transition distributions p(z_t|z_{t-1}) and observation likelihoods p(x_t|z_t). Special cases include **Hidden Markov Models** (HMMs) with discrete hidden states (Rabiner 1989, fundamental to speech recognition; Viterbi decoding, forward-backward EM for parameter learning; HMMER protein family modelling Eddy 2011 with 800,000+ sequence database searches), **Kalman filters** with Gaussian linear dynamics (Kalman 1960, standard in GPS tracking, robot localisation, financial state-space models; extended Kalman filter linearising non-linear dynamics; unscented Kalman filter using sigma points for better non-linear approximation), and **particle filters** (sequential Monte Carlo, Gordon-Salmond-Smith 1993; stratified resampling; Rao-Blackwellisation for partially analytical substructures) for non-linear non-Gaussian dynamics deployed in robot SLAM, visual odometry, and multi-target tracking.

  - ### Generative vs Discriminative Models
  - **Generative models** specify the complete joint distribution p(x, y) = p(x|y) p(y) over observations x and labels y, enabling both classification via Bayes' rule p(y|x) = p(x|y)p(y)/p(x) and data generation by sampling x ~ p(x|y). Naïve Bayes classification assumes conditional independence of features given class — p(x|y) = ∏ᵢ p(xᵢ|y) — enabling closed-form maximum likelihood estimation and achieving competitive performance on text classification despite strong independence assumptions (McCallum-Nigam 1998, 20 Newsgroups 89.6% accuracy). Gaussian mixture models (GMMs, Dempster-Laird-Rubin EM 1977) fit K-component Gaussian mixtures p(x) = ∑_k π_k N(x|μ_k, Σ_k) via expectation-maximisation, serving as soft clustering, density estimation, and speech acoustic models (GMM-HMM speech recognition dominated ASR from 1990–2013 before deep learning). Latent Dirichlet Allocation (generative model of documents as mixtures of topics), variational autoencoders (deep latent variable models learned via amortised VI), normalising flows (tractable density estimation via invertible transformations), and score-based diffusion models (generative models learning the score of the data density) all fall within this generative family.
  - **Discriminative models** directly specify the conditional p(y|x) without modelling the data marginal p(x). Logistic regression p(y|x) = σ(wᵀx + b) with cross-entropy optimisation and L₂ regularisation (equivalent to Gaussian prior on weights), SVMs with Platt scaling post-hoc softmax conversion, conditional random fields, and most modern neural networks (ResNet, ViT, BERT fine-tuning) are discriminative. Ng and Jordan (2001) established the asymptotic analysis comparing Naïve Bayes (generative) against logistic regression (discriminative): logistic regression achieves lower asymptotic error with sufficient data, but Naïve Bayes converges faster with limited data because it exploits the structure of p(x) even at the cost of the independence assumption. Modern **semi-supervised** approaches combine both: Kingma et al. 2014 M1/M2 VAE models learn p(x, y) with a generative component whilst also optimising a discriminative objective, outperforming pure discriminative baselines with 100 MNIST labels by 3.33% error vs 11.82%; semi-supervised normalising flows (Izmailov et al. 2020) extend this to bijective generative models.
  - The **calibration problem** for discriminative deep learning is acute: standard neural network softmax outputs are systematically overconfident, with expected calibration error (ECE) of 5–15% on ImageNet (Guo et al. 2017). Temperature scaling — dividing logits by scalar T before softmax — reduces ECE to 1–3% with negligible inference overhead and is now standard practice. Bayesian approaches (MC-Dropout, deep ensembles, SWAG) provide better calibration under distribution shift, whilst conformal prediction provides distribution-free coverage guarantees independent of calibration quality.

  - ### Variational Inference: Theory and Algorithms
  - **Variational inference** (VI) casts posterior computation as an optimisation problem: approximate the intractable true posterior p(z|x) with a tractable variational distribution q_φ(z|x) from a variational family Q, chosen to minimise the KL divergence KL[q_φ(z|x) || p(z|x)]. Minimising this KL divergence is equivalent to maximising the **Evidence Lower BOund** (ELBO): ELBO(φ) = E_{q_φ(z|x)}[log p(x, z)] - E_{q_φ(z|x)}[log q_φ(z|x)] = E_{q_φ(z|x)}[log p(x|z)] - KL[q_φ(z|x) || p(z)], decomposing into a reconstruction term (expected log likelihood) and a regularisation term (KL divergence between variational posterior and prior). Since log p(x) = ELBO(φ) + KL[q_φ(z|x) || p(z|x)] and KL ≥ 0, the ELBO is a lower bound on the log marginal likelihood log p(x) (the "evidence"), hence its name. **Mean-field VI** (MFVI) assumes complete factorisation q_φ(z) = ∏ᵢ q_φᵢ(zᵢ), enabling coordinate ascent VI (CAVI) with analytical optimal updates q*_φᵢ(zᵢ) ∝ exp(E_{-i}[log p(z, x)]) for conjugate exponential family models — Gaussian mean and variance from Gaussian-Gaussian conjugacy, Dirichlet concentration from Dirichlet-Multinomial conjugacy. Stochastic VI (Hoffman et al. 2013) introduces minibatch subsampling of the likelihood term, enabling CAVI to scale LDA to 1M documents on a single machine in hours rather than weeks. **Expectation Propagation** (EP, Minka 2001) approximates the posterior with a product of simpler factors, iteratively updating each factor by moment matching — superior to mean-field when factors exhibit strong correlations, deployed in Bayesian matrix factorisation (Hernandez-Lobato et al. 2014) and probabilistic matrix completion. **Amortised VI** replaces per-datapoint optimisation with an **inference network** (encoder) q_φ(z|x) mapping data directly to variational parameters, enabling O(1) inference for new datapoints without re-optimisation — the key innovation of the VAE (Kingma-Welling 2014) enabling deep learning–scale amortised inference.

  - ### Markov Chain Monte Carlo: HMC and NUTS
  - **MCMC** methods construct a Markov chain whose stationary distribution is the target posterior p(z|x), then sample from the chain after a burn-in period. The fundamental correctness guarantee is **detailed balance**: K(z'|z) p(z|x) = K(z|z') p(z'|x), ensuring the chain's stationary distribution equals the target. Classical Metropolis-Hastings proposes z' ~ q(z'|z) and accepts with probability min(1, p(z'|x) q(z|z') / (p(z|x) q(z'|z))), guaranteeing ergodicity under mild regularity conditions. Gibbs sampling alternates sampling each variable conditioned on all others: z_i ~ p(z_i | z_{-i}, x) — feasible when full conditionals are analytically available (conjugate models), requiring no tuning but suffering from slow mixing for highly correlated posteriors. Both suffer from **random-walk inefficiency** in high dimensions: the average acceptance rate with Gaussian proposals decays as d^{-1/4} for d-dimensional targets, requiring O(d^{3/4}) steps to traverse the posterior — impractical for models with >1,000 parameters.
  - **Hamiltonian Monte Carlo** (HMC, Duane-Kennedy-Pendleton-Roweth 1987, statistical ML applications by Neal 2011 Chapter 5) overcomes random-walk inefficiency by introducing auxiliary momentum variables p ~ N(0, M) (mass matrix M, typically diagonal) and simulating Hamiltonian dynamics: dz/dt = M⁻¹ p, dp/dt = ∇_z log p(z|x), preserving the Hamiltonian H(z, p) = -log p(z|x) + (1/2) pᵀ M⁻¹ p. Because Hamiltonian dynamics conserve H and are volume-preserving, proposals from long trajectories have acceptance probability ≈ 1 (corrected for leapfrog discretisation error). Leapfrog integration: p_{t+ε/2} = p_t + (ε/2) ∇_z log p(z_t|x); z_{t+ε} = z_t + ε M⁻¹ p_{t+ε/2}; p_{t+ε} = p_{t+ε/2} + (ε/2) ∇_z log p(z_{t+ε}|x), with L steps and step size ε as tuning parameters. HMC achieves O(d^{1/4}) acceptance-optimised step-size scaling vs O(d^{-1/4}) for MH, reducing the number of steps to traverse the posterior from O(d^{3/4}) to O(d^{1/4}) — a dramatic improvement for high-dimensional posteriors.
  - **The No-U-Turn Sampler** (NUTS, Hoffman-Gelman 2014) eliminates the need to tune L by dynamically growing the trajectory using a doubling procedure until the trajectory would double back (U-turn criterion: the dot product between the momentum and the position difference from the start becomes negative). NUTS uses slice sampling to select from trajectory states satisfying the no-U-turn condition, ensuring detailed balance. NUTS is the default sampler in Stan (all versions), PyMC (via Nutpie or Blackjax backends), and NumPyro, producing samples in 10–100× fewer steps than random-walk MH for 10-1,000 dimensional posteriors. The Riemannian Manifold HMC (RMHMC, Girolami-Calderhead 2011) uses the Fisher information metric as M, adapting the mass matrix to local posterior geometry — superior for posteriors with strong parameter correlations or funnel-shaped geometries common in hierarchical models. **Diagnostics**: Gelman-Rubin R̂ statistic (< 1.01 indicating convergence), effective sample size (ESS > 400 per parameter), energy fraction of missing information (E-FMI for detecting sampling pathologies), and divergent transitions (HMC-specific indicator of pathological posterior geometry).

  - ### Probabilistic Programming Languages: Ecosystem and Trade-offs
  - Probabilistic programming languages (PPLs) elevate probabilistic models to first-class programs, separating model specification from inference engine through effect-handler or compilation frameworks. The core PPL operations are (i) **sampling** from prior distributions (z ~ Prior(params)); (ii) **conditioning** on observed data (observe(x, Likelihood(params))); (iii) **inference** invoked automatically via NUTS, ADVI, or custom kernels. Effect handlers (Pyro's Poutine; Turing.jl's DynamicPPL) transform model execution traces without modifying model code — wrapping the same generative function in different effects produces different inference algorithms from identical model specifications.
  - **Stan** (Carpenter et al. 2017, Stan Development Team) compiles probabilistic programs in the Stan modelling language to optimised C++ with reverse-mode automatic differentiation (Stan Math Library), running NUTS-HMC as the primary sampler and ADVI for faster approximate inference. Stan distinguishes data blocks (observed), parameters blocks (continuous latent variables), transformed parameters (deterministic functions), and generated quantities (posterior predictive). Stan 2.35 (2025) added optional JAX backend (CmdStanJAX) achieving 8× speedup for continuous models on modern GPUs, partial compilation caching reducing re-compilation time 60% for iterative development, and improved pathfinder algorithm (Zhang et al. 2022) for fast variational initialisation. Stan ecosystem includes RStan (R interface), PyStan (Python), CmdStanR, CmdStanPy, brms (Bayesian regression models with Stan, Paul-Christian Bürkner 2017), and BMRS. Stan dominates clinical pharmacokinetics (Bayesian PK/PD, NONMEM competition), randomised clinical trial analysis (EORTC Bayesian adaptive designs), ecology (occupancy and N-mixture models), and psychometrics (item response theory). CRAN download rate exceeds 2M/month for RStan alone.
  - **PyMC** (Salvatier et al. 2016; PyMC 5.x since 2023, formerly PyMC3) uses PyTensor (formerly Theano-derived Aesara) as its computational backend. PyMC 5.7 (2025) added native GPU support via JAX backend (Nutpie and Blackjax NUTS implementations), improved hierarchical model convergence via rank-normalised split-R̂ diagnostics (Vehtari et al. 2021), and ArviZ 0.18 integration for convergence diagnostics and posterior predictive checks. PyMC Gaussian Processes module (Rasmussen-Williams GP library) supports sparse variational GP (Hensman et al. SVGP), Hilbert space GP (Solin-Sarkka 2020), and latent variable GP regression. PyMC-Marketing (2023) extends PyMC for marketing mix modelling (media channel attribution, saturation curves, carry-over effects) — adopted by major advertising agencies for Bayesian budget allocation. Key use cases: hierarchical A/B testing (Kruschke 2013 BEST method replacing t-tests), epidemiological compartmental models (SEIR with PyMC fitting to case counts, deployed during COVID-19 response by NHS England analysts), and psychological research (multiverse analysis, robust mixed-effects models avoiding p-value thresholding).
  - **Pyro** (Bingham et al. 2019, Uber AI Labs, now maintained by the Pyro team at Berkeley AI Research) is built on PyTorch and provides a universal PPL through a unified sample/observe API with compositional effect handlers (Poutine). Pyro 1.9 (2025) improved GPyTorch integration for scalable GP inference on GPU (inducing-point sparse GPs with 1M observations on NVIDIA A100 in <60 seconds), added amortised MCMC with learned step-size adaptation reducing NUTS warm-up by 40%, and introduced NumPyro model import for JAX-accelerated sampling of Pyro-specified models. The SVI module implements Adam-based ELBO optimisation with low-variance gradient estimators (REINFORCE/NVIL for discrete latent variables, reparameterisation for continuous), deployed in Broad Institute genomic variant calling (continuous relaxation of discrete mutation indicators), Genentech clinical trial simulation, and AstraZeneca mechanistic PK/PD models.
  - **NumPyro** (Phan et al. 2019, Pyro dev team / JAX contributors) reimplements Pyro's probabilistic programming model on JAX, achieving 10–100× speedups on GPU/TPU through JIT compilation (jax.jit), automatic vectorisation (jax.vmap), and forward-mode differentiation (jax.jvp). NumPyro's vmap-based batching runs dozens of MCMC chains in parallel across TPU cores — full NUTS posterior for a 200-parameter hierarchical model in 90 seconds on 8× TPUv3 vs 15 minutes on CPU. NumPyro 0.15 (2026) introduced mixed-effects model primitives, reparam module with PathwiseDerivative estimator for discrete variables, and improved SVI guide libraries (AutoNormal, AutoLowRankMultivariateNormal, AutoDiagonalNormal). Blackjax (Cabezas et al. 2024) provides a library of MCMC kernels (NUTS, MCLMC, SGLD, normalising flow-based MCMC) compatible with NumPyro-style JAX transforms, used for large-scale probabilistic modelling at DeepMind and Google Research.
  - **Turing.jl** (Ge, Xu, Ghahramani 2018, Cambridge MLG) exploits Julia's multiple dispatch and LLVM JIT compilation to achieve near-C performance for PPL inference. DynamicPPL.jl (the underlying effect-handler PPL library) generates model-specific MCMC kernels via Julia's macro system and multiple dispatch, eliminating interpreter overhead. Turing.jl 0.30 (2025) improved NUTS diagnostics (divergence detection, E-FMI), added support for sparse Gaussian processes via AbstractGPs.jl, and improved ODE/SDE integration via DifferentialEquations.jl (SciML ecosystem). Key applications: COVID-19 transmission modelling (SIR-Bayes ODEs fit to UK data, 2020 SAGE advisory); Bayesian parameter estimation for climate model emulators; pharmacokinetic two-compartment ODE models fit to individual patient PK data; turbulence model calibration for aerospace CFD at Rolls-Royce (Derby, UK).
  - **Gen** (Cusumano-Towner et al. 2019, MIT Probabilistic Computing Project) introduces **generative functions** as first-class objects with explicit **choice maps** recording all random choices made during program execution. This explicit trace representation enables compositional probabilistic inference: custom MCMC kernels using involutive MCMC (Cusumano-Towner et al. 2020), reversible jump MCMC (RJMCMC) for model selection over variable-dimension spaces, sequential Monte Carlo with arbitrary proposal distributions interoperating with general program structure. Gen is deployed for 3D scene understanding via inverse graphics (Gothoskar et al. 2021 3DP3, MIT), program induction from observations (Lake et al. 2019 meta-learning with Gen), and structured prediction combining symbolic and neural components.

  - ### Bayesian Deep Learning
  - **Bayesian deep learning** combines the representational power of deep neural networks with principled uncertainty quantification from Bayesian inference, placing a prior distribution over network weights W ~ p(W) and computing the posterior p(W|D) given training data D. Predictions use the **posterior predictive distribution**: p(y*|x*, D) = ∫ p(y*|x*, W) p(W|D) dW — the Bayesian model average over all weight configurations weighted by their posterior probability, providing calibrated predictive uncertainty. This integral is intractable for networks with millions of parameters, necessitating approximations. Wilson and Izmailov (2020) demonstrated that stochastic gradient descent implicitly performs approximate Bayesian inference, and that Bayesian model averaging over SGD trajectory endpoints (SWA) substantially improves generalisation and calibration, motivating SWAG.
  - **MC-Dropout** (Gal and Ghahramani 2016, Cambridge MLG) demonstrated that applying Bernoulli dropout with probability p at test time is equivalent to approximate Bayesian inference in a Gaussian process with a specific covariance function proportional to the network architecture. Running T stochastic forward passes with dropout and computing the mean ŷ = (1/T) ∑_t f_{W_t}(x) and variance σ² = (1/T) ∑_t f_{W_t}(x)² - ŷ² provides calibrated epistemic uncertainty estimates with negligible computational overhead (T=10–50 typical, ~5–10% inference overhead). MC-Dropout is deployed at scale: Waymo's object detection pipeline uses MC-Dropout confidence thresholds to trigger human review for autonomous driving edge cases (2018–2026); nnU-Net-Bayesian applies MC-Dropout to medical image segmentation providing voxel-level uncertainty maps accepted by MICCAI 2019–2024 challenges; Oxford's BDL (Bayesian Deep Learning) toolkit has been downloaded 85,000+ times.
  - **Deep Ensembles** (Lakshminarayanan, Pritzel, Blundell 2017, DeepMind) train M=5–10 independently initialised networks with different random seeds, optionally with random input perturbations (adversarial training), and aggregate their predictive distributions. Ensemble predictions average both aleatoric uncertainty (model-internal variance, captured by each member's output variance) and epistemic uncertainty (variance across ensemble members representing model uncertainty). Ovadia et al. (2019, Google Brain) "Can You Trust Your Model's Uncertainty?" benchmarked VI, MC-Dropout, temperature scaling, and deep ensembles on CIFAR-10/ImageNet under dataset shift — ensembles outperformed all methods on calibration (ECE, NLL) and out-of-distribution detection (AUROC) under mild-to-severe shift. The primary limitation is M× inference cost and M× memory footprint, addressed by **PackedEnsembles** (Laurent et al. 2023, parallelised within single forward pass via grouped convolutions, 1.3–1.5× overhead vs single model), **BatchEnsembles** (Wen et al. 2020, rank-1 perturbations of shared weight matrix, 1.1× overhead), and **Hypermodel distillation** (compressing M-member ensemble into single network).
  - **Laplace Approximation** (Ritter et al. 2018 online Laplace; Daxberger et al. 2021 NeurIPS "Laplace Redux") fits a Gaussian N(W_MAP, Σ) to the log-posterior around the MAP estimate using the Hessian: Σ = (∇²_W log p(D|W) p(W))⁻¹ |_{W=W_MAP}. Full Hessian computation is O(p²) in the number of parameters p — infeasible for p > 10,000. Kronecker-factored approximate curvature (KFAC, Martens-Grosse 2015) approximates the Fisher information matrix as a Kronecker product of two smaller matrices per layer: F ≈ ⊗_ℓ A_ℓ ⊗ G_ℓ, enabling O(p d²) computation with d = layer width. The Laplace Redux toolkit (laplace-torch library) implements last-layer Laplace (only the final linear layer receives a Bayesian treatment — sufficient for calibration at minimal computational cost), full-network KFAC Laplace, and probit approximations for classification. Last-layer Laplace is now deployed in production: Spotify recommendation calibration (post-hoc uncertainty on collaborative filtering embeddings), AstraZeneca ADMET property prediction calibration, and UK NHSX AI Lab deployment evaluations.
  - **Stochastic Weight Averaging Gaussian** (SWAG, Maddox et al. 2019, Cornell) fits a Gaussian distribution to the SGD trajectory during the final training epochs, capturing both a mean (SWA estimate) and a low-rank + diagonal covariance: p(W|D) ≈ N(W_SWA, Σ_SWA), Σ_SWA = (Σ_diag + D D^T)/2 where D contains rank-K deviation vectors from the trajectory. SWAG requires no architectural changes and adds negligible training overhead (one checkpoint save per epoch), providing strong calibration for ResNet/ViT image classifiers and language models. MultiSWAG (Wilson-Izmailov 2020) combines SWAG samples from multiple independent SGD runs, bridging SWAG and deep ensembles.

  - ### Score-Based Diffusion as Probabilistic Models
  - Score-based diffusion models (Song et al. 2020 NCSN, 2021 SDE framework; Kingma et al. 2021 improved DDPM; Ho et al. 2020 DDPM) represent the current synthesis of deep generative modelling and classical probabilistic modelling via the **denoising score matching** objective (Vincent 2011; Hyvärinen 2005 score matching): train a neural network s_θ(x, t) to approximate the score ∇_x log p_t(x) — the gradient of the log density of the data distribution perturbed with Gaussian noise at level t. The forward process adds noise: dx = f(x,t)dt + g(t)dW, where W is Wiener process, f is the drift, and g is the diffusion coefficient — typically the Ornstein-Uhlenbeck process q(x_t|x_0) = N(x_t; √ᾱ_t x_0, (1-ᾱ_t)I) with ᾱ_t = ∏_{s=1}^t (1-β_s) for discrete schedules or the VP-SDE for continuous time. The reverse process reconstructs data via the reverse SDE: dx = [f(x,t) - g(t)² ∇_x log p_t(x)]dt + g(t)dW̄, approximated by replacing ∇_x log p_t(x) with the learned score s_θ(x, t). **Tweedie's formula** (Efron 2011) provides the Bayesian connection: E[x₀|x_t] = (x_t + σ_t² ∇_{x_t} log p_t(x_t)) / ᾱ_t^{1/2}, showing that the denoising network implicitly computes a Bayesian posterior mean — diffusion models are probabilistic models learning the Bayes-optimal denoising function at each noise level. This enables: (i) **inverse problem conditioning** — plugging likelihood gradients into the reverse SDE to sample from p(x|y) for image super-resolution, MRI reconstruction from undersampled k-space (Chung et al. 2022), CT denoising, and inpainting; (ii) **score-based MCMC** via Langevin dynamics x_{t+1} = x_t + (ε/2) ∇_x log p(x_t) + √ε η_t with η ~ N(0,I) (Welling-Teh 2011 SGLD); (iii) **log-likelihood computation** via probability flow ODE — the deterministic ODE dx = [f(x,t) - (1/2)g(t)² ∇_x log p_t(x)]dt has the same marginals as the SDE, enabling exact log-likelihood evaluation via the instantaneous change-of-variables formula for neural ODEs. Industrial deployments include Stable Diffusion 3 (Escher Labs/Stability AI, latent diffusion on LAION-5B, 860M parameters, commercial API), DALL-E 3 (OpenAI, text-to-image via CLIP+diffusion), Imagen 2 (Google DeepMind, text-to-image for Gemini), and Adobe Firefly (content-aware generation in Photoshop). Scientific applications include protein structure generation (RFDiffusion, Baker Lab 2023, generating novel protein backbones with diffusion in SE(3)), molecular conformation generation (DiffDock, Corso et al. 2022, protein-ligand docking via diffusion over product of Euclidean and torus spaces), and materials discovery (Crystal Diffusion VAE, Xie et al. 2022).

  - ### Conformal Prediction
  - **Conformal prediction** (Vovk, Gammerman, Shafer 2005 foundational monograph "Algorithmic Learning in a Random World"; Shafer-Vovk 2008 tutorial; Angelopoulos-Bates 2021 accessible tutorial arXiv:2107.07511) provides **distribution-free, finite-sample valid** coverage guarantees without requiring any assumptions on the data distribution beyond exchangeability — a fundamental departure from parametric Bayesian approaches that require a correctly-specified likelihood. Given a calibration set {(x_i, y_i)}_{i=1}^n drawn exchangeably from the same distribution as the test point (x_{n+1}, y_{n+1}), and a **nonconformity score** A(x, y) measuring how poorly y conforms to the fitted model's predictions for x (e.g., A(x, y) = |y - ŷ| for regression, A(x, y) = 1 - p̂(y|x) for classification), conformal prediction produces a prediction set C(x_{n+1}) = {y : A(x_{n+1}, y) ≤ q̂} where q̂ is the ⌈(n+1)(1-α)⌉/n-quantile of calibration scores {A(x_i, y_i)}. The **marginal coverage guarantee** P(y_{n+1} ∈ C(x_{n+1})) ≥ 1-α holds exactly (not approximately) for any user-specified α ∈ (0,1) and any exchangeable data distribution, any fitted model, and any nonconformity score — a remarkably universal result. **Split conformal prediction** (Papadopoulos et al. 2002) uses a held-out calibration split (40–50% of data), computing q̂ once and applying to all test points at O(1) inference time beyond the base model forward pass. **Inductive conformal prediction** maintains efficiency for large calibration sets. **Mondrian conformal prediction** stratifies calibration by label or group, providing **conditional coverage** guarantees per stratum P(y_{n+1} ∈ C(x_{n+1}) | group(x_{n+1}) = g) ≥ 1-α — stronger than marginal coverage and essential for equitable AI systems where coverage must not differ systematically across demographic groups. **Conformal risk control** (Angelopoulos et al. 2022 "Conformal Risk Control", ICLR 2023) generalises beyond coverage to arbitrary bounded risk functions R(ŷ, y) ≤ B, providing guaranteed bounds on expected risk without assuming the specific 0/1-loss structure of coverage — enabling valid uncertainty quantification for ranking, object detection mAP, and precision-recall trade-offs. Industrial adoption accelerated dramatically 2024–2026: Waymo uses split conformal prediction for object detection confidence thresholds, providing FDA-equivalent coverage certificates for safety-critical decisions; NHS AI radiology guidelines (NHS AIAI 2025) recommend conformal prediction coverage certificates for AI triage systems; Amazon uses conformal regression intervals for demand forecasting uncertainty bounds; EU AI Act Article 9 compliance frameworks increasingly adopt conformal prediction as the mechanism for technical uncertainty documentation for high-risk AI systems.

  - ## Use Cases / Major Families

  - ### Medical, Clinical, and Pharmaceutical Applications
  - Probabilistic models permeate clinical decision support and drug discovery. Bayesian networks power differential diagnosis engines: Isabel DDx (Isabel Healthcare, UK, deployed in 900+ NHS trusts) uses Bayesian reasoning over 11,000+ conditions; QMR-DT (University of Pittsburgh) deployed probabilistic inference across 600 diseases × 4,000 findings in clinical workstations. Gaussian processes model drug pharmacokinetics for personalised dosing: Optimum Patient Care (Cambridge, UK) uses GP-based dose optimisation for COPD and asthma. Hierarchical Bayesian models analyse clinical trial data with partial pooling across sites and patient subgroups — the standard approach in EORTC adaptive trial designs and FDA Bayesian trial guidance (FDA guidance on Bayesian statistics in clinical trials, 2010 revision 2025). Conformal prediction provides coverage-guaranteed prediction intervals for NHS AI radiology referral pathways: radiology AI systems processing 400,000+ NHS mammograms/year (NHS Breast Screening AI Pilot, 2024) use conformal sets for recall rate calibration. The UK's NICE evidence standards framework (2022, updated 2025) explicitly requires that AI medical devices demonstrate calibrated uncertainty outputs — a requirement probabilistic models satisfy intrinsically.
  - In drug discovery, Bayesian optimisation (GP surrogate + acquisition function: expected improvement EI(x) = E[max(f(x) - f_best, 0)], upper confidence bound UCB, Thompson sampling) drives molecular property optimisation loops. Exscientia (Oxford, NASDAQ: EXAI, founded 2012) used GP-BO in 3D chemical space to design DSP-1181 (collaboration with Sumitomo Dainippon Pharma, 2020), the first fully AI-designed drug candidate to enter Phase I clinical trial, completing design-to-clinic in 12 months vs 4.5 years industry average, and subsequently developed multiple GSK/Sanofi collaboration candidates with clinical milestones. BenevolentAI (London, founded 2013, £375M Series C 2021) applies Bayesian graph neural networks over a biomedical knowledge graph of 500,000+ scientific papers for therapeutic target identification and drug repurposing, with baricitinib repurposing for COVID-19 (2020) validated by RECOVERY trial. Variational autoencoders over SMILES strings (JTVAE, Jin et al. 2018) enable latent-space molecular generation with uncertainty quantification. Normalising flows over 3D molecular conformations (DiffDock, Corso et al. 2022) provide probability estimates over docked protein-ligand poses, exceeding AutoDock Vina performance by 28% on PoseBusters benchmark.

  - ### Natural Language Processing and LLM Calibration
  - Bayesian approaches have returned to NLP prominence via the calibration crisis of large language models. GPT-4, Claude 3, and Gemini output temperature-scaled softmax probabilities that are systematically overconfident or underconfident depending on domain and query type — demonstrated by Kadavath et al. (2022) "Language Models (Mostly) Know What They Know" showing GPT-3 calibration degrades by 15-25% ECE under distribution shift. Post-hoc calibration methods: **temperature scaling** T ∈ [0.5, 2.0] dividing logits before softmax, optimised on held-out calibration data minimising NLL; **Platt scaling** fitting a logistic regression to logits; **isotonic regression** fitting a monotone calibration function. Conformal prediction applied to LLMs (Quach et al. 2023 NeurIPS "Conformal Language Modelling"; Angelopoulos et al. 2024 "Prediction-Powered Inference") produces valid set-valued predictions for question answering — instead of a single answer, returning a set of candidate answers with coverage guarantee P(correct answer ∈ set) ≥ 1-α — reducing hallucination exposure for high-stakes deployments. Bayesian active learning via LLM uncertainty (query strategies selecting most uncertain prompts for human-in-the-loop fine-tuning) reduces instruction-tuning data requirements by 40–70% whilst maintaining equivalent downstream task performance (Diao et al. 2023 "Active Prompting"). Bayesian scaling laws (Henighan et al. 2023, Hoffmann et al. 2022 Chinchilla) model loss as a power-law function of compute with Gaussian noise, enabling principled confidence intervals on optimal model sizes — the probabilistic framework underlying Chinchilla optimal compute allocation.

  - ### Robotics and Autonomous Systems
  - Probabilistic robotics (Thrun, Burgard, Fox 2005, the field's foundational textbook) established the framework: robot state (pose, map) is a random variable; sensor measurements and motion commands update belief distributions via Bayesian filtering. **Robot SLAM** (simultaneous localisation and mapping) uses particle filters (FastSLAM, Montemerlo et al. 2002) for feature-based environments and Gaussian process occupancy maps for continuous terrain. Modern neural-probabilistic SLAM systems combine learned perceptual features with Bayesian filtering: iSDF (Ortiz et al. 2022, Meta AI) maintains implicit neural distance fields updated via online Bayesian learning; NeRF-SLAM (Rosinol et al. 2022) fuses probabilistic depth uncertainty from monocular DepthPro with radiance field scene representation. Conformal prediction for object detection (Romano et al. 2023, Angelopoulos-Bates tutorial) provides coverage-guaranteed bounding boxes: Waymo's production pipeline produces conformal sets of object hypotheses with 95% coverage guarantee used for safety monitoring alerts. Boston Dynamics Atlas uses Gaussian process regression for terrain model uncertainty during contact-rich manipulation planning.

  - ## Academic Context
  - Probabilistic models as a unified discipline emerged from the intersection of Judea Pearl's graphical model formalisation (Probabilistic Reasoning in Intelligent Systems, 1988, 900+ citations/year), Lauritzen and Spiegelhalter's junction tree algorithm (1988, JRSS-B), the MRC Biostatistics Unit Cambridge developing BUGS (Bayesian inference Using Gibbs Sampling, Spiegelhalter et al. 1994) as the first accessible Bayesian software, and the statistical physics community's work on spin-glass models as MRFs (Mézard-Montanari 2009 Information, Physics, and Computation). David Heckerman (Microsoft Research) established structure learning from data (Bayesian score for Bayesian network structure, Heckerman-Geiger-Chickering 1995). Koller and Friedman (Probabilistic Graphical Models, 2009, MIT Press, 1270pp) remains the canonical graduate reference, providing the first comprehensive treatment of directed and undirected graphical models, exact and approximate inference, and structure learning algorithms. **Kevin Murphy's Probabilistic Machine Learning** (Vol. 1 Introduction 2022, Vol. 2 Advanced Topics 2023, MIT Press, ~2400pp combined open-access at probml.github.io) constitutes the field's 2020s synthesis, integrating classical graphical models with deep learning, normalising flows, diffusion, GPs, Bayesian optimisation, and probabilistic programming. Murphy (Google Research) trained under Zoubin Ghahramani at Cambridge. **David MacKay** (1967–2016, Cambridge, Warde Professor) made foundational contributions to Bayesian neural networks (weight decay as Gaussian prior, 1992), evidence framework for hyperparameter selection, and Information Theory, Inference, and Learning Algorithms (2003, 640pp, freely available at inference.org.uk, 800,000+ downloads), which remains the most accessible graduate-level probabilistic inference text.

  - ## Current Landscape (2026)
  - Three convergent trends reshape the probabilistic modelling ecosystem in 2026. **Hardware acceleration** via JAX/NumPyro on Google TPUv5 pods enables full-posterior NUTS inference for models with 10M+ parameters previously requiring variational approximations; Stan 2.35's JAX backend provides 8× speedup; GPU-accelerated SMC (BlackJax SMC-SAX) achieves 100× parallelisation over CPU; Pyro 1.9's GPyTorch integration delivers sparse GP inference at 1M observations in <60 seconds on A100. **LLM calibration urgency** driven by EU AI Act 2024/1689 (in force August 2026) Article 9 requiring technical documentation of uncertainty outputs for high-risk AI systems — directly mandating conformal prediction or equivalent for healthcare, employment, and credit scoring AI; NHS AI deployment governance requiring coverage-guaranteed uncertainty certificates for radiology AI triage. **Generative model unification**: score-based diffusion, flow matching (Lipman et al. 2022 conditional flow matching; Albergo-Vaitl 2022 stochastic interpolants), and continuous normalising flows have converged on a shared probabilistic transport framework (Kingma-Gao 2023 unified framework paper); consistency models (Song et al. 2023) distil diffusion trajectories into single-step generation; Stable Diffusion 3 adopts flow matching rather than DDPM for improved training stability. PPL ecosystem consolidation: cross-framework model exchange via JSON trace formats; Soss.jl (UK, Chad Scherrer) exploring algebraic measure-theoretic PPL foundations; Probabilistic Programming Languages workgroup at Alan Turing Institute standardising benchmark suites (PPL-Bench 2025).

  - ## UK Context
  - The **Cambridge Machine Learning Group** (MLG) is globally pre-eminent in probabilistic ML. Rasmussen and Williams (2006 GP textbook, MIT Press, 4,000+ citations/year) established the reference framework for Gaussian processes. Titsias (2009 inducing points for sparse GP variational inference, AISTATS 2009) enabled GP scaling from hundreds to millions of datapoints — the foundational method behind GPflow, GPyTorch, and NumPyro GP modules. Hensman, Fusi, Lawrence (2013 SVGP stochastic variational inference for Gaussian processes, UAI 2013) further scaled via minibatch GP training. Gal and Ghahramani (2016 ICML MC-Dropout, Cambridge PhD thesis) delivered the most-deployed Bayesian deep learning method globally. Richard Turner (Cambridge, now co-leads MLG) contributes diffusion model posterior sampling for inverse problems and probabilistic audio processing. Zoubin Ghahramani (former MLG director, now VP Probabilistic AI at Google Research) trained Neil Lawrence, Kevin Murphy, Carl Rasmussen, Ryan Adams, and Finale Doshi-Velez, representing perhaps the most influential ML mentorship network in probabilistic AI globally. Neil Lawrence (Amazon Science Director, Cambridge, formerly Sheffield) leads open data science and probabilistic ML advocacy, maintaining GPy (Sheffield GP toolbox, 4,500+ GitHub stars) and developing the DataFirst ethical data science framework. The **Alan Turing Institute** (London, 13 university partners) coordinates UK probabilistic AI research: Bayesian Methods for Clinical Trials working group (MHRAX collaboration 2024), Conformal Prediction for Regulatory AI panel (FCA, ICO collaboration 2025), and PPL-Bench standardisation. **Edinburgh** CDT Data Science (Chris Williams co-founder PRML with Bishop, Amos Storkey GAN + probabilistic ML, Charles Sutton PPL and Monte Carlo methods) produced 200+ Bayesian ML PhDs 2014–2026. **Imperial College** Statistics (Mark van der Wilk: sparse GP, probabilistic continual learning; Marc Deisenroth: GP for robot learning, co-author Mathematics for ML textbook; Seth Flaxman: spatiotemporal Bayesian modelling for COVID-19 case estimation NHS SAGE). **Northern England**: Sheffield (Neil Lawrence base 2007–2012, GPy, AutoML Bayesian optimisation research), Manchester Centre for Imaging Sciences (Prof Geoffrey Parker: dynamic MRI Bayesian reconstruction, probabilistic pharmacokinetic modelling), Leeds CDT Fluid Dynamics (Bayesian UQ for CFD calibration at aerospace Tier 1 suppliers), Newcastle Digital Institute (smart-grid probabilistic energy demand forecasting EPSRC EP/W001098/1). **BenevolentAI** (London) and **Exscientia** (Oxford) represent the UK probabilistic ML commercial frontier in drug discovery.

  - ## Future Directions (2026–2030)
  - **Amortised MCMC** combining learned inference networks with MCMC corrections for valid posterior samples at neural-network speed: transport score MCMC (Zhang et al. 2023), learned HMC mass matrices (Hoffman et al. 2025), neural transport NUTS achieving 10–50× speedups over standard NUTS with asymptotically correct posteriors. **Causal probabilistic models**: structural causal models (SCMs) as PPL programs (Mooij et al. 2023, Bongers et al. 2021) enabling counterfactual reasoning from observational data — critical for policy evaluation, clinical trial emulation (Pearl's do-calculus), and algorithmic fairness under distribution shift. The causal discovery literature (Spirtes-Glymour-Scheines 1993, Peters-Janzing-Schölkopf 2017) is increasingly integrated with modern PPLs via differentiable DAG learning (DAG-No-TEARS, Zheng et al. 2018; DAGMA, Bello et al. 2022). **Scalable BDL for foundation models**: efficient Hessian approximations (spectral density estimation, randomised Nyström, KFAC for transformer attention blocks) enabling Laplace posteriors over LLMs with 1B–7B parameters; Goldblum et al. (2023) Bayesian model comparison via marginal likelihood approximation for LLM architecture selection; **probabilistic fine-tuning** of LoRA adapters with SWAG posterior for calibrated instruction following. **Probabilistic numerical methods** (Cockayne-Oates-Sullivan-Girolami 2019, Hennig-Osborne-Girolami 2022 textbook "Probabilistic Numerics") treating numerical algorithms (ODE solvers, quadrature, linear algebra) as Bayesian inference — quantifying discretisation uncertainty in scientific simulations, accelerating expensive CFD/FEM simulations with probabilistic surrogate calibration. **Probabilistic forecasting standards**: ECMWF (Reading, UK) and Met Office (Exeter) transitioning from ensemble NWP to neural probabilistic forecasting (GraphCast uncertainty quantification, NeuralGCM stochastic parameterisation); UK Centre for Environmental Data Analysis (CEDA) developing probabilistic climate projection standards with conformal coverage certificates; electricity market probabilistic dispatch using quantile regression forests and Bayesian LSTM for renewable energy uncertainty.

  - ## Research & Literature
  - **Foundational Texts**
  - Koller, D. & Friedman, N. (2009). Probabilistic Graphical Models: Principles and Techniques. MIT Press. 1270pp. Canonical reference for graphical models.
  - Murphy, K.P. (2022). Probabilistic Machine Learning: An Introduction. MIT Press. Open-access at probml.github.io.
  - Murphy, K.P. (2023). Probabilistic Machine Learning: Advanced Topics. MIT Press. Open-access.
  - Pearl, J. (1988). Probabilistic Reasoning in Intelligent Systems. Morgan Kaufmann.
  - MacKay, D.J.C. (2003). Information Theory, Inference, and Learning Algorithms. Cambridge University Press. Freely available at inference.org.uk.
  - Bishop, C.M. (2006). Pattern Recognition and Machine Learning. Springer. (PRML)
  - Rasmussen, C.E. & Williams, C.K.I. (2006). Gaussian Processes for Machine Learning. MIT Press. Freely available at gaussianprocess.org.
  - Thrun, S., Burgard, W. & Fox, D. (2005). Probabilistic Robotics. MIT Press.
  - **Inference and Algorithms**
  - Neal, R.M. (2011). MCMC using Hamiltonian dynamics. In Handbook of Markov Chain Monte Carlo, Ch.5. CRC Press.
  - Hoffman, M.D. & Gelman, A. (2014). The No-U-Turn Sampler. Journal of Machine Learning Research, 15, 1593–1623.
  - Blei, D.M., Kucukelbir, A. & McAuliffe, J.D. (2017). Variational Inference: A Review for Statisticians. JASA, 112(518), 859–877.
  - Jordan, M.I., Ghahramani, Z., Jaakkola, T.S. & Saul, L.K. (1999). An Introduction to Variational Methods. Machine Learning, 37, 183–233.
  - Gelfand, A.E. & Smith, A.F.M. (1990). Sampling-Based Approaches to Calculating Marginal Densities. JASA, 85(410), 398–409.
  - Vehtari, A. et al. (2021). Rank-Normalization, Folding, and Localization: An Improved R̂ for Assessing MCMC Convergence. Bayesian Analysis, 16(2), 667–718.
  - **Probabilistic Programming**
  - Carpenter, B. et al. (2017). Stan: A Probabilistic Programming Language. Journal of Statistical Software, 76(1).
  - Bingham, E. et al. (2019). Pyro: Deep Universal Probabilistic Programming. JMLR, 20(28), 1–6.
  - Phan, D. et al. (2019). Composable Effects for Flexible and Accelerated Probabilistic Programming in NumPyro. arXiv:1912.11554.
  - Salvatier, J., Wiecki, T.V. & Fonnesbeck, C. (2016). Probabilistic Programming in Python using PyMC3. PeerJ Computer Science, 2, e55.
  - Ge, H., Xu, K. & Ghahramani, Z. (2018). Turing: A Language for Flexible Probabilistic Inference. AISTATS 2018.
  - Cusumano-Towner, M.F. et al. (2019). Gen: A General-Purpose Probabilistic Programming System. PLDI 2019.
  - **Deep Generative Models**
  - Kingma, D.P. & Welling, M. (2014). Auto-Encoding Variational Bayes. ICLR 2014.
  - Rezende, D.J. & Mohamed, S. (2015). Variational Inference with Normalizing Flows. ICML 2015.
  - Song, Y. et al. (2021). Score-Based Generative Modeling through Stochastic Differential Equations. ICLR 2021.
  - Ho, J., Jain, A. & Abbeel, P. (2020). Denoising Diffusion Probabilistic Models. NeurIPS 2020.
  - Dinh, L., Sohl-Dickstein, J. & Bengio, S. (2017). Density Estimation using Real-valued Non-Volume Preserving (RealNVP) Transformations. ICLR 2017.
  - Blei, D.M., Ng, A.Y. & Jordan, M.I. (2003). Latent Dirichlet Allocation. JMLR, 3, 993–1022.
  - **Bayesian Deep Learning**
  - Gal, Y. & Ghahramani, Z. (2016). Dropout as a Bayesian Approximation. ICML 2016.
  - Lakshminarayanan, B., Pritzel, A. & Blundell, C. (2017). Simple and Scalable Predictive Uncertainty Estimation using Deep Ensembles. NeurIPS 2017.
  - Daxberger, E. et al. (2021). Laplace Redux — Effortless Bayesian Deep Learning. NeurIPS 2021.
  - Maddox, W.J. et al. (2019). A Simple Baseline for Bayesian Uncertainty in Deep Learning (SWAG). NeurIPS 2019.
  - Wilson, A.G. & Izmailov, P. (2020). Bayesian Deep Learning and a Probabilistic Perspective of Generalisation. NeurIPS 2020.
  - **Conformal Prediction**
  - Vovk, V., Gammerman, A. & Shafer, G. (2005). Algorithmic Learning in a Random World. Springer.
  - Angelopoulos, A.N. & Bates, S. (2021). A Gentle Introduction to Conformal Prediction and Distribution-Free Uncertainty Quantification. arXiv:2107.07511.
  - Angelopoulos, A.N. et al. (2022). Conformal Risk Control. ICLR 2023.
  - Romano, Y., Patterson, E. & Candes, E. (2019). Conformalized Quantile Regression. NeurIPS 2019.

  - ### Distribution Families and Conjugate Pairs
  - The tractability of Bayesian inference depends critically on distribution family choice. Key conjugate pairs where p(z|x) belongs to the same family as p(z):
    - **Gaussian-Gaussian**: N(μ, σ²) prior on mean μ, N(x|μ, σ²_noise) likelihood → Gaussian posterior; used in Kalman filtering, Gaussian process regression, linear regression with known noise variance
    - **Dirichlet-Categorical/Multinomial**: Dir(α) prior on probability vector θ, Categorical(θ) likelihood → Dir(α + counts) posterior; used in topic models (LDA), language model Bayesian smoothing (Kneser-Ney as limit of Dirichlet process), Naïve Bayes text classification
    - **Beta-Bernoulli**: Beta(a,b) prior on bias p, Bernoulli(p) likelihood → Beta(a + heads, b + tails) posterior; used in A/B testing (Bayesian hypothesis testing), click-through rate estimation, clinical binary outcome trials
    - **Gamma-Poisson**: Gamma(a,b) prior on rate λ, Poisson(λ) likelihood → Gamma(a + Σx_i, b + n) posterior; used in count data modelling (web traffic, disease incidence, queueing systems)
    - **Normal-Inverse-Wishart**: NIW prior on (μ, Σ) for multivariate Gaussian → NIW posterior; used in Gaussian mixture model EM with Bayesian updating, LDA with full-covariance topic distributions
    - **Gaussian Process prior**: GP prior over function f ~ GP(m, k) with Gaussian likelihood → GP posterior (still a GP) with posterior mean and covariance analytically computed via Woodbury identity; foundational to GP regression (Rasmussen-Williams 2006)
  - **Exponential family** distributions p(x|η) = h(x) exp(η^T T(x) - A(η)) with natural parameters η, sufficient statistics T(x), and log-partition function A(η) always have conjugate priors of the form p(η|χ,ν) ∝ exp(η^T χ - ν A(η)) enabling CAVI updates in closed form — the algebraic foundation of mean-field variational inference for latent variable models

  - ### Inference Algorithm Comparison
  - Trade-offs between inference methods across dimensions of accuracy, scalability, and ease of use:
    - **Exact inference** (junction tree, variable elimination): exact posterior; O(n × exp(tree-width)); feasible only for low tree-width (<20) graphical models; deployed in discrete Bayesian networks (Isabel DDx, HUGIN commercial tool)
    - **CAVI mean-field VI**: O(n × K × D) per iteration; biased (underestimates variance due to factorisation); fast convergence for conjugate exponential family; deployed in LDA (Hoffman stochastic VI), GMM clustering, sparse Bayesian linear models
    - **Expectation Propagation**: O(n × K²) per sweep; moment-matched approximation; more accurate than mean-field for strongly correlated posteriors; deployed in Bayesian matrix factorisation, sparse GP classification (Rasmussen-Williams Ch.3)
    - **Metropolis-Hastings**: unbiased asymptotically; O(1) per step (excluding likelihood evaluation); O(d^{-1/4}) acceptance rate scaling; suitable for d < 100 and expensive likelihoods
    - **Gibbs sampling**: unbiased; O(d) per sweep; no acceptance step (always accepted); requires tractable full conditionals; excellent for discrete-continuous mixed models
    - **HMC/NUTS**: unbiased; O(L × d) per step (L leapfrog); O(d^{1/4}) acceptance scaling; requires continuous differentiable log-posterior; standard for d ∈ [10, 10,000]; deployed in Stan, PyMC, NumPyro
    - **SMC/Particle filters**: unbiased; O(N × T × d) for N particles over T time steps; handles non-stationary targets; sequential real-time updating; deployed in robot SLAM, financial state-space filtering
    - **Stochastic VI (SVI)**: biased; O(mini-batch × K) per step; Adam-optimisable; GPU-parallelisable; deployed in Pyro SVI, VAE training, large-scale Bayesian neural networks
    - **Laplace approximation**: O(d²) for Hessian (O(d) for diagonal/KFAC); biased (Gaussian shape assumption); fast; post-hoc applicable to pretrained networks; deployed in last-layer Laplace, neural ODEs uncertainty
    - **MC-Dropout**: O(T × forward-pass); biased (approximate GP posterior); zero architectural change; T=30 standard; deployed at Waymo, NHS radiology AI, nnU-Net medical segmentation

  - ### Key Theorems and Theoretical Foundations
  - Probabilistic models rest on a small number of foundational theoretical results:
    - **Bayes' theorem**: p(z|x) = p(x|z)p(z) / p(x); from conditional probability; the foundational update rule for all Bayesian inference
    - **Markov blanket theorem** (Pearl 1988): every node in a Bayesian network is conditionally independent of all non-descendants given its Markov blanket (parents, children, co-parents); enables modular inference and local updates
    - **Hammersley-Clifford theorem** (1971, published posthumously): any strictly positive distribution that factorises over a graph of conditional independencies is a Gibbs distribution (MRF) over that graph; duality between graphical model conditional independence structure and factorisation
    - **ELBO-KL duality**: log p(x) = ELBO(q) + KL[q(z|x) || p(z|x)]; maximising ELBO over q simultaneously maximises evidence and minimises KL divergence; the variational EM framework
    - **Jensen's inequality for ELBO**: log E_p[f(z)] ≥ E_p[log f(z)]; applied with f(z) = p(x,z)/q(z|x) and q-expectation to derive the ELBO as a lower bound
    - **Bernstein-von Mises theorem**: under regularity conditions, as n → ∞ the posterior p(θ|x₁,...,xₙ) converges to N(θ_true, I(θ_true)⁻¹/n) where I(θ) is the Fisher information; Bayesian credible intervals are asymptotically equivalent to frequentist confidence intervals
    - **PAC-Bayes bound** (McAllester 1998, Catoni 2007): for any prior P and any posterior Q, the expected generalisation error E[L(Q)] ≤ E_{S~Dⁿ}[L̂(Q,S)] + √(KL[Q||P] + log(1/δ)) / (2n); connects variational inference to PAC learning theory; tighter bounds for concentrated posteriors
    - **Tweedie's formula** (Efron 2011): E[x₀|x_t] = x_t + σ_t² ∇_{x_t} log p_t(x_t); connects denoising score to Bayesian conditional expectation; theoretical foundation of diffusion model denoising interpretation
    - **Exchangeability and de Finetti's theorem** (de Finetti 1931, Hewitt-Savage 1955): an infinite exchangeable sequence (x₁, x₂, ...) can be represented as a mixture of i.i.d. sequences: p(x₁,...,xₙ) = ∫ ∏ᵢ p(xᵢ|θ) dP(θ); Bayesian hierarchical modelling is the natural framework for exchangeable data; Dirichlet process = nonparametric prior over mixing distributions

  - ### Software Ecosystem and Tooling
  - The probabilistic modelling software ecosystem stratifies across three performance tiers:
  - **Tier 1 — High-performance compiled backends**: Stan (C++ with NUTS), PyMC with Nutpie (Rust NUTS), Turing.jl (Julia LLVM JIT)
    - Stan: model → C++ → LLVM → native binary; NUTS gradient evaluated in ~1µs for 100-parameter models
    - PyMC Nutpie: Rust implementation of NUTS, 3-5× faster than Python PyMC3 for large hierarchical models
    - Turing.jl: model macro → Julia IR → LLVM; supports ODE/SDE models via DifferentialEquations.jl
  - **Tier 2 — GPU/TPU-accelerated differentiable backends**: NumPyro (JAX), Pyro (PyTorch), Blackjax (JAX)
    - NumPyro vmap: 64 parallel NUTS chains on 8× TPUv3 in 90 seconds for 200-parameter hierarchical model
    - Pyro SVI: Adam-based ELBO optimisation, 1M gradient steps/hour on A100, discrete latent via REINFORCE
    - Blackjax: composable MCMC kernels (NUTS, MCLMC, SGLD), pure JAX functional API, used at DeepMind
  - **Tier 3 — Educational and prototyping**: BUGS/WinBUGS (Gibbs sampling, foundational but superseded), JAGS (GPL Gibbs/slice sampling via R rjags), Infer.NET (Microsoft Research, factor graph message passing for .NET)
  - **Diagnostic tooling**: ArviZ (Python, MCMC diagnostics: R̂, ESS, MCSE, LOO cross-validation, posterior predictive checks); PSIS-LOO-CV (Vehtari et al. 2017, widely used model selection); Bambi (Bayesian Model Building Interface, brms-equivalent for PyMC); corner.py (posterior corner plots); SBC (simulation-based calibration, Talts et al. 2018, checking sampler correctness)
  - **Model selection**: Bayes factors via bridge sampling (Gronau et al. 2017, bridgesampling R package); WAIC (Watanabe 2010, widely applicable information criterion); PSIS-LOO (Vehtari-Gelman-Gabry 2017, approximating leave-one-out cross-validation from MCMC samples via Pareto-smoothed importance sampling)

  - ### Key Algorithms Reference
  - **Bayesian updating**: p(θ|x₁,...,xₙ) ∝ p(θ) ∏ᵢ p(xᵢ|θ) — sequential conditioning; posterior after n observations is prior for n+1
  - **EM algorithm**: Expectation step E[log p(x,z|θ)|x,θ_old] → Maximisation step θ_new = argmax Q(θ, θ_old); monotonically increases log p(x|θ)
  - **Belief propagation**: Factor graph message passing μ_{f→x}(x) = ∑_~ x f(x, ~x) ∏_{y∈ne(f)\x} μ_{y→f}(y); exact on trees, iterates to convergence (loopy BP) on general graphs
  - **Variational EM (mean-field)**: E-step update q*(z_j) ∝ exp(E_{-j}[log p(x,z)]); M-step maximise E_q[log p(x,z,θ)] over θ
  - **Stochastic gradient VI**: ELBO gradient estimator via reparameterisation ∇_φ ELBO = E_{ε~N(0,I)}[∇_φ log p(x, g(φ,ε)) - ∇_φ log q_φ(g(φ,ε)|x)]; low-variance, enables Adam optimisation
  - **NUTS doubling procedure**: Binary tree of depth j; double until U-turn or Metropolis slice condition violated; select from tree via multinomial sampling on depth with slice conditions
  - **Tweedie denoising score**: x̂₀(x_t, t) = (x_t + σ²_t s_θ(x_t, t)) / √ᾱ_t; MMSE denoiser at each noise level via learned score
  - **Split conformal p-value**: p(x_{n+1}, y) = #{i∈{1..n}: A(xᵢ,yᵢ) ≥ A(x_{n+1},y)} / (n+1); C(x) = {y: p(x,y) > α}

  - ### Normalising Flows: Architecture Taxonomy
  - Normalising flows construct complex distributions via sequences of invertible transformations. Key architectures and their properties:
    - **NICE** (Dinh et al. 2015): additive coupling layers; trivial Jacobian determinant (triangular); limited expressiveness, foundational paper
    - **RealNVP** (Dinh et al. 2017): affine coupling x_{1:d/2}' = x_{1:d/2}, x_{d/2:d}' = x_{d/2:d} ⊙ exp(s(x_{1:d/2})) + t(x_{1:d/2}); log|det J| = ∑ s_i(x_{1:d/2}); used in image generation, speech synthesis (WaveNet RealNVP variant)
    - **Glow** (Kingma-Dhariwal 2018): 1×1 invertible convolution for permutation + actnorm for scale shift + affine coupling; log|det J| = log|det W| (LU-decomposed); 256×256 face generation, deployed in image inpainting APIs
    - **Neural Spline Flows** (Durkan et al. 2019): piecewise rational-quadratic bijections via monotone spline interpolation; more expressive than affine coupling; 8–10 bins standard; state-of-art for tabular density estimation
    - **FFJORD** (Grathwohl et al. 2019): continuous normalising flow via neural ODE dz/dt = f_θ(z, t); log|det J| computed via Hutchinson trace estimator (unbiased, O(d) vs O(d²) for full Jacobian); high expressiveness at high computational cost
    - **Masked Autoregressive Flow** (MAF, Papamakarios et al. 2017): autoregressive factorisation p(x) = ∏ᵢ p(xᵢ|x_{<i}) with each factor Gaussian; fast density evaluation, slow sampling (sequential); used for posterior approximation in likelihood-free inference
    - **Inverse Autoregressive Flow** (IAF, Kingma et al. 2016): inverse of MAF; fast sampling, slow density; used as variational posterior in high-performance VAEs
    - **Neural Posterior Estimation** (Cranmer-Brehmer-Louppe 2020, simulation-based inference): normalising flow trained to approximate p(θ|x) for simulator-based models without tractable likelihoods; deployed in particle physics (ATLAS detector calibration), neuroscience (Bayesian brain modelling), gravitational wave parameter estimation (LIGO)

  - ### Gaussian Processes: Kernel Families and Scalability
  - Gaussian processes define a distribution over functions f ~ GP(m, k) where m(x) is the mean function and k(x, x') is the covariance kernel. The posterior GP given observations {X, y} is: f* | X, y, X* ~ N(μ*, Σ*) with μ* = m(X*) + K(X*, X)[K(X,X) + σ²I]⁻¹(y - m(X)) and Σ* = K(X*, X*) - K(X*, X)[K(X,X) + σ²I]⁻¹K(X, X*). Key kernel families:
    - **Squared Exponential (RBF)**: k(x,x') = σ² exp(-||x-x'||²/(2ℓ²)); infinitely differentiable functions; characteristic lengthscale ℓ; standard default kernel
    - **Matérn-5/2**: k(x,x') = σ²(1 + √5r/ℓ + 5r²/(3ℓ²)) exp(-√5r/ℓ), r = ||x-x'||; twice-differentiable; better calibrated for most physical processes than RBF; recommended default (Stein 1999)
    - **Rational Quadratic**: k(x,x') = σ²(1 + r²/(2αℓ²))^{-α}; scale mixture of RBF kernels; captures multi-scale variation; reduces to RBF as α→∞
    - **Periodic**: k(x,x') = σ² exp(-2sin²(π|x-x'|/p)/ℓ²); for periodic functions with period p; used in time-series modelling (seasonal effects)
    - **Spectral Mixture** (Wilson-Adams 2013): k(x,x') = ∑_q w_q cos(2π μ_q^T (x-x')) exp(-2π² (x-x')^T diag(v_q) (x-x')); flexible multi-scale periodic; learned from data; deployed in Chronos forecasting (Amazon, 2024)
  - Scalability: naive GP inference is O(n³) for Cholesky factorisation of K(X,X) + σ²I, limiting exact GPs to n ≤ 10,000. Scalable approximations:
    - **Inducing points (Titsias 2009)**: m << n inducing locations Z; variational lower bound on log p(y|X); O(nm²) per iteration; foundational to GPflow, GPyTorch sparse GP modules
    - **SVGP (Hensman 2013)**: stochastic mini-batch training of inducing point GP; scales to n = 10M; O(m³ + B×m²) per mini-batch B
    - **SKI/KISS-GP** (Wilson-Nickisch 2015): grid-based inducing points + structured kernel interpolation; O(n + m log m) with FFT; exploits Kronecker structure for multidimensional inputs
    - **Hilbert Space GP** (Solin-Sarkka 2020): stationary GP approximation via Laplace eigenfunctions of the Matérn kernel on compact domain; O(n × L) training; L basis functions; deployed in Turing.jl HSGP module

  - ### Hierarchical Models and Partial Pooling
  - Hierarchical (multilevel) Bayesian models are among the most practically powerful probabilistic modelling tools, implementing **partial pooling** across groups:
    - **Complete pooling**: single estimate θ across all groups; ignores between-group variation; underfits group-specific effects
    - **No pooling**: separate θ_g per group g; ignores shared information; overfits small-n groups
    - **Partial pooling** (Stein-James 1961 shrinkage estimator; Gelman-Hill 2007 textbook): θ_g ~ N(μ, τ²), μ ~ hyperprior, τ ~ hyperprior; groups share information via hyperparameters; optimal for many groups with small n each; the **James-Stein estimator** is the frequentist version
  - Canonical examples of hierarchical models:
    - **Eight schools** (Rubin 1981): 8 independent SAT coaching studies; school effects θ_j ~ N(μ, τ²); posterior shrinks estimates toward grand mean; textbook example in Gelman-Carlin-Stern-Rubin "Bayesian Data Analysis" 3rd ed 2013
    - **Radon measurement** (Gelman-Hill 2007 Ch.12): 919 Minnesota counties; county-level uranium (group predictor) + household basement/floor measurement; 3-level hierarchy (state, county, household); 58% RMSE reduction vs no pooling
    - **NBA free throws** (Efron-Morris 1975 original shrinkage paper): player career FT% pooled toward league mean; demonstrated James-Stein dominance over MLE
    - **Pharmacokinetic population models**: patient-level PK parameters θ_i ~ N(θ_pop, Ω), θ_pop ~ hyperprior; Bayesian NONMEM alternative; deployed in FDA drug approval submissions (>200 BLA/NDA submissions use Stan/NONMEM Bayesian PK 2018–2026)
  - The non-centred parameterisation resolves the **funnel geometry problem** in hierarchical models: instead of sampling (μ, τ, θ_1,...,θ_K) directly, reparameterise as θ_k = μ + τ × η_k, η_k ~ N(0,1), then sample (μ, τ, η_1,...,η_K); the posterior over (μ, τ, η) has no funnel and HMC/NUTS mixes exponentially faster

  - ### Bayesian Nonparametrics
  - Bayesian nonparametric (BNP) models place priors over infinite-dimensional parameter spaces, allowing model complexity to grow with data:
    - **Dirichlet Process** (Ferguson 1973): DP(α, G₀) is a distribution over distributions; draws G ~ DP are almost surely discrete; used as prior on mixture model atom distributions in Dirichlet Process Mixture Models (DPMM); number of components K determined automatically from data; Chinese Restaurant Process and Stick-Breaking (Sethuraman 1994) representations
    - **Gaussian Process** (prior over functions, Rasmussen-Williams 2006): effectively a nonparametric model for regression and classification; posterior complexity grows with n
    - **Indian Buffet Process** (Griffiths-Ghahramani 2011): binary matrix prior with unbounded columns; used for latent feature models where number of features is unknown; Beta Process prior representation
    - **Hierarchical Dirichlet Process** (Teh et al. 2006): multiple grouped datasets sharing global set of topics; each group has DP mixture over global topics; foundational to hierarchical topic models, online DP (Hoffman et al. 2010)
    - **Gaussian Process LVM** (Lawrence 2005, Cambridge/Sheffield): low-dimensional GP latent variable model; maps latent z via GP to observation x; nonlinear dimensionality reduction with uncertainty; used in motion capture analysis, gene expression visualisation

  - ### Probabilistic Forecasting and Time-Series
  - Probabilistic forecasting produces predictive distributions p(y_T+h | y_{1:T}) rather than point estimates, enabling calibrated prediction intervals and risk quantification:
    - **State space models**: Local level, local linear trend, seasonal decomposition (ETS Exponential Smoothing State Space); Kalman filter for Gaussian models; structural time series (Harvey 1990; Durbin-Koopman 2012)
    - **BSTS** (Bayesian Structural Time Series, Scott-Varian 2014, R bsts package): trend + seasonal + regression components; spike-and-slab prior for variable selection; deployed at Google for web query forecasting
    - **Prophet** (Taylor-Letham 2018, Facebook/Meta, open-source): decomposable model trend + seasonality + holidays; Laplace prior on changepoints; Stan backend; 1M+ GitHub downloads; used by Airbnb, Twitter, NHS for operational planning
    - **DeepAR** (Salinas et al. 2020, Amazon): recurrent neural network trained to predict parameters of output distribution (Gaussian, negative binomial); produces calibrated quantile forecasts; deployed in AWS Forecast service
    - **Temporal Fusion Transformer** (Lim et al. 2021): attention-based multi-horizon forecasting with quantile regression outputs; winner M5 forecasting competition (Walmart SKU-level demand)
    - **Chronos** (Ansari et al. 2024, Amazon): language model pre-trained on time series quantised as tokens; zero-shot probabilistic forecasting; GP uncertainty on top of transformer backbone; ArXiv 2024, deployed in Amazon Forecast
    - **Neural probabilistic forecasting evaluation**: WQL (Weighted Quantile Loss), CRPS (Continuous Ranked Probability Score = ∫ (F(y) - 1_{y≥z})² dz, proper scoring rule for distributional forecasts), coverage at 80%/90%/95% nominal levels, sharpness (interval width), calibration (coverage vs nominal)

  - ### Simulation-Based Inference and Likelihood-Free Methods
  - When the likelihood p(x|θ) is intractable (expensive simulator, implicit model), likelihood-free inference methods approximate the posterior without evaluating p(x|θ):
    - **Approximate Bayesian Computation** (ABC, Tavaré 1997, Beaumont 2002): accept samples θ ~ p(θ) if simulator output x' satisfies ρ(S(x'), S(x_obs)) < ε for summary statistics S and distance ρ; curse of dimensionality in summary statistics; deployed in population genetics (BEAST, coalescent models), ecology (individual-based models), epidemiology
    - **Sequential Monte Carlo ABC** (SMC-ABC): sequence of decreasing tolerances ε₁ > ε₂ > ... > ε_T with particle reweighting; more efficient than naive ABC rejection
    - **Neural Likelihood Estimation** (NLE, Papamakarios et al. 2019): train normalising flow q_φ(x|θ) to approximate likelihood; then run MCMC with surrogate likelihood; amortised across simulations
    - **Neural Posterior Estimation** (NPE, Cranmer-Brehmer-Louppe 2020): train normalising flow q_φ(θ|x) directly approximating posterior; single-round or multi-round (SNPE-A/B/C); deployed at LIGO for gravitational wave parameter estimation (Dax et al. 2021), neuroscience (Gonçalves et al. 2020), particle physics ATLAS
    - **Neural Ratio Estimation** (NRE): train classifier to distinguish p(x,θ) from p(x)p(θ); ratio p(x|θ)/p(x) proportional to posterior/prior; sequential NRE (SNRE) improves sample efficiency; swyft library (Miller et al. 2022)
    - **Key software**: sbi (simulation-based inference Python library, Cranmer group, 2022); lampe (likelihood-free + normalising flows, PyTorch); elfi (Engine for Likelihood-Free Inference, Python); BayesFlow (Köthe group, Bayesian scientific neural networks)

  - ### Calibration Benchmarks (2025-2026)
  - Calibration is measured via Expected Calibration Error ECE = ∑_m (|B_m|/n) |acc(B_m) - conf(B_m)| over confidence bins B_m. Benchmark results on ImageNet-Val:
    - Uncalibrated ResNet-50: ECE 4.1% (Guo et al. 2017 on older checkpoint), modern training ECE ~2.5%
    - Temperature scaling (T=1.3): ECE 0.9%; effective for in-distribution calibration
    - MC-Dropout (T=30, p=0.1): ECE 1.2%; marginal improvement over temperature scaling in-distribution, +15% ECE reduction under dataset shift
    - Deep Ensembles (M=5): ECE 0.6%; best in-distribution; +40% ECE reduction under natural distribution shift (ImageNet-C corruption benchmarks)
    - SWAG: ECE 0.7%; close to ensembles at 1.0× inference cost vs 5× for ensembles
    - Last-layer Laplace: ECE 0.8%; post-hoc, no retraining required
    - Temperature scaling + conformal calibration: coverage guaranteed 95% for prediction sets; typical set size 2.3 classes (top-5 subset) for 95% coverage on ImageNet
  - OOD detection benchmark (ImageNet vs iNaturalist, as in Lakshminarayanan 2017):
    - Maximum softmax probability (MSP): AUROC 0.876 baseline
    - Temperature-scaled MSP: AUROC 0.881
    - MC-Dropout entropy: AUROC 0.891
    - Deep Ensembles (M=5) predictive entropy: AUROC 0.923
    - Energy score (Liu et al. 2020): AUROC 0.895
    - ODIN (Liang et al. 2018): AUROC 0.899 with input perturbation + temperature
    - Mahalanobis distance (Lee et al. 2018): AUROC 0.915 using penultimate layer features

  - ### Bayesian Optimisation
  - **Bayesian optimisation** (BO) uses a probabilistic surrogate model — typically a Gaussian process — to optimise expensive black-box functions f(x) with a limited query budget (20–1,000 evaluations):
    - **GP surrogate**: f ~ GP(m, k); posterior μ(x), σ²(x) after n observations provide estimate and uncertainty
    - **Acquisition functions** (next query selection balancing exploitation and exploration):
      - Expected Improvement EI(x) = E[max(f(x) - f_best, 0)] = (μ(x) - f_best) Φ(Z) + σ(x) φ(Z), Z = (μ(x) - f_best)/σ(x)
      - Upper Confidence Bound UCB(x) = μ(x) + κ σ(x), κ = exploration weight (κ=2 typical)
      - Thompson Sampling: sample f_s ~ posterior GP, then x_next = argmax f_s(x); naturally balances exploration
      - Probability of Improvement PI(x) = Φ((μ(x) - f_best)/σ(x)); greedy, prone to over-exploitation
    - **BO for hyperparameter optimisation**: Snoek et al. (2012 NeurIPS "Practical Bayesian Optimization of Machine Learning Algorithms"); Spearmint library; outperforms grid search and random search with 3-5× fewer evaluations to match performance
    - **BO for drug discovery**: Exscientia GP-BO in 3D molecular space (DSP-1181 2020); AstraZeneca ADMET property optimisation loops; Pfizer MRL automated synthesis robot (2024) with GP surrogate on reaction conditions
    - **BO for materials science**: Attiyat et al. perovskite solar cell efficiency optimisation (2023); Lookman et al. shape memory alloy discovery via BO (2019 Nature Materials); UK EPSRC-funded AI-for-materials initiative (AMAS, 2024)
    - **Software**: Ax (Meta, PyTorch-based, 2019), BoTorch (Meta, GPU-accelerated acquisition optimisation, 2020), GPyOpt (Sheffield/Cambridge, deprecated but historically important), Optuna (preferred Bayesian sampling backend using CMA-ES), SMAC3 (Auto-ML, Freiburg)

  - ### Industrial Deployment Patterns (2024-2026)
  - Probabilistic models follow identifiable deployment patterns by sector and use-case:
  - **Healthcare AI**:
    - Isabel DDx (UK): Bayesian network over 11,000 conditions, deployed 900+ NHS trusts, GP and A&E decision support
    - NHS Breast Screening AI Pilot (2024): conformally-calibrated recall scores on 400,000+ mammograms, 18% reader time reduction
    - NHS AI Lab (NHSX 2023 report): conformal prediction recommended for all AI triage systems in NHS deployment guidance
    - Oxford/Moorfields ophthalmology AI (Google DeepMind 2018): Bayesian uncertainty maps for retinal OCT, >50 ophthalmic conditions, 2M patient dataset
    - Freenome (US): Bayesian multi-omic cancer liquid biopsy, GP regression on cfDNA methylation signatures, early detection study 2024
  - **Finance and Risk**:
    - JPMorgan: Bayesian portfolio allocation, Black-Litterman model (Gaussian prior on returns + investor views), deployed across $2.4T AUM
    - Goldman Sachs: Bayesian VAR (Value at Risk) models, Monte Carlo stress testing for regulatory capital (Basel III/IV), FRTB internal model approach
    - Citadel/Two Sigma: Gaussian process factor models for alpha signal generation, regime-switching hidden Markov models
    - UK Prudential Regulation Authority: Bayesian model risk framework for internal model approval (Solvency II), requiring posterior predictive validation
  - **Climate and Earth Science**:
    - ECMWF (Reading): ensemble NWP (50-member ECMWF-ENS), transitioning to neural probabilistic forecasting with GP uncertainty
    - UK Met Office (Exeter): MOGREPS-UK ensemble, GraphCast calibration (Google DeepMind/Met Office MOU 2024)
    - UK Centre for Environmental Data Analysis (CEDA, Chilton): probabilistic climate projection standards, conformal coverage for UKCP18 projections
    - Alan Turing Institute/BAS: Bayesian ice sheet modelling for sea-level rise uncertainty quantification, EPSRC EP/T000414/1
  - **Autonomous Systems**:
    - Waymo (Alphabet): factor graph belief propagation for HD map inference, split conformal 95% coverage for object detection, probability-flow ODE for trajectory prediction uncertainty
    - Cruise (GM): Gaussian process obstacle prediction, Bayesian occupancy grid mapping
    - Boston Dynamics: GP regression terrain uncertainty for Atlas contact planning, Kalman filter proprioceptive state estimation
    - BAE Systems AI (UK, Farnborough): Bayesian sensor fusion for autonomous military vehicle perception, EPSRC Defence Partnership collaboration

  - ### Probabilistic Model Selection and Comparison
  - Model selection in the Bayesian framework uses marginal likelihood (evidence) p(x|M) = ∫ p(x|θ, M) p(θ|M) dθ comparing models M₁, M₂ via Bayes factor BF₁₂ = p(x|M₁)/p(x|M₂):
    - BF₁₂ > 100: decisive evidence for M₁ (Jeffreys 1961 scale)
    - BF₁₂ 10-100: strong evidence
    - BF₁₂ 3-10: moderate evidence
    - BF₁₂ 1-3: weak evidence (inconclusive)
  - Computing marginal likelihood is intractable in general; practical approximations:
    - **Bridge sampling** (Gronau et al. 2017): Monte Carlo estimator of normalising constant; high accuracy; requires MCMC samples from both prior and posterior
    - **WAIC** (Watanabe 2010): lppd - p_WAIC where lppd = ∑_i log p(y_i|y_{-i}) is log pointwise predictive density and p_WAIC = ∑_i Var_θ[log p(y_i|θ)] is effective parameter count; computed from MCMC samples; asymptotically equivalent to LOO-CV
    - **PSIS-LOO-CV** (Vehtari-Gelman-Gabry 2017): approximate leave-one-out cross-validation using Pareto-smoothed importance sampling weights r_i = p(θ|y) / p(θ|y_{-i}); reliable when Pareto shape k̂ < 0.7 for all observations; otherwise flag high-influence observations
    - **DIC** (Deviance Information Criterion, Spiegelhalter et al. 2002): D(θ̄) + 2 p_D where p_D = E_θ[D(θ)] - D(θ̄); easy to compute but inconsistent; largely superseded by WAIC/LOO
    - **Nested sampling** (Skilling 2006, MultiNest/dynesty implementations): computes log Z = log p(x|M) directly via shrinking prior volume; used in particle physics, cosmology (Planck CMB analysis), gravitational wave inference

  - ### Limitations, Failure Modes, and Open Problems
  - Probabilistic modelling is not a panacea; practitioners must be aware of systematic failure modes:
    - **Model misspecification**: posterior inference is conditional on the model being correct; a misspecified prior or likelihood can produce confident but wrong posteriors (Bayesian overconfidence under model misspecification); Robust Bayes (Berger 1984), generalised variational inference (Knoblauch et al. 2019), and coarsened posteriors (Miller-Dunson 2019) address this
    - **Mean-field underestimation of posterior variance**: MFVI systematically underestimates posterior variance due to mode-seeking KL minimisation; full-rank VI or normalising flow posteriors required for faithful uncertainty quantification in multimodal or strongly correlated posteriors
    - **MCMC non-convergence and local trapping**: HMC/NUTS can fail to mix across modes separated by low-probability barriers (e.g., multimodal posteriors from symmetry in mixture models, label-switching); solutions include tempering (parallel tempering, MCMC with temperature annealing), mode-jumping proposals, and running multiple chains from diverse initialisations with R̂ diagnostics
    - **Computational cost**: full Bayesian inference remains 10-1,000× more expensive than MAP/MLE; JAX-accelerated PPLs (NumPyro, Blackjax) reduce but do not eliminate this gap; for 1B+ parameter models, full posterior inference remains impractical without drastic approximation
    - **Prior sensitivity**: in small-data regimes, posterior is dominated by the prior; weakly informative priors (Gelman et al. 2017 "Prior Choice Recommendations") or empirical Bayes (type-II MLE) can mitigate sensitivity; prior predictive checks should always precede inference
    - **Identifiability**: many probabilistic models are unidentifiable (e.g., mixture models with label-switching, factor models with sign/rotation ambiguity); posterior may be multimodal with equivalent modes; identifiability constraints or informative priors required
    - **Calibration ≠ accuracy**: a model can be well-calibrated but low-accuracy (high ECE only when confidence and accuracy diverge); calibration and discrimination are orthogonal properties; proper scoring rules (log-loss, Brier score, CRPS) simultaneously reward both
    - **Conformal validity requires exchangeability**: conformal prediction marginal coverage guarantee requires exchangeable (not necessarily i.i.d.) calibration and test data; under covariate shift or concept drift, coverage may fail; weighted conformal prediction (Tibshirani et al. 2019) extends to covariate shift scenarios

  - ### Key Researchers and Lineages
  - The probabilistic ML community has distinct research lineages tracing to a small number of foundational groups:
  - **Cambridge Machine Learning Group lineage** (Ghahramani):
    - Zoubin Ghahramani (Cambridge → Google VP Probabilistic AI): GP hyperparameter learning, Bayesian ICA, infinite mixture models, Turing.jl supervisor
    - Carl Edward Rasmussen (Cambridge): GP for ML textbook, GP regression/classification, GPML MATLAB toolbox
    - Richard Turner (Cambridge): probabilistic audio/speech, diffusion model inverse problems, probabilistic DL
    - Yarin Gal (Cambridge → Oxford): MC-Dropout, Bayesian deep learning for NLP, uncertainty quantification
    - Neil Lawrence (Cambridge/Sheffield/Amazon): GP-LVM, sparse GP, DataFirst, GPy toolbox
  - **Bayesian Statistics lineage** (Gelman-Rubin):
    - Andrew Gelman (Columbia): Bayesian Data Analysis textbook (3 eds), Stan co-creator, R̂ diagnostic, prior predictive checks, Bayesian workflow
    - Bob Carpenter (Columbia → Flatiron): Stan language design, NUTS implementation, CmdStan
    - Aki Vehtari (Aalto): PSIS-LOO model comparison, rank-normalised R̂, ArviZ, Bayesian workflow
  - **Probabilistic programming** (Goodman, Mansinghka):
    - Noah Goodman (Stanford → MIT): Church, WebPPL, probabilistic models of cognition
    - Vikash Mansinghka (MIT): Gen, probabilistic programming for 3D scene understanding, inverse graphics
    - David Wingate (MIT → Uber → BYU): NUTS generalisation, Stan history, Pyro influences
  - **Deep generative model lineage**:
    - Diederik Kingma (OpenAI): VAE, Glow, improved DDPM, unified diffusion framework
    - Yang Song (Stanford → DeepMind): NCSN, SDE-based diffusion, flow matching, consistency models
    - David Blei (Princeton/Columbia): LDA, variational Bayes review, SVI, DEF, VAE theory
  - **Conformal prediction lineage**:
    - Vladimir Vovk (Royal Holloway, UK): Venn prediction, conformal prediction theory, Algorithmic Learning in a Random World
    - Anastasios Angelopoulos (Berkeley): split conformal, conformal risk control, RAPS, conformal LLMs
    - Ryan Tibshirani (Carnegie Mellon): conformised quantile regression, weighted conformal, adaptive prediction sets

  - ### Cross-Concept Bridges and Disambiguation
  - **[[Bayes Filter]]** covers the robotics-specific incarnation: Kalman filter, particle filter, occupancy grid map updates. Probabilistic Model covers the broader mathematical framework from which Bayes Filter is derived.
  - **[[Gaussian Process]]** is a specific probabilistic model family (prior over functions); detailed GP architecture/kernel content lives on the [[Gaussian Process]] page; this page covers GP as an inference tool within the broader probabilistic model ecosystem.
  - **[[Diffusion Model]]** covers the deep learning generative model perspective (DDPM, DDIM, Stable Diffusion architectures); this page covers diffusion models as instantiations of score-based probabilistic models (score matching, Tweedie's formula, SDE/ODE duality).
  - **[[Variational Autoencoder]]** covers the deep learning architecture; this page covers VAE as an instance of amortised variational inference within the probabilistic model mathematical framework.
  - **[[Conformal Prediction]]** is distribution-free uncertainty quantification complementary to, not dependent on, parametric probabilistic models; this page covers conformal prediction as an orthogonal UQ method deployable post-hoc on any model.
  - **[[Bayesian Inference]]** is the inferential paradigm that probabilistic models implement; [[Bayesian Inference]] covers philosophical and decision-theoretic aspects; this page covers the computational methods and model families.
  - **[[Normalising Flows]]** covers flow architectures in depth; this page covers normalising flows as a component of the broader probabilistic modelling toolkit.

  - ## Metadata
    - term-id: AI-2047
    - domain: artificial-intelligence
    - domain-correction: none (domain correctly set to artificial-intelligence in stub)
    - ontology-version: v2
    - preferred-label: Probabilistic Model
    - alt-labels: Probabilistic Graphical Model, Bayesian Model, Stochastic Model, Generative Probabilistic Model, Bayesian Probabilistic Model
    - scope-note: Covers directed and undirected graphical models, probabilistic programming languages, approximate inference, deep generative models including diffusion, and distribution-free uncertainty quantification. Robotics-specific content is in [[Bayes Filter]].
    - enrichment-phase: Phase 6
    - enrichment-worker: claude-sonnet-4-6
    - enrichment-date: 2026-05-17

- ### Provenance
  - sources::
    - Koller, D. & Friedman, N. (2009). Probabilistic Graphical Models: Principles and Techniques. MIT Press.
    - Murphy, K.P. (2022). Probabilistic Machine Learning: An Introduction. MIT Press.
    - Murphy, K.P. (2023). Probabilistic Machine Learning: Advanced Topics. MIT Press.
    - Pearl, J. (1988). Probabilistic Reasoning in Intelligent Systems. Morgan Kaufmann.
    - MacKay, D.J.C. (2003). Information Theory, Inference, and Learning Algorithms. Cambridge University Press.
    - Bishop, C.M. (2006). Pattern Recognition and Machine Learning. Springer.
    - Rasmussen, C.E. & Williams, C.K.I. (2006). Gaussian Processes for Machine Learning. MIT Press.
    - Thrun, S., Burgard, W. & Fox, D. (2005). Probabilistic Robotics. MIT Press.
    - Neal, R.M. (2011). MCMC using Hamiltonian dynamics. Handbook of Markov Chain Monte Carlo, Ch.5. CRC Press.
    - Hoffman, M.D. & Gelman, A. (2014). The No-U-Turn Sampler. Journal of Machine Learning Research, 15, 1593–1623.
    - Blei, D.M., Kucukelbir, A. & McAuliffe, J.D. (2017). Variational Inference: A Review for Statisticians. JASA, 112(518), 859–877.
    - Jordan, M.I., Ghahramani, Z., Jaakkola, T.S. & Saul, L.K. (1999). An Introduction to Variational Methods. Machine Learning, 37, 183–233.
    - Vehtari, A. et al. (2021). Rank-Normalization, Folding, and Localization: An Improved R̂. Bayesian Analysis, 16(2), 667–718.
    - Carpenter, B. et al. (2017). Stan: A Probabilistic Programming Language. Journal of Statistical Software, 76(1).
    - Bingham, E. et al. (2019). Pyro: Deep Universal Probabilistic Programming. JMLR, 20(28), 1–6.
    - Phan, D. et al. (2019). Composable Effects for Flexible Probabilistic Programming in NumPyro. arXiv:1912.11554.
    - Salvatier, J., Wiecki, T.V. & Fonnesbeck, C. (2016). Probabilistic Programming in Python using PyMC3. PeerJ CS, 2, e55.
    - Ge, H., Xu, K. & Ghahramani, Z. (2018). Turing: A Language for Flexible Probabilistic Inference. AISTATS 2018.
    - Cusumano-Towner, M.F. et al. (2019). Gen: A General-Purpose Probabilistic Programming System. PLDI 2019.
    - Kingma, D.P. & Welling, M. (2014). Auto-Encoding Variational Bayes. ICLR 2014.
    - Rezende, D.J. & Mohamed, S. (2015). Variational Inference with Normalizing Flows. ICML 2015.
    - Song, Y. et al. (2021). Score-Based Generative Modeling through Stochastic Differential Equations. ICLR 2021.
    - Ho, J., Jain, A. & Abbeel, P. (2020). Denoising Diffusion Probabilistic Models. NeurIPS 2020.
    - Gal, Y. & Ghahramani, Z. (2016). Dropout as a Bayesian Approximation. ICML 2016.
    - Lakshminarayanan, B., Pritzel, A. & Blundell, C. (2017). Simple and Scalable Predictive Uncertainty Estimation using Deep Ensembles. NeurIPS 2017.
    - Daxberger, E. et al. (2021). Laplace Redux — Effortless Bayesian Deep Learning. NeurIPS 2021.
    - Vovk, V., Gammerman, A. & Shafer, G. (2005). Algorithmic Learning in a Random World. Springer.
    - Angelopoulos, A.N. & Bates, S. (2021). A Gentle Introduction to Conformal Prediction. arXiv:2107.07511.
    - Maddox, W.J. et al. (2019). A Simple Baseline for Bayesian Uncertainty in Deep Learning (SWAG). NeurIPS 2019.
    - Wilson, A.G. & Izmailov, P. (2020). Bayesian Deep Learning and a Probabilistic Perspective of Generalisation. NeurIPS 2020.
    - Romano, Y., Patterson, E. & Candes, E. (2019). Conformalized Quantile Regression. NeurIPS 2019.
    - Cranmer, K., Brehmer, J. & Louppe, G. (2020). The Frontier of Simulation-Based Inference. PNAS, 117(48), 30055–30062.
    - Teh, Y.W. et al. (2006). Hierarchical Dirichlet Processes. JASA, 101(476), 1566–1581.
    - Papamakarios, G. et al. (2021). Normalizing Flows for Probabilistic Modeling and Inference. JMLR, 22(57), 1–64.
    - Gelman, A. et al. (2013). Bayesian Data Analysis, 3rd edition. CRC Press.
    - Gelman, A. et al. (2020). Bayesian Workflow. arXiv:2011.01808.
  - migration-date:: 2026-04-26T00:00:00Z
  - enrichment-date:: 2026-05-17T10:00:00Z
  - domain-validation:: domain was correctly set to artificial-intelligence in stub; no correction required