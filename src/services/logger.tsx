import { transports, createLogger, format } from "winston";

export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "hh:mm:ss A" }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    ...(process.env.NODE_ENV !== "production"
      ? [
          new transports.Console({
            level: "info",
          }),
        ]
      : []),
  ],
});
