iri:: http://narrativegoldmine.com/infrastructure#Rust
uri:: urn:visionclaw:concept:infrastructure:rust
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:rust
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Rust
content-hash:: sha256-12-2a9b5beadf83
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Rust is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Rust
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - # Distilled Rust Advice
  - **Refactor main.rs into separate layers:**
		- ```
		  // Refactor main function to use dependency injection and minimize hard dependencies.
		  fn refactor_main_to_minimize_dependencies() {
		   // Move database initialization, middleware configuration, and HTTP server setup to separate modules.
		   // Inject database and middleware dependencies into your app as services.
		  }
  - **Encapsulate dependencies in adapters (avoid leaking 3rd party libraries):**
		- ```
		  // Wrap external database connection pool.
		  struct Sqlite {
		   pool: sqlx::SqlitePool,
		  }
		  impl AuthorRepository for Sqlite {
		   async fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError> {
		       // Manage transactions, handle errors, and abstract them from the domain.
		   }
		  }
  - **Decouple domain from transport (HTTP) layer:**
		- ```
		  // Convert HTTP request body to domain model.
		  impl CreateAuthorHttpRequestBody {
		   fn into_domain(self) -> Result<CreateAuthorRequest, AuthorNameEmptyError> {
		       let name = AuthorName::new(&self.name)?;
		       Ok(CreateAuthorRequest::new(name))
		   }
		  }
  - **Set up bootstrapping logic in main.rs:**
		- ```
		  // Main function should focus only on bootstrapping services and starting the server.
		  #[tokio::main]
		  async fn main() -> anyhow::Result<()> {
		   let config = Config::from_env()?;
		   let sqlite = Sqlite::new(&config.database_url).await?;
		   let author_service = Service::new(sqlite);
		   let http_server = HttpServer::new(author_service, config.server_port).await?;
		   http_server.run().await
		  }

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
