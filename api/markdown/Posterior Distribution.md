
A posterior distribution is the probability distribution over unknown quantities after observing data, obtained by combining a prior distribution with the likelihood via Bayes' theorem. It represents updated belief and is the central object of Bayesian inference. In recursive estimators such as Bayes and particle filters, the posterior at each step becomes the basis for the next prediction.

- ### Content
  - Computing the posterior requires normalising the product of prior and likelihood by the marginal evidence, which is often intractable. Practical methods approximate it through conjugate priors, variational inference, Markov chain Monte Carlo, or particle representations. In sequential estimation the posterior is propagated forward as the next step's prior.

