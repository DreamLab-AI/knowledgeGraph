- ### OntologyBlock
  id:: 0410-technicalrobustnesssafety-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0410
    - preferred-term:: Technical Robustness and Safety
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Technical Robustness and Safety is a trustworthiness dimension ensuring AI systems perform reliably under varied conditions, resist adversarial attacks, implement fallback mechanisms for graceful degradation, and maintain safety throughout their operational lifecycle. This dimension encompasses four core components: resilience to attack (protecting against adversarial examples designed to cause misclassification, data poisoning attempts to corrupt training data, model extraction attacks stealing intellectual property, and implementing comprehensive cybersecurity measures), fallback plan and safety mechanisms (providing fallback procedures when primary systems fail, enabling graceful degradation rather than catastrophic failure, implementing emergency stop capabilities for immediate deactivation, and establishing safe default behaviors), accuracy and reliability (meeting appropriate accuracy thresholds relative to deployment context, demonstrating reproducibility of results across trials, quantifying and communicating uncertainty in predictions, and handling distribution shift when deployment data differs from training data), and general safety (conducting comprehensive risk assessments identifying potential hazards, implementing proportionate safety controls, maintaining continuous safety monitoring detecting performance degradation or anomalies, and establishing incident response procedures). The EU AI Act Article 15 mandates high-risk systems achieve appropriate accuracy levels with quantitative performance metrics validated through independent testing, demonstrate robustness to perturbations and adversarial inputs, and implement cybersecurity protections against data poisoning, model evasion, and confidentiality attacks. The 2024-2025 period witnessed technical robustness transition from voluntary best practice to regulatory requirement, with red teaming emerging as the dominant safety evaluation methodology involving external experts simulating realistic attack scenarios to identify vulnerabilities before deployment, and regulatory enforcement creating existential compliance pressures with penalties reaching EUR 15 million or 3% of global annual turnover for violations.
    - maturity:: mature
    - source:: [[EU AI Act Article 15]], [[EU HLEG AI]], [[NIST AI RMF]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:TechnicalRobustnessSafety
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0410-technicalrobustnesssafety-relationships

  - #### OWL Axioms
    id:: 0410-technicalrobustnesssafety-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :TechnicalRobustnessSafety))
(SubClassOf :TechnicalRobustnessSafety :TrustworthinessDimension)
(SubClassOf :TechnicalRobustnessSafety :SafetyRequirement)

;; Four core components
(Declaration (Class :ResilienceToAttack))
(Declaration (Class :FallbackPlanSafety))
(Declaration (Class :AccuracyReliability))
(Declaration (Class :GeneralSafety))

(SubClassOf :ResilienceToAttack :TechnicalRobustnessSafety)
(SubClassOf :FallbackPlanSafety :TechnicalRobustnessSafety)
(SubClassOf :AccuracyReliability :TechnicalRobustnessSafety)
(SubClassOf :GeneralSafety :TechnicalRobustnessSafety)

;; Resilience requirements
(SubClassOf :ResilienceToAttack
  (ObjectSomeValuesFrom :protectsAgainst :AdversarialAttack))
(SubClassOf :ResilienceToAttack
  (ObjectSomeValuesFrom :implements :CybersecurityMeasures))
(SubClassOf :ResilienceToAttack
  (ObjectSomeValuesFrom :prevents :DataPoisoning))

;; Safety mechanisms
(SubClassOf :FallbackPlanSafety
  (ObjectSomeValuesFrom :has :FallbackPlan))
(SubClassOf :FallbackPlanSafety
  (ObjectSomeValuesFrom :enables :GracefulDegradation))
(SubClassOf :FallbackPlanSafety
  (ObjectSomeValuesFrom :has :EmergencyStop))

;; Accuracy requirements
(SubClassOf :AccuracyReliability
  (DataSomeValuesFrom :meetsAccuracyThreshold :xsd:decimal))
(SubClassOf :AccuracyReliability
  (ObjectSomeValuesFrom :demonstrates :Reproducibility))
(SubClassOf :AccuracyReliability
  (ObjectSomeValuesFrom :handles :Uncertainty))

;; General safety
(SubClassOf :GeneralSafety
  (ObjectSomeValuesFrom :undergoes :RiskAssessment))
(SubClassOf :GeneralSafety
  (ObjectSomeValuesFrom :implements :SafetyControls))
(SubClassOf :GeneralSafety
  (ObjectSomeValuesFrom :maintains :SafetyMonitoring))

;; High-risk systems require comprehensive robustness
(SubClassOf :HighRiskAISystem
  (ObjectAllValuesFrom :demonstrates :TechnicalRobustnessSafety))

(DisjointClasses :TechnicalRobustnessSafety :UntestedSystem)
(DisjointClasses :TechnicalRobustnessSafety :UnverifiedSafety)
      ```

- ## About 0410 Technicalrobustnesssafety
  id:: 0410-technicalrobustnesssafety-about

  - 
  -
    - ### Implementation Patterns
  - ### Robustness Engineering
    ```python
    class RobustAISystem:
        """AI system with comprehensive robustness measures."""
  -
        def __init__(self, model: nn.Module, config: RobustnessConfig):
            self.model = model
            self.config = config
  -
            # Adversarial defenses
            self.adversarial_detector = AdversarialDetector(
                methods=['statistical_test', 'reconstruction_error']
            )
  -
            # Input validation
            self.input_validator = InputValidator(
                schema=config.input_schema,
                constraints=config.constraints
            )
  -
            # Fallback mechanisms
            self.fallback_model = self.load_fallback_model()
            self.safe_defaults = config.safe_defaults
  -
            # Monitoring
            self.performance_monitor = PerformanceMonitor()
            self.safety_monitor = SafetyMonitor()
  -
            # Emergency mechanisms
            self.emergency_stop_enabled = False
            self.setup_emergency_procedures()
  -
        def predict(self, input_data: Any) -> Prediction:
            """
            Robust prediction with comprehensive safety checks.
  -
            Args:
                input_data: Input for prediction
  -
            Returns:
                Prediction with confidence and safety metadata
            """
            try:
                # 1. Input validation
                if not self.input_validator.validate(input_data):
                    raise InvalidInputError(
                        "Input failed validation",
                        violations=self.input_validator.get_violations(input_data)
                    )
  -
                # 2. Adversarial detection
                if self.adversarial_detector.is_adversarial(input_data):
                    self.safety_monitor.log_incident(
                        type='adversarial_input_detected',
                        input_hash=hash(str(input_data)),
                        timestamp=datetime.now()
                    )
                    # Escalate to human review
                    return self.escalate_to_human(
                        input_data=input_data,
                        reason='adversarial_input'
                    )
  -
                # 3. Normal inference
                prediction = self.model(input_data)
  -
                # 4. Uncertainty quantification
                uncertainty = self.quantify_uncertainty(prediction)
  -
                # 5. Confidence-based routing
                if uncertainty > self.config.uncertainty_threshold:
                    # Use ensemble or fallback
                    prediction = self.ensemble_predict(input_data)
                    uncertainty = self.quantify_uncertainty(prediction)
  -
                # 6. Safety verification
                if not self.verify_safe_output(prediction):
                    self.safety_monitor.log_incident(
                        type='unsafe_output',
                        prediction=prediction,
                        timestamp=datetime.now()
                    )
                    # Use safe default
                    prediction = self.safe_defaults.get(
                        input_type=type(input_data)
                    )
  -
                # 7. Performance monitoring
                self.performance_monitor.record(
                    input=input_data,
                    prediction=prediction,
                    uncertainty=uncertainty,
                    latency=self.get_latency()
                )
  -
                return Prediction(
                    value=prediction,
                    confidence=1 - uncertainty,
                    metadata={
                        'uncertainty': uncertainty,
                        'method': 'primary_model',
                        'safety_verified': True
                    }
                )
  -
            except Exception as e:
                # Graceful degradation
                return self.handle_failure(input_data, e)
  -
        def handle_failure(self,
                          input_data: Any,
                          error: Exception) -> Prediction:
            """
            Implement fallback strategy on failure.
  -
            Fallback hierarchy:
            1. Simplified model
            2. Cached similar prediction
            3. Safe default
            4. Human escalation
            """
            self.safety_monitor.log_failure(
                error=error,
                input_hash=hash(str(input_data)),
                timestamp=datetime.now()
            )
  -
            # Try fallback model
            try:
                fallback_prediction = self.fallback_model(input_data)
                return Prediction(
                    value=fallback_prediction,
                    confidence=0.6,  # Lower confidence for fallback
                    metadata={
                        'method': 'fallback_model',
                        'original_error': str(error)
                    }
                )
            except:
                pass
  -
            # Try cached prediction
            similar_cached = self.find_similar_cached_prediction(input_data)
            if similar_cached:
                return Prediction(
                    value=similar_cached.value,
                    confidence=0.4,  # Even lower confidence
                    metadata={
                        'method': 'cached_similar',
                        'similarity': similar_cached.similarity
                    }
                )
  -
            # Use safe default if available
            if self.safe_defaults.has(type(input_data)):
                return Prediction(
                    value=self.safe_defaults.get(type(input_data)),
                    confidence=0.0,
                    metadata={'method': 'safe_default'}
                )
  -
            # Escalate to human
            return self.escalate_to_human(
                input_data=input_data,
                reason='all_fallbacks_failed'
            )
  -
        def adversarial_training(self,
                               training_data: Dataset,
                               attack_methods: List[str]) -> None:
            """
            Enhance model robustness through adversarial training.
  -
            Args:
                training_data: Original training data
                attack_methods: Adversarial attack methods to defend against
            """
            adversarial_examples = []
  -
            for attack_method in attack_methods:
                attacker = self.get_attacker(attack_method)
  -
                for batch in training_data:
                    # Generate adversarial examples
                    adv_batch = attacker.generate(
                        model=self.model,
                        inputs=batch.inputs,
                        targets=batch.targets
                    )
                    adversarial_examples.append(adv_batch)
  -
            # Combine original and adversarial data
            combined_dataset = training_data + Dataset(adversarial_examples)
  -
            # Retrain model
            self.model.train(combined_dataset)
  -
            # Validate robustness
            robustness_score = self.evaluate_robustness(
                test_data=self.test_dataset,
                attack_methods=attack_methods
            )
  -
            self.config.adversarial_robustness = robustness_score
  -
  -
    class SafetyMonitor:
        """Continuous safety monitoring for AI systems."""
  -
        def __init__(self, config: SafetyConfig):
            self.config = config
            self.incidents = []
            self.performance_history = []
            self.alert_thresholds = config.alert_thresholds
  -
        def monitor_performance(self,
                              predictions: List[Prediction],
                              ground_truth: Optional[List[Any]] = None) -> SafetyReport:
            """
            Monitor system performance for safety degradation.
  -
            Tracks:
            - Accuracy over time
            - Uncertainty trends
            - Failure rates
            - Safety constraint violations
            """
            current_performance = self.calculate_performance_metrics(
                predictions=predictions,
                ground_truth=ground_truth
            )
  -
            self.performance_history.append({
                'timestamp': datetime.now(),
                'metrics': current_performance
            })
  -
            # Detect performance degradation
            if self.is_degrading(current_performance):
                self.trigger_alert(
                    type='performance_degradation',
                    severity='high',
                    details=current_performance
                )
  -
            # Detect drift
            drift_score = self.detect_drift(predictions)
            if drift_score > self.alert_thresholds['drift']:
                self.trigger_alert(
                    type='distribution_drift',
                    severity='medium',
                    drift_score=drift_score
                )
  -
            # Safety constraint verification
            violations = self.check_safety_constraints(predictions)
            if violations:
                self.trigger_alert(
                    type='safety_violation',
                    severity='critical',
                    violations=violations
                )
  -
            return SafetyReport(
                performance=current_performance,
                drift_score=drift_score,
                safety_violations=violations,
                recommendation=self.generate_recommendation(
                    current_performance, drift_score, violations
                )
            )
    ```
  -
  - ### 2024-2025: Red Teaming and Regulatory Mandates
    id:: technical-robustness-recent-developments

    The period from 2024 through 2025 witnessed technical robustness and safety transition from voluntary best practices to mandated regulatory requirements, with **red teaming** emerging as the dominant methodology for proactive AI safety evaluation.

    #### EU AI Act Robustness Requirements: Article 15 and Comprehensive Technical Obligations

    The EU AI Act, which entered into force on **1st August 2024**, established the world's first comprehensive legal framework mandating **technical robustness and safety** for AI systems, transforming these from voluntary engineering principles into legally enforceable obligations with substantial penalties:

    **High-Risk AI Systems (Article 15):**
    - **Accuracy requirements**: High-risk AI systems must achieve "appropriate levels of accuracy" defined relative to the system's intended purpose, with quantitative performance thresholds documented and validated through independent testing. For systems affecting fundamental rights (employment, credit scoring, law enforcement), accuracy standards must account for worst-case performance across demographic subgroups to prevent disparate impact

    - **Robustness requirements**: Systems must maintain consistent performance across foreseeable **perturbations, errors, or inconsistencies** in inputs, demonstrating resilience to:
      - **Distribution shift**: Performance degradation when deployed data differs from training data (e.g., demographic shifts, seasonal variations, novel edge cases)
      - **Adversarial examples**: Intentionally crafted inputs designed to cause misclassification (e.g., subtly altered images that fool computer vision systems, prompt injections that bypass LLM safeguards)
      - **Data quality degradation**: Missing features, noisy sensor data, corrupted inputs

    - **Cybersecurity requirements**: AI systems must implement "appropriate technical and organisational measures" for **resilience against attacks**:
      - **Data poisoning protection**: Defences against training data manipulation (e.g., adversaries injecting malicious samples during model training to create backdoors or degrade performance)
      - **Model poisoning protection**: Detection of compromised pre-trained components or malicious model weights
      - **Model evasion protection**: Safeguards against adversarial inputs designed to cause errors during inference
      - **Confidentiality attack protection**: Defences against model inversion (extracting training data), membership inference (determining if specific data was used in training), and model extraction (stealing model functionality)
      - **Model flaw exploitation protection**: Addressing inherent vulnerabilities in model architectures

    **General-Purpose AI Models with Systemic Risk (Article 51 & 53):**

    For **GPAI models** posing **systemic risks**—defined as models with high-impact capabilities (>10²⁵ floating-point operations for training) or cumulative effects exceeding risk thresholds—providers must implement rigorous safety protocols that became enforceable on **2nd August 2025**:

    - **Model evaluations**: Conduct **state-of-the-art evaluation protocols** assessing capabilities, limitations, and risks across:
      - **Dangerous capabilities**: Potential for misuse in cybersecurity attacks, creation of chemical/biological/radiological/nuclear (CBRN) weapons, manipulation/deception at scale
      - **Systemic risks**: Amplification of biases, generation of harmful content, facilitation of criminal activities, threats to democratic processes
      - **Emergent capabilities**: Unforeseen abilities arising during scaling that pose novel risks

    - **Adversarial testing**: Perform **adversarial testing** (red teaming) by external experts simulating realistic attack scenarios:
      - **Jailbreak attempts**: Efforts to bypass safety guardrails through prompt engineering
      - **Capability elicitation**: Testing for dangerous knowledge or skills the model may possess
      - **Multi-step attack chains**: Complex exploitation scenarios combining multiple vulnerabilities

    - **Serious incident reporting**: Track, document, and **report serious incidents** to national authorities within specified timelines (typically 15 days), including:
      - **Malfunctions causing significant harm**: Physical injuries, psychological harm, fundamental rights violations
      - **Security breaches**: Data exfiltration, unauthorised access, model theft
      - **Systemic failures**: Cascading failures affecting multiple users or systems

    - **Cybersecurity protections**: Implement comprehensive **physical and cybersecurity** protecting model weights, training data, and inference infrastructure against theft, tampering, or unauthorised access

    **Code of Practice and Implementation Guidance:**

    In **July 2025**, the European Commission introduced **guidelines on GPAI obligations** and released the **Code of Practice**—a collaborative framework developed with industry stakeholders (OpenAI, Google DeepMind, Anthropic, Mistral AI, Hugging Face) providing concrete implementation pathways:

    - **Risk assessment templates**: Standardised methodologies for evaluating systemic risks
    - **Evaluation protocols**: Technical specifications for model testing (benchmark suites, red teaming procedures, capability assessment rubrics)
    - **Documentation requirements**: Detailed technical documentation standards (model cards, datasheets, risk assessments)
    - **Incident response procedures**: Playbooks for detecting, investigating, and reporting serious incidents

    The Code of Practice aims to harmonise compliance approaches whilst allowing flexibility for different model architectures and use cases, reducing regulatory uncertainty for providers.

    **Enforcement Timeline and Penalties:**

    The AI Act's phased implementation creates escalating obligations:
    - **February 2, 2025**: Prohibitions on unacceptable-risk AI systems (social scoring, real-time biometric identification in public spaces without court authorisation) became enforceable
    - **August 2, 2025**: GPAI model obligations became fully enforceable, including adversarial testing and serious incident reporting for systemic-risk models
    - **August 2, 2026**: High-risk AI system requirements (including Article 15 robustness provisions) become fully enforceable
    - **August 2, 2027**: Full AI Act compliance required for all in-scope systems

    **Penalties for non-compliance** scale with violation severity:
    - **€35 million or 7% of global annual turnover** (whichever is higher): Prohibited AI practices, non-compliance with data governance requirements
    - **€15 million or 3% of global annual turnover**: Violations of high-risk AI obligations (including Article 15 robustness requirements)
    - **€7.5 million or 1.5% of global annual turnover**: Supplying incorrect or incomplete information to authorities

    These penalty structures—comparable to GDPR fines—established technical robustness as a **fiduciary responsibility** with existential consequences for non-compliant organisations.

    #### Red Teaming as Industry Standard
    Red teaming became a cornerstone of safety practices, with OpenAI implementing external red teaming since DALL-E 2 in 2022, now treating continuous red teaming as core to its development cycle. Anthropic launched a **Safeguards Research Team** in 2025 focused specifically on developing jailbreak-resistant training methods and scalable red teaming tools. The 2023 U.S. Executive Order on AI Safety emphasised red teaming as a critical evaluation method, catalysing widespread industry adoption.

    #### Public and Multilateral Initiatives
    In late 2024, Humane Intelligence partnered with Singapore's IMDA to conduct the **world's first multilingual and multicultural AI safety red teaming exercise** focused on Asia-Pacific, developing portable methodology for evaluating LLMs for context-specific harms across languages and cultures. Japan established the **Japan AI Safety Institute (AISI)** in 2024, publishing the *Guide to Red Teaming Methodology on AI Safety* with detailed protocols for evaluating models in high-risk domains including healthcare and finance.

    #### Tools and Automation
    Red teaming tools proliferated: **Giskard** enabled testing for bias, robustness, and explainability in LLMs; **Adversarial Robustness Toolbox**, **PyRIT**, and **garak** provided automated security assessment capabilities. The transition from human red teaming to automated evaluations became essential for scalable and consistent AI safety assessments, with OWASP's Gen AI Security Project launching research initiatives in September 2024.

    #### Methodological Evolution
    A December 2024 CSET workshop outlined challenges in AI testing and recommended prioritising product safety specifications with realistic threat models over abstract social biases, and system-level safety over model-level robustness. This pragmatic shift recognised that theoretical robustness guarantees remained elusive, whilst practical adversarial testing could identify concrete vulnerabilities before deployment.

    By late 2025, organisations recognised that red teaming compliance with emerging regulations not only satisfied legal requirements but proactively safeguarded users and reputations—transforming safety from cost centre to competitive advantage.
