A sequential decision-making framework in which an agent repeatedly chooses among a fixed set of actions ('arms') with unknown reward distributions, observing only the reward of the chosen arm, and seeks to maximise cumulative reward — equivalently, to minimise regret against the best arm in hindsight; it isolates the exploration–exploitation trade-off in its purest form, since unlike a full Markov decision process the environment has no state transitions, and underpins algorithms such as epsilon-greedy, UCB, and Thompson sampling used in A/B testing, recommendation, and adaptive experimentation.

### Semantic Classification

### Content

## Definition

The **multi-armed bandit** problem takes its name from a gambler facing a row of slot machines ("one-armed bandits") with different, unknown payout rates. Each round the agent pulls one arm and observes only that arm's reward. The tension is immediate: keep pulling the arm that has paid best so far (exploit), or sample uncertain arms that might be better (explore). The framework is the canonical formalisation of the [[Exploration Exploitation Tradeoff]], and performance is measured as *regret* — the cumulative reward gap against always playing the best arm.

The bandit setting is the stateless special case of reinforcement learning. In contrast with a [[Markov Decision Process]], actions do not change the environment: each round is drawn fresh from fixed (or slowly drifting) reward distributions, and there is no credit-assignment problem across time. This restriction buys sharp theory — Lai and Robbins (1985) proved a logarithmic lower bound on regret, and algorithms such as Upper Confidence Bound (UCB) and Thompson sampling match it — while remaining rich enough to model a vast class of practical decisions.

Contextual bandits extend the framework by revealing side information (a user profile, a query) before each choice, with the reward depending on both context and arm. This is the workhorse of industrial personalisation: news and product [[Recommendation Systems]], advert selection, and adaptive user interfaces all run contextual bandit loops, and adaptive experimentation platforms use bandits to shift traffic towards winning variants during a test rather than after it, reducing the opportunity cost of classical fixed-allocation A/B testing.

## Technical Details

- **Epsilon-greedy**: exploit the empirically best arm, but explore uniformly at random with probability ε; simple, widely deployed, suboptimal in theory.
- **UCB**: choose the arm maximising mean-so-far plus a confidence bonus that shrinks with pulls — "optimism in the face of uncertainty"; achieves O(log T) regret.
- **Thompson sampling**: maintain a Bayesian posterior per arm, sample from each, and play the argmax; empirically strong, matches the lower bound, and extends naturally to contextual and structured settings.
- **Variants**: adversarial bandits (EXP3) drop the stochastic assumption; non-stationary bandits discount old evidence; budgeted and combinatorial bandits handle costs and multi-item actions; best-arm identification optimises pure exploration.
- **Deployment cautions**: delayed or biased reward signals, feedback loops with the logged data, and non-stationarity from changing user populations are the usual failure modes in production bandit systems.

  ## Current Landscape

- **Contextual bandits are the deployed workhorse**: a 2025 arXiv literature review (May 2025) surveys scalable, interpretable contextual multi-armed bandit (CMAB) methods and documents their adoption across news, product and advert personalisation, dynamic pricing, and medical-treatment optimisation.
- **Thompson sampling vs LinUCB in production**: a six-month production study (Aug 2025 – Jan 2026) reported contextual bandits improving click-through rate by ~15–29% over context-free baselines, with Thompson sampling ~8% ahead of LinUCB in high-traffic (>100k decisions/day) fast-feedback settings, while LinUCB gave lower reward variance for regulated, audit-critical use.
- **Neural bandits scaling up**: Meta's Epistemic Neural Recommendation (ENR, Dec 2024) enables Thompson sampling at recommender-system scale, boosting click-through and ratings by ≥9% and ≥6% while using orders of magnitude less compute than prior neural bandit baselines.
- **Multi-objective bandits**: 2025 work extends CMAB to jointly optimise relevance and fairness in recommender systems, reflecting a broader push to balance reward with fairness and other constraints.

  **Sources**:

- https://arxiv.org/html/2505.16918v1
- https://ai.meta.com/research/publications/scalable-neural-contextual-bandit-for-recommender-systems/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12012038/

