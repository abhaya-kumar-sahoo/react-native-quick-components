import React from 'react';
import { Modal } from 'react-native';
import { AppView } from '../View';
import { BoxView } from '../Box';
import { XCircleIcon, XMarkIcon } from 'react-native-heroicons/solid';
import { RowView } from '../Flex/row.col.index';
import type { AppModalProps } from '../../types/types';

const AppModal: React.FC<AppModalProps> = ({
  children,
  $onCloseModal = () => {},
  $iconColor = 'red',
  $iconSize = 20,
  transparent = true,
  $transparentColor = '#00000077',
  $boxBackgroundColor = '#54f',
  $boxHeight = 150,
  $boxWidth = 300,
  $circleCancel = false,
  $showCancelIcon = true,
  $containerStyle = {},
  $boxStyles = {},
  ...props
}) => {
  return (
    <Modal transparent={transparent} {...props}>
      <AppView
        $center
        $mb={60}
        $flex={1}
        $bg={$transparentColor}
        style={[$containerStyle]}
      >
        <BoxView
          $w={$boxWidth}
          $h={$boxHeight}
          $bg={$boxBackgroundColor}
          $bor={10}
          style={$boxStyles}
        >
          {$showCancelIcon && (
            <RowView $pr={6} $pt={6} onPress={$onCloseModal}>
              <AppView />
              {$circleCancel ? (
                <XCircleIcon color={$iconColor} size={$iconSize} />
              ) : (
                <XMarkIcon color={$iconColor} size={$iconSize} />
              )}
            </RowView>
          )}
          {children}
        </BoxView>
      </AppView>
    </Modal>
  );
};

export default AppModal;
