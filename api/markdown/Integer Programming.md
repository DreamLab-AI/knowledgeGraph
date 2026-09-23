
Integer programming is a class of mathematical optimisation in which some or all decision variables are constrained to take integer values, while the objective and constraints are typically linear. The integrality requirement makes these problems NP-hard in general, yet it lets them model discrete decisions such as selection, assignment, and sequencing exactly. Solvers combine the linear-programming relaxation with branch-and-bound and cutting-plane techniques to find provably optimal solutions.

- ### Overview
	- A linear program with the added stipulation that some variables be integers becomes a mixed-integer program; if all variables are integer it is a pure integer program. This small change transforms a polynomially solvable continuous problem into one that is NP-hard, because the feasible region is a discrete lattice rather than a smooth polytope.
	- Practical solvers do not enumerate the lattice. They solve the linear-programming relaxation, then systematically branch on fractional variables and prune sub-problems whose relaxed bound cannot beat the best known solution. Cutting planes tighten the relaxation by adding valid inequalities that exclude fractional points.
	- Binary (0/1) variables are especially expressive, encoding yes/no decisions, logical implications, and disjunctions, which is why integer programming is a workhorse for planning and scheduling across industry.
- ### Mechanisms
	- Restricts variables to integers while keeping a linear objective and constraints.
	- Solves the continuous [[Linear Programming]] relaxation to obtain bounds.
	- Applies branch-and-bound search to enforce integrality and prune the tree.
	- Strengthens relaxations with cutting planes and problem-specific valid inequalities.
	- Encodes logical conditions through binary variables, linking it to [[Constraint Satisfaction]].
- ### Applications
	- Vehicle routing, crew scheduling, and timetabling in [[Operations Research]].
	- Facility location, network design, and capital budgeting decisions.
	- Production planning, lot-sizing, and supply-chain optimisation.
	- Combinatorial subproblems within larger AI planning and verification systems.
- ### Provenance

