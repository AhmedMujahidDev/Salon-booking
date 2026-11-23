export function loadEnv(env = process.env) {
  for (const key of ["MONGO_URI", "JWT_SECRET", "OTP_SECRET"]) {
    if (!env[key] || (key !== "MONGO_URI" && env[key].length < 32))
      throw new Error(`Configure ${key} in .env`);
  }
  const configuredOrigins =
    env.FRONTEND_ORIGINS ||
    (env.NODE_ENV === "production"
      ? ""
      : "http://localhost:5173,http://127.0.0.1:5173");
  const frontendOrigins = configuredOrigins
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  if (env.NODE_ENV === "production" && frontendOrigins.length === 0)
    throw new Error("Configure FRONTEND_ORIGINS in .env");

  return {
    mongoUri: env.MONGO_URI,
    jwtSecret: env.JWT_SECRET,
    otpSecret: env.OTP_SECRET,
    port: Number(env.PORT || 4000),
    frontendOrigins,
  };
}