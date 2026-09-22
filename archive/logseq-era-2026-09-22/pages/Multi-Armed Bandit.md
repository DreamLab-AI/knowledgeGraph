public:: true

# Multi-Armed Bandit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2a38a24b6fb693d9f375fdfd7f98ef9eee2bfb79481b368891a265ab80c62492",
  "@type": "Page",
  "vc:slug": "multi-armed-bandit",
  "title": "Multi-Armed Bandit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:exploration-exploitation-tradeoff", "vc:label": "Exploration Exploitation Tradeoff"},
    {"@id": "urn:visionflow:linked:markov-decision-process", "vc:label": "Markov Decision Process"},
    {"@id": "urn:visionflow:linked:recommendation-systems", "vc:label": "Recommendation Systems"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-armed-bandit",
  "@type": "Class",
  "label": "Multi-Armed Bandit",
  "definition": "A sequential decision-making framework in which an agent repeatedly chooses among a fixed set of actions ('arms') with unknown reward distributions, observing only the reward of the chosen arm, and seeks to maximise cumulative reward — equivalently, to minimise regret against the best arm in hindsight; it isolates the exploration–exploitation trade-off in its purest form, since unlike a full Markov decision process the environment has no state transitions, and underpins algorithms such as epsilon-greedy, UCB, and Thompson sampling used in A/B testing, recommendation, and adaptive experimentation.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:reinforcement-learning",
    "label": "Reinforcement Learning"
  },
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:exploration-exploitation-tradeoff", "label": "Exploration Exploitation Tradeoff"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:markov-decision-process", "label": "Markov Decision Process"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:recommendation-systems", "label": "Recommendation Systems"},
      {"@id": "urn:ngm:class:a-b-testing", "label": "A/B Testing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:online-learning", "label": "Online Learning"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A sequential decision-making framework in which an agent repeatedly chooses among a fixed set of actions ('arms') with unknown reward distributions, observing only the reward of the chosen arm, and seeks to maximise cumulative reward — equivalently, to minimise regret against the best arm in hindsight; it isolates the exploration–exploitation trade-off in its purest form, since unlike a full Markov decision process the environment has no state transitions, and underpins algorithms such as epsilon-greedy, UCB, and Thompson sampling used in A/B testing, recommendation, and adaptive experimentation."

- ### Semantic Classification
  - owl-class:: machine-learning:MultiArmedBandit
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Reinforcement Learning]]
  - depends-on:: [[Exploration Exploitation Tradeoff]]
  - contrasts-with:: [[Markov Decision Process]]
  - enables:: [[Recommendation Systems]]

- ### Content

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
