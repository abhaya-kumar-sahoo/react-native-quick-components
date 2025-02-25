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
    $alertType,
    $iconColor = '#f3f3f3',
    $hint,
    $hintColor = '#818181',
    $hintStyles,
    $inputStyle,
    $rtl = false,
    $containerStyles,
    $inputType = 'phone',
    $iconSize = 20,
    $dividerColor = '#818181',
    $dividerWidth = 1,
    $dividerMarginLeft,
    $dividerMarginRight,
    $dividerMarginHorizontal = 2,
    $dividerHeight = 20,
    ...rest
  } = props;

  const [isSecure, setIsSecure] = useState(true);
  const [textValue, setTextValue] = useState(value);

  const onChange = (text: string) => {
    setTextValue(text);
    onChangeText(text);
  };

  const renderAlertIcon = () => {
    if ($alertType) {
      switch ($alertType) {
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
        $bow={2}
        $boc="gray"
        $h={50}
        $px={5}
        $bor={10}
        style={[
          $containerStyles,
          $rtl ? styles.justifyRightInRow : styles.justifyLeftInRow,
        ]}
      >
        <TextInput
          style={[$inputStyle, { flex: 1 }]}
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
          {...rest}
        />
        <AppView
          $px={5}
          style={[$rtl ? styles.justifyLeftInRow : styles.justifyRightInRow]}
        >
          <>
            {$inputType === 'email' && (
              <AtSymbolIcon color={$iconColor} size={$iconSize} />
            )}
            {$inputType === 'user' && (
              <UserIcon color={$iconColor} size={$iconSize} />
            )}
            {$inputType === 'phone' && (
              <DevicePhoneMobileIcon color={$iconColor} size={$iconSize} />
            )}
          </>
          {$inputType === 'password' && secureTextEntry && (
            <View>
              <TouchableOpacity onPress={onEyePress} style={[styles.paddingH5]}>
                {isSecure ? (
                  <EyeSlashIcon color={$iconColor} size={$iconSize} />
                ) : (
                  <EyeIcon color={$iconColor} size={$iconSize} />
                )}
              </TouchableOpacity>
            </View>
          )}
          {secureTextEntry && $alertType && (
            <>
              <View
                style={[
                  {
                    width: $dividerWidth,
                    height: $dividerHeight,
                    backgroundColor: $dividerColor,
                    ...($dividerMarginHorizontal
                      ? { marginHorizontal: $dividerMarginHorizontal }
                      : {
                          marginLeft: $dividerMarginLeft,
                          marginRight: $dividerMarginRight,
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
      {$hint && (
        <Text style={[styles.font12, $hintStyles, { color: $hintColor }]}>
          {$hint}
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
