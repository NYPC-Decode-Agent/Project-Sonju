import "express-session";

declare module "express-session" {
  interface SessionData {
    userId?: number; // 필요한 속성 추가
  }
}
export interface IConfig {
  REDIS: {
    USER: string;
    PASSWORD: string;
    HOST: string;
    PORT: number;
  };

  MY_SQL: {
    PORT: number;
    HOST: string;
    USER: string;
    PASSWORD: string;
    DATABASE: string;
    TIMEZONE: string;
  };

  MAIN_SERVER: {
    PORT: number;
    CORS_WHITELIST: string[];
    SESSION: {
      SECRET: string;
      SECURE: boolean;
    };
  };

  CRON_SERVER: {
    TIME_ZONE: string;
  };
}

export interface ICb {
  (err: Error | null): void;
}
export interface ICb1<T> {
  (err: Error | null, result: T): void;
}
