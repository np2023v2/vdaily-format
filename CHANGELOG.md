# Changelog

All notable changes to the VDaily Format WordPress plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Fixed code block button overlap issues where Copy button and language indicator overlapped each other
- Fixed layout issues where buttons overlapped with code content and line numbers
- Improved CodeMirror line number styling with muted colors for better visual hierarchy
- Enhanced code block wrapper with dedicated header space (36px) for buttons
- Smart button positioning: Copy button on left when language indicator present, on right otherwise
- Fixed code block border-radius and background consistency
- Added subtle border between line number gutter and code content

### Changed
- Moved background and box-shadow from CodeMirror element to wrapper for better visual consistency
- Updated button positioning logic with `.has-language` class for context-aware styling
- Improved CodeMirror integration with wrapper for seamless appearance

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
