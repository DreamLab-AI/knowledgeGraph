Automated code review is the use of software tools, static analysis and, increasingly, large language models to inspect source code for defects, style violations, security weaknesses and maintainability issues without requiring manual reading of every change. It augments or partially replaces human review by surfacing actionable findings directly in pull requests and continuous integration pipelines. Modern systems combine rule-based linters with learned models that reason about code intent and propose fixes.

- [[Automated Code Review]] uses tooling, [[Static Analysis]] and [[Large Language Model]]s to inspect source code for defects, style issues and security weaknesses without manual reading of every change. It is a machine-assisted form of [[Code Review]].
- It plugs into [[Continuous Integration]] and [[Version Control]] so findings appear directly on pull requests, supporting [[DevOps]] workflows.

### Overview

- Traditional code review relies on human reviewers reading diffs; automated review shifts the repetitive, mechanical parts of that work to software so people can focus on design and intent.
- Rule-based linters and static analysers catch deterministic issues, while LLM-based reviewers add contextual reasoning, explaining why a change is risky and proposing concrete fixes.
- The combination raises consistency and throughput, narrows the feedback loop, and helps contain [[Technical Debt]] before it merges into the main branch.

### Mechanisms

- Static analysis: pattern and dataflow checks flag bugs, anti-patterns and vulnerabilities.
- Linting and style enforcement: configurable rules normalise formatting and conventions.
- LLM reasoning: models summarise diffs, assess intent, and suggest edits in natural language.
- CI integration: checks run automatically on each push and block or annotate merges.
- Feedback in-context: comments are posted inline on the relevant lines of a pull request.

### Applications

- Pre-merge gating in continuous integration pipelines.
- Security scanning of dependencies and code paths.
- Onboarding assistance by explaining unfamiliar code to contributors.
- Large-scale refactoring review where manual reading does not scale.

### Provenance

