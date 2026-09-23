
A method, technique, or configuration that a professional community has found through accumulated experience to reliably produce superior results, codified so that others can adopt it without rediscovering it. Best practices sit between raw craft knowledge and formal standards: they are advisory rather than mandatory, evolve faster than standardisation processes allow, and are the substance that bodies of knowledge, reference architectures, and accessibility or security guidelines distil and disseminate.

- ### Semantic Classification

- ### Content

  ## Definition

  A **best practice** is experience made portable: a way of doing something that practitioners have converged on because it demonstrably outperforms the alternatives, written down so the lesson does not have to be relearnt organisation by organisation. The term deliberately claims less than "proven optimum" — best practices are context-sensitive heuristics, valid until the context or the technology shifts — but more than personal preference, because they carry the weight of community consensus and documented outcomes.

  The concept contrasts instructively with the [[Technical Standard]]. A standard is a formal, versioned specification with conformance criteria, produced through a governed process (ISO, W3C, IETF) and often referenced by regulation or contract; a best practice is advisory, can change with the next post-mortem, and succeeds through persuasion rather than mandate. The two feed each other: practices that stabilise get standardised (many W3C Recommendations began as "Best Practices" notes), and standards spawn practices about how to apply them well. Codification vehicles in this graph include bodies of knowledge such as DAMA-DMBOK for data management, [[Reference Architecture]] documents that bundle practices into deployable blueprints, and domain guidelines such as XR accessibility guidance, which is explicitly structured as collections of best practices.

  In engineering organisations, best practices are a core [[Knowledge Management]] asset. They shorten onboarding, reduce variance between teams, and enable [[Interoperability]] by aligning independent implementers on conventions that no standard yet forces. Their principal failure modes are staleness (a practice outliving the conditions that justified it) and cargo-culting (adopting the form without the rationale), which is why mature frameworks pair each practice with its context, evidence, and known trade-offs.

  ## Current Landscape

  - **Codification**: bodies of knowledge (DMBOK, PMBOK, SWEBOK), vendor well-architected frameworks, and security baselines (CIS Benchmarks, NCSC guidance, OWASP ASVS) are the dominant carriers. The AWS Well-Architected Framework (latest revision November 2024) codifies practices across six pillars and is designed as a "constructive conversation", explicitly not an audit.
  - **Living, versioned guidance**: CIS Benchmarks are maintained through a rolling community-consensus process — the CIS AWS Foundations Benchmark reached version 7.0.0, with a broad August 2025 update refreshing recommendations across the catalogue — illustrating how best practice now ships on a continuous cadence rather than as a one-off document.
  - **Standards pipeline**: W3C publishes "Best Practices" notes (Data on the Web, Spatial Data on the Web) that shape later Recommendations; IETF BCP documents give the pattern formal status.
  - **Emerging domains**: XR accessibility, AI assurance, and decentralised identity currently rely heavily on best-practice guidance because formal standards are still maturing.
  - **Critique**: management literature warns that "best" ossifies; many organisations now prefer "good practices" or context-ranked patterns, reviewed on a fixed cadence against incident and benchmark data.

  **Sources**:
  - https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
  - https://www.cisecurity.org/benchmark/amazon_web_services
  - https://www.cisecurity.org/insights/blog/cis-benchmarks-august-2025-update

