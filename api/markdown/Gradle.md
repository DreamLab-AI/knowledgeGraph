Gradle is an open-source build-automation tool that uses a directed acyclic graph of tasks to compile, test, and package software, primarily for JVM languages such as Java, Kotlin, and Groovy. Its build scripts are written as a domain-specific language in Groovy or Kotlin, and it supports incremental builds, dependency management, and a build cache for speed. It is widely used in enterprise and Android development, including blockchain platforms built on the JVM.

### Content

- Gradle models builds as task graphs, resolving dependencies from repositories such as Maven Central and executing only the tasks whose inputs changed, aided by an incremental engine and local or remote build cache. Plugins extend it for testing, code quality, containerisation, and platform-specific packaging. Its flexibility and performance have made it the default build system for Android and a common choice for large multi-module JVM projects.

