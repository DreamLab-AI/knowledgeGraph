public:: true

# Detailed Balance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:detailed-balance",
  "@type": "Page",
  "title": "Detailed Balance",
  "vc:slug": "detailed-balance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:detailed-balance",
  "@type": "Class",
  "label": "Detailed Balance",
  "definition": "Detailed balance is a condition on a Markov chain stating that, in equilibrium, the probability flux between any two states is equal in both directions. When a transition kernel satisfies detailed balance with respect to a target distribution, that distribution is a stationary distribution of the chain. It is the central design principle behind most Markov chain Monte Carlo samplers, including Metropolis-Hastings.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:markov-chain-monte-carlo",
      "label": "Markov Chain Monte Carlo"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:convergence",
        "label": "Convergence"
      },
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:posterior-distribution",
        "label": "Posterior Distribution"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Detailed balance is a fundamental condition on [[Markov Chain]] dynamics that requires, at equilibrium, the probability flux from any state i to any state j to equal the probability flux from j to i: π(i) T(j|i) = π(j) T(i|j), where π is the target [[Probability Distribution]] and T is the transition kernel. This reversibility condition — also called the microscopic reversibility condition — is sufficient to guarantee that π is a stationary distribution of the chain: a chain that satisfies detailed balance with respect to π will, given [[Ergodicity]], converge to π as its unique long-run distribution regardless of its starting state. Detailed balance is the design principle that makes [[Markov Chain Monte Carlo]] (MCMC) algorithms constructible from arbitrary target distributions: by engineering the acceptance–rejection step in [[Metropolis-Hastings]], constructing coordinate-wise conditional updates in [[Gibbs Sampling]], or designing leapfrog proposals in [[Hamiltonian Monte Carlo]], algorithm designers impose detailed balance algebraically, thereby guaranteeing that the resulting Markov chain inherits π as its stationary distribution. The concept originates from [[Statistical Physics]], where it expresses the thermodynamic equilibrium condition that each elementary transition and its time-reversal occur with equal probability — a consequence attributed to microscopic reversibility under time-symmetric Newtonian or quantum dynamics. The Boltzmann distribution satisfies detailed balance in any physical system at thermal equilibrium, establishing the conceptual bridge between physics and probabilistic computation. Detailed balance is a sufficient but not strictly necessary condition for a target distribution to be stationary: chains satisfying only global balance (the net probability flux into each state equals the net flux out) can also be ergodic with the correct stationary distribution but need not satisfy detailed balance pairwise. This distinction becomes practically important in [[Non-Reversible Markov Chain Monte Carlo]] methods, which deliberately violate detailed balance while maintaining global balance, achieving faster convergence to the target distribution by suppressing the random-walk backtracking that is the dominant inefficiency of reversible MCMC chains. The study of detailed balance thus sits at the intersection of [[Probability Theory]], [[Statistical Physics]], [[Stochastic Processes]], and computational [[Bayesian Inference]], making it one of the most cross-disciplinary concepts in the mathematical sciences.

- ### Semantic Classification
  - owl-class:: probability:DetailedBalance
  - owl-role:: Condition | ProbabilityPrinciple | MCMCDesignPrinciple
  - owl-inferred:: probability:MicroscopicReversibility, probability:StationaryDistributionCondition, probability:MarkovChainProperty
  - belongs-to-domain:: [[Probability Theory Domain]]
  - implemented-in-layer:: [[Statistical Foundation Layer]]

- ### Relationships
  - is-subclass-of:: [[Reversibility Condition]], [[Markov Chain Property]], [[Stochastic Process Condition]], [[Equilibrium Condition]]
  - has-part:: [[Transition Kernel]], [[Stationary Distribution]], [[Probability Flux]], [[Acceptance Ratio]], [[Microscopic Reversibility]], [[Hastings Ratio]], [[Acceptance Probability]]
  - requires:: [[Markov Chain]], [[Probability Distribution]], [[Probability Theory]], [[Stochastic Process]], [[Transition Kernel]], [[Ergodicity]]
  - enables:: [[Markov Chain Monte Carlo]], [[Sampling]], [[Metropolis-Hastings]], [[Gibbs Sampling]], [[Hamiltonian Monte Carlo]], [[Stationary Distribution]], [[Ergodic Convergence]], [[No-U-Turn Sampler]], [[Slice Sampling]]
  - implements:: [[Markov Chain]], [[Microscopic Reversibility]], [[Time-Reversal Symmetry]], [[Reversible Markov Chain]]
  - depends-on:: [[Probability Theory]], [[Markov Chain]], [[Stochastic Process]], [[Measure Theory]]
  - supports:: [[Bayesian Inference]], [[Probabilistic Programming]], [[Statistical Physics]], [[Uncertainty Quantification]], [[Posterior Inference]], [[Energy-Based Model]], [[Ising Model Simulation]]
  - uses:: [[Stochastic Process]], [[Transition Kernel]], [[Probability Distribution]], [[Acceptance Probability]], [[Boltzmann Distribution]], [[Hastings Ratio]]
  - contrasts-with:: [[Non-Reversible Markov Chain Monte Carlo]], [[Global Balance]], [[Irreversible Markov Chain]], [[Piecewise Deterministic Markov Process]], [[Event-Chain Monte Carlo]], [[Zig-Zag Sampler]], [[Bouncy Particle Sampler]]
  - related-to:: [[Convergence]], [[Probabilistic Model]], [[Posterior Distribution]], [[Sampling]], [[Ergodicity]], [[Mixing Time]], [[Statistical Mechanics]], [[Boltzmann Distribution]], [[Quantum Detailed Balance]], [[Spectral Gap]], [[Integrated Autocorrelation Time]], [[Monte Carlo Methods]]
  - bridges-to:: [[Statistical Physics]], [[Quantum Thermodynamics]], [[Non-Equilibrium Thermodynamics]], [[Computational Biology]], [[Active Matter Physics]], [[Lattice QCD]]
  - has-subtype:: [[Metropolis-Hastings Acceptance Rule]], [[Gibbs Conditional Updates]], [[Barker Acceptance Function]], [[Langevin Monte Carlo Detailed Balance]]
  - violated-by:: [[Non-Reversible Markov Chain Monte Carlo]], [[Bouncy Particle Sampler]], [[Zig-Zag Sampler]], [[Event-Chain Monte Carlo]], [[Piecewise Deterministic Markov Process]]
  - evaluated-by:: [[Spectral Gap]], [[Mixing Time]], [[Asymptotic Variance]], [[Effective Sample Size]], [[Integrated Autocorrelation Time]]
  - standardized-by:: [[No formal standard — community best practice via Stan documentation]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:hasPart ai:TransitionKernel))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:hasPart ai:StationaryDistribution))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:hasPart ai:ProbabilityFlux))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:hasPart ai:AcceptanceRatio))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:hasPart ai:MicroscopicReversibility))
  ## Dependency Relationships
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:requires ai:MarkovChain))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:requires ai:ProbabilityDistribution))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:requires ai:ProbabilityTheory))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:requires ai:StochasticProcess))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:requires ai:TransitionKernel))
  ## Capability Relationships
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:enables ai:MarkovChainMonteCarlo))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:enables ai:Sampling))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:enables ai:MetropolisHastings))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:enables ai:GibbsSampling))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:enables ai:HamiltonianMonteCarlo))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:enables ai:StationaryDistribution))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:enables ai:ErgodicConvergence))
  ## Implementation Relationships
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:implements ai:MarkovChain))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:implements ai:MicroscopicReversibility))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:implements ai:TimeReversalSymmetry))
  ## Reduction Relationships
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:reducesTo ai:GlobalBalance))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:reducesTo ai:StochasticProcess))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:reducesTo ai:ReversibleMarkovChain))
  ## Uses Relationships
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:uses ai:TransitionKernel))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:uses ai:AcceptanceProbability))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:uses ai:ProbabilityDistribution))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:uses ai:BoltzmannDistribution))
  ## Contrast Relationships
      SubClassOf(ai:DetailedBalance
        ObjectAllValuesFrom(ai:contrastsWith ai:NonReversibleMarkovChainMonteCarlo))
      SubClassOf(ai:DetailedBalance
        ObjectAllValuesFrom(ai:contrastsWith ai:GlobalBalance))
      SubClassOf(ai:DetailedBalance
        ObjectAllValuesFrom(ai:contrastsWith ai:PiecewiseDeterministicMarkovProcess))
      SubClassOf(ai:DetailedBalance
        ObjectAllValuesFrom(ai:contrastsWith ai:ZigZagSampler))
  ## Bridge Relationships
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:bridgesTo ai:StatisticalPhysics))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:bridgesTo ai:QuantumThermodynamics))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:bridgesTo ai:NonEquilibriumThermodynamics))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:bridgesTo ai:ComputationalBiology))
  ## Support Relationships
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:supports ai:BayesianInference))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:supports ai:ProbabilisticProgramming))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:supports ai:StatisticalPhysics))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:supports ai:UncertaintyQuantification))
      SubClassOf(ai:DetailedBalance
        ObjectSomeValuesFrom(ai:supports ai:PosteriorInference))
  ## About
    The concept of detailed balance has twin origins — one in nineteenth-century physics and one in twentieth-century probability theory — and their convergence in the 1950s gave rise to the first [[Markov Chain Monte Carlo]] algorithms and, by extension, to the modern computational statistics era.

    In physics, the principle traces to Ludwig Boltzmann (1872) and his H-theorem, which established that irreversible macroscopic entropy increase is consistent with time-reversible microscopic dynamics if certain balance conditions hold between collision rates in a gas. Detailed balance — sometimes called the condition of microscopic reversibility — was formalised by the physical chemist Richard Tolman in his 1938 monograph "The Principles of Statistical Mechanics," where he demonstrated that equilibrium in a physical system requires each elementary transition rate A → B to equal its reverse B → A. This means that in a system described by the Boltzmann distribution π(i) ∝ exp(−E_i / kT), any transition matrix T that satisfies π(i) T(j|i) = π(j) T(i|j) is thermodynamically correct. The physical intuition is that equilibrium is not merely a balance of net flows between macroscopic regions — it is a pairwise equality of all microscopic fluxes, at every pair of states simultaneously. Systems that violate this pairwise symmetry at the microscopic level are driven, non-equilibrium systems: active matter, molecular motors, and cellular metabolism are prototypical examples.

    In probability theory, the mathematical structure behind detailed balance was independently identified in the study of reversible Markov chains. A discrete-time [[Markov Chain]] with transition matrix P is said to be reversible with respect to distribution π if the detailed balance equations π(i) P(j|i) = π(j) P(i|j) hold for all pairs i, j. This is equivalent to saying that the time-reversed process — obtained by observing the chain in reverse — has the same transition law as the forward process. The ergodic theorem for Markov chains (established through the 1920s–1940s by Markov, Doeblin, and Kolmogorov) guarantees that any irreducible, aperiodic chain converges to a unique stationary distribution; detailed balance is a sufficient condition that π is that stationary distribution, because summing the detailed balance equations over j gives π(i) Σ_j P(j|i) = Σ_j π(j) P(i|j), which is exactly the global balance equation π P = π.

    The computational breakthrough came with the 1953 paper by Nicholas Metropolis, Arianna Rosenbluth, Marshall Rosenbluth, Augusta Teller, and Edward Teller — "Equation of State Calculations by Fast Computing Machines" (Journal of Chemical Physics) — which introduced what is now called the [[Metropolis-Hastings]] algorithm. Working at Los Alamos National Laboratory on the MANIAC computer, the team needed to compute the thermodynamic properties of dense liquids by averaging over the Boltzmann distribution π(x) ∝ exp(−E(x)/kT). Their key insight was to construct a Markov chain satisfying detailed balance with respect to π by accepting proposed state transitions with a specific acceptance probability: if the proposed move reduces energy (increases π), always accept; if it increases energy, accept with probability exp(−ΔE/kT). This acceptance rule was later generalised by W.K. Hastings (1970) to arbitrary proposal distributions q(y|x), yielding the acceptance probability min(1, π(y) q(x|y) / π(x) q(y|x)) — the famous Metropolis-Hastings ratio. One can verify directly that this acceptance rule enforces detailed balance: π(x) T_MH(y|x) = π(x) q(y|x) min(1, π(y) q(x|y) / π(x) q(y|x)) = min(π(x) q(y|x), π(y) q(x|y)) = π(y) q(x|y) min(π(x) q(y|x) / π(y) q(x|y), 1) = π(y) T_MH(x|y), as required.

    [[Gibbs Sampling]], introduced by Stuart and Donald Geman (1984) in the context of Bayesian image restoration and by Gelfand and Smith (1990) for general Bayesian computation, satisfies detailed balance in a componentwise sense: updating the k-th coordinate from its conditional distribution p(x_k | x_{-k}) defines a transition kernel that satisfies detailed balance with respect to the full joint distribution π. This can be verified by noting that the Gibbs update is a special case of Metropolis-Hastings with proposal q(y_k | x_k, x_{-k}) = p(y_k | x_{-k}) and acceptance ratio identically 1 — Gibbs sampling always accepts, but only because it proposes from the exact conditional, which automatically satisfies detailed balance without any rejection step.

    [[Hamiltonian Monte Carlo]] (HMC), introduced by Duane, Kennedy, Pendleton, and Roweth (1987) in lattice quantum chromodynamics simulations, satisfies detailed balance in a more subtle way. HMC augments the parameter space with auxiliary momentum variables p drawn from a Gaussian and simulates Hamiltonian dynamics (which is time-reversible) using leapfrog integration. The leapfrog integrator introduces a discretisation error, which is corrected by a Metropolis acceptance step that restores exact detailed balance. The No-U-Turn Sampler (NUTS, Hoffman and Gelman, 2014), which eliminates the need to tune HMC's trajectory length parameter, also satisfies detailed balance through a careful construction of the termination criterion and the proposal distribution over trajectory endpoints.

  ## The Formal Condition
    Let (X_t)_{t≥0} be a Markov chain on state space S with transition kernel T(y|x) and let π be a probability distribution on S. The chain satisfies **detailed balance** with respect to π if and only if:

        π(x) T(y|x) = π(y) T(x|y)    for all x, y ∈ S

    For continuous state spaces, this is written in terms of probability densities:

        π(x) T(y|x) = π(y) T(x|y)    for π-almost-all x, y

    **Sufficient condition for stationarity**: Detailed balance implies global balance:

        ∫ π(x) T(y|x) dx = ∫ π(y) T(x|y) dx = π(y) ∫ T(x|y) dx = π(y)

    This shows π is a stationary distribution: starting the chain in distribution π leaves the distribution unchanged after one step.

    **Convergence theorem**: If the chain additionally satisfies:
    - **Irreducibility** — for all x, y with π(y) > 0, there exists n such that T^n(y|x) > 0 (every state reachable from every other state under π)
    - **Aperiodicity** — the chain does not cycle deterministically between states

    Then π is the unique stationary distribution and the chain converges in total variation: ||T^n(·|x) − π||_TV → 0 as n → ∞ for π-almost-all starting states x. This is the guarantee underpinning all classical MCMC algorithms.

    **Global balance (weaker condition)**:
        ∫ π(x) T(y|x) dx = π(y)    for all y ∈ S

    Global balance is necessary and sufficient for π to be stationary, but does not require the pairwise symmetry of detailed balance. A chain satisfying global balance but not detailed balance is **irreversible** or **non-reversible**.

  ## Metropolis-Hastings Acceptance Rule
    The Metropolis-Hastings algorithm enforces detailed balance via the acceptance probability:

        α(x, y) = min(1, π(y) q(x|y) / π(x) q(y|x))

    where q(y|x) is the proposal distribution. Verification of detailed balance:
    - The transition kernel is T_MH(y|x) = q(y|x) α(x,y) for y ≠ x.
    - Substituting: π(x) T_MH(y|x) = π(x) q(y|x) min(1, π(y) q(x|y) / π(x) q(y|x))
      = min(π(x) q(y|x), π(y) q(x|y))
    - This expression is symmetric in x and y, so π(x) T_MH(y|x) = π(y) T_MH(x|y). QED.

    The acceptance ratio π(y) q(x|y) / (π(x) q(y|x)) is called the **Hastings ratio**. Since π appears only as a ratio, the normalising constant of π cancels — meaning Metropolis-Hastings can sample from any distribution known only up to a normalising constant. This is precisely why it is the standard inference tool for Bayesian posteriors π(θ|D) ∝ p(D|θ) p(θ), where the normalising constant p(D) is typically intractable.

    The **Barker acceptance function**, an alternative to Metropolis-Hastings that also satisfies detailed balance, uses:
        α_Barker(x, y) = r / (1 + r)    where r = π(y) q(x|y) / π(x) q(y|x)

    Barker's function achieves lower acceptance rates than Metropolis but can have different computational properties for specific target geometries.

  ## Non-Reversible MCMC — Violating Detailed Balance for Speed
    A fundamental insight emerging from theoretical statistics and computational physics is that violating detailed balance — while maintaining global balance — can substantially accelerate convergence to the target distribution. This counter-intuitive result has motivated a significant line of research into non-reversible MCMC algorithms.

    **Theoretical basis**: A result by Chen, Lovász, and Pak (1999) and later generalised by Diaconis, Holmes, and Neal (2000) shows that for any reversible Markov chain satisfying detailed balance, one can construct an irreversible chain with the same stationary distribution but strictly smaller asymptotic variance for expectations of any function f. The intuitive explanation is that reversible chains suffer from random-walk backtracking: after moving from x to y, the chain has equal probability of returning to x, so the chain tends to explore the state space inefficiently. Non-reversible chains add a directional component that suppresses backtracking and drives the chain around the state space more systematically.

    **Event-Chain Monte Carlo (ECMC)**: Introduced by Bernard, Krauth, and Wilson (2009) for statistical physics simulations of hard spheres, ECMC is a continuous-time non-reversible algorithm that uses a "lifted" Markov chain with an additional directional variable. Instead of accepting or rejecting moves symmetrically, ECMC moves particles in a fixed direction until a collision event occurs (determined by the factorised Metropolis algorithm), then updates the direction. ECMC satisfies global balance but violates detailed balance, achieving O(N) complexity per independent sample for many systems versus O(N²) for Metropolis. The frontiers of ECMC (Krauth, Frontiers in Physics 2021) paper surveys applications to soft matter, lattice models, quantum systems, and machine learning.

    **Piecewise Deterministic Markov Processes (PDMPs)**: A broader class of non-reversible MCMC algorithms uses continuous-time piecewise deterministic dynamics. Key members are:
    - **Bouncy Particle Sampler (BPS)** — Peters and de With (2012), Bouchard-Côté, Vollmer, and Doucet (2018): the particle moves along a straight line and "bounces" off energy level sets when it encounters them, driven by the gradient of log π.
    - **Zig-Zag Sampler** — Bierkens, Fearnhead, and Roberts (2019): the velocity process flips signs of individual velocity components at rates proportional to the directional derivative of −log π; inherently suited to subsampling for large datasets.
    - **Randomised HMC** — Bou-Rabee and Sanz-Serna (2017): modifies HMC's momentum refreshment to break detailed balance while maintaining ergodicity.

    PDMPs satisfy the global balance condition in continuous time and are ergodic under mild conditions, but they do not satisfy detailed balance. Theoretical results confirm that they achieve strictly better L² spectral gaps and asymptotic variances compared to their reversible counterparts for many target distributions. Scalable Monte Carlo for Bayesian Learning (arXiv 2407.12751, 2024) provides an updated survey of scalable PDMP-based Bayesian computation including Zig-Zag and BPS in high-dimensional settings.

  ## Detailed Balance in Statistical Physics
    The physical origin of detailed balance makes it a foundational concept in [[Statistical Physics]] beyond its role in MCMC:

    - **Boltzmann equation** — Boltzmann's H-theorem (1872) shows that entropy increases until detailed balance is satisfied; equilibrium is characterised precisely by detailed balance holding between all collision processes. The Maxwell-Boltzmann velocity distribution satisfies detailed balance for elastic collision dynamics.
    - **Chemical kinetics** — In a chemical reaction network at equilibrium, detailed balance requires that the forward reaction rate of each elementary step equals its reverse rate. This is Wegscheider's condition (1901) and is used to validate thermodynamically consistent kinetic models.
    - **Quantum systems** — Quantum detailed balance (Einstein, 1917; quantum master equations) states that for a system coupled to a thermal bath at temperature T, the ratio of transition rates W(i→j)/W(j→i) = exp((E_i − E_j)/kT). Recent work (arXiv 1810.09174) formalises quantum detailed balance conditions for Lindblad quantum dynamical semigroups, connecting to the KMS (Kubo-Martin-Schwinger) condition in quantum statistical mechanics.
    - **Non-equilibrium thermodynamics** — Systems that violate detailed balance are driven non-equilibrium systems. Thermodynamics of driven systems with explicitly broken detailed balance (arXiv 2501.12192, 2025) provides a framework for computing entropy production rates and free energy dissipation in systems where detailed balance fails — relevant to active matter physics, biological molecular motors, and non-equilibrium statistical mechanics of the MCMC chains that deliberately break detailed balance.
    - **Fluctuation theorems** — The Jarzynski equality and Crooks fluctuation theorem are restatements of detailed balance for non-equilibrium processes, expressing the relationship between work distributions in forward and reverse processes even far from equilibrium.

  ## Gibbs Sampling and Componentwise Detailed Balance
    [[Gibbs Sampling]] achieves detailed balance in a decomposed form. Given a joint distribution π(x₁, x₂, ..., x_d), the k-th Gibbs update samples:

        x_k' ~ p(x_k | x₁, ..., x_{k-1}, x_{k+1}, ..., x_d) = π(x_k | x_{-k})

    The componentwise detailed balance condition is:

        π(x_k | x_{-k}) π(x_{-k}) = π(x_k' | x_{-k}) π(x_{-k})    (trivially satisfied when x_{-k} is held fixed)

    More precisely, the Gibbs transition kernel T_Gibbs satisfies detailed balance with respect to π viewed as a function of x_k alone for fixed x_{-k}, and the product of d such kernels (one per coordinate) is a reversible transition for the full joint distribution. Gibbs sampling is therefore a special case of Metropolis-Hastings with acceptance probability identically 1 — no rejection occurs because the proposal is the exact conditional, so the Hastings ratio is always 1.

    **When Gibbs fails**: If the conditionals p(x_k | x_{-k}) are not tractable (e.g. in models with non-conjugate priors), standard Gibbs sampling is inapplicable. Solutions include slice sampling within Gibbs (Neal, 2003), Metropolis-within-Gibbs (replacing the Gibbs draw with a Metropolis step targeting the conditional), or HMC within Gibbs for continuous coordinates.

  ## Use Cases and Applications
    ### Bayesian Posterior Inference via MCMC
    Constructing a Metropolis-Hastings sampler for a Bayesian posterior π(θ|D) ∝ p(D|θ) p(θ) requires identifying a proposal q(θ'|θ) and accepting proposed moves θ → θ' with probability min(1, π(θ') q(θ|θ') / π(θ) q(θ'|θ)). The normalising constant p(D) cancels in the Hastings ratio, making this feasible for posteriors that are only known up to a constant. This is the standard inference procedure in [[Stan]], [[PyMC]], Pyro, and Turing.jl. The correctness proof for every MCMC sampler in these frameworks reduces to verifying detailed balance.

    ### Energy-Based Model Sampling
    Training and sampling from energy-based models (EBMs) in deep learning requires sampling from π(x) ∝ exp(−E_θ(x)) where E_θ is a neural energy function. Langevin Monte Carlo (LMC) uses gradient steps plus Gaussian noise and satisfies detailed balance in the continuous-time limit; Metropolis-Adjusted Langevin Algorithm (MALA) adds a Metropolis correction to enforce exact detailed balance for discrete-time steps.

    ### Statistical Mechanics Simulation
    Lattice model simulation (Ising model, Potts model, lattice QCD) uses Metropolis or cluster algorithms (Wolff, Swendsen-Wang) that all satisfy detailed balance with respect to the Boltzmann distribution, enabling computation of partition functions, phase transitions, and thermodynamic observables.

    ### Validating Novel MCMC Algorithms
    For any proposed MCMC algorithm, verifying detailed balance is the standard correctness criterion. Bugs in MCMC implementations — incorrect acceptance ratios, asymmetric proposal distributions, improper target densities — all manifest as violations of detailed balance and can be detected numerically by checking whether the empirical flux estimates π̂(i) T_empirical(j|i) ≈ π̂(j) T_empirical(i|j).

    ### Reinforcement Learning and Planning
    Markov decision processes (MDPs) with stochastic transitions can be analysed using detailed balance to identify which state distributions are achievable at equilibrium under given policies. In model-based [[Reinforcement Learning]], verifying that learned transition models satisfy detailed balance for reversible environments (certain physics simulations) provides a consistency check.

  ## Academic Context
    Detailed balance is a mature concept with origins across multiple disciplines:
    - **Boltzmann (1872)** — H-theorem and the entropy interpretation of microscopic reversibility in kinetic theory.
    - **Tolman (1938)** — *The Principles of Statistical Mechanics*, Oxford University Press; systematic formulation of microscopic reversibility and its role in equilibrium thermodynamics.
    - **Metropolis, Rosenbluth, Rosenbluth, Teller, Teller (1953)** — "Equation of State Calculations by Fast Computing Machines," *J. Chemical Physics*, 21, 1087; original MCMC paper using detailed balance to sample the Boltzmann distribution.
    - **Hastings (1970)** — "Monte Carlo Sampling Methods Using Markov Chains and Their Applications," *Biometrika*, 57(1), 97-109; generalisation to arbitrary proposals.
    - **Geman & Geman (1984)** — Gibbs sampler for image restoration; componentwise detailed balance for joint distributions.
    - **Gelfand & Smith (1990)** — Sampling-based approaches to Bayesian marginal densities; established Gibbs as a general Bayesian tool.
    - **Neal (1994/1995)** — *Bayesian Learning for Neural Networks*; Hamiltonian Monte Carlo for Bayesian neural networks; detailed balance via leapfrog integration and Metropolis correction.
    - **Duane, Kennedy, Pendleton, Roweth (1987)** — Hybrid Monte Carlo in lattice QCD; detailed balance via Metropolis correction on Hamiltonian proposals.
    - **Diaconis, Holmes, Neal (2000)** — "Analysis of a Non-Reversible Markov Chain Sampler," *Annals of Applied Probability*; proved non-reversible chains have smaller asymptotic variance.
    - **Bernard, Krauth, Wilson (2009)** — Event-Chain Monte Carlo for hard spheres; first practical non-reversible MCMC violating detailed balance.
    - **Bierkens, Fearnhead, Roberts (2019)** — "The Zig-Zag Process and Super-Efficient Sampling for Bayesian Analysis of Big Data," *Annals of Statistics*, 47(3), 1288-1320.
    - **Bouchard-Côté, Vollmer, Doucet (2018)** — "The Bouncy Particle Sampler: A Non-Reversible Rejection-Free Markov Chain Monte Carlo Method," *JASA*, 113(522), 855-867.
    - **Hoffman & Gelman (2014)** — NUTS; automated HMC satisfying detailed balance with adaptive trajectory lengths.

  ## Current Landscape (2026)
    By 2026, the study of detailed balance has bifurcated into two streams: one deepening the theoretical foundations of classical detailed-balance-respecting MCMC, and one exploring the performance gains from deliberately violating it.

    **Classical MCMC maturity**: The [[Markov Chain Monte Carlo]] ecosystem based on Metropolis-Hastings and HMC-NUTS is extremely mature. Stan (NUTS, HMC) and PyMC v5 implement detailed-balance-respecting samplers as their default, with convergence diagnostics (R-hat, ESS, divergences) that diagnose violations of detailed balance indirectly through mixing failure. The June 2025 survey paper (arXiv 2506.09928) comparing MCMC vs. Variational Inference across 47 models confirms that NUTS-based detailed-balance-respecting samplers remain the gold standard for posterior accuracy when computational budget permits.

    **Non-reversible MCMC as emerging alternative**: The Bouncy Particle Sampler, Zig-Zag Sampler, and Event-Chain Monte Carlo — all violating detailed balance — have transitioned from theoretical curiosities to practical tools. The 2024 arXiv paper "Scalable Monte Carlo for Bayesian Learning" (arXiv:2407.12751) provides a comprehensive treatment of PDMP-based non-reversible samplers for large-scale Bayesian computation, showing that Zig-Zag can outperform NUTS by factors of 5-20x in mixing time for certain hierarchical models by eliminating random-walk backtracking. Convergence rate results for non-reversible chains on districting map sampling (arXiv:2008.07843) and related combinatorial problems show substantial empirical improvements. The Heriot-Watt mathematics group (M. Ottobre) has published tutorial materials on MCMC and irreversibility that have become standard references (MACS preprint series), demonstrating UK leadership in non-reversible MCMC theory.

    **Score-based Metropolis-Hastings (2025)**: arXiv:2501.00467 (Score-Based Metropolis-Hastings Algorithms, January 2025) and arXiv:2602.00835 (Score-based Metropolis-Hastings for Fractional Langevin Algorithms, 2026) demonstrate that replacing the standard MH acceptance ratio with a score-function-based variant can reduce computational cost while still satisfying detailed balance, enabling applications to very high-dimensional posteriors.

    **Quantum detailed balance (2025)**: Recent work on quantum stochastic thermodynamics (arXiv:2512.11613) derives quantum analogues of the detailed balance condition for Lindblad dynamics, establishing consistency between quantum master equations and classical thermodynamics along individual quantum trajectories — relevant to quantum computing applications of MCMC.

    **Non-equilibrium driven systems**: The study of systems with explicitly broken detailed balance (arXiv:2501.12192, 2025) using stochastic thermodynamics techniques connects MCMC research to active matter physics, providing a unified mathematical framework for both contexts where detailed balance holds and where it is deliberately violated.

  ## UK Context
    The United Kingdom has contributed substantially to detailed balance research through both its physics and statistics communities:
    - **Heriot-Watt University** — Michela Ottobre (School of Mathematics and Computer Science) leads research on MCMC and irreversibility, producing widely-cited tutorial materials on non-reversible Markov chains and their convergence properties. Heriot-Watt's Karpacz School lecture notes (macs.hw.ac.uk/~mo3) are a standard pedagogical resource on MCMC and irreversibility for PhD students in mathematical statistics across the UK.
    - **University of Warwick** — the Statistics department (Gareth Roberts, Paul Fearnhead, Adam Johansen) has been the primary UK centre for theoretical MCMC research, including foundational work on the convergence theory of Metropolis-Hastings, Gibbs sampling, and the Zig-Zag sampler. Roberts and Gelman (1997) established optimal scaling results for Metropolis algorithms in high dimensions — quantifying how the acceptance rate should be tuned relative to dimension for a detailed-balance-satisfying MH chain to mix optimally.
    - **University of Cambridge** — the Statslab and the Department of Applied Mathematics and Theoretical Physics (DAMTP) contribute to the theoretical analysis of non-reversible diffusions and their connection to statistical physics; connections to the Maxwell Institute and to John Skilling's maximum entropy methods (which are related to the physical motivation for detailed balance).
    - **Alan Turing Institute** — the Turing's "Probabilistic AI" programme funds research on scalable MCMC methods for Bayesian neural networks, with Warwick and Edinburgh groups contributing non-reversible sampler research. The "Data-Centric Engineering" programme applies Bayesian MCMC with detailed balance for structural health monitoring of Northern English infrastructure (rail, bridges, offshore wind) — deployed through partnerships with Network Rail and the Offshore Renewable Energy Catapult (Blyth, Northumberland).
    - **Northern England industrial context** — the University of Sheffield's INSIGNEO Institute applies MCMC (Metropolis-Hastings with detailed balance) to in silico clinical trials for medical device assessment, enabling virtual patient population modelling where posterior distributions over physiological parameters are sampled via standard MH chains. The University of Leeds' epidemiology group deploys Gibbs sampling (detailed balance via conditional distributions) for hierarchical Bayesian disease mapping across NHS primary care trusts in Yorkshire and the Humber.

  ## Future Directions (2026–2030)
    The future of detailed balance research lies at the intersection of non-reversible MCMC, quantum computing, and the scaling challenges posed by high-dimensional Bayesian inference for [[Large Language Model]] calibration and scientific computing.

    **Non-reversible MCMC at scale** — the theoretical advantages of violating detailed balance (faster mixing, smaller asymptotic variance) are being realised computationally in PDMP implementations. Future work will extend these methods to discrete state spaces (important for combinatorial sampling, language model token sampling, and graph sampling), develop adaptive non-reversible samplers that automatically tune their directional dynamics, and integrate non-reversible kernels into probabilistic programming frameworks like Stan and PyMC as standard inference options alongside HMC-NUTS.

    **Connections to diffusion-based generative models** — score-based diffusion models (Denoising Diffusion Probabilistic Models, Song et al., 2021) use forward noising processes and reverse denoising processes connected by the Fokker-Planck equation. These are related to non-reversible Langevin diffusions and detailed balance in continuous-time Markov processes. Understanding this connection more deeply will enable principled Bayesian inference using the reverse process of diffusion models as a sampler, with theoretical guarantees derived from generalised detailed balance conditions for the diffusion.

    **Quantum MCMC** — quantum computers can implement quantum detailed balance conditions (QDB) for Gibbs state preparation exponentially faster than classical algorithms in certain cases. Quantum Metropolis algorithms (Yung & Aspuru-Guzik, 2012) and quantum Gibbs samplers (Rall et al., 2023) satisfy quantum versions of detailed balance and could enable sampling from otherwise intractable distributions in chemistry, materials science, and drug discovery. Near-term (2026–2028) quantum advantage demonstrations may emerge for small molecule Boltzmann distribution sampling.

    **Certified and verified MCMC** — just as the VEL project formally verified an OWL reasoner, future work will develop formally verified MCMC kernels whose satisfaction of detailed balance is machine-checked rather than hand-proved, enabling safety-critical deployments (medical AI, autonomous vehicles) to rely on formally certified posterior inference.

    **Non-equilibrium sampling for machine learning** — generative AI training involves optimising non-convex loss landscapes that look mathematically like energy functions in statistical physics. Stochastic gradient descent with noise is related to a Langevin diffusion sampler; understanding when it approximately satisfies detailed balance and when it violates it (and with what consequences for the learned distribution) is an active theoretical frontier connecting MCMC to deep learning optimisation.

    **Adaptive MCMC and ergodicity preservation** — adaptive algorithms (Haario et al., 2001; Atchadé & Rosenthal, 2003) tune the proposal distribution online using past samples to improve acceptance rates; however, naive adaptation destroys the Markov property and can break detailed balance, rendering the stationary distribution unknown. Ergodicity-preserving adaptive MCMC frameworks (Roberts & Rosenthal, 2007) specify conditions under which adaptation rates taper off (diminishing adaptation condition) to asymptotically restore detailed balance; these conditions are satisfied by NUTS's dual averaging in Stan. Future adaptive non-reversible samplers must develop analogous theoretical guarantees for maintaining global balance during online adaptation.

    **Operator learning for posterior approximation** — neural operator methods (DeepONet, Fourier Neural Operators) are being explored to learn the Markov transition kernel T(y|x) directly from simulation data, producing a learned sampler that approximately satisfies detailed balance with respect to the target distribution; the approximation error is controlled by the operator learning error and can be measured via the symmetry test on empirical transition counts. This approach would enable fast approximate posterior sampling for complex scientific simulators without the per-step computational cost of gradient evaluation in HMC.

  ## Research and Literature
    1. Boltzmann, L. (1872). "Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen." *Sitzungsberichte der Akademie der Wissenschaften Wien*, 66, 275-370. (H-theorem and microscopic reversibility)
    2. Tolman, R.C. (1938). *The Principles of Statistical Mechanics*. Oxford University Press. (formal microscopic reversibility)
    3. Metropolis, N., Rosenbluth, A.W., Rosenbluth, M.N., Teller, A.H. & Teller, E. (1953). "Equation of State Calculations by Fast Computing Machines." *Journal of Chemical Physics*, 21(6), 1087-1092.
    4. Hastings, W.K. (1970). "Monte Carlo Sampling Methods Using Markov Chains and Their Applications." *Biometrika*, 57(1), 97-109.
    5. Geman, S. & Geman, D. (1984). "Stochastic relaxation, Gibbs distributions, and the Bayesian restoration of images." *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 6(6), 721-741.
    6. Gelfand, A.E. & Smith, A.F.M. (1990). "Sampling-based approaches to calculating marginal densities." *Journal of the American Statistical Association*, 85(410), 398-409.
    7. Duane, S., Kennedy, A.D., Pendleton, B.J. & Roweth, D. (1987). "Hybrid Monte Carlo." *Physics Letters B*, 195(2), 216-222.
    8. Neal, R.M. (1993). "Probabilistic Inference Using Markov Chain Monte Carlo Methods." Technical Report CRG-TR-93-1, University of Toronto.
    9. Neal, R.M. (2003). "Slice Sampling." *Annals of Statistics*, 31(3), 705-767.
    10. Diaconis, P., Holmes, S. & Neal, R. (2000). "Analysis of a Non-Reversible Markov Chain Sampler." *Annals of Applied Probability*, 10(3), 726-745.
    11. Roberts, G.O. & Gelman, A. & Gilks, W.R. (1997). "Weak Convergence and Optimal Scaling of Random Walk Metropolis Algorithms." *Annals of Applied Probability*, 7(1), 110-120.
    12. Hoffman, M.D. & Gelman, A. (2014). "The No-U-Turn Sampler: Adaptively setting path lengths in Hamiltonian Monte Carlo." *JMLR*, 15, 1593-1623.
    13. Bernard, E.P., Krauth, W. & Wilson, D.B. (2009). "Event-chain Monte Carlo algorithms for hard-sphere systems." *Physical Review E*, 80(5), 056704.
    14. Peters, E.A.J.F. & de With, G. (2012). "Rejection-free Monte Carlo sampling for general potentials." *Physical Review E*, 85(2), 026703. (Bouncy Particle Sampler precursor)
    15. Bouchard-Côté, A., Vollmer, S.J. & Doucet, A. (2018). "The Bouncy Particle Sampler: A Non-Reversible Rejection-Free Markov Chain Monte Carlo Method." *JASA*, 113(522), 855-867.
    16. Bierkens, J., Fearnhead, P. & Roberts, G. (2019). "The Zig-Zag Process and Super-Efficient Sampling for Bayesian Analysis of Big Data." *Annals of Statistics*, 47(3), 1288-1320.
    17. Ottobre, M. (2016). "Markov Chain Monte Carlo and Irreversibility." *Reports on Mathematical Physics*, 77(3), 267-292.
    18. Krauth, W. (2021). "Event-Chain Monte Carlo: Foundations, Applications, and Prospects." *Frontiers in Physics*, 9, 663457.
    19. Bierkens, J., Durmus, A. & Guillin, A. (2022). "Acceleration of convergence to equilibrium in Markov chains by breaking detailed balance." *SIAM Journal on Mathematical Analysis*.
    20. Gelman, A. & Rubin, D.B. (1992). "Inference from Iterative Simulation Using Multiple Sequences." *Statistical Science*, 7(4), 457-472.
    21. Vehtari, A., Gelman, A., Simpson, D., Carpenter, B. & Bürkner, P. (2021). "Rank-normalization, folding, and localization: An improved R-hat for assessing convergence of MCMC." *Bayesian Analysis*, 16(2), 667-718.
    22. Carpenter, B. et al. (2017). "Stan: A Probabilistic Programming Language." *Journal of Statistical Software*, 76(1).
    23. Song, Y., Sohl-Dickstein, J., Kingma, D.P., Kumar, A., Ermon, S. & Poole, B. (2021). "Score-Based Generative Modeling through Stochastic Differential Equations." *ICLR 2021*. (connection to non-reversible diffusion)
    24. Arnaudon, A. et al. (2024). "Scalable Monte Carlo for Bayesian Learning." arXiv:2407.12751.
    25. Bierkens, J. & Verdugo, C.A. (2024). "On the convergence time of some non-reversible Markov Chain Monte Carlo methods." arXiv:1807.02614v3 (updated 2024).
    26. Strasberg, P. & Schindler, J. (2025). "Thermodynamics of driven systems with explicitly broken detailed balance." arXiv:2501.12192.
    27. Lindblom, L. & Rall, P. et al. (2024). "Score-Based Metropolis-Hastings Algorithms." arXiv:2501.00467.
    28. Gelman, A., Carlin, J.B., Stern, H.S., Dunson, D.B., Vehtari, A. & Rubin, D.B. (2013). *Bayesian Data Analysis* (3rd ed.). CRC Press.

  ## Detailed Balance in Energy-Based and Diffusion Models
    The concept of detailed balance has found new relevance in modern deep learning through two converging threads: energy-based model (EBM) training and score-based diffusion model generation.

    **Energy-based models (EBMs)**: An EBM defines a probability distribution π_θ(x) ∝ exp(−E_θ(x)) where E_θ is a neural network parameterising the energy function. Sampling from this distribution during training requires MCMC; the standard approach uses Langevin Monte Carlo (LMC):

        x_{t+1} = x_t − ε ∇_x E_θ(x_t) + √(2ε) η_t,    η_t ~ N(0, I)

    LMC satisfies detailed balance with respect to π_θ in the continuous-time limit (ε → 0), but the discrete-time version has a discretisation error. Adding a Metropolis-Hastings correction (MALA) restores exact detailed balance at the cost of computing the acceptance ratio, which requires evaluating both E_θ(x) and E_θ(x'). Training EBMs with contrastive divergence (Hinton, 2002) short-circuits the exact MCMC by running only a few LMC steps from the data — deliberately violating stationarity to speed up training, at the cost of a biased gradient estimate. The tension between detailed-balance-respecting MCMC and efficient but biased training updates is an active research area in generative modelling.

    **Score-based diffusion models**: Score-based generative models (Song et al., 2021; DDPM, Ho et al., 2020) define a forward noising process that corrupts data x₀ into noise x_T over T steps, then train a neural network to reverse this process. The reverse process is a Langevin-type diffusion driven by the score function ∇_x log p_t(x) at each noise level t. The forward process (adding Gaussian noise) satisfies detailed balance with respect to the Gaussian noise distribution at each step; the reverse process (learned denoising) approximately satisfies a time-reversed detailed balance condition. The theoretical connection between diffusion model generation and MCMC sampling from the data distribution was formalised by De Bortoli et al. (2021): score-based diffusion models are a special case of annealed importance sampling with a learned proposal, and their convergence guarantees can be derived from mixing-time bounds for the associated Markov chain.

    **Gibbs sampling in restricted Boltzmann machines**: The Restricted Boltzmann Machine (RBM), introduced by Smolensky (1986) and popularised by Hinton (2002), uses Gibbs sampling to learn an energy function over visible and hidden variables. The Gibbs updates between visible and hidden layers satisfy detailed balance with respect to the RBM energy function, making RBM training a special case of MCMC-based learning. Contrastive divergence uses only 1-step Gibbs (CD-1) rather than running to stationarity, sacrificing exact detailed balance for computational tractability — a deliberate and principled trade-off that drove the first wave of deep learning applications in the 2000s.

  ## Diagnosing Detailed Balance Violations
    Practitioners implementing MCMC algorithms need to verify that their transition kernel satisfies detailed balance with respect to the target distribution. The following techniques are used:

    **Numerical symmetry test** — for a discrete target π over a finite state space, collect empirical transition counts N(i,j) from a long chain run. Estimate T_hat(j|i) = N(i,j) / N(i,·). Check whether π_hat(i) T_hat(j|i) ≈ π_hat(j) T_hat(i|j) for all pairs. Large asymmetries signal a detailed balance violation, typically caused by an incorrect acceptance rule or asymmetric proposal distribution.

    **Normalisation constant check** — detailed balance implies the Hastings ratio is well-defined. If the target π is only known up to a constant (as in Bayesian posteriors), the normalising constant cancels in the ratio π(y)/π(x). If a bug in the code uses the unnormalised density in the denominator but the normalised density in the numerator, or vice versa, the resulting acceptance ratio is incorrect and detailed balance is violated. Unit tests comparing acceptance probabilities against hand-computed values catch these errors.

    **Pair plot symmetry test** — for continuous state spaces, collect pairs (X_t, X_{t+1}) from a long chain. The joint distribution f(x,y) = π(x) T(y|x) should be symmetric: f(x,y) = f(y,x) if detailed balance holds. A two-dimensional histogram of (X_t, X_{t+1}) should be symmetric about the diagonal. This visual test is implemented in diagnostic tools like ArviZ's pair_plot.

    **Stationarity check** — run the chain from the target distribution (or a good approximation) and verify that the empirical distribution of X_{t+1} is unchanged from that of X_t. If the chain is started at stationarity and detailed balance holds, the one-step distribution is identical to the starting distribution. Violations produce systematic drift away from stationarity.

    **Reversibility check in probabilistic programming** — Stan's implementation of NUTS includes internal checks that verify the leapfrog integrator's volume-preservation and time-reversibility properties, which are the sufficient conditions for NUTS to satisfy detailed balance. Divergent transitions — reported by Stan during sampling — indicate that the leapfrog integrator has failed to preserve the Hamiltonian, which can cause the Metropolis correction to fail and break detailed balance.

    **Test-based validation** — a standard software engineering practice for MCMC implementations is the "Geweke test" or "prior-likelihood calibration test": simulate data from the prior-predictive distribution, run the MCMC sampler on each simulated dataset, and verify that the posterior-prior shrinkage matches the theoretical prediction. If detailed balance holds and the sampler is correct, the posterior intervals should cover the true parameters at the expected rates.

  ## Comparison: Reversible vs. Non-Reversible MCMC
    Understanding when detailed balance (reversibility) is beneficial versus when violating it improves performance requires comparing the two paradigms:

    | Property | Reversible (Detailed Balance) | Non-Reversible (Global Balance Only) |
    |----------|------------------------------|--------------------------------------|
    | Stationary distribution | Guaranteed by DB condition | Guaranteed by global balance + ergodicity |
    | Asymptotic variance | V(f, π, T_rev) | V(f, π, T_irrev) ≤ V(f, π, T_rev) (theoretically) |
    | Spectral gap | λ_rev | λ_irrev ≥ λ_rev (provably) |
    | Random-walk backtracking | Yes — chain can return to previous state | Suppressed — directional dynamics prevent backtracking |
    | Algorithm design complexity | Simple: enforce DB via acceptance rule | Harder: requires careful global balance verification |
    | Convergence diagnostics | R-hat, ESS well-developed | Less developed; active research area |
    | Standard implementations | Stan (NUTS), PyMC, BUGS | Zig-Zag, BPS in research libraries (pdmp-python, Julia) |
    | Best regime | Low-to-moderate dimensional posteriors | High-dimensional, large datasets; structured targets |
    | Physical interpretation | Thermodynamic equilibrium (reversible dynamics) | Non-equilibrium driven system |
    | Example algorithms | Metropolis-Hastings, Gibbs, HMC-NUTS | Zig-Zag Sampler, BPS, ECMC, MALA (approximate) |

  ## Connection to Ergodicity and Mixing
    Detailed balance is a sufficient condition for stationarity, but convergence to the stationary distribution also requires [[Ergodicity]] — a chain that satisfies detailed balance but is not irreducible may converge to a distribution supported on an invariant subset rather than the full target π. The interplay between detailed balance and mixing rates is quantified by:
    - **Spectral gap** — for a reversible chain with detailed balance, the spectral gap λ = 1 − |second-largest eigenvalue of T| controls the convergence rate: ||T^n(·|x) − π||_TV ≤ C (1 − λ)^n. Larger spectral gap means faster convergence. Non-reversible chains have spectral gaps at least as large (Diaconis et al., 2000).
    - **Mixing time** — the smallest n such that max_x ||T^n(·|x) − π||_TV ≤ ε; for reversible chains τ_mix = O(1/λ). Mixing time determines how long burn-in must be and how many independent samples can be extracted per unit computation.
    - **Integrated autocorrelation time (IAT)** — for a function f, the IAT τ(f) quantifies correlation between successive samples; the asymptotic variance of Monte Carlo estimates is σ²(f) = Var_π(f) × (1 + 2Σ_{k=1}^∞ ρ_k(f)) where ρ_k is the lag-k autocorrelation. Non-reversible chains have smaller IAT by the asymptotic variance inequality.
    - **Conductance / Cheeger inequality** — for reversible chains, the Cheeger inequality λ ≥ Φ²/2 relates the spectral gap to the conductance Φ = min_{S: π(S)≤1/2} π(S → S^c) / π(S), providing a geometric way to bound mixing times via worst-case bottleneck states.
    - **Log-Sobolev inequality** — a stronger condition than spectral gap bounds; controls convergence in relative entropy (KL divergence) rather than total variation; implies rapid mixing; requires detailed balance for classical formulations.

  ## Connection to the Fokker-Planck Equation and Langevin Dynamics
    In continuous time and continuous state spaces, the detailed balance condition has a natural analogue in terms of partial differential equations governing the evolution of probability densities. The Fokker-Planck equation describes how the probability density p(x,t) evolves under a stochastic differential equation (SDE) of the form:

        dX_t = b(X_t) dt + σ(X_t) dW_t

    where b(x) is the drift, σ(x) is the diffusion coefficient, and W_t is a standard Brownian motion. The Fokker-Planck equation is:

        ∂p/∂t = −∇·(b(x) p(x,t)) + (1/2) ∇·∇·(σ(x)σ(x)^T p(x,t))

    At stationarity (∂p/∂t = 0), this gives the condition on the stationary density π. The detailed balance condition in continuous time is:

        J(x,y) = π(x) T(dy|x) − π(y) T(dx|y) = 0 for all x, y

    where J is the probability current. The Langevin diffusion, with drift b(x) = (1/2)∇ log π(x), satisfies detailed balance with respect to π — this is the Metropolis-Adjusted Langevin Algorithm (MALA) in continuous time. The underdamped Langevin equation with position and momentum variables generically violates detailed balance (because the momentum flip breaks symmetry) and is therefore a non-reversible sampler, providing faster convergence via the reduced spectral gap.

    **Irreversibility and probability current**: For a non-reversible chain or diffusion satisfying only global balance (but not detailed balance), the probability current J(x,y) ≠ 0 even at stationarity. The stationary distribution is maintained by a net circulation of probability around cycles in the state space — analogous to a non-equilibrium steady state in physics where energy is continuously dissipated by the driving force that breaks detailed balance. The entropy production rate, calculated as the total probability current times the log ratio of forward and backward transition rates, is zero for detailed-balance-satisfying chains and positive for non-reversible chains, connecting MCMC irreversibility to non-equilibrium thermodynamics.

  ## Benchmark Evaluations
    Unlike [[Description Logic]] reasoners or neural network architectures, detailed balance is a condition rather than an algorithm and is not benchmarked in isolation. Instead, algorithms that satisfy (or deliberately violate) detailed balance are evaluated on the following standard tasks:

    - **Posterior inference on regression models**: Stan's benchmark suite (mc-stan.org/users/documentation/case-studies.html) provides dozens of real datasets with known posterior properties; MH and NUTS-based chains are compared on mixing speed, ESS per second, and parameter recovery (comparison to true values in simulated data), with NUTS consistently achieving 10-100x better ESS per second than simple Metropolis-Hastings due to its gradient-based proposals.
    - **Bayesian hierarchical model fitting**: The eight-schools model (Rubin, 1981) and similar hierarchical benchmarks expose the mixing difficulties of naive parameterisations; non-centred parameterisation reduces the curvature that causes Metropolis divergences and dramatically improves ESS, illustrating how detailed-balance-satisfying chains can still fail practically if the parameterisation is wrong.
    - **MCMC vs. VI comparison study (arXiv:2506.09928, June 2025)**: Systematic comparison across 47 models; HMC-NUTS achieves 99th-percentile posterior accuracy but 10-1000x slower than mean-field VI; Zig-Zag and BPS (non-reversible, violating detailed balance) achieve 5-20x faster mixing than NUTS on selected hierarchical models.
    - **LIGO gravitational wave parameter estimation**: Real-world benchmark for MCMC at astronomical scale; LALInference and Bilby use parallel-tempered MCMC with detailed balance to recover binary merger parameters from noisy detector strain data; the computation involves 15-dimensional posteriors over masses, spins, and sky location, typically requiring 10⁶ detailed-balance-satisfying MCMC steps per event.
    - **Stan performance benchmarks**: Annual benchmarking of Stan implementations (CPU vs. GPU via CmdStanR) on standard models; NUTS (satisfying detailed balance) achieves the best ESS/second on smooth posteriors with 10–1000 parameters; SG-MCMC (asymptotically satisfying a weak form of detailed balance) outperforms NUTS on mini-batch-friendly models with 10⁶+ data points.
    - **PhyStat community benchmarks**: Physics statistics community maintains benchmark problems from particle physics (H0 discovery inference, neutrino oscillation parameter estimation) that standardise comparison across frequentist and Bayesian (detailed-balance MCMC) methods.

  ## Key Terminology
    - **Detailed balance** — the condition π(x) T(y|x) = π(y) T(x|y) requiring pairwise symmetry of probability fluxes at equilibrium; sufficient for π to be stationary.
    - **Global balance** — the weaker condition ∫ π(x) T(y|x) dx = π(y) requiring only that the net probability flowing into each state equals that flowing out; necessary and sufficient for stationarity, but does not require pairwise symmetry.
    - **Reversible Markov chain** — a chain satisfying detailed balance; equivalent to the time-reversed chain having the same transition law as the forward chain.
    - **Irreversible Markov chain** — a chain satisfying global balance but not detailed balance; the time-reversed chain has different transition law; also called non-reversible.
    - **Transition kernel** T(y|x) — the conditional probability (or density) of moving from state x to state y in one step; the fundamental object on which the detailed balance condition is imposed.
    - **Stationary distribution** π — a probability distribution satisfying π = πT (the chain leaves π invariant after one step); guaranteed to be stationary if detailed balance holds with respect to π.
    - **Hastings ratio** — the quantity π(y) q(x|y) / (π(x) q(y|x)) in the Metropolis-Hastings acceptance probability; its symmetrisation min(1, ·) enforces detailed balance.
    - **Microscopic reversibility** — the physical principle, from Boltzmann and Tolman, that at thermodynamic equilibrium each elementary transition and its reverse occur at equal rates; the statistical physics counterpart of the mathematical detailed balance condition.
    - **Burn-in** — the initial phase of a Markov chain during which samples are discarded because the chain has not yet reached stationarity; the length of burn-in is related to the mixing time, which is controlled by the spectral gap.
    - **Ergodic theorem** — for an ergodic Markov chain with stationary distribution π, the time average (1/n) Σ_{t=1}^n f(X_t) converges almost surely to E_π[f] as n → ∞; the fundamental theorem justifying MCMC as a Monte Carlo integration method.
    - **Acceptance probability** α(x,y) — the probability of accepting a proposed move from x to y in a Metropolis-type algorithm; designed to enforce detailed balance; equal to min(1, Hastings ratio) in Metropolis-Hastings.
    - **Piecewise Deterministic Markov Process (PDMP)** — a continuous-time Markov process that alternates between deterministic dynamics and random jumps at event times; PDMPs like the Zig-Zag and BPS violate detailed balance while maintaining global balance, achieving improved mixing.
    - **Lifted Markov chain** — an augmented chain on an extended state space (original state + auxiliary variable) that violates detailed balance on the extended space but whose marginal on the original state space converges to the target; the construction underlying ECMC and PDMP samplers.

  ## Relationship to Information Theory
    The condition of detailed balance has a precise interpretation in terms of [[Information Theory]] that illuminates why it ensures correct stationary distributions and why violations accelerate mixing:

    **Entropy production**: For a Markov chain at stationarity π, the entropy production rate is:
        ep = Σ_{i,j} π(i) T(j|i) log[π(i) T(j|i) / π(j) T(i|j)]
    This is the KL divergence between the stationary joint distribution of (X_t, X_{t+1}) and the time-reversed joint distribution. Detailed balance requires ep = 0 (zero entropy production at stationarity), corresponding to thermodynamic equilibrium. Non-reversible chains have ep > 0 even at stationarity — they are non-equilibrium steady states that continuously dissipate information (entropy) while maintaining the correct marginal π. This entropy production is what "pays for" the faster mixing of non-reversible chains: the directional driving force that suppresses backtracking has an information-theoretic cost that does not exist for reversible chains.

    **KL divergence monotonicity**: For any Markov chain satisfying detailed balance with stationary distribution π, the KL divergence D_KL[p_t || π] is non-increasing in t: the chain drives any initial distribution toward π by reducing the information divergence monotonically. This property — related to the data processing inequality — is the probabilistic analogue of Boltzmann's H-theorem in physics and provides a rigorous information-theoretic basis for understanding MCMC convergence.

    **Mutual information and mixing**: The mutual information I(X_0; X_t) between the chain's starting state and its state after t steps decays at rate e^{−λt} where λ is the spectral gap of the transition operator. For detailed-balance chains, the spectral gap is real and non-negative; for non-reversible chains, the spectral gap is at least as large (provably), confirming the convergence advantage. The connection between spectral gap, mixing time, and mutual information is the theoretical foundation for convergence analysis of all MCMC algorithms.

  ## Convergence Diagnostics for Detailed-Balance MCMC
    When a MCMC chain satisfies detailed balance, the following diagnostic quantities are well-defined and provide the standard convergence assessment toolkit used in [[Stan]], [[PyMC]], and ArviZ:

    **R-hat (Gelman-Rubin potential scale reduction factor)**: Run K chains (typically K=4) from dispersed starting points. For each parameter θ, compute the between-chain variance B and the within-chain variance W. R-hat = √((n−1)/n × W + B/W). Values < 1.01 indicate that all chains have converged to the same distribution; values > 1.1 indicate non-convergence. R-hat relies on the detailed balance guarantee that all chains have the same unique stationary distribution π — without this guarantee, R-hat convergence does not imply correctness.

    **Effective Sample Size (ESS)**: Because successive samples from a Metropolis-Hastings chain are correlated (accepting the same proposal counts as two dependent samples), the effective sample size is ESS = n / (1 + 2 Σ_{k=1}^∞ ρ_k), where ρ_k is the lag-k autocorrelation. For detailed-balance-satisfying chains, the spectral representation of the autocorrelation function (via the operator's eigenvalues) provides theoretical bounds on ESS as a fraction of total samples. Bulk ESS and tail ESS (ArviZ implementation) separately assess convergence of the bulk and tails of the posterior, with targets of ESS_bulk > 100 and ESS_tail > 100 per chain per parameter.

    **Divergent transitions (HMC-specific)**: In Hamiltonian Monte Carlo, the leapfrog integrator may fail to conserve the Hamiltonian due to steep gradients (pathological curvature) — producing proposals that the Metropolis correction must almost certainly reject. Stan reports divergent transitions as a diagnostic for these failures; a non-zero divergence count indicates that the HMC chain is failing to explore the posterior correctly, which correlates with detailed balance violations in the high-curvature regions. Remediation involves reparameterisation (e.g. non-centred parameterisation for hierarchical models) to reduce curvature.

    **Posterior predictive checks**: After obtaining posterior samples, simulate replicated datasets ỹ_rep from the posterior predictive distribution P(ỹ | D) = ∫ P(ỹ | θ) π(θ | D) dθ and compare their statistics (mean, standard deviation, quantiles, specific domain statistics) to those of the observed data D. If the model is correct and the chain has converged to the true π(θ|D), the replicated statistics should be consistent with the observed statistics. Systematic discrepancies indicate model misspecification rather than MCMC convergence failure, but they provide the final validation step in the Bayesian workflow.

  ## Practical Implementation Guide
    Building a correct MCMC sampler using detailed balance proceeds through the following engineering steps:

    **Step 1 — Choose the target distribution π**: In [[Bayesian Inference]], π(θ) = P(θ|D) ∝ P(D|θ) P(θ). The target need only be known up to a normalising constant because the constant cancels in the Hastings ratio. Choose a parameterisation where π is well-conditioned — heavy-tailed posteriors may benefit from a log-transformed parameterisation (non-centred in hierarchical models).

    **Step 2 — Choose a proposal distribution q(θ'|θ)**: The proposal should be easy to sample and evaluate. Common choices:
    - Random walk: θ' = θ + ε, ε ~ N(0, σ²I) — symmetric, so the Hastings ratio simplifies to π(θ')/π(θ).
    - Independent: q(θ'|θ) = q(θ') — may use a fitted approximation; effective when the approximation is good.
    - Gradient-based (MALA): θ' = θ + ε∇ log π(θ) + √(2ε) z, z ~ N(0,I) — uses gradient information for directed proposals.

    **Step 3 — Compute the Metropolis-Hastings acceptance ratio**:
        α(θ, θ') = min(1, π(θ') q(θ|θ') / π(θ) q(θ'|θ))
    For a symmetric proposal, this simplifies to min(1, π(θ')/π(θ)). For a log-target (standard in practice): α = min(1, exp(log π(θ') − log π(θ) + log q(θ|θ') − log q(θ'|θ))). Working in log-space avoids numerical underflow for high-dimensional targets.

    **Step 4 — Accept or reject**: Draw u ~ Uniform(0,1). If u < α, set X_{t+1} = θ' (accept). Otherwise, X_{t+1} = θ (reject, stay). The rejection step is what enforces detailed balance: it ensures the chain does not move further from the target's high-density regions than the acceptance criterion permits.

    **Step 5 — Monitor acceptance rate**: For random walk proposals in d dimensions, the optimal acceptance rate is approximately 0.234 (Roberts, Gelman, Gilks, 1997) for targets with smooth log-densities. Rates below 0.1 indicate the proposal is too wide (most proposals rejected); rates above 0.7 indicate the proposal is too narrow (moves too small). Adaptive MCMC methods (Haario, Saksman, Tamminen, 2001) automatically tune σ to achieve the optimal rate while maintaining detailed balance asymptotically.

    **Step 6 — Diagnose convergence**: After a burn-in period, run multiple chains from dispersed starting points and compute R-hat (target < 1.01), effective sample size (target > 400 per parameter), and posterior predictive checks. [[Stan]]'s implementation validates detailed balance through automatic differentiation of the Hamiltonian and numerical checks of the leapfrog integrator's reversibility.

    **Step 7 — Assess sensitivity**: Verify that the posterior estimates are stable to perturbations of the proposal scale, the prior specification, and the data subset. Sensitivity to these choices is not a property of detailed balance itself but of the posterior geometry, and remediation involves reparameterisation rather than modification of the acceptance rule.

  ## Detailed Balance in Discrete vs. Continuous Settings
    The detailed balance condition appears in three distinct mathematical settings, each with its own analytical tools and practical implications:

    **Discrete state space, discrete time**: The most elementary setting. The transition matrix P has entries P_{ij} = P(X_{t+1} = j | X_t = i) ∈ [0,1] with Σ_j P_{ij} = 1. Detailed balance requires π_i P_{ij} = π_j P_{ji} for all i,j. This is equivalent to saying the matrix D^{1/2} P D^{-1/2} is symmetric (where D = diag(π)), so the spectral analysis of the Metropolis chain on a finite graph reduces to the eigenvalue analysis of a symmetric matrix. The spectral gap λ_1 − λ_2 (difference between the two largest eigenvalues of P) directly controls mixing time. Simulated annealing uses Metropolis updates on discrete combinatorial spaces (TSP, graph colouring) by running a chain with Boltzmann target at decreasing temperatures, satisfying detailed balance at each temperature level.

    **Continuous state space, discrete time**: The standard setting for Bayesian MCMC. The transition kernel T(dy|x) is a probability measure for each x, and detailed balance is the measure-theoretic condition π(dx) T(dy|x) = π(dy) T(dx|y) as signed measures on the product space S × S. The L² spectral theory of reversible Markov operators extends the finite-dimensional eigenvalue analysis to this setting: the transition operator Tf(x) = ∫ f(y) T(dy|x) is self-adjoint on L²(π) if and only if detailed balance holds, and its spectrum in [−1,1] controls convergence via the spectral gap. HermiT, NUTS, and Gibbs all operate in this continuous-discrete-time setting.

    **Continuous state space, continuous time**: Used for PDMPs and Langevin diffusions. The transition semigroup P_t(dy|x) = P(X_t ∈ dy | X_0 = x) satisfies detailed balance π(dx) P_t(dy|x) = π(dy) P_t(dx|y) for all t ≥ 0. The infinitesimal generator L of the semigroup is self-adjoint on L²(π) if and only if detailed balance holds, making the eigenvalue analysis of L the key theoretical tool. The spectral gap of L controls the exponential convergence rate in L²(π). Overdamped Langevin dynamics with drift ∇ log π satisfies detailed balance; underdamped Langevin dynamics does not, explaining the faster mixing observed for Hamiltonian dynamics relative to gradient descent with noise.

    **Finite vs. infinite state spaces**: The distinction matters practically because:
    - Finite: Perron-Frobenius theorem guarantees a unique stationary distribution for irreducible chains regardless of detailed balance; spectral analysis is finite-dimensional.
    - Countably infinite (e.g. integer-valued parameters): Foster-Lyapunov criteria are needed to establish positive recurrence (that the chain visits all states infinitely often); detailed balance is still sufficient for identifying π but ergodicity requires additional conditions.
    - Uncountably infinite (continuous): Most Bayesian posteriors live here; detailed balance is the standard design criterion; convergence relies on mixing time bounds derived from functional inequalities (Poincaré, log-Sobolev).

  ## Connections to the Broader Ontology
    Detailed balance occupies a structural role in the probability and statistics concept graph:

    Relative to **[[Markov Chain Monte Carlo]]** (parent concept), detailed balance is the central design criterion: every classical MCMC algorithm is constructed by finding a transition kernel that satisfies detailed balance with respect to the target posterior. Detailed balance transforms the abstract problem "sample from π" into the concrete engineering problem "design a transition kernel satisfying π(x)T(y|x) = π(y)T(x|y)."

    Relative to **[[Metropolis-Hastings]]** (primary implementation), detailed balance is the mathematical foundation: the acceptance probability min(1, π(y)q(x|y)/π(x)q(y|x)) is exactly what is needed for the Metropolis-Hastings transition kernel to satisfy detailed balance, and this is the only property that makes the algorithm correct. Different choices of acceptance function (Metropolis, Barker, Hastings) all enforce detailed balance via different functional forms.

    Relative to **[[Gibbs Sampling]]** (alternative implementation), detailed balance holds componentwise: each coordinate update satisfies detailed balance with respect to the full joint distribution, making Gibbs a special case of Metropolis-Hastings with acceptance probability identically 1.

    Relative to **[[Bayesian Inference]]** (primary application domain), detailed balance is the bridge from theoretical Markov chain theory to practical posterior computation: any Bayesian posterior π(θ|D) ∝ p(D|θ)p(θ) can be sampled by constructing a chain satisfying detailed balance with respect to π(θ|D), with the normalising constant p(D) cancelling in the Hastings ratio.

    Relative to **[[Statistical Physics]]** (conceptual origin), detailed balance expresses microscopic reversibility at thermodynamic equilibrium: the Boltzmann distribution π(x) ∝ exp(−E(x)/kT) satisfies detailed balance for any physically realised transition process in an isolated system at temperature T, connecting the MCMC algorithm design principle to the thermodynamics of closed physical systems.

    Relative to **[[Non-Reversible Markov Chain Monte Carlo]]** (contrast concept), detailed balance defines what is being violated: non-reversible MCMC deliberately breaks π(x)T(y|x) = π(y)T(x|y) while maintaining global balance Σ_x π(x)T(y|x) = π(y), achieving faster convergence by adding systematic directional dynamics that suppress random-walk backtracking.

  ## Summary of Design Principles
    The following principles distil the practical significance of detailed balance for MCMC practitioners:
    - **Detailed balance is sufficient but not necessary** — designing an algorithm satisfying detailed balance guarantees correctness; violating it while maintaining global balance can improve speed.
    - **The Hastings ratio is the engineering handle** — the acceptance probability min(1, π(y)q(x|y)/π(x)q(y|x)) is the unique mechanism that enforces detailed balance for any proposal q; understanding it enables correct custom MCMC design.
    - **Normalising constants cancel** — the most powerful consequence of detailed balance in [[Bayesian Inference]] is that the intractable normalising constant of the posterior cancels in the Hastings ratio, making MCMC feasible for arbitrary posterior distributions.
    - **Better proposals reduce the detailed balance tax** — the rejection step in Metropolis-Hastings is "wasted computation" that enforces detailed balance at the cost of accepted proposals; gradient-based proposals (MALA, HMC) reduce rejection rates by proposing in the right direction, and non-reversible methods eliminate rejection entirely for certain targets.
    - **Ergodicity completes the picture** — detailed balance alone is insufficient for convergence; the chain must also be irreducible and aperiodic; checking these properties for the specific target and proposal is the correctness argument for any MCMC implementation.

- ### Provenance
  - sources:: https://arxiv.org/pdf/2407.12751; https://arxiv.org/pdf/1306.6131; https://arxiv.org/pdf/1611.06509; https://arxiv.org/pdf/math/0407281; https://arxiv.org/abs/2501.12192; https://arxiv.org/abs/2501.00467; https://www.frontiersin.org/journals/physics/articles/10.3389/fphy.2021.663457/full; http://www.macs.hw.ac.uk/~mo3/KarpaczSchool3.pdf; https://arxiv.org/pdf/1707.05296; https://arxiv.org/abs/2008.07843; Metropolis et al. (1953) J. Chem. Phys.; Hastings (1970) Biometrika; Gelman et al. BDA3 (CRC Press, 2013); Neal (2003) Slice Sampling; Bierkens, Fearnhead, Roberts (2019) Ann. Statist.
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
