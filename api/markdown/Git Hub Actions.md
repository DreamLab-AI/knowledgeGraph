schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#GitHubActions
legacy_uri:: urn:visionclaw:concept:infrastructure:git-hub-actions
public:: true

# Git Hub Actions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9e0e8ac9c35e5fa326cf5dc6a826e2665f52ae46cad1740c0ed0205817e43c8e",
  "@type": "Page",
  "vc:slug": "git-hub-actions",
  "title": "Git Hub Actions",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-e8e4b95bcfce"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#GitHubActions"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Git Hub Actions"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:git-hub-actions"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:git-hub-actions"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9e0e8ac9c35e5fa326cf5dc6a826e2665f52ae46cad1740c0ed0205817e43c8e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:git-hub-actions",
  "@type": "Class",
  "label": "Git Hub Actions",
  "definition": "Git Hub Actions is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:git-hub-actions:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9e0e8ac9c35e5fa326cf5dc6a826e2665f52ae46cad1740c0ed0205817e43c8e"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9e0e8ac9c35e5fa326cf5dc6a826e2665f52ae46cad1740c0ed0205817e43c8e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - GitHub Actions is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:GitHubActions
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Great. I’ll create a practical and scaffolded tutorial for setting up CI/CD for ML using GitHub Actions, tailored for someone familiar with GitHub Actions and ML systems but new to tools like DVC and MLflow. I’ll explain each component in context, use minimal Markdown with clearly delimited code blocks, and provide just enough theory to orient you without overwhelming. I’ll also touch on Docker use, secrets management, and optional enhancements like drift detection and rollbacks.
  I’ll let you know when the full tutorial is ready for review.
  - # CI/CD for ML Projects with GitHub Actions: A Practical Tutorial
  Setting up CI/CD for machine learning projects extends beyond standard software pipelines. In ML, we must handle not just code, but also data, models, and experiments. This tutorial provides a step-by-step guide to implement a robust MLOps pipeline using **GitHub Actions**. We will cover intelligent workflow triggers, data and model versioning with **DVC**, experiment tracking with **MLflow**, comprehensive testing (including performance and fairness via **Fairlearn**), containerization with **Docker** (and linting with **Hadolint**), scheduled retraining, and secure secret management. By the end, you will have a clear blueprint for automating an ML workflow – from data prep and model training to deployment and monitoring – using familiar tools in a GitHub-centric workflow.
  **What You'll Learn:**
  - How to configure workflow triggers (push, PR, cron) intelligently for ML scenarios.
  - Integrating **DVC** for dataset and model version control in CI pipelines.
  - Using **MLflow** to log experiments, metrics, and parameters for each run.
  - Writing tests for ML code: unit tests, performance regression tests, and fairness checks with **Fairlearn**.
  - Building and linting Docker containers for consistent environments, and why Docker is essential for ML CI/CD.
  - Scheduling automated model retraining with GitHub Actions cron triggers.
  - Managing credentials and API keys securely with GitHub Secrets.
  - Going further with advanced MLOps: data drift triggers for retraining, MLflow Model Registry integration, automated rollbacks, and real-time monitoring.
  Throughout, we’ll use minimal Markdown formatting and provide example YAML configs and code snippets in triple backticks for clarity. Let’s get started!
  An ML CI/CD pipeline should run the right jobs at the right times. GitHub Actions supports many trigger events (pushes, pull requests, schedules, manual triggers, etc.). We can leverage these to set up **intelligent triggers** for our ML workflows: for example, run tests on every pull request, retrain a model when data or model code changes, or periodically schedule jobs for maintenance tasks.
  - **Push and PR Triggers:** You likely want to run the CI pipeline on pushes to certain branches (e.g. the main branch) and on pull requests. For ML projects, it's smart to **filter** these triggers so that expensive jobs (like model training) only run when relevant files change. GitHub Actions allows path filtering on triggers. For instance, you might only run the training pipeline if code in `src/` or data in `data/` changed. Below is an example workflow trigger section:
  ```
  In this YAML, any push to the main branch that includes changes in `src/`, `data/`, or `models/` directories will trigger the workflow. Pull requests targeting main will also trigger, ensuring that new contributions run through tests before merging. (By contrast, a minor change like editing documentation outside those paths won’t needlessly retrigger model training.)
  - **Manual Triggers:** Sometimes retraining or deployment might be initiated manually. You can include a `workflow_dispatch` trigger to allow manually running the workflow from the GitHub Actions UI. This is useful for on-demand retraining or rollback deployments triggered by a human.
  - **Conditional Triggers:** For advanced use-cases, you might set up conditions inside workflows. For example, one job could run always (say, to run unit tests), while another job (like model training) only runs if the tests passed and if a certain label is present on the PR, or only on certain branches. GitHub Actions provides job-level conditionals using `if:` statements. This kind of logic can prevent unnecessary retraining runs and keep CI fast.
  **Why Intelligent Triggers?** In ML projects, running the full pipeline (data download, training, etc.) on every single commit can be slow and costly. By scoping triggers to specific changes or schedules, you ensure CI efficiency. For example, you may separate a quick **CI** workflow (linting, unit tests) on each push, and a heavier **CT** (continuous training) workflow that runs nightly or when data changes. The key is to align triggers with the nature of changes: code changes trigger tests; data changes trigger retraining; schedule triggers periodic maintenance.
  Machine learning workflows deal with large datasets and model files that don’t fit into Git version control. This is where **DVC (Data Version Control)** comes in. DVC is a tool for versioning data and models, working alongside Git. While Git handles versioning of code, **DVC tracks changes in large files like datasets and model artifacts**. DVC stores file metadata in small pointer files checked into Git, enabling you to reproduce experiments and manage datasets without bloating your repository.
  **Why DVC?** With DVC, you can version datasets and models similarly to code. It lets you switch between dataset versions, share data with your team, and keep experiments reproducible by pinning exact data versions that produced a given model. This is critical for auditing and rollback – you can always retrieve the exact data that corresponded to a model. DVC also integrates with remote storage (S3, Azure Blob, GCS, etc.) to store the actual data files, since GitHub will only have tiny metafiles. This decoupling keeps your repo lightweight while enabling large file tracking.
  **Setting up DVC:** First, install and initialize DVC in your project (after Git init). For example:
  ```
  Add a remote storage to DVC (e.g., an S3 bucket or a Google Drive folder) so data can be pushed/pulled. For instance, to use an S3 bucket:
  ```
  After setup, you can add your dataset to DVC:
  ```
  This will take `data/raw/dataset.csv`, store it in the DVC cache, and replace it with a pointer file `data/raw/dataset.csv.dvc` (and update `.gitignore` so the actual data file is not committed). When you push your Git repo, only the `.dvc` file (plus a small `.dvc/cache` index) goes to Git. To upload the data to the remote storage, run `dvc push`.
  **DVC in GitHub Actions:** In CI, before training or tests that need data, you’ll use DVC to pull the required files. Add steps in your workflow to set up DVC and fetch data/model artifacts:
  ```
  In the above snippet, after checking out the repository, we install DVC (you could also use the `iterative/setup-dvc@v1` Action for convenience). Then `dvc pull` retrieves the latest versions of all DVC-tracked files (datasets, models) from the remote storage into the workspace. This ensures the training job has the necessary data and previous model (if your pipeline uses a previously trained model).
  > 
  **Tip:** Use **GitHub Secrets** to store any credentials needed for `dvc pull`. For example, if your remote is AWS S3, configure `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` as secrets and set them in the workflow `env` so that DVC can authenticate (more on secrets later).
  You can define a DVC pipeline (in `dvc.yaml`) describing multiple stages (like preprocessing, training, evaluation). Running `dvc repro` in CI can execute only the stages that need rerunning (if inputs changed), which can speed up builds. For example, a `dvc.yaml` might define `prepare_data`, `train`, and `evaluate` stages with their dependencies. Then your Action steps could call `dvc repro train` to run training if data or code changed. This is an advanced optimization: DVC will skip stages whose inputs haven't changed, essentially giving you **incremental builds** for ML. It’s not required, but consider it if your pipeline is long.
  After training in CI, if you get a new model artifact, you can use `dvc push` to upload the updated model to the remote store so that it's versioned. Typically, your workflow would `git commit` any updated `.dvc` or metric files and push them (maybe via a pull request comment or a direct push from CI using a bot account or the built-in `GITHUB_TOKEN`). A simpler approach is to output metrics to a file and use the `dvc metrics` features or artifacts (discussed later).
  **Summary:** DVC brings data and model version control to CI/CD. In this pipeline, we integrate DVC by pulling data at the start of jobs, ensuring each run has the correct dataset version. By tracking data through DVC, the CI pipeline can **auto-trigger when data changes** (because a `.dvc` file or `dvc.lock` will change in Git) and reproduce the model training with the new data.
  Keeping track of ML experiments (parameters, metrics, models) is vital for continuous improvement. **MLflow** is an open-source platform to manage the ML lifecycle, including experiment tracking, reproducible runs, model packaging, and a model registry. We will focus on MLflow’s experiment tracking component to log our training runs.
  **What is MLflow?** In short, MLflow makes it easy to log each experiment’s details and compare results. It allows you to record parameters (hyperparameters), metrics (accuracy, loss, etc.), and artifacts (model files, plots). It also provides a web UI to visualize these runs. *“The tracking component of MLflow allows you to log and query experiments... including hyperparameters, metrics, and artifacts”*. By using MLflow in CI, every training run triggered by our pipeline can automatically record what happened, which is invaluable for debugging and model selection.
  **Setting up MLflow:**
  - **Install MLflow** in your environment (locally and in CI). This can be done via pip:
  ```
  Include this in your workflow before running training. MLflow is library-agnostic, so it works with any ML framework.
  - **Logging in code:** Instrument your training script to use MLflow’s logging APIs. For example, in your `train.py`:
  ```
  This snippet logs two parameters and two metrics, and saves the trained model artifact. When run inside a GitHub Action, these logs will be recorded. By default, MLflow writes them to a local directory (`mlruns/`). You can archive this folder as an artifact of the workflow so you can download it later to inspect. For example:
  ```
  This will make the MLflow run data accessible from the Actions web UI after the job.
  - **MLflow Tracking Server (optional):** The above approach logs locally for each run. If you want a central persistent store of all experiments, you can set up an MLflow Tracking Server. This is a server (with a backend store and artifact store) that all runs can register to. Setting one up is beyond this tutorial’s scope, but typically involves running `mlflow server` (with a database like PostgreSQL for metadata and an S3 bucket or NFS for artifacts). If you have a tracking server, you’d point MLflow to it by setting environment variables in the workflow:
  ```
  This uses GitHub Secrets (we’ll cover creating secrets soon) to avoid exposing credentials. With this, `mlflow.start_run()` will log to the remote server instead of locally. A centralized tracking server is powerful: you can compare experiments across runs and even across different users or branches in one place. For beginners, using the local `mlruns` and artifact upload is a fine start.
  - **Viewing Results:** If using local logging + artifact upload, you’d download the artifact and use the MLflow CLI or UI to view it:
  ```
  This spins up a web UI at [http://localhost:5000](http://localhost:5000/) where you can see the logged runs (for local backend). If using a remote tracking server, you can go to its UI directly (or if it's hosted, open the corresponding URL).
  **Integrating MLflow in the CI pipeline:** Put together, a training job in our GitHub Actions might look like this:
  ```
  A few notes: We installed all project requirements (which should include mlflow, DVC, etc.), then ran the training script. We conditionally upload MLflow logs only if training succeeded. You could also upload the model itself or any output reports as separate artifacts.
  **Experiment tracking benefits:** By consistently logging experiments, your CI/CD pipeline doubles as an experiment log. Over time you'll accumulate valuable data: which hyperparameters were tried, which model versions performed best, etc. This historical record enables informed decisions (for example, you might find a prior model had better accuracy on some metric, or track model performance trends over time). It’s a stepping stone to more advanced capabilities like an **MLflow Model Registry**, where you can formally register models and transition them from “Staging” to “Production” stages. (We’ll touch on this in the advanced section.)
  In summary, MLflow integration ensures that every automated run is traceable. If a new model deployment fails or underperforms, you can easily pinpoint what changed by looking at the logged parameters and metrics. It brings discipline to the experimental side of ML even as we automate the pipeline.
  Continuous Integration in ML should enforce not just code quality, but also model quality. We need to include tests that cover data processing, model performance, and ethical considerations (fairness). Here we outline how to include various tests in your GitHub Actions workflow to ensure your ML code and models are robust:
  Just like any software project, you should write unit tests for your ML code (data loading, feature engineering, model training functions, etc.). In the context of CI:
  - **Data Preprocessing Tests:** Verify that your preprocessing functions behave as expected. For instance, test that a function to clean data actually removes or imputes nulls, or that a feature scaler does not change the number of records. Use small sample inputs for these tests. Example (Pytest style):
  ```
  This test would fail if `clean_data` doesn’t drop or fill the null.
  - **Model Training Tests:** These can be tricky due to training time, but you can still add tests for components of training. For example, if you have a function `train_model()` that returns a model object, you could run it on a small subset and assert properties (like the model has certain attributes, or a training loop decreased the loss). You might use a very small dataset (or a synthetic one) for speed.
  - **Integration Tests (Pipeline Tests):** If your project has a pipeline (e.g., data -> model -> prediction), you can write a test that runs a full pass on a tiny dataset to ensure there are no runtime errors and that outputs have correct shapes/types. This test might call the main training entry point with a special config (pointing to a small test dataset) and then check that a model file is produced and metrics are reasonable (or at least exist).
  **Running tests in CI:** If you use a testing framework like **Pytest**, you can add a step in the Actions workflow:
  ```
  Ensure your `requirements.txt` includes test dependencies (like `pytest`, and perhaps `pandas` for data testing, etc.). If tests fail, the workflow will stop at this step, preventing a bad model from moving forward.
  > 
  **Note:** Aim for tests that run quickly. Complex ML tests (like training a large model) may not be suitable for each commit’s CI. Instead, use small fast checks here, and reserve long-running evaluations for nightly builds or separate jobs.
  Beyond basic correctness, we want to ensure that a newly trained model meets certain performance criteria (accuracy, F1 score, etc.). Continuous training can inadvertently lead to **model degradation** if, say, data changed or a bug was introduced. We can catch this by comparing metrics against a baseline.
  Possible approaches for performance tests in CI:
  - **Static Thresholds:** Define minimum acceptable metrics. For example, “accuracy should be at least 0.85”. After training, load the evaluation results and assert the metric. If it’s below threshold, fail the job (preventing deployment of a subpar model). This threshold could be hard-coded or read from a config. Example:
  ```
  You can run such a check as a step after training. If you use DVC, you might have `dvc metrics` to retrieve metrics from previous runs; but within one CI run, you likely just evaluate on the spot.
  - **Baseline Comparison (Previous Model):** A more dynamic method is to compare the new model’s performance to the last known good model (perhaps the one currently in production). If you have stored metrics for the last model (in a file or in MLflow), you can load those and compare. For instance, ensure the new model’s AUC is not more than 2% worse than the old model’s AUC. This requires that you persist the old metrics somewhere accessible. One way is to keep a JSON of prod metrics in the repo (updated when a model is promoted to prod), or query MLflow for the latest prod run metrics.
  - **DVC Metrics & Diff:** If using DVC pipelines, you can take advantage of `dvc metrics`. For example, you designate a metrics file (like `metrics.json`) in your `dvc.yaml` (`metrics:` entry). DVC will track it. You could then do `dvc metrics diff HEAD~1 HEAD` to compare current metrics to the previous commit’s metrics, and fail if there’s a significant drop. In one example, after running training in CI, they generated a report with `dvc metrics diff --show-md` comparing to the main branch. This output can be posted as a comment on a PR (using CML or the GitHub API) to inform you of performance changes.
  However you implement it, incorporating a performance check means your CI/CD pipeline won’t blindly push a worse model. Instead, it will flag or stop if the quality falls below acceptable levels. This guards against model drift or simple mistakes.
  ML performance isn’t only about aggregate accuracy – fairness across subgroups is also crucial. **Fairlearn** is a Python library to assess and improve model fairness. We can integrate fairness checks into CI to catch issues early. For example, if your model works well overall but significantly worse for a particular demographic group, you’d want to know and address it before deployment.
  **Assessing fairness:** The idea is to evaluate your trained model on sensitive categories (e.g., race, gender, age groups, etc. depending on context) using fairness metrics. Common metrics include:
  - **Disparity in performance** (difference in accuracy or error rate between groups),
  - **Demographic parity** (prediction rates independent of group),
  - **Equalized odds** (error rates equal across groups), etc.
  With Fairlearn, you can compute these metrics easily. For instance, using `MetricFrame` to calculate a metric for each group and then compute a disparity:
  ```
  Here, `acc_per_group` might yield something like accuracy for females vs males. The `accuracy_gap` is the difference between the best- and worst-performing group. If that gap is too large, we might consider it unfair.
  **Defining a fairness test:** Decide on a criterion, e.g., “accuracy difference between any two demographic groups must be < 0.05 (5%)”. Then in CI:
  ```
  You can similarly enforce thresholds on other metrics (like requiring that the **selection rate** – the fraction of positive predictions – is within say 0.10 between groups to satisfy approximate demographic parity).
  In practice, you'll need access to a labeled dataset with the sensitive attribute. This could be your test set, if it contains such attributes. Ensure this test data is available in CI (perhaps a subset included in the repo or retrieved via DVC if large).
  **Automating fairness check:** Incorporate a step after model evaluation:
  ```
  Where `fairness_check.py` loads the model and test data, computes fairness metrics (using Fairlearn), and exits with non-zero status (or raises AssertionError) if the criteria aren’t met. If the step fails, the workflow will stop, signaling that the model needs improvement before deployment.
  > 
  Fairlearn provides not just metrics but also algorithms to mitigate bias. While mitigation (like re-weighting, or algorithmic adjustments) is usually done during model training, those techniques are beyond CI scope. CI’s role is to **detect** issues; if a fairness test fails, it can prevent deployment and alert engineers to address the bias in the next training run (maybe by collecting more data or adjusting the model).
  **Documentation & Reporting:** It’s a good idea to log these fairness metrics (perhaps to MLflow or as a artifact report). You might create a small markdown or HTML report of group metrics and upload it. Teams can review such reports to make informed judgments (since not all fairness issues are binary pass/fail).
  In summary, adding fairness checks to CI/CD ensures you consider ethical AI factors continuously. It moves fairness analysis from an ad-hoc afterthought to a built-in gate in your deployment pipeline. As a result, you're more likely to catch biased outcomes early and retrain or fix them, aligning with responsible AI practices.
  **Why Docker in ML CI/CD?** Docker provides a consistent environment for both training and deployment. In CI, you might use Docker in a few ways:
  - To build a container image of your ML application for deployment (e.g., an API serving the model).
  - To ensure the training or inference runs in the same environment locally and in production. You could even use Docker images as the runtime in GitHub Actions (using the `jobs.<job>.container` option or self-hosted runners with Docker).
  - To package all dependencies (including specific library versions, OS packages, even GPU drivers) so that “it works on my machine” is true everywhere.
  By containerizing, you encapsulate the ML model and its environment, making deployments much easier. For example, you might deploy a **Docker image** to a cloud service or Kubernetes. CI can automatically build and push this image.
  **Example Dockerfile:** Consider you have a simple Python ML app (could be training or serving). A Dockerfile might look like:
  ```
  This Dockerfile uses a slim Python base image, installs the requirements, copies the code, and sets a default command to run a deployment script (perhaps launching a web service or some job). You could have a separate Dockerfile for training and serving, but often the environment is similar.
  **Building images in CI:** You can integrate Docker build and push steps in your GitHub Actions. For instance, using the official Docker GitHub Action:
  ```
  This would build the image and push it to Docker Hub (requires DOCKERHUB_TOKEN/username in secrets). If you use GitHub Container Registry or another registry, adjust accordingly. Pushing an image as part of CI/CD is essential for continuous **deployment** (CD) if your model is served via containers.
  **Linting Dockerfiles with Hadolint:** Ensuring your Dockerfile follows best practices can make your images smaller, faster, and more secure. **Hadolint** is a popular open-source linter for Dockerfiles. It checks for issues like improper layering, use of latest tag, missing `HEALTHCHECK`, and also integrates ShellCheck to catch shell script errors in Dockerfile RUN commands. We can run Hadolint in CI to catch Dockerfile problems automatically.
  To use Hadolint in GitHub Actions, there's a ready-made action. Include a step such as:
  ```
  This will run Hadolint on the `Dockerfile` in the repository and report any warnings or errors (failing the step if it finds issues of severity above a threshold). By default, Hadolint will fail on any rule violation of type “error”. You can configure it via a `.hadolint.yaml` if needed (to ignore certain rules, etc.), but generally it's good to start with defaults.
  **In practice:** Suppose your Dockerfile inadvertently uses `pip install` without pinning versions or you forgot to update a base image tag – Hadolint would flag these. This automation enforces container best practices across your team. It’s much easier to fix Dockerfile issues early than to debug them in production images.
  **Docker in deployment:** Once CI builds and lints the image, you might deploy it (maybe as part of a CD stage). For example, pushing to a registry could trigger a deployment in a cloud environment (or you have a follow-up job that SSHs to a server or calls a Kubernetes API to deploy the new image). While deployment specifics depend on your infrastructure, containerization is the bridge between training and production. The CI ensures the container is up-to-date with the latest model and passes tests.
  **Summary:** By containerizing ML apps, you guarantee environment consistency from training to production. Combining Docker with CI/CD means each model version is reproducibly packaged. Including Hadolint in the pipeline adds a quality gate for your container definitions, automatically enforcing best practices (cleaner, more secure images). This reduces the “it worked on my machine” issues and leads to more reliable deployments.
  In real-world ML systems, models may need periodic retraining as new data comes in or as the data distribution shifts over time. GitHub Actions provides a scheduling mechanism (cron) that we can use to automate retraining jobs on a regular interval.
  **Using the `schedule` trigger:** You can specify a cron schedule in your workflow’s triggers. For example, to run a retraining workflow every Monday at midnight:
  ```
  This uses standard cron syntax (`min hour day month weekday`). The above runs weekly. You could adjust to daily (`0 0 * * *` for every midnight) or any frequency you need. Once you push a workflow with a schedule, GitHub will trigger it at about those times (note: it’s not real-time precise, but roughly within a few minutes of the schedule).
  **What to do on a schedule?** A typical scheduled retraining workflow might:
  - **Pull the latest data** (if your data source is external, you might fetch it or if it’s in repo via DVC, you’d do `dvc pull` – though note, if new data wasn’t added to the repo, you need another mechanism; often data is fetched from a database or cloud storage in the job).
  - **Retrain the model** using the latest data.
  - **Evaluate** the model’s performance (and possibly compare to last model).
  - **Version & deploy** the new model if it’s better (or meets criteria).
  You can reuse much of the workflow steps from the on-push pipeline. In fact, you might have one workflow file with multiple triggers (as in earlier example) or separate files (one for CI on push/PR, another for scheduled retraining). Separation can be cleaner to manage, but either works.
  Here’s a simplified example of a scheduled retrain job in a workflow:
  ```
  This outlines a possible approach. In a real pipeline, you might also push the new model to DVC or commit changes back to the repo (though auto-committing from scheduled actions should be done carefully to avoid infinite loops of triggering itself). Often, retraining jobs save their outputs in an artifact or an external storage and maybe notify humans or kick off a deployment workflow.
  **Scheduled workflows and data freshness:** A cron-based retrain is essentially **blind** to whether new data arrived; it just runs at a set time. If your data arrives irregularly or you only want to retrain when there’s significant new data, you have a couple of options:
  - Use an external trigger: e.g., when new data is dumped to a storage, use a webhook or GitHub API to dispatch a workflow (using the `repository_dispatch` event). This requires some external glue, but is more event-driven.
  - Inside the scheduled job, add logic to check for new data or drift. For example, the first step could run a lightweight data drift detection (maybe comparing recent data stats to older stats). If no drift or no new data, the job can exit early (use `if: ${{ steps.X.outputs.no_data == 'true' }}` or simply have a script that checks and decides not to proceed).
  However, a weekly retrain is a simple catch-all that covers periodic updates. It aligns with the **continuous training (CT)** aspect of MLOps – ensuring the model is periodically refreshed so it remains effective.
  **Cron specifics:** GitHub Actions cron times are in UTC. Also, if the repo is private or you have strict billing limits, ensure you have minutes budget for scheduled runs. If a scheduled run is missed because GitHub Actions service had an outage or your repository had no recent activity (for private repos on free plan, schedules might pause if no pushes in a while), be aware of that limitation.
  **Validation and Deployment:** After retraining on schedule, you might integrate the same testing steps (performance, fairness) before considering the model for deployment. You could even automate deployment on schedule if all tests pass. For instance, the schedule job could conclude by pushing the new model to a registry or triggering a deploy action (maybe by creating a GitHub Release or pushing to main, which another workflow picks up). Use caution here – automatic deployments from schedule should only happen after thorough testing, since no human is directly in the loop at trigger time.
  In summary, scheduled retraining ensures your ML system stays up-to-date. It’s a safety net for model drift – instead of waiting for a manual trigger, the system regularly refreshes the model. As one MLOps writer noted, *“One way for the ML model to bring constant benefit is by retraining when necessary, for example, if data drift is detected”*. Scheduling is one way to achieve this “when necessary” in a routine manner. (Later we’ll discuss how to make it more intelligent with drift detection.)
  ML workflows often need access to sensitive information: database credentials for data, API keys for third-party services, cloud storage keys for DVC or artifact storage, etc. Hard-coding these in your code or workflow is bad practice and a security risk. GitHub provides **Secrets** to manage such sensitive data.
  **GitHub Secrets basics:** In your repository settings, you can add secrets (key-value pairs) that are encrypted. In Actions workflows, these are available via the `secrets` context. For example, if you add a secret named `AWS_ACCESS_KEY_ID`, you can reference it as `${{ secrets.AWS_ACCESS_KEY_ID }}`. Secrets are masked in logs (so even if you accidentally print them, you’ll see `***` instead of the value). They cannot be read by pull request from forks (to prevent exfiltration by untrusted code).
  **Common secrets in ML CI/CD:**
  - Cloud storage credentials (AWS S3 keys, Azure storage connection strings, GCP service account JSON, etc.) for accessing data or model artifact stores.
  - MLflow credentials (tracking server URL, token, or database URIs).
  - API keys for external data sources.
  - SSH keys or cloud credentials for deployment servers (if you deploy via SSH or cloud CLI, store those keys as secrets).
  - If using Docker registries, secrets for registry login (like `$<platform>_USERNAME` and `$<platform>_PASSWORD`).
  **Using secrets in workflows:** You typically pass secrets as environment variables to steps that need them. For example, to use AWS CLI or Boto3 in a step:
  ```
  Another example, connecting DVC or MLflow as mentioned earlier:
  ```
  Here, we don't output the secrets (we just echo a message). Even if we did, GitHub Actions would mask it. However, be careful: if you use a secret in a command that might appear in logs (e.g., passing as a command-line argument), it will be masked in the log but still visible as `***`. That is usually fine, but just be aware.
  **Securing secret use:** Only give your workflows the secrets they need. You can set environment at the job level or per step. Prefer per step (principle of least privilege). For instance, the step that runs `dvc pull` might need your storage creds, but your testing step doesn’t – so scope the env accordingly.
  **GitHub Environments & Approvals:** For more sensitive deployments, GitHub Actions also offers *Environments* where you can require manual approval and store environment-specific secrets. For example, you might have a “production” environment that holds production DB passwords and requires a human to approve the deployment job. This is a good practice to prevent automatic deployment of a model without oversight. However, for a basic pipeline, repository secrets are sufficient.
  **Secret Rotation:** Remember to rotate/regenerate keys periodically or if someone leaves the team, etc. Update the secret in GitHub and it’ll apply to future workflow runs (old runs don’t get retroactively updated, of course).
  **Avoiding pitfalls:** Do not commit secrets to the repository (even in history). Use secrets for anything sensitive. Also, don’t echo secrets to console. If you need to debug something with a secret, consider printing a subset or properties (like printing the username but not password, etc.). GitHub masks any string that exactly matches the secret value, but sometimes things like parts of URLs could slip (if your secret is a URL, printing that URL might get partially masked). Generally, just don't log them.
  By leveraging GitHub Secrets, you satisfy security requirements while still automating the pipeline. As one guide noted, store sensitive info in GitHub Secrets and access them securely during the CI/CD process. This ensures your ML pipeline can interface with external systems (data sources, model stores, etc.) without exposing credentials in code or logs.
  We’ve built a solid CI/CD pipeline covering versioning, testing, and deployment basics. Once you’re comfortable with this foundation, you can consider advanced enhancements to further improve automation, reliability, and model quality. Here are some optional yet powerful practices:
  - **Conditional Retraining on Data Drift:** Rather than retraining on a fixed schedule, you can trigger retraining when the data actually drifts or performance degrades. For example, you could incorporate a monitoring job (outside of GitHub, or as a lightweight daily check in Actions) that calculates data drift metrics (using something like **Evidently AI** library or statistical tests) on new production data vs training data. If drift exceeds a threshold, use the GitHub API to dispatch the retraining workflow. This way, the model is retrained *only when necessary*, aligning with the idea of *continuous training (CT) triggered by events*. Some platforms support this out-of-the-box; for instance, Domino Data Lab notes that their system can *“trigger alerts and automate retraining processes based on custom thresholds”* when performance or data drift issues are detected. In GitHub Actions, you might script this with a combination of scheduled runs and `repository_dispatch` triggers.
  - **MLflow Model Registry & Automated Promotion:** Using MLflow’s model registry, you can maintain versions of models (e.g., v1, v2) and assign stages like “Staging” or “Production”. Your CI pipeline can automatically register a new model version after training. Then you could have a policy (maybe manual or automated) to promote a model to Production once it passes all tests. An advanced CI/CD setup might even watch the registry: for example, a workflow triggers when a model is moved to Production stage and deploys that model. This decouples training from deployment nicely. MLflow’s model registry provides a central model store with versioning and stage transitions, which you can leverage to implement safe model rollouts. For instance, you deploy a model only after it’s marked Production, and you keep older versions available for potential rollback.
  - **Canary Deployments and Auto-Rollbacks:** When deploying models to production (especially in a live inference service), it’s wise to do canary or shadow deployments. This involves deploying the new model to a subset of traffic or in parallel with the old model, and monitoring performance. If the new model performs worse or has errors, you automatically rollback to the previous model. You can automate some of this in CI/CD: for example, your deployment step could deploy the model to a “staging” environment or a small percentage of users, run additional tests or gather live metrics for a short time, then either proceed to full deployment or rollback. While full automation of this is complex, you can integrate with cloud MLOps services or Kubernetes operators (like Seldon Core or BentoML or Azure’s endpoints) which often support traffic splitting. The pipeline’s role is to initiate the process and possibly monitor an endpoint. **Auto-rollback** might simply mean your CI pipeline or monitoring detects a metric drop (say new model’s error rate is 2x old model’s) and triggers a re-deployment of the old model. This can be done if you kept the old model image around. In any case, designing for rollback (keeping previous model artifacts, one-click restore) is a best practice.
  - **Real-time Monitoring and Alerts:** After deployment, **continuous monitoring (CM)** kicks in. Set up monitoring for your model’s predictions (e.g., via logging predictions and actuals, if available, or tracking input distributions). You could integrate alerts such that if model performance in production deviates (e.g., accuracy drops or latency spikes), it notifies engineers or triggers the retraining pipeline. Tools like **Prometheus/Grafana** can monitor metrics from a model server. There are also specialized ML monitoring tools (e.g., Evidently, WhyLabs, Arthur, etc.) that can be part of your stack. While monitoring largely happens outside of GitHub Actions, you can tie it in by making those tools call back into your CI (again via webhooks or scheduled checks as described). The key is to ensure the ML pipeline doesn’t end at deployment – it continues with monitoring, and the feedback from monitoring can loop back to trigger maintenance or improvements (making it a closed loop).
  - **Feature Store and Data Versioning Integration:** If your project grows, you might use a feature store to keep track of features over time. Integration tests can ensure the feature engineering code is in sync with the feature store schemas. Also, versioning of data schemas could be added to the pipeline (e.g., if a new data field is introduced, tests to ensure backward compatibility).
  - **Security and Compliance Checks:** For certain domains, you might incorporate bias mitigation (not just detection) in CI, or privacy checks (ensuring no personal identifiable info leaks). GitHub Actions can run static analysis tools or custom scripts for these as part of the pipeline.
  Implementing the above enhancements requires more tooling and sometimes custom development, but they can significantly improve the resilience of your ML system. Start with monitoring and basic drift detection, as those give immediate value (you don’t want to be last to know your model accuracy fell due to changing data!). As you mature, a full MLOps pipeline might incorporate many of these, achieving true **continuous integration, continuous delivery, continuous training, and continuous monitoring** for ML.
  One practical consideration for CI/CD is where your workflows run. GitHub provides **hosted runners** (the default `ubuntu-latest` VMs, as well as Windows and macOS options) and also allows you to use **self-hosted runners** on your own machines. Each has implications:
  **GitHub-Hosted Runners:** These are managed by GitHub on cloud VMs (currently on Azure). They offer convenience – no setup, auto-scaled, clean environment each run. GitHub-hosted Linux runners come with 2-core CPU, ~7 GB RAM, and no GPU. They have a time limit per job (e.g., 6 hours) and concurrency limits depending on your plan. For most CI tasks, these are sufficient. They come pre-loaded with many common tools (Python, Docker, etc.). Security-wise, they are isolated for your repo use. They are **ephemeral** – after each job, the VM is discarded, which means you start fresh every time (ensuring no contamination between runs, but also meaning you have to pull data each time, etc.). For ML projects, a GitHub-hosted runner is great for lightweight jobs: running tests, training small models, building containers.
  **Self-Hosted Runners:** These are machines you provision (could be an on-prem server, a persistent cloud VM, even your own workstation) that run the GitHub Actions runner agent. Self-hosted runners *“give you more control of hardware, operating system, and software tools”* than GitHub’s hosted ones. You can choose machines with more power (e.g., 32 cores, high-memory machines) or with special hardware like **GPUs** for deep learning training. You can also install custom dependencies or even have an environment with specific network access (e.g., within your company’s firewall or VPC to reach internal data sources). Self-hosted runners are **persistent** by default – they don’t reset after each job unless you script them to (so you must ensure the runner cleans workspace or use the “runs-on: self-hosted” only for one job at a time to avoid conflicts). They also require maintenance: you manage the OS updates, you have to secure them (since they have access to repo code and secrets when jobs run), and you handle scaling (one runner can only do one job at a time, unless you set up multiple). GitHub doesn’t charge minutes for using self-hosted (you provide the hardware), but you bear the cost of that hardware. These are great for heavy workloads. For example, if you want to retrain a large deep learning model with GPUs as part of CI, a self-hosted runner with a GPU is practically required. Or if you have huge data on an internal network, a self-hosted runner running in that network can directly access it, whereas a GitHub-hosted runner might not.
  **Comparison Summary:**
  | 
  |  | 
  | **GitHub-Hosted** | 
  | **Self-Hosted** | 
  |
  | ---- |
  | 
  | **Environment** | 
  | Managed, ephemeral VMs (Ubuntu, Windows, macOS). Comes with standard tools pre-installed. | 
  | Fully customizable machine (any OS, any software pre-installed as you like). Persistent unless you reset it. | 
  |
  | 
  | **Resources** | 
  | Limited fixed sizes (e.g., 2-core Linux, no GPUs; larger runners available on paid plans). | 
  | Your choice: can be high-memory, multi-GPU, etc. Scale up as needed (at your cost). | 
  |
  | 
  | **Maintenance** | 
  | None (auto-updated by GitHub, fresh instance each time). | 
  | You maintain OS, drivers, dependencies, runner software updates. Need to secure and monitor the machine. | 
  |
  | 
  | **Speed** | 
  | Quick to start (VM is ready in seconds). But for big jobs, limited hardware may be slow. | 
  | No startup delay (always on), and potentially much faster for big jobs if you provide powerful hardware. Can also keep data cached on disk between runs for speed. | 
  |
  | 
  | **Security** | 
  | Runs on GitHub’s cloud, good isolation. Secrets are accessible during jobs but runner is thrown away after. | 
  | You must trust and secure the machine (if compromised, could expose secrets). Can keep it behind VPN for safety. | 
  |
  | 
  | **Cost** | 
  | Included minutes (free for public repos, limited for private depending on plan; pay for more minutes). | 
  | Free to use Actions, but you pay for the machine (cloud costs or hardware). Could be expensive if running 24/7, but maybe cheaper for very large workloads compared to using a managed service. | 
  |
  | 
  | **Use Cases** | 
  | Most CI tasks, open-source projects, small to medium training jobs, building/pushing containers, etc. | 
  | Heavy ML training (especially with GPUs), jobs requiring special software/hardware, accessing on-prem data, needing persistent state or custom networking. | 
  |
  In many cases, you can start with GitHub-hosted runners. If you hit limits (for example, your workflow fails because it runs out of memory, or you need a GPU), then consider adding a self-hosted runner. You can even mix: e.g., use hosted runners for lint/test, then trigger a job on a self-hosted GPU runner for model training. Workflows can specify `runs-on: [self-hosted, gpu]` for example (using labels you assign to your runner). It’s a flexible system.
  Do note that if using self-hosted, you should regularly update the runner application and clean up after runs. There are tools and community tips on managing runner fleets (including scaling them on Kubernetes or EC2 if needed).
  For our tutorial pipeline, a GitHub-hosted runner suffices for demonstration. But keep these differences in mind as your CI/CD scales. As the GitHub docs say, self-hosted runners **“let you create custom hardware configurations... to run larger jobs”** but you’re responsible for maintaining them. Choose what fits your project’s needs and budget.
  By combining GitHub Actions with MLOps tools like DVC and MLflow, we built a comprehensive CI/CD pipeline for machine learning projects. This pipeline automatically tracks data and model changes, runs tests to ensure quality (from code correctness to model fairness), packages models in reproducible containers, and can deploy or schedule retraining as needed. We also emphasized secure practices with secret management and discussed how to refine triggers and infrastructure as your project grows.
  Adopting CI/CD for ML might seem complex, but by breaking it down into steps – version your data, track your experiments, test everything (including the model), containerize for consistency, and automate deployment – you make your ML project more **reliable, reproducible, and scalable**. The tutorial’s scaffolded approach is meant to be actionable: you can start with the basics (e.g., get a DVC + GitHub Actions training workflow running) and gradually add components like MLflow tracking, then tests, then Docker deployment, rather than doing it all at once.
  Remember that MLOps is an iterative journey. Monitor your pipeline’s outcomes: Are models improving? Did any deployment cause issues? Use those insights to tighten your CI/CD (maybe add a new test or an alert based on what you learn). Over time, you'll evolve from a basic automated training setup to a robust, fully mature MLOps system that handles continuous integration, delivery, training, and monitoring smoothly.
  With this foundation, you’re well on your way to implementing production-grade ML workflows. Good luck, and happy automating!
  **Sources:** The concepts and techniques above were drawn from industry best practices and resources: for instance, DVC’s role in tracking data/model versions, MLflow’s experiment tracking capabilities, the use of Fairlearn for fairness in ML, Docker and Hadolint for container best practices, scheduled retraining triggers, secure secrets management, and guidance on runner choices from GitHub docs. These sources and tools collectively inform a robust approach to CI/CD in machine learning projects.
  <!--EndFragment-->

  - ## Introduction
  - ## Workflow Triggers for ML Projects
  ```
  name: ML-Pipeline
  on:
  push:
    branches: [main]
    paths:
      - 'src/**'
      - 'data/**'
      - 'models/**'
  pull_request:
    branches: [main]
  - ## Data & Model Versioning with DVC
  ```
  pip install dvc
  dvc init
  ```
  dvc remote add -d myremote s3://my-bucket/path
  # configure credentials (e.g., if not using the default AWS env vars)
  dvc remote modify myremote access_key $AWS_ACCESS_KEY_ID
  dvc remote modify myremote secret_key $AWS_SECRET_ACCESS_KEY
  ```
  dvc add data/raw/dataset.csv
  ```
  jobs:
  train:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install DVC
        run: |
          pip install dvc
      - name: Pull data artifacts
        run: |
          dvc pull
  - ## Experiment Tracking with MLflow
  ```
  - name: Install MLflow
  run: pip install mlflow
  ```
  import mlflow

  mlflow.start_run()  # start an experiment run
  mlflow.log_param("model_type", "RandomForest")
  mlflow.log_param("n_estimators", 100)
  mlflow.log_metric("accuracy", accuracy_score)
  mlflow.log_metric("auc", roc_auc_score)
  mlflow.log_artifact("models/model.pkl")  # save model file
  mlflow.end_run()
  ```
  - name: Upload MLflow results
  uses: actions/upload-artifact@v3
  with:
    name: mlflow-run
    path: mlruns/
  ```
  env:
  MLFLOW_TRACKING_URI: ${{ secrets.MLFLOW_TRACKING_URI }}
  MLFLOW_TRACKING_TOKEN: ${{ secrets.MLFLOW_TRACKING_TOKEN }}
  ```
  mlflow ui --artifact-root mlruns/ --backend-store-uri mlruns/
  ```
  jobs:
  train:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Train Model
        env:
          MLFLOW_TRACKING_URI: ${{ secrets.MLFLOW_TRACKING_URI }}   # if using remote
          MLFLOW_TRACKING_TOKEN: ${{ secrets.MLFLOW_TRACKING_TOKEN }}
        run: python src/train_model.py
      - name: Upload MLflow artifacts
        uses: actions/upload-artifact@v3
        if: success()  # only if training succeeded
        with:
          name: mlflow-run
          path: mlruns/
  - ## Testing and Quality Checks in ML Pipelines
  - ### Unit and Integration Tests for ML Code
  ```
  import pandas as pd
  from src import preprocessing

  def test_clean_data_removes_nulls():
    df = pd.DataFrame({"feature": [1, None, 3]})
    clean_df = preprocessing.clean_data(df)
    assert clean_df["feature"].isnull().sum() == 0
  ```
  - name: Run unit tests
  run: pytest -q
  - ### Performance Regression Tests
  ```
  import json
  # Suppose training outputs a metrics file
  with open("metrics.json") as f:
    metrics = json.load(f)
  assert metrics["accuracy"] >= 0.85, "Accuracy dropped below 0.85"
  - ### Fairness Checks with Fairlearn
  ```
  from fairlearn.metrics import MetricFrame, selection_rate, accuracy_score

  # y_true: true labels, y_pred: model predictions, sensitive_features: e.g. array of group labels like ["female", "male", ...]
  metric_frame = MetricFrame(metrics={"accuracy": accuracy_score, "selection_rate": selection_rate},
                           y_true=y_true, y_pred=y_pred,
                           sensitive_features=sensitive_features)
  acc_per_group = metric_frame.by_group["accuracy"]
  min_acc, max_acc = acc_per_group.min(), acc_per_group.max()
  accuracy_gap = max_acc - min_acc
  ```
  assert accuracy_gap < 0.05, f"Accuracy gap too large: {accuracy_gap}"
  ```
  - name: Run fairness tests
  run: python src/fairness_check.py
  - ## Containerization with Docker (and Hadolint)
  ```
  FROM python:3.8-slim
  WORKDIR /app
  COPY requirements.txt .
  RUN pip install --no-cache-dir -r requirements.txt
  COPY . .
  CMD ["python", "src/deploy_model.py"]
  ```
  - name: Build Docker Image
  uses: docker/build-push-action@v3
  with:
    context: .
    file: ./Dockerfile
    push: true
    tags: my-dockerhub-user/my-ml-app:latest
  ```
  - name: Lint Dockerfile
  uses: hadolint/hadolint-action@v3
  with:
    dockerfile: Dockerfile
  - ## Scheduled Retraining with GitHub Actions
  ```
  on:
  schedule:
    - cron: '0 0 * * 1'  # Every Monday at 00:00 UTC
  ```
  name: Retraining Pipeline
  on:
  schedule:
    - cron: '0 0 * * 1'  # weekly
  jobs:
  retrain:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      - name: Install requirements
        run: |
          pip install -r requirements.txt
      - name: Pull latest data
        run: |
          dvc pull && dvc run -n data_update_stage  # optionally run a DVC stage to get new data
      - name: Retrain model
        run: |
          python src/train_model.py --config params.yaml
      - name: Evaluate model
        run: |
          python src/evaluate_model.py
      - name: Save model and metrics
        uses: actions/upload-artifact@v3
        with:
          name: retrained-model
          path: "models/latest_model.pkl"
  - ## Managing Secrets and Credentials
  ```
  - name: Upload to S3
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  run: |
    aws s3 cp models/model.pkl s3://my-bucket/models/model.pkl
  ```
  - name: Configure MLflow Tracking
  env:
    MLFLOW_TRACKING_URI: ${{ secrets.MLFLOW_TRACKING_URI }}
    MLFLOW_TRACKING_TOKEN: ${{ secrets.MLFLOW_TRACKING_TOKEN }}
  run: echo "MLflow configured"
  - ## Advanced Enhancements and MLOps Best Practices
  - ## Runner Environments: GitHub-Hosted vs Self-Hosted
  - ## Conclusion

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
