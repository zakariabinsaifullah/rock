import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { NativeTextControl } from '../../components';

const Inspector = props => {
    const { attributes, setAttributes } = props;
    const { tabTitles } = attributes;

    return (
        <>
            <InspectorControls group="settings">
                <PanelBody title={__('Tabs', 'rsf')} initialOpen={true}>
                    {tabTitles &&
                        tabTitles.length > 0 &&
                        tabTitles.map((item, index) => (
                            <NativeTextControl
                                key={index}
                                label={__('Title', 'rsf')}
                                value={item?.title}
                                onChange={v => {
                                    const newItems = [...tabTitles];
                                    newItems[index].title = v;
                                    setAttributes({
                                        tabTitles: newItems
                                    });
                                }}
                            />
                        ))}
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
