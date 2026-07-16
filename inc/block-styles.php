<?php
/**
 * Core Block Styles
 *
 * Registers custom style variations for core (and third-party) blocks.
 *
 * @package Rock_Solid_Financials
 */

if ( ! function_exists( 'rsf_block_styles' ) ) :
	/**
	 * Registers all custom block style variations for the theme.
	 */
	function rsf_block_styles() {
		register_block_style(
			'core/post-excerpt',
			array(
				'name'  => 'outline-link',
				'label' => __( 'Outline Link', 'rock-solid-financials' ),
			)
		);

		register_block_style(
			'core/group',
			array(
				'name'  => 'wrap-mobile',
				'label' => __( 'Wrap Mobile', 'rock-solid-financials' ),
			)
		);


		register_block_style(
			'core/button',
			array(
				'name'  => 'alternative',
				'label' => __( 'Alternative', 'rock-solid-financials' ),
			)
		);

		register_block_style(
			'core/button',
			array(
				'name'  => 'link',
				'label' => __( 'Link', 'rock-solid-financials' ),
			)
		);
	}
endif;
add_action( 'init', 'rsf_block_styles' );
