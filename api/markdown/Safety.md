id:: safety-ontology

- ### OntologyBlock
  id:: Safety
  - ontology:: true
  - public-access:: true
  - term-id:: MV-0070
  - preferred-term:: Safety
  - source-domain:: rb
  - status:: draft
  - definition:: The condition whereby an AI system operates without causing unacceptable risk of physical injury, harm to human health or well-being, damage to property, or harm to the environment, achieved through hazard identification, risk assessment, and implementation of appropriate safeguards.

### Relationships
- is-subclass-of:: [[Metaverse]]
- requires:: [[Hazard Analysis]]
- requires:: [[Risk Assessment (AI-0079)]]

### Primary Sources
1. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
   - Section 2.1: "Safe"
   - "AI systems do not pose unreasonable safety risks"
   - Source: National Institute of Standards and Technology

2. **EU AI Act** (Regulation 2024/1689), June 2024
   - Article 9: "Risk management system" (safety focus)
   - Annex III: High-risk AI systems (safety-critical applications)
   - Source: European Parliament and Council

3. **ISO 12100:2010** - Safety of machinery — General principles for design — Risk assessment and risk reduction
   - Fundamental safety principles applicable to AI systems
   - Source: ISO/TC 199

### Supporting Standards
4. **ISO/IEC 23894:2023** - Guidance on risk management
   - Section 6: "AI-specific safety considerations"

5. **Amodei, D., et al. (2016)** - "Concrete Problems in AI Safety"
   - Foundational paper identifying key safety challenges
   - OpenAI research

6. **ISO 26262:2018** - Road vehicles — Functional safety
   - Automotive safety standard applicable to AI

## Key Characteristics

### Dimensions of Safety
#### 1. Physical Safety

**Definition**: Prevention of bodily harm or injury

**Examples**:
- Autonomous vehicle collision avoidance
- Surgical robot preventing tissue damage
- Industrial robot not striking workers

**Measures**:
- Injury severity classifications (ISO 26262)
- Safe state achievement
- Emergency stop effectiveness

#### 2. Operational Safety

**Definition**: Safe system behaviour during normal operation

**Examples**:
- Medical AI not recommending harmful treatments
- Content moderation preventing harmful content
- Financial AI not causing market instability

**Measures**:
- Error rate on safety-critical tasks
- False negative rate (missed hazards)
- Time to safe state

#### 3. Societal Safety

**Definition**: Prevention of large-scale societal harms

**Examples**:
- AI weapons avoiding civilian casualties
- Social media AI preventing radicalization
- Misinformation detection systems

**Measures**:
- Population-level impact assessments
- Bias and fairness metrics
- Long-term consequence evaluation

## Safety Principles

### 1. Prevention over Mitigation
**Principle**: Eliminate hazards at source rather than managing consequences

**Example**: Design autonomous vehicle to avoid situations requiring emergency braking, not just improve braking

### 2. Fail-Safe Design
**Principle**: System enters safe state upon failure

**Example**: Robot stops moving if sensor fails, rather than continuing with corrupted data

### 3. Defence in Depth
**Principle**: Multiple independent safety barriers

**Example**: Autonomous vehicle has:
- Perception redundancy (camera + lidar + radar)
- Planning verification
- Emergency override
- Mechanical brakes

### 4. Human Oversight
**Principle**: Meaningful human control over safety-critical functions

**Example**: Lethal autonomous weapons require human authorization to engage

## Safety Hazards in AI Systems

### Specification Hazards
1. **Reward Misspecification**
   - System optimises wrong objective
   - **Example**: Cleaning robot breaks vase to clean faster
   - **Mitigation**: Careful reward engineering, constraints

2. **Side Effects**
   - Unintended consequences of achieving goal
   - **Example**: Robot takes shortest path, trampling garden
   - **Mitigation**: Impact regularization, explicit constraints

3. **Distributional Shift**
   - Unsafe behaviour in out-of-distribution scenarios
   - **Example**: Autonomous vehicle trained in clear weather fails in snow
   - **Mitigation**: Robust training, OOD detection

### Robustness Hazards
4. **Adversarial Examples**
   - Intentional perturbations cause failures
   - **Example**: Sticker on stop sign causes misclassification
   - **Mitigation**: Adversarial training, input validation

5. **Data Poisoning**
   - Compromised training data causes unsafe behaviour
   - **Example**: Poisoned medical training data leads to harmful diagnoses
   - **Mitigation**: Data provenance, anomaly detection

### Assurance Hazards
6. **Unsafe Exploration**
   - Learning process causes harm
   - **Example**: Reinforcement learning robot crashes during training
   - **Mitigation**: Simulation-based learning, safe exploration algorithms

7. **Negative Side Effects of Updates**
   - Model updates introduce new safety issues
   - **Example**: Software update degrades autonomous vehicle performance
   - **Mitigation**: Thorough testing, gradual rollout, version control

## Relationships

- **Component Of**: AI Trustworthiness (AI-0061)
- **Related To**: Robustness (AI-0068), Reliability (AI-0069), Security (AI-0071)
- **Requires**: Risk Assessment (AI-0079), Hazard Analysis
- **Supports**: Human Oversight (AI-0041), Accountability (AI-0068)

## Safety Assessment Methods

### Hazard Analysis
1. **Fault Tree Analysis (FTA)**
   - Top-down deductive analysis
   - Identify combinations of faults leading to hazard
   - Quantitative risk calculation

2. **Failure Mode and Effects Analysis (FMEA)**
   - Bottom-up inductive analysis
   - Identify potential failure modes
   - Assess severity, likelihood, detectability

3. **Hazard and Operability Study (HAZOP)**
   - Systematic examination of process
   - "What if" scenarios
   - Team-based analysis

### AI-Specific Safety Analysis
1. **Safety Cases**
   - Structured argument for safety
   - Evidence-based claims
   - Assurance case notation (GSN, CAE)

2. **Scenario-Based Testing**
   - Comprehensive scenario libraries
   - Edge case identification
   - Corner case testing

3. **Formal Verification**
   - Mathematical proof of safety properties
   - Model checking
   - Theorem proving

## Safety Engineering Approaches

### Safe-by-Design
**V-Model for AI Safety**
```
Requirements → Architecture → Design → Implementation
     ↓              ↓            ↓           ↓
Validation ← Integration ← Verification ← Unit Testing
```

**Safety Requirements Specification**
- Functional safety requirements
- Performance constraints
- Environmental limits
- Failure behaviour specifications

### Safety Monitoring
**Runtime Monitoring**
```python
class SafetyMonitor:
    def monitor(self, ai_system, environment):
        if self.detect_hazard(ai_system, environment):
            return self.safe_action()
        else:
            return ai_system.action()

    def detect_hazard(self, system, env):
        # Sensor validation
        # OOD detection
        # Constraint violation checking
        # Prediction confidence assessment
        pass
```

**Watchdog Systems**
- Independent safety monitor
- Overrides unsafe actions
- Triggers safe state entry

### Human-in-the-Loop Safety
**Levels of Automation** (SAE J3016 for vehicles, generalized):
- **Level 0**: No automation (human control)
- **Level 1**: Assistance (human monitor)
- **Level 2**: Partial automation (human ready to intervene)
- **Level 3**: Conditional automation (human on request)
- **Level 4**: High automation (human optional)
- **Level 5**: Full automation (no human needed)

**Safety Principle**: Higher automation requires higher safety assurance

## Domain-Specific Safety

### Autonomous Vehicles
**Standards**: ISO 26262, ISO/PAS 21448 (SOTIF), UL 4600

**Safety Requirements**:
- Collision avoidance
- Pedestrian protection
- Safe state (minimal risk condition)
- Redundant systems (ASIL D)

**Metrics**:
- Miles between disengagements
- Critical event rate
- Time to collision (TTC)

### Medical AI
**Standards**: IEC 62304, ISO 14971 (medical device risk management)

**Safety Requirements**:
- Patient harm prevention
- False negative minimization (life-threatening conditions)
- Graceful degradation
- Clinician override

**Metrics**:
- Sensitivity for critical diagnoses
- Adverse event rate
- Diagnostic agreement with gold standard

### Industrial Robotics
**Standards**: ISO 10218 (robot safety), ISO/TS 15066 (collaborative robots)

**Safety Requirements**:
- Collision detection
- Force/torque limits
- Safety zones (presence detection)
- Emergency stop (SIL 3/PLe)

**Metrics**:
- Stopping time and distance
- Force limits (power and force limiting)

### Aviation
**Standards**: DO-178C (software), DO-254 (hardware)

**Safety Requirements**:
- Catastrophic failure < 10⁻⁹ per flight hour
- Formal verification for critical functions
- Diverse redundancy

## Safety Testing and Validation

### Simulation-Based Testing
1. **Virtual Environments**
   - Physics simulation
   - Scenario generation
   - Monte Carlo testing

2. **Hardware-in-the-Loop (HIL)**
   - Real components + simulated environment
   - Accelerated testing
   - Edge case exploration

3. **Digital Twins**
   - Virtual replica of physical system
   - Continuous validation
   - Predictive safety analysis

### Real-World Testing
1. **Controlled Testing**
   - Proving grounds
   - Supervised operation
   - Incremental autonomy

2. **Pilot Programmes**
   - Limited deployment
   - Enhanced monitoring
   - Rapid iteration

3. **Operational Design Domain (ODD) Validation**
   - Test within specified conditions
   - Document limitations
   - ODD boundary testing

## Challenges and Research Frontiers

### Technical Challenges
1. **Verification of Learning Systems**
   - Cannot exhaustively test
   - Emergent behaviours
   - Continuous learning safety

2. **Long-Tail Events**
   - Rare but critical scenarios
   - Insufficient training data
   - Black swan events

3. **Multi-Agent Safety**
   - Interaction complexity
   - Emergence
   - Coordination failures

### Ethical and Social Challenges
1. **Acceptable Risk Levels**
   - Society decides risk tolerance
   - Context-dependent
   - Cultural variation

2. **Trolley Problems**
   - Unavoidable harm scenarios
   - Ethical decision-making
   - Value alignment

3. **Liability and Responsibility**
   - Who is responsible for AI safety failures?
   - Insurance frameworks
   - Legal evolution

## Best Practices

1. **Safety-First Culture**
   - Organizational commitment
   - Report and learn from incidents
   - Reward safety consciousness

2. **Rigorous Safety Analysis**
   - Comprehensive hazard identification
   - Quantitative risk assessment
   - Independent safety review

3. **Layered Safety Mechanisms**
   - Prevention, detection, mitigation
   - Redundancy and diversity
   - Fail-safe defaults

4. **Transparent Limitations**
   - Document ODD (Operational Design Domain)
   - Communicate risks
   - User training

5. **Continuous Monitoring**
   - Real-time safety metrics
   - Anomaly detection
   - Incident reporting

6. **Human Oversight for High-Risk**
   - Meaningful human control
   - Override capability
   - Graduated autonomy

7. **Update with Care**
   - Thorough validation of updates
   - Rollback capability
   - Phased deployment

## Regulatory Requirements

### EU AI Act
**High-Risk AI Systems** (Annex III):
- Safety components (e.g., autonomous vehicles, medical devices)
- Critical infrastructure management
- Education and employment (indirect safety impact)

**Safety Requirements**:
- Risk management system (Article 9)
- Data governance (Article 10)
- Technical documentation (Article 11)
- Human oversight (Article 14)

### Sector-Specific Regulations
**Medical**: FDA premarket approval, CE marking (EU MDR)
**Automotive**: Type approval (UNECE regulations)
**Aviation**: Airworthiness certification (FAA, EASA)

## Related Terms

- **AI Trustworthiness** (AI-0061)
- **Robustness** (AI-0068)
- **Reliability** (AI-0069)
- **Security** (AI-0071)
- **Risk Management** (AI-0078)
- **Risk Assessment** (AI-0079)
- **Hazard Analysis**

## Version History

- **1.0** (2025-10-27): Initial definition based on NIST AI RMF, EU AI Act, and safety engineering standards

---

*This definition emphasises safety as a fundamental requirement for AI systems, especially in high-risk applications, requiring systematic hazard analysis and multi-layered safeguards.*
	- maturity:: draft
	- owl:class:: mv:Safety
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: safety-relationships
		- is-subclass-of:: [[Metaverse]]
		- requires:: [[Risk Assessment (AI-0079)]], [[Hazard Analysis]]
