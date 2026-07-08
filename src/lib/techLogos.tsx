import type { IconType } from 'react-icons';
import { AiFillOpenAI } from 'react-icons/ai';
import { IoLogoTableau } from 'react-icons/io5';
import {
  SiApacheairflow,
  SiApachecassandra,
  SiApachekafka,
  SiApachespark,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGooglecolab,
  SiGrafana,
  SiJupyter,
  SiLangchain,
  SiLanggraph,
  SiMatillion,
  SiNeo4J,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPrometheus,
  SiPydantic,
  SiPytest,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiScipy,
  SiSnowflake,
  SiStreamlit,
  SiSupabase,
  SiTypescript,
  SiTyper,
  SiVite,
  SiVllm,
} from 'react-icons/si';

type TechLogoEntry = {
  icons: IconType[];
};

function normalizeTechLabel(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

const techLogoMap = new Map<string, TechLogoEntry>([
  ['airflow', { icons: [SiApacheairflow] }],
  ['cassandra', { icons: [SiApachecassandra] }],
  ['docker', { icons: [SiDocker] }],
  ['docker compose', { icons: [SiDocker] }],
  ['fastapi', { icons: [SiFastapi] }],
  ['github actions', { icons: [SiGithubactions] }],
  ['google colab', { icons: [SiGooglecolab] }],
  ['grafana', { icons: [SiGrafana] }],
  ['jupyter', { icons: [SiJupyter] }],
  ['kafka', { icons: [SiApachekafka] }],
  ['langchain', { icons: [SiLangchain] }],
  ['langgraph', { icons: [SiLanggraph] }],
  ['matillion', { icons: [SiMatillion] }],
  ['neo4j', { icons: [SiNeo4J] }],
  ['numpy', { icons: [SiNumpy] }],
  ['openai', { icons: [AiFillOpenAI] }],
  ['pandas', { icons: [SiPandas] }],
  ['postgresql', { icons: [SiPostgresql] }],
  ['prometheus', { icons: [SiPrometheus] }],
  ['prometheus / grafana', { icons: [SiPrometheus, SiGrafana] }],
  ['pydantic', { icons: [SiPydantic] }],
  ['pytest', { icons: [SiPytest] }],
  ['pyspark', { icons: [SiApachespark] }],
  ['python', { icons: [SiPython] }],
  ['react', { icons: [SiReact] }],
  ['scikit-learn', { icons: [SiScikitlearn] }],
  ['scipy', { icons: [SiScipy] }],
  ['snowflake', { icons: [SiSnowflake] }],
  ['spark', { icons: [SiApachespark] }],
  ['spark dataframes', { icons: [SiApachespark] }],
  ['spark rdd', { icons: [SiApachespark] }],
  ['spark streaming', { icons: [SiApachespark] }],
  ['streamlit', { icons: [SiStreamlit] }],
  ['supabase', { icons: [SiSupabase] }],
  ['tableau', { icons: [IoLogoTableau] }],
  ['typescript', { icons: [SiTypescript] }],
  ['typer', { icons: [SiTyper] }],
  ['vite', { icons: [SiVite] }],
  ['vllm', { icons: [SiVllm] }],
]);

export function getTechLogoEntry(label: string) {
  return techLogoMap.get(normalizeTechLabel(label));
}
