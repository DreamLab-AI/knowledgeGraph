---
okf_version: "0.2"
type: Class
title: Laplace Mechanism
resource: urn:ngm:class:laplace-mechanism
domain: security
description: The foundational noise mechanism of differential privacy, which releases a numeric query result after adding random noise drawn from a Laplace distribution whose scale equals the query's L1 sensitivity divided by the privacy budget epsilon; introduced by Dwork, McSherry, Nissim, and Smith in 2006, it achieves pure epsilon-differential privacy with no failure probability, and remains the standard m
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:noise-mechanisms
enables:
  - urn:ngm:class:privacy-preserving-analytics
contrastsWith:
  - urn:ngm:class:gaussian-mechanism
partOf:
  - urn:ngm:class:differential-privacy
---

# Laplace Mechanism

The foundational noise mechanism of differential privacy, which releases a numeric query result after adding random noise drawn from a Laplace distribution whose scale equals the query's L1 sensitivity divided by the privacy budget epsilon; introduced by Dwork, McSherry, Nissim, and Smith in 2006, it achieves pure epsilon-differential privacy with no failure probability, and remains the standard mechanism for counts, sums, and histograms in privacy-preserving analytics.
