import React from 'react';
import { Modal } from 'react-native';
import { AppView } from '../View';
import { BoxView } from '../Box';
import { XCircleIcon, XMarkIcon } from 'react-native-heroicons/solid';
import { RowView } from '../Flex/row.col.index';
import type { AppModalProps } from '../../types/types';

const AppModal: React.FC<AppModalProps> = ({
  children,
  _onCloseModal = () => {},
  _iconColor = 'red',
  _iconSize = 20,
  transparent = true,
  _transparentColor = '#00000077',
  _boxBackgroundColor = '#54f',
  _boxHeight = 150,
  _boxWidth = 300,
  _circleCancel = false,
  _showCancelIcon = true,
  _containerStyle = {},
  _boxStyles = {},
  ...props
}) => {
  return (
    <Modal transparent={transparent} {...props}>
      <AppView
        _center
        _mb={60}
        _flex={1}
        _bg={_transparentColor}
        style={[_containerStyle]}
      >
        <BoxView
          _w={_boxWidth}
          _h={_boxHeight}
          _bg={_boxBackgroundColor}
          _bor={10}
          style={_boxStyles}
        >
          {_showCancelIcon && (
            <RowView _pr={6} _pt={6} onPress={_onCloseModal}>
              <AppView />
              {_circleCancel ? (
                <XCircleIcon color={_iconColor} size={_iconSize} />
              ) : (
                <XMarkIcon color={_iconColor} size={_iconSize} />
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
