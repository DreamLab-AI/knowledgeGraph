A likelihood function expresses the probability of observed data as a function of the parameters of a statistical model, treating the data as fixed and the parameters as variable. It is the central object in maximum-likelihood estimation and Bayesian inference, where it weights how well candidate parameter values explain the evidence. In sequential filtering it scores how consistent each hypothesis is with a new measurement.

### Content

- In a particle filter the likelihood weights each particle by the probability of the current observation given that particle's predicted state, driving resampling toward plausible hypotheses. Maximising the likelihood, or combining it with a prior via Bayes' rule, yields parameter and state estimates.

