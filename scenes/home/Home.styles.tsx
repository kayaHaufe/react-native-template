import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const createStyles = () =>
    StyleSheet.create({
        root: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.transparent,
        },
        title: {
            fontSize: 24,
            marginBottom: 20,
        },
        buttonTitle: {
            fontSize: 16,
            color: colors.white,
            textAlign: 'center',
        },
        button: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 22,
            backgroundColor: colors.black,
            height: 44,
            width: '50%',
        },
    });
