# Canonical Format Guide
## Step-by-Step Specification for Disruptive Technologies Ontology

**Version**: 1.0.0
**Last Updated**: 2025-10-29
**Audience**: Ontology Contributors, AI Agents, Knowledge Engineers

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [Required Fields](#required-fields)
3. [File Structure](#file-structure)
4. [WikiLink Conventions](#wikilink-conventions)
5. [OWL Axiom Patterns](#owl-axiom-patterns)
6. [Domain-Specific Guidelines](#domain-specific-guidelines)
7. [Validation Checklist](#validation-checklist)
8. [Examples](#examples)

---

## Quick Reference

### Minimal Valid Concept File

```markdown
- ### OntologyBlock
  id:: example-concept-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: 12345
    - preferred-term:: Example Concept
    - source-domain:: metaverse
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: A concise formal definition of the concept.
    - maturity:: mature
    - source:: [[Standard Name]]

  - **Semantic Classification**
    - owl:class:: mv:ExampleConcept
    - owl:physicality:: VirtualEntity
    - owl:role:: Object

  - #### Relationships
    id:: example-concept-relationships
    - is-part-of:: [[Parent Concept]]

  - #### OWL Axioms
    id:: example-concept-owl-axioms
    collapsed:: true
    - ```clojure
      Declaration(Class(mv:ExampleConcept))
      SubClassOf(mv:ExampleConcept mv:VirtualEntity)
      SubClassOf(mv:ExampleConcept mv:Object)
      ```

- ## About Example Concept
  id:: example-concept-about

  - A detailed human-readable description of the concept,
    including context, importance, and real-world applications.
```

---

## Required Fields

### 1. Identification Block

| Field | Type | Values | Required | Description |
|-------|------|--------|----------|-------------|
| `ontology::` | Boolean | `true` | ✅ Yes | Logseq query tag (MUST be first property) |
| `term-id::` | Integer | Any positive integer | ✅ Yes | Unique numeric identifier |
| `preferred-term::` | String | Concept name | ✅ Yes | Human-readable canonical name |
| `source-domain::` | Enum | `metaverse` \| `blockchain` \| `ai-grounded` \| `robotics` | ✅ Yes | Primary ontology domain |
| `status::` | Enum | `complete` \| `in-progress` \| `draft` \| `legacy` | ✅ Yes | Development status |
| `version::` | Semver | `X.Y.Z` | ✅ Yes | Version number |
| `last-updated::` | Date | `YYYY-MM-DD` | ✅ Yes | Last modification date |

**Example**:
```markdown
- **Identification**
  - ontology:: true
  - term-id:: 4567
  - preferred-term:: Virtual World
  - source-domain:: metaverse
  - status:: complete
  - version:: 1.2.0
  - last-updated:: 2025-10-28
```

### 2. Definition Block

| Field | Type | Values | Required | Description |
|-------|------|--------|----------|-------------|
| `definition::` | String | 1-3 sentences | ✅ Yes | Concise formal definition |
| `maturity::` | Enum | `mature` \| `emerging` \| `experimental` \| `deprecated` | ✅ Yes | Technology maturity level |
| `source::` | WikiLinks | `[[Standard1]], [[Standard2]]` | ⚠️ Recommended | Authoritative sources |
| `authority-score::` | Float | `0.0` to `1.0` | ❌ Optional | Confidence in definition |

**Example**:
```markdown
- **Definition**
  - definition:: A persistent, immersive 3D environment where users interact through avatars, supporting real-time communication and shared experiences.
  - maturity:: mature
  - source:: [[ISO/IEC 23005]], [[IEEE 2888.1]], [[W3C Immersive Web]]
  - authority-score:: 0.95
```

### 3. Semantic Classification Block

| Field | Type | Values | Required | Description |
|-------|------|--------|----------|-------------|
| `owl:class::` | IRI | `namespace:ClassName` | ✅ Yes | OWL class IRI |
| `owl:physicality::` | IRI | `PhysicalEntity` \| `VirtualEntity` \| `HybridEntity` | ✅ Yes | Physical/virtual classification |
| `owl:role::` | IRI | `Agent` \| `Object` \| `Process` | ✅ Yes | Functional role classification |
| `owl:inferred-class::` | IRI | `namespace:InferredClass` | ❌ Optional | Inferred superclass from reasoner |
| `belongsToDomain::` | WikiLinks | `[[Domain1]], [[Domain2]]` | ⚠️ Recommended | Thematic domains |
| `implementedInLayer::` | WikiLink | `[[Layer Name]]` | ❌ Optional | Architecture layer |

**Example**:
```markdown
- **Semantic Classification**
  - owl:class:: mv:VirtualWorld
  - owl:physicality:: VirtualEntity
  - owl:role:: Object
  - owl:inferred-class:: mv:ImmersiveEnvironment
  - belongsToDomain:: [[Metaverse Core]], [[Spatial Computing]]
  - implementedInLayer:: [[Application Layer]]
```

### 4. Relationships Block

All relationship fields use **WikiLink lists**. Multiple values separated by commas.

| Field | Cardinality | Description | Example |
|-------|-------------|-------------|---------|
| `has-part::` | 0..* | Compositional parts | `[[Avatar]], [[Virtual Object]]` |
| `is-part-of::` | 0..* | Parent concept(s) | `[[Metaverse Ecosystem]]` |
| `requires::` | 0..* | Dependencies | `[[3D Rendering Engine]], [[Network Protocol]]` |
| `depends-on::` | 0..* | External dependencies | `[[Cloud Infrastructure]]` |
| `enables::` | 0..* | Enabled capabilities | `[[Social Interaction]], [[Commerce]]` |
| `related-to::` | 0..* | Related concepts | `[[Augmented Reality]], [[Digital Twin]]` |
| `bridges-to::` | 0..* | Cross-domain links | `[[Smart Contract]] (domain: blockchain)` |

**Example**:
```markdown
- #### Relationships
  id:: virtual-world-relationships
  - has-part:: [[Avatar]], [[Virtual Object]], [[Spatial Audio]]
  - is-part-of:: [[Metaverse Ecosystem]]
  - requires:: [[3D Rendering Engine]], [[Physics Engine]], [[Network Protocol]]
  - enables:: [[Social VR]], [[Virtual Commerce]], [[Remote Collaboration]]
  - related-to:: [[Digital Twin]], [[Augmented Reality]]
  - bridges-to:: [[Blockchain Wallet]] (domain: blockchain)
```

### 5. OWL Axioms Block

**Format**: Clojure code fence with OWL Functional Syntax

**Required Axioms**:
1. ✅ Class declaration
2. ✅ At least one `SubClassOf` axiom
3. ⚠️ Relationship axioms (if relationships exist)

**Example**:
```markdown
- #### OWL Axioms
  id:: virtual-world-owl-axioms
  collapsed:: true
  - ```clojure
    Declaration(Class(mv:VirtualWorld))

    # Classification
    SubClassOf(mv:VirtualWorld mv:VirtualEntity)
    SubClassOf(mv:VirtualWorld mv:Object)
    SubClassOf(mv:VirtualWorld mv:ImmersiveEnvironment)

    # Compositional relationships
    SubClassOf(mv:VirtualWorld
      ObjectSomeValuesFrom(mv:hasPart mv:Avatar)
    )
    SubClassOf(mv:VirtualWorld
      ObjectSomeValuesFrom(mv:hasPart mv:VirtualObject)
    )

    # Requirements
    SubClassOf(mv:VirtualWorld
      ObjectSomeValuesFrom(dt:requires mv:3DRenderingEngine)
    )

    # Cross-domain bridge
    SubClassOf(mv:VirtualWorld
      ObjectSomeValuesFrom(dt:bridgesToDomain bc:BlockchainWallet)
    )

    # Cardinality constraint
    SubClassOf(mv:VirtualWorld
      ObjectMinCardinality(1 mv:hasPart mv:Avatar)
    )
    ```
```

---

## File Structure

### Complete Template with All Sections

```markdown
- ### OntologyBlock
  id:: [concept-slug]-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: [numeric-id]
    - preferred-term:: [Full Concept Name]
    - source-domain:: [metaverse|blockchain|ai-grounded|robotics]
    - status:: [complete|in-progress|draft|legacy]
    - version:: [X.Y.Z]
    - last-updated:: [YYYY-MM-DD]

  - **Definition**
    - definition:: [Concise single-sentence formal definition]
    - maturity:: [mature|emerging|experimental|deprecated]
    - source:: [[Standard1]], [[Standard2]], [[Standard3]]
    - authority-score:: [0.0-1.0]

  - **Semantic Classification**
    - owl:class:: [namespace:ClassName]
    - owl:physicality:: [PhysicalEntity|VirtualEntity|HybridEntity]
    - owl:role:: [Agent|Object|Process]
    - owl:inferred-class:: [namespace:InferredClass]
    - belongsToDomain:: [[PrimaryDomain]], [[SecondaryDomain]]
    - implementedInLayer:: [[LayerName]]

  - #### Relationships
    id:: [concept-slug]-relationships
    - has-part:: [[Component1]], [[Component2]]
    - is-part-of:: [[ParentConcept]]
    - requires:: [[Dependency1]], [[Dependency2]]
    - depends-on:: [[ExternalDependency]]
    - enables:: [[EnabledCapability1]], [[EnabledCapability2]]
    - related-to:: [[RelatedConcept1]], [[RelatedConcept2]]
    - bridges-to:: [[CrossDomainConcept]] (domain: [target-domain])

  - #### OWL Axioms
    id:: [concept-slug]-owl-axioms
    collapsed:: true
    - ```clojure
      Declaration(Class([namespace]:[ClassName]))

      # Classification
      SubClassOf([namespace]:[ClassName] [namespace]:[ParentClass])
      SubClassOf([namespace]:[ClassName] [namespace]:[Physicality])
      SubClassOf([namespace]:[ClassName] [namespace]:[Role])

      # Domain/Layer classification
      SubClassOf([namespace]:[ClassName]
        ObjectSomeValuesFrom([namespace]:belongsToDomain [namespace]:[Domain])
      )

      # Compositional relationships
      SubClassOf([namespace]:[ClassName]
        ObjectSomeValuesFrom([namespace]:hasPart [namespace]:[Component])
      )

      # Requirements
      SubClassOf([namespace]:[ClassName]
        ObjectSomeValuesFrom(dt:requires [namespace]:[Requirement])
      )

      # Cross-domain bridges
      SubClassOf([namespace]:[ClassName]
        ObjectSomeValuesFrom(dt:bridgesToDomain [target-ns]:[TargetClass])
      )

      # Cardinality constraints
      SubClassOf([namespace]:[ClassName]
        ObjectMinCardinality(N [namespace]:property [namespace]:Range)
      )
      ```

- ## About [Concept Name]
  id:: [concept-slug]-about

  - [Rich human-readable description paragraph 1]
  -
  - [Rich human-readable description paragraph 2]
  -
  - ### Key Characteristics
    id:: [concept-slug]-characteristics
    - [Characteristic 1 with explanation]
    - [Characteristic 2 with explanation]
    - [Characteristic 3 with explanation]
  -
  - ### Technical Components
    id:: [concept-slug]-components
    - [[Component1]] - Description of component 1
    - [[Component2]] - Description of component 2
    - [[Component3]] - Description of component 3
  -
  - ### Use Cases
    id:: [concept-slug]-use-cases
    - **Use Case 1**: Detailed description of use case 1
    - **Use Case 2**: Detailed description of use case 2
    - **Use Case 3**: Detailed description of use case 3
  -
  - ### Standards & References
    id:: [concept-slug]-standards
    - [[Standard Name]] - Description and link
    - Academic Citation (Author, Year) - Full citation
    - Industry Specification - Description
  -
  - ### Related Concepts
    id:: [concept-slug]-related
    - [[RelatedConcept1]] - Type of relationship
    - [[RelatedConcept2]] - Type of relationship
    - [[RelatedConcept3]] - Type of relationship
```

---

## WikiLink Conventions

### 1. Naming Conventions

| Rule | Example | Notes |
|------|---------|-------|
| **Title Case** | `[[Virtual World]]` | Use title case for all concept names |
| **No Abbreviations** | `[[Augmented Reality]]` not `[[AR]]` | Spell out full terms |
| **Singular Form** | `[[Avatar]]` not `[[Avatars]]` | Use singular unless plural is standard |
| **Hyphenation** | `[[Non-Player Character]]` | Hyphenate compound adjectives |

### 2. Domain Prefixes (Optional but Recommended)

| Domain | Prefix | Example | Notes |
|--------|--------|---------|-------|
| **AI** | `AI-0xxx-` | `[[AI-0123-neural-network.md]]` | 4-digit numeric ID |
| **Blockchain** | `BC-0xxx-` | `[[BC-0456-smart-contract.md]]` | 4-digit numeric ID |
| **Robotics** | `RB-xxxx-` | `[[RB-7890-actuator.md]]` | 4-digit numeric ID |
| **Metaverse** | None | `[[Avatar.md]]` | No prefix (default domain) |

### 3. Cross-Domain Bridge Syntax

**Format**: `bridges-to:: [[TargetConcept]] (domain: target-domain-name)`

**Examples**:
```markdown
- bridges-to:: [[Smart Contract]] (domain: blockchain)
- bridges-to:: [[Reinforcement Learning]] (domain: ai-grounded)
- bridges-to:: [[Robotic Arm]] (domain: robotics)
- bridges-to:: [[Digital Twin]] (domain: metaverse)
```

### 4. Forbidden Patterns

❌ **DON'T DO THIS**:
```markdown
# Bad: Plain text instead of WikiLink
- requires:: 3D Rendering Engine

# Bad: Broken/non-existent link
- has-part:: [[NonExistentConcept123]]

# Bad: URL instead of WikiLink
- source:: https://example.com/standard

# Bad: Inconsistent casing
- related-to:: [[virtual world]], [[AVATAR]]
```

✅ **DO THIS INSTEAD**:
```markdown
# Good: WikiLink
- requires:: [[3D Rendering Engine]]

# Good: Existing concept (create stub if needed)
- has-part:: [[Component Name]]  # Create Component-Name.md stub

# Good: WikiLink to standard page
- source:: [[ISO/IEC 23005]]  # Create standard reference page

# Good: Consistent title case
- related-to:: [[Virtual World]], [[Avatar]]
```

---

## OWL Axiom Patterns

### Pattern 1: Basic Class Declaration

```clojure
Declaration(Class(mv:ConceptName))
SubClassOf(mv:ConceptName mv:ParentClass)
```

### Pattern 2: Multiple Inheritance

```clojure
Declaration(Class(mv:DigitalTwin))
SubClassOf(mv:DigitalTwin mv:VirtualEntity)
SubClassOf(mv:DigitalTwin mv:Object)
SubClassOf(mv:DigitalTwin mv:DataDrivenSystem)
```

### Pattern 3: Existential Restriction (Some)

```clojure
# "Every Avatar has SOME AvatarBody"
SubClassOf(mv:Avatar
  ObjectSomeValuesFrom(mv:hasPart mv:AvatarBody)
)
```

### Pattern 4: Universal Restriction (Only)

```clojure
# "Virtual Worlds only contain VirtualEntities"
SubClassOf(mv:VirtualWorld
  ObjectAllValuesFrom(mv:contains mv:VirtualEntity)
)
```

### Pattern 5: Cardinality Constraints

```clojure
# "Every Avatar has at least 1 body"
SubClassOf(mv:Avatar
  ObjectMinCardinality(1 mv:hasPart mv:AvatarBody)
)

# "Every Avatar has at most 1 body"
SubClassOf(mv:Avatar
  ObjectMaxCardinality(1 mv:hasPart mv:AvatarBody)
)

# "Every Avatar has exactly 1 body"
SubClassOf(mv:Avatar
  ObjectExactCardinality(1 mv:hasPart mv:AvatarBody)
)
```

### Pattern 6: Cross-Domain Bridges

```clojure
# "Some Avatars implement AI systems"
SubClassOf(mv:Avatar
  ObjectSomeValuesFrom(dt:implements aigo:AISystem)
)

# "Some Virtual Worlds are secured by Blockchains"
SubClassOf(mv:VirtualWorld
  ObjectSomeValuesFrom(dt:securedBy bc:Blockchain)
)
```

### Pattern 7: Disjointness

```clojure
# "Physical and Virtual entities are disjoint"
DisjointClasses(mv:PhysicalEntity mv:VirtualEntity)
```

### Pattern 8: Equivalence

```clojure
# "VR Environment is equivalent to Immersive Virtual World"
EquivalentClasses(mv:VREnvironment mv:ImmersiveVirtualWorld)
```

---

## Domain-Specific Guidelines

### Metaverse Domain (mv:)

**Namespace**: `<http://www.semanticweb.org/metaverse#>`

**Common Superclasses**:
- `mv:VirtualEntity`
- `mv:ImmersiveEnvironment`
- `mv:SpatialComputing`

**Typical Relationships**:
- `mv:hasPart` (compositional)
- `mv:interactsWith` (interaction)
- `mv:renderedBy` (rendering)

**Example File**: `Avatar.md`, `Virtual-World.md`

### AI-Grounded Domain (aigo:)

**Namespace**: `<http://www.semanticweb.org/ai-grounded#>`

**Prefix Convention**: `AI-0xxx-concept-name.md`

**Common Superclasses**:
- `aigo:AISystem`
- `aigo:MachineLearningModel`
- `aigo:KnowledgeRepresentation`

**Typical Relationships**:
- `aigo:trainedOn` (training data)
- `aigo:evaluatedBy` (evaluation metrics)
- `aigo:governedBy` (governance policies)

**Example File**: `AI-0123-neural-network.md`

### Blockchain Domain (bc:)

**Namespace**: `<http://www.semanticweb.org/blockchain#>`

**Prefix Convention**: `BC-0xxx-concept-name.md`

**Common Superclasses**:
- `bc:DistributedLedger`
- `bc:ConsensusProtocol`
- `bc:DigitalAsset`

**Typical Relationships**:
- `bc:secures` (security relationship)
- `bc:validates` (validation)
- `bc:executes` (smart contract execution)

**Example File**: `BC-0456-smart-contract.md`

### Robotics Domain (rb:)

**Namespace**: `<http://www.semanticweb.org/robotics#>`

**Prefix Convention**: `RB-xxxx-concept-name.md`

**Common Superclasses**:
- `rb:RoboticSystem`
- `rb:HardwareComponent`
- `rb:ControlAlgorithm`

**Typical Relationships**:
- `rb:controls` (control relationship)
- `rb:senses` (sensor relationship)
- `rb:actuates` (actuation)

**Example File**: `RB-7890-actuator.md`

---

## Validation Checklist

Before committing a concept file, verify:

### ✅ Structure
- [ ] File starts with `- ### OntologyBlock`
- [ ] OntologyBlock has `collapsed:: true`
- [ ] About section starts with `- ## About [Name]`
- [ ] All subsections have unique `id::`
- [ ] Proper indentation (2 spaces per level)

### ✅ Required Fields
- [ ] `ontology:: true` (first property)
- [ ] `term-id::` (unique number)
- [ ] `preferred-term::` (concept name)
- [ ] `source-domain::` (one of 4 domains)
- [ ] `status::` (complete/in-progress/draft/legacy)
- [ ] `version::` (semver format)
- [ ] `last-updated::` (YYYY-MM-DD)
- [ ] `definition::` (concise formal definition)
- [ ] `maturity::` (mature/emerging/experimental/deprecated)
- [ ] `owl:class::` (OWL IRI)
- [ ] `owl:physicality::` (Physical/Virtual/Hybrid)
- [ ] `owl:role::` (Agent/Object/Process)

### ✅ WikiLinks
- [ ] All concept references use `[[WikiLink]]` format
- [ ] WikiLinks use exact title case
- [ ] All linked concepts exist (or stub created)
- [ ] Cross-domain bridges use `(domain: xxx)` annotation

### ✅ OWL Axioms
- [ ] Code fence uses ` ```clojure `
- [ ] Contains `Declaration(Class(...))`
- [ ] Contains at least one `SubClassOf(...)`
- [ ] Parentheses balanced
- [ ] Namespaces consistent (mv:, aigo:, bc:, rb:, dt:)
- [ ] No syntax errors (validate with extraction tool)

### ✅ About Section
- [ ] Rich description (100+ words recommended)
- [ ] At least 2-3 subsections
- [ ] Examples or use cases included
- [ ] Standards/references cited
- [ ] Related concepts listed

---

## Examples

### Example 1: Metaverse Concept (Avatar)

**File**: `logseq/pages/Avatar.md`

```markdown
- ### OntologyBlock
  id:: avatar-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: 1001
    - preferred-term:: Avatar
    - source-domain:: metaverse
    - status:: complete
    - version:: 1.3.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A digital representation of a user in a virtual environment, serving as their embodied presence and interaction medium in immersive spaces.
    - maturity:: mature
    - source:: [[ISO/IEC 23005-6]], [[IEEE 2888.1]], [[W3C WebXR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: mv:Avatar
    - owl:physicality:: VirtualEntity
    - owl:role:: Agent
    - owl:inferred-class:: mv:DigitalRepresentation
    - belongsToDomain:: [[Metaverse Core]], [[Human-Computer Interaction]]
    - implementedInLayer:: [[Application Layer]]

  - #### Relationships
    id:: avatar-relationships
    - has-part:: [[Avatar Body]], [[Avatar Clothing]], [[Avatar Accessories]]
    - is-part-of:: [[Virtual World]], [[Metaverse Ecosystem]]
    - requires:: [[Digital Identity]], [[3D Rendering Engine]], [[Animation System]]
    - enables:: [[Social VR]], [[Virtual Presence]], [[Gestural Communication]]
    - related-to:: [[Virtual World]], [[Digital Identity]], [[User Profile]]
    - bridges-to:: [[Reinforcement Learning]] (domain: ai-grounded)
    - bridges-to:: [[NFT]] (domain: blockchain)

  - #### OWL Axioms
    id:: avatar-owl-axioms
    collapsed:: true
    - ```clojure
      Declaration(Class(mv:Avatar))

      # Classification
      SubClassOf(mv:Avatar mv:VirtualEntity)
      SubClassOf(mv:Avatar mv:Agent)
      SubClassOf(mv:Avatar mv:DigitalRepresentation)

      # Compositional structure
      SubClassOf(mv:Avatar
        ObjectSomeValuesFrom(mv:hasPart mv:AvatarBody)
      )
      SubClassOf(mv:Avatar
        ObjectMinCardinality(1 mv:hasPart mv:AvatarBody)
      )

      # Requirements
      SubClassOf(mv:Avatar
        ObjectSomeValuesFrom(dt:requires mv:DigitalIdentity)
      )
      SubClassOf(mv:Avatar
        ObjectSomeValuesFrom(dt:requires mv:3DRenderingEngine)
      )

      # Cross-domain bridges
      SubClassOf(mv:Avatar
        ObjectSomeValuesFrom(dt:implements aigo:ReinforcementLearning)
      )
      SubClassOf(mv:Avatar
        ObjectSomeValuesFrom(dt:bridgesToDomain bc:NFT)
      )
      ```

- ## About Avatar
  id:: avatar-about

  - An **avatar** is the digital embodiment of a user in virtual environments,
    serving as their visual and interactive representation. Avatars enable users
    to navigate 3D spaces, communicate with others through gestures and voice,
    and manipulate virtual objects.
  -
  - Avatars range from photorealistic humanoid forms to stylized or fantastical
    representations, offering users the freedom to express identity beyond
    physical constraints. Modern avatars incorporate AI-driven animations,
    real-time facial tracking, and procedural generation.
  -
  - ### Key Characteristics
    id:: avatar-characteristics
    - **Customizable Appearance**: Body shape, clothing, accessories, textures
    - **Animated Movement**: Walking, gestures, facial expressions, lip-sync
    - **Identity Representation**: Visual expression of user's digital identity
    - **Cross-Platform Portability**: Standards like VRM enable avatar reuse
    - **AI-Enhanced Behavior**: Autonomous animations, emotion detection
  -
  - ### Technical Components
    id:: avatar-components
    - [[Avatar Body]] - 3D mesh defining the avatar's physical form
    - [[Avatar Clothing]] - Wearable items and fashion accessories
    - [[Animation System]] - Skeleton rigging and motion control
    - [[Texture Mapping]] - Surface appearance and materials
    - [[Inverse Kinematics]] - Realistic limb positioning
  -
  - ### Use Cases
    id:: avatar-use-cases
    - **Social VR Platforms**: VRChat, Rec Room, Horizon Worlds
    - **Virtual Meetings**: Spatial, Engage, Microsoft Mesh
    - **Gaming**: MMORPGs, metaverse games, virtual worlds
    - **Digital Fashion**: Virtual try-on, NFT wearables, fashion shows
    - **Training Simulations**: Medical training, military simulations
  -
  - ### Standards & References
    id:: avatar-standards
    - [[ISO/IEC 23005-6]] - Avatar characteristics and interoperability
    - [[IEEE 2888.1]] - Specification for digital representation of avatar
    - [[W3C WebXR Device API]] - Immersive web experiences
    - [[VRM Specification]] - 3D humanoid avatar format for VR
    - Bailenson, J. (2018). *Experience on Demand: What Virtual Reality Is,
      How It Works, and What It Can Do*. W. W. Norton & Company.
  -
  - ### Related Concepts
    id:: avatar-related
    - [[Virtual World]] - Environment where avatars exist
    - [[Digital Identity]] - Identity layer linked to avatar
    - [[Non-Player Character]] - AI-driven avatars
    - [[Hologram]] - Physical projection of avatar representation
    - [[Digital Twin]] - Real-world entity mirrored in virtual space
```

### Example 2: AI Concept (Neural Network)

**File**: `logseq/pages/AI-0123-neural-network.md`

```markdown
- ### OntologyBlock
  id:: neural-network-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: 123
    - preferred-term:: Neural Network
    - source-domain:: ai-grounded
    - status:: complete
    - version:: 2.1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: A computational model inspired by biological neural networks, consisting of interconnected nodes (neurons) organized in layers that process information through weighted connections and activation functions.
    - maturity:: mature
    - source:: [[ISO/IEC 22989]], [[IEEE 2830]], [[Deep Learning (Goodfellow et al.)]]
    - authority-score:: 0.98

  - **Semantic Classification**
    - owl:class:: aigo:NeuralNetwork
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:MachineLearningModel
    - belongsToDomain:: [[Machine Learning]], [[Deep Learning]]
    - implementedInLayer:: [[Model Layer]]

  - #### Relationships
    id:: neural-network-relationships
    - has-part:: [[Input Layer]], [[Hidden Layer]], [[Output Layer]], [[Activation Function]]
    - is-part-of:: [[Deep Learning System]]
    - requires:: [[Training Dataset]], [[Optimization Algorithm]], [[Loss Function]]
    - enables:: [[Image Recognition]], [[Natural Language Processing]], [[Predictive Analytics]]
    - related-to:: [[Convolutional Neural Network]], [[Recurrent Neural Network]], [[Transformer]]
    - bridges-to:: [[Robotic Control]] (domain: robotics)
    - bridges-to:: [[Avatar Intelligence]] (domain: metaverse)

  - #### OWL Axioms
    id:: neural-network-owl-axioms
    collapsed:: true
    - ```clojure
      Declaration(Class(aigo:NeuralNetwork))

      # Classification
      SubClassOf(aigo:NeuralNetwork aigo:MachineLearningModel)
      SubClassOf(aigo:NeuralNetwork aigo:VirtualEntity)
      SubClassOf(aigo:NeuralNetwork aigo:Process)

      # Compositional structure
      SubClassOf(aigo:NeuralNetwork
        ObjectSomeValuesFrom(aigo:hasPart aigo:InputLayer)
      )
      SubClassOf(aigo:NeuralNetwork
        ObjectSomeValuesFrom(aigo:hasPart aigo:HiddenLayer)
      )
      SubClassOf(aigo:NeuralNetwork
        ObjectSomeValuesFrom(aigo:hasPart aigo:OutputLayer)
      )
      SubClassOf(aigo:NeuralNetwork
        ObjectMinCardinality(1 aigo:hasPart aigo:InputLayer)
      )
      SubClassOf(aigo:NeuralNetwork
        ObjectMinCardinality(1 aigo:hasPart aigo:OutputLayer)
      )

      # Training requirements
      SubClassOf(aigo:NeuralNetwork
        ObjectSomeValuesFrom(aigo:trainedOn aigo:TrainingDataset)
      )
      SubClassOf(aigo:NeuralNetwork
        ObjectSomeValuesFrom(dt:requires aigo:OptimizationAlgorithm)
      )

      # Cross-domain bridges
      SubClassOf(aigo:NeuralNetwork
        ObjectSomeValuesFrom(dt:bridgesToDomain rb:RoboticControl)
      )
      ```

- ## About Neural Network
  id:: neural-network-about

  - **Neural networks** are the foundational architecture of modern deep learning,
    enabling machines to learn complex patterns from data. Inspired by the human
    brain's structure, they consist of layers of interconnected computational units
    (neurons) that transform inputs into outputs through learned weighted connections.
  -
  - Neural networks have revolutionized AI applications, from computer vision and
    speech recognition to natural language understanding and game playing. Their
    ability to automatically learn hierarchical representations makes them suitable
    for tasks where manual feature engineering is impractical.
  -
  - ### Key Characteristics
    id:: neural-network-characteristics
    - **Layered Architecture**: Input layer, hidden layers, output layer
    - **Weighted Connections**: Learnable parameters adjusted during training
    - **Non-linear Activation**: Functions like ReLU, sigmoid, tanh
    - **Backpropagation**: Gradient-based learning algorithm
    - **Universal Approximation**: Ability to approximate any continuous function
  -
  - ### Technical Components
    id:: neural-network-components
    - [[Input Layer]] - Receives raw input data (features)
    - [[Hidden Layer]] - Intermediate processing layers (1+ layers = "deep")
    - [[Output Layer]] - Produces final predictions or classifications
    - [[Activation Function]] - Non-linear transformations (ReLU, sigmoid, etc.)
    - [[Loss Function]] - Measures prediction error for optimization
    - [[Optimizer]] - Algorithm for updating weights (SGD, Adam, etc.)
  -
  - ### Use Cases
    id:: neural-network-use-cases
    - **Computer Vision**: Image classification, object detection, segmentation
    - **NLP**: Language translation, sentiment analysis, text generation
    - **Speech Processing**: Voice recognition, synthesis, speaker identification
    - **Autonomous Systems**: Self-driving cars, robotics control
    - **Healthcare**: Disease diagnosis, drug discovery, medical imaging
  -
  - ### Standards & References
    id:: neural-network-standards
    - [[ISO/IEC 22989]] - AI concepts and terminology
    - [[IEEE 2830]] - Technical framework for AI model management
    - [[ONNX]] - Open Neural Network Exchange format
    - Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*.
      MIT Press.
    - LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. *Nature*,
      521(7553), 436-444.
  -
  - ### Related Concepts
    id:: neural-network-related
    - [[Convolutional Neural Network]] - Specialized for spatial data (images)
    - [[Recurrent Neural Network]] - Specialized for sequential data
    - [[Transformer]] - Attention-based architecture for NLP
    - [[Generative Adversarial Network]] - Generative modeling architecture
    - [[Deep Learning]] - Parent field encompassing neural network research
```

---

## Conclusion

This canonical format ensures:

✅ **Consistency** across 1,262 concept files
✅ **Machine-readability** via OWL axioms
✅ **Human-readability** via About sections
✅ **Cross-domain integration** via bridges
✅ **Quality validation** via required fields
✅ **Git-friendly** text-based format

**Next Steps**:
1. Review [LOGSEQ-OWL-SYSTEM.md](LOGSEQ-OWL-SYSTEM.md) for workflow
2. Use validation checklist before commits
3. See [task.md](../task.md) for refactoring roadmap

---

**Questions or Issues?**
File an issue at: [GitHub Issues](https://github.com/yourusername/Metaverse-Ontology/issues)
