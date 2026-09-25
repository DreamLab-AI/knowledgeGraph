Debugging is the systematic process of locating, diagnosing and resolving defects in software so that it behaves as intended. It typically involves reproducing the fault, observing program state through breakpoints, logging and runtime inspection, forming hypotheses about the cause, and verifying a fix. Debugging spans interactive use of debuggers, analysis of stack traces and logs, and reasoning about concurrency and integration boundaries. It is a core software development activity complementary to, but distinct from, automated testing.

- Debugging is the systematic process of locating, diagnosing and resolving software defects. As part of [[Software Development]] and [[Software Engineering]] it draws on the [[Runtime Environment]] and [[Observability]] and complements [[Testing]] and [[Software Testing]].

### Overview

- Debugging closes the gap between observed and intended behaviour by working from a symptom back to a root cause.
- It blends interactive techniques (breakpoints, watches, step execution) with after-the-fact analysis of logs and stack traces.
- Effective debugging is iterative: reproduce, narrow, hypothesise, test, and confirm.

### Mechanisms

- Reproduction: establishing a reliable way to trigger the fault, ideally minimised to the smallest failing case.
- Inspection: pausing execution in the [[Runtime Environment]] to read variables, the call stack and memory.
- Instrumentation: adding logging and using [[Observability]] signals to expose otherwise hidden state.
- Bisection: using [[Version Control]] history to isolate the change that introduced a regression.

### Key aspects

- Distinguishing the fault (defect in code) from the failure (observable wrong behaviour).
- Handling non-deterministic bugs arising from concurrency, timing or environment differences.
- Verifying that a fix resolves the defect without introducing new ones.

### Applications

- Resolving crashes, incorrect output and performance anomalies.
- Diagnosing integration failures across services and dependencies.
- Post-incident analysis feeding back into [[Reliability]] and [[DevOps]] practices.

### Provenance

