import { StyleSheet, ScrollView, View } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Avatar, Divider, List, Surface, Text, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import useColorScheme from '@/hooks/useColorScheme';
import { colors } from '@/theme';

type DrawerContentsProps = DrawerContentComponentProps;

type DrawerMenuItem = {
  title: string;
  description: string;
  icon: string;
  pathname: string;
};

type DrawerActionItem = {
  title: string;
  icon: string;
  destructive?: boolean;
};

const menuItems: DrawerMenuItem[] = [
  {
    title: 'Início',
    description: 'Dashboard com cards, métricas e exemplos',
    icon: 'home-outline',
    pathname: '(main)/(tabs)/home',
  },
  {
    title: 'Perfil',
    description: 'Área de perfil do usuário',
    icon: 'account-circle-outline',
    pathname: '(main)/(tabs)/profile',
  },
  {
    title: 'Detalhes',
    description: 'Tela de detalhes da Home',
    icon: 'text-box-search-outline',
    pathname: '(main)/(tabs)/home/details',
  },
];

const actionItems: DrawerActionItem[] = [
  {
    title: 'Sobre o app',
    icon: 'information-outline',
  },
  {
    title: 'Configurações',
    icon: 'cog-outline',
  },
  {
    title: 'Ajuda e suporte',
    icon: 'help-circle-outline',
  },
  {
    title: 'Logout',
    icon: 'logout',
    destructive: true,
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    gap: 20,
  },
  header: {
    borderRadius: 8,
    padding: 16,
  },
  headerContent: {
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    alignItems: 'center',
  },
  appName: {
    fontWeight: '700',
    marginBottom: 2,
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 8,
  },
  menuGroup: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  menuItem: {
    paddingVertical: 2,
  },
  summary: {
    borderRadius: 8,
    padding: 16,
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  summaryNumber: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryText: {
    flex: 1,
  },
  footer: {
    gap: 4,
  },
  actionsGroup: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default function DrawerContents({ navigation }: DrawerContentsProps) {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const backgroundColor = isDark ? colors.blackGray : colors.lightGray;
  const cardColor = isDark ? colors.black : colors.white;
  const textColor = isDark ? colors.white : colors.black;
  const mutedColor = isDark ? colors.gray : colors.gray;
  const accentColor = isDark ? colors.pink : colors.magent;

  function navigateTo(pathname: string) {
    navigation.closeDrawer();
    router.push({ pathname, params: { from: 'Menu lateral' } });
  }

  function handleActionPress() {
    navigation.closeDrawer();
  }

  return (
    <SafeAreaView style={[styles.root, { backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Surface style={[styles.header, { backgroundColor: cardColor }]} elevation={1}>
          <View style={styles.headerContent}>
            <Avatar.Icon size={56} icon="school" style={{ backgroundColor: accentColor }} />

            <View style={styles.headerText}>
              <Text variant="titleMedium" style={[styles.appName, { color: textColor }]}>
                Modelo de App
              </Text>

              <Text variant="bodySmall" style={{ color: mutedColor, textAlign: 'center' }}>
                Base React Native Expo para TCC
              </Text>
            </View>
          </View>
        </Surface>

        <View>
          <Text variant="titleSmall" style={[styles.sectionTitle, { color: textColor }]}>
            Navegação
          </Text>

          <Surface style={[styles.menuGroup, { backgroundColor: cardColor }]} elevation={1}>
            {menuItems.map((item, index) => (
              <View key={item.title}>
                <TouchableRipple onPress={() => navigateTo(item.pathname)}>
                  <List.Item
                    title={item.title}
                    description={item.description}
                    left={props => <List.Icon {...props} icon={item.icon} color={accentColor} />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    titleStyle={{ color: textColor }}
                    descriptionStyle={{ color: mutedColor }}
                    style={styles.menuItem}
                  />
                </TouchableRipple>

                {index < menuItems.length - 1 && <Divider />}
              </View>
            ))}
          </Surface>
        </View>

        <Surface style={[styles.summary, { backgroundColor: cardColor }]} elevation={1}>
          <Text variant="titleSmall" style={[styles.sectionTitle, { color: textColor }]}>
            Resumo do projeto
          </Text>

          <View style={styles.summaryRow}>
            <View style={[styles.summaryNumber, { backgroundColor: accentColor }]}>
              <Text variant="titleMedium" style={{ color: colors.white }}>
                12
              </Text>
            </View>

            <View style={styles.summaryText}>
              <Text variant="bodyMedium" style={{ color: textColor }}>
                Componentes prontos para reaproveitar
              </Text>
              <Text variant="bodySmall" style={{ color: mutedColor }}>
                Cards, filtros, modal, snackbar e navegação
              </Text>
            </View>
          </View>

          <View style={styles.summaryRow}>
            <View style={[styles.summaryNumber, { backgroundColor: colors.purple }]}>
              <Text variant="titleMedium" style={{ color: colors.white }}>
                3
              </Text>
            </View>

            <View style={styles.summaryText}>
              <Text variant="bodyMedium" style={{ color: textColor }}>
                Módulos de exemplo
              </Text>
              <Text variant="bodySmall" style={{ color: mutedColor }}>
                Chamadas, protótipo e gestão de TCC
              </Text>
            </View>
          </View>
        </Surface>

        <View style={styles.footer}>
          <Text variant="titleSmall" style={[styles.sectionTitle, { color: textColor }]}>
            Conta e app
          </Text>

          <Surface style={[styles.actionsGroup, { backgroundColor: cardColor }]} elevation={1}>
            {actionItems.map((item, index) => {
              const itemColor = item.destructive ? colors.magent : textColor;
              const iconColor = item.destructive ? colors.magent : accentColor;

              return (
                <View key={item.title}>
                  <TouchableRipple onPress={handleActionPress}>
                    <List.Item
                      title={item.title}
                      left={props => <List.Icon {...props} icon={item.icon} color={iconColor} />}
                      titleStyle={{ color: itemColor }}
                    />
                  </TouchableRipple>

                  {index < actionItems.length - 1 && <Divider />}
                </View>
              );
            })}
          </Surface>

          <Text variant="labelLarge" style={{ color: textColor }}>
            Expo SDK 54
          </Text>
          <Text variant="bodySmall" style={{ color: mutedColor }}>
            React Native, Expo Router e Redux Toolkit
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
