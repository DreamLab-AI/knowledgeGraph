public:: true

elevatedFrom:: [[Could]]
# Epistemic Modality Marker
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9582bb145c4bcd2d40cc6be37b396ca7bf78b077c7c52fc129731d2614cafb75",
  "@type": "Page",
  "vc:slug": "epistemic-modality-marker",
  "title": "Epistemic Modality Marker",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dialogue-systems",
      "vc:label": "Dialogue Systems"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Could"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:epistemic-modality-marker",
  "@type": "Class",
  "label": "Epistemic Modality Marker",
  "definition": "An Epistemic Modality Marker is a lexical or grammatical element — such as the modal verbs may, might, could and must, or hedges like perhaps and possibly — that encodes a speaker's degree of certainty or commitment toward a proposition. Detecting and generating such markers is central to hedge detection, uncertainty-aware natural language processing and calibrated dialogue systems.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computational-linguistics",
        "label": "Computational Linguistics"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dialogue-systems",
        "label": "Dialogue Systems"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      }
    ]
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:could:0e031e954a43",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9582bb145c4bcd2d40cc6be37b396ca7bf78b077c7c52fc129731d2614cafb75"
  },
  "vc:resolutions": [
    {
      "raw": "[[Dialogue Systems]]",
      "resolved": "urn:visionflow:linked:dialogue-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - An Epistemic Modality Marker is a lexical or grammatical element in natural language that encodes a speaker's or writer's degree of certainty, possibility, or commitment toward the truth of a proposition — a foundational category in [[Linguistics]], [[Computational Linguistics]], and [[Natural Language Processing]] that governs how uncertainty, hedging, and evidential stance are expressed and computationally detected. In English, the core Epistemic Modality Markers are the modal auxiliary verbs — may, might, could, would, should, must — alongside a broader set of lexical hedges (perhaps, possibly, apparently, seem, appear, suggest, indicate, assume) and epistemic adverbials (certainly, probably, possibly, allegedly). Each marker carries two key parameters: a value indicating the speaker's degree of commitment along the scale from low certainty (could, might, possibly) through medium certainty (probably, likely, should) to high certainty (must, certainly, clearly), and an orientation indicating whether the epistemic stance is directed toward the speaker's own knowledge state (subjective epistemic) or toward objective evidence (evidential or objective epistemic). The modal verb "could", for instance, encodes low-to-medium possibility and covers multiple semantic domains simultaneously: it expresses past ability ("she could swim at age five"), conditional permission ("you could leave early if needed"), polite pragmatic softening ("could you help?"), and — most relevant for [[Natural Language Processing]] — epistemic possibility and hypothetical contingency ("this could be the reason"). This semantic polyfunctionality makes Epistemic Modality Markers a fundamental challenge for automatic [[Natural Language Understanding]], [[Information Extraction]], [[Dialogue Systems]], and [[Hedge Detection]] systems, since the same surface form conveys factual commitment in one context and uncertainty in another. In [[Biomedical Text Mining]] and clinical [[Natural Language Processing]], Epistemic Modality Markers are a primary mechanism by which authors distinguish factual claims from speculative hypotheses, and their automatic detection is essential for pharmacovigilance, clinical decision support, and scientific claim extraction. In [[Large Language Models]], Epistemic Modality Markers are both inputs that the model must interpret correctly and outputs that the model generates to calibrate expressed uncertainty — with recent research (2024–2026) demonstrating that LLMs frequently under-hedge, generating overconfident outputs that users can mistakenly interpret as factual claims, with measurable effects on user over-reliance and downstream decision quality.

- ### Semantic Classification
  - owl-class:: ling:EpistemicModalityMarker
  - owl-role:: LinguisticFeature | ComputationalPragmatics | HedgingMechanism
  - owl-inferred:: ling:ModalAuxiliary, nlp:HedgeCue, ling:EvidentialMarker
  - belongs-to-domain:: [[Natural Language Processing]]
  - implemented-in-layer:: [[Dialogue Systems]]

- ### Relationships
  - is-subclass-of:: [[Natural Language Processing]], [[Computational Linguistics]], [[Pragmatics]]
  - has-part:: [[Modal Auxiliary Verb]], [[Hedge Cue]], [[Evidential Marker]], [[Epistemic Adverbial]], [[Certainty Scale]], [[Polarity Marker]]
  - requires:: [[Natural Language Understanding]], [[Tokenisation]], [[Parsing]], [[Semantic Role Labelling]], [[Word Sense Disambiguation]]
  - enables:: [[Hedge Detection]], [[Information Extraction]], [[Fact Checking]], [[Clinical NLP]], [[Sentiment Analysis]], [[Uncertainty Quantification]], [[Dialogue Systems]], [[Question Answering]]
  - implements:: [[Pragmatics]], [[Speech Act Theory]], [[Hedging Theory]], [[Evidentiality]]
  - depends-on:: [[Computational Linguistics]], [[Natural Language Processing]], [[Syntax]], [[Semantics]]
  - supports:: [[Biomedical Text Mining]], [[Pharmacovigilance]], [[Scientific Claim Extraction]], [[Clinical Decision Support]], [[Large Language Models]]
  - uses:: [[Conditional Random Fields]], [[Transformer Architecture]], [[Attention Mechanism]], [[Word Embeddings]], [[Corpus Linguistics]], [[Annotation Schemes]]
  - contrasts-with:: [[Assertive Marker]], [[Deontic Modality]], [[Dynamic Modality]]
  - related-to:: [[Dialogue Systems]], [[Large Language Models]], [[Named Entity Recognition]], [[Coreference Resolution]], [[Stance Detection]], [[Subjectivity Analysis]], [[Speculation Detection]]
  - standardized-by:: [[CoNLL 2010 Shared Task]], [[BioNLP Shared Task]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:hasPart ling:ModalAuxiliaryVerb))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:hasPart nlp:HedgeCue))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:hasPart ling:EvidentialMarker))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:hasPart ling:EpistemicAdverbial))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:hasPart ling:CertaintyScale))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:hasPart ling:PolarityMarker))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:requires nlp:NaturalLanguageUnderstanding))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:requires nlp:Tokenisation))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:requires nlp:Parsing))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:requires nlp:WordSenseDisambiguation))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:dependsOn ling:ComputationalLinguistics))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:dependsOn ling:Semantics))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:dependsOn ling:Syntax))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:enables nlp:HedgeDetection))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:enables nlp:InformationExtraction))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:enables nlp:FactChecking))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:enables nlp:ClinicalNLP))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:enables nlp:DialogueSystems))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:enables nlp:QuestionAnswering))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:enables nlp:SpeculationDetection))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:implements ling:Pragmatics))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:implements ling:SpeechActTheory))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:implements ling:HedgingTheory))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:implements ling:Evidentiality))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:uses nlp:ConditionalRandomFields))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:uses ai:TransformerArchitecture))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:uses ling:CorpusLinguistics))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:reducesTo ling:ModalAuxiliaryVerb))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:reducesTo nlp:HedgeCue))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:reducesTo ling:EvidentialMarker))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:reducesTo ling:LexicalHedge))
      ```
  - ## Support Relationships
    - ```
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:supports nlp:BiomedicalTextMining))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:supports nlp:Pharmacovigilance))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:supports nlp:ScientificClaimExtraction))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:supports ai:LargeLanguageModels))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:supports nlp:ClinicalDecisionSupport))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:relatedTo nlp:StanceDetection))
      SubClassOf(ling:EpistemicModalityMarker
        ObjectSomeValuesFrom(ai:relatedTo nlp:SubjectivityAnalysis))
      ```
  - ## About
    - Epistemic Modality Markers belong to the broader category of modality in linguistics, which encompasses how language expresses speakers' attitudes toward the content of their utterances. Linguistic modality is traditionally divided into three main categories: epistemic modality (the speaker's assessment of possibility, probability, or certainty); deontic modality (obligation, permission, necessity with respect to norms or rules — "you must submit by Friday"); and dynamic modality (ability or willingness — "he can run fast"). Epistemic modality specifically concerns the speaker's knowledge state and commitment to the truth of a proposition. Palmer (1986, 2001) provides the canonical typological account of modality across languages, noting that while English encodes epistemic modality primarily through modal auxiliaries and adverbs, many languages use dedicated grammatical morphemes (modal particles, evidential suffixes, tense-mood-aspect paradigms) for the same communicative purpose.
    - The epistemic modal verbs of English — may, might, could, would, should, must — are historically derived from Old and Middle English verbs that originally expressed dynamic (ability/power) meanings, gradually acquiring epistemic and deontic interpretations through pragmatic inference and grammaticalisation. This historical layering explains the persistent semantic polyfunctionality of English modals: "could" still carries both its original dynamic sense ("she could swim at five") and its grammaticalised epistemic sense ("this could be correct"). Coates (1983) and Papafragou (2000) provide detailed accounts of the semantic development and polyfunctionality of English modal verbs. The key property distinguishing Epistemic Modality Markers from other hedges is that they express the speaker's epistemic state toward the entire propositional content of the utterance, rather than hedging a specific noun phrase or attribute.
    - In the formal semantics tradition following Kratzer (1981, 1991), modal expressions are analysed as quantifiers over possible worlds, with their interpretation determined by two conversational backgrounds: the modal base (the set of propositions treated as given in context, typically the speaker's information state for epistemic modals) and the ordering source (the standard relative to which worlds are ranked, typically normalcy or stereotypicality for epistemic interpretations). Under this analysis, "it might rain" is true if and only if in some world in the modal base that is sufficiently close to the actual world (by the ordering source), it rains. This possible-worlds semantics provides a formal foundation for compositional semantic analysis of modal expressions in computational formal semantics systems (Montague grammar, Type-Logical Grammar, CCG). In [[Natural Language Processing]], formal semantics approaches have been used to build rule-based systems for modality detection, but statistical and neural approaches now dominate the field.
    - The role of Epistemic Modality Markers in [[Pragmatics]] and discourse extends beyond single-utterance truth conditions to the management of speaker commitment and social face. Lakoff (1972) introduced the term "hedge" to describe linguistic devices that qualify the speaker's commitment to the truth of an assertion, noting that hedges manage both epistemic and social dimensions: a speaker who says "it could be that the report is wrong" both expresses genuine uncertainty and protects social face by avoiding a direct assertion that could later be shown false. Hyland (1998) documented the systematic use of hedges in academic research articles across disciplines, demonstrating that hedging is not evasive or epistemically weak but is a crucial rhetorical tool enabling scientists to make claims commensurate with their evidence, invite reader engagement, and protect priority while maintaining modesty about certainty. Cross-disciplinary and cross-linguistic studies (Markkanen and Schröder, 1997; Hyland, 2000) show that epistemic hedging frequency varies significantly between disciplines (natural sciences hedge differently from social sciences) and between languages and cultures (East Asian academic discourse patterns differ systematically from European norms). These findings have direct implications for [[Machine Translation]] and cross-lingual [[Natural Language Processing]] systems that must preserve or adapt epistemic stance across language boundaries.

  - ## Components / Architecture
    - **Modal Auxiliary Verbs (core category)**
      - Primary epistemic modals ordered by certainty value: might (lowest) < could < may < should < would < will < must (highest)
      - Might — typically low probability (possibly true but unlikely in context); "it might rain tonight"; used in research articles to suggest possible but uncertain implications
      - Could — low-to-medium possibility; also covers past ability and conditional permission; most polyfunctional English modal; "this could explain the findings"
      - May — medium possibility, common in formal and academic register; "these results may indicate a causal relationship"; distinguished from might by slightly higher commitment in some registers
      - Should — normative expectation (close to deontic overlap); "results should be interpreted cautiously"; used in academic text to convey inferred expectation
      - Would — conditional and habitual; epistemic use in hypothetical scenarios ("this would suggest..."); also marks polite requests
      - Must — high epistemic necessity based on inference; "these data must reflect measurement error"; distinct from deontic must (obligation)
      - Can — dynamic ability in main use; epistemic possibility in specific constructions; "such processes can occur under extreme conditions"
    - **Lexical Hedges (epistemic verbs and adjectival/adverbial hedges)**
      - Epistemic verbs: seem, appear, suggest, indicate, assume, believe, think, suppose, speculate, estimate
      - Epistemic adverbs: possibly, probably, perhaps, presumably, apparently, allegedly, supposedly, roughly, approximately
      - Epistemic adjectives/nouns: possible, probable, likely, uncertain, approximate, roughly, approximately, plausible
      - Approximators: about, around, roughly, approximately, nearly (reduce commitment to precise quantity claims)
      - Shields: "it seems to me that", "in our view", "I believe", "the evidence suggests" — attribute the epistemic stance explicitly to the speaker's knowledge state
    - **Hedge Scope Detection**
      - The hedge cue (modal verb or lexical hedge) projects an epistemic scope over a propositional span — the text fragment whose factual status is qualified
      - Scope detection is a sequence labelling task: given a cue word, determine which tokens fall within its scope (in-scope = uncertain; out-of-scope = factual)
      - CoNLL 2010 Shared Task on Hedge Detection formalised cue + scope detection as a competitive NLP benchmark
      - BioScope corpus (Vincze et al. 2008) provided 20,000 annotated sentences from biomedical abstracts, full papers, and clinical reports with hedge cue and scope annotations
      - NegEx and ConText rule-based systems provided early clinical NLP implementations; conditional random field (CRF) models later dominated; transformer-based models (BERT, BioBERT) now achieve near-human performance on BioScope
    - **Certainty Value and Orientation Dimensions**
      - Certainty value — a scalar or categorical assessment: possible (low) / probable (medium) / certain (high); some annotation schemes use a three-way or five-way scale
      - Orientation — epistemic (speaker's knowledge/belief), evidential (based on external evidence or source), approximative (approximation of quantity), conditional (truth contingent on other conditions)
      - The NaCTeM meta-knowledge annotation scheme (Thompson et al., 2011) for biomedical text codes hedge annotations across three dimensions: knowledge type (investigation, observation, general), certainty level (L1–L4 from low to high), and perspective (author, other agent)
    - **Annotation and Dataset Layer**
      - BioScope (Vincze et al., 2008) — biomedical hedge and negation scope; gold standard for hedge detection models
      - CoNLL 2010 Shared Task (Farkas et al., 2010) — in-domain (biological papers) and out-of-domain (Wikipedia) hedge detection; defined the community benchmark
      - FactBank (Saurí and Pustejovsky, 2009) — event factuality annotation including epistemic markers as factuality modifiers
      - FACTUALITY — fact/opinion/uncertain sentence-level annotation in news text
      - Clinical corpora (i2b2 Challenge annotations, MIMIC-III notes) — epistemic modality annotation for clinical NLP; uncertainty in diagnosis, prognosis, and treatment proposals

  - ## Use Cases / Major Families
    - **Biomedical and clinical text mining** — Epistemic Modality Markers are the primary textual mechanism by which scientific authors communicate the degree of confidence in experimental findings, distinguish established facts from speculative interpretations, and signal the scope of generalisability claims. In [[Biomedical Text Mining]] and pharmacovigilance, the difference between "compound X causes hepatotoxicity" and "compound X may cause hepatotoxicity" has immediate clinical significance for drug safety signal extraction. FDA's Adverse Event Reporting System (FAERS) processing pipelines use Epistemic Modality Marker detection to score the factuality of reports, weighting strongly hedged reports lower in signal aggregation. In clinical NLP, UIMA-based systems (e.g. cTAKES) detect negation and epistemic uncertainty on clinical named entities (diagnoses, medications, findings) to distinguish "patient has pneumonia" from "patient may have pneumonia" or "patient denied having pneumonia" — essential for accurate electronic health record phenotyping and clinical decision support in NHS clinical coding systems.
    - **Scientific claim extraction and fact checking** — Automated scientific literature mining systems must distinguish factual claims (which can be entered into knowledge graphs and cited as established) from hedged hypotheses and speculative interpretations. SemEval shared tasks on scientific claim detection have incorporated Epistemic Modality Marker detection as a subcomponent. In misinformation and fact-checking systems, Epistemic Modality Markers provide a signal for identifying speculative or uncertain claims presented as established facts — the characteristic linguistic pattern of pseudoscientific or misleading health claims, which tend to strip hedges from source material.
    - **Dialogue systems and conversational AI** — In [[Dialogue Systems]], Epistemic Modality Markers serve two roles: as system outputs encoding the AI's expressed certainty (enabling users to calibrate trust in system responses), and as user inputs encoding the user's question type (genuine information request, hypothetical exploration, or soft request). Systems that incorrectly interpret a user's epistemic hedging ("could you perhaps show me the settings?") as a genuine question about capability rather than a polite directive will generate unhelpful responses. Task-oriented dialogue systems require detection of the speaker's epistemic stance on domain entities — "I think I may have a reservation" versus "I have a reservation" — to correctly initialise dialogue state tracking. Open-domain conversational AI ([[Large Language Models]] deployed as chatbots) must use appropriate Epistemic Modality Markers in their outputs to communicate uncertainty, prevent over-reliance, and maintain calibration.
    - **Large Language Model calibration and uncertainty expression** — Research from 2024–2026 has established that [[Large Language Models]] have a systematic tendency to under-hedge, expressing higher certainty than their internal probability estimates warrant. ACL 2024 research (Xiong et al.) demonstrated that LLMs are frequently reluctant to express uncertainty verbally even when their intrinsic uncertainty (measured by output token probability) is high. EMNLP 2024 work showed that LLMs can be prompted via few-shot examples to explicitly elicit epistemic markers as part of their responses, improving calibration at the cost of verbosity. Studies of GPT-4o (May 2024) and Llama 3.1 (July 2024) models showed that the choice of Epistemic Modality Markers in model output significantly affects user accuracy and reliance — users who receive hedged responses ("this might be correct") were less likely to over-rely than users receiving assertive outputs ("this is correct"). ArXiv 2507.06306 (2025) documented human over-reliance on overconfident LLM outputs across languages, directly linking epistemic over-assertion to accuracy degradation in user decision tasks. ArXiv 2410.20774 (2024) showed that epistemic markers in LLM-generated evaluation text affect the quality of LLM-based evaluation, with hedged evaluations receiving different human trust levels than assertive evaluations from identical LLM judges.
    - **Cross-linguistic and cross-cultural NLP** — Bibliometric analysis of epistemic modality research (Sagepub 2025, Dalimunte et al.) identified a significant rise in publications post-2016, concentrated in cross-linguistic comparisons, diachronic studies of modality evolution, and computational corpus approaches. Different languages encode epistemic stance through different grammatical mechanisms: Turkish uses evidential suffixes that compulsorily mark whether information is directly witnessed or inferred; Japanese uses sentence-final particles (だろう, かもしれない) for epistemic gradation; Spanish and French employ modal periphrases alongside subjunctive mood. [[Machine Translation]] systems that translate epistemic markers must preserve epistemic force across languages with different modal paradigms, a known failure mode for neural machine translation that has motivated dedicated epistemic-aware translation research.
    - **Research article hedge analysis** — Corpus studies of academic genre (Hyland 1998; Markkanen and Schröder 1997; cross-disciplinary studies 2024–2025) demonstrate that Epistemic Modality Markers are central to the rhetorical structure of research articles: they enable scientists to make precisely calibrated claims commensurate with their evidence, protect from accusations of overclaiming, and establish a collaborative stance that invites reader engagement. The most frequently used epistemic modal auxiliaries in linguistics and natural science research articles are may, would, and could (epistemic modal verbs corpus studies, ResearchGate, 2023). Automated corpus analysis tools (AntConc, Sketch Engine, WMatrix) enable large-scale quantification of hedging patterns across disciplines and journals, informing academic writing pedagogy and automated assessment of claim strength in scholarly texts.

  - ## Academic Context
    - The formal linguistic study of modality has a long history in philosophy and linguistics, but epistemic modality received dedicated computational treatment only from the 1990s onward. The key foundational works and research communities include:
    - **Formal Semantics tradition** — Kratzer (1981) "The notional category of modality" and Kratzer (1991) "Modality" established the possible-worlds semantics for modal expressions that underpins formal compositional approaches. von Fintel (2006) "Modality and Language" provided a comprehensive survey of the semantics-pragmatics interface for modal expressions. Papafragou (2000) "Modality: Issues in the Semantics-Pragmatics Interface" addressed the divide between semantic value and pragmatic enrichment of modals, directly relevant to the NLP challenge of sense disambiguation.
    - **Corpus linguistics tradition** — Coates (1983) "The Semantics of Modal Auxiliary Verbs" pioneered corpus-based analysis of English modal polyfunctionality. Biber et al. (1999) "Longman Grammar of Spoken and Written English" quantified modal distribution across registers (academic, conversational, news, fiction) in the Longman Corpus, documenting that may and might are most common in academic writing while would dominates conversation. Hyland (1998) "Hedging in Scientific Research Articles" established the foundational analysis of hedging as a rhetorical device in academic genre, demonstrating systematic variation across disciplines.
    - **Computational NLP tradition** — The CoNLL 2010 Shared Task (Farkas et al. 2010) "The CoNLL-2010 Shared Task: Learning to Detect Hedges and their Scope in Natural Language Text" established the first community NLP benchmark for hedge detection, drawing on biomedical and Wikipedia text. The BioScope corpus (Vincze et al. 2008) provided the primary annotated resource. The NaCTeM group (Sophia Ananiadou and colleagues, University of Manchester) pioneered meta-knowledge annotation frameworks for biomedical epistemic markers. The BioNLP Shared Task series (2009, 2011, 2013) included negation and speculation detection as a subtask.
    - **UncertaiNLP Community** — The UncertaiNLP workshop series (inaugural EACL 2024, continued 2025 as a standalone workshop) has become the primary venue for uncertainty-aware NLP research bridging Epistemic Modality Marker detection, LLM calibration, and annotation uncertainty. Research presented at UncertaiNLP 2025 included: methods for detecting epistemic markers as calibration signals in LLM outputs; cross-linguistic uncertainty expression studies; and annotation disagreement analysis for subjective epistemic constructions.
    - **Mechanistic interpretability** — Recent (2024–2025) work on LLM internals uses probing classifiers over activation spaces to identify where epistemic modality is encoded inside transformer models, providing mechanistic evidence that models develop internal representations of certainty gradations independent of surface-form output tokens. These studies contribute to the reliability and safety research agenda of understanding what LLMs "believe" internally versus what they express in outputs.

  - ## Current Landscape (2026)
    - The study and computational handling of Epistemic Modality Markers has been significantly energised by the proliferation of [[Large Language Models]] as deployed systems, raising urgent practical questions about when and how AI systems express, calibrate, and communicate uncertainty to users.
    - **LLM under-hedging and over-reliance** — ArXiv 2507.06306 (June 2025) "Humans overrely on overconfident language models, across languages" provides cross-lingual evidence that users systematically over-rely on LLM outputs when the model expresses high epistemic confidence through lack of hedging markers, even when that confidence is uncorrelated with accuracy. ACL 2024 research (Xiong et al., "Can Large Language Models Faithfully Express Their Intrinsic Uncertainty in Words?") showed that GPT-4o and Llama 3.1 models fail to reliably convert internal probability uncertainty into appropriate verbal epistemic markers, with models frequently expressing certainty on questions where their token-level probabilities reveal genuine uncertainty. The Impact of Language Models' Reluctance to Express Uncertainty (ACL 2024, Baan et al.) demonstrates that this under-hedging has measurable downstream effects on user accuracy and over-reliance calibration. EMNLP 2024 (Xiong et al.) extended this analysis to show that few-shot prompting with examples of epistemic marker use improves LLM calibration in verbal uncertainty expression.
    - **Multilingual epistemic marker research** — Bibliometric analysis across 2005–2024 (Sagepub/SAGE Open 2025) identified a significant rise in cross-linguistic epistemic modality publications from 2016 onward, correlated with growth in multilingual NLP corpora and pre-trained multilingual models. Research has expanded beyond English to cover Arabic, Chinese, Turkish, Japanese, and European languages, often revealing that modality categories that are distinct in English (epistemic vs. evidential) are grammatically fused in other languages, requiring language-specific annotation schemes.
    - **Hedge detection in biomedical NLP** — ArXiv 2405.13319 (2024) "You should probably read this: Hedge Detection in Text" applied modern transformer-based classifiers to hedge detection, demonstrating substantial gains over earlier CRF-based baselines on standard benchmarks. Clinical NLP systems processing NHS discharge summaries, radiology reports, and GP consultation notes increasingly integrate Epistemic Modality Marker detection as a first-pass annotation layer before clinical named entity recognition, to filter speculative from confirmed clinical findings. The SemEval 2024 conference included tasks related to subjectivity, uncertainty, and epistemic stance detection in social media and news text.
    - **LLM calibration and epistemic safety** — ArXiv 2509.24202 (2025) "Can Large Language Models Express Uncertainty Like Humans?" documents systematic differences between human and LLM epistemic marker usage, noting that humans modulate hedging based on topic difficulty, social context, and communicative purpose in ways that current LLMs approximate poorly. The UncertaiNLP 2025 workshop programme identified epistemic marker generation as a key bottleneck in trustworthy AI deployment. The Prospect Theory paper (arXiv 2508.08992, 2025) shows LLMs exhibit instability in decision-making under epistemic uncertainty, with inconsistent use of hedging markers across logically equivalent problem framings.
    - **Clinical mapping to epistemic uncertainty** — ArXiv 2511.22402 "Mapping Clinical Doubt: Locating Linguistic Uncertainty in LLMs" analyses how epistemic uncertainty in clinical reasoning is surfaced through epistemic markers in LLM-generated clinical text, finding that LLMs underuse markers like "might suggest", "could indicate", and "appears consistent with" in clinical contexts where genuine diagnostic uncertainty exists. This has implications for AI clinical decision support deployment in UK NHS settings, where epistemic over-assertion in AI outputs could affect clinician judgement.

  - ## UK Context
    - UK linguistics and computational NLP research has made substantial contributions to the study and automatic processing of Epistemic Modality Markers, spanning academic linguistics departments, biomedical text mining centres, and applied clinical NLP groups.
    - **University of Manchester (NaCTeM)** — The National Centre for Text Mining (NaCTeM), led by Sophia Ananiadou (School of Computer Science), has been the leading UK academic centre for biomedical text mining including Epistemic Modality Marker and hedge detection. The NaCTeM meta-knowledge annotation scheme (Thompson et al., 2011) for biomedical events provided a principled multi-dimensional framework for epistemic annotation covering certainty level, knowledge type, and perspective. NaCTeM developed the Argo text mining workbench incorporating negation and speculation detection components. Manchester's CoNLL 2010 participation and BioNLP shared task contributions established UK leadership in hedge detection NLP.
    - **University of Edinburgh** — Edinburgh's School of Informatics hosts strong computational linguistics and NLP research (Bonnie Webber, Mark Steedman) with contributions to formal semantic parsing of modal expressions and discourse-level epistemic stance modelling. Edinburgh's Centre for Language Technology (CLT) has worked on epistemic marker detection in political speech and parliamentary discourse — relevant to analysis of government and media communication during health emergencies. Edinburgh's access to ARCHER2 HPC facilitates large-scale corpus analysis of epistemic marker distributions across billion-word web corpora.
    - **University of Leeds** — School of Linguistics and Phonetics has a tradition in corpus-based pragmatics and English modal verb research. The Leeds Corpus of English modality data (Yorkshire English subcorpus) provides regional dialect evidence for epistemic marker variation in Northern English speech, relevant to spoken NLP and speech recognition calibration for regional varieties.
    - **University of Cambridge** — Cambridge's Department of Theoretical and Applied Linguistics maintains research on formal pragmatics of English modal verbs and cross-linguistic evidentiality. The Cambridge English Corpus provides a large-scale resource for quantitative modal analysis. Cambridge Engineering's Speech Group works on prosodic and acoustic correlates of epistemic marking in spoken language, informing spoken [[Dialogue Systems]] that must interpret hedging in speech.
    - **Oxford Internet Institute** — Computational social science research on epistemic uncertainty in social media and political communication, with methods drawn from NLP hedge detection applied to public discourse analysis.
    - **NHS Digital and NHSX** — Clinical NLP deployments in NHS secondary care settings increasingly rely on epistemic marker detection as a prerequisite for accurate automated clinical coding and phenotyping. The Turing Institute's Health Data Research UK (HDRUK) programme funds development of clinical NLP tools incorporating negation and speculation detection for NHS EHR data, applying Epistemic Modality Marker technology at national scale.

  - ## Future Directions (2026–2030)
    - **LLM calibration through epistemic marker training** — Fine-tuning and reinforcement learning from human feedback (RLHF) approaches that specifically reward appropriate epistemic marker use — calibrated hedging when uncertain, confident assertion when certain — will become standard components of responsible LLM development. Constitutional AI and related approaches will encode epistemic honesty norms as explicit policy constraints. Research into mechanistic steering of epistemic marker generation through activation editing (model editing techniques applied to the identified epistemic representation spaces) will enable post-hoc calibration of deployed models.
    - **Cross-lingual epistemic marker transfer** — Multilingual pre-trained models will be fine-tuned on cross-lingual epistemic annotation datasets to enable zero-shot and few-shot epistemic marker detection across languages. Epistemic-aware [[Machine Translation]] systems will preserve or adapt epistemic force across language boundaries, addressing the known failure mode where neural MT strips or distorts hedging when translating between languages with different modal paradigms (e.g., English may → Chinese 可能 vs. 也许 with subtly different force).
    - **Epistemic marker detection in multimodal AI** — Extending Epistemic Modality Marker detection from text to spoken language (prosodic hedging cues: reduced volume, rising intonation, lengthened vowels on hedge words), visual communication (facial expressions of uncertainty, hedging gestures), and multimodal dialogue (combining linguistic and non-linguistic epistemic signals). Multimodal [[Dialogue Systems]] and embodied conversational agents will need integrated epistemic stance models spanning speech, text, and gesture.
    - **Formal verification of LLM epistemic output** — Developing automated testing frameworks that probe LLM epistemic marker generation for consistency, calibration, and factual accuracy correlation: does the model hedge more on questions where it is more often wrong? Does hedge frequency correlate with output probability entropy? These verification tools will become part of AI safety evaluation suites for deployed LLMs in high-stakes domains.
    - **Clinical epistemic NLP at national scale** — NHS-wide deployment of Epistemic Modality Marker detection in clinical NLP pipelines, enabling automated extraction of factual vs. speculative clinical claims from discharge summaries, radiology reports, and GP notes at the 5 billion+ document scale of the NHS EHR infrastructure. Integration with SNOMED CT clinical terminology coding will require epistemic-aware entity normalisation that distinguishes confirmed diagnoses from differential diagnoses marked with could, might, or possibly.
    - **Epistemic marker generation in AI writing assistants** — AI writing assistance tools that automatically suggest appropriate Epistemic Modality Markers when generating scientific, clinical, or policy text — nudging users toward calibrated claims commensurate with their evidence, and detecting epistemic over-assertion in submitted drafts. Integration into academic publishing workflows (journal submission portals, preprint servers) could systematically improve the calibration of scientific claims in the published literature.

  - ## Research & Literature
    - 1. Palmer, F. R. (1986). Mood and Modality. Cambridge University Press. [Canonical typological reference for linguistic modality]
    - 2. Kratzer, A. (1981). "The Notional Category of Modality." In Eikmeyer and Rieser (eds.) Words, Worlds, and Contexts. De Gruyter. [Possible-worlds semantics for modals]
    - 3. Kratzer, A. (1991). "Modality." In von Stechow and Wunderlich (eds.) Semantics: An International Handbook. De Gruyter. [Formal semantics of epistemic modality]
    - 4. Coates, J. (1983). The Semantics of the Modal Auxiliaries. Croom Helm. [Corpus-based analysis of English modal polyfunctionality]
    - 5. Lakoff, G. (1972). "Hedges: A Study in Meaning Criteria and the Logic of Fuzzy Concepts." Papers from the 8th Regional Meeting of the Chicago Linguistic Society. [Foundation paper for hedging theory]
    - 6. Hyland, K. (1998). Hedging in Scientific Research Articles. John Benjamins. [Definitive corpus study of hedging in academic genre]
    - 7. Biber, D., et al. (1999). Longman Grammar of Spoken and Written English. Longman. [Corpus quantification of modal distribution across registers]
    - 8. Markkanen, R., & Schröder, H. (eds.) (1997). Hedging and Discourse: Approaches to the Analysis of a Pragmatic Phenomenon in Academic Texts. De Gruyter. [Cross-linguistic hedging analysis]
    - 9. Vincze, V., et al. (2008). "The BioScope Corpus: Biomedical Texts Annotated for Uncertainty, Negation and their Scopes." BMC Bioinformatics, 9(Suppl 11), S9. [BioScope corpus; gold standard for hedge detection in biomedical NLP]
    - 10. Farkas, R., et al. (2010). "The CoNLL-2010 Shared Task: Learning to Detect Hedges and their Scope in Natural Language Text." Proceedings of the 14th CoNLL Shared Task. [CoNLL 2010 hedge detection benchmark]
    - 11. Thompson, P., et al. (2011). "A Wide-Coverage NLP System for Analysing Biomedical Texts with the Aim of Information Extraction." Proceedings of BioNLP 2011. [NaCTeM meta-knowledge annotation scheme]
    - 12. Saurí, R., & Pustejovsky, J. (2009). "FactBank: A Corpus Annotated with Event Factuality." Language Resources and Evaluation, 43(3), 227–268. [Factuality annotation incorporating epistemic modality]
    - 13. Morante, R., & Daelemans, W. (2012). "CoNLL-2010 Shared Task: Learning to Detect Hedges and their Scope." Computational Linguistics, 38(2). [Review of hedge detection at CoNLL 2010]
    - 14. Papafragou, A. (2000). Modality: Issues in the Semantics-Pragmatics Interface. Elsevier. [Formal-pragmatic treatment of modal polyfunctionality]
    - 15. Thompson, P., et al. (2008). "Enriching a Biomedical Event Corpus with Meta-Knowledge Annotation." BMC Bioinformatics, 12(Suppl 8). [Extended meta-knowledge epistemic annotation for biomedical NLP]
    - 16. Szarvas, G., et al. (2012). "Cross-Genre and Cross-Domain Detection of Semantic Uncertainty." Computational Linguistics, 38(2), 335–367. [Cross-domain hedge detection; biomedical and Wikipedia text]
    - 17. Xiong, M., et al. (2024). "Can Large Language Models Faithfully Express Their Intrinsic Uncertainty in Words?" EMNLP 2024. arXiv:2405.16908. [LLM calibration and epistemic marker generation]
    - 18. Baan, J., et al. (2024). "The Impact of Language Models' Reluctance to Express Uncertainty." ACL 2024. [User over-reliance driven by LLM under-hedging]
    - 19. arXiv:2410.20774 (2024). "Are LLM-Judges Robust to Expressions of Uncertainty? Investigating the Effect of Epistemic Markers on LLM-based Evaluation." [Epistemic markers in LLM evaluation quality]
    - 20. arXiv:2507.06306 (2025). "Humans Overrely on Overconfident Language Models, Across Languages." [Cross-lingual over-reliance on LLM over-assertion]
    - 21. arXiv:2509.24202 (2025). "Can Large Language Models Express Uncertainty Like Human?" [Human vs LLM epistemic marker comparison]
    - 22. arXiv:2508.08992 (2025). "Prospect Theory Fails for LLMs: Revealing Instability of Decision-Making under Epistemic Uncertainty." [LLM inconsistency in epistemic uncertainty handling]
    - 23. arXiv:2511.22402 (2025). "Mapping Clinical Doubt: Locating Linguistic Uncertainty in LLMs." [Clinical epistemic marker under-use in LLM outputs]
    - 24. UncertaiNLP 2025 Workshop Proceedings. EACL / ACL 2025. https://aclanthology.org/2025.uncertainlp-main.0.pdf [Community hub for uncertainty-aware NLP including epistemic modality]
    - 25. Dalimunte, M., et al. (2025). "Unveiling Research Trends in Semantic Modality: A Bibliometric Analysis (2005–2024)." SAGE Open. DOI:10.1177/21582440251395227. [Bibliometric survey of 20 years of modality research]
    - 26. arXiv:2405.13319 (2024). "You Should Probably Read This: Hedge Detection in Text." [Modern transformer hedge detection with benchmark results]
    - 27. von Fintel, K. (2006). "Modality and Language." In Encyclopedia of Philosophy (2nd ed.). Macmillan. [Comprehensive semantics-pragmatics survey of modality]
    - 28. QUITE: Quantifying Uncertainty in Natural Language Text in Bayesian Reasoning Scenarios. arXiv:2410.10449 (2024). [Quantitative epistemic marker annotation for LLM evaluation]

- ### Provenance
  - sources:: https://arxiv.org/html/2507.06306v1, https://aclanthology.org/2024.emnlp-main.443.pdf, https://arxiv.org/pdf/2405.16908, https://aclanthology.org/2024.acl-long.198.pdf, https://aclanthology.org/2025.uncertainlp-main.0.pdf, https://arxiv.org/pdf/2410.20774, https://arxiv.org/pdf/2509.24202, https://arxiv.org/pdf/2511.22402, https://arxiv.org/pdf/2410.10449, https://arxiv.org/pdf/2405.13319, https://journals.sagepub.com/doi/10.1177/21582440251395227, https://www.researchgate.net/publication/324096279_Epistemic_Modality_Markers_Used_as_Hedges_in_Research_Articles, https://pmc.ncbi.nlm.nih.gov/articles/PMC2991497/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
