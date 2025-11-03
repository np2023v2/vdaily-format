# Changelog

All notable changes to the VDaily Format WordPress plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **BREAKING**: Removed CodeMirror integration and replaced with GitHub-style code blocks
- Simplified code block display without line numbers sidebar
- Updated to GitHub dark theme styling (#0d1117 background)
- Cleaner, more minimal code block presentation
- Copy button and language indicator now positioned in dedicated header area
- Removed all CodeMirror dependencies from frontend and admin

### Fixed
- Fixed code block button overlap issues where Copy button and language indicator overlapped each other
- Fixed layout issues where buttons overlapped with code content
- Removed intrusive line numbers that appeared in corner
- Simplified code block structure for better performance

## [1.0.0] - 2025-10-14

### Added
- Initial release of VDaily Format plugin
- Modern post content formatting with clean typography
- CodeMirror integration for syntax-highlighted code blocks
- Support for 20+ programming languages including:
  - JavaScript/TypeScript
  - PHP
  - Python
  - CSS/SCSS/SASS
  - HTML/XML
  - Java, C/C++, C#
  - Go, Rust
  - SQL, JSON
  - Markdown, Bash/Shell, YAML
- Responsive design that works on all devices
- Read-only code blocks with line numbers
- Monokai theme for code syntax highlighting
- Modern styling for all content elements:
  - Headings with borders
  - Styled links with hover effects
  - Beautiful blockquotes
  - Clean tables
  - Responsive images with shadows
- Automatic language detection from CSS classes
- Frontend and admin asset enqueuing
- Comprehensive documentation and demo page

### Features
- Drop-in installation, no configuration required
- Uses CDN for CodeMirror resources (fast loading)
- Compatible with WordPress 5.0+
- GPL v2 licensed
- Singleton pattern for plugin class
- WordPress coding standards compliant

[1.0.0]: https://github.com/np2023v2/vdaily-format/releases/tag/v1.0.0
