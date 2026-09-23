
A reentrancy attack is a smart-contract exploit in which a malicious contract repeatedly re-enters a vulnerable function before its state is updated, draining funds or corrupting state. It arises when a contract makes an external call before completing its own bookkeeping, allowing the callee to recursively invoke the caller. The class of bug was made notorious by the DAO incident and is mitigated by the checks-effects-interactions pattern and reentrancy guards.

- ### Overview
  - The attack exploits the order of operations: a vulnerable contract sends value via an external call before decrementing the caller's balance, so the recipient's fallback function calls back into the withdrawal function while the stale balance still permits it. Each recursive call repeats until funds or gas are exhausted.
- ### Mechanisms
  - External call made before internal state is updated
  - Recursive re-entry via the recipient's fallback function
  - State left inconsistent across nested invocations
  - Mitigation through checks-effects-interactions ordering
  - Reentrancy guards and mutex locks as defences
- ### Applications
  - Auditing smart contracts for unsafe external calls
  - Designing withdrawal patterns resistant to re-entry
  - Static and dynamic analysis tooling for vulnerability detection
  - Security education and red-team exercises
- ### Provenance

