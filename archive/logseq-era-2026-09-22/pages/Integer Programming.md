public:: true

# Integer Programming

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:integer-programming", "@type":"Page", "title":"Integer Programming", "vc:slug":"integer-programming", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:integer-programming",
  "@type":"Class",
  "label":"Integer Programming",
  "definition":"Integer programming is a class of mathematical optimisation in which some or all decision variables are constrained to take integer values, while the objective and constraints are typically linear. The integrality requirement makes these problems NP-hard in general, yet it lets them model discrete decisions such as selection, assignment, and sequencing exactly. Solvers combine the linear-programming relaxation with branch-and-bound and cutting-plane techniques to find provably optimal solutions.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:combinatorial-optimisation","label":"Combinatorial Optimisation"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:linear-programming","label":"Linear Programming"},{"@id":"urn:ngm:class:constraint-satisfaction","label":"Constraint Satisfaction"}],
    "relatedTo":[{"@id":"urn:ngm:class:convex-optimisation","label":"Convex Optimisation"},{"@id":"urn:ngm:class:operations-research","label":"Operations Research"},{"@id":"urn:ngm:class:algorithm","label":"Algorithm"}],
    "requires":[{"@id":"urn:ngm:class:algorithm","label":"Algorithm"}],
    "partOf":[{"@id":"urn:ngm:class:combinatorial-optimisation","label":"Combinatorial Optimisation"}],
    "implements":[{"@id":"urn:ngm:class:linear-programming","label":"Linear Programming"}],
    "enables":[{"@id":"urn:ngm:class:operations-research","label":"Operations Research"}],
    "supports":[{"@id":"urn:ngm:class:operations-research","label":"Operations Research"}],
    "dependsOn":[{"@id":"urn:ngm:class:linear-programming","label":"Linear Programming"}],
    "contrastsWith":[{"@id":"urn:ngm:class:convex-optimisation","label":"Convex Optimisation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- **Integer Programming** is mathematical optimisation in which decision variables are restricted to integer values, usually over a linear objective and linear constraints. It is a central technique within [[Combinatorial Optimisation]] and builds directly on the theory of [[Linear Programming]].
	- The integrality requirement lets it model discrete choices — selection, assignment, sequencing — exactly, at the cost of NP-hardness, and it overlaps closely with [[Constraint Satisfaction]] and [[Operations Research]].
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
- ### Relationships
	- uses:: [[Linear Programming]]
	- uses:: [[Constraint Satisfaction]]
	- relatedTo:: [[Convex Optimisation]]
	- relatedTo:: [[Operations Research]]
	- relatedTo:: [[Algorithm]]
	- requires:: [[Algorithm]]
	- partOf:: [[Combinatorial Optimisation]]
	- implements:: [[Linear Programming]]
	- enables:: [[Operations Research]]
	- supports:: [[Operations Research]]
	- dependsOn:: [[Linear Programming]]
	- contrastsWith:: [[Convex Optimisation]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
