import { Text, View } from 'react-native';
import useColorScheme from '@/hooks/useColorScheme';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import { createStyles } from './Home.styles';

export default function Home() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const styles = createStyles();

  return (
    <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
      <Text style={[styles.title, isDark && { color: colors.gray }]}>Prof. Haufe</Text>
      <Button
        title="Detalhes"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={() =>
          router.push({ pathname: '(main)/(tabs)/home/details', params: { from: 'Home' } })
        }
      />
    </View>
  );
}
