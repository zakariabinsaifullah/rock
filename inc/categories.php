<?php
/**
 * Block & Pattern Categories
 *
 * Registers custom block categories and block pattern categories
 * used throughout this theme.
 *
 * @package Rock_Solid_Financials
 */

if ( ! function_exists( 'rsf_block_categories' ) ) :
	/**
	 * Adds the "Brilliant Blocks" category to the block inserter.
	 *
	 * @param  array                   $block_categories     Existing block categories.
	 * @param  WP_Block_Editor_Context $block_editor_context Current editor context.
	 * @return array
	 */
	function rsf_block_categories( $block_categories, $block_editor_context ) {
		return array_merge(
			array(
				array(
					'slug'  => 'rsf',
					'title' => __( 'Rock Solid Financials', 'rock-solid-financials' ),
				),
			),
			$block_categories

		);
	}
endif;
add_filter( 'block_categories_all', 'rsf_block_categories', 10, 2 );


if ( ! function_exists( 'rsf_pattern_categories' ) ) :
	/**
	 * Registers the "Rock Solid Financials" block pattern category.
	 */
	function rsf_pattern_categories() {
		register_block_pattern_category(
			'rsf',
			array(
				'label'       => __( 'Rock Solid Financials', 'rock-solid-financials' ),
				'description' => __( 'A collection of Rock Solid Financials patterns.', 'rock-solid-financials' ),
			)
		);
	}
endif;
add_action( 'init', 'rsf_pattern_categories' );
