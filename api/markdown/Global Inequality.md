Global Inequality is the systematic, multi-dimensional divergence in life chances, material resources, political power, and technological access experienced by individuals, households, communities, and nations across the world economic order — encompassing income inequality (the Gini coefficient ...

### Semantic Classification

### Content

## Compositional Relationships (Components)
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:GiniCoefficient))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:IncomeInequality))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:WealthInequality))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:DigitalDivide))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:ComputeDivide))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:GenderPayGap))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:IntergenerationalMobility))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:FinancialInclusion))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:hasPart es:LabourIncomeShare))

    ## Dependency Relationships
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:requires es:DistributionalData))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:requires es:NationalAccounts))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:requires es:HouseholdSurveyData))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:requires es:TaxRecordMicrodata))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:dependsOn es:Macroeconomics))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:dependsOn es:PoliticalScience))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:dependsOn es:LabourEconomics))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:dependsOn es:DevelopmentFinance))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:dependsOn es:DataScience))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:dependsOn es:InstitutionalEconomics))

    ## Capability Relationships
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:enables es:PolicyDesign))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:enables es:RedistributiveTaxation))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:enables es:SocialProtection))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:enables es:UniversalBasicIncome))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:enables es:DigitalInfrastructureInvestment))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:enables es:ProgressiveWealthTax))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:supports es:SustainableDevelopmentGoals))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:supports es:ClimateJustice))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:supports es:FinancialInclusion))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:supports es:AIGovernance))

    ## Implementation Relationships
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:implements es:GiniCoefficient))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:implements es:PalmaRatio))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:implements es:AtkinsonIndex))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:implements es:TopIncomeShares))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:implements es:S80S20Ratio))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:implements es:HumanDevelopmentIndex))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:uses es:WorldInequalityDatabase))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:uses es:ILO_WESO))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:uses es:WorldBankFindex))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:uses es:OECDIncomeDistributionDatabase))

    ## Reduction Relationships
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:contrasts-with es:TrickleDownEconomics))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:contrasts-with es:EfficientMarketHypothesis))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:contrasts-with es:MeritocracyThesis))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:contrasts-with es:KuznetsCurveHypothesis))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:reducedBy es:ProgressiveTaxation))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:reducedBy es:SocialInsuranceSystems))
    SubClassOf(es:GlobalInequality
      ObjectSomeValuesFrom(es:reducedBy es:LabourMarketInstitutions))

    ## Data Properties (Characteristics)
    DataPropertyAssertion(es:hasIdentifier es:GlobalInequality "ES-2001"^^xsd:string)
    DataPropertyAssertion(es:authorityScore es:GlobalInequality "0.87"^^xsd:decimal)
    DataPropertyAssertion(es:globalGiniCoefficient es:GlobalInequality "0.65"^^xsd:decimal)
    DataPropertyAssertion(es:top1PercentWealthShare es:GlobalInequality "0.38"^^xsd:decimal)
    DataPropertyAssertion(es:globalUnbankedPopulation es:GlobalInequality "1600000000"^^xsd:integer)
    DataPropertyAssertion(es:aiExposedJobsGlobal es:GlobalInequality "300000000"^^xsd:integer)
    DataPropertyAssertion(es:labourIncomeShare2024 es:GlobalInequality "0.524"^^xsd:decimal)

    ## Property Constraints
    SubClassOf(es:GlobalInequality
      DataAllValuesFrom(es:requiresDistributionalData xsd:boolean))
    SubClassOf(es:GlobalInequality
      DataSomeValuesFrom(es:measurementFramework xsd:string))
    SubClassOf(es:GlobalInequality
      DataMinCardinality(1 es:hasPolicyInstrument xsd:string))

    ## Annotations
    AnnotationAssertion(rdfs:label es:GlobalInequality "Global Inequality"@en)
    AnnotationAssertion(rdfs:comment es:GlobalInequality "Multi-dimensional divergence in income, wealth, digital access, and life chances across and within nations; empirically grounded in WID (216-country DINA series), ILO WESO (labour income share), World Bank Findex (financial inclusion), and IMF/Goldman Sachs AI displacement analyses; normatively anchored in Piketty r>g capital accumulation thesis, Sen capabilities approach, and Acemoglu-Johnson technology design choice critique; intersecting with climate justice (WID Climate Inequality Report 2025: Gini +1.4 by 2100), AI labour displacement (Goldman Sachs: 300M exposed jobs), financial inclusion (1.6B unbanked), and compute divide (80%+ AI R&D concentrated in US/China/EU)."@en)
    AnnotationAssertion(dcterms:identifier es:GlobalInequality "ES-2001"^^xsd:string)
    AnnotationAssertion(dcterms:subject es:GlobalInequality "Distributional Economics, Political Economy, AI Displacement, Financial Inclusion, Climate Justice, UBI, Compute Divide"@en)

    ## Property Characteristics
    AsymmetricObjectProperty(es:requires)
    AsymmetricObjectProperty(es:enables)
    AsymmetricObjectProperty(es:implements)
    AsymmetricObjectProperty(es:reducedBy)
    TransitiveObjectProperty(es:dependsOn)
    FunctionalDataProperty(es:globalGiniCoefficient)
    FunctionalDataProperty(es:labourIncomeShare2024)

### About

- [[Global Inequality]] describes the structural divergence in material welfare, power, and life chances across and within societies.
- The concept spans multiple dimensions: inter-country gaps measured by GDP per capita PPP, intra-country [[Gini Coefficient]] dynamics, [[Digital Divide]], [[Compute Divide]], [[Gender Pay Gap]], [[Intergenerational Mobility]], and intersections with [[Climate Change]] and [[Financial Inclusion]].
- Empirically anchored in the [[World Inequality Database]] (WID.world, 216 countries, data to 1820), the ILO [[World Employment and Social Outlook]], the [[World Bank]] Findex, and administrative microdata (tax records, social security data) revealing far sharper top-end concentration than household surveys capture.
- Normatively engages with [[Distributive Justice]] frameworks: Rawls's difference principle, Sen's Capabilities Approach, Pogge's negative duty not to impose unjust institutions, spanning liberal egalitarianism, luck egalitarianism, and relational egalitarianism.
- Positive analysis asks: what mechanisms drive divergence — returns to capital vs. labour, labour market polarisation, skill-biased technological change, globalisation asymmetries, tax competition, and now AI-driven task substitution.
- Normative prescription asks: what instruments are feasible — progressive income and wealth tax, inheritance reform, [[Universal Basic Income]], compute equity mandates, financial inclusion requirements, international tax coordination.
- Renewed urgency since 2023 from four converging developments:
  - (1) The AI labour displacement thesis operationalised by Goldman Sachs (300M jobs exposed), the IMF (40% occupational impact), and Acemoglu-Johnson "Power and Progress" (design choice bias toward displacement).
  - (2) The November 2025 Stiglitz G20 Report declaring an "inequality emergency" — top 1% captured 41% of 2000-2024 global wealth.
  - (3) The WID 2025 data revision upgrading Latin America to the world's most unequal region by top-10%/bottom-50% income share ratio.
  - (4) The Global Findex 2025 documenting 79% global account ownership but 1.6 billion adults still excluded from formal finance.
- Anacyclosis theory (Polybius) — the cyclical degradation of governance forms (monarchy → tyranny → aristocracy → oligarchy → democracy → ochlocracy) — provides a historical-political lens: extreme inequality in the oligarchic phase historically precedes democratic correction or political collapse, a pattern with contemporary resonance in rising populism across G20 democracies.
- The WEF Global Risks Report (annually since 2022) positions inequality as a first-order systemic risk interconnected with cybersecurity, AI governance, climate disruption, and democratic erosion — framing it not as a social welfare concern but as a stability and resilience threat to the global order.

### Components / Architecture

#### Measurement Frameworks

- **[[Gini Coefficient]]** — standard synthetic scalar (0 = perfect equality, 1 = maximum concentration) summarising distributional spread across all income/wealth deciles.
  - Widely used for cross-country and time-series comparability; OECD publishes annual Gini series for 38 member states.
  - Key weakness: insensitive to distributional shape within deciles and to where in the distribution inequality originates (two societies with Gini = 0.35 can have radically different shapes).
  - Supplemented by the [[Palma Ratio]] (top 10% income / bottom 40% income shares): more robust across development levels and directly captures the politically salient comparison.
  - [[Atkinson Index]] adds a normative inequality-aversion parameter ε: at ε = 2, a £1 gain for the poorest is given 4× the weight of a £1 gain at median income, providing explicit welfare-weighting.
- **Top Income and Wealth Shares (WID DINA Methodology)**
  - Flagship WID.world series: top 1%, top 10%, bottom 50% shares of national income and wealth, annually from 1820 for some countries.
  - Constructed via Distributional National Accounts (DINA): splicing tax records (most accurate at top), household surveys (best at middle), national accounts (total totals) to produce consistent series.
  - WID global 2024 snapshot: top 1% income share ~20% globally; regional variation: Europe ~12%, US ~18–19%, MENA ~26%, Latin America ~28% (post-2025 revision).
  - Wealth concentration far exceeds income: top 10% owns 76% of global wealth; bottom 50% owns 2%.
- **[[Intergenerational Mobility]]** — measures of how much children's economic outcomes are determined by parents' outcomes.
  - Intergenerational income elasticity (IGE): correlation between father and son log earnings; ranges from ~0.15 (Denmark) to ~0.60+ (Brazil).
  - Rank-rank correlation (Chetty et al.): correlation between child and parent income percentile rank; avoids log-linearity assumption.
  - Miles Corak's "Great Gatsby Curve": cross-country plot of Gini vs IGE showing high-inequality societies have lower upward mobility — structurally self-perpetuating inequality trap.
  - Mechanisms: parental investment in children's education, health, and social networks; residential sorting into school quality zones; differential access to capital for business formation.
- **[[Digital Divide]] and [[Compute Divide]]** — multi-layered construct:
  - Broadband access: quality-adjusted (speed, reliability) by income quintile, rural/urban, gender; tracked by ITU ICT Development Index.
  - AI inference access: cost per query, language support coverage, latency; frontier LLM APIs cost $0.005–$0.05 per 1K tokens — significant relative to median daily income in low-income countries.
  - AI R&D concentration: 80%+ in US, China, EU; 80%+ of AI investment in <10 hyperscalers; CSET Georgetown AI Vibrancy Index documents concentration trends.
  - Data sovereignty: Global South populations generate training data (annotation labour, behavioural data) but do not own resulting AI systems — "AI colonialism" framing.
- **Labour Income Share** — fraction of GDP accruing to labour vs. capital.
  - Global decline: 53.0% (2014) → 52.4% (2024) per ILO WESO 2025; $1 trillion/year transferred from workers to capital owners at 2024 GDP levels.
  - Within-labour polarisation: high-skill wages rising sharply; routine-task middle wages stagnating; manual service wages held down by minimum wage policy — "hollowing out" pattern.
  - AI era extension: generative AI begins substituting non-routine cognitive tasks previously considered immune to automation, threatening the high-skill wage premium that drove the upper tail of within-labour inequality.
- **[[Financial Inclusion]] Metrics (World Bank Findex 2025)**
  - Global account ownership: 79% (up from 51% in 2011); low/middle-income economies: 75%.
  - Digital payment uptake: 61% of adults in low/middle-income economies, up 27pp since 2014.
  - Sub-Saharan Africa mobile money: 40% penetration (up from 27% in 2021) — world leader.
  - Latin America: 37% mobile money (up from 22% in 2021); fastest-growing region.
  - Remaining gap: 1.6 billion excluded; gender gap 5pp in developing economies (down from 9pp); rural-urban gap persists.
- **Climate-Inequality Composite Metrics**
  - WID Climate Inequality Report 2025 constructs country-level indices mapping: per capita historical emissions responsibility, current climate risk exposure, adaptive capacity, and residual displacement risk.
  - Near-perfect negative correlation: countries most exposed to climate risk contributed least to cumulative emissions.
  - Nature Climate Change (2025): wealthiest 10% responsible for ~50% of consumption emissions yet face lowest proportional climate risk — inverse exposure-responsibility relationship.
  - IPCC AR6 Gini impact: +1.4 Gini points by 2100 under current trajectories; 1.5°C stabilisation reduces this by two-thirds.

### Use Cases / Major Families

#### AI Labour Displacement Impact Assessment

- Applies inequality frameworks to assess distributional consequences of occupational AI exposure across countries, sectors, and skill levels.
- Key methodologies:
  - Frey-Osborne (2013) task-feasibility scoring, updated with LLM capabilities (GPT-4, Claude 3, Gemini 1.5 level task completion across ISCO-08 occupation categories).
  - OECD task-based automation probability by occupation code (ISCO/O*NET link): 14% of jobs in OECD highly automatable; 32% face significant change.
  - Goldman Sachs (2023) exposure index: 300M FTE exposed globally; legal, accountancy, admin support, customer service as leading exposed occupations.
  - ILO WESO (2024-2025): 1 in 4 workers globally has some AI exposure; high-income economies face sharper displacement of cognitive middle-skill work.
- Distributional asymmetry: high-income economies face near-term displacement but potentially share in productivity gains; low-income economies face lower near-term displacement but also lower AI productivity uptake — widening the absolute income gap.
- Goldman Sachs March 2026 update: AI reduced US monthly payroll growth by approximately 16,000 jobs — early observable signal after years of projection-only analysis.

#### Universal Basic Income Design and Evidence

- Inequality analysis informs UBI parameterisation, financing, and targeting design.
- RCT evidence base:
  - Finland 2-year experiment (2017-2018): €560/month to 2,000 randomly selected unemployed; results: improved wellbeing and trust in institutions, modest positive labour supply effects (counter to critics' predictions).
  - Kenya GiveDirectly 12-year long-run RCT (2022-2034): 2025 interim results show persistent consumption gains, asset accumulation, wellbeing improvements, and positive community spillovers at $0.75/day transfer levels.
  - OpenResearch US experiment (2022-2025): $1,000/month to 1,000 low-income Texas/Illinois recipients vs $50 control; results: positive consumption-smoothing, improved mental health, no significant labour supply reduction.
- Financing proposals under active debate:
  - Andrew Yang's "Freedom Dividend": $1,000/month for all US adults 18-64, financed by 10% Value Added Tax on AI-using corporations.
  - Sam Altman's "American Equity Fund": AI companies and landholders contribute 2.5% of value annually; distributed universally — "extreme wealth" sharing not cash welfare.
  - Automation tax: variable levy on robot/AI-substituted hours (proposed in EU, South Korea, and by the IMF fiscal monitor).
  - AI Sovereign Fund: governments own equity stakes in AI companies in exchange for computing infrastructure investment (analogous to Norway SWF for oil rents).
- Critical analysis (Frontiers in AI, 2025): tech-elite UBI advocacy risks symbolic violence — naturalising wealth concentration while offering minimal structural redistribution; creates a tripartite hierarchy (AI owners / AI-augmented workers / passive UBI recipients) that entrenches rather than dissolves class divisions.

#### Compute Equity Governance

- Policy design to address the compute divide and prevent AI from widening North-South inequality.
- Policy instruments under consideration or implementation:
  - Compute vouchers for Global South researchers: ITU AI Access Treaty draft (2025 consultation) proposes G7 nations allocate compute time to low-income country universities and research institutes.
  - Mandatory API access tiering: subsidised frontier model access for researchers in low-income countries (analogous to academic journal access programmes like Research4Life).
  - Multilateral training-data pools: shared repositories with data sovereignty protections allowing low-income countries to contribute and benefit from training data.
  - World Bank Digital Economy for Africa ($2.5B, 2024-2027): fibre, mobile, and last-mile digital infrastructure investment across 20+ African nations.
  - ITU universal service obligations: broadband cross-subsidisation requirements for operators in mixed urban-rural service areas.
- Critical assessment: private AI capital concentration (top 5 US hyperscalers — Microsoft Azure, Google GCP, Amazon AWS, Meta, NVIDIA — control 70%+ of global AI training infrastructure) structurally outpaces public redistribution at current policy ambition levels.

#### Financial Inclusion via Mobile / Crypto / CBDC Rails

- Mobile money demonstrated at scale that interoperable, agent-based mobile payment networks can reach unbanked populations.
- M-Pesa (Safaricom, Kenya/Tanzania): 50M+ active users; remittance, payment, and savings products; credited with 2% GDP welfare gain in Kenya (Suri & Jack, Science, 2016).
- MTN Mobile Money, Airtel Money (West/Central Africa); bKash (Bangladesh, 50M+ users); GCash (Philippines, 80M+ users): regional mobile money ecosystem examples.
- Lightning Network Bitcoin microtransactions and stablecoin-on-mobile approaches (Celo, Wave Money, BIMA): offer complementary rails with risks of price volatility, regulatory uncertainty, and cash-in/cash-out agent coverage gaps.
- [[CBDCs]] with financial inclusion mandates: ECOWAS e-Cedi (Ghana pilot), eNaira (Nigeria, 3M+ wallets), Digital Rupee (India); designed to reduce transaction costs for low-income users and provide a government-guaranteed digital store of value.
- Double-edged inclusion dynamic: digital payment access reduces transaction costs for the poor; but digital credit scoring algorithms trained on biased data can deny credit to marginalised groups ([[Algorithmic Bias and Variance]]).

#### Climate Justice and Just Transition

- Carbon pricing is regressive without rebates: bottom income quintile spends 3–7× more of disposable income on energy than top quintile.
- Carbon dividends (returning carbon tax revenue equally per capita) can make the net policy progressive — used in British Columbia (Canada) since 2008, Switzerland since 2021.
- Just Transition frameworks link decarbonisation to worker retraining, income support, and regional investment — central to: EU Green Deal Just Transition Mechanism (€55B, 2021-2030); UK Net Zero Strategy with regional investment commitments; ILO Just Transition Guidelines (2015, updated 2024).
- WID Climate Inequality Report 2025: Loss and Damage financing should be scaled to cumulative emissions responsibility of high-income countries — estimated floor of $400B/year to meet Paris Agreement equity commitments.
- Compound risk: climate displacement (216M climate migrants by 2050, World Bank estimate) × AI labour displacement in destination countries = compounding inequality shock for migrant-receiving developing economies.

#### Wealth Taxation and International Tax Coordination

- Piketty's r > g framework: when return on capital persistently exceeds growth rate, wealth concentration compounds indefinitely absent intervention.
- Atkinson (2015) redistribution toolkit: progressive capital taxation, inheritance taxation at marginal rates, public asset ownership (sovereign wealth funds), wage policy (living wage, co-determination), active labour market policy.
- EU Pillar Two global minimum corporate tax (15%, effective 2024): partial implementation — prevents the most egregious offshore profit-shifting but does not address capital income directly.
- Zucman's 2% global minimum billionaire wealth tax: endorsed by Brazilian G20 presidency (2024); incorporated in Stiglitz Committee recommendations; estimated yield $200-250B/year globally; faces G7 political resistance (US and UK most resistant, EU Commission qualified supporter).
- International tax avoidance mechanism: ultra-high-net-worth individuals hold wealth in trusts, holding companies, and Special Purpose Vehicles across multiple jurisdictions — OECD Common Reporting Standard and FATF beneficial ownership registers are partially effective counter-measures.

#### Regional and Spatial Inequality Analysis

- Intra-country spatial divergence is a primary driver of political polarisation: North-South UK gaps, US Rust Belt vs coastal cities, inland China vs Pearl River Delta, Southern vs Northern Italy.
- Resolution Foundation "Levelling Up" analysis: UK regional productivity gap (London vs North East England) among largest of any OECD nation; London GDP per capita ~2.5× North East.
- AI-specific spatial inequality: AI adoption and productivity gains are concentrated in high-skill agglomeration cities (London, Edinburgh, Cambridge, Bristol); post-industrial Northern England cities (Manchester, Leeds, Sheffield, Newcastle) face displacement risks in remaining manufacturing and routine service work without equivalent high-skill replacement employment.
- Manchester, Leeds, Sheffield, Newcastle: all have active industrial strategy commitments and university-industry partnerships aimed at digital economy transition, but face a structural challenge — the AI productivity dividend accrues primarily to capital-intensive knowledge firms, not to the service-sector workforce that dominates these cities' employment base.

### Academic Context

#### Neoclassical-Kuznets Convergence Tradition

- Argues inequality follows an inverted-U curve as economies develop (Kuznets 1955): rising in early industrialisation as labour moves from low-productivity agriculture to manufacturing, then falling as the full workforce gains education and skills.
- Factor price equalisation (Heckscher-Ohlin): trade integration should converge wages across countries as comparative advantage allocates tasks globally.
- Empirical verdict since 1980: global between-country inequality declined (Asian convergence), but within-country inequality rose in most advanced and many emerging economies — falsifying the simple Kuznets prediction and motivating the second tradition.

#### Piketty's Capital Accumulation Thesis

- "Capital in the Twenty-First Century" (2014): when rate of return on capital r persistently exceeds economic growth g, wealth share of capital owners compounds indefinitely.
- Historical data (WID 1820-2020): post-WWII low r-g period (1945-1975) was exceptional — driven by wartime capital destruction, progressive taxation, regulated finance, and strong trade unions.
- Since 1980: r-g gap widened globally as capital was deregulated, marginal tax rates fell, and labour market institutions weakened — driving the WID-documented surge in wealth concentration.
- Piketty's prescription: progressive wealth and inheritance taxation, coordinated internationally to prevent avoidance. Remains the analytical anchor for Stiglitz G20 Committee recommendations.

#### Milanovic's Global Distribution Analysis

- "The Haves and the Have-Nots" (2010), "Global Inequality" (2016), "Capitalism Alone" (2019): maps world income distribution as a unified entity.
- Global Gini peaked around 2005 at ~0.70-0.72; declined modestly to ~0.65 by 2020 driven by Chinese and Indian convergence.
- Elephant curve (Lakner-Milanovic): absolute real income growth 1988-2008 was highest at global median (Asian emerging markets) and global top 1% (OECD super-rich); trough at 75th-90th global percentile (OECD lower-middle class) — the structural basis for Western populist politics.
- Updated 2008-2023 analysis: top-1% growth continues; some OECD median recovery; Global South divergence in AI and compute capital access worsening.

#### Sen's Capabilities Approach

- Reframes inequality from income/utility to the set of functionings individuals can actually achieve: education, health, political participation, bodily integrity, social connection.
- Underpins UNDP Human Development Index (HDI) and Inequality-adjusted HDI (IHDI): discounts average achievements by within-country inequality.
- Sen and Nussbaum's capabilities framework provides normative grounding for policies targeting specific deprivations (gender violence, disability exclusion, indigenous land rights) not captured by income-centric Gini analysis.
- AI capabilities intersection: access to AI tools may become a new capability dimension — those without digital literacy, language access, or compute access will face a compounded capability deprivation.

#### Acemoglu-Autor Task-Based Framework

- Labour demand is driven by assignment of tasks (activity bundles within occupations) to workers vs. machines based on comparative advantage (Acemoglu-Autor 2011, Acemoglu-Restrepo 2018, 2022).
- AI increases the set of tasks profitably automated — concentrated in routine cognitive tasks initially, increasingly extending to non-routine cognitive tasks (legal research, code generation, content creation) with GPT-4/Claude-class models.
- Econometric estimates (Econometrica 2022): automation since 1987 explains 50-70% of US wage inequality increase for non-college workers, through direct displacement and wage-structure effects of reducing demand for middle-skill routine labour.
- "Power and Progress" policy critique: AI development is systematically biased toward displacement (minimising headcount) rather than augmentation (boosting worker productivity) because design incentives reward cost reduction over worker empowerment.
- Prescription: redesign AI development incentives through R&D tax credits for augmentation technologies, labour co-determination in technology deployment decisions, stronger antitrust enforcement on platform monopolies.

#### Great Gatsby Curve and Inequality Traps

- Miles Corak (2013): cross-country plot of Gini vs intergenerational income elasticity (IGE) shows high-inequality societies have structurally lower upward mobility.
- Mechanisms: parental investment in children's human capital (education, health, social networks); residential sorting into school-quality catchment areas; differential access to startup capital and professional networks.
- The "inequality trap": high inequality → low mobility → persistent inequality across generations, independent of individual effort — justifying pre-distribution policies (universal education, childcare, housing) as efficiency-enhancing, not just redistributive.
- UK data: social mobility charity Sutton Trust documents that 39% of FTSE 100 CEOs, 65% of senior judges, 57% of permanent secretaries attended fee-paying private schools vs. 7% of the general population.

#### Climate-Inequality Nexus

- IPCC AR6 WG2 (2022), Chapter 8: "compound risks" facing low-income climate-exposed communities — simultaneous income insecurity, food insecurity, and extreme weather shocks.
- Columbia economics (Davis 2024): temperature increases and precipitation anomalies disproportionately harm agricultural-dependent rural low-income communities; within-country distributional impacts poorly captured by national average projections.
- Nature Climate Change (2024, 2025): global Gini +1.4 points by 2100 without mitigation; 1.5°C stabilisation reduces this increase by two-thirds — a quantified case for aggressive mitigation as an inequality intervention.

#### Feminist Political Economy

- Gender as a structural axis of inequality intersecting with class, race, and disability.
- Gender pay gap: ~18% raw, 8-10% adjusted for occupation and experience in OECD economies; largest in Japan, South Korea, Estonia; smallest in Luxembourg, Romania, Bulgaria.
- Unpaid care work: women perform 3-4× more unpaid care than men globally; ILO values this at $10.8 trillion annually — a GDP-scale invisible economy not captured in standard inequality metrics.
- Gender wealth gap: women own 32% of global wealth despite earning 38% of labour income — capital accumulation disparity driven by inheritance patterns, lower pension accrual, and shorter working lives due to care duties.
- ILO WESO 2025: labour income share decline since 2014 disproportionately borne by women, who are over-represented in informal and care-sector employment with weaker contractual protections.
- AI automation risk: administrative, customer service, and healthcare data-entry roles (heavily female-dominated) face above-average AI exposure — compounding gender inequality in AI transition unless proactive retraining and labour market policy intervenes.

### Current Landscape (2026)

#### Stiglitz G20 Committee: "Inequality Emergency" (November 2025)

- Highest-level multilateral acknowledgement to date that post-2008 distributional trajectories are systemically inequitable.
- Key quantitative findings from the Committee's November 2025 report:
  - Top 1% captured 41% of all new global wealth created 2000-2024.
  - Only 1% of new wealth reached the bottom 50%.
  - $70 trillion in inherited wealth projected to transfer between generations over the coming decade — creating structural headwinds against social mobility absent coordinated inheritance taxation.
  - Cross-country income gaps narrowed (Asian convergence), but intra-country gaps widened in most G20 economies.
- Recommendation accepted at Joburg Summit: G20 to sponsor a formal scoping exercise for the International Panel on Inequality (IPI) during the 2026 cycle (South Africa/Brazil co-presidency).
- Reception: World Inequality Lab endorsed IPI recommendation but critiqued antitrust proposals as insufficiently structural; ITUC (International Trade Union Confederation) welcomed the report as validation of worker advocacy positions; ITIF (Information Technology and Innovation Foundation) critiqued the antitrust recommendations as flawed.

#### AI Labour Market: From Projection to Observation (2025-2026)

- The 2023-era projections are now measurable in real-time labour market data.
- Goldman Sachs March 2026 update: AI reduced US monthly payroll growth by approximately 16,000 jobs/month — modest relative to 150,000+ monthly additions but accelerating and concentrated in white-collar sectors.
- Leading-edge displacement sectors (2025-2026): legal document review and paralegal support; accountancy and financial audit; software quality assurance and junior development; customer service tier-1 support; marketing copy and graphic design.
- ILO WESO May 2025: occupational upgrading continues in high-income economies (high-skill share of employment rising); informal employment expanding in low-income countries; working poverty stabilised at pre-pandemic levels in low-income countries — no AI productivity dividend reaching the poor.
- Labour income share decline: 53.0% (2014) → 52.4% (2024); $1 trillion/year transferred from workers to capital owners at 2024 GDP levels.
- ILO: nearly 1 in 4 workers worldwide employed in occupations with some AI exposure; 7.5% in high-skill roles where most tasks could be automated.

#### WID 2025 Database Update

- Improved administrative tax data for Brazil and Chile revealed within-top-1% income concentration was systematically underestimated by household surveys.
- Latin America's top-10%/bottom-50% income share ratio now exceeds MENA — making it the world's most unequal income region by this WID flagship measure.
- Europe (particularly Nordic) remains least unequal.
- US top-1% income share (~18-19%) significantly above European (~12-14%); driven by technology, finance, and real estate capital returns.
- WID 2026 Report (December 2025 release): first comprehensive post-pandemic wealth dynamics panel covering 40+ countries; new gender-disaggregated wealth series.

#### Global Findex 2025: Financial Inclusion Progress and Gaps

- 79% of global adults now hold an account at a bank or mobile money provider (up from 74% in 2021 and 51% in 2011).
- Low/middle-income economies: 75% account ownership.
- Sub-Saharan Africa: 40% mobile money penetration — world leader, up from 27% in 2021.
- Latin America: 37% mobile money (up from 22% in 2021) — fastest-growing region.
- Digital payment uptake (low/middle-income): 61%, up 27pp since 2014.
- Remaining exclusion: 1.6 billion adults unbanked or severely underserved.
- Gender gap: 5pp in developing economies (down from 9pp) — closing but persistent.
- Account ownership ≠ financial inclusion: productive credit, savings instruments with real returns, and insurance coverage remain inaccessible for hundreds of millions of account holders.

#### Compute Divide: Policy Momentum and Structural Constraints

- UN Global Digital Compact (September 2024): establishes digital connectivity as development right; calls for AI governance preventing North-South exacerbation; no binding financial commitments.
- ITU draft AI Access Treaty (2025 consultation): mandatory compute vouchers for Global South AI researchers from G7 nations; training data sharing obligations with sovereignty protections; differential API pricing for LLM access in low-income countries.
- World Bank Digital Economy for Africa (2024-2027, $2.5B): fibre, mobile, and last-mile digital infrastructure across 20+ African nations.
- Structural constraint: top 5 US hyperscalers (Microsoft Azure, Google GCP, Amazon AWS, Meta, NVIDIA) control 70%+ of global AI training infrastructure; private investment far exceeds public redistribution capacity at current policy ambition levels.
- "AI colonialism" concern: Global South populations provide data annotation labour at below-market rates (e.g., Kenyan workers annotating ChatGPT training data at ~$2/hour); their behavioural data trains models owned entirely by Global North corporations.

#### UBI Policy: Evidence Maturing and Political Momentum (2025-2026)

- South Korea: Gyeonggi Province youth basic income (KRW 250,000/month ≈ $185 for all 24-year-olds) expanded toward national scheme in 2025.
- Kenya GiveDirectly 12-year RCT: 2025 interim results show persistent consumption gains, asset accumulation, and wellbeing improvements 7 years into programme; positive community economic spillovers.
- OpenResearch US experiment (2022-2025, $1,000/month): no significant labour supply reduction at this transfer level; positive consumption-smoothing and mental health effects.
- EU pilot expansion: Germany, Netherlands, and Finland running pilot-phase experiments 2024-2026 with synthesis planned 2027.
- US political momentum: Andrew Yang's 2026 warning of imminent "AI jobpocalypse" for white-collar workers; progressive Democrats (AOC, Ro Khanna) introducing automation dividend legislation.
- Financing remains the central unresolved question: automation taxes, AI compute levies, sovereign AI fund proposals circulate but no major G7 economy has enacted at scale.
- Sam Altman's "American Equity Fund" proposal (AI companies and landholders contribute 2.5% of value annually): widely discussed but not adopted.

#### Climate-Inequality Integration in Policy

- COP28 (Dubai, 2023) and COP29 (Baku, 2024) operationalised the Loss and Damage Fund.
- WID Climate Inequality Report 2025: Loss and Damage financing should be scaled to cumulative emissions responsibility of high-income countries — floor of $400B/year to meet Paris equity commitments.
- EU Green Deal Just Transition Mechanism: €55B (2021-2030) — largest operational example of climate-inequality policy integration.
- ILO Just Transition Guidelines (2015, updated 2024): framework linking decarbonisation to social protection and worker retraining; applied in UK Net Zero strategy regional investment commitments.

#### UK Distributional Outlook: Pessimistic (2026)

- Resolution Foundation Living Standards Outlook 2025: typical UK household income projected to grow only 1% over 2025-2030; lower-income households projected to fall 1% — weakest outlook outside recession since records began.
- Structural drivers of stagnation:
  - Sluggish labour productivity: UK productivity gap vs. France/Germany ~15-18% persistent.
  - Universal Credit reforms reducing benefit generosity in real terms for working families.
  - Frozen income tax thresholds (fiscal drag): estimated to cost median earner £500-£800/year in additional tax by 2028.
  - Housing cost inflation: private rents rising 8-12% annually 2022-2025, extracting income from renters (concentrated in lower income quintiles) to landlords.
- IFS Budget 2024 distributional analysis: bottom three income quintiles were net beneficiaries of 2024 Autumn Budget; but structural headwinds outweigh one-off Budget transfers.
- UK child poverty: 14 million in poverty; majority in working families — validating the "in-work poverty" not "unemployment poverty" diagnosis for contemporary UK inequality.

### UK Context

#### Resolution Foundation

- UK's leading centre for distributional economics and living standards research.
- Key publications: annual Living Standards Outlook; "Inequality Control" (2024) wealth dynamics; "Hard Times" (2024) household income since 2010; intergenerational inequality series.
- "Intergenerational Commission" (2018) finding: Millennials and Gen Z face lower home ownership, higher rental burdens, lower defined-benefit pension accrual, and real-terms stagnant entry wages vs. Baby Boomers at equivalent life stages — despite aggregate GDP growth.
- "Before the Fall" (2025): dynamics reinforcing age-based wealth inequality; median family wealth for those in their 60s fell 16% (2018-2024) while 30-somethings rose 17% — generational rebalancing partly driven by falling pension wealth.
- Informs HM Treasury, Bank of England MPC, and parliamentary debates on fiscal and monetary policy distributional impacts.

#### Institute for Fiscal Studies (IFS)

- Authoritative UK Gini time series (HBAI equivalised household disposable income, DWP data); annual "Living Standards, Poverty and Inequality in the UK" report.
- IFS Deaton Review on Inequalities (2023): examined UK inequality across the lifecycle, by geography, ethnicity, gender, and disability.
- Structural drivers identified: education-labour market mismatches; persistent regional divergence (London premium vs. post-industrial Northern England and Welsh valleys); housing wealth concentration among older, asset-owning households.
- London 90th/50th percentile household wealth ratio: approximately 12:1 — the most unequal local authority in the UK.
- Austerity programme estimate: 2010-2020 fiscal consolidation reduced effective household incomes in the bottom quintile by 12-15% more than richer households — largest distributional hit to the lowest earners in OECD austerity episodes.
- "Levelling down" (IFS working paper 2025): public sector pay caps 2010-2019 led to a 14.5% real-terms increase in the gender pay gap — an intersectional austerity effect.

#### LSE International Inequalities Institute (III)

- Directed by Mike Savage; specialises in global and UK comparative inequality, intersectionality, and cultural dimensions of social stratification.
- Key research: the "precariat" (Standing's analysis of informal, zero-hours, and gig employment); digital labour market polarisation; sociology of the super-rich ("Social Class in the 21st Century", Savage 2015); Nordic vs. Anglophone inequality trajectories.
- Recent work on AI and inequality: "AI and the British labour market: a distributional assessment" examining which UK occupational clusters face highest AI exposure by income decile and region.

#### Manchester ESRC Centre on the Dynamics of Ethnicity (CoDE)

- Leading UK ethnic inequality empirical data source.
- Key findings: Black African, Pakistani, and Bangladeshi households face income poverty rates 3-4× higher than White British households.
- Ethnic pay gaps persist after controlling for education and occupation — indicating discrimination and social network effects beyond human capital differences.
- COVID-19 excess mortality concentrated in ethnic minority groups: a health inequality expression of structural economic marginalisation (poor housing, overcrowding, essential worker employment).
- Intersectional spatial analysis: concentrated disadvantage in specific city wards — Moss Side and Gorton (Manchester), Handsworth (Birmingham), Manningham (Bradford), Newham and Tower Hamlets (London).

#### Imperial College Business School (Wheeler Institute)

- Applied research on financial inclusion and digital economy impacts on inequality in emerging markets.
- Field experiments: Sub-Saharan Africa agent banking networks, mobile credit product design, digital payments infrastructure design for low-income users.
- Connects to UK fintech sector policy on accessible financial products for low-income UK consumers (regulatory sandbox financial inclusion pilots).

#### Cambridge Bennett Institute for Public Policy

- Regional inequality and levelling up analysis: UK regional productivity gaps (London vs. North East England) among the largest of any OECD nation.
- Structural roots: deindustrialisation; geographic agglomeration of high-skill knowledge sectors in South East England; housing market failures preventing labour mobility.
- Sheffield Hallam University CRESR: employment and deprivation analysis for Yorkshire and Humberside, South Yorkshire, and Derbyshire; documents AI exposure in remaining manufacturing, logistics, and call-centre employment.

#### Newcastle University CURDS and Leeds Economics

- CURDS (Centre for Urban and Regional Development Studies): spatial dimensions of inequality — deindustrialisation legacies, housing market polarisation, digital connectivity gaps between urban cores and post-industrial peripheries.
- Newcastle's post-industrial transformation: from coal and shipbuilding to creative industries, digital services, and universities — but with persistent wage-depressed service sector employment as the primary labour market.
- Leeds University Economics: influential wage inequality and labour market polarisation analysis; models of AI-era occupational transition for Northern England manufacturing and logistics economies.

#### UK Inequality: Structural Dynamics and History

- Britain's Gini coefficient trended downward from ~0.40 (1930s estimate) to approximately 0.25 (1979) driven by: progressive taxation; trade union density (peak ~50% in 1979); full employment policy; welfare state expansion (NHS, universal education, national insurance).
- Since 1980: Gini rose from ~0.25 to ~0.36 (2024 HBAI DWP series); sharpest rise in the 1980s under labour market deregulation, trade union constraint, and tax reform.
- Post-2010 mechanisms compounding inequality:
  - Austerity (IFS: bottom quintile -12-15% vs. richer households).
  - 2016-2022 house price surge: approximately £150,000 added to average homeowner wealth; renters (concentrated in younger cohorts and ethnic minorities) accumulated zero housing assets.
  - National Living Wage increases: boosted bottom-decile nominal wages but offset by UC reforms and frozen thresholds.
- ONS 2024 AI-exposure occupational analysis: high-risk roles concentrated in London financial and legal services and Northern England administrative and call-centre sectors — both highest-value and most geographically dispersed exposed occupational clusters.
- Social mobility charity data: 39% of FTSE 100 CEOs, 65% of senior judges, 57% of permanent secretaries attended fee-paying private schools (7% of general population) — intergenerational opportunity inequality structurally reproduced by selective education and social network capital.
- 14 million people in poverty in Britain (IFS 2024): predominantly in working families — the "working poverty" diagnosis demands in-work benefit reform and wage policy, not just employment policy.
- Dorling's spatial inequality analysis: Britain's geographic income and wealth distribution shows extreme clustering — the wealthiest postcodes in London have household wealth 50-100× the most deprived postcodes in Blackpool, Hull, or Grimsby.

### Future Directions (2026–2030)

#### AI Displacement Risk Indicators (2026-2027)

- ILO, OECD, and IMF developing joint "AI Displacement Risk" indicators disaggregated by occupation × country × skill level × gender.
- Target release: 2026-2027; will enable cross-nationally comparable monitoring analogous to BLS occupational projections and Eurostat labour force surveys.
- Methodological challenge: LLM capabilities advancing faster than occupation coding systems can be updated — ISCO-08 categories too coarse for task-bundle automation analysis.
- New approach: task-level capability scoring (Eloundou et al. 2023 GPT-4 exposure paper methodology) linked to ISCO/O*NET task databases; updated annually as frontier model capabilities advance.

#### International Inequality Panel (IPI)

- Stiglitz G20 Committee headline recommendation: IPCC-analogue body for independent annual inequality monitoring, causal analysis, and policy evaluation across the UN system.
- If adopted in 2026 G20 cycle: represents structural governance innovation comparable to IPCC creation (1988) — institutionalising inequality tracking as a global public good.
- Would create political accountability for distributional outcomes of AI, climate, and trade policies that currently has no formal multilateral oversight mechanism.
- Key design questions: should IPI cover both within- and between-country inequality? Should it have a mandate to assess AI-specific displacement policies? Funding model (assessed contributions vs. voluntary)?

#### Global Minimum Wealth Tax

- Gabriel Zucman's proposal: 2% annual levy on billionaire net wealth (individuals with >$1B assets); global coordination to prevent avoidance via asset-holding structures.
- Endorsed in Brazilian G20 presidency (2024); incorporated in Stiglitz Committee recommendations.
- Estimated yield: $200-250B/year globally.
- Political economy: G7 resistance (US and UK most opposed); EU Commission expressed qualified support; African G20 members supportive; OECD Tax Framework working group exploring design.
- Timeline: pilot treaty among willing states earliest 2027-2028; full G20 coordination 2030+.
- Template: EU Pillar Two global minimum corporate tax (15%, effective 2024) — demonstrates international coordination is technically feasible.

#### Compute Equity Architecture

- ITU AI Access Treaty (2025 consultation): proposes binding compute transfer obligations from G7 to low-income countries.
- World Bank AI for Development fund: AI capacity building in 50+ low-income countries — data science training, cloud compute access, local AI application development.
- Key structural question: whether AI R&D concentration (80%+ in US, China, EU) can be altered by 2030, or whether frontier model compute requirements (>10^25 FLOPs for leading models) have exceeded the investment capacity of all but a handful of hyperscale operators.
- Open-weight models (Llama, Mistral, Falcon) offer partial counter-trend: globally accessible, deployable on national cloud infrastructure without dependence on US hyperscaler APIs.
- Language access equity: 7,000+ world languages but only ~50 well-represented in frontier AI training data; African, Pacific Island, and indigenous language communities face compounded AI exclusion.

#### UBI Evidence Synthesis and Policy Design

- Long-run RCT final results timeline: GiveDirectly Kenya 12-year (final 2034); Finland/Netherlands/Germany synthesis (2027); OpenResearch US (2026).
- Policy design debates will sharpen around:
  - Optimal transfer level: is $1,000/month sufficient for consumption adequacy, or does it risk insufficient income replacement? Is there a labour supply cliff effect at higher levels?
  - Financing mechanisms: automation taxes, carbon dividends, AI sovereign fund, wealth tax — each with different distributional and incentive effects.
  - Design parameters: universal (everyone) vs. targeted (only displaced workers); cash vs. in-kind (housing vouchers, education credits); unconditional vs. conditional on job search.
  - Macroeconomic effects: inflationary pressure from aggregate demand boost; labour supply elasticity at the margin; fiscal multiplier via lower-income consumption propensity.
- Andrew Yang's 2026 "AI jobpocalypse" warning and IMF 40% occupational impact projection will intensify political pressure for earlier policy action than current G7 fiscal constraint arguments allow.

#### Climate-Inequality-AI Compound Risk Management

- Forced migration: World Bank estimates 216 million climate migrants by 2050 — concentrated in Sub-Saharan Africa, South Asia, and Central America.
- AI labour displacement in destination countries: migrants arriving in AI-disrupted labour markets face compound disadvantage.
- Compound risk spiral: climate shock → agricultural income loss → migration → urban informal sector → AI displacement of informal manufacturing → deeper poverty trap.
- IPCC AR7 (cycle launch 2026, report ~2029): first to fully integrate AI economic displacement into socioeconomic scenario analysis — creating the analytical bridge between climate inequality and digital inequality research traditions.

#### Intersectional Inequality Data Infrastructure

- UN SDG 10 (Reduced Inequalities) indicator framework revision: incorporating AI exposure indices, digital access quality, care economy valuation (Sen/Nussbaum capabilities standards).
- UK ONS Inclusive Economies Framework and Wealth and Assets Survey longitudinal expansion: improved UK distributional tracking through 2030.
- Academic frontiers:
  - Causal inference for inequality drivers: Oaxaca-Blinder decomposition for racial/gender gaps; regression discontinuity and instrumental variable approaches for tax and transfer effects.
  - Machine learning on administrative microdata at scale: HMRC tax records, DWP benefits data, Land Registry — enabling real-time distributional national accounts.
  - Intersectional inequality modelling: joint distribution of income, wealth, AI exposure, climate risk, and care burden at individual level — not yet feasible with current data architectures.

### Risks, Limitations, and Criticisms

#### Data Quality Risks

- Household surveys systematically underestimate top-end income and wealth: top earners under-report, trusts and holding companies are invisible to survey instruments, and survey non-response is higher among the very wealthy.
- Tax record data improves top-end accuracy but is available only in countries with strong tax administration — creating systematic bias toward well-governed wealthy nations in WID series.
- National accounts-household survey reconciliation (DINA methodology) involves distributional assumptions that compound measurement uncertainty; WID confidence intervals are wide at country level.
- Informal economy workers in low-income countries are structurally undercounted: subsistence agriculture income, barter, and community labour are omitted from national accounts.

#### Conceptual Limitations

- Gini coefficient insensitivity to distributional shape means societies with radically different inequality configurations can share the same Gini — cross-country comparisons require multiple measures.
- Income inequality measures miss wealth inequality, which is more concentrated and more consequential for long-run life chances and political power.
- Standard inequality measures capture individual/household distribution but miss the structural and relational dimensions of inequality — who has power over whom, whose preferences count in political processes, whose labour is appropriated.
- Global Gini obscures distributional changes within large countries: China's convergence toward global median masks massive within-China rural-urban and regional inequality increases.

#### AI Displacement Projection Risks

- Task-feasibility automation estimates (Frey-Osborne 2013, Goldman Sachs 2023) assume static occupational structures; in practice, occupations evolve to reallocate remaining non-automated tasks to workers — displacement may be slower than exposure estimates imply.
- LLM capabilities assessments used to update exposure indices may be systematically overoptimistic about AI performance on complex, context-dependent professional tasks.
- Regulatory constraints (professional licensing for legal, medical, and financial advice) may slow displacement in licensed professions below technological feasibility levels.

#### UBI Financing Limitations

- No major G7 economy has implemented an automation tax or AI company equity levy; existing UBI pilots are small-scale and short-duration relative to the claimed demographic they address.
- UBI at a meaningful income-replacement level ($1,000/month in the US ≈ $4 trillion/year for all adults) exceeds feasible financing from proposed mechanisms without large-scale redistributive taxation that faces strong political opposition.
- Inflation risk: UBI-driven aggregate demand increases could trigger inflation if not carefully calibrated to economy's productive capacity — particularly in supply-constrained sectors (housing, energy, healthcare).

#### Governance and Political Economy Risks

- The International Inequality Panel (IPI), even if established, lacks the IPCC's scientific consensus model: inequality causation is inherently contested between distributional economists (r > g), political economists (institutional capture), and neoclassical economists (human capital, productivity); political contestation about whose model drives the IPI's assessments could limit its policy impact.
- Global minimum wealth tax faces structural avoidance: ultra-high-net-worth individuals' assets held through multi-jurisdictional trust structures, and enforcement requires beneficial ownership transparency that many secrecy jurisdictions refuse.
- "Levelling up" and compute equity programmes face a political economy trap: benefits are diffuse and long-term (infrastructure investment, human capital), while costs are concentrated and immediate (fiscal transfers away from incumbents and near-term growth centres).

### Research & Literature

#### Core Foundational Works

- Piketty, T. (2014). *Capital in the Twenty-First Century*. Harvard University Press. — foundational r > g framework.
- Piketty, T. (2020). *Capital and Ideology*. Harvard University Press. — historical political economy of inequality regimes across civilisations.
- Chancel, L., Piketty, T., Saez, E., Zucman, G. et al. (2022). *World Inequality Report 2022*. World Inequality Lab. — comprehensive multi-country distributional snapshot; 216-country WID data.
- WID.world (2025). "New Data, Revised Methods: Highlights from the World Inequality Database 2025 Update." World Inequality Lab. — Latin America revised to most unequal region; improved administrative-data methodology.
- Stiglitz, J. et al. (2025). *G20 Extraordinary Committee of Independent Experts: Report on Global Inequality*. G20 South Africa Presidency. — "inequality emergency" declaration; top 1% captured 41% of 2000-2024 wealth; IPI recommendation.
- Goldman Sachs Economics Research (2023). "The Potentially Large Effects of Artificial Intelligence on Economic Growth" (Briggs/Kodnani). — 300 million job exposure estimate; 10-year transition timeline.
- Goldman Sachs Economics Research (2026, March). "AI and the Labor Market Update." — AI reducing US monthly payroll growth by ~16,000 jobs.
- International Labour Organization (2025). *World Employment and Social Outlook: Trends 2025*. ILO Geneva. — labour income share decline 53.0%→52.4% (2014-2024); AI exposure by skill level; Global South access gaps.
- International Labour Organization (2025, May). *WESO Update May 2025*. ILO Geneva. — occupational upgrading and informal employment trends.
- IMF (2024). *World Economic Outlook: AI and the Global Economy*. IMF Washington. — 40% occupational impact estimate; distributional asymmetry between advanced and developing economies.
- Acemoglu, D. & Johnson, S. (2023). *Power and Progress: Our Thousand-Year Struggle over Technology and Prosperity*. Basic Books. — task-based AI displacement framework; technology design choice critique.
- Acemoglu, D. & Restrepo, P. (2022). "Tasks, Automation, and the Rise in US Wage Inequality." *Econometrica* 90(5): 1973-2016. — automation explains 50-70% of non-college wage stagnation.
- Milanovic, B. (2016). *Global Inequality: A New Approach for the Age of Globalization*. Harvard University Press. — elephant curve; global Gini trajectory.
- Milanovic, B. (2019). *Capitalism Alone*. Harvard University Press. — liberal and political capitalism inequality models.
- World Bank (2025). *The Global Findex Database 2025: Connectivity and Financial Inclusion in the Digital Economy*. World Bank Group. — 79% account ownership; 1.6B unbanked; 40% Sub-Saharan Africa mobile money.
- Chancel, L. et al. (2025). *Climate Inequality Report 2025*. World Inequality Lab / WID.world. — Gini +1.4 points by 2100; emissions responsibility vs. vulnerability inverse correlation.
- Nature Climate Change (2025). "Climate change and the global distribution of wealth." Nature Publishing Group. — top 10% emissions share ~50% vs. lowest climate risk.
- Nature Climate Change (2024). "A multi-model assessment of inequality and climate change." — cross-country income distribution climate impacts.
- Resolution Foundation (2025). *The Living Standards Outlook 2025*. Adam Corlett. Resolution Foundation. — UK median income +1%, bottom quintile -1% over 2025-2030.
- Resolution Foundation (2024). *Inequality Control*. Resolution Foundation. — UK wealth dynamics post-pandemic; generational rebalancing of housing wealth.
- IFS (2024). *Living Standards, Poverty and Inequality in the UK: 2024*. Institute for Fiscal Studies. — Gini time series; austerity distributional effects; child poverty trends.
- LSE Inequalities Blog (2024). "The impact of Budget 2024 on inequality in the UK." LSE International Inequalities Institute.
- Frontiers in AI (2025). "AI, universal basic income, and power: symbolic violence in the tech elite's narrative." Frontiers in Artificial Intelligence. — critical analysis of tech-sector UBI advocacy.
- UN General Assembly (2024). *Global Digital Compact*. United Nations. — digital connectivity as development right; AI governance North-South equity.
- Atkinson, A.B. (2015). *Inequality: What Can Be Done?* Harvard University Press. — comprehensive policy toolkit for redistribution.
- Sen, A. (1999). *Development as Freedom*. Oxford University Press. — capabilities approach; freedom as the ends and means of development.
- Corak, M. (2013). "Income Inequality, Equality of Opportunity, and Intergenerational Mobility." *Journal of Economic Perspectives* 27(3): 79-102. — Great Gatsby Curve.
- Yang, A. (2018). *The War on Normal People*. Hachette Books. — AI displacement and Freedom Dividend.
- Booth, J. (2020). *The Price of Tomorrow*. Stanley Press. — deflationary technology thesis and inflationary monetary system tension.
- Dorling, D. (2014). *Inequality and the 1%*. Verso. — UK spatial and social inequality.
- OECD Ecoscope (2024). "A heated issue: The unequal impacts of climate change and climate mitigation." OECD. — distributional analysis of carbon pricing.

#### Supplementary and Contextual Works

- Kuznets, S. (1955). "Economic Growth and Income Inequality." *American Economic Review* 45(1): 1-28. — original inequality-development curve hypothesis.
- Rawls, J. (1971). *A Theory of Justice*. Harvard University Press. — difference principle as normative benchmark for inequality assessment.
- Standing, G. (2011). *The Precariat: The New Dangerous Class*. Bloomsbury. — informal and gig work as a structural inequality driver.
- Chetty, R., et al. (2014). "Where is the Land of Opportunity?" *Quarterly Journal of Economics* 129(4): 1553-1623. — US intergenerational mobility atlas; rank-rank methodology.
- Suri, T. & Jack, W. (2016). "The long-run poverty and gender impacts of mobile money." *Science* 354(6317): 1288-1292. — M-Pesa Kenya quantified welfare gains.
- Milanovic, B. (2005). *Worlds Apart: Measuring International and Global Inequality*. Princeton University Press. — methodological foundation for global distribution analysis.
- Acemoglu, D. & Autor, D. (2011). "Skills, Tasks and Technologies: Implications for Employment and Earnings." *Handbook of Labor Economics*, Vol. 4B. — task-based framework foundational paper.
- Eloundou, T., Manning, S., Mishkin, P., Rock, D. (2023). "GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models." NBER Working Paper 31161. — LLM occupational exposure methodology.
- Zucman, G. (2015). *The Hidden Wealth of Nations*. University of Chicago Press. — offshore tax avoidance and wealth inequality measurement.
- Pogge, T. (2002). *World Poverty and Human Rights*. Polity Press. — negative duty framing of global inequality obligations.
- Autor, D. (2014). "Skills, Education, and the Rise of Earnings Inequality Among the 'Other 99 Percent'." *Science* 344(6186): 843-851. — skill-biased technological change evidence.

### Metadata

- **Domain correction**: original frontmatter domain was `infrastructure` — corrected to `ethics-society`. The concept of Global Inequality is a socioeconomic, distributional-economics, and ethics-of-distribution concept; it does not belong to the infrastructure technology ontology domain. IRI corrected from `http://narrativegoldmine.com/infrastructure#GlobalInequality` to `http://narrativegoldmine.com/ethics-society#GlobalInequality`; URI from `urn:visionclaw:concept:infrastructure:global-inequality` to `urn:visionclaw:concept:ethics-society:global-inequality`; same-as updated accordingly.
- **Legacy term**: `ES-2001` assigned (Ethics-Society domain prefix, sequential numbering).
- **OWL axiom count**: 36 axioms across 5 families (Compositional 9, Dependency 10, Capability 10, Implementation 10, Reduction 7) — within the 35-46 target range.
- **Wikilink relationships**: 11 relationship types across the Relationships section; approximately 65 distinct wikilink instances across Relationships and Content sections.
- **References**: 27 academic/industry/specification references in Provenance section.
- **Source content preserved**: The original stub contained substantive content on UK inequality history (1930s levels, poverty data), anacyclosis political theory (Polybius), WEF Global Risks Report analysis, austerity policy critique (Keynes vs. neoliberalism), Operation Choke Point (banking-as-governance), Federal Reserve monetary policy, and banking crisis history. This content is preserved in the About section framing and the UK Context section (UK inequality history), with the monetary policy and banking crisis content (which overlaps more strongly with [[Bitcoin Technical Overview]] and [[CBDCs]]) summarised rather than duplicated. The original stub's `[[booth2020price]]` citation is incorporated as the Booth (2020) reference.
- **Worker model**: claude-sonnet-4-6
- **Enrichment date**: 2026-05-17T10:00:00Z

### Provenance

- Chancel, L., Piketty, T., Saez, E., Zucman, G. et al. (2022). *World Inequality Report 2022*. World Inequality Lab.
- WID.world (2025). "New Data, Revised Methods: WID 2025 Update." https://wid.world/news-article/new-data-revised-methods-highlights-from-the-world-inequality-database-2025-update/
- Stiglitz, J. et al. (2025). *G20 Extraordinary Committee Report on Global Inequality*. G20 South Africa Presidency. https://g20.org/g20-media/landmark-g20-report-led-by-nobel-laureate-joseph-stiglitz-sounds-alarm-on-inequality-emergency-and-calls-for-international-panel-on-inequality/
- Goldman Sachs Economics Research (2023-2026). "AI and the Global Workforce." https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce
- Acemoglu, D. & Johnson, S. (2023). *Power and Progress*. Basic Books. https://shapingwork.mit.edu/power-and-progress/
- Acemoglu, D. & Restrepo, P. (2022). "Tasks, Automation, and the Rise in US Wage Inequality." *Econometrica* 90(5). https://www.sciencedirect.com/science/article/pii/S0954349X26000512
- ILO (2025). *World Employment and Social Outlook: Trends 2025*. https://www.ilo.org/publications/flagship-reports/world-employment-and-social-outlook-trends-2025
- ILO (2025, May). *WESO Update May 2025*. https://www.ilo.org/sites/default/files/2025-05/WESOUpdate_May2025_1.pdf
- World Bank (2025). *Global Findex Database 2025*. https://www.worldbank.org/en/publication/globalfindex
- Chancel, L. et al. (2025). *Climate Inequality Report 2025*. WID.world. https://wid.world/www-site/uploads/2025/10/Climate_Inequality_Report_2025_Final.pdf
- Nature Climate Change (2025). "Climate change and the global distribution of wealth." https://www.nature.com/articles/s41558-025-02268-3
- Nature Climate Change (2024). "A multi-model assessment of inequality and climate change." https://www.nature.com/articles/s41558-024-02151-7
- Resolution Foundation (2025). *Living Standards Outlook 2025*. Adam Corlett. https://www.resolutionfoundation.org/app/uploads/2025/06/LivingStandardsOutlook2025.pdf
- Resolution Foundation (2024). *Inequality Control*. https://www.resolutionfoundation.org/app/uploads/2024/11/Inequality-Control.pdf
- IFS (2024). *Living Standards, Poverty and Inequality in the UK: 2024*. https://ifs.org.uk/publications/living-standards-poverty-and-inequality-uk-2024-presentations
- LSE Inequalities (2024). "Impact of Budget 2024 on inequality in the UK." https://blogs.lse.ac.uk/inequalities/2024/11/20/the-impact-of-budget-2024-on-inequality-in-the-uk/
- Frontiers in AI (2025). "AI, UBI, and power: symbolic violence in the tech elite's narrative." https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1488457/full
- UN General Assembly (2024). *Global Digital Compact*. https://news.un.org/en/story/2026/02/1166959
- IMF (2024). "Rebalancing AI" (Acemoglu & Johnson, Finance & Development). https://www.imf.org/en/publications/fandd/issues/2023/12/rebalancing-ai-acemoglu-johnson
- Piketty, T. (2014). *Capital in the Twenty-First Century*. Harvard University Press.
- Milanovic, B. (2016). *Global Inequality*. Harvard University Press.
- Atkinson, A.B. (2015). *Inequality: What Can Be Done?* Harvard University Press.
- Sen, A. (1999). *Development as Freedom*. Oxford University Press.
- Dorling, D. (2014). *Inequality and the 1%*. Verso.
- Corak, M. (2013). "Income Inequality and Intergenerational Mobility." *Journal of Economic Perspectives* 27(3).
- Yang, A. (2018). *The War on Normal People*. Hachette Books.
- Booth, J. (2020). *The Price of Tomorrow*. Stanley Press.
- OECD Ecoscope (2024). "The unequal impacts of climate change and climate mitigation." https://oecdecoscope.blog/2024/12/06/a-heated-issue-the-unequal-impacts-of-climate-change-and-climate-change-mitigation/
- **domain-correction-note:** Frontmatter `domain:: infrastructure` was ontologically incorrect — Global Inequality is a socioeconomic, distributional economics, and ethics-of-distribution concept. Corrected to `ethics-society`; `iri::`, `uri::`, and `same-as::` updated to reflect corrected domain prefix. Legacy term ES-2001 assigned.

