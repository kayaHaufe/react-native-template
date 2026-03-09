import React, { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  FAB,
  IconButton,
  List,
  Menu,
  Modal,
  Portal,
  ProgressBar,
  Searchbar,
  SegmentedButtons,
  Snackbar,
  Surface,
  Text,
} from 'react-native-paper';

import useColorScheme from '@/hooks/useColorScheme';
import { createStyles } from './Home.styles';

type ProjectCard = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  progress: number;
};

export default function Home() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const styles = useMemo(() => createStyles(isDark), [isDark]);

  const [searchQuery, setSearchQuery] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [segment, setSegment] = useState('todos');

  const projects: ProjectCard[] = [
    {
      title: 'App de Chamadas',
      subtitle: 'Projeto exemplo',
      description: 'Presença de alunos com filtros, histórico e painel do professor.',
      icon: 'account-check',
      progress: 0.55,
    },
    {
      title: 'Protótipo',
      subtitle: 'Projeto exemplo',
      description: 'Telas do aplicativo',
      icon: 'book-education',
      progress: 1,
    },
    {
      title: 'Gestão de TCC',
      subtitle: 'Projeto exemplo',
      description: 'Acompanhamento de etapas, entregas, orientação e banca.',
      icon: 'clipboard-text',
      progress: 0.92,
    },
  ];

  const filteredProjects = projects.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (segment === 'todos') return matchesSearch;
    if (segment === 'andamento') return matchesSearch && item.progress < 1;
    if (segment === 'concluidos') return matchesSearch && item.progress == 1;

    return matchesSearch;
  });

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <View>
            <Text variant="headlineSmall" style={styles.pageTitle}>
              Modelo de App para TCC
            </Text>
          </View>

          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <IconButton
                icon="dots-vertical"
                size={24}
                onPress={() => setMenuVisible(true)}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                setMenuVisible(false);
                setModalVisible(true);
              }}
              title="Sobre o projeto"
              leadingIcon="information-outline"
            />
            <Menu.Item
              onPress={() => {
                setMenuVisible(false);
                setSnackbarVisible(true);
              }}
              title="Mostrar aviso"
              leadingIcon="bell-outline"
            />
          </Menu>
        </View>

        <Surface style={styles.heroCard} elevation={2}>
          <View style={styles.heroHeader}>
            <View style={styles.heroTextBlock}>
              <Text variant="headlineMedium" style={styles.heroTitle}>
                Prof. Haufe
              </Text>

              <Text variant="bodyLarge" style={styles.heroSubtitle}>
                Exemplos de uso: cards, métricas, listas, busca, modal,
                snackbar, menu e muito mais.
              </Text>
            </View>

            <Avatar.Icon size={72} icon="school" style={styles.heroAvatar} />
          </View>

          <View style={styles.heroChips}>
            <Chip icon="cellphone" style={styles.chip}>Mobile</Chip>
            <Chip icon="palette" style={styles.chip}>UI</Chip>
            <Chip icon="database" style={styles.chip}>Dados</Chip>
          </View>

          <View style={styles.heroActions}>
            <Button
              mode="contained"
              icon="rocket-launch-outline"
              onPress={() =>
                router.push({
                  pathname: '(main)/(tabs)/home/details',
                  params: { from: 'Home' },
                })
              }
            >
              Explorar detalhes
            </Button>

            <Button mode="outlined" icon="lightbulb-on-outline" onPress={() => setModalVisible(true)}>
              Abrir um modal
            </Button>
          </View>
        </Surface>

        <View style={styles.metricsRow}>
          <Card style={styles.metricCard} mode="contained">
            <Card.Content>
              <Text variant="titleLarge" style={styles.metricNumber}>
                12
              </Text>
              <Text variant="bodyMedium">Componentes usados</Text>
            </Card.Content>
          </Card>

          <Card style={styles.metricCard} mode="contained">
            <Card.Content>
              <Text variant="titleLarge" style={styles.metricNumber}>
                3
              </Text>
              <Text variant="bodyMedium">Projetos exemplo</Text>
            </Card.Content>
          </Card>

          <Card style={styles.metricCard} mode="contained">
            <Card.Content>
              <Text variant="titleLarge" style={styles.metricNumber}>
                95%
              </Text>
              <Text variant="bodyMedium">Base pronta</Text>
            </Card.Content>
          </Card>
        </View>

        <Card style={styles.searchCard}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Busca e filtros
            </Text>

            <Searchbar
              placeholder="Buscar projeto, módulo ou ideia..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchbar}
            />

            <SegmentedButtons
              value={segment}
              onValueChange={setSegment}
              buttons={[
                { value: 'todos', label: 'Todos' },
                { value: 'andamento', label: 'Andamento' },
                { value: 'concluidos', label: 'Concluídos' },
              ]}
              style={styles.segmented}
            />
          </Card.Content>
        </Card>

        <Text variant="titleLarge" style={styles.sectionTitle}>
          Módulos de Exemplo
        </Text>

        {filteredProjects.map((item) => (
          <Card key={item.title} style={styles.projectCard} mode="elevated">
            <Card.Title
              title={item.title}
              subtitle={item.subtitle}
              left={(props) => <Avatar.Icon {...props} icon={item.icon} />}
              right={(props) => <IconButton {...props} icon="star-outline" />}
            />

            <Card.Content>
              <Text variant="bodyMedium" style={styles.projectDescription}>
                {item.description}
              </Text>

              <View style={styles.progressInfo}>
                <Text variant="bodySmall">Progresso do modelo</Text>
                <Text variant="bodySmall">{Math.round(item.progress * 100)}%</Text>
              </View>

              <ProgressBar progress={item.progress} style={styles.progressBar} />
            </Card.Content>

            <Card.Actions>
              <Button mode="text">Visualizar</Button>
              <Button
                mode="contained-tonal"
                onPress={() => setSnackbarVisible(true)}
              >
                Usar ideia
              </Button>
            </Card.Actions>
          </Card>
        ))}

        <View style={styles.gridRow}>
          <Card style={styles.gridCard}>
            <Card.Content>
              <Text variant="titleMedium" style={styles.sectionTitle}>
                Etapas do projeto
              </Text>

              <List.Item
                title="Levantamento de requisitos"
                description="Entender o que o sistema precisa fazer"
                left={(props) => <List.Icon {...props} icon="clipboard-text-outline" />}
              />
              <Divider />
              <List.Item
                title="Protótipo das telas"
                description="Planejar a experiência do usuário"
                left={(props) => <List.Icon {...props} icon="draw" />}
              />
              <Divider />
              <List.Item
                title="Banco de dados"
                description="Modelar entidades, atributos e relacionamentos"
                left={(props) => <List.Icon {...props} icon="database-outline" />}
              />
              <Divider />
              <List.Item
                title="Desenvolvimento"
                description="Construir telas, regras e integração"
                left={(props) => <List.Icon {...props} icon="laptop" />}
              />
            </Card.Content>
          </Card>

          <Card style={styles.gridCard}>
            <Card.Content>
              <Text variant="titleMedium" style={styles.sectionTitle}>
                Tecnologias sugeridas
              </Text>

              <View style={styles.techWrap}>
                <Chip icon="react">React Native</Chip>
                <Chip icon="palette-outline">Paper</Chip>
                <Chip icon="state-machine">Fastify</Chip>
                <Chip icon="api">API REST</Chip>
              </View>
            </Card.Content>
          </Card>
        </View>

        <Card style={styles.activityCard}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Atividades recentes (campos estáticos)
            </Text>

            <List.Item
              title="Tela de login atualizada"
              description="Hoje às 19:30"
              left={(props) => <List.Icon {...props} icon="login" />}
            />
            <Divider />
            <List.Item
              title="Banco de dados revisado"
              description="Ontem às 21:10"
              left={(props) => <List.Icon {...props} icon="database-edit-outline" />}
            />
            <Divider />
            <List.Item
              title="Cards do dashboard finalizados"
              description="2 dias atrás"
              left={(props) => <List.Icon {...props} icon="view-dashboard-outline" />}
            />
          </Card.Content>
        </Card>

        <Surface style={styles.ctaBox} elevation={1}>
          <Text variant="headlineSmall" style={styles.ctaTitle}>
            Pronto para transformar isso em um TCC?
          </Text>
        </Surface>

      </ScrollView>

      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContainer}
        >
          <Text variant="headlineSmall" style={styles.modalTitle}>
            Sobre esta Home
          </Text>

          <Text variant="bodyMedium" style={styles.modalText}>
            Modal aberto.
          </Text>

          <Text variant="bodyMedium" style={styles.modalText}>
            Exemplo de uso.
          </Text>

          <Button mode="contained" onPress={() => setModalVisible(false)}>
            Fechar
          </Button>
        </Modal>
      </Portal>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2500}
        action={{
          label: 'OK',
          onPress: () => setSnackbarVisible(false),
        }}
      >
        Exemplo de Snackbar funcionando.
      </Snackbar>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setSnackbarVisible(true)}
      />
    </>
  );
}