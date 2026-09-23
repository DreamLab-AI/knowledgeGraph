---
okf_version: "0.2"
type: Class
title: Pairwise QF
resource: urn:ngm:class:pairwise-qf
domain: blockchain
description: Pairwise QF (Pairwise-bounded Quadratic Funding) is a variant of quadratic funding that limits the matching subsidy attributable to coordinating groups of contributors by discounting the influence of pairs who repeatedly co-fund. It mitigates collusion and Sybil attacks that plague naive quadratic funding by capping the matching any pair of donors can jointly unlock. The mechanism preserves quadra
maturity: experimental
quality: 0.72
is-a:
  - urn:ngm:class:economic-mechanism
relatedTo:
  - urn:ngm:class:quadratic-voting
---

# Pairwise QF

Pairwise QF (Pairwise-bounded Quadratic Funding) is a variant of quadratic funding that limits the matching subsidy attributable to coordinating groups of contributors by discounting the influence of pairs who repeatedly co-fund. It mitigates collusion and Sybil attacks that plague naive quadratic funding by capping the matching any pair of donors can jointly unlock. The mechanism preserves quadratic funding's democratic weighting of many small contributions while resisting manipulation.
