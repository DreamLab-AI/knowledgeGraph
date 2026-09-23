
Knowledge Discovery is the process of identifying valid, novel, useful and understandable patterns in data, transforming raw records into actionable knowledge. It spans data selection, cleaning, transformation, mining and interpretation, and draws on statistics, machine learning, information retrieval and database technology. The discipline is often framed as Knowledge Discovery in Databases (KDD), within which data mining is the specific pattern-extraction step.

- ### Overview
	- KDD is typically modelled as an iterative pipeline rather than a single algorithm, recognising that most effort lies in preparing data.
	- Stages include selection (choosing relevant data), pre-processing and cleaning, transformation (feature construction and reduction), mining (applying algorithms) and interpretation/evaluation.
	- The mining step applies methods such as classification, clustering, association-rule learning, regression and anomaly detection.
	- Results must be evaluated for validity and novelty, since spurious correlations are easy to find in large data.
	- Domain experts close the loop by interpreting discovered patterns and deciding which become trusted knowledge.
- ### Key aspects
	- Pattern validity: discovered patterns should generalise beyond the sample, requiring statistical rigour and held-out evaluation.
	- Interpretability: knowledge must be understandable to stakeholders, favouring transparent models or post-hoc explanation.
	- Data quality dependence: results are only as good as the cleaning and integration that precede mining.
	- Scalability: algorithms must cope with high-volume, high-dimensional data, motivating sampling and approximation.
	- Iterative refinement: insights from one pass reshape feature engineering and questions for the next.
- ### Applications
	- Surfacing relationships for an [[Enterprise Search]] or [[Semantic Search]] system.
	- Building or enriching a [[Knowledge Graph]] from heterogeneous corpora.
	- Customer segmentation, recommendation and fraud detection in [[Data Analytics]].
	- Literature and document mining via [[Text Mining]] and [[Natural Language Processing]].
- ### Provenance

