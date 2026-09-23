
Compiler optimisation is the set of program transformations a compiler applies to make generated code faster, smaller or more energy-efficient while preserving its observable behaviour. It operates over intermediate representations using analyses such as data-flow and dependence analysis to enable transformations like inlining, loop optimisation and dead-code elimination. Optimisation is central to extracting performance from modern hardware without burdening the programmer.

- ### Overview
  - A compiler does more than translate source into machine code: it reshapes the program to exploit the target architecture, eliminating redundancy and restructuring computation while guaranteeing the same observable results.
  - Optimisations are applied over intermediate representations, where control- and data-flow are explicit, and are guided by analyses that prove a transformation is safe and worthwhile.
  - Optimisation spans local, function-level and whole-program scopes, and may be static at build time or dynamic at run time when a just-in-time compiler observes actual behaviour.
- ### Key aspects
  - Semantic preservation: optimised code must behave identically to the original.
  - Analysis-driven: data-flow and dependence analyses justify each transformation.
  - Intermediate representation: a normalised form where optimisations are expressed.
  - Multiple objectives: speed, code size and energy can be traded off.
  - Phase ordering: the sequence of passes affects the final result.
- ### Mechanisms
  - Inlining and function specialisation to remove call overhead.
  - Loop optimisations such as unrolling, fusion and vectorisation.
  - Dead-code and common-subexpression elimination to remove redundancy.
  - Register allocation and instruction scheduling for the target machine.
  - Profile-guided optimisation using runtime measurements.
- ### Applications
  - Generating efficient native code for systems and application languages.
  - Just-in-time optimisation in managed runtimes.
  - Accelerating numerical and machine-learning kernels.
  - Reducing binary size for constrained devices.
- ### Provenance

