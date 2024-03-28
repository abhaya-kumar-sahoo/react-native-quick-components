/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, } from 'react-native';
let config = {
    defaultTextColor: 'blue',
    defaultBackgroundColor: null,
    defaultFontFamily: null,
    defaultFontSize: 20,
};
export const init = (newConfig) => {
    if (newConfig.defaultTextColor) {
        config.defaultTextColor = newConfig.defaultTextColor;
    }
    if (newConfig.defaultBackgroundColor) {
        config.defaultBackgroundColor = newConfig.defaultBackgroundColor;
    }
    if (newConfig.defaultFontFamily) {
        config.defaultFontFamily = newConfig.defaultFontFamily;
    }
    if (newConfig.defaultFontSize) {
        config.defaultFontSize = newConfig.defaultFontSize;
    }
};
const applyCommonStyles = ({ FullColumnCenter, FullRowCenter, RowSpacBtw, ColumnSpacBtw, ColumnCenterStart, RowCenterStart, P, PL, PR, PT, PB, PX, PY, M, ML, MB, MT, MR, MY, MX, BOR, BOW, BOC, SIZE, W, H, C, BG, LINE_H, FONT, F_SIZE, center_me, style, }) => {
    // console.log('fontSize', F_SIZE);
    return {
        // padding
        ...(P ? { padding: P } : {}),
        ...(PL ? { paddingLeft: PL } : {}),
        ...(PR ? { paddingRight: PR } : {}),
        ...(PT ? { paddingTop: PT } : {}),
        ...(PB ? { paddingBottom: PB } : {}),
        ...(PX ? { paddingHorizontal: PX } : {}),
        ...(PY ? { paddingVertical: PY } : {}),
        // margin
        ...(M ? { margin: M } : {}),
        ...(ML ? { marginLeft: ML } : {}),
        ...(MR ? { marginRight: MR } : {}),
        ...(MT ? { marginTop: MT } : {}),
        ...(MB ? { marginBottom: MB } : {}),
        ...(MX ? { marginHorizontal: MX } : {}),
        ...(MY ? { marginVertical: MY } : {}),
        // border
        ...(BOR ? { borderRadius: BOR } : {}),
        ...(BOW ? { borderWidth: BOW, borderColor: BOC } : {}),
        //sizes
        ...(SIZE ? { width: SIZE, height: SIZE } : {}),
        ...(W ? { width: W } : {}),
        ...(H ? { height: H } : {}),
        //colors
        ...(C ? { color: C } : { color: config.defaultTextColor }),
        ...(BG
            ? { backgroundColor: BG }
            : { backgroundColor: config.defaultBackgroundColor }),
        ...(F_SIZE ? { fontSize: F_SIZE } : { fontSize: config.defaultFontSize }),
        ...(FONT ? { fontFamily: FONT } : {}),
        ...(LINE_H ? { lineHeight: LINE_H } : {}),
        //center
        ...(FullColumnCenter
            ? { justifyContent: 'center', alignItems: 'center' }
            : {}),
        ...(RowCenterStart
            ? {
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'row',
            }
            : {}),
        ...(FullRowCenter
            ? { justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }
            : {}),
        ...(RowSpacBtw
            ? {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }
            : {}),
        ...(ColumnSpacBtw
            ? { justifyContent: 'space-between', alignItems: 'center' }
            : {}),
        ...(ColumnCenterStart
            ? { justifyContent: 'center', alignItems: 'flex-start' }
            : {}),
        ...(center_me ? { alignSelf: center_me } : {}),
        //custom styles
        ...(typeof style === 'object' ? style : {}),
    };
};
export const AppText = ({ children, N_LINE = 5, ...rest // Rest props for Text component
 }) => {
    return (React.createElement(Text, { numberOfLines: N_LINE, style: applyCommonStyles(rest), ...rest }, children));
};
export const AppView = ({ children, ...rest // Rest props for Text component
 }) => {
    return (React.createElement(TouchableOpacity, { style: [applyCommonStyles(rest)], ...rest }, children));
};
export const AppImage = ({ source, resizeMode = 'contain', ...rest // Rest props for Image component
 }) => {
    return (React.createElement(Image, { source: source, resizeMode: resizeMode, style: [applyCommonStyles(rest)], ...rest }));
};
export const CircleView = ({ children, BG = 'transparent', SIZE = 50, ...rest // Rest props for Image component
 }) => {
    return (React.createElement(TouchableOpacity, { style: [
            {
                backgroundColor: BG,
                width: SIZE,
                height: SIZE,
                borderRadius: SIZE / 2,
            },
            applyCommonStyles(rest),
        ], ...rest }, children));
};
export const RowView = ({ children, ALI = 'center', JC = 'space-between', ...rest }) => {
    return (React.createElement(TouchableOpacity, { activeOpacity: 0.9, style: [
            { flexDirection: 'row', alignItems: ALI, justifyContent: JC },
            applyCommonStyles(rest),
        ], ...rest }, children));
};
export const ColumView = ({ children, ALI = 'center', JC = 'center', ...props }) => {
    return (React.createElement(View, { style: [
            { flexDirection: 'column', alignItems: ALI, justifyContent: JC },
            applyCommonStyles(props),
        ] }, children));
};
export const AbsoluteView = ({ children, T, B, L, R, ...props }) => {
    return (React.createElement(TouchableOpacity, { activeOpacity: 0.6, style: [
            true ? { position: 'absolute' } : {},
            T !== undefined ? { top: T } : {},
            B !== undefined ? { bottom: B } : {},
            L !== undefined ? { left: L } : {},
            R !== undefined ? { right: R } : {},
            applyCommonStyles(props),
        ], ...props }, children));
};
export const FlexView = ({ children, ...props }) => {
    return (React.createElement(View, { style: [{ flex: 1 }, applyCommonStyles(props)], ...props }, children));
};
export const FlexSafeView = ({ children, ...props }) => {
    return (React.createElement(SafeAreaView, { style: [{ flex: 1 }, applyCommonStyles(props)], ...props }, children));
};
