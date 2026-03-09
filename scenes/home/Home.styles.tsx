import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const createStyles = (isDark: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDark ? '#0F1115' : '#F5F7FB',
        },

        content: {
            padding: 16,
            paddingBottom: 120,
        },

        topBar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
        },

        greeting: {
            opacity: 0.7,
            marginBottom: 4,
            color: isDark ? '#E8E8E8' : '#333333',
        },

        pageTitle: {
            fontWeight: '700',
            color: isDark ? '#FFFFFF' : '#111111',
        },

        heroCard: {
            borderRadius: 28,
            padding: 20,
            marginBottom: 18,
            backgroundColor: isDark ? '#171A21' : '#FFFFFF',
        },

        heroHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            marginBottom: 18,
        },

        heroTextBlock: {
            flex: 1,
        },

        heroTitle: {
            fontWeight: '800',
            marginBottom: 10,
            lineHeight: 34,
            color: isDark ? '#FFFFFF' : '#111111',
        },

        heroSubtitle: {
            lineHeight: 22,
            color: isDark ? '#CFCFCF' : '#555555',
        },

        heroAvatar: {
            marginTop: 4,
        },

        heroChips: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 18,
        },

        chip: {
            backgroundColor: colors.lightGray
        },

        heroActions: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 12,
        },

        metricsRow: {
            flexDirection: 'row',
            gap: 10,
            marginBottom: 18,
        },

        metricCard: {
            flex: 1,
            borderRadius: 20,
            backgroundColor: isDark ? '#171A21' : '#FFFFFF',
        },

        metricNumber: {
            fontWeight: '800',
            marginBottom: 4,
            color: isDark ? '#FFFFFF' : '#111111',
        },

        searchCard: {
            borderRadius: 22,
            marginBottom: 18,
            backgroundColor: isDark ? '#171A21' : '#FFFFFF',
        },

        searchbar: {
            marginTop: 8,
            marginBottom: 14,
            borderRadius: 16,
        },

        segmented: {
            marginTop: 4,
        },

        sectionTitle: {
            fontWeight: '700',
            marginBottom: 12,
            color: isDark ? '#FFFFFF' : '#111111',
        },

        projectCard: {
            borderRadius: 22,
            marginBottom: 14,
            backgroundColor: isDark ? '#171A21' : '#FFFFFF',
        },

        projectDescription: {
            lineHeight: 21,
            marginBottom: 12,
            color: isDark ? '#CFCFCF' : '#555555',
        },

        progressInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
        },

        progressBar: {
            height: 10,
            borderRadius: 999,
            marginBottom: 4,
        },

        gridRow: {
            gap: 14,
            marginTop: 6,
            marginBottom: 14,
        },

        gridCard: {
            borderRadius: 22,
            backgroundColor: isDark ? '#171A21' : '#FFFFFF',
        },

        techWrap: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
        },

        activityCard: {
            borderRadius: 22,
            marginBottom: 18,
            backgroundColor: isDark ? '#171A21' : '#FFFFFF',
        },

        ctaBox: {
            borderRadius: 26,
            padding: 15,
            backgroundColor: isDark ? '#1D2230' : '#EAF2FF',
        },

        ctaTitle: {
            fontWeight: '800',
            marginBottom: 10,
            color: isDark ? '#FFFFFF' : '#111111',
        },

        ctaText: {
            lineHeight: 22,
            marginBottom: 16,
            color: isDark ? '#D0D0D0' : '#4E5563',
        },

        ctaActions: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 12,
        },

        modalContainer: {
            margin: 20,
            padding: 22,
            borderRadius: 24,
            backgroundColor: isDark ? '#171A21' : '#FFFFFF',
        },

        modalTitle: {
            fontWeight: '800',
            marginBottom: 12,
            color: isDark ? '#FFFFFF' : '#111111',
        },

        modalText: {
            lineHeight: 22,
            marginBottom: 12,
            color: isDark ? '#CFCFCF' : '#555555',
        },

        fab: {
            position: 'absolute',
            right: 16,
            bottom: 16,
        },

        bottomSpace: {
            height: 20,
        },
    });