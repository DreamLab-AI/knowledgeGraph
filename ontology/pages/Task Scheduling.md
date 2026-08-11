public:: true

# Task Scheduling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7dea315227e59793545bf6fb0aebe3c4b21052c405838c2d8a9be6da83936d13",
  "@type": "Page",
  "vc:slug": "task-scheduling",
  "title": "Task Scheduling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:resource-allocation", "vc:label": "Resource Allocation"},
    {"@id": "urn:visionflow:linked:operating-system", "vc:label": "Operating System"},
    {"@id": "urn:visionflow:linked:workflow-automation", "vc:label": "Workflow Automation"},
    {"@id": "urn:visionflow:linked:priority-queue", "vc:label": "Priority Queue"},
    {"@id": "urn:visionflow:linked:real-time-control", "vc:label": "Real-Time Control"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:task-scheduling",
  "@type": "Class",
  "label": "Task Scheduling",
  "definition": "The process of deciding which tasks run on which computational resources and when, subject to constraints such as priorities, deadlines, dependencies, and resource capacity. Task scheduling appears at every scale of computing: operating-system schedulers multiplex threads across CPU cores, real-time schedulers such as rate-monotonic and earliest-deadline-first guarantee that control loops meet hard deadlines, cluster orchestrators place jobs across machines, and workflow engines order dependent steps expressed as directed acyclic graphs. Because optimal scheduling is NP-hard in most general formulations, practical schedulers rely on priority-based heuristics, often implemented over priority queues, trading strict optimality for predictability, fairness, and low overhead.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:resource-allocation", "label": "Resource Allocation"},
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:operating-system", "label": "Operating System"},
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:priority-queue", "label": "Priority Queue"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-control", "label": "Real-Time Control"},
      {"@id": "urn:ngm:class:parallel-processing", "label": "Parallel Processing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:real-time-systems", "label": "Real-Time Systems"},
      {"@id": "urn:ngm:class:load-balancing", "label": "Load Balancing"},
      {"@id": "urn:ngm:class:concurrency", "label": "Concurrency"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The process of deciding which tasks run on which computational resources and when, subject to constraints such as priorities, deadlines, dependencies, and resource capacity. Task scheduling appears at every scale of computing: operating-system schedulers multiplex threads across CPU cores, real-time schedulers such as rate-monotonic and earliest-deadline-first guarantee that control loops meet hard deadlines, cluster orchestrators place jobs across machines, and workflow engines order dependent steps expressed as directed acyclic graphs. Because optimal scheduling is NP-hard in most general formulations, practical schedulers rely on priority-based heuristics, often implemented over priority queues, trading strict optimality for predictability, fairness, and low overhead."

- ### Semantic Classification
  - owl-class:: distributed-systems:TaskScheduling
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Resource Allocation]]
  - part-of:: [[Operating System]]
  - uses:: [[Priority Queue]]
  - enables:: [[Real-Time Control]]

- ### Content

  ## Definition

  **Task scheduling** is the temporal half of [[Resource Allocation]]: given more work than resources, something must decide the order and placement of execution. The decision recurs at every layer of the stack. An [[Operating System]] scheduler time-slices threads over CPU cores, balancing throughput against responsiveness — Linux's CFS and its EEVDF successor approximate fair sharing of processor time, while the kernel's real-time classes give latency-critical threads strict precedence. One level up, cluster schedulers (Kubernetes, SLURM, YARN) place containers and batch jobs across machines, and workflow engines such as Airflow order the steps of a pipeline by their dependency graph, the scheduling substrate of [[Workflow Automation]].

  The hardest guarantees belong to real-time scheduling. When a task set carries deadlines — a motor control loop that must actuate every millisecond — the scheduler must be analysably correct, not merely fast on average. Rate-Monotonic Scheduling (RMS) assigns static priorities inversely to period and is optimal among fixed-priority schemes; Earliest-Deadline-First (EDF) dynamically runs the most urgent task and can utilise the processor fully. Schedulability analysis proves in advance that no deadline can be missed, which is what makes dependable [[Real-Time Control]] possible, and hazards such as priority inversion are countered with priority-inheritance protocols.

  Almost every practical scheduler reduces at its core to an ordered ready-set, which is why the [[Priority Queue]] is its canonical data structure: insert tasks keyed by priority or deadline, repeatedly extract the minimum. Around that kernel, designs differ in what they optimise — makespan for batch DAGs, tail latency for services, fairness for shared clusters, energy for mobile devices — and in how they cope with the underlying intractability, since minimising makespan on multiple machines is NP-hard even in simple formulations. Heuristics (list scheduling, HEFT, work stealing) therefore dominate practice.

  ## Technical Details

  - **Preemptive vs cooperative**: preemptive schedulers can interrupt a running task at any time (essential for responsiveness and real-time guarantees); cooperative schedulers wait for tasks to yield, as in many async runtimes.
  - **Classical results**: RMS utilisation bound n(2^(1/n)−1) ≈ 69% for large n; EDF schedulable up to 100% utilisation on one processor; multiprocessor and DAG scheduling largely NP-hard, motivating heuristics.
  - **Modern practice**: work-stealing runtimes (Cilk, Tokio, Rayon) schedule fine-grained tasks in user space; datacentre schedulers add bin-packing, affinity, and preemption policies; GPU and accelerator queues push scheduling into hardware and drivers.

  ## Current Landscape

  - **EEVDF replaced CFS in the Linux kernel**: kernel 6.6 (October 2023) merged the Earliest Eligible Virtual Deadline First scheduler (from Stoica & Abdel-Wahab, 1995), retiring the ~16-year-old Completely Fair Scheduler; by 6.8 (March 2024) EEVDF was the default for SCHED_NORMAL and SCHED_BATCH.
  - **Latency as a first-class knob**: EEVDF selects the eligible task with the earliest virtual deadline and exposes a per-task `latency_nice` attribute plus explicit request-sized slices via `sched_setattr(2)`, replacing CFS's fragile heuristics; benchmarks over the 6.6-6.8 cycle showed rough throughput parity with ~20-40% p99-latency reductions on schbench/hackbench at moderate overcommit.
  - **Bounded-lag guarantee**: every runnable task's lag is bounded by its request size — at most one `base_slice_ns` (6 ms default, tunable to ~750 µs) — giving analysable fairness without tuning parameters.
  - **Real-time stays separate**: EEVDF is explicitly *not* a real-time scheduler; hard-deadline work still uses SCHED_DEADLINE (EDF), and rate-monotonic/EDF analysis remains the basis for dependable control loops.

  **Sources**:
  - https://docs.kernel.org/scheduler/sched-eevdf.html
  - https://lwn.net/Articles/925371/
  - https://www.linux-magazine.com/Issues/2025/301/EEVDF

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
