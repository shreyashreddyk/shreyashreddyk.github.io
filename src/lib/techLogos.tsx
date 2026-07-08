import type { IconType } from 'react-icons';
import {
  SiApacheairflow,
  SiApachecassandra,
  SiApachekafka,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGooglecolab,
  SiGrafana,
  SiJupyter,
  SiLangchain,
  SiLanggraph,
  SiMatillion,
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

function normalizeTechLabel(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

const techLogoMap = new Map<string, IconType>([
  ['airflow', SiApacheairflow],
  ['cassandra', SiApachecassandra],
  ['docker', SiDocker],
  ['fastapi', SiFastapi],
  ['github actions', SiGithubactions],
  ['google colab', SiGooglecolab],
  ['grafana', SiGrafana],
  ['jupyter', SiJupyter],
  ['kafka', SiApachekafka],
  ['langchain', SiLangchain],
  ['langgraph', SiLanggraph],
  ['matillion', SiMatillion],
  ['numpy', SiNumpy],
  ['pandas', SiPandas],
  ['postgresql', SiPostgresql],
  ['prometheus', SiPrometheus],
  ['pydantic', SiPydantic],
  ['pytest', SiPytest],
  ['python', SiPython],
  ['react', SiReact],
  ['scikit-learn', SiScikitlearn],
  ['scipy', SiScipy],
  ['snowflake', SiSnowflake],
  ['streamlit', SiStreamlit],
  ['supabase', SiSupabase],
  ['typescript', SiTypescript],
  ['typer', SiTyper],
  ['vite', SiVite],
  ['vllm', SiVllm],
]);

export function getTechLogo(label: string) {
  return techLogoMap.get(normalizeTechLabel(label));
}
