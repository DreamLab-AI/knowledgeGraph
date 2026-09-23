
Relational algebra is a formal, procedural query language consisting of operators that take relations as input and produce relations as output. Its core operators — selection, projection, union, set difference, Cartesian product, rename, and derived operators such as join — provide a closed algebra that gives precise semantics to relational queries. It is the theoretical foundation for SQL and for the query optimisation performed by relational database systems.

- ### Overview
  - Introduced by E. F. Codd alongside the relational model, relational algebra treats relations as sets of tuples and defines operators that are closed — every operator returns a relation, so expressions compose. Selection filters rows, projection chooses columns, and join combines relations on matching attributes, with union, difference, and product supplying set-theoretic combination.
  - Its procedural nature specifies how to compute a result, which makes it ideal as an internal representation for query engines. Equivalence laws over its operators (commutativity, pushing selections, reordering joins) are exactly what cost-based optimisers exploit to transform queries into cheaper plans.

- ### Key aspects
  - Closed set of operators over relations: selection, projection, union, difference, product, rename, and joins.
  - Algebraic equivalences enabling query rewriting and optimisation.
  - Equivalence in expressive power to safe relational calculus, the basis of relational completeness.

- ### Applications
  - Defining the semantics of SQL queries and views.
  - Internal query representation and cost-based optimisation in database engines.
  - Teaching and reasoning about correctness of relational queries.

- ### Provenance

