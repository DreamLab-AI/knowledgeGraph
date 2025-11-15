use clap::{Parser, Subcommand};
use logseq_publisher_rust::owl_extractor::{
    load_webvowl_ontology, save_ontology, get_ontology_stats, OntologyStats
};
use logseq_publisher_rust::{Graph, ApiGenerator, ApiGeneratorConfig};
use std::path::PathBuf;
use std::process;
use walkdir::WalkDir;

#[derive(Parser)]
#[command(name = "logseq-publisher")]
#[command(about = "Logseq Publisher CLI - Export knowledge graphs and ontologies", long_about = None)]
#[command(version)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Ontology operations
    Ontology {
        #[command(subcommand)]
        subcommand: OntologyCommands,
    },
    /// Export Logseq graph to various formats
    Export {
        /// Input directory containing Logseq pages
        #[arg(short, long, value_name = "DIR")]
        input: PathBuf,

        /// Output directory
        #[arg(short, long, value_name = "DIR")]
        output: PathBuf,

        /// Include ontology export
        #[arg(long)]
        with_ontology: bool,

        /// Generate Phase 5 API files (search index, pages, backlinks)
        #[arg(long, default_value = "true")]
        with_api: bool,
    },
}

#[derive(Subcommand)]
enum OntologyCommands {
    /// Extract ontology to JSON format
    Extract {
        /// Input ontology file (JSON or TTL)
        #[arg(short, long, value_name = "FILE")]
        input: PathBuf,

        /// Output ontology file (JSON)
        #[arg(short, long, value_name = "FILE")]
        output: PathBuf,

        /// Output format
        #[arg(long, default_value = "json")]
        format: String,
    },

    /// Show ontology statistics
    Stats {
        /// Input ontology file (JSON)
        #[arg(short, long, value_name = "FILE")]
        input: PathBuf,
    },

    /// Validate ontology structure
    Validate {
        /// Input ontology file (JSON)
        #[arg(short, long, value_name = "FILE")]
        input: PathBuf,
    },
}

fn main() {
    let cli = Cli::parse();

    match cli.command {
        Commands::Ontology { subcommand } => {
            if let Err(e) = handle_ontology_command(subcommand) {
                eprintln!("❌ Error: {}", e);
                process::exit(1);
            }
        }
        Commands::Export { input, output, with_ontology, with_api } => {
            if let Err(e) = handle_export_command(input, output, with_ontology, with_api) {
                eprintln!("❌ Error: {}", e);
                process::exit(1);
            }
        }
    }
}

fn handle_ontology_command(subcommand: OntologyCommands) -> Result<(), String> {
    match subcommand {
        OntologyCommands::Extract { input, output, format } => {
            println!("🔍 Loading ontology from: {}", input.display());

            let ontology = load_webvowl_ontology(&input)?;

            match format.as_str() {
                "json" => {
                    println!("💾 Saving ontology to: {}", output.display());
                    save_ontology(&ontology, &output)?;
                }
                "ttl" | "turtle" => {
                    return Err("TTL export not yet implemented. Use 'json' format.".to_string());
                }
                _ => {
                    return Err(format!("Unsupported format: {}. Use 'json' or 'ttl'.", format));
                }
            }

            let stats = get_ontology_stats(&ontology);
            println!("✅ Ontology exported successfully!");
            print_stats(&stats);

            Ok(())
        }

        OntologyCommands::Stats { input } => {
            println!("🔍 Loading ontology from: {}", input.display());

            let ontology = load_webvowl_ontology(&input)?;
            let stats = get_ontology_stats(&ontology);

            println!("\n📊 Ontology Statistics:");
            print_stats(&stats);

            Ok(())
        }

        OntologyCommands::Validate { input } => {
            println!("🔍 Validating ontology: {}", input.display());

            let ontology = load_webvowl_ontology(&input)?;

            // Basic validation
            let mut errors = Vec::new();

            if ontology.header.title.is_empty() {
                errors.push("Missing ontology title".to_string());
            }

            if ontology.namespace.is_empty() {
                errors.push("No namespaces defined".to_string());
            }

            if ontology.class.is_empty() {
                errors.push("No classes defined (ontology is empty)".to_string());
            }

            // Check class attributes match classes
            let class_ids: std::collections::HashSet<_> = ontology.class.iter().map(|c| &c.id).collect();
            for attr in &ontology.class_attribute {
                if !class_ids.contains(&attr.id) {
                    errors.push(format!("Class attribute references non-existent class: {}", attr.id));
                }
            }

            // Check property attributes match properties
            let property_ids: std::collections::HashSet<_> = ontology.property.iter().map(|p| &p.id).collect();
            for attr in &ontology.property_attribute {
                if !property_ids.contains(&attr.id) {
                    errors.push(format!("Property attribute references non-existent property: {}", attr.id));
                }
            }

            if errors.is_empty() {
                println!("✅ Ontology is valid!");
                let stats = get_ontology_stats(&ontology);
                print_stats(&stats);
            } else {
                println!("❌ Validation errors found:");
                for error in errors {
                    println!("   • {}", error);
                }
                return Err("Ontology validation failed".to_string());
            }

            Ok(())
        }
    }
}

fn handle_export_command(input: PathBuf, output: PathBuf, with_ontology: bool, with_api: bool) -> Result<(), String> {
    println!("📦 Exporting Logseq graph...");
    println!("   Input: {}", input.display());
    println!("   Output: {}", output.display());

    if !input.exists() {
        return Err(format!("Input directory does not exist: {}", input.display()));
    }

    // Create output directory
    std::fs::create_dir_all(&output)
        .map_err(|e| format!("Failed to create output directory: {}", e))?;

    // Parse all markdown files into a graph
    println!("📖 Parsing Logseq pages...");
    let mut graph = Graph::new();

    // Handle both "mainKnowledgeGraph" and "mainKnowledgeGraph/pages" as input
    let pages_dir = if input.ends_with("pages") {
        input.clone()
    } else {
        input.join("pages")
    };

    if !pages_dir.exists() {
        return Err(format!("Pages directory not found: {}", pages_dir.display()));
    }

    let mut page_count = 0;
    for entry in WalkDir::new(&pages_dir).into_iter().filter_map(|e| e.ok()) {
        if entry.file_type().is_file() {
            if let Some(ext) = entry.path().extension() {
                if ext == "md" {
                    let content = std::fs::read_to_string(entry.path())
                        .map_err(|e| format!("Failed to read file: {}", e))?;

                    let path = entry.path().to_string_lossy().to_string();
                    match logseq_publisher_rust::parse_logseq_page(&content, &path) {
                        Ok(page) => {
                            graph.add_page(page);
                            page_count += 1;
                        }
                        Err(e) => {
                            eprintln!("⚠️  Failed to parse {}: {}", entry.path().display(), e);
                        }
                    }
                }
            }
        }
    }

    println!("✅ Parsed {} pages", page_count);

    // Generate Phase 5 API files if requested
    if with_api {
        println!("\n🚀 Generating Phase 5 API files...");

        let api_config = ApiGeneratorConfig {
            output_dir: output.join("api"),
            max_content_length: 5000,
            include_private: false,
        };

        let api_generator = ApiGenerator::new(api_config);

        api_generator.generate(&graph)
            .map_err(|e| format!("Failed to generate API files: {}", e))?;

        println!("✅ Phase 5 API files generated successfully!");
    }

    if with_ontology {
        println!("\n🔍 Extracting ontology...");

        // Look for existing ontology file in project root or input directory
        let ontology_paths = vec![
            input.parent().unwrap_or(&input).join("narrativegoldmine-ontology.json"),
            input.parent().unwrap_or(&input).join("ontology-full-bridged.json"),
            PathBuf::from("narrativegoldmine-ontology.json"),
            PathBuf::from("ontology-full-bridged.json"),
        ];

        let mut found = false;
        for ontology_path in ontology_paths {
            if ontology_path.exists() {
                let ontology = load_webvowl_ontology(&ontology_path)?;
                let ontology_output = output.join("ontology.json");
                save_ontology(&ontology, &ontology_output)?;

                let stats = get_ontology_stats(&ontology);
                println!("✅ Ontology exported to: {}", ontology_output.display());
                print_stats(&stats);
                found = true;
                break;
            }
        }

        if !found {
            println!("⚠️  No ontology file found. Searched locations:");
            println!("   • narrativegoldmine-ontology.json");
            println!("   • ontology-full-bridged.json");
        }
    }

    Ok(())
}

fn print_stats(stats: &OntologyStats) {
    println!("   Title: {}", stats.title);
    println!("   Version: {}", stats.version);
    println!("   Classes: {}", stats.class_count);
    println!("   Properties: {}", stats.property_count);
    println!("   Namespaces: {}", stats.namespace_count);
}
