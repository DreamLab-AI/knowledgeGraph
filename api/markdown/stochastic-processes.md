- ### Definition
  - A stochastic process is a collection of random variables indexed by time or another parameter, used to model systems that evolve with randomness. Examples include random walks, Markov chains, Poisson processes and Brownian motion, each characterised by how its future behaviour depends on its present and past states. Stochastic processes are foundational in probability theory and are applied across physics, biology, queueing theory and quantitative finance.

- ### Semantic Classification
  - owl-class:: math:StochasticProcesses
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Time Series Analysis]]
  - has-part:: [[Markov Chain]], [[Brownian Motion]]
  - requires:: [[Probability Theory]], [[Measure Theory]]
  - enables:: [[Quantitative Finance]], [[Reinforcement Learning]]

- ### Content
  - Formally, a stochastic process is a family of random variables defined on a common probability space and indexed by a set, most often representing time. The joint distribution of these variables, together with properties such as stationarity and independence of increments, determines the character of the process and the questions one can answer about it.
  - A central concept is the Markov property, where the future depends on the past only through the present state. Markov chains, Markov processes and the strong Markov property organise a large class of tractable models, while processes such as Brownian motion serve as continuous-time limits and as building blocks for stochastic calculus.
  - Stochastic processes provide the modelling language for randomness over time across disciplines. In finance they underpin models of asset prices and interest rates, in operations research they describe queues and reliability, and in machine learning they appear in Markov decision processes and sampling algorithms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z