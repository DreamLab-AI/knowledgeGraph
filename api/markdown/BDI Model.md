public:: true

# BDI Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:688b95e38b68274929b8664c2ad9a2cba60f24d24e6450ecff846215cd6b7de6",
  "@type": "Page",
  "vc:slug": "bdi-model",
  "title": "BDI Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:agent-architecture",
      "vc:label": "Agent Architecture"
    },
    {
      "@id": "urn:visionflow:linked:deliberative-architecture",
      "vc:label": "Deliberative Architecture"
    },
    {
      "@id": "urn:visionflow:linked:hybrid-architecture",
      "vc:label": "Hybrid Architecture"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-system",
      "vc:label": "Multi-Agent System"
    },
    {
      "@id": "urn:visionflow:linked:plan",
      "vc:label": "Plan"
    },
    {
      "@id": "urn:visionflow:linked:practical-reasoning",
      "vc:label": "Practical Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:reactive-architecture",
      "vc:label": "Reactive Architecture"
    },
    {
      "@id": "urn:visionflow:linked:subsumption-architecture",
      "vc:label": "Subsumption Architecture"
    },
    {
      "@id": "urn:visionflow:owl:class:agent",
      "vc:label": "Agent"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomy-level",
      "vc:label": "Autonomy Level"
    },
    {
      "@id": "urn:visionflow:owl:class:goal",
      "vc:label": "Goal"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BDI Model"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bdi-model",
  "@type": "Class",
  "label": "BDI Model",
  "definition": "A deliberative agent architecture grounded in Bratman's theory of practical reasoning, structuring agent cognition around Beliefs (knowledge about the world), Desires (motivational goals), and Intentions (committed plans), with a reasoning cycle of belief revision, deliberation, means-end reasoning, and intention reconsideration.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:goal", "label": "Goal"},
      {"@id": "urn:ngm:class:agent", "label": "Agent"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomy-level", "label": "Autonomy Level"},
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:objective", "label": "Objective"},
      {"@id": "urn:ngm:class:human-in-the-loop", "label": "Human in the Loop"}
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:bdi-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:688b95e38b68274929b8664c2ad9a2cba60f24d24e6450ecff846215cd6b7de6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Agent Architecture]]",
      "resolved": "urn:visionflow:linked:agent-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Deliberative Architecture]]",
      "resolved": "urn:visionflow:linked:deliberative-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hybrid Architecture]]",
      "resolved": "urn:visionflow:linked:hybrid-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multi-Agent System]]",
      "resolved": "urn:visionflow:linked:multi-agent-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Plan]]",
      "resolved": "urn:visionflow:linked:plan",
      "kind": "StubLink"
    },
    {
      "raw": "[[Practical Reasoning]]",
      "resolved": "urn:visionflow:linked:practical-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reactive Architecture]]",
      "resolved": "urn:visionflow:linked:reactive-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Subsumption Architecture]]",
      "resolved": "urn:visionflow:linked:subsumption-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agent]]",
      "resolved": "urn:visionflow:owl:class:agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomy Level]]",
      "resolved": "urn:visionflow:owl:class:autonomy-level",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Goal]]",
      "resolved": "urn:visionflow:owl:class:goal",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A deliberative agent architecture grounded in Bratman's theory of practical reasoning, structuring agent cognition around Beliefs (world knowledge), Desires (motivational goals), and Intentions (committed plans), with a reasoning cycle covering belief revision, deliberation, means-end reasoning, and intention reconsideration.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BdiModel
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - hasPart:: [[Goal]], [[Agent]]
  - enables:: [[Autonomy Level]], [[AI Agent System]]
  - uses:: [[Artificial Intelligence]]
  - relatedTo:: [[Objective]], [[Human in the Loop]]

- ### Content

  ## Definition

  The **BDI Model** is an agent architecture that structures agent reasoning around three fundamental mental attitudes:

  1. **Beliefs (B)**: What the agent *knows* or *believes* about the world
  2. **Desires (D)**: What the agent *wants* to achieve (goals)
  3. **Intentions (I)**: What the agent has *committed* to do (adopted plans)

  ### Philosophical Foundation

  Based on **Michael Bratman's theory of practical reasoning**:
  - **Practical Reasoning**: Reasoning about what to do (vs. theoretical reasoning about what to believe)
  - **Intention**: A special mental state representing commitment to action
  - **Plan**: A specification of how intentions will be achieved

  **Key Insight**: Intentions are *plan-like*, *future-directed*, and *conduct-controlling* mental states that mediate between beliefs/desires and action.

  ## BDI Architecture

  ### High-Level Structure

  ```
                    Perception
                        ↓
                 [Belief Revision]
                        ↓
    ┌──────────────────────────────────────┐
    │          BDI Agent                   │
    │                                      │
    │  ┌─────────────┐                    │
    │  │  Beliefs    │ (Knowledge)        │
    │  │  B          │                    │
    │  └─────────────┘                    │
    │         ↓                            │
    │  ┌─────────────┐                    │
    │  │  Desires    │ (Goals)            │
    │  │  D          │                    │
    │  └─────────────┘                    │
    │         ↓                            │
    │  ┌─────────────┐                    │
    │  │ Intentions  │ (Committed Plans)  │
    │  │  I          │                    │
    │  └─────────────┘                    │
    │         ↓                            │
    │  ┌─────────────┐                    │
    │  │   Plans     │ (Action Library)   │
    │  └─────────────┘                    │
    │         ↓                            │
    └──────────────────────────────────────┘
                        ↓
                    Action
                        ↓
                   Environment
  ```

  ### BDI Reasoning Cycle

  ```python
  class BDIAgent:
    def __init__(self):
        self.beliefs = BeliefBase()
        self.desires = DesireBase()
        self.intentions = IntentionBase()
        self.plan_library = PlanLibrary()

    def reasoning_cycle(self):
        """Main BDI reasoning loop"""
        while self.active:
            # 1. Perceive environment
            percepts = self.perceive()

            # 2. Update beliefs (Belief Revision Function: Brf)
            self.beliefs = self.belief_revision(self.beliefs, percepts)

            # 3. Generate options (Desire generation)
            options = self.generate_options(self.beliefs, self.intentions)

            # 4. Select desires (Deliberation)
            self.desires = self.deliberate(options, self.beliefs, self.intentions)

            # 5. Select intentions (Means-end reasoning)
            self.intentions = self.select_intentions(self.desires, self.beliefs, self.intentions)

            # 6. Execute intentions
            action = self.execute(self.intentions)

            # 7. Perform action in environment
            self.act(action)

            # 8. Intention reconsideration (should I continue?)
            self.reconsider_intentions(self.beliefs)
  ```

  ## Core Components

  ### 1. Beliefs (B)

  **Definition**: Agent's information about the current state of the world.

  **Characteristics**:
  - **Not necessarily true**: Beliefs can be incorrect
  - **Dynamic**: Updated based on perception
  - **Incomplete**: Agent doesn't know everything
  - **Uncertain**: May have probabilistic beliefs

  **Representation**:
  ```python
  class BeliefBase:
    def __init__(self):
        self.facts = set()  # Propositional beliefs
        self.predicates = {}  # First-order beliefs
        self.probabilities = {}  # Uncertain beliefs

    def add_belief(self, belief):
        """Add new belief (knowledge)"""
        self.facts.add(belief)

    def remove_belief(self, belief):
        """Retract belief"""
        self.facts.discard(belief)

    def query(self, pattern):
        """Check if belief matches pattern"""
        return any(belief.matches(pattern) for belief in self.facts)

    def consistent(self):
        """Check for contradictions"""
        return not any(
            belief in self.facts and negate(belief) in self.facts
            for belief in self.facts
        )

  # Example beliefs
  beliefs = BeliefBase()
  beliefs.add_belief(Belief("location(robot, warehouse)"))
  beliefs.add_belief(Belief("battery_level(robot, 0.75)"))
  beliefs.add_belief(Belief("obstacle_at(10, 5)"))
  beliefs.add_belief(ProbabilisticBelief("weather(rainy)", probability=0.7))
  ```

  **Domain Examples**:
  - **AI Agent**: "User is asking about Python", "Previous query was about sorting"
  - **DAO**: "Treasury balance is $5M", "Proposal #42 has 60% approval"
  - **Robot**: "I am at position (5, 10)", "Battery is 75%", "Obstacle detected ahead"
  - **NPC**: "Player is nearby", "My health is 80%", "Quest item is in inventory"
  - **Multi-Agent**: "Agent A is idle", "Task T requires 3 agents", "Deadline is in 10 minutes"

  ### 2. Desires (D)

  **Definition**: Agent's goals or motivational states—what it wants to achieve.

  **Characteristics**:
  - **Multiple desires**: Agent can have many goals
  - **Potentially conflicting**: Desires may be incompatible
  - **Not all achievable**: Some desires might be unrealistic
  - **Prioritized**: Some desires are more important

  **Representation**:
  ```python
  class DesireBase:
    def __init__(self):
        self.desires = []  # List of goals

    def add_desire(self, desire):
        """Add new goal"""
        self.desires.append(desire)
        self.desires.sort(key=lambda d: d.priority, reverse=True)

    def remove_desire(self, desire):
        """Goal achieved or abandoned"""
        self.desires.remove(desire)

    def get_active_desires(self):
        """Return desires to consider"""
        return [d for d in self.desires if d.is_relevant()]

  class Desire:
    def __init__(self, goal, priority):
        self.goal = goal
        self.priority = priority
        self.achievable = True
        self.conflicts = []

    def is_relevant(self):
        """Check if still worth pursuing"""
        return self.achievable and self.priority > 0

  # Example desires
  desires = DesireBase()
  desires.add_desire(Desire(Goal("deliver_package(P1)"), priority=10))
  desires.add_desire(Desire(Goal("recharge_battery"), priority=8))
  desires.add_desire(Desire(Goal("avoid_obstacles"), priority=9))
  ```

  **Domain Examples**:
  - **AI Agent**: "Answer user question accurately", "Minimize response time", "Be helpful and harmless"
  - **DAO**: "Grow treasury", "Increase token value", "Fund public goods"
  - **Robot**: "Navigate to goal location", "Maintain battery level", "Avoid collisions"
  - **NPC**: "Complete assigned quest", "Survive encounter", "Build player relationship"
  - **Multi-Agent**: "Maximize collective utility", "Minimize communication overhead", "Load balance tasks"

  ### 3. Intentions (I)

  **Definition**: Agent's committed plans—goals it has *decided* to pursue and how.

  **Characteristics**:
  - **Commitment**: Agent won't abandon lightly
  - **Plan-like**: Includes action sequences
  - **Hierarchical**: Can have sub-intentions
  - **Limited**: Can't intend everything—resource constraint

  **Representation**:
  ```python
  class IntentionBase:
    def __init__(self):
        self.intentions = []  # Stack of active plans

    def adopt_intention(self, plan):
        """Commit to executing a plan"""
        self.intentions.append(plan)

    def drop_intention(self, plan):
        """Abandon plan"""
        self.intentions.remove(plan)

    def current_intention(self):
        """Get top-priority intention"""
        return self.intentions[0] if self.intentions else None

  class Intention:
    def __init__(self, goal, plan):
        self.goal = goal  # What to achieve
        self.plan = plan  # How to achieve it
        self.status = IntentionStatus.ACTIVE
        self.progress = 0.0

    def next_action(self):
        """Get next step in plan"""
        return self.plan.get_current_step()

    def update_progress(self, beliefs):
        """Check how far along we are"""
        self.progress = self.plan.compute_progress(beliefs)

  # Example intentions
  intentions = IntentionBase()
  intentions.adopt_intention(Intention(
    goal=Goal("deliver_package(P1)"),
    plan=Plan([
        Action("navigate_to", args=["pickup_location"]),
        Action("grasp_package", args=["P1"]),
        Action("navigate_to", args=["delivery_location"]),
        Action("release_package", args=["P1"])
    ])
  ))
  ```

  **Intention vs. Desire**:
  - **Desire**: "I want to go to the store" (motivational state)
  - **Intention**: "I will go to the store by driving via Main St" (commitment + plan)

  ### 4. Plan Library

  **Definition**: A collection of pre-defined plans (recipes) for achieving goals.

  **Structure**:
  ```python
  class PlanLibrary:
    def __init__(self):
        self.plans = {}

    def add_plan(self, plan):
        """Add plan to library"""
        self.plans[plan.goal_pattern] = plan

    def get_applicable_plans(self, goal, beliefs):
        """Find plans that could achieve goal given beliefs"""
        applicable = []
        for plan in self.plans.values():
            if plan.matches_goal(goal) and plan.preconditions_met(beliefs):
                applicable.append(plan)
        return applicable

  class Plan:
    def __init__(self, name, goal_pattern, preconditions, body):
        self.name = name
        self.goal_pattern = goal_pattern  # What goal this achieves
        self.preconditions = preconditions  # When applicable
        self.body = body  # Sequence of actions/sub-goals

    def matches_goal(self, goal):
        """Check if this plan achieves the goal"""
        return self.goal_pattern.unifies_with(goal)

    def preconditions_met(self, beliefs):
        """Check if plan can be executed"""
        return all(beliefs.query(precond) for precond in self.preconditions)

  # Example plan
  plan_library = PlanLibrary()
  plan_library.add_plan(Plan(
    name="deliver_package",
    goal_pattern=Goal("deliver_package(?package)"),
    preconditions=[
        Belief("package_at(?package, ?pickup_loc)"),
        Belief("delivery_address(?package, ?delivery_loc)")
    ],
    body=[
        Action("navigate_to(?pickup_loc)"),
        Action("pick_up(?package)"),
        Action("navigate_to(?delivery_loc)"),
        Action("put_down(?package)")
    ]
  ))
  ```

  ## BDI Reasoning Processes

  ### 1. Belief Revision (Brf)

  **Purpose**: Update beliefs based on new perceptions.

  ```python
  def belief_revision(beliefs, percepts):
    """Update beliefs from new information"""
    new_beliefs = beliefs.copy()

    for percept in percepts:
        if percept.is_addition():
            # Add new belief
            new_beliefs.add_belief(percept.content)
        elif percept.is_removal():
            # Remove contradicted belief
            new_beliefs.remove_belief(percept.content)

    # Ensure consistency
    new_beliefs.resolve_contradictions()

    return new_beliefs
  ```

  **Example**:
  ```python
  # Before perception
  beliefs.query("location(robot, A)") == True

  # Perceive movement
  percepts = [Percept("location(robot, B)")]

  # After belief revision
  beliefs = belief_revision(beliefs, percepts)
  beliefs.query("location(robot, A)") == False
  beliefs.query("location(robot, B)") == True
  ```

  ### 2. Deliberation (Option Selection)

  **Purpose**: Choose which desires to pursue as goals.

  ```python
  def deliberate(options, beliefs, current_intentions):
    """Select desires to pursue"""
    # Filter out unachievable options
    achievable = [opt for opt in options if is_achievable(opt, beliefs)]

    # Filter out conflicting options
    compatible = filter_conflicts(achievable, current_intentions)

    # Select based on priority and resource availability
    selected = select_top_k(compatible, k=3, key=lambda o: o.priority)

    return selected
  ```

  **Deliberation Strategies**:
  - **Bold agents**: Commit quickly, reconsider rarely
  - **Cautious agents**: Deliberate carefully, reconsider frequently
  - **Trade-off**: Deliberation cost vs. opportunity cost of wrong commitment

  ### 3. Means-End Reasoning (Plan Selection)

  **Purpose**: Choose plans to achieve adopted desires.

  ```python
  def select_intentions(desires, beliefs, plan_library):
    """Select plans for desires"""
    new_intentions = []

    for desire in desires:
        # Find applicable plans
        applicable_plans = plan_library.get_applicable_plans(desire.goal, beliefs)

        if applicable_plans:
            # Select best plan (e.g., shortest, most reliable)
            best_plan = choose_best_plan(applicable_plans, beliefs)
            new_intentions.append(Intention(desire.goal, best_plan))
        else:
            # No plan available, can't intend
            print(f"No plan for {desire.goal}")

    return new_intentions

  def choose_best_plan(plans, beliefs):
    """Select optimal plan"""
    scored_plans = []
    for plan in plans:
        score = (
            plan.expected_success(beliefs) * 0.5 +
            (1 / plan.cost()) * 0.3 +
            (1 / plan.length()) * 0.2
        )
        scored_plans.append((plan, score))

    return max(scored_plans, key=lambda x: x[1])[0]
  ```

  ### 4. Intention Reconsideration

  **Purpose**: Decide whether to continue with current intentions.

  ```python
  def reconsider_intentions(beliefs, intentions):
    """Check if intentions still valid"""
    for intention in intentions[:]:
        # Goal already achieved?
        if intention.goal.is_satisfied(beliefs):
            intentions.drop_intention(intention)

        # Goal impossible?
        elif not intention.is_achievable(beliefs):
            intentions.drop_intention(intention)

        # Better opportunity arose?
        elif should_reconsider(beliefs, intention):
            intentions.drop_intention(intention)

    return intentions

  def should_reconsider(beliefs, intention):
    """Determine if worth reconsidering"""
    # Simple strategy: reconsider if world changed significantly
    return beliefs.significant_change() and not intention.near_completion()
  ```

  ## Domain-Specific BDI Implementations

  ### Artificial Intelligence (AI)

  **LLM-Based BDI Agent**:
  ```python
  class LLMBDIAgent:
    def __init__(self, llm_model):
        self.llm = llm_model
        self.beliefs = BeliefBase()
        self.desires = DesireBase()
        self.intentions = IntentionBase()

    def perceive(self, user_input):
        """Extract beliefs from user input"""
        prompt = f"Extract key facts from: '{user_input}'"
        facts = self.llm.generate(prompt)
        return parse_facts(facts)

    def deliberate(self):
        """LLM determines goals"""
        prompt = f"""
        Given beliefs: {self.beliefs}
        What goals should the agent pursue?
        """
        goals = self.llm.generate(prompt)
        return parse_goals(goals)

    def select_plan(self, goal):
        """LLM generates plan"""
        prompt = f"""
        Goal: {goal}
        Beliefs: {self.beliefs}
        Generate step-by-step plan to achieve goal.
        """
        plan = self.llm.generate(prompt)
        return parse_plan(plan)
  ```

  ### Blockchain (BC)

  **DAO as BDI Agent**:
  ```solidity
  contract BDIDAO {
    // Beliefs: On-chain state
    struct Belief {
        bytes32 key;
        bytes value;
        uint256 confidence;  // Probabilistic beliefs
    }
    mapping(bytes32 => Belief) public beliefs;

    // Desires: Proposed goals
    struct Desire {
        string description;
        uint256 priority;
        bool achievable;
    }
    Desire[] public desires;

    // Intentions: Approved actions
    struct Intention {
        uint256 desireId;
        bytes[] plan;  // Encoded action sequence
        IntentionStatus status;
    }
    Intention[] public intentions;

    // Belief revision: Oracle updates
    function updateBelief(bytes32 key, bytes memory value, uint256 confidence)
        external onlyOracle {
        beliefs[key] = Belief(key, value, confidence);
    }

    // Deliberation: Token vote on desires
    function proposeDesire(string memory description, uint256 priority)
        external returns (uint256) {
        desires.push(Desire(description, priority, true));
        return desires.length - 1;
    }

    // Means-end reasoning: Select plan for desire
    function adoptIntention(uint256 desireId, bytes[] memory plan)
        external onlyGovernance {
        intentions.push(Intention(desireId, plan, IntentionStatus.Active));
    }

    // Execution: Execute next action in plan
    function executeIntention(uint256 intentionId) external {
        Intention storage intention = intentions[intentionId];
        require(intention.status == IntentionStatus.Active);

        // Execute next action in plan
        bytes memory action = intention.plan[intention.currentStep];
        (bool success, ) = address(this).call(action);
        require(success, "Action failed");

        intention.currentStep++;
        if (intention.currentStep >= intention.plan.length) {
            intention.status = IntentionStatus.Completed;
        }
    }
  }
  ```

  ### Robotics (RB)

  **Robot BDI Controller**:
  ```python
  class RobotBDIAgent:
    def __init__(self, robot_hardware):
        self.robot = robot_hardware
        self.beliefs = BeliefBase()
        self.desires = DesireBase()
        self.intentions = IntentionBase()
        self.plan_library = load_robot_plans()

    def perceive(self):
        """Sensor readings → Beliefs"""
        sensor_data = self.robot.read_sensors()

        # Update position belief
        self.beliefs.update(Belief("position", sensor_data['gps']))

        # Update obstacle beliefs
        obstacles = sensor_data['lidar'].detect_obstacles()
        for obs in obstacles:
            self.beliefs.add(Belief(f"obstacle_at({obs.x}, {obs.y})"))

        # Update battery belief
        self.beliefs.update(Belief("battery_level", sensor_data['battery']))

    def reasoning_cycle(self):
        # Standard BDI cycle
        self.perceive()
        options = self.generate_options()
        self.desires = self.deliberate(options)
        self.intentions = self.select_intentions(self.desires)
        action = self.execute(self.intentions.current())
        self.robot.perform(action)

  # Example robot plan
  robot_plans = PlanLibrary()
  robot_plans.add(Plan(
    name="navigate_and_avoid",
    goal=Goal("goto(?target)"),
    preconditions=[Belief("battery_level > 0.2")],
    body=[
        Action("plan_path", args=["?target"]),
        While(Belief("not at(?target)"), [
            If(Belief("obstacle_detected"), [
                Action("replan_path")
            ]),
            Action("move_forward")
        ]),
        Action("stop")
    ]
  ))
  ```

  ### Metaverse (MV)

  **NPC with BDI**:
  ```javascript
  class NPCBDIAgent {
    constructor(npc, world) {
        this.npc = npc;
        this.world = world;
        this.beliefs = new BeliefBase();
        this.desires = new DesireBase();
        this.intentions = new IntentionBase();
    }

    perceive() {
        // Update beliefs from game state
        this.beliefs.update('player_nearby',
            this.world.distance(this.npc, this.world.player) < 10);
        this.beliefs.update('health', this.npc.health);
        this.beliefs.update('has_quest', this.npc.quest !== null);
    }

    generateOptions() {
        const options = [];

        // Survival desires
        if (this.beliefs.query('health < 0.3')) {
            options.push(new Desire('seek_healing', priority=10));
        }

        // Social desires
        if (this.beliefs.query('player_nearby') &&
            this.beliefs.query('has_quest')) {
            options.push(new Desire('offer_quest', priority=7));
        }

        // Idle desires
        if (options.length === 0) {
            options.push(new Desire('patrol_area', priority=3));
        }

        return options;
    }

    update(deltaTime) {
        // BDI reasoning cycle every frame
        this.perceive();
        const options = this.generateOptions();
        this.desires = this.deliberate(options);
        this.intentions = this.planFor(this.desires);
        const action = this.intentions.current().nextAction();
        this.execute(action);
    }
  }
  ```

  ### Trusted Collaboration (TC)

  **Multi-Agent BDI Coordination**:
  ```python
  class CollaborativeBDIAgent:
    def __init__(self, agent_id, shared_beliefs):
        self.id = agent_id
        self.private_beliefs = BeliefBase()
        self.shared_beliefs = shared_beliefs  # Shared among team
        self.desires = DesireBase()
        self.intentions = IntentionBase()

    def perceive(self):
        """Update both private and shared beliefs"""
        percepts = self.sense_environment()

        # Private beliefs (local sensor data)
        self.private_beliefs.update(percepts['local'])

        # Shared beliefs (communicate to team)
        for shared_fact in percepts['shareable']:
            self.shared_beliefs.broadcast(shared_fact, source=self.id)

    def deliberate_collectively(self):
        """Coordinate goal selection with other agents"""
        # Propose local goals
        my_proposals = self.propose_goals()

        # Receive others' proposals
        all_proposals = self.shared_beliefs.get_proposals()

        # Negotiate to select collective goals
        agreed_goals = self.negotiate(my_proposals + all_proposals)

        return agreed_goals

    def cooperative_planning(self, shared_goal):
        """Jointly plan to achieve shared goal"""
        # Decompose goal into sub-goals
        sub_goals = shared_goal.decompose()

        # Allocate sub-goals to agents
        my_sub_goals = self.task_allocation(sub_goals, self.shared_beliefs)

        # Plan for my assigned sub-goals
        for sub_goal in my_sub_goals:
            plan = self.plan_library.get_plan(sub_goal)
            self.intentions.adopt(Intention(sub_goal, plan))
  ```

  ## BDI vs. Other Agent Architectures

  | Architecture | Beliefs | Goals | Plans | Strengths | Weaknesses |
  |-------------|---------|-------|-------|-----------|------------|
  | **Reactive** | Implicit | None | None | Fast, robust | No planning, no goals |
  | **Deliberative** | Explicit | Explicit | Explicit | Optimal plans | Slow, brittle |
  | **BDI** | Explicit | Explicit | Explicit | Practical reasoning | Plan library required |
  | **Utility-Based** | Explicit | Utility function | Generated | Flexible | Computationally expensive |
  | **Learning** | Learned | Learned | Learned | Adaptive | Requires training data |

  ## Advantages of BDI

  1. **Intuitive**: Maps to human folk psychology (beliefs, desires, intentions)
  2. **Practical Reasoning**: Balances deliberation and reactivity
  3. **Explainable**: Can explain actions in terms of beliefs, desires, plans
  4. **Commitment**: Intentions provide stability (don't thrash between goals)
  5. **Modularity**: Clear separation of concerns (knowledge, motivation, commitment)

  ## Challenges and Limitations

  ### 1. Plan Library Engineering
  **Problem**: Requires manually specifying plans for all goals.
  **Solutions**:
  - Automated planning (generate plans dynamically)
  - Learning plans from experience
  - Hierarchical task networks (HTN)

  ### 2. Belief Revision Complexity
  **Problem**: Maintaining consistent beliefs is computationally hard.
  **Solutions**:
  - Simplify belief representation
  - Use probabilistic beliefs (Bayesian BDI)
  - Lazy consistency checking

  ### 3. Intention Reconsideration Trade-off
  **Problem**: When to reconsider vs. commit?
  **Solutions**:
  - Fixed reconsideration frequency
  - Event-driven reconsideration
  - Adaptive meta-reasoning

  ### 4. Scalability
  **Problem**: Large belief/desire/intention sets.
  **Solutions**:
  - Focused reasoning (attention mechanisms)
  - Hierarchical decomposition
  - Distributed BDI (multi-agent)

  ## BDI Frameworks and Tools

  ### Jason (AgentSpeak(L))
  ```asl
  /* AgentSpeak(L) syntax */

  // Beliefs
  location(robot, warehouse).
  battery_level(0.75).

  // Goals (desires)
  !deliver_package(p1).

  // Plans (intentions)
  +!deliver_package(P) : location(P, pickup_loc) & delivery_address(P, delivery_loc)
    <- !goto(pickup_loc);
       pickup(P);
       !goto(delivery_loc);
       putdown(P).

  +!goto(Loc) : location(robot, Loc)
    <- .print("Already at location").

  +!goto(Loc) : not location(robot, Loc)
    <- plan_path(Loc);
       move_to(Loc).
  ```

  ### JACK Intelligent Agents
  ```java
  // JACK syntax
  public agent RobotAgent extends Agent {
    #has capability NavigationCapability;
    #has capability DeliveryCapability;

    #posts event DeliverPackage;

    #uses plan DeliverPackagePlan;

    public RobotAgent(String name) {
        super(name);
    }
  }

  public plan DeliverPackagePlan extends Plan {
    #handles event DeliverPackage ev;

    body() {
        Location pickup = ev.pickupLocation;
        Location delivery = ev.deliveryLocation;

        // BDI reasoning embedded in plan
        @subtask(new Navigate(pickup));
        @subtask(new PickUp(ev.packageId));
        @subtask(new Navigate(delivery));
        @subtask(new PutDown(ev.packageId));
    }
  }
  ```

  ## Relationships

  - is-subclass-of:: [[Artificial Intelligence]]
  ### Parent Concepts
  - [[Agent Architecture]] - BDI is a type of agent architecture

  ### Sibling Architectures
  - [[Reactive Architecture]] - Stimulus-response only
  - [[Deliberative Architecture]] - Pure planning
  - [[Hybrid Architecture]] - Combines reactive and deliberative
  - [[Subsumption Architecture]] - Layered reactive architecture

  #### Future Directions
  1. **BDI + Deep Learning**: Learned beliefs, desires, plans
  2. **Explainable AI**: BDI as interpretable alternative to black-box ML
  3. **Norm-Aware BDI**: Incorporate social norms and obligations
  4. **Probabilistic BDI**: Bayesian beliefs, uncertain desires
  5. **BDI for LLMs**: Structure LLM reasoning with BDI framework

  ## Tags

  #bdi-model #agent-architecture #beliefs #desires #intentions #practical-reasoning #agent-oriented-programming #deliberation #means-end-reasoning #plan-library #jason #jack #intelligent-agents #cross-domain

  ---

  **See Also**: [[Agent]], [[Goal]], [[Plan]], [[Agent Architecture]], [[Practical Reasoning]], [[Multi-Agent System]]

  #### Related Concepts
  - [[Agent]] (DT-1008) - BDI is an agent design pattern
  - [[Goal]] (DT-1010) - Desires are goals
  - [[Autonomy Level]] (DT-1009) - BDI enables higher autonomy
  - [[Plan]] - Central to BDI intentions
  - [[Practical Reasoning]] - Philosophical foundation

  ## Best Practices

  ### BDI Agent Design
  1. **Keep Beliefs Simple**: Avoid complex knowledge representation
  2. **Modular Plan Library**: Organize plans hierarchically
  3. **Clear Priorities**: Rank desires to guide deliberation
  4. **Intention Reconsideration**: Balance commitment and reactivity
  5. **Explainability**: Log beliefs, desires, intentions for debugging

  ### Common Patterns
  1. **Reactive Layer**: Handle urgent situations without deliberation
  2. **Goal Stack**: Maintain hierarchy of goals/sub-goals
  3. **Meta-BDI**: Use BDI to reason about BDI reasoning itself
  4. **Cooperative BDI**: Shared beliefs/desires in multi-agent systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
