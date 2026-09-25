Pattern matching is the act of checking a sequence or structure against a pattern to detect the presence of constituent components, and, in programming languages, of binding variables to parts of the matched structure. In symbolic AI and computation it underpins rule firing, unification, and term rewriting; in software it provides a declarative way to deconstruct data by shape. It contrasts with statistical pattern recognition by operating on exact, often symbolic, structure rather than learned probabilistic similarity.

### Overview

- In its classical sense, pattern matching tests whether an input conforms to a pattern and, on success, extracts the matched parts. Regular expressions match string patterns via finite automata; term matching and unification match tree-structured terms in logic programming and rewriting systems.
- Modern programming languages expose pattern matching as a first-class construct: destructuring tuples, records, and algebraic data types, with guards and exhaustiveness checking. This yields concise, declarative code whose correctness the compiler can partly verify.

### Mechanisms

- String matching via finite-state machines and regular expressions, including backtracking and DFA approaches.
- Structural matching of terms and trees, with variable binding and, in logic systems, full unification.
- Exhaustiveness and guard analysis in typed languages to ensure all cases are handled.

### Applications

- Lexing, parsing, and text processing; configuration and protocol parsing.
- Rule-based and expert systems where conditions match working-memory facts.
- Functional and ML-family language control flow over algebraic data types.

### Provenance

