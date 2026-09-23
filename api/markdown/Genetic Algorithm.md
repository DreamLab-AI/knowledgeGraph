
A genetic algorithm is a population-based metaheuristic for optimisation and search inspired by Darwinian natural selection, in which candidate solutions are encoded as chromosomes and evolved across generations through selection, crossover, and mutation. A fitness function ranks individuals so that fitter solutions are preferentially recombined, gradually steering the population towards high-quality regions of the search space without requiring gradient information. Genetic algorithms are well suited to combinatorial, non-convex, and black-box problems where the objective is rugged, discontinuous, or expensive to differentiate.

- ### Overview
	- Genetic algorithms maintain a population of encoded candidate solutions and iterate a generational loop: evaluate fitness, select parents, recombine them via crossover, perturb offspring via mutation, and form the next generation.
	- Because they treat the objective as a black box, they apply to problems where gradients are unavailable, the landscape is rugged or discontinuous, or the search space is combinatorial. The diversity maintained by the population helps avoid premature convergence to local optima.
	- Design choices, encoding scheme, selection pressure, crossover and mutation operators and rates, elitism, and population size, govern the balance between exploration and exploitation.
- ### Mechanisms
	- Selection: tournament, roulette-wheel, or rank-based choice of parents weighted by fitness.
	- Crossover: recombination of parental chromosomes to form offspring.
	- Mutation: random perturbation that injects diversity and enables escape from local optima.
	- Elitism: preservation of the best individuals across generations.
- ### Applications
	- Combinatorial optimisation such as scheduling, routing, and packing.
	- Neural architecture search and [[Hyperparameter Optimisation]].
	- Engineering design and parameter tuning for simulations.
	- Feature selection and symbolic regression.
- ### Provenance

