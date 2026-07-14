<?php
/**
 * Theme Setup
 *
 * Handles core theme setup tasks that run on the `after_setup_theme` hook:
 * post format support and editor stylesheet registration.
 *
 * @package Rock_Solid_Financials
 */

if ( ! function_exists( 'rsf_post_format_setup' ) ) :
	/**
	 * Declares support for the post formats used by this theme.
	 */
	function rsf_post_format_setup() {
		add_theme_support(
			'post-formats',
			array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' )
		);
	}
endif;
add_action( 'after_setup_theme', 'rsf_post_format_setup' );


if ( ! function_exists( 'rsf_editor_style' ) ) :
	/**
	 * Loads the editor stylesheet so the editing canvas matches the front end.
	 */
	function rsf_editor_style() {
		add_editor_style( 'assets/css/editor-style.css' );
	}
endif;
add_action( 'after_setup_theme', 'rsf_editor_style' );
