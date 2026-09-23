---
okf_version: "0.2"
type: Class
title: Majority Voting
resource: urn:ngm:class:majority-voting
domain: distributed-systems
description: Majority voting is a decision rule under which an outcome is accepted only when it is supported by more than half of the participating nodes or samples, providing a simple mechanism for reaching agreement in the presence of disagreement or faults. In distributed consensus algorithms such as Paxos, a value is considered chosen once it has been acknowledged by a majority quorum of acceptors, which g
maturity: established
quality: 0
is-a:
  - urn:ngm:class:consensus-algorithm
---

# Majority Voting

Majority voting is a decision rule under which an outcome is accepted only when it is supported by more than half of the participating nodes or samples, providing a simple mechanism for reaching agreement in the presence of disagreement or faults. In distributed consensus algorithms such as Paxos, a value is considered chosen once it has been acknowledged by a majority quorum of acceptors, which guarantees that any two majorities intersect and so prevents conflicting values from being chosen. In machine learning, majority voting aggregates multiple independently sampled outputs, as in self-consistency prompting, selecting the most frequent answer as the final prediction. Its fault tolerance follows directly from quorum intersection: a system with 2f+1 nodes tolerates f faults under majority voting.
