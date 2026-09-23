---
okf_version: "0.2"
type: Class
title: Contract Net Protocol
resource: urn:ngm:class:contract-net-protocol
domain: artificial-intelligence
description: The Contract Net Protocol is a task-sharing interaction pattern for multi-agent systems in which a manager agent announces a task, soliciting bids from potential contractor agents, evaluates the responses, and awards the task to the most suitable bidder. It decomposes distributed problem solving into the phases of announcement, bidding, awarding, and result reporting, treating the agent population
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:multi-agent-system
hasPart:
  - urn:ngm:class:consensus
requires:
  - urn:ngm:class:agent
enables:
  - urn:ngm:class:automation
dependsOn:
  - urn:ngm:class:agent
implements:
  - urn:ngm:class:consensus
contrastsWith:
  - urn:ngm:class:consensus
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:agent
supports:
  - urn:ngm:class:decentralization
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:automation
  - urn:ngm:class:decentralization
---

# Contract Net Protocol

The Contract Net Protocol is a task-sharing interaction pattern for multi-agent systems in which a manager agent announces a task, soliciting bids from potential contractor agents, evaluates the responses, and awards the task to the most suitable bidder. It decomposes distributed problem solving into the phases of announcement, bidding, awarding, and result reporting, treating the agent population as a market for negotiating the allocation of work. The protocol provides a decentralised mechanism for dynamic task allocation without a fixed assignment table.
