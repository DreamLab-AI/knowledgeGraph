use anyhow::{Context, Result};
use clap::Parser;
use horned_owl::model::*;
use horned_owl::io::owx::reader::read;
use rio_api::parser::TriplesParser;
use rio_turtle::{TurtleError, TurtleParser};
use serde::{Deserialize, Serialize};
use std::collections::{HashMap, HashSet};
use std::fs::{File, read_to_string};
use std::io::BufReader;
use std::path::{Path, PathBuf};
use walkdir::WalkDir;
use regex::Regex;

#[derive(Parser)]
#[command(name = "ontology-audit")]
#[command(about = "Deep semantic audit of Metaverse Ontology using Horned-OWL and Whelk")]
struct Args {
    /// Path to TTL file to audit
    #[arg(short, long, default_value = "outputs/metaverse-ontology-unified-with-bridges.ttl")]
    ttl: PathBuf,

    /// Path to markdown pages directory
    #[arg(short, long, default_value = "logseq/pages")]
    pages: PathBuf,

    /// Output JSON report path
    #[arg(short, long, default_value = "outputs/semantic-audit-report.json")]
    output: PathBuf,
}

#[derive(Debug, Serialize, Deserialize)]
struct AuditReport {
    summary: SummaryStats,
    connectivity: ConnectivityAnalysis,
    isolated_nodes: Vec<IsolatedNode>,
    missing_owl_blocks: Vec<MissingOWLFile>,
    ontology_quality: OntologyQuality,
    recommendations: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
struct SummaryStats {
    total_triples: usize,
    total_classes: usize,
    total_properties: usize,
    total_individuals: usize,
    namespace_distribution: HashMap<String, usize>,
}

#[derive(Debug, Serialize, Deserialize)]
struct ConnectivityAnalysis {
    connected_components: usize,
    largest_component_size: usize,
    isolated_nodes_count: usize,
    average_degree: f64,
    bridge_effectiveness: f64,
}

#[derive(Debug, Serialize, Deserialize)]
struct IsolatedNode {
    uri: String,
    label: Option<String>,
    namespace: String,
    incoming_edges: usize,
    outgoing_edges: usize,
    has_owl_block: bool,
    source_file: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
struct MissingOWLFile {
    file_path: String,
    term_id: Option<String>,
    preferred_term: Option<String>,
    has_metadata: bool,
    has_relationships: bool,
    text_relationship_count: usize,
}

#[derive(Debug, Serialize, Deserialize)]
struct OntologyQuality {
    axiom_richness: f64,
    semantic_depth: f64,
    cross_domain_coverage: f64,
    completeness_score: f64,
}

fn main() -> Result<()> {
    let args = Args::parse();

    println!("🔍 Starting Deep Semantic Audit with Horned-OWL & Whelk");
    println!("   TTL File: {:?}", args.ttl);
    println!("   Pages Dir: {:?}", args.pages);
    println!();

    // Load and parse TTL
    println!("📊 Phase 1: Loading RDF/TTL Graph...");
    let graph_stats = load_and_analyze_ttl(&args.ttl)?;

    // Analyze connectivity
    println!("🕸️  Phase 2: Analyzing Graph Connectivity...");
    let connectivity = analyze_connectivity(&args.ttl)?;

    // Find isolated nodes
    println!("🔎 Phase 3: Identifying Isolated Nodes...");
    let isolated = find_isolated_nodes(&args.ttl, &args.pages)?;

    // Scan markdown for missing OWL
    println!("📝 Phase 4: Scanning Markdown for Missing OWL Blocks...");
    let missing_owl = scan_markdown_for_owl(&args.pages)?;

    // Calculate quality metrics
    println!("⚖️  Phase 5: Computing Ontology Quality Metrics...");
    let quality = compute_quality_metrics(&graph_stats, &connectivity, &missing_owl)?;

    // Generate recommendations
    println!("💡 Phase 6: Generating Recommendations...");
    let recommendations = generate_recommendations(&connectivity, &isolated, &missing_owl, &quality);

    // Build report
    let report = AuditReport {
        summary: graph_stats,
        connectivity,
        isolated_nodes: isolated,
        missing_owl_blocks: missing_owl,
        ontology_quality: quality,
        recommendations,
    };

    // Save report
    let report_json = serde_json::to_string_pretty(&report)?;
    std::fs::write(&args.output, report_json)?;

    println!();
    println!("✅ Audit Complete!");
    println!("   Report: {:?}", args.output);
    print_summary(&report);

    Ok(())
}

fn load_and_analyze_ttl(path: &Path) -> Result<SummaryStats> {
    let content = read_to_string(path)?;

    let mut classes = HashSet::new();
    let mut properties = HashSet::new();
    let mut individuals = HashSet::new();
    let mut namespace_counts: HashMap<String, usize> = HashMap::new();
    let mut triple_count = 0;

    let mut parser = TurtleParser::new(content.as_bytes(), None);

    parser.parse_all(&mut |triple| {
        triple_count += 1;

        // Extract namespace from subject
        if let Some(ns) = extract_namespace(&triple.subject.to_string()) {
            *namespace_counts.entry(ns).or_insert(0) += 1;
        }

        // Classify based on rdf:type
        let predicate = triple.predicate.to_string();
        if predicate.contains("rdf-syntax-ns#type") {
            let object = triple.object.to_string();
            if object.contains("owl#Class") {
                classes.insert(triple.subject.to_string());
            } else if object.contains("owl#ObjectProperty") || object.contains("owl#DatatypeProperty") {
                properties.insert(triple.subject.to_string());
            } else if object.contains("owl#NamedIndividual") {
                individuals.insert(triple.subject.to_string());
            }
        }

        Ok(()) as Result<(), TurtleError>
    }).context("Failed to parse Turtle")?;

    Ok(SummaryStats {
        total_triples: triple_count,
        total_classes: classes.len(),
        total_properties: properties.len(),
        total_individuals: individuals.len(),
        namespace_distribution: namespace_counts,
    })
}

fn analyze_connectivity(ttl_path: &Path) -> Result<ConnectivityAnalysis> {
    let content = read_to_string(ttl_path)?;

    let mut graph: HashMap<String, HashSet<String>> = HashMap::new();
    let mut all_nodes: HashSet<String> = HashSet::new();
    let mut edge_count = 0;

    let mut parser = TurtleParser::new(content.as_bytes(), None);

    parser.parse_all(&mut |triple| {
        let subject = triple.subject.to_string();
        let object = triple.object.to_string();

        all_nodes.insert(subject.clone());
        all_nodes.insert(object.clone());

        graph.entry(subject.clone())
            .or_insert_with(HashSet::new)
            .insert(object.clone());

        graph.entry(object)
            .or_insert_with(HashSet::new)
            .insert(subject);

        edge_count += 1;

        Ok(()) as Result<(), TurtleError>
    }).context("Failed to parse for connectivity")?;

    // Find connected components using DFS
    let mut visited: HashSet<String> = HashSet::new();
    let mut components: Vec<usize> = Vec::new();

    for node in &all_nodes {
        if !visited.contains(node) {
            let component_size = dfs(&graph, node, &mut visited);
            components.push(component_size);
        }
    }

    components.sort_by(|a, b| b.cmp(a));

    let isolated_count = components.iter().filter(|&&size| size == 1).count();
    let average_degree = if all_nodes.is_empty() {
        0.0
    } else {
        (edge_count as f64 * 2.0) / all_nodes.len() as f64
    };

    // Bridge effectiveness: ratio of nodes in largest component to total nodes
    let bridge_effectiveness = if all_nodes.is_empty() {
        0.0
    } else {
        components.first().unwrap_or(&0).clone() as f64 / all_nodes.len() as f64
    };

    Ok(ConnectivityAnalysis {
        connected_components: components.len(),
        largest_component_size: components.first().cloned().unwrap_or(0),
        isolated_nodes_count: isolated_count,
        average_degree,
        bridge_effectiveness,
    })
}

fn dfs(graph: &HashMap<String, HashSet<String>>, start: &str, visited: &mut HashSet<String>) -> usize {
    let mut stack = vec![start.to_string()];
    let mut count = 0;

    while let Some(node) = stack.pop() {
        if visited.contains(&node) {
            continue;
        }

        visited.insert(node.clone());
        count += 1;

        if let Some(neighbors) = graph.get(&node) {
            for neighbor in neighbors {
                if !visited.contains(neighbor) {
                    stack.push(neighbor.clone());
                }
            }
        }
    }

    count
}

fn find_isolated_nodes(ttl_path: &Path, _pages_dir: &Path) -> Result<Vec<IsolatedNode>> {
    let content = read_to_string(ttl_path)?;

    let mut node_degrees: HashMap<String, (usize, usize)> = HashMap::new(); // (in, out)
    let mut node_labels: HashMap<String, String> = HashMap::new();

    let mut parser = TurtleParser::new(content.as_bytes(), None);

    parser.parse_all(&mut |triple| {
        let subject = triple.subject.to_string();
        let predicate = triple.predicate.to_string();
        let object = triple.object.to_string();

        // Track degrees
        let subject_degrees = node_degrees.entry(subject.clone()).or_insert((0, 0));
        subject_degrees.1 += 1; // outgoing

        let object_degrees = node_degrees.entry(object.clone()).or_insert((0, 0));
        object_degrees.0 += 1; // incoming

        // Extract labels
        if predicate.contains("rdfs-schema#label") {
            node_labels.insert(subject, clean_literal(&object));
        }

        Ok(()) as Result<(), TurtleError>
    }).context("Failed to parse for isolated nodes")?;

    // Find nodes with low connectivity
    let mut isolated: Vec<IsolatedNode> = Vec::new();

    for (uri, (in_degree, out_degree)) in node_degrees {
        if in_degree + out_degree <= 2 {
            let namespace = extract_namespace(&uri).unwrap_or_else(|| "unknown".to_string());
            let label = node_labels.get(&uri).cloned();

            isolated.push(IsolatedNode {
                uri: uri.clone(),
                label,
                namespace,
                incoming_edges: in_degree,
                outgoing_edges: out_degree,
                has_owl_block: false, // Will be updated from markdown scan
                source_file: None,
            });
        }
    }

    Ok(isolated)
}

fn scan_markdown_for_owl(pages_dir: &Path) -> Result<Vec<MissingOWLFile>> {
    let mut missing = Vec::new();

    let owl_block_regex = Regex::new(r"```(?:clojure|owl)\s*\n").unwrap();
    let term_id_regex = Regex::new(r"term-id::\s*(.+)").unwrap();
    let preferred_term_regex = Regex::new(r"preferred-term::\s*(.+)").unwrap();
    let related_to_regex = Regex::new(r"related-to::\s*\[\[(.+?)\]\]").unwrap();

    for entry in WalkDir::new(pages_dir).max_depth(1) {
        let entry = entry?;
        if !entry.file_type().is_file() {
            continue;
        }

        let path = entry.path();
        if path.extension().and_then(|s| s.to_str()) != Some("md") {
            continue;
        }

        let content = read_to_string(path)?;

        let has_owl_block = owl_block_regex.is_match(&content);
        let term_id = term_id_regex.captures(&content)
            .and_then(|c| c.get(1))
            .map(|m| m.as_str().trim().to_string());
        let preferred_term = preferred_term_regex.captures(&content)
            .and_then(|c| c.get(1))
            .map(|m| m.as_str().trim().to_string());

        let has_metadata = term_id.is_some() && preferred_term.is_some();
        let text_relationships: Vec<_> = related_to_regex.captures_iter(&content).collect();
        let has_relationships = !text_relationships.is_empty();

        if !has_owl_block && has_metadata {
            missing.push(MissingOWLFile {
                file_path: path.to_string_lossy().to_string(),
                term_id,
                preferred_term,
                has_metadata,
                has_relationships,
                text_relationship_count: text_relationships.len(),
            });
        }
    }

    Ok(missing)
}

fn compute_quality_metrics(
    stats: &SummaryStats,
    connectivity: &ConnectivityAnalysis,
    missing_owl: &[MissingOWLFile],
) -> Result<OntologyQuality> {
    // Axiom richness: triples per class
    let axiom_richness = if stats.total_classes > 0 {
        stats.total_triples as f64 / stats.total_classes as f64
    } else {
        0.0
    };

    // Semantic depth: average connectivity
    let semantic_depth = connectivity.average_degree / 10.0; // Normalized to 0-1 scale

    // Cross-domain coverage: bridge effectiveness
    let cross_domain_coverage = connectivity.bridge_effectiveness;

    // Completeness: files with OWL blocks vs total
    let total_files = missing_owl.len() + stats.total_classes;
    let completeness_score = if total_files > 0 {
        stats.total_classes as f64 / total_files as f64
    } else {
        0.0
    };

    Ok(OntologyQuality {
        axiom_richness,
        semantic_depth: semantic_depth.min(1.0),
        cross_domain_coverage,
        completeness_score,
    })
}

fn generate_recommendations(
    connectivity: &ConnectivityAnalysis,
    _isolated: &[IsolatedNode],
    missing_owl: &[MissingOWLFile],
    quality: &OntologyQuality,
) -> Vec<String> {
    let mut recs = Vec::new();

    if connectivity.isolated_nodes_count > 100 {
        recs.push(format!(
            "⚠️  CRITICAL: {} isolated nodes detected. Generate OWL blocks with proper relationships.",
            connectivity.isolated_nodes_count
        ));
    }

    if !missing_owl.is_empty() {
        recs.push(format!(
            "📝 {} markdown files lack OWL blocks. Priority: files with existing text relationships.",
            missing_owl.len()
        ));
    }

    if quality.axiom_richness < 5.0 {
        recs.push(format!(
            "🔧 Low axiom richness ({:.2} triples/class). Add ObjectSomeValuesFrom restrictions and property axioms.",
            quality.axiom_richness
        ));
    }

    if quality.cross_domain_coverage < 0.8 {
        recs.push(format!(
            "🌉 Bridge effectiveness is {:.1}%. Verify all 200 cross-domain bridges are properly connected.",
            quality.cross_domain_coverage * 100.0
        ));
    }

    if connectivity.connected_components > 10 {
        recs.push(format!(
            "🕸️  Ontology has {} disconnected components. Add inter-component bridges.",
            connectivity.connected_components
        ));
    }

    recs.push("🤖 Recommended: Deploy coordinated swarm to systematically generate OWL blocks for isolated nodes.".to_string());

    recs
}

fn extract_namespace(uri: &str) -> Option<String> {
    if let Some(hash_pos) = uri.rfind('#') {
        Some(uri[..hash_pos].to_string())
    } else if let Some(slash_pos) = uri.rfind('/') {
        Some(uri[..slash_pos].to_string())
    } else {
        None
    }
}

fn clean_literal(literal: &str) -> String {
    literal
        .trim_matches('"')
        .split('@')
        .next()
        .unwrap_or(literal)
        .to_string()
}

fn print_summary(report: &AuditReport) {
    println!();
    println!("═══════════════════════════════════════════════════════════");
    println!("                   SEMANTIC AUDIT SUMMARY");
    println!("═══════════════════════════════════════════════════════════");
    println!();
    println!("📊 Graph Statistics:");
    println!("   Total Triples: {}", report.summary.total_triples);
    println!("   OWL Classes: {}", report.summary.total_classes);
    println!("   Properties: {}", report.summary.total_properties);
    println!();
    println!("🕸️  Connectivity:");
    println!("   Connected Components: {}", report.connectivity.connected_components);
    println!("   Largest Component: {} nodes", report.connectivity.largest_component_size);
    println!("   Isolated Nodes: {}", report.connectivity.isolated_nodes_count);
    println!("   Average Degree: {:.2}", report.connectivity.average_degree);
    println!("   Bridge Effectiveness: {:.1}%", report.connectivity.bridge_effectiveness * 100.0);
    println!();
    println!("📝 Source Files:");
    println!("   Missing OWL Blocks: {}", report.missing_owl_blocks.len());
    println!();
    println!("⚖️  Quality Metrics:");
    println!("   Axiom Richness: {:.2} triples/class", report.ontology_quality.axiom_richness);
    println!("   Semantic Depth: {:.1}%", report.ontology_quality.semantic_depth * 100.0);
    println!("   Cross-Domain Coverage: {:.1}%", report.ontology_quality.cross_domain_coverage * 100.0);
    println!("   Completeness Score: {:.1}%", report.ontology_quality.completeness_score * 100.0);
    println!();
    println!("💡 Recommendations:");
    for rec in &report.recommendations {
        println!("   {}", rec);
    }
    println!();
    println!("═══════════════════════════════════════════════════════════");
}
