
A workflow engine is a software system that executes, coordinates, and monitors multi-step processes defined as a sequence or graph of tasks, managing state transitions, branching, retries, and human or system handoffs. It separates process definition from execution, enabling durable, observable orchestration of long-running business or computational workflows. Workflow engines underpin enterprise process automation and increasingly the orchestration of AI agent pipelines.

- ### In Plain Terms
  - The conductor that runs a multi-step job from start to finish — kicking off each step in order, pausing where it needs to, retrying anything that fails, and remembering where it got to even if the system restarts. It turns a written recipe of steps into something that reliably runs itself.
- ### Content
  - Engines such as Temporal, Camunda, and Airflow persist execution state so workflows survive crashes, support timers, signals, compensation, and parallel branches, and expose visibility into in-flight runs. Design choices distinguish data-pipeline DAG schedulers from durable-execution and BPMN-style human-task engines, with the common goal of reliable, resumable coordination of distributed steps.

