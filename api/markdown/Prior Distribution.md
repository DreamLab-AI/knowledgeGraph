A prior distribution is the probability distribution over unknown quantities that encodes belief before observing data, in Bayesian inference. It is combined with the likelihood via Bayes' theorem to produce the posterior. The choice of prior, ranging from informative to weakly informative or uninformative, encodes assumptions and regularises inference, especially with limited data.

### Content

- Priors range from informative (encoding domain knowledge) to weakly informative or non-informative (minimising assumptions). Conjugate priors yield closed-form posteriors and simplify computation, while hierarchical priors share statistical strength across groups. In recursive filters, the predicted prior for each time step is derived from the previous step's posterior propagated through a motion model.

