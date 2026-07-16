import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { NativeRangeControl } from '../../components';

const Inspector = props => {
    const { attributes, setAttributes } = props;
    const { contentGap } = attributes;

    return (
        <InspectorControls>
            <PanelBody title={__('Timeline Settings', 'craft-max')} initialOpen={true}>
                <NativeRangeControl
                    label={__('Gap (icon → content)', 'craft-max')}
                    value={contentGap}
                    onChange={value => setAttributes({ contentGap: value })}
                    min={0}
                    max={100}
                    step={1}
                    resetFallbackValue={16}
                />
            </PanelBody>
        </InspectorControls>
    );
};

export default Inspector;
