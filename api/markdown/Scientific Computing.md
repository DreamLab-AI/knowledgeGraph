public:: true

# Scientific Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scientific-computing",
  "@type": "Page",
  "vc:slug": "scientific-computing",
  "title": "Scientific Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scientific-computing",
  "@type": "Class",
  "label": "Scientific Computing",
  "definition": "Scientific computing is the discipline concerned with the development and application of computational methods and software to solve mathematical and scientific problems that are analytically intractable or whose scale demands automation. It encompasses numerical analysis, algorithm design, software engineering for high-performance systems, and the management of large-scale simulation workflows. Key application domains include climate modelling, computational fluid dynamics, molecular dynamics, finite element analysis, and astronomical simulation. Scientific computing increasingly overlaps with machine learning as data-driven models augment or replace first-principles simulations.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:numerical-analysis", "label": "Numerical Analysis"},
      {"@id": "urn:ngm:class:parallel-programming", "label": "Parallel Programming"},
      {"@id": "urn:ngm:class:linear-algebra", "label": "Linear Algebra"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:computational-resources", "label": "Computational Resources"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:numerical-libraries", "label": "Numerical Libraries"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cuda", "label": "CUDA"},
      {"@id": "urn:ngm:class:simulation-engine", "label": "Simulation Engine"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"},
      {"@id": "urn:ngm:class:mpi", "label": "MPI"},
      {"@id": "urn:ngm:class:openmp", "label": "OpenMP"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"},
      {"@id": "urn:ngm:class:fluid-simulation", "label": "Fluid Simulation"},
      {"@id": "urn:ngm:class:molecular-dynamics", "label": "Molecular Dynamics"},
      {"@id": "urn:ngm:class:climate-modelling", "label": "Climate Modelling"},
      {"@id": "urn:ngm:class:finite-element-analysis", "label": "Finite Element Analysis"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:simulation", "label": "Simulation"},
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:physics-informed-neural-networks", "label": "Physics-Informed Neural Networks"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computational-science", "label": "Computational Science"},
      {"@id": "urn:ngm:class:data-science", "label": "Data Science"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:computational-science", "label": "Computational Science"},
    {"@id": "urn:ngm:class:numerical-computing", "label": "Numerical Computing"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - Scientific Computing is the application of computational algorithms and [[High-Performance Computing]] infrastructure to solve large-scale numerical problems in science and engineering, increasingly leveraging [[GPU Computing]] and [[Distributed Computing]] to accelerate [[Simulation]] workflows.
- ### Relationships
  - Scientific Computing is built upon [[High-Performance Computing]] hardware and [[Distributed Computing]] architectures that parallelise numerical workloads across thousands of cores. [[GPU Computing]] and [[CUDA]] programming models have transformed performance in dense linear algebra and molecular dynamics. The field enables [[Physics Simulation]] and [[Fluid Simulation]] used in aerospace, materials science, and climate research, while its demand for [[Computational Resources]] drives supercomputer procurement and cloud HPC investment.
- ### Content
  - Scientific computing emerged from the numerical analysis traditions of the mid-twentieth century, when electronic computers were first applied to problems in ballistics, weather prediction, and nuclear weapon design. The field matured with the development of standardised numerical libraries such as LAPACK and BLAS for dense linear algebra, MPI and OpenMP for parallel programming, and domain-specific frameworks such as OpenFOAM for computational fluid dynamics. These libraries remain the foundation of most scientific simulation codes today.

  - The introduction of GPU computing via CUDA and OpenCL transformed performance characteristics dramatically from the mid-2000s onwards. Problems whose computation maps onto dense matrix operations — including molecular dynamics, finite element analysis, and lattice Boltzmann fluid simulations — achieved speedups of one to two orders of magnitude over CPU-only implementations. This confluence of GPU acceleration and cloud computing has democratised access to supercomputing-class resources, enabling research groups without dedicated HPC clusters to run production-scale simulations using on-demand cloud instances.

  - The boundary between scientific computing and machine learning is increasingly blurred. Physics-informed neural networks embed partial differential equation constraints into neural network training, enabling surrogate models that approximate expensive simulations at a fraction of the runtime cost. Neural operators such as Fourier Neural Operators learn mappings between function spaces and can generalise across mesh resolutions. These hybrid approaches are being deployed in weather forecasting, drug discovery, and materials design, representing a paradigm shift from purely deterministic first-principles computation towards data-augmented probabilistic modelling.
