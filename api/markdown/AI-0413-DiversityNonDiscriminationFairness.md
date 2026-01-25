- ### OntologyBlock
  id:: 0413-diversitynondiscriminationfairness-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0413
    - preferred-term:: Diversity, Non-Discrimination, and Fairness
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Diversity Non-Discrimination and Fairness is a trustworthiness dimension ensuring AI systems avoid unfair bias, ensure equitable treatment across demographic groups, implement accessibility and universal design, and enable inclusive stakeholder participation throughout development and deployment. This dimension encompasses three core components: unfair bias avoidance (identifying bias affecting protected characteristics including sex, racial or ethnic origin, religion, disability, age, and sexual orientation per EU Charter Article 21, implementing bias mitigation through pre-processing data corrections, in-processing fairness constraints, and post-processing prediction adjustments, and continuously monitoring fairness metrics including demographic parity requiring equal selection rates across groups, equalized odds ensuring equal true positive and false positive rates, equal opportunity guaranteeing equal true positive rates, and individual fairness treating similar individuals similarly), accessibility and universal design (complying with Web Content Accessibility Guidelines WCAG ensuring perceivable, operable, understandable, and robust interfaces, implementing European Accessibility Act requirements, and applying universal design principles creating systems usable by people with diverse abilities without specialized adaptation), and stakeholder participation (involving diverse stakeholders including end users, affected communities, domain experts, and civil society throughout development lifecycle, implementing participatory design methodologies enabling co-creation with affected populations, and ensuring representative development teams reflecting diversity of deployment contexts and user populations). Legal frameworks including the EU AI Act mandate high-risk systems implement data governance ensuring training, validation, and testing datasets are relevant, representative, accurate, complete, and free from errors, with potential biases identified and mitigated. The 2024-2025 period marked transition from voluntary fairness practices to legally mandated requirements with enforcement mechanisms across jurisdictions including EU AI Act penalties reaching EUR 35 million or 7% of worldwide annual turnover, U.S. state-level legislation including Colorado AI Act and New York City Bias Audit Law, and international standards including ISO/IEC TR 24027:2021 for bias detection and ISO/IEC 42001:2023 for AI risk management, with regulatory sandboxes enabling deliberate testing to expose unwanted bias before deployment.
    - maturity:: mature
    - source:: [[EU AI Act]], [[EU Charter Article 21]], [[ISO/IEC TR 24027]], [[WCAG]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:DiversityNonDiscriminationFairness
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0413-diversitynondiscriminationfairness-relationships

  - #### OWL Axioms
    id:: 0413-diversitynondiscriminationfairness-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :DiversityNonDiscriminationFairness))
(SubClassOf :DiversityNonDiscriminationFairness :TrustworthinessDimension)
(SubClassOf :DiversityNonDiscriminationFairness :FundamentalRightsRequirement)

;; Three core components
(Declaration (Class :UnfairBiasAvoidance))
(Declaration (Class :AccessibilityUniversalDesign))
(Declaration (Class :StakeholderParticipation))

(SubClassOf :UnfairBiasAvoidance :DiversityNonDiscriminationFairness)
(SubClassOf :AccessibilityUniversalDesign :DiversityNonDiscriminationFairness)
(SubClassOf :StakeholderParticipation :DiversityNonDiscriminationFairness)

;; Bias avoidance requirements
(SubClassOf :UnfairBiasAvoidance
  (ObjectSomeValuesFrom :identifiesBias :ProtectedCharacteristic))
(SubClassOf :UnfairBiasAvoidance
  (ObjectSomeValuesFrom :mitigates :AlgorithmicBias))
(SubClassOf :UnfairBiasAvoidance
  (ObjectSomeValuesFrom :monitors :FairnessMetric))

;; Protected characteristics (EU Charter Article 21)
(Declaration (Class :ProtectedCharacteristic))
(Declaration (Class :Sex))
(Declaration (Class :RacialEthnicOrigin))
(Declaration (Class :Religion))
(Declaration (Class :Disability))
(Declaration (Class :Age))
(Declaration (Class :SexualOrientation))

(SubClassOf :Sex :ProtectedCharacteristic)
(SubClassOf :RacialEthnicOrigin :ProtectedCharacteristic)
(SubClassOf :Religion :ProtectedCharacteristic)
(SubClassOf :Disability :ProtectedCharacteristic)
(SubClassOf :Age :ProtectedCharacteristic)
(SubClassOf :SexualOrientation :ProtectedCharacteristic)

;; Fairness definitions
(Declaration (Class :FairnessDefinition))
(Declaration (Class :DemographicParity))
(Declaration (Class :EqualOpportunity))
(Declaration (Class :EqualOdds))
(Declaration (Class :IndividualFairness))

(SubClassOf :DemographicParity :FairnessDefinition)
(SubClassOf :EqualOpportunity :FairnessDefinition)
(SubClassOf :EqualOdds :FairnessDefinition)
(SubClassOf :IndividualFairness :FairnessDefinition)

;; Accessibility requirements
(SubClassOf :AccessibilityUniversalDesign
  (ObjectSomeValuesFrom :compliesWith :WCAG))
(SubClassOf :AccessibilityUniversalDesign
  (ObjectSomeValuesFrom :compliesWith :EuropeanAccessibilityAct))
(SubClassOf :AccessibilityUniversalDesign
  (ObjectSomeValuesFrom :implements :UniversalDesignPrinciple))

;; Stakeholder participation requirements
(SubClassOf :StakeholderParticipation
  (ObjectSomeValuesFrom :involves :DiverseStakeholders))
(SubClassOf :StakeholderParticipation
  (ObjectSomeValuesFrom :implements :ParticipatoryDesign))
(SubClassOf :StakeholderParticipation
  (ObjectSomeValuesFrom :ensures :RepresentativeDevelopmentTeam))

(DisjointClasses :DiversityNonDiscriminationFairness :DiscriminatorySystem)
(DisjointClasses :DiversityNonDiscriminationFairness :BiasedSystem)
      ```

- ## About 0413 Diversitynondiscriminationfairness
  id:: 0413-diversitynondiscriminationfairness-about

  - 
  -
    - ### Implementation Patterns
  - ### Fairness-Aware AI Development
    ```python
    class FairAISystem:
        """AI system with comprehensive fairness mechanisms."""
  -
        def __init__(self, config: FairnessConfig):
            self.config = config
            self.protected_attributes = config.protected_attributes
            self.fairness_metric = config.fairness_metric
            self.bias_monitor = BiasMonitor(protected_attributes=self.protected_attributes)
            self.fairness_constraints = config.fairness_constraints
  -
        def train_with_fairness(self,
                               training_data: Dataset,
                               fairness_approach: str = 'in_processing') -> Model:
            """
            Train model with fairness considerations.
  -
            Args:
                training_data: Training dataset with protected attributes
                fairness_approach: 'pre_processing', 'in_processing', or 'post_processing'
  -
            Returns:
                Fair model
            """
            if fairness_approach == 'pre_processing':
                # Mitigate bias in data
                fair_data = self.pre_process_for_fairness(training_data)
                model = self.train_standard_model(fair_data)
  -
            elif fairness_approach == 'in_processing':
                # Train with fairness constraints
                model = self.train_fair_model(
                    data=training_data,
                    fairness_constraints=self.fairness_constraints
                )
  -
            elif fairness_approach == 'post_processing':
                # Train standard model, adjust outputs
                model = self.train_standard_model(training_data)
                model = self.post_process_for_fairness(model, training_data)
  -
            # Evaluate fairness
            fairness_report = self.evaluate_fairness(model, training_data)
  -
            # Log fairness metrics
            self.bias_monitor.log_training(
                model=model,
                data=training_data,
                fairness_metrics=fairness_report
            )
  -
            return model
  -
        def pre_process_for_fairness(self, data: Dataset) -> Dataset:
            """
            Apply pre-processing fairness interventions.
  -
            Methods:
            - Reweighting
            - Resampling
            - Fair representation learning
            """
            # Analyze bias in data
            bias_analysis = self.bias_monitor.analyze_data_bias(data)
  -
            # Select mitigation strategy
            if bias_analysis.representation_bias > self.config.bias_threshold:
                # Resampling for representation
                data = self.resample_for_fairness(data)
  -
            if bias_analysis.historical_bias > self.config.bias_threshold:
                # Reweighting for historical bias
                data = self.reweight_for_fairness(data)
  -
            # Learn fair representations
            fair_features = self.learn_fair_representations(
                data=data,
                protected_attributes=self.protected_attributes
            )
  -
            return Dataset(
                features=fair_features,
                labels=data.labels,
                protected_attributes=data.protected_attributes
            )
  -
        def train_fair_model(self,
                            data: Dataset,
                            fairness_constraints: List[FairnessConstraint]) -> Model:
            """
            Train model with fairness constraints.
  -
            Implements constrained optimization to satisfy fairness requirements.
            """
            model = FairClassifier(
                fairness_constraints=fairness_constraints,
                protected_attributes=self.protected_attributes
            )
  -
            # Define fairness-aware loss
            def fair_loss(predictions, targets, protected_attrs):
                # Standard loss
                standard_loss = self.standard_loss(predictions, targets)
  -
                # Fairness penalty
                fairness_penalty = 0
                for constraint in fairness_constraints:
                    violation = constraint.measure_violation(
                        predictions=predictions,
                        targets=targets,
                        protected_attrs=protected_attrs
                    )
                    fairness_penalty += constraint.penalty_weight * violation
  -
                return standard_loss + fairness_penalty
  -
            # Train with fairness-aware loss
            model.fit(
                X=data.features,
                y=data.labels,
                sensitive_features=data.protected_attributes,
                loss_fn=fair_loss
            )
  -
            return model
  -
        def evaluate_fairness(self,
                             model: Model,
                             test_data: Dataset) -> FairnessReport:
            """
            Comprehensive fairness evaluation across metrics.
  -
            Evaluates:
            - Demographic parity
            - Equalized odds
            - Equal opportunity
            - Individual fairness (if applicable)
            """
            predictions = model.predict(test_data.features)
  -
            fairness_metrics = {}
  -
            # Group fairness metrics
            for protected_attr in self.protected_attributes:
                attr_values = test_data.protected_attributes[protected_attr]
  -
                # Demographic parity
                fairness_metrics[f'{protected_attr}_demographic_parity'] = \
                    self.demographic_parity(predictions, attr_values)
  -
                # Equalized odds
                fairness_metrics[f'{protected_attr}_equalized_odds'] = \
                    self.equalized_odds(
                        predictions=predictions,
                        targets=test_data.labels,
                        protected=attr_values
                    )
  -
                # Equal opportunity
                fairness_metrics[f'{protected_attr}_equal_opportunity'] = \
                    self.equal_opportunity(
                        predictions=predictions,
                        targets=test_data.labels,
                        protected=attr_values
                    )
  -
            # Individual fairness (if similarity metric available)
            if self.config.similarity_metric:
                fairness_metrics['individual_fairness'] = \
                    self.individual_fairness(
                        model=model,
                        data=test_data,
                        similarity_metric=self.config.similarity_metric
                    )
  -
            # Intersectional fairness
            if len(self.protected_attributes) > 1:
                fairness_metrics['intersectional'] = \
                    self.intersectional_fairness(
                        predictions=predictions,
                        targets=test_data.labels,
                        protected_attrs=test_data.protected_attributes
                    )
  -
            # Determine overall fairness
            violations = []
            for metric_name, metric_value in fairness_metrics.items():
                threshold = self.config.fairness_thresholds.get(metric_name, 0.1)
                if abs(metric_value) > threshold:
                    violations.append({
                        'metric': metric_name,
                        'value': metric_value,
                        'threshold': threshold
                    })
  -
            return FairnessReport(
                metrics=fairness_metrics,
                violations=violations,
                is_fair=len(violations) == 0,
                recommendations=self.generate_fairness_recommendations(violations)
            )
  -
        def demographic_parity(self,
                              predictions: np.ndarray,
                              protected_attr: np.ndarray) -> float:
            """
            Calculate demographic parity difference.
  -
            Returns:
                Difference in selection rates between groups (0 = perfect parity)
            """
            groups = np.unique(protected_attr)
            selection_rates = []
  -
            for group in groups:
                group_mask = (protected_attr == group)
                selection_rate = predictions[group_mask].mean()
                selection_rates.append(selection_rate)
  -
            # Maximum difference in selection rates
            return max(selection_rates) - min(selection_rates)
  -
        def equalized_odds(self,
                          predictions: np.ndarray,
                          targets: np.ndarray,
                          protected: np.ndarray) -> float:
            """
            Calculate equalized odds disparity.
  -
            Returns:
                Maximum difference in TPR or FPR between groups
            """
            groups = np.unique(protected)
            tpr_diff_max = 0
            fpr_diff_max = 0
  -
            tprs = []
            fprs = []
  -
            for group in groups:
                group_mask = (protected == group)
  -
                # True Positive Rate
                tp = ((predictions == 1) & (targets == 1) & group_mask).sum()
                fn = ((predictions == 0) & (targets == 1) & group_mask).sum()
                tpr = tp / (tp + fn) if (tp + fn) > 0 else 0
                tprs.append(tpr)
  -
                # False Positive Rate
                fp = ((predictions == 1) & (targets == 0) & group_mask).sum()
                tn = ((predictions == 0) & (targets == 0) & group_mask).sum()
                fpr = fp / (fp + tn) if (fp + tn) > 0 else 0
                fprs.append(fpr)
  -
            tpr_diff_max = max(tprs) - min(tprs)
            fpr_diff_max = max(fprs) - min(fprs)
  -
            # Return maximum disparity
            return max(tpr_diff_max, fpr_diff_max)
  -
  -
    class AccessibilityValidator:
        """Validate AI system accessibility."""
  -
        def __init__(self, wcag_level: str = 'AA'):
            self.wcag_level = wcag_level
            self.validators = self.load_validators()
  -
        def validate_accessibility(self, system: AISystem) -> AccessibilityReport:
            """
            Comprehensive accessibility validation.
  -
            Returns:
                Detailed accessibility report with WCAG compliance
            """
            validation_results = {}
  -
            # Perceivable
            validation_results['perceivable'] = self.validate_perceivable(system)
  -
            # Operable
            validation_results['operable'] = self.validate_operable(system)
  -
            # Understandable
            validation_results['understandable'] = self.validate_understandable(system)
  -
            # Robust
            validation_results['robust'] = self.validate_robust(system)
  -
            # Overall compliance
            compliance_level = self.determine_compliance_level(validation_results)
  -
            return AccessibilityReport(
                results=validation_results,
                wcag_level=compliance_level,
                violations=self.extract_violations(validation_results),
                recommendations=self.generate_accessibility_recommendations(validation_results)
            )
    ```

- ### 2024-2025: Regulatory Enforcement and Fairness Tooling
  id:: diversitynondiscriminationfairness-recent-developments

  The period from 2024 through 2025 marked the transition of AI fairness and bias mitigation from voluntary best practices to legally mandated requirements, with enforcement mechanisms now in place across multiple jurisdictions.

  #### EU AI Act Implementation

  The **EU AI Act** entered into force on 1st August 2024, establishing the world's first comprehensive legal framework for AI. One of the Act's central objectives is to **mitigate discrimination and bias in high-risk AI systems**, with a phased implementation timeline:

  - **Prohibitions and AI literacy obligations** became applicable on 2nd February 2025
  - **Governance rules and GPAI model obligations** took effect on 2nd August 2025
  - **Full application** expected by 2nd August 2026

  The Act mandates that data sets must contain accurate information, and **potential bias must be identified and mitigated**. Effective data governance must include bias mitigation across training, validation, and testing of data sets. High-risk systems must conduct **impact assessments** to identify and mitigate potential biases, with penalties reaching **€35 million or 7% of worldwide annual turnover** for non-compliance.

  #### US State and Federal Action

  The **Colorado AI Act**, enacted on 17th May 2024, imposes stringent obligations on developers and deployers of high-risk AI systems to protect against algorithmic discriminatory or harmful consequential decisions. **New York City's Bias Audit Law** mandates regular audits of automated employment decision tools to ensure fairness and prevent discrimination. At the federal level, **Executive Order 14110** tasks over 50 federal entities with developing policies across eight key areas, including algorithmic bias mitigation.

  #### International Standards and Tools

  **ISO/IEC TR 24027:2021** provides technical guidance for best practices in bias detection and mitigation in AI systems, whilst **ISO/IEC 42001:2023** offers a structured approach to managing AI risks, ensuring data quality, and maintaining robust documentation. NIST's **AI Risk Management Framework (RMF)** continues to guide organisations in identifying and mitigating risks.

  **Sandboxing** (written into the EU AI Act) subjects AI decision-making to deliberate testing to expose unwanted bias. Fairness auditing tools proliferated in this period, with platforms enabling systematic testing for bias, robustness, and fairness across demographic groups.
