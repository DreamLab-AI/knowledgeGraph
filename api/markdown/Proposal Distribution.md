A proposal distribution is an auxiliary distribution used in Monte Carlo methods to generate candidate samples when sampling directly from a target distribution is infeasible. In importance sampling, Metropolis-Hastings, and particle filters it determines where samples are drawn, and its closeness to the target governs efficiency and variance. A poorly chosen proposal causes sample degeneracy or slow mixing.

### Content

- In importance sampling, samples drawn from the proposal are reweighted by the ratio of target to proposal density; in Metropolis-Hastings the proposal generates moves that are accepted or rejected to leave the target invariant. In particle filtering the proposal often combines the motion model with the latest measurement to focus particles in high-likelihood regions, reducing the degeneracy that otherwise collapses the sample set.

