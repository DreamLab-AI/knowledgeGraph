
Regression testing is the practice of re-executing previously passing tests after a code change to confirm that existing behaviour has not been broken. It guards against regressions introduced by new features, bug fixes or refactoring by maintaining a suite of repeatable checks that are run automatically as part of integration and delivery pipelines. The discipline trades upfront test authoring and maintenance for sustained confidence in evolving systems.

- ### Overview
	- As software evolves, every change risks disturbing behaviour that previously worked. Regression testing addresses this by maintaining a curated suite of tests that encode expected behaviour and replaying them on each candidate build.
	- Suites span granular [[Unit Testing]] and broader [[Integration Testing]], and are typically executed automatically within [[Continuous Integration]] and [[Continuous Delivery]] pipelines so that failures surface quickly and close to their cause.
	- Effective regression testing balances coverage against execution cost, using selection, prioritisation and parallelism to keep feedback fast as the suite grows.
- ### Mechanisms
	- Test selection and impact analysis to run the subset of tests affected by a change.
	- Test prioritisation to surface likely failures earlier in a run.
	- Golden-output and snapshot comparison to detect unexpected differences.
	- Flaky-test detection and quarantine to keep signal trustworthy.
	- Pipeline gating that blocks merges or releases on regression failures.
- ### Applications
	- Guarding refactoring efforts so internal restructuring preserves observable behaviour.
	- Validating bug fixes by adding a failing test that the fix must turn green and that future changes must keep green.
	- Continuous validation of releases within automated delivery pipelines.
	- Cross-platform and cross-version compatibility verification.
- ### Provenance

