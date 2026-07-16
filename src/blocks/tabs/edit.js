// import editor style
import './editor.scss';

/**
 * WordPress Dependencies
 */
import { RichText, useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { Fragment, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { dispatch, select } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

/**
 * External Dependencies
 */
import classnames from 'classnames';
import { times } from 'lodash';

/**
 * Internal Dependencies
 */
import Inspector from './inspector';

const Edit = props => {
    const { attributes, setAttributes, clientId, isSelected } = props;

    const { uniqueId, tabTitles, tabChildCount, tabTitleTag } = attributes;

    /**
     * Default Tab Titles
     */
    useEffect(() => {
        if (tabTitles.length === 0) {
            setAttributes({
                tabTitles: [
                    { id: '1', title: __('Tab 1', 'rsf') },
                    { id: '2', title: __('Tab 2', 'rsf') },
                    { id: '3', title: __('Tab 3', 'rsf') }
                ]
            });
        }
    }, []);

    /**
     * Block Props
     */
    const blockProps = useBlockProps({
        className: classnames(uniqueId)
    });

    /**
     * Inner Blocks
     */
    const innerBlocksProps = useInnerBlocksProps(
        { className: 'tabs-content' },
        {
            templateLock: 'all',
            template: times(tabChildCount, n => [
                'rsf/tab',
                {
                    tabId: `${n + 1}`,
                    parentTabId: uniqueId
                }
            ]),
            allowedBlocks: ['rsf/tab']
        }
    );

    /**
     * Tabs Interactivity
     */
    const tabRef = useRef(null);
    const [activeTabIndex, setActiveTabIndex] = useState('1');

    const handleTabClick = tabId => {
        const tabsParent = tabRef?.current;
        if (!tabsParent) return;

        const tabItems = tabsParent.querySelectorAll('.tabs-content .tab-item');

        tabItems.forEach(tab => {
            tab.style.display = tab.getAttribute('data-tab') === tabId ? 'block' : 'none';
        });

        setActiveTabIndex(tabId);
    };
    const appendBtn = () => {
        const nextIndex = tabTitles.length + 1;
        const newTabs = [...tabTitles, { id: String(nextIndex), title: `Tab ${nextIndex}` }];
        setAttributes({
            tabTitles: newTabs,
            tabChildCount: nextIndex
        });
        const newBlock = createBlock('rsf/tab', {
            tabId: String(nextIndex),
            parentTabId: uniqueId
        });
        const childBlocks = select('core/block-editor').getBlocks(clientId);
        dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);

        setActiveTabIndex(String(nextIndex));
    };

    return (
        <Fragment>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton icon="insert" title={__('Add Button', 'rsf')} onClick={appendBtn} />
                </ToolbarGroup>
            </BlockControls>
            {isSelected && <Inspector {...props} handleTabClick={handleTabClick} uniqueId={uniqueId} />}

            <div {...blockProps}>
                <div className="tabs-wrapper" role="tablist" ref={tabRef}>
                    <div className="tabs-nav">
                        {tabTitles.map((tab, index) => (
                            <Fragment key={index}>
                                <div
                                    className={classnames('nav-item', {
                                        active: tab.id === activeTabIndex
                                    })}
                                    role="tab"
                                    data-nav={tab.id}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    <div className="nav-item-inner">
                                        <span className="nav-item-number">{index + 1}</span>
                                        <div className="tab-content">
                                            <RichText
                                                tagName={tabTitleTag}
                                                className="tab-title"
                                                value={tab.title}
                                                onChange={value => {
                                                    const newTabs = [...tabTitles];
                                                    newTabs[index].title = value;
                                                    setAttributes({ tabTitles: newTabs });
                                                }}
                                                placeholder={__('Title', 'rsf')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {index < tabTitles.length - 1 && (
                                    <span className="nav-arrow" aria-hidden="true">
                                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m17.957 27.796-1.647-1.634 4.325-4.325H10.5v-2.4h10.135l-4.325-4.32 1.647-1.64 7.16 7.16z"
                                                fill="#6e88a4"
                                            />
                                        </svg>
                                    </span>
                                )}
                            </Fragment>
                        ))}
                    </div>

                    <div {...innerBlocksProps} />
                </div>
            </div>
        </Fragment>
    );
};

export default Edit;
