Scalable oversight is the AI-safety research problem of reliably supervising, evaluating, and steering AI systems whose capabilities approach or exceed human ability on the tasks being judged. It seeks mechanisms that let limited human supervisors provide accurate training signal and verification even when they cannot directly check a model's outputs. Approaches decompose hard judgements, amplify human judgement with AI assistance, and use adversarial or recursive structures to surface errors.

- Scalable oversight studies how humans can supervise AI systems that match or surpass human skill on the judged task. It is a subproblem of [[AI Alignment]] that relies on [[Human Feedback]], [[RLHF]], and structures such as [[Task Decomposition]] to extract reliable signal.

### Overview

- As models grow more capable, naive human evaluation breaks down: supervisors cannot directly verify long, expert, or superhuman outputs.
- The research programme asks how to preserve trustworthy training signal and verification in this regime, so that capability gains do not outrun our ability to check them.
- Proposed mechanisms amplify limited human judgement, decompose hard questions into checkable parts, and pit models against one another to expose flaws.

### Mechanisms

- [[Task Decomposition]] breaks an intractable judgement into smaller subclaims a human can verify.
- Recursive reward modelling and AI-assisted critique amplify a [[Human-in-the-Loop]] supervisor with model assistance.
- Debate-style and adversarial setups, related to [[Red Teaming]], surface deceptive or incorrect reasoning.
- Weak-to-strong generalisation studies whether weaker supervisors can elicit aligned behaviour from stronger models, supported by [[Interpretability]] tools.

### Applications

- Training and evaluating frontier models where direct human grading is infeasible.
- Building [[Quality Assurance]] processes for high-stakes AI deployments.
- Underpinning [[AI Governance]] assurances about controllability.
- Preparing oversight regimes for increasingly [[Agentic AI]] systems.

### Provenance

