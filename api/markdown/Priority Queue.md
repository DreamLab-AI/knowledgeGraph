
A priority queue is an abstract data type in which each element has an associated priority and elements are served in order of priority rather than insertion order. It supports insertion of elements and extraction of the highest- (or lowest-) priority element, and is most commonly implemented with a binary heap. Priority queues underpin many graph and scheduling algorithms where the next item to process is the most urgent one.

- ### Overview
  - Where an ordinary queue is first-in-first-out, a priority queue dequeues the element with the most extreme priority value, regardless of when it was inserted. This makes it the natural structure for "always process the best candidate next" problems.
  - The canonical implementation is the binary heap, giving logarithmic insertion and extraction. Other implementations include Fibonacci heaps, pairing heaps and ordered arrays, each trading off the cost of different operations.
  - Priority queues appear throughout computer science: in shortest-path search, in greedy and best-first algorithms, in discrete-event simulation and in task schedulers.
- ### Key aspects
  - Ordering by priority: the element returned is always the current minimum or maximum priority.
  - Core operations: insert (push), peek (find-min/max) and extract (pop).
  - Heap implementation: balanced binary tree stored in an array gives O(log n) updates and O(1) peek.
  - Stability and tie-breaking: secondary keys resolve elements of equal priority.
  - Mutable priorities: decrease-key operations let algorithms relax tentative costs.
- ### Mechanisms
  - Binary heap with sift-up on insert and sift-down on extract to maintain the heap invariant.
  - Decrease-key used by Dijkstra and A* to update tentative distances as shorter paths are found.
  - Lazy deletion to avoid expensive in-place updates in some implementations.
- ### Applications
  - Single-source shortest paths in weighted graphs.
  - Best-first and A*-style heuristic search.
  - CPU and task scheduling by priority.
  - Discrete-event simulation event lists.
  - Huffman coding and other greedy constructions.
- ### Provenance

