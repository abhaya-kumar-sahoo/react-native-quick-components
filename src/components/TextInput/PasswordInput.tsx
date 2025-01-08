/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  AtSymbolIcon,
} from 'react-native-heroicons/solid';

import { RowView } from '../Flex/row.col.index';
import { AppView } from '../View';
import type { TextBoxProps } from '../../types/types';

const TextInputBox: React.FC<TextBoxProps> = (props) => {
  const {
    onBlur,
    onChangeText,
    onFocus,
    onSubmitEditing,
    blurOnSubmit = false,
    returnKeyType = 'next',
    secureTextEntry = false,
    value,
    placeholder,
    placeholderTextColor = '#C5C5C5',

    _alertType,
    _iconColor = '#f3f3f3',
    _hint,
    _hintColor = '#818181',
    _hintStyles,
    _inputStyle,
    _rtl = false,
    _containerStyles,
    _inputType = 'phone',
    _iconSize = 20,
    _dividerColor = '#818181',
    _dividerWidth = 1,
    _dividerMarginLeft,
    _dividerMarginRight,
    _dividerMarginHorizontal = 2,
    _dividerHeight = 20,
  } = props;

  const [isSecure, setIsSecure] = useState(true);
  const [textValue, setTextValue] = useState(value);

  const onChange = (text: string) => {
    setTextValue(text);
    onChangeText(text);
  };

  const renderAlertIcon = () => {
    if (_alertType) {
      switch (_alertType) {
        case 'success':
          return <CheckCircleIcon color="#28a745" size={16} />;
        case 'warning':
          return <ExclamationTriangleIcon color="#ffc107" size={16} />;
        case 'error':
          return <ExclamationCircleIcon color="#dc3545" size={16} />;
        default:
          return null;
      }
    } else {
      return null;
    }
  };

  const onEyePress = () => {
    setIsSecure(!isSecure);
  };

  return (
    <>
      <RowView
        _bow={2}
        _boc="gray"
        _h={50}
        _px={5}
        _bor={10}
        style={[
          _containerStyles,
          _rtl ? styles.justifyRightInRow : styles.justifyLeftInRow,
        ]}
        {...props}
      >
        <TextInput
          style={[_inputStyle, { flex: 1 }]}
          onChangeText={onChange}
          blurOnSubmit={blurOnSubmit}
          returnKeyType={returnKeyType}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry ? isSecure : false}
          value={textValue}
          onSubmitEditing={onSubmitEditing}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <AppView
          _px={5}
          style={[_rtl ? styles.justifyLeftInRow : styles.justifyRightInRow]}
        >
          <>
            {_inputType === 'email' && (
              <AtSymbolIcon color={_iconColor} size={_iconSize} />
            )}
            {_inputType === 'user' && (
              <UserIcon color={_iconColor} size={_iconSize} />
            )}
            {_inputType === 'phone' && (
              <DevicePhoneMobileIcon color={_iconColor} size={_iconSize} />
            )}
          </>
          {_inputType === 'password' && secureTextEntry && (
            <View>
              <TouchableOpacity onPress={onEyePress} style={[styles.paddingH5]}>
                {isSecure ? (
                  <EyeSlashIcon color={_iconColor} size={_iconSize} />
                ) : (
                  <EyeIcon color={_iconColor} size={_iconSize} />
                )}
              </TouchableOpacity>
            </View>
          )}
          {secureTextEntry && _alertType && (
            <>
              <View
                style={[
                  {
                    width: _dividerWidth,
                    height: _dividerHeight,
                    backgroundColor: _dividerColor,
                    ...(_dividerMarginHorizontal
                      ? { marginHorizontal: _dividerMarginHorizontal }
                      : {
                          marginLeft: _dividerMarginLeft,
                          marginRight: _dividerMarginRight,
                        }),
                  },
                ]}
              />
              <View style={[styles.paddingH5]}>
                {renderAlertIcon() ?? <></>}
              </View>
            </>
          )}
        </AppView>
      </RowView>
      {_hint && (
        <Text style={[styles.font12, _hintStyles, { color: _hintColor }]}>
          {_hint}
        </Text>
      )}
    </>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  justifyRightInRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  justifyLeftInRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingH5: {
    paddingHorizontal: 5,
  },
  font12: {
    fontSize: 12,
  },
});
