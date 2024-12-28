interface EnvConfig {
  TOTAL_VIDEOS: number;
}

const envConfig: EnvConfig = {
  TOTAL_VIDEOS: parseInt(import.meta.env.VITE_TOTAL_VIDEOS || '4'),
}

export default envConfig;