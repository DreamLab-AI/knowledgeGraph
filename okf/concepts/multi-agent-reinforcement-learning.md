---
okf_version: "0.2"
type: Class
title: Multi-Agent Reinforcement Learning
resource: urn:ngm:class:multi-agent-reinforcement-learning
domain: ai
description: Multi-agent reinforcement learning (MARL) extends reinforcement learning to settings where several agents learn concurrently while interacting in a shared environment. Each agent optimises its own policy, but the environment is non-stationary from any single agent's perspective because the others are simultaneously adapting, which raises challenges of coordination, competition, credit assignment a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:game-theory
enables:
  - urn:ngm:class:distributed-decision-making
  - urn:ngm:class:automation
dependsOn:
  - urn:ngm:class:ai-model
bridgesTo:
  - urn:ngm:class:game-theory
  - urn:ngm:class:distributed-decision-making
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:deep-reinforcement-learning
  - urn:ngm:class:markov-decision-process
supports:
  - urn:ngm:class:task-automation
partOf:
  - urn:ngm:class:multi-agent-system
relatedTo:
  - urn:ngm:class:agent
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
---

# Multi-Agent Reinforcement Learning

Multi-agent reinforcement learning (MARL) extends reinforcement learning to settings where several agents learn concurrently while interacting in a shared environment. Each agent optimises its own policy, but the environment is non-stationary from any single agent's perspective because the others are simultaneously adapting, which raises challenges of coordination, competition, credit assignment and equilibrium selection. MARL draws on game theory to analyse cooperative, competitive and mixed incentive structures and underpins applications from team robotics to automated trading and traffic control.
