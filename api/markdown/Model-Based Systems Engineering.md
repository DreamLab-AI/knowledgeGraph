A systems engineering methodology that replaces document-centric specification with a coherent, machine-interpretable system model as the authoritative source of requirements, architecture, behaviour, and verification information across the whole lifecycle. Formalised by INCOSE and realised through languages such as SysML, it enables early analysis, simulation, and consistency checking of complex systems, keeping every discipline working against a single shared model rather than divergent documents.

### Semantic Classification

### Content

## Definition

**Model-Based Systems Engineering (MBSE)** is the formalised application of modelling to support system requirements, design, analysis, verification and validation, beginning in the conceptual phase and continuing throughout development and later lifecycle stages. INCOSE's original 2007 definition remains the canonical one. Where traditional [[Systems Engineering]] coordinates work through a web of documents — specifications, interface control documents, trade-study reports — MBSE makes a single, semantically rich system model the authoritative source of truth from which those artefacts are generated.

The system model captures four interlocking pillars: requirements and their traceability, structure (system decomposition and interfaces), behaviour (state machines, activities, interactions), and parametrics (equations and constraints binding design variables). Because the model is machine-interpretable, tools can check consistency automatically, propagate a change in one view to every affected view, and execute behavioural models to explore the design long before hardware exists — a direct complement to [[Constraint Based Design]] and to discipline-level [[Simulation Software]].

MBSE is standard practice in aerospace, defence, automotive and rail, where system complexity and certification burden make document-centric approaches fragile. Aerospace guidance such as ARP4754A increasingly assumes model-based development, and NASA's JPL, Airbus, and major defence primes have made MBSE the default for new programmes. Downstream, a maintained system model is the natural seed for a [[Digital Twin]], carrying validated architecture and behaviour into operations.

## Current Landscape

- **SysML v2 final adoption (July 2025)**: on 21 July 2025 the OMG approved SysML v2.0 for *final* adoption, together with the Kernel Modeling Language (KerML) 1.0 that gives it a formal semantic foundation and the SysML v2 API & Services 1.0 for tool interoperability — the culmination of an effort begun with the 2017 RFP and the June 2023 beta. SysML v1 (an OMG UML profile) still dominates deployed practice and is expected to remain in use for several years during migration.
- **Languages and standards**: SysML v2 brings a native metamodel with both graphical and textual syntax and a standardised API; related standards include UAF for enterprise architecture and OSLC for tool interoperability. Commercial and open-source SysML v2 tools began appearing through 2025.
- **Tooling**: Dassault Systèmes Cameo (MagicDraw), IBM Rhapsody, Sparx Enterprise Architect, and the open-source Eclipse Capella (with its Arcadia method) are the principal platforms; SysML v2 reference implementations and Jupyter-based tooling are maturing rapidly.
- **Integration trend**: the frontier is closing the loop between the descriptive system model and analytical models — co-simulation via FMI, parametric solvers, and requirements tools — so that a change to an architecture element re-triggers affected analyses automatically.
- **Adoption evidence**: INCOSE's Systems Engineering Vision 2035 positions MBSE as the default mode of systems engineering; surveys consistently report reduced integration defects and rework on programmes that adopt it, at the cost of up-front investment in modelling skills and tool infrastructure.
- **UK context**: MBSE underpins major UK programmes in rail (Network Rail), defence (Ministry of Defence acquisition guidance) and nuclear, and is taught in dedicated MSc programmes at Cranfield, Loughborough and UCL.

  **Sources**:

- https://www.omg.org/news/releases/pr2025/07-21-25.htm
- https://www.omg.org/sysml/

