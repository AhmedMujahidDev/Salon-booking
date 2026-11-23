import api from "../lib/axios";

export const signup = async (userData) => {
  const { data } = await api.post("/auth/signup", userData);
  return data;
};

export const verifyOtp = async (otpData) => {
  const { data } = await api.post("/auth/verify", otpData);
  return data;
};

export const resendOtp = async (email) => {
  const { data } = await api.post("/auth/resend", { email });
  return data;
};

export const login = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};

export const verifyLoginOtp = async (otpData) => {
  const { data } = await api.post("/auth/verify-login-otp", otpData);
  return data.data;
};

export const forgotPassword = async (email) => {
  const { data } = await api.post("/auth/forgot-password", { email });
  return data;
};

export const resetPassword = async (resetData) => {
  const { data } = await api.post("/auth/reset-password", resetData);
  return data;
};

export const getCurrentUser = async (token) => {
  const { data } = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data.User;
};

export const logout = async (token) => {
  const { data } = await api.post(
    "/auth/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
