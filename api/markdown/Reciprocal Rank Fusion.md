
Reciprocal Rank Fusion (RRF) is a rank-aggregation method that combines multiple ranked result lists by summing the reciprocal of each document's rank across lists, weighted by a small smoothing constant. It requires no score calibration between systems, making it ideal for merging lexical and vector retrieval results in hybrid search. Its robustness and parameter simplicity have made it a default fusion technique in modern retrieval pipelines.

- ### Content
  - For each document, RRF computes a fused score of the form sum over lists of 1/(k + rank), where k (often 60) dampens the influence of top ranks. Because it ignores raw relevance scores, it sidesteps the calibration problems of weighted-sum fusion and reliably improves recall in hybrid retrieval.

