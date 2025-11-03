/**
 * VDaily Format - GitHub-Style Code Blocks
 * Version: 1.0.0
 */

(function($) {
    'use strict';
    
    /**
     * Initialize code blocks on page load
     */
    $(document).ready(function() {
        initializeCodeBlocks();
    });
    
    /**
     * Initialize GitHub-style code blocks
     */
    function initializeCodeBlocks() {
        // Find all code blocks within the formatted content
        $('.vdaily-format-content pre code').each(function() {
            var $code = $(this);
            var $pre = $code.parent('pre');
            
            // Skip if already initialized
            if ($pre.hasClass('vdaily-code-initialized')) {
                return;
            }
            
            // Get the code content
            var codeContent = $code.text();
            
            // Detect language from class name (e.g., language-javascript)
            var language = detectLanguage($code);
            
            // If no language detected, default to plain text
            if (!language) {
                language = 'text';
            }
            
            // Create a wrapper for the code block
            var $wrapper = $('<div class="code-block-wrapper"></div>');
            $pre.wrap($wrapper);
            
            // Add language indicator if language is not plain text
            var hasLanguage = language && language !== 'text';
            if (hasLanguage) {
                $pre.before('<span class="code-block-language">' + language + '</span>');
                // Add class to wrapper when language indicator is present
                $pre.parent('.code-block-wrapper').addClass('has-language');
            }
            
            // Add copy button
            var $copyButton = $('<button class="code-copy-button" title="Copy code">Copy</button>');
            $pre.before($copyButton);
            
            // Copy button click handler
            $copyButton.on('click', function(e) {
                e.preventDefault();
                copyToClipboard(codeContent, $(this));
            });
            
            // Mark as initialized
            $pre.addClass('vdaily-code-initialized');
        });
    }
    
    /**
     * Detect language from code element classes
     */
    function detectLanguage($code) {
        var classes = $code.attr('class');
        
        if (!classes) {
            return null;
        }
        
        // Look for language- or lang- prefix
        var match = classes.match(/(?:language|lang)-(\w+)/);
        
        if (match && match[1]) {
            return match[1].toLowerCase();
        }
        
        return null;
    }
    
    /**
     * Copy text to clipboard
     */
    function copyToClipboard(text, $button) {
        // Use modern Clipboard API if available
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopySuccess($button);
            }).catch(function(err) {
                // Fallback method
                fallbackCopyToClipboard(text, $button);
            });
        } else {
            // Fallback method for older browsers
            fallbackCopyToClipboard(text, $button);
        }
    }
    
    /**
     * Fallback copy method for older browsers
     */
    function fallbackCopyToClipboard(text, $button) {
        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(text).select();
        try {
            document.execCommand('copy');
            showCopySuccess($button);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        $temp.remove();
    }
    
    /**
     * Show copy success feedback
     */
    function showCopySuccess($button) {
        var originalText = $button.text();
        $button.text('Copied!').addClass('copied');
        setTimeout(function() {
            $button.text(originalText).removeClass('copied');
        }, 2000);
    }
    
})(jQuery);
