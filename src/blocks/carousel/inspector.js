import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    __experimentalBorderBoxControl as BorderBoxControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToolsPanel as ToolsPanel, // eslint-disable-line
    __experimentalToolsPanelItem as ToolsPanelItem // eslint-disable-line
} from '@wordpress/components';

import {
    NativeToggleGroupControl,
    NativeRangeControl,
    NativeToggleControl,
    PanelColorControl,
    NativeSelectControl,
    NativeResponsiveControl,
    NativeUnitControl,
    NativeIconPicker,
    NativeBoxControl,
    NativeBorderBoxControl
} from '../../components';

const Inspector = props => {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        heightType,
        heights,
        columns,
        gaps,
        autoplay,
        columnOnMobile,
        loop,
        showArrows,
        navType,
        showPagination,
        pnSize,
        paSize,
        pRadius,
        paRadius,
        pgap,
        paginationColor,
        npaginationHeight,
        apaginationHeight,
        delay,
        navColor,
        navbgColor,
        navBorderColor,
        navSize,
        navIconSize,
        navBorderRadius,
        navPadding,
        navBorder,
        navEdgeGap,
        navPosition,
        prevIconName,
        prevIconType,
        prevCustomSvg,
        nextIconName,
        nextIconType,
        nextCustomSvg,
        pAlign
    } = attributes;

    return (
        <>
            <InspectorControls group="settings">
                <PanelBody title={__('General', 'rock-solid-financials')} initialOpen={true}>
                    <NativeToggleGroupControl
                        label={__('Height Type', 'rock-solid-financials')}
                        value={heightType}
                        onChange={value => setAttributes({ heightType: value })}
                        options={[
                            { label: __('Adaptive', 'rock-solid-financials'), value: 'adaptive' },
                            { label: __('Fixed', 'rock-solid-financials'), value: 'fixed' }
                        ]}
                    />
                    {heightType === 'fixed' && (
                        <NativeResponsiveControl label={__('Height', 'rock-solid-financials')} props={props}>
                            <NativeUnitControl
                                label={__('Slider Height', 'rock-solid-financials')}
                                value={heights[resMode]}
                                onChange={value => {
                                    const newHeights = { ...heights, [resMode]: value };
                                    setAttributes({ heights: newHeights });
                                }}
                            />
                        </NativeResponsiveControl>
                    )}
                </PanelBody>
                <PanelBody title={__('Slider Options', 'rock-solid-financials')} initialOpen={false}>
                    <NativeResponsiveControl label={__('Columns', 'rock-solid-financials')} props={props}>
                        <NativeRangeControl
                            value={columns[resMode]}
                            onChange={value => {
                                const newColumns = { ...columns, [resMode]: value };
                                setAttributes({ columns: newColumns });
                            }}
                            min={1}
                            max={6}
                            step={1}
                        />
                    </NativeResponsiveControl>
                    <NativeResponsiveControl label={__('Gaps', 'rock-solid-financials')} props={props}>
                        <NativeRangeControl
                            value={gaps[resMode]}
                            onChange={value => {
                                const newGaps = { ...gaps, [resMode]: value };
                                setAttributes({ gaps: newGaps });
                            }}
                            min={0}
                            max={100}
                            step={1}
                        />
                    </NativeResponsiveControl>
                    <NativeToggleControl
                        label={__('Column on mobile', 'rock-solid-financials')}
                        checked={columnOnMobile}
                        onChange={value => setAttributes({ columnOnMobile: value })}
                    />
                    <NativeToggleControl label={__('Loop', 'rock-solid-financials')} checked={loop} onChange={value => setAttributes({ loop: value })} />
                    <NativeToggleControl
                        label={__('Autoplay', 'rock-solid-financials')}
                        checked={autoplay}
                        onChange={value => setAttributes({ autoplay: value })}
                    />
                    {autoplay && (
                        <NativeRangeControl
                            label={__('Delay (ms)', 'rock-solid-financials')}
                            value={delay}
                            onChange={value => setAttributes({ delay: value })}
                            min={1000}
                            max={10000}
                            step={500}
                        />
                    )}
                    <NativeToggleControl
                        label={__('Show Arrows', 'rock-solid-financials')}
                        checked={showArrows}
                        onChange={value => setAttributes({ showArrows: value })}
                    />
                    <NativeToggleControl
                        label={__('Show Pagination', 'rock-solid-financials')}
                        checked={showPagination}
                        onChange={value => setAttributes({ showPagination: value })}
                    />
                    {showArrows && (
                        <NativeToggleGroupControl
                            label={__('Navigation Type', 'rock-solid-financials')}
                            value={navType}
                            onChange={value => setAttributes({ navType: value })}
                            options={[
                                { label: __('Inside', 'rock-solid-financials'), value: 'inside' },
                                { label: __('Outside', 'rock-solid-financials'), value: 'outside' }
                            ]}
                        />
                    )}
                    {showArrows && (
                        <NativeSelectControl
                            label={__('Navigation Position', 'rock-solid-financials')}
                            value={navPosition}
                            onChange={value => setAttributes({ navPosition: value })}
                            options={[
                                { label: __('Middle', 'rock-solid-financials'), value: 'middle' },
                                { label: __('Top Left', 'rock-solid-financials'), value: 'top-left' },
                                { label: __('Top Right', 'rock-solid-financials'), value: 'top-right' },
                                { label: __('Bottom Left', 'rock-solid-financials'), value: 'bottom-left' },
                                { label: __('Bottom Right', 'rock-solid-financials'), value: 'bottom-right' },
                                { label: __('Bottom Split', 'rock-solid-financials'), value: 'bottom-split' }
                            ]}
                        />
                    )}
                    {showArrows && (
                        <>
                            <NativeIconPicker
                                label={__('Previous Icon', 'rock-solid-financials')}
                                onIconSelect={(iconName, iconType) => {
                                    setAttributes({
                                        prevIconName: iconName,
                                        prevIconType: iconType,
                                        prevCustomSvg: undefined
                                    });
                                }}
                                onCustomSvgInsert={({ customSvgCode, iconType }) => {
                                    setAttributes({
                                        prevCustomSvg: customSvgCode,
                                        prevIconType: iconType
                                    });
                                }}
                                iconName={prevIconName}
                                customSvgCode={prevCustomSvg}
                            />
                            <NativeIconPicker
                                label={__('Next Icon', 'rock-solid-financials')}
                                onIconSelect={(iconName, iconType) => {
                                    setAttributes({
                                        nextIconName: iconName,
                                        nextIconType: iconType,
                                        nextCustomSvg: undefined
                                    });
                                }}
                                onCustomSvgInsert={({ customSvgCode, iconType }) => {
                                    setAttributes({
                                        nextCustomSvg: customSvgCode,
                                        nextIconType: iconType
                                    });
                                }}
                                iconName={nextIconName}
                                customSvgCode={nextCustomSvg}
                            />
                        </>
                    )}
                    {
                        showPagination && (
                            <NativeToggleGroupControl
                                label={__('Pagination Align', 'rock-solid-financials')}
                                value={pAlign}
                                onChange={value => setAttributes({ pAlign: value })}
                                options={[
                                    { label: __('Left', 'rock-solid-financials'), value: '' },
                                    { label: __('Center', 'rock-solid-financials'), value: 'center' }
                                ]}
                            />
                        )
                    }
                </PanelBody>
            </InspectorControls>
            <InspectorControls group="styles">
                {showPagination && (
                    <ToolsPanel
                        label={__('Pagination', 'rock-solid-financials')}
                        resetAll={() =>
                            setAttributes({
                                pnSize: undefined,
                                paSize: undefined,
                                pRadius: undefined,
                                paRadius: undefined,
                                paginationColor: undefined,
                                pgap: undefined,
                                npaginationHeight: undefined,
                                apaginationHeight: undefined
                            })
                        }
                    >
                        <ToolsPanelItem
                            hasValue={() => !!pgap}
                            label={__('Gap', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    pgap: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeUnitControl
                                label={__('Vertical Gap', 'rock-solid-financials')}
                                value={pgap}
                                onChange={value => setAttributes({ pgap: value })}
                            />
                        </ToolsPanelItem>
                        <ToolsPanelItem
                            hasValue={() => !!pnSize || !!paSize}
                            label={__('Sizes', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    pnSize: undefined,
                                    paSize: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeUnitControl
                                label={__('Normal Size', 'rock-solid-financials')}
                                value={pnSize}
                                onChange={value => setAttributes({ pnSize: value })}
                            />
                            <NativeUnitControl
                                label={__('Active Size', 'rock-solid-financials')}
                                value={paSize}
                                onChange={value => setAttributes({ paSize: value })}
                            />
                        </ToolsPanelItem>
                        <ToolsPanelItem
                            hasValue={() => !!npaginationHeight}
                            label={__('Height', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    npaginationHeight: undefined,
                                    apaginationHeight: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeUnitControl
                                label={__('Normal Height', 'rock-solid-financials')}
                                value={npaginationHeight}
                                onChange={value => setAttributes({ npaginationHeight: value })}
                            />
                            <NativeUnitControl
                                label={__('Active Height', 'rock-solid-financials')}
                                value={apaginationHeight}
                                onChange={value => setAttributes({ apaginationHeight: value })}
                            />
                        </ToolsPanelItem>

                        <ToolsPanelItem
                            hasValue={() => !!pRadius || !!paRadius}
                            label={__('Radius', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    pRadius: undefined,
                                    paRadius: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeUnitControl
                                label={__('Normal Radius', 'rock-solid-financials')}
                                value={pRadius}
                                onChange={value => setAttributes({ pRadius: value })}
                            />
                            <NativeUnitControl
                                label={__('Active Radius', 'rock-solid-financials')}
                                value={paRadius}
                                onChange={value => setAttributes({ paRadius: value })}
                            />
                        </ToolsPanelItem>

                        <ToolsPanelItem
                            hasValue={() => !!paginationColor}
                            label={__('Color', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    paginationColor: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <PanelColorControl
                                label={__('Color', 'rock-solid-financials')}
                                colorSettings={[
                                    {
                                        value: paginationColor,
                                        onChange: color => setAttributes({ paginationColor: color })
                                    }
                                ]}
                            />
                        </ToolsPanelItem>
                    </ToolsPanel>
                )}
                {showArrows && (
                    <ToolsPanel
                        label={__('Navigation', 'rock-solid-financials')}
                        resetAll={() =>
                            setAttributes({
                                navbgColor: undefined,
                                navColor: undefined,
                                navEdgeGap: undefined,
                                navSize: undefined,
                                navIconSize: undefined,
                                navBorderColor: undefined,
                                navBorderRadius: undefined,
                                navPadding: undefined,
                                navBorder: undefined
                            })
                        }
                    >
                        <ToolsPanelItem
                            hasValue={() => !!navEdgeGap}
                            label={__('Edge Gap', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    navEdgeGap: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeUnitControl
                                label={__('Edge Gap', 'rock-solid-financials')}
                                value={navEdgeGap}
                                onChange={value => setAttributes({ navEdgeGap: value })}
                            />
                        </ToolsPanelItem>
                        <ToolsPanelItem
                            hasValue={() => !!navSize}
                            label={__('Size', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    navSize: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeUnitControl
                                label={__('Size', 'rock-solid-financials')}
                                value={navSize}
                                onChange={value => setAttributes({ navSize: value })}
                            />
                        </ToolsPanelItem>
                        <ToolsPanelItem
                            hasValue={() => !!navIconSize}
                            label={__('Icon Size', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    navIconSize: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeUnitControl
                                label={__('Icon Size', 'rock-solid-financials')}
                                value={navIconSize}
                                onChange={value => setAttributes({ navIconSize: value })}
                            />
                        </ToolsPanelItem>
                        <ToolsPanelItem
                            hasValue={() => !!navColor || !!navbgColor || !!navBorderColor}
                            label={__('Colors', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    navColor: undefined,
                                    navbgColor: undefined,
                                    navBorderColor: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <PanelColorControl
                                label={__('Colors', 'rock-solid-financials')}
                                colorSettings={[
                                    {
                                        label: __('Color', 'rock-solid-financials'),
                                        value: navColor,
                                        onChange: color => setAttributes({ navColor: color })
                                    },
                                    {
                                        label: __('Background', 'rock-solid-financials'),
                                        value: navbgColor,
                                        onChange: color => setAttributes({ navbgColor: color })
                                    }
                                ]}
                            />
                        </ToolsPanelItem>
                        <ToolsPanelItem
                            hasValue={() => !!navBorder}
                            label={__('Border', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    navBorder: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeBorderBoxControl
                                label={__('Border', 'rock-solid-financials')}
                                value={navBorder}
                                onChange={value => setAttributes({ navBorder: value })}
                            />
                        </ToolsPanelItem>

                        <ToolsPanelItem
                            hasValue={() => !!navBorderRadius}
                            label={__('Radius', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    navBorderRadius: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeBoxControl
                                label={__('Radius', 'rock-solid-financials')}
                                value={navBorderRadius}
                                onChange={value => setAttributes({ navBorderRadius: value })}
                            />
                        </ToolsPanelItem>

                        <ToolsPanelItem
                            hasValue={() => !!navPadding}
                            label={__('Padding', 'rock-solid-financials')}
                            onDeselect={() => {
                                setAttributes({
                                    navPadding: undefined
                                });
                            }}
                            onSelect={() => {}}
                        >
                            <NativeBoxControl
                                label={__('Padding', 'rock-solid-financials')}
                                value={navPadding}
                                onChange={value => setAttributes({ navPadding: value })}
                            />
                        </ToolsPanelItem>
                    </ToolsPanel>
                )}
            </InspectorControls>
        </>
    );
};

export default Inspector;
