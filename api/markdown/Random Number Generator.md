
A random number generator (RNG) produces sequences of numbers that lack predictable pattern, either through deterministic algorithms seeded from an initial state (pseudo-random) or from physical entropy sources (true random). RNGs are essential to stochastic sampling, Monte Carlo methods, simulation, and cryptographic key generation. Quality is judged by statistical uniformity, period length, and, for security uses, unpredictability.

- ### Content
  - Pseudo-random generators (e.g. Mersenne Twister, PCG) are fast and reproducible from a seed, suiting simulation. Cryptographically secure RNGs add unpredictability guarantees for keys and nonces. In probabilistic state estimation, high-quality RNGs ensure unbiased Monte Carlo sampling, while poor generators can introduce correlations that bias filter estimates.

