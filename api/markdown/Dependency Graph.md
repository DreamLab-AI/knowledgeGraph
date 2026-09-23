
A dependency graph is a directed graph in which nodes represent build artefacts, assets or tasks and edges represent a requires-before relationship between them. Traversing the graph in topological order determines a valid build or execution sequence and reveals cycles that would otherwise deadlock a pipeline. Asset and content pipelines rely on dependency graphs to determine what must be rebuilt when a source file changes.

- ### Provenance

