Directed acyclic graph (DAG) execution is a computation model in which tasks are nodes connected by directed dependency edges that contain no cycles, so the graph defines a partial order of operations. An execution engine performs a topological sort and runs nodes as soon as their inputs are ready, enabling parallelism, caching of unchanged subgraphs, and deterministic recomputation. It is the scheduling backbone of workflow engines and node-based authoring tools.

### Content

- The engine topologically sorts nodes, executes independent branches in parallel, and can cache node outputs so only changed subgraphs re-run. This model underpins build systems, data pipelines (Airflow, Dagster), and generative-AI node editors, trading the expressiveness of arbitrary control flow for predictability and parallelism.

