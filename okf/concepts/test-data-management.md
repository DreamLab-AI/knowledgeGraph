---
okf_version: "0.2"
type: Class
title: Test Data Management
resource: urn:ngm:class:test-data-management
domain: infrastructure
description: Test data management is the discipline of provisioning, maintaining and controlling the datasets used in software testing, including generating synthetic data, masking or anonymising production data, and versioning fixtures so that tests are repeatable and do not leak sensitive information. It is a prerequisite for reliable automated testing processes, since flaky or stale test data is a common so
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:software-testing
---

# Test Data Management

Test data management is the discipline of provisioning, maintaining and controlling the datasets used in software testing, including generating synthetic data, masking or anonymising production data, and versioning fixtures so that tests are repeatable and do not leak sensitive information. It is a prerequisite for reliable automated testing processes, since flaky or stale test data is a common source of non-deterministic test failures. Mature test data management practices integrate with the software testing pipeline to refresh or reset datasets between test runs.
