import React from 'react';
import { TouchableOpacity, StyleSheet, ImageStyle, StyleProp } from 'react-native';
import { FontAwesomeIcon } from '../../common/FontAwesomeIcon';

export interface NavigationTabIconProps {
    iconStyle: StyleProp<ImageStyle>;
    onPress: () => void;
    iconName: string;
    tabIndex: number | string;
    selectedIndex: number | string;
    focusedIconName?: string;
}

const styles = StyleSheet.create({
    iconWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export const NavigationTabIcon: React.FC<NavigationTabIconProps> = (props: NavigationTabIconProps) => {
    const focusedIconName = props.focusedIconName || props.iconName;
    const iconName = props.selectedIndex === props.tabIndex ? focusedIconName : props.iconName;

    return (
        <TouchableOpacity style={styles.iconWrapper} onPress={props.onPress}>
            <FontAwesomeIcon name={iconName} iconStyle={props.iconStyle} />
        </TouchableOpacity>
    );
};
